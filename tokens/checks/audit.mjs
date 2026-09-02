/* DTCG 2025.10 정합성 감사 — 스펙 조항만으로 검사한다.
   근거: Format Module 2025.10 / Color Module 2025.10 (Final CG Report, 2025-10-28)
   재작성: 2026-08-27 (스크래치패드 소실로 복구) */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const D = path.join(path.dirname(fileURLToPath(import.meta.url)), '..') + '/'
const FILES = process.argv[2] === 'bundle'
  ? ['dist/tokens.light.json', 'dist/tokens.dark.json']
  : ['primitive.json', 'semantic.light.json', 'semantic.dark.json', 'typography.json']
const doc = {}
for (const f of FILES) doc[f] = JSON.parse(fs.readFileSync(D + f))

const VALID = ['color','dimension','fontFamily','fontWeight','duration','cubicBezier','number',
               'strokeStyle','border','transition','shadow','gradient','typography']
const RESERVED = ['$value','$type','$description','$extensions','$deprecated','$ref','$root']
const SPACES = ['srgb','srgb-linear','hsl','hwb','lab','lch','oklab','oklch','display-p3',
                'a98-rgb','prophoto-rgb','rec2020','xyz-d65','xyz-d50']
const FW_KEY = ['thin','hairline','extra-light','ultra-light','light','normal','regular','book','medium',
                'semi-bold','demi-bold','bold','extra-bold','ultra-bold','black','heavy','extra-black','ultra-black']
const RECIPE = 'net.infobank.ds.cssRecipe'

const F = []
let CUR = null
const add = (sev, rule, where, msg) => F.push({
  sev: (sev === '오류' && CUR?.$extensions?.[RECIPE]) ? '예외' : sev, rule, where, msg })
const isTok = o => o && typeof o === 'object' && !Array.isArray(o) && o.$value !== undefined
const isAlias = v => typeof v === 'string' && /^\{[^{}]+\}$/.test(v)

/* 별칭 해석 뿌리 — 번들은 자기 자신, 소스는 primitive+typography 합본(실제 합성 방식) */
const ROOT = FILES.length === 2 ? doc[FILES[0]] : (() => {
  const r = { ...doc['primitive.json'] }
  for (const k of Object.keys(doc['typography.json'])) if (!k.startsWith('$')) r[k] = doc['typography.json'][k]
  return r })()
const look = ref => ref.slice(1, -1).split('.').reduce((o, k) => (o == null ? o : o[k]), ROOT)

function rType(t, seen = new Set(), inh) {
  if (t.$type || inh) return t.$type || inh
  if (isAlias(t.$value) && !seen.has(t.$value)) {
    seen.add(t.$value); const n = look(t.$value)
    if (isTok(n)) return rType(n, seen)
  }
  return null
}
function dimOK(v, where, label) {
  if (isAlias(v)) { const n = look(v)
    if (!isTok(n)) add('오류','3.8',where,`${label} 별칭 대상 없음: ${v}`)
    else if (rType(n) !== 'dimension') add('오류','8.2',where,`${label} 별칭이 dimension 이 아님`)
    return }
  if (!v || typeof v !== 'object' || typeof v.value !== 'number' || typeof v.unit !== 'string')
    return add('오류','8.2 dimension',where,`${label} 이 {value,unit} 객체가 아님: ${JSON.stringify(v)}`)
  if (!['px','rem'].includes(v.unit))
    add('오류','8.2 dimension 단위',where,`${label} 단위가 px·rem 이 아님: "${v.unit}"`)
}
function checkValue(type, v, where) {
  switch (type) {
    case 'color': {
      if (!v || typeof v !== 'object' || Array.isArray(v))
        return add('오류','Color 4.1',where,`color $value 가 객체가 아님: ${JSON.stringify(v)}`)
      if (typeof v.colorSpace !== 'string') add('오류','Color 4.1',where,'colorSpace 없음')
      else if (!SPACES.includes(v.colorSpace)) add('오류','Color 4.2',where,`지원하지 않는 colorSpace: ${v.colorSpace}`)
      if (!Array.isArray(v.components)) add('오류','Color 4.1',where,'components 없음')
      else {
        if (v.components.length !== 3) add('오류','Color 4.2',where,`성분이 3개가 아님: ${v.components.length}`)
        v.components.forEach((c,i) => { if (typeof c !== 'number' && c !== 'none')
          add('오류','Color 4.1',where,`components[${i}] 가 숫자도 'none' 도 아님`) })
        if (v.colorSpace === 'oklch') {
          const [L,,H] = v.components
          if (typeof L === 'number' && (L < 0 || L > 1)) add('오류','Color 4.2',where,`oklch L 이 [0,1] 밖: ${L}`)
          if (typeof H === 'number' && (H < 0 || H >= 360)) add('오류','Color 4.2',where,`oklch H 가 [0,360) 밖: ${H}`)
        }
      }
      if ('alpha' in v && (typeof v.alpha !== 'number' || v.alpha < 0 || v.alpha > 1))
        add('오류','Color 4.1',where,`alpha 가 0~1 숫자가 아님: ${v.alpha}`)
      if ('hex' in v && !/^#[0-9a-fA-F]{6}$/.test(v.hex))
        add('오류','Color 4.1',where,`hex 가 6자리 표기가 아님: ${v.hex}`)
      break }
    case 'dimension': dimOK(v, where, '$value'); break
    // 8.5 duration — {value, unit} 이며 단위는 ms·s 뿐이다. dimension 과 형태만 같고 단위 집합이 다르다.
    case 'duration': {
      if (isAlias(v)) { const n = look(v)
        if (!isTok(n)) add('오류','3.8',where,`별칭 대상 없음: ${v}`)
        else if (rType(n) !== 'duration') add('오류','8.5',where,'별칭이 duration 이 아님')
        break }
      if (!v || typeof v !== 'object' || typeof v.value !== 'number' || typeof v.unit !== 'string')
        add('오류','8.5 duration',where,`{value,unit} 객체가 아님: ${JSON.stringify(v)}`)
      else if (!['ms','s'].includes(v.unit))
        add('오류','8.5 duration 단위',where,`단위가 ms·s 가 아님: "${v.unit}"`)
      break }
    // 8.6 cubicBezier — 숫자 4개 [P1x,P1y,P2x,P2y], x 좌표만 [0,1] 로 제한된다.
    case 'cubicBezier': {
      if (isAlias(v)) { const n = look(v)
        if (!isTok(n)) add('오류','3.8',where,`별칭 대상 없음: ${v}`)
        else if (rType(n) !== 'cubicBezier') add('오류','8.6',where,'별칭이 cubicBezier 가 아님')
        break }
      if (!Array.isArray(v) || v.length !== 4 || !v.every(n => typeof n === 'number'))
        add('오류','8.6 cubicBezier',where,`숫자 4개 배열이 아님: ${JSON.stringify(v)}`)
      else if (v[0] < 0 || v[0] > 1 || v[2] < 0 || v[2] > 1)
        add('오류','8.6 cubicBezier',where,`x 좌표가 [0,1] 밖: ${JSON.stringify(v)}`)
      break }
    case 'number': if (typeof v !== 'number') add('오류','8.7 number',where,`JSON 숫자가 아님: ${JSON.stringify(v)}`); break
    case 'fontFamily':
      if (typeof v === 'string') break
      if (!Array.isArray(v) || !v.every(x => typeof x === 'string'))
        add('오류','8.3 fontFamily',where,'문자열 또는 문자열 배열이어야 함')
      break
    case 'fontWeight':
      if (typeof v === 'number') { if (v < 1 || v > 1000) add('오류','8.4',where,`1~1000 밖: ${v}`) }
      else if (typeof v === 'string') { if (!FW_KEY.includes(v)) add('오류','8.4',where,`키워드 아님: ${v}`) }
      else add('오류','8.4',where,'숫자도 키워드도 아님')
      break
    case 'shadow': {
      const layers = Array.isArray(v) ? v : [v]
      layers.forEach((l,i) => {
        const tag = Array.isArray(v) ? `[${i}]` : ''
        if (!l || typeof l !== 'object') return add('오류','9.6 shadow',where,`${tag} 레이어가 객체가 아님`)
        for (const pr of ['color','offsetX','offsetY','blur','spread'])
          if (!(pr in l)) add('오류','9.6 shadow 필수 속성',where,`${tag} ${pr} 없음`)
        for (const pr of ['offsetX','offsetY','blur','spread']) if (pr in l) dimOK(l[pr], where, tag+pr)
        if ('color' in l) {
          if (isAlias(l.color)) { const n = look(l.color)
            if (!isTok(n)) add('오류','3.8',where,`${tag}color 별칭 대상 없음: ${l.color}`)
            else if (rType(n) !== 'color') add('오류','9.6',where,`${tag}color 별칭이 color 가 아님`) }
          else checkValue('color', l.color, where + ` ${tag}color`)
        }
        for (const k of Object.keys(l)) if (!['color','offsetX','offsetY','blur','spread'].includes(k))
          add('경고','9.6 shadow',where,`${tag} 스펙에 없는 속성: ${k}`)
      })
      break }
    case 'typography': {
      if (!v || typeof v !== 'object') return add('오류','9.8',where,'$value 가 객체가 아님')
      const REQ = { fontFamily:'fontFamily', fontSize:'dimension', fontWeight:'fontWeight',
                    letterSpacing:'dimension', lineHeight:'number' }
      for (const [pr, want] of Object.entries(REQ)) {
        if (!(pr in v)) { add('오류','9.8 필수 속성',where,`${pr} 없음`); continue }
        const sv = v[pr]
        if (isAlias(sv)) { const n = look(sv)
          if (!isTok(n)) { add('오류','3.8',where,`${pr} 별칭 대상 없음: ${sv}`); continue }
          const got = rType(n)
          if (got !== want) add('오류','9.8 하위 타입',where,`${pr} 은 ${want} 여야 하는데 ${sv} 는 ${got}`) }
        else if (want === 'dimension') dimOK(sv, where, pr)
        else if (want === 'number' && typeof sv !== 'number')
          add('오류','9.8 하위 타입',where,`${pr} 은 number 여야 하는데 ${JSON.stringify(sv)}`)
      }
      for (const k of Object.keys(v)) if (!(k in REQ)) add('경고','9.8',where,`스펙에 없는 하위 속성: ${k}`)
      break }
    default: add('정보','—',where,`검사기가 다루지 않는 타입: ${type}`)
  }
}
function checkToken(t, where, inh) {
  CUR = t
  const type = rType(t, new Set(), inh)
  if (!type) return add(t.$extensions?.[RECIPE] ? '예외' : '오류', '5.2.2 / 8', where,
    '$type 을 결정할 수 없음' + (t.$extensions?.[RECIPE] ? ' (cssRecipe 예외 표시됨)' : ''))
  if (!VALID.includes(type)) return add('오류','8 타입 목록',where,`스펙에 없는 $type: ${type}`)
  if (isAlias(t.$value)) {
    const seen = new Set(); let cur = t.$value, hops = 0
    while (isAlias(cur)) {
      if (seen.has(cur)) return add('오류','6.7.4 순환 참조',where,`별칭 순환: ${cur}`)
      seen.add(cur); const n = look(cur)
      if (!isTok(n)) return add('오류','3.8 별칭',where,`별칭 대상 없음: ${cur}`)
      if (++hops > 16) return add('오류','6.7.4',where,'별칭 깊이 초과')
      cur = n.$value
      if (!isAlias(cur)) { const tt = rType(n)
        if (tt && t.$type && tt !== t.$type) add('오류','3.8 별칭 타입',where,`선언 ${t.$type} 인데 대상은 ${tt}`) }
    }
    return
  }
  checkValue(type, t.$value, where)
}

for (const file of FILES) {
  const walk = (node, path, inh) => {
    if (node == null || typeof node !== 'object' || Array.isArray(node)) return
    const here = `${file}:${path.join('.') || '(root)'}`
    for (const k of Object.keys(node))
      if (k.startsWith('$') && !RESERVED.includes(k)) add('경고','5.2 추가 속성',here,`알 수 없는 예약 속성 ${k}`)
    if ('$description' in node && typeof node.$description !== 'string')
      add('오류','5.2.1',here,'$description 이 문자열이 아님')
    if (node.$extensions) {
      if (typeof node.$extensions !== 'object' || Array.isArray(node.$extensions))
        add('오류','5.2.3',here,'$extensions 가 객체가 아님')
      else for (const k of Object.keys(node.$extensions))
        if (!/^[a-z0-9-]+(\.[A-Za-z0-9-]+)+$/.test(k))
          add('경고','5.2.3',here,`$extensions 키가 역방향 도메인 표기가 아님: ${k}`)
    }
    const kids = Object.keys(node).filter(k => !k.startsWith('$'))
    const lc = {}
    for (const k of kids) {
      if (/[{}.]/.test(k)) add('오류','5.1.1 문자 제한',here,`이름에 금지 문자: "${k}"`)
      const l = k.toLowerCase()
      if (lc[l]) add('경고','5.1 이름',here,`대소문자만 다른 형제: "${lc[l]}" vs "${k}"`)
      lc[l] = k
    }
    if (isTok(node)) return checkToken(node, here, inh)
    for (const k of kids) walk(node[k], [...path, k], node.$type || inh)
  }
  walk(doc[file], [])
}

const cnt = { 오류:0, 경고:0, 예외:0, 정보:0 }
F.forEach(f => cnt[f.sev]++)
console.log(`# DTCG 2025.10 감사 — ${FILES.join(' · ')}`)
console.log(`결과: 오류 ${cnt.오류} · 경고 ${cnt.경고} · 예외 ${cnt.예외} · 정보 ${cnt.정보}`)
const byKey = {}
for (const f of F) { const k = `[${f.sev}] ${f.rule}`; (byKey[k] = byKey[k] || []).push(f) }
for (const [k, list] of Object.entries(byKey)) {
  console.log(`\n${k} — ${list.length}건`)
  list.slice(0, 5).forEach(f => console.log(`   · ${f.where}  ${f.msg}`))
  if (list.length > 5) console.log(`   · … 외 ${list.length - 5}건`)
}

process.exit(cnt.오류 > 0 ? 1 : 0)
