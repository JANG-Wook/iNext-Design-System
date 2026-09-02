// iNext Design System — 토큰 빌드 생성기
// DTCG(primitive.json + semantic.light/dark.json) → tokens.css + tokens.js 자동 생성.
//   - 별칭 {color.gray.900} 해석, base+alpha 합성(rgba), dimension {value,unit}→"16px", shadow 조립
//   - 색 semantic 은 라이트/다크 3중 셀렉터로, 나머지(테마 무관)는 :root 1회
//   - 변수명은 kebab
// 사용: node tokens/build.mjs   (JSON 이 단일 원본, css/js 는 산출물이니 직접 편집 금지)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR = path.dirname(fileURLToPath(import.meta.url))
const NS  = 'net.infobank.ds.alpha'
// ── 구성(composition) ─────────────────────────────────────────────
// DTCG Resolver Module 2025.10 의 sets / modifiers / resolutionOrder 개념만 차용한다.
// resolver 파일은 두지 않는다 — 그쪽은 Candidate Recommendation 이고 읽는 도구도 없다.
// 필요해지면 이 객체를 그대로 직렬화하면 되므로 미루는 대가가 없다(DECISIONS 0-9).
// **새 소스 JSON 을 만들면 여기에 등록한다.** 등록하지 않으면 빌드가 실패한다.
const COMPOSITION = {
  sets:      { base: ['primitive.json', 'typography.json'] },
  modifiers: { theme: { light: ['semantic.light.json'], dark: ['semantic.dark.json'] } },
  resolutionOrder: ['sets.base', 'modifiers.theme'],
}
const THEMES = Object.keys(COMPOSITION.modifiers.theme)
function listSources(){
  const out = new Set()
  for (const files of Object.values(COMPOSITION.sets)) files.forEach(f => out.add(f))
  for (const mod of Object.values(COMPOSITION.modifiers))
    for (const files of Object.values(mod)) files.forEach(f => out.add(f))
  return [...out]
}
// 디스크 ↔ COMPOSITION 양방향 검사. 소스를 추가하고 등록을 잊는 사고를 막는다.
function assertCompositionCoversSources(){
  const declared = new Set(listSources())
  for (const f of fs.readdirSync(DIR).filter(f => f.endsWith('.json')))
    if (!declared.has(f)) throw new Error(`소스 ${f} 가 COMPOSITION 에 등록되지 않았다 — 번들·가드에서 누락된다`)
  for (const f of declared)
    if (!fs.existsSync(`${DIR}/${f}`)) throw new Error(`COMPOSITION 이 참조하는 ${f} 가 없다`)
  return declared.size
}
const srcCount = assertCompositionCoversSources()
const SRC = Object.fromEntries(listSources().map(f => [f, JSON.parse(fs.readFileSync(`${DIR}/${f}`))]))
const prim = SRC['primitive.json']
const L    = SRC['semantic.light.json']
const D    = SRC['semantic.dark.json']
const TYPO = SRC['typography.json'] ?? null

// ── 값 해석 ────────────────────────────────────────────────────────
const h2r = h => { const n = parseInt(h.slice(1),16); return [n>>16&255, n>>8&255, n&255] }
// 색 $value 는 2025.10 형식의 객체({colorSpace,components,hex}). 합성·출력은 hex 폴백을 쓴다.
const hexOf = v => (v && typeof v === 'object' && typeof v.hex === 'string') ? v.hex : v
const primColorHex = ref => { const p = ref.slice(1,-1).split('.'); return hexOf(prim.color[p[1]][p[2]].$value) }
// primitive 내부 별칭 해석 — 같은 스케일이 두 곳에 살지 않도록, 상위 그룹이 원시 스케일을
// {opacity.5} 처럼 참조할 수 있게 한다. 색·그림자는 별도 경로(primColorHex)로 처리한다.
const ALIAS = /^\{[^{}]+\}$/
const primNode = ref => ref.slice(1,-1).split('.').reduce((o,k) => {
  if (o == null || o[k] === undefined) throw new Error(`primitive 별칭 ${ref} 를 찾을 수 없다`)
  return o[k] }, prim)
function deref(t){
  let cur = t
  for (let i = 0; ALIAS.test(cur.$value); i++){
    if (i > 8) throw new Error(`primitive 별칭이 순환한다: ${t.$value}`)
    cur = primNode(cur.$value)
  }
  return cur
}
// 알파 참조는 {opacity.N} 을 직접 가리키거나, 그 별칭을 들고 있는 토큰
// ({interaction.opacity.normal.hovered}) 을 가리킬 수 있다. 어느 쪽이든 끝까지 따라가
// 숫자를 얻는다 — 강도 사다리가 opacity 한 곳에만 살게 하려는 것이다(DECISIONS 0-5).
function opacityVal(ref){
  const v = deref(primNode(ref)).$value
  if (typeof v !== 'number') throw new Error(`알파 참조 ${ref} 가 숫자로 풀리지 않는다`)
  return v
}
function colorVal(t){
  const raw = t.$value
  const hex = (typeof raw === 'string' && raw.startsWith('{')) ? primColorHex(raw) : hexOf(raw)
  if (t.$extensions && t.$extensions[NS]){
    const a = opacityVal(t.$extensions[NS]); const [r,g,b] = h2r(hex)
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }
  return hex
}
function valueOf(t){
  if (t.$type === 'color')       return colorVal(t)
  if (t.$type === 'dimension')   { const v = deref(t).$value; return `${v.value}${v.unit}` }
  // duration 은 dimension 과 값 형태가 같다({value, unit}) — 단위만 ms·s 로 다르다(스펙 8.5).
  if (t.$type === 'duration')    { const v = deref(t).$value; return `${v.value}${v.unit}` }
  // cubicBezier 는 [P1x,P1y,P2x,P2y] 4수 배열이다(스펙 8.6).
  if (t.$type === 'cubicBezier'){
    const v = deref(t).$value
    if (!Array.isArray(v) || v.length !== 4 || v.some(n => typeof n !== 'number'))
      throw new Error(`cubicBezier 는 숫자 4개 배열이어야 한다(스펙 8.6): ${JSON.stringify(v)}`)
    if (v[0] < 0 || v[0] > 1 || v[2] < 0 || v[2] > 1)
      throw new Error(`cubicBezier 의 x 좌표는 [0,1] 이어야 한다(스펙 8.6): ${JSON.stringify(v)}`)
    return `cubic-bezier(${v.join(', ')})`
  }
  if (t.$type === 'number' || t.$type === 'fontWeight') return String(deref(t).$value)
  if (t.$type === 'fontFamily')  return t.$value.map(n => /\s/.test(n) ? `'${n}'` : n).join(', ')
  if (t.$type === 'shadow'){
    // 색은 base 별칭 + alpha(opacity 참조)로 둔다. alpha 는 문자열(전 레이어 공통) 또는
    // 레이어 수만큼의 배열. 별칭이 아니면 값 그대로 쓴다(구버전 호환).
    const ls = Array.isArray(t.$value) ? t.$value : [t.$value]
    const ax = t.$extensions && t.$extensions[NS]
    const alphaOf = i => {
      if (!ax) return null
      const ref = Array.isArray(ax) ? ax[i] : ax
      if (ref === undefined) throw new Error(`shadow alpha 배열 길이가 레이어 수와 다름`)
      return opacityVal(ref)
    }
    return ls.map((l,i) => {
      let color = l.color
      if (typeof color === 'string' && color.startsWith('{')){
        const hex = primColorHex(color); const a = alphaOf(i)
        const [r,g,b] = h2r(hex)
        color = a == null ? hex : `rgba(${r}, ${g}, ${b}, ${a})`
      }
      return `${l.offsetX.value}px ${l.offsetY.value}px ${l.blur.value}px ${l.spread.value}px ${color}`
    }).join(', ')
  }
  return t.$value                // 타입 없음 = 문자열(ratio/gradient)
}
const isLeaf = v => v && typeof v === 'object' && v.$value !== undefined
function walk(obj, base, cb){
  for (const [k,v] of Object.entries(obj)){
    if (k.startsWith('$')) continue
    if (isLeaf(v)) cb(base.concat(k), v)
    else if (v && typeof v === 'object') walk(v, base.concat(k), cb)
  }
}

// ── CSS 변수명(kebab) ─────────────────────────────────────────────
const kebab = seg => /^[0-9]+$/.test(seg) ? seg
  : seg.replace(/([a-z])([0-9]+)/g,'$1-$2').replace(/([A-Z]+)/g,m=>'-'+m.toLowerCase()).replace(/\./g,'-').replace(/^-/,'')
function cssVar(pathArr){
  return '--' + pathArr.map(kebab).join('-')
}

// ── CSS 생성 ───────────────────────────────────────────────────────
// shadow 는 테마별 색을 쓰므로 primitive 가 아니라 semantic 에 있다(아래 semLines 참조).
const NONCOLOR = ['fontFamily','fontWeight','fontSize','lineHeight','letterSpacing','spacing','radius','ratio','gradient','interaction','divider','focusRing','duration','cubicBezier','zIndex','breakpoint','layout','safeArea','opacity']
// primitive 에 그룹을 추가하면 이 목록에도 넣어야 CSS·JS 로 나간다.
for (const g of Object.keys(prim)) if (!g.startsWith('$') && g !== 'color' && !NONCOLOR.includes(g))
  throw new Error(`primitive.${g} 가 NONCOLOR 목록에 없어 산출물에서 누락된다`)
function primLines(){
  const out = []
  for (const g of NONCOLOR){ if (!prim[g]) continue
    walk({[g]:prim[g]}, [], (p,t) => out.push(`  ${cssVar(p)}: ${valueOf(t)};`)) }
  return out.join('\n')
}
// 테마별로 갈리는 것 전부 — 색 + 그림자
const SEM_GROUPS = ['color','shadow']
function colorLines(sem, indent='  '){
  const out = []
  for (const g of SEM_GROUPS){ if (!sem[g]) continue
    walk(sem[g], [g], (p,t) => out.push(`${indent}${cssVar(p)}: ${valueOf(t)};`)) }
  return out.join('\n')
}
// 라이트/다크의 그림자 기하가 어긋나면 즉시 실패시킨다(두 파일에 중복 기입되므로)
function assertShadowGeometryMatches(){
  const geo = t => JSON.stringify((Array.isArray(t.$value)?t.$value:[t.$value])
    .map(l => [l.offsetX,l.offsetY,l.blur,l.spread]))
  for (const k of Object.keys(L.shadow || {})){
    if (k.startsWith('$')) continue
    if (!D.shadow || !D.shadow[k]) throw new Error(`다크에 shadow.${k} 없음`)
    if (geo(L.shadow[k]) !== geo(D.shadow[k])) throw new Error(`shadow.${k} 기하가 라이트/다크 불일치`)
  }
  const extra = Object.keys(D.shadow||{}).filter(k => !k.startsWith('$') && !(L.shadow||{})[k])
  if (extra.length) throw new Error(`라이트에 없는 다크 shadow: ${extra.join(', ')}`)
}
// 색은 components(oklch) 와 hex(폴백) 두 표현을 갖는다. 어긋나면 소비자가 어느 쪽을
// 읽느냐에 따라 다른 색이 나오므로 빌드에서 막는다. OKLab 역변환은 Ottosson 행렬.
function assertColorHexMatchesComponents(){
  const lin2srgb = c => c <= 0.0031308 ? 12.92*c : 1.055*Math.pow(c, 1/2.4) - 0.055
  const toHex = (L, C, H) => {
    const h = H === 'none' ? 0 : H * Math.PI / 180
    const A = C * Math.cos(h), B = C * Math.sin(h)
    const l = (L + 0.3963377774*A + 0.2158037573*B) ** 3
    const m = (L - 0.1055613458*A - 0.0638541728*B) ** 3
    const s = (L - 0.0894841775*A - 1.2914855480*B) ** 3
    const q = v => Math.max(0, Math.min(255, Math.round(lin2srgb(v) * 255))).toString(16).padStart(2,'0')
    return '#' + q(+4.0767416621*l - 3.3077115913*m + 0.2309699292*s)
               + q(-1.2684380046*l + 2.6097574011*m - 0.3413193965*s)
               + q(-0.0041960863*l - 0.7034186147*m + 1.7076147010*s)
  }
  let n = 0
  for (const fam of Object.keys(prim.color)){
    if (fam.startsWith('$')) continue
    for (const st of Object.keys(prim.color[fam])){
      if (st.startsWith('$')) continue
      const v = prim.color[fam][st].$value
      if (!v || typeof v !== 'object' || !Array.isArray(v.components) || typeof v.hex !== 'string')
        throw new Error(`color.${fam}.${st} 가 2025.10 형식이 아니다 ({colorSpace,components,hex} 필요)`)
      if (v.colorSpace !== 'oklch')
        throw new Error(`color.${fam}.${st} 의 colorSpace 가 oklch 가 아니다: ${v.colorSpace}`)
      const got = toHex(v.components[0], v.components[1], v.components[2])
      if (got !== v.hex.toLowerCase())
        throw new Error(`color.${fam}.${st} 의 components 와 hex 가 어긋난다: components→${got} vs hex=${v.hex}`)
      n++
    }
  }
  return n
}
// typography 의 lineHeight 키는 `글자px-행간px` 다. 배수는 짝지어진 글자 크기에서만
// 2px 그리드에 떨어지므로, fontSize 와 어긋나거나 배수가 키와 다르면 실패시킨다.
function assertLineHeightPairing(){
  if (!TYPO) return 0
  let n = 0
  for (const set of ['base','compact']){
    for (const [name, tok] of Object.entries(TYPO.typography[set] || {})){
      if (name.startsWith('$')) continue
      const v = tok.$value
      const lhKey = String(v.lineHeight).slice(1,-1).split('.')[1]
      const fsKey = String(v.fontSize).slice(1,-1).split('.')[1]
      const m = /^([0-9]+)-([0-9]+)$/.exec(lhKey || '')
      if (!m) throw new Error(`typography.${set}.${name} 의 lineHeight 키가 글자px-행간px 형식이 아니다: ${lhKey}`)
      if (m[1] !== fsKey)
        throw new Error(`typography.${set}.${name}: lineHeight ${lhKey} 는 ${m[1]}px 전용인데 fontSize 는 ${fsKey}px`)
      const node = prim.lineHeight[lhKey]
      if (!node) throw new Error(`lineHeight.${lhKey} 토큰이 없다`)
      if (node.$type !== 'number')
        throw new Error(`lineHeight.${lhKey} 는 number 여야 한다(DTCG 9.8): 현재 ${node.$type}`)
      const want = Number(m[2]) / Number(m[1])
      if (Math.abs(node.$value - want) > 1e-6)
        throw new Error(`lineHeight.${lhKey} 값 ${node.$value} 가 ${m[2]}/${m[1]}=${want.toFixed(6)} 와 다르다`)
      // 배수를 되돌린 픽셀이 원래 행간에서 벗어나면 실패
      const back = node.$value * Number(m[1])
      if (Math.abs(back - Number(m[2])) > 1e-4)
        throw new Error(`lineHeight.${lhKey}: 배수 복원 ${back}px 가 ${m[2]}px 와 어긋난다`)
      n++
    }
  }
  return n
}
// ── 파운데이션 ────────────────────────────────────────────────────
// 파운데이션은 문서 축이지 파일 구조가 아니다(CLAUDE.md). 그래서 그룹의
// $extensions 에 배열로 적고, 배정 누락·오타·미사용을 빌드가 검사한다.
// 1:N 을 허용하므로 공유 스케일(opacity)은 참조하는 곳을 전부 나열한다.
const FOUNDATIONS = ['Typography','Colors','Elevation','Spacing','Breakpoint','Radius',
                     'Layout','Divider','Interaction','Motion','Effects','Ratio']
const FND = 'net.infobank.ds.foundation'
function assertFoundationsAssigned(){
  const claimed = new Set()
  let groups = 0
  for (const [file, doc] of Object.entries(SRC)){
    for (const g of Object.keys(doc)){
      if (g.startsWith('$')) continue
      const f = doc[g].$extensions && doc[g].$extensions[FND]
      if (!f) throw new Error(`${file} 의 그룹 ${g} 에 파운데이션 배정이 없다 ($extensions."${FND}")`)
      if (!Array.isArray(f) || !f.length) throw new Error(`${file}.${g} 의 파운데이션이 비어 있거나 배열이 아니다`)
      for (const name of f){
        if (!FOUNDATIONS.includes(name)) throw new Error(`${file}.${g} 가 모르는 파운데이션을 가리킨다: ${name}`)
        claimed.add(name)
      }
      groups++
    }
  }
  const unused = FOUNDATIONS.filter(f => !claimed.has(f))
  if (unused.length) throw new Error(`아무 그룹도 쓰지 않는 파운데이션: ${unused.join(', ')}`)
  return { groups, foundations: FOUNDATIONS.length }
}
// ── 티어 스케일 순서 ──────────────────────────────────────────────
// xs·sm·md·lg·xl 같은 티어 이름은 "값이 바뀌어도 이름이 유효하다"를 전제로 한다.
// 그 전제가 성립하려면 최소한 값 순서가 이름 순서를 따라야 한다.
// 실제로 (지금은 제거된) gradient.maskSize 가 xl(56) < lg(64) 상태로 방치된 적이 있고,
// 그 그룹이 하필 토큰별 역할 기록이 하나도 없던 유일한 티어 스케일이었다.
// 역할을 지어내는 대신, 구조로 막는다.
const TIER_ORDER = ['xs','sm','md','lg','xl']
// 의도적으로 내림차순인 스케일만 여기에 둔다. 이유를 함께 적는다.
const TIER_EXEMPT = {
  'layout.margin': 'maxWidth 가 지정된 lg·xl 은 0 — 최대폭이 여백을 대신한다(토큰 $description 참조)',
}
function assertTierScalesOrdered(){
  const found = []
  const visit = (node, path) => {
    if (!node || typeof node !== 'object') return
    const keys = Object.keys(node).filter(k => !k.startsWith('$'))
    if (!keys.length) return
    const allLeaf = keys.every(k => node[k] && node[k].$value !== undefined)
    if (allLeaf && keys.length > 1 && keys.every(k => TIER_ORDER.includes(k))){
      const name = path.join('.')
      const seq = [...keys].sort((a,b) => TIER_ORDER.indexOf(a) - TIER_ORDER.indexOf(b))
      const numOf = t => {
        const v = t.$value
        if (typeof v === 'number') return v
        if (v && typeof v === 'object' && typeof v.value === 'number') return v.value
        return null                                  // 복합 값(shadow 등)은 비교하지 않는다
      }
      const vals = seq.map(k => numOf(node[k]))
      if (vals.every(v => v !== null)){
        if (TIER_EXEMPT[name]) { found.push(`${name} (예외)`) }
        else {
          for (let i = 1; i < vals.length; i++)
            if (vals[i] < vals[i-1])
              throw new Error(`티어 스케일 ${name} 의 값이 이름 순서를 거스른다: ` +
                `${seq[i-1]}=${vals[i-1]} > ${seq[i]}=${vals[i]} — 값을 고치거나 TIER_EXEMPT 에 이유와 함께 등록한다`)
          found.push(name)
        }
      }
      return
    }
    for (const k of keys) visit(node[k], [...path, k])
  }
  for (const [file, doc] of Object.entries(SRC)) visit(doc, [])
  for (const name of Object.keys(TIER_EXEMPT))
    if (!found.includes(`${name} (예외)`))
      throw new Error(`TIER_EXEMPT 의 ${name} 이 더는 티어 스케일이 아니다 — 예외를 지운다`)
  return found
}
// ── 종횡비 키 ─────────────────────────────────────────────────────
// ratio 키는 `가로-세로` 이고 값은 가로÷세로다. 키와 값이 어긋나면 방향이 뒤집힌
// 비율이 조용히 들어간다(ratio 그룹은 참조가 없어 화면으로도 안 드러난다).
const RATIO_EXEMPT = { golden: '황금비 1.618 — 정수비가 아닌 명명 상수' }
function assertRatioKeysMatchValues(){
  let n = 0
  for (const k of Object.keys(prim.ratio)){
    if (k.startsWith('$')) continue
    if (RATIO_EXEMPT[k]) { n++; continue }
    const m = /^([0-9]+)-([0-9]+)$/.exec(k)
    if (!m) throw new Error(`ratio.${k} 키가 \`가로-세로\` 형식이 아니다 — 예외라면 RATIO_EXEMPT 에 이유와 함께 등록한다`)
    const want = Number(m[1]) / Number(m[2])
    if (Math.abs(prim.ratio[k].$value - want) > 1e-6)
      throw new Error(`ratio.${k} 값 ${prim.ratio[k].$value} 이 ${m[1]}/${m[2]}=${want.toFixed(6)} 와 다르다`)
    n++
  }
  for (const k of Object.keys(RATIO_EXEMPT))
    if (!prim.ratio[k]) throw new Error(`RATIO_EXEMPT 의 ${k} 가 더는 없다 — 예외를 지운다`)
  return n
}
const ratioChecked = assertRatioKeysMatchValues()
const tierScales = assertTierScalesOrdered()
const fnd = assertFoundationsAssigned()
// ── 자간 짝 ───────────────────────────────────────────────────────
// 자간은 독립 축이 아니라 글자 크기의 종속 함수다(DECISIONS 2-2). 밴드 4개를 em 으로
// 두던 시절에는 그 종속을 문서로만 말했고, 12px 토큰에 display 밴드를 물려도 빌드가 통과했다.
// 이제 키가 크기 자체이므로 짝을 검사할 수 있다. 값이 밴드×크기와 어긋나도 실패시킨다.
const BANDS = 'net.infobank.ds.trackingBands'
function assertLetterSpacingPairing(){
  if (!TYPO) return 0
  const bands = prim.letterSpacing.$extensions && prim.letterSpacing.$extensions[BANDS]
  if (!bands) throw new Error(`letterSpacing 그룹에 ${BANDS} 확장이 없다 — 밴드 원본이 사라졌다`)
  let n = 0
  for (const set of ['base','compact']){
    for (const [name, tok] of Object.entries(TYPO.typography[set] || {})){
      if (name.startsWith('$')) continue
      const v = tok.$value
      const lsKey = String(v.letterSpacing).slice(1,-1).split('.')[1]
      const fsKey = String(v.fontSize).slice(1,-1).split('.')[1]
      if (lsKey !== fsKey)
        throw new Error(`typography.${set}.${name}: letterSpacing ${lsKey} 는 ${lsKey}px 전용인데 fontSize 는 ${fsKey}px`)
      const node = prim.letterSpacing[lsKey]
      if (!node) throw new Error(`letterSpacing.${lsKey} 토큰이 없다`)
      if (node.$type !== 'dimension' || node.$value.unit !== 'rem')
        throw new Error(`letterSpacing.${lsKey} 는 rem dimension 이어야 한다: ${JSON.stringify(node.$value)}`)
      // 값이 어떤 밴드의 파생인지 확인한다 — 어느 밴드로도 설명되지 않으면 실패
      const fsRem = prim.fontSize[fsKey].$value.value
      const ok = Object.entries(bands).some(([, em]) => Math.abs(em * fsRem - node.$value.value) < 1e-9)
      if (!ok)
        throw new Error(`letterSpacing.${lsKey}(${node.$value.value}rem) 이 어떤 밴드의 ` +
          `${fsRem}rem 파생도 아니다 — 밴드: ${JSON.stringify(bands)}`)
      n++
    }
  }
  // 쓰이지 않는 자간 토큰이 남아 있으면 알린다(크기와 1:1 이어야 한다)
  const used = new Set()
  for (const set of ['base','compact'])
    for (const [name, tok] of Object.entries(TYPO.typography[set] || {}))
      if (!name.startsWith('$')) used.add(String(tok.$value.letterSpacing).slice(1,-1).split('.')[1])
  for (const k of Object.keys(prim.letterSpacing))
    if (!k.startsWith('$') && !used.has(k))
      throw new Error(`letterSpacing.${k} 을 쓰는 typography 토큰이 없다 — 크기와 1:1 이어야 한다`)
  return n
}
const lsPairsChecked = assertLetterSpacingPairing()
const lhPairsChecked = assertLineHeightPairing()
const colorsChecked = assertColorHexMatchesComponents()
assertShadowGeometryMatches()
const css = `/* ============================================================
   iNext Design System — tokens.css  (자동 생성 · 편집 금지)
   원본: tokens/primitive.json + semantic.light/dark.json
   생성: node tokens/build.mjs
   ============================================================ */
*, *::before, *::after { box-sizing: border-box; }
html, body, #root { margin: 0; padding: 0; }

:root {
  color-scheme: light;

  /* ── 테마 무관 primitive ── */
${primLines()}

  /* ── 색 semantic (라이트) ── */
${colorLines(L)}
}

/* data-theme="dark" 수동 강제 다크 */
:root[data-theme="dark"] {
  color-scheme: dark;
${colorLines(D)}
}

/* OS 다크모드 자동 (data-theme="light" 강제 시 무시) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    color-scheme: dark;
${colorLines(D, '    ')}
  }
}
`
// ── 타이포그래피(복합 토큰) → CSS 유틸리티 클래스 ──
//   복합 typography 토큰을 .display-lg 등 클래스로. 모든 값이 primitive var 참조다.
//   lineHeight 는 무단위 배수(--line-height-14-22), letterSpacing 은 em. decoration 만 인라인.
//   compact 는 @media(<768) 오버라이드 — 토큰은 스펙상 5속성을 다 갖지만 base 와 같은
//   font-family/weight 를 다시 선언하지 않는다(출력 최적화, full=false).
const fsVar = ref => `var(--font-size-${ref.slice(1,-1).split('.')[1]})`
const fwVar = ref => `var(--font-weight-${ref.slice(1,-1).split('.')[1]})`
const lhVar = ref => `var(--line-height-${ref.slice(1,-1).split('.')[1]})`
const lsVar = ref => `var(--letter-spacing-${ref.slice(1,-1).split('.')[1]})`
function typoDecls(v, full){
  const d = []
  if (full) d.push(`font-family: var(--font-family-base)`)
  d.push(`font-size: ${fsVar(v.fontSize)}`)
  d.push(`line-height: ${lhVar(v.lineHeight)}`)
  if (full) d.push(`font-weight: ${fwVar(v.fontWeight)}`)
  d.push(`letter-spacing: ${lsVar(v.letterSpacing)}`)
  return d
}
let typoCss = ''
if (TYPO){
  const DEC = 'net.infobank.ds.decoration'
  const out = ['', '/* ── 타이포그래피 유틸리티 클래스 (복합 토큰 · 자동 생성) ── */']
  for (const [name, tok] of Object.entries(TYPO.typography.base)){
    if (name.startsWith('$')) continue
    const d = typoDecls(tok.$value, true)
    const ext = tok.$extensions && tok.$extensions[DEC]
    if (ext) d.push(`text-decoration-line: ${ext.line}`, `text-decoration-thickness: ${ext.thickness}`, `text-underline-offset: ${ext.offset}`)
    out.push(`.${name} { ${d.join('; ')}; }`)
  }
  out.push('', '/* compact 오버라이드 — 뷰포트 <768px (display·heading) */', '@media (max-width: 767.98px) {')
  for (const [name, tok] of Object.entries(TYPO.typography.compact)){
    if (name.startsWith('$')) continue
    out.push(`  .${name} { ${typoDecls(tok.$value, false).join('; ')}; }`)
  }
  out.push('}', '')
  typoCss = out.join('\n')
}
fs.writeFileSync(`${DIR}/tokens.css`, css + typoCss)

// ── JS 생성 (해석된 중첩 객체) ─────────────────────────────────────
function resolveTree(obj){
  const out = {}
  for (const [k,v] of Object.entries(obj)){
    if (k.startsWith('$')) continue
    out[k] = isLeaf(v) ? valueOf(v) : resolveTree(v)
  }
  return out
}
const jsExports = {
  color:      resolveTree(L.color),
  darkColor:  resolveTree(D.color),
  shadow:     resolveTree(L.shadow),      // 라이트 그림자
  darkShadow: resolveTree(D.shadow),      // 다크 그림자 (색만 다름)
}
for (const g of NONCOLOR) if (prim[g]) jsExports[g] = resolveTree(prim[g])
if (TYPO){
  const famStr  = valueOf(prim.fontFamily.base)
  const primDim = ref => valueOf(prim.fontSize[ref.slice(1,-1).split('.')[1]])
  const primFw  = ref => Number(valueOf(prim.fontWeight[ref.slice(1,-1).split('.')[1]]))
  const primLh  = ref => valueOf(prim.lineHeight[ref.slice(1,-1).split('.')[1]])
  const primLs  = ref => valueOf(prim.letterSpacing[ref.slice(1,-1).split('.')[1]])
  const resolveTypo = set => {
    const o = {}
    for (const [name, tok] of Object.entries(set)){
      if (name.startsWith('$')) continue
      const v = tok.$value
      const e = { fontSize: primDim(v.fontSize), lineHeight: primLh(v.lineHeight), letterSpacing: primLs(v.letterSpacing) }
      if (v.fontFamily) e.fontFamily = famStr
      if (v.fontWeight) e.fontWeight = primFw(v.fontWeight)
      const dec = tok.$extensions && tok.$extensions['net.infobank.ds.decoration']
      if (dec) e.textDecorationLine = dec.line
      o[name] = e
    }
    return o
  }
  jsExports.typography = { base: resolveTypo(TYPO.typography.base), compact: resolveTypo(TYPO.typography.compact) }
}
const js = `// iNext Design System — tokens.js  (자동 생성 · 편집 금지)
// 원본: tokens/*.json · 생성: node tokens/build.mjs
// CSS 를 못 읽는 곳(문서/네이티브 등)에서 쓰는 해석된 토큰 값.
${Object.entries(jsExports).map(([k,v]) => `export const ${k} = ${JSON.stringify(v,null,2)}`).join('\n\n')}
`
fs.writeFileSync(`${DIR}/tokens.js`, js)

// ── 요약 ───────────────────────────────────────────────────────────
const nColor = (colorLines(L).match(/\n/g)||[]).length + 1
const nPrim  = (primLines().match(/\n/g)||[]).length + 1
console.log(`파운데이션 ${fnd.foundations}개 · 그룹 ${fnd.groups}개 배정 완료 · 티어 스케일 ${tierScales.length}개 순서 확인 · 종횡비 ${ratioChecked}개 키↔값 일치\n색 ${colorsChecked}건 components↔hex 일치 · 행간 ${lhPairsChecked}건 · 자간 ${lsPairsChecked}건 크기 짝 일치\ntokens.css: primitive ${nPrim}개 + 색 semantic ${nColor}개(×3 테마셀렉터)`)
console.log(`tokens.js : ${Object.keys(jsExports).length}개 export`)

// ── 번들 — 테마별 단일 DTCG 문서 ───────────────────────────────────
//   파일이 4개로 갈려 있어 별칭 대부분이 파일 경계를 넘는다. 그 합성 규칙은
//   COMPOSITION 에만 있으므로, 제3자 DTCG 도구는 한 파일만 열면 참조를 풀지 못한다.
//   그래서 테마별로 "모든 별칭이 문서 안에서 해석되는" 단일 문서를 내보낸다.
//   별칭은 값으로 풀지 않는다 — 참조 관계가 보존돼야 도구가 의미를 읽을 수 있다.
function mergeInto(dst, src){
  for (const [k, v] of Object.entries(src)){
    const isGroup = o => o && typeof o === 'object' && !Array.isArray(o) && o.$value === undefined
    if (isGroup(dst[k]) && isGroup(v)) mergeInto(dst[k], v)
    else dst[k] = v                       // 마지막 등장이 이긴다(Resolver 병합 규칙과 동일)
  }
}
function bundleFor(theme){
  const out = {}
  for (const step of COMPOSITION.resolutionOrder){
    const [kind, name] = step.split('.')
    const files = kind === 'sets' ? COMPOSITION.sets[name] : COMPOSITION.modifiers[name][theme]
    if (!files) throw new Error(`resolutionOrder 의 ${step} 에 ${theme} 컨텍스트가 없다`)
    for (const f of files) mergeInto(out, SRC[f])
  }
  return { $description:
    `iNext DS 토큰 — ${theme} 테마 · DTCG 2025.10 단일 문서 (자동 생성 · 편집 금지). ` +
    `모든 별칭이 이 문서 안에서 해석된다. 반투명색은 native alpha 로 해소돼 있어 ` +
    `$extensions 를 전부 무시해도 값이 올바르다. 원본은 ${listSources().join(' + ')} 이며 ` +
    `합성 규칙은 build.mjs 의 COMPOSITION 에 있다.`, ...out }
}
// ── 번들의 반투명색을 native alpha 로 해소한다 ─────────────────────
// 소스는 base 별칭 + $extensions 알파로 둔다 — 불투명도를 opacity 눈금 한 곳에서
// 관리하려면 참조가 필요하고, 스펙 color 의 alpha 는 0~1 숫자만 받기 때문이다(0-14).
// 하지만 번들은 배포용 산출물이라 거기서는 알파가 이미 숫자다. 스펙은 확장을
// "값을 이해하는 데 필수적이지 않은 메타데이터"로 제한하라고 하므로(SHOULD),
// 번들에서는 값을 완성시켜 확장 없이도 읽히게 한다(0-19).
// 별칭 자체는 스펙이 지원하는 정상 표현이라 그대로 둔다 — 표현 불가능한 것만 해소한다.
const primColorObj = ref => { const p = ref.slice(1,-1).split('.'); return prim.color[p[1]][p[2]].$value }
function withAlpha(ref, a){
  const c = primColorObj(ref)
  return { colorSpace: c.colorSpace, components: c.components, alpha: a, ...(c.hex ? { hex: c.hex } : {}) }
}
function materializeAlpha(doc){
  const visit = node => {
    if (!node || typeof node !== 'object') return
    if (node.$value !== undefined){
      const ax = node.$extensions && node.$extensions[NS]
      if (ax){
        if (node.$type === 'color' && typeof node.$value === 'string' && ALIAS.test(node.$value))
          node.$value = withAlpha(node.$value, opacityVal(ax))
        else if (node.$type === 'shadow'){
          const ls = Array.isArray(node.$value) ? node.$value : [node.$value]
          ls.forEach((l, i) => {
            const r = Array.isArray(ax) ? ax[i] : ax
            if (r !== undefined && typeof l.color === 'string' && ALIAS.test(l.color))
              l.color = withAlpha(l.color, opacityVal(r))
          })
        }
      }
      return
    }
    for (const [k, v] of Object.entries(node)) if (!k.startsWith('$')) visit(v)
  }
  visit(doc)
  return doc
}
// 해소가 끝난 뒤, 알파 확장을 들고 있으면서 값이 여전히 별칭인 토큰이 없어야 한다.
// 하나라도 남으면 그 토큰은 제3자 도구에서 완전 불투명으로 읽힌다.
function assertBundleAlphaMaterialized(theme, doc){
  const bad = []
  let n = 0
  const visit = (node, path) => {
    if (!node || typeof node !== 'object') return
    if (node.$value !== undefined){
      if (node.$extensions && node.$extensions[NS]){
        n++
        const v = node.$value
        if (node.$type === 'color'){
          if (typeof v !== 'object' || typeof v.alpha !== 'number') bad.push(path)
        } else if (node.$type === 'shadow'){
          for (const l of [].concat(v))
            if (typeof l.color !== 'object' || typeof l.color.alpha !== 'number') { bad.push(path); break }
        }
      }
      return
    }
    for (const [k, v] of Object.entries(node)) if (!k.startsWith('$')) visit(v, path ? `${path}.${k}` : k)
  }
  visit(doc, '')
  if (bad.length) throw new Error(`번들(${theme}) 알파 미해소 ${bad.length}건: ${bad.slice(0,3).join(' · ')}`)
  return n
}
// 번들 안에서 풀리지 않는 별칭이 있으면 실패시킨다 — 번들의 존재 이유가 자기완결성이다.
function assertBundleSelfContained(theme, doc){
  const isAlias = v => typeof v === 'string' && /^\{[^{}]+\}$/.test(v)
  const look = ref => ref.slice(1,-1).split('.').reduce((o,k) => (o == null ? o : o[k]), doc)
  const bad = []
  let n = 0
  const check = (label, ref) => { n++
    const t = look(ref)
    if (!t || typeof t !== 'object' || t.$value === undefined) bad.push(`${label} → ${ref}`) }
  const walkAny = (node, path) => {
    if (node == null || typeof node !== 'object') return
    for (const [k, v] of Object.entries(node)){
      const p = path ? `${path}.${k}` : k
      if (isAlias(v)) check(p, v)
      else if (Array.isArray(v)) v.forEach((x, i) => isAlias(x) ? check(`${p}[${i}]`, x) : walkAny(x, `${p}[${i}]`))
      else walkAny(v, p)
    }
  }
  walkAny(doc, '')
  if (bad.length) throw new Error(`번들(${theme}) 미해석 별칭 ${bad.length}건: ${bad.slice(0,3).join(' · ')}`)
  return n
}
fs.mkdirSync(`${DIR}/dist`, { recursive: true })
const bundleReport = []
for (const theme of THEMES){
  // mergeInto 는 잎 토큰을 공유 참조로 넘긴다 — 복제하지 않고 고치면 소스와
  // 다른 테마 번들까지 오염된다.
  const doc = structuredClone(bundleFor(theme))
  const alphas = assertBundleAlphaMaterialized(theme, materializeAlpha(doc))
  const aliases = assertBundleSelfContained(theme, doc)
  fs.writeFileSync(`${DIR}/dist/tokens.${theme}.json`, JSON.stringify(doc, null, 2) + '\n')
  bundleReport.push(`${theme} 별칭 ${aliases}건 해석 · 알파 ${alphas}건 native 화`)
}
console.log(`소스 ${srcCount}개 · 번들 dist/tokens.{${THEMES.join(',')}}.json — ${bundleReport.join(' / ')}`)
