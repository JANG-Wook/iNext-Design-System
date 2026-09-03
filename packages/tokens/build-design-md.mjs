// ============================================================
//  DESIGN.md 생성 — front matter(토큰) + 본문(narrative)
//  실행: node tokens/build-design-md.mjs   (npm run build:tokens 가 함께 돌린다)
//
//  값의 단일 원본은 tokens/*.json 이고 산문의 원본은 narrative/*.md 다.
//  DESIGN.md 는 둘을 합친 생성물이므로 직접 편집하지 않는다.
//
//  결정적이어야 한다 — CI 가 다시 만들어 커밋된 것과 바이트 비교한다.
//  타임스탬프·난수·객체 순회 순서에 의존하는 값을 넣지 않는다.
// ============================================================
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR  = path.dirname(fileURLToPath(import.meta.url))   // packages/tokens/
const NARR = `${DIR}/narrative`
const OUT  = `${DIR}/DESIGN.md`

const pkg   = JSON.parse(fs.readFileSync(`${DIR}/package.json`, 'utf8'))
const light = JSON.parse(fs.readFileSync(`${DIR}/dist/tokens.light.json`, 'utf8'))
const dark  = JSON.parse(fs.readFileSync(`${DIR}/dist/tokens.dark.json`, 'utf8'))
const css   = fs.readFileSync(`${DIR}/tokens.css`, 'utf8')

// ── CSS 변수 목록 = 컴포넌트가 실제로 쓰는 API 면 ──────────────────
// primitive 팔레트(99개)는 CSS 로 나가지 않는다 — front matter 에서도 뺀다.
// 팔레트를 컴포넌트가 직접 고르면 테마 전환이 깨지므로 소비 대상이 아니다.
const CSSVARS = new Set([...css.matchAll(/^\s*(--[a-z0-9-]+)\s*:/gm)].map(m => m[1]))

const isLeaf = v => v && typeof v === 'object' && v.$value !== undefined
function walk(obj, base, out){
  for (const [k, v] of Object.entries(obj)){
    if (k.startsWith('$')) continue
    const p = base.concat(k)
    if (isLeaf(v)) out.push([p, v]); else if (v && typeof v === 'object') walk(v, p, out)
  }
  return out
}
const kebab = s => /^[0-9]+$/.test(s) ? s
  : s.replace(/([a-z])([0-9]+)/g, '$1-$2').replace(/([A-Z]+)/g, m => '-' + m.toLowerCase())
     .replace(/\./g, '-').replace(/^-/, '')
const cssVar = p => '--' + p.map(kebab).join('-')

// ── 값 → 문자열 ────────────────────────────────────────────────────
// 번들은 반투명색만 native alpha 로 해소하고(0-19) 나머지 별칭은 그대로 둔다 —
// 별칭은 스펙이 지원하는 정상 표현이라 버리지 않는다. 그래서 여기서 따라가야 한다.
// 번들은 자기완결적이므로(assertBundleSelfContained) 문서 안에서 반드시 풀린다.
const ALIAS = /^\{[^{}]+\}$/
function deref(v, doc){
  let cur = v
  for (let i = 0; typeof cur === 'string' && ALIAS.test(cur); i++){
    if (i > 8) throw new Error(`별칭이 순환한다: ${v}`)
    const node = cur.slice(1, -1).split('.').reduce((o, k) => (o == null ? o : o[k]), doc)
    if (!node || node.$value === undefined) throw new Error(`번들에서 풀리지 않는 별칭: ${cur}`)
    cur = node.$value
  }
  return cur
}
function colorStr(v, doc){
  v = deref(v, doc)
  const hex = v.hex
  if (typeof hex !== 'string') throw new Error('색에 hex 폴백이 없다')
  if (typeof v.alpha !== 'number') return hex
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${v.alpha})`
}
function plainStr(t, doc){
  const v = deref(t.$value, doc)
  if (t.$type === 'color')     return colorStr(v, doc)
  if (t.$type === 'dimension') return `${v.value}${v.unit}`
  if (t.$type === 'fontFamily')return v.join(', ')
  if (t.$type === 'shadow')
    return [].concat(v).map(l =>
      `${l.offsetX.value}px ${l.offsetY.value}px ${l.blur.value}px ${l.spread.value}px ${colorStr(l.color, doc)}`
    ).join(', ')
  return String(v)          // number · fontWeight · 타입 없는 cssRecipe 문자열
}

// ── YAML 출력 (의존성 없이) ────────────────────────────────────────
// 우리 값은 문자열·숫자·평평한 맵뿐이라 최소 구현으로 충분하다.
// 인용이 필요한 경우를 넓게 잡아 안전한 쪽으로 감싼다.
const needsQuote = s => s === '' || /^[-?:,[\]{}#&*!|>'"%@`]|[:#]\s|\s$|^\s|^(true|false|null|yes|no|on|off|~)$/i.test(s)
                        || /^[\d.+-]/.test(s) && !/^-?\d+(\.\d+)?$/.test(s)
const q = s => { const t = String(s); return needsQuote(t) ? `"${t.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"` : t }
const yKey = k => /^[A-Za-z0-9_-]+$/.test(k) ? k : `"${k}"`

function yaml(node, indent = 0){
  const pad = ' '.repeat(indent)
  const lines = []
  for (const [k, v] of Object.entries(node)){
    if (v === null || v === undefined) continue
    if (typeof v === 'object' && !Array.isArray(v)){
      if (!Object.keys(v).length) continue
      lines.push(`${pad}${yKey(k)}:`)
      lines.push(yaml(v, indent + 2))
    } else if (Array.isArray(v)){
      lines.push(`${pad}${yKey(k)}: [${v.map(q).join(', ')}]`)
    } else {
      lines.push(`${pad}${yKey(k)}: ${typeof v === 'number' ? v : q(v)}`)
    }
  }
  return lines.join('\n')
}

// YAML 을 손으로 만들므로, 만든 것을 되읽어 원본과 같은지 확인한다.
// 설명에 콜론·백틱·따옴표가 섞여 들어와 조용히 깨지는 것을 막는다.
// 파서는 우리가 내보내는 부분집합(중첩 맵 · 스칼라 · 인라인 배열)만 다룬다.
function parseYaml(text){
  const root = {}
  const stack = [{ indent: -1, node: root }]
  for (const raw of text.split('\n')){
    if (!raw.trim()) continue
    const indent = raw.length - raw.trimStart().length
    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop()
    const line = raw.trim()
    const i = line.indexOf(':')
    if (i < 0) throw new Error(`YAML 왕복: 콜론 없는 줄 — ${line}`)
    let key = line.slice(0, i).trim()
    if (key.startsWith('"') && key.endsWith('"')) key = key.slice(1, -1)
    const rest = line.slice(i + 1).trim()
    const parent = stack[stack.length - 1].node
    if (rest === ''){
      const child = {}
      parent[key] = child
      stack.push({ indent, node: child })
    } else if (rest.startsWith('[') && rest.endsWith(']')){
      parent[key] = rest.slice(1, -1).split(',').map(x => unq(x.trim())).filter(x => x !== '')
    } else {
      // 실제 YAML 이 거부하는 것을 여기서도 거부해야 왕복 검사가 의미를 갖는다.
      // 관대한 파서로 되읽으면 깨진 출력도 통과해 헛된 안심을 준다 — 실제로 한 번 겪었다.
      if (!(rest.startsWith('"') && rest.endsWith('"'))){
        if (/:\s/.test(rest)) throw new Error(`YAML 왕복: 인용 없는 값에 ": " 가 있다 — ${key}: ${rest.slice(0, 60)}`)
        if (/\s#/.test(rest))  throw new Error(`YAML 왕복: 인용 없는 값에 " #" 가 있다 — ${key}`)
        if (/^[-?:,[\]{}&*!|>'"%@`]/.test(rest)) throw new Error(`YAML 왕복: 인용 없는 값이 지시자로 시작한다 — ${key}`)
      }
      parent[key] = unq(rest)
    }
  }
  return root
}
function unq(v){
  if (v.startsWith('"') && v.endsWith('"'))
    return v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')
  return /^-?\d+(\.\d+)?$/.test(v) ? Number(v) : v
}
const norm = o => (o && typeof o === 'object' && !Array.isArray(o))
  ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, norm(v)]))
  : (Array.isArray(o) ? o.map(String) : String(o))
function assertYamlRoundTrip(obj, text){
  const back = parseYaml(text)
  const a = JSON.stringify(norm(obj)), b = JSON.stringify(norm(back))
  if (a !== b){
    for (const k of Object.keys(norm(obj)))
      if (JSON.stringify(norm(obj)[k]) !== JSON.stringify(norm(back)[k]))
        throw new Error(`YAML 왕복 불일치 — 최상위 키 "${k}" 에서 어긋난다`)
    throw new Error('YAML 왕복 불일치')
  }
}

// ── 사용처 색인 — 의도가 아니라 현실을 적는다 ──────────────────────
// $description 은 "무엇에 쓰라고 만들었나"(의도)를 적는다. 미래의 컴포넌트도 들어간다.
// usedBy 는 "지금 어느 컴포넌트가 실제로 쓰나"(현실)를 코드에서 긁어 적는다.
// 둘을 나란히 두면 어긋난 것이 눈에 보인다 — 실제로 손으로 적은 사용처 2건이
// 코드와 달랐다(0-39). 손으로 적으면 썩고, 긁어 오면 안 썩는다.
//
// 토큰 패키지가 React 패키지를 읽는 것은 방향이 거꾸로다. 그래서 **없으면 그냥 건너뛴다** —
// ds-tokens 를 단독으로 빌드해도 깨지지 않아야 한다(의존성 0 원칙). 모노레포·CI 에서는
// 항상 있으므로 drift 검사는 그대로 동작한다.
const REACT = path.resolve(DIR, '../react/src')
// 검증 페이지는 배포물이 아니다 — 사용처로 세면 "이 토큰은 쓰이고 있다"가 거짓이 된다.
const NOT_A_COMPONENT = new Set(['dev'])
function scanUsage(classNames){
  if (!fs.existsSync(REACT)) return null
  const map = new Map()
  const add = (k, c) => { if (!map.has(k)) map.set(k, new Set()); map.get(k).add(c) }
  const visit = (dir, comp) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name < b.name ? -1 : 1)){
      const p = path.join(dir, e.name)
      if (e.isDirectory()){ visit(p, comp ?? e.name); continue }
      if (!comp || NOT_A_COMPONENT.has(comp)) continue     // src 바로 아래 파일(배럴 등)은 컴포넌트가 아니다
      if (!/\.(css|jsx|tsx|js|ts)$/.test(e.name)) continue
      const text = fs.readFileSync(p, 'utf8')
      for (const m of text.matchAll(/var\((--[a-z0-9-]+)/g)) add(m[1], comp)
      // 타이포는 CSS 변수가 아니라 클래스로 쓰인다. `body-md` 가 `body-md-strong` 안에
      // 걸리지 않도록 하이픈까지 경계로 본다.
      for (const cn of classNames)
        if (new RegExp(`(?<![\\w-])${cn}(?![\\w-])`).test(text)) add(cn, comp)
    }
  }
  visit(REACT, null)
  return map
}

// ── front matter 조립 ──────────────────────────────────────────────
// 색은 라이트·다크 두 값을 함께 낸다. 하나만 넣으면 나머지 테마가 문서에서 사라진다.
// 그 외 토큰은 테마 축이 없으므로 값 하나다.
const L = new Map(walk(light, [], []).map(([p, t]) => [p.join('.'), t]))
const D = new Map(walk(dark,  [], []).map(([p, t]) => [p.join('.'), t]))

// 타이포 클래스 이름을 먼저 모은다 — 스캐너가 이 목록으로만 본문을 훑는다.
// base 와 compact 는 **같은 클래스 이름**을 쓴다(compact 는 미디어쿼리로 덮는다).
const TYPO_CLASSES = [...new Set([...L.keys()]
  .filter(k => k.startsWith('typography.'))
  .map(k => k.split('.')[2]))].sort()
const USAGE = scanUsage(TYPO_CLASSES)
const usedBy = k => {
  const v = USAGE?.get(k)
  return v && v.size ? [...v].sort() : null
}

const groups = {}
let nColor = 0, nOther = 0, nTypo = 0
for (const [key, t] of L){
  const p = key.split('.')
  if (p[0] === 'typography') continue                 // 아래에서 클래스로 따로 낸다
  if (!CSSVARS.has(cssVar(p))) continue               // primitive 팔레트 제외
  const g = p[0]
  const name = p.slice(1).join('-') || g
  const bucket = (groups[g] ??= {})
  if (t.$type === 'color'){
    const d = D.get(key)
    bucket[name] = { light: plainStr(t, light), dark: plainStr(d ?? t, dark) }
    nColor++
  } else if (t.$type === 'shadow'){
    const d = D.get(key)
    bucket[name] = { light: plainStr(t, light), dark: plainStr(d ?? t, dark) }
    nColor++
  } else {
    bucket[name] = plainStr(t, light)
    nOther++
  }
  const attach = (key, val) => {
    const b = bucket[name]
    if (typeof b === 'object') b[key] = val
    else groups[g][`${name}__${key}`] = val
  }
  if (t.$description) attach('note', t.$description.replace(/\s+/g, ' ').trim())
  const u = usedBy(cssVar(p))
  if (u) attach('usedBy', u)
}
// 설명·사용처는 값 옆에 두되, 스칼라 값에는 별도 키를 만들지 않고 묶음으로 바꾼다.
for (const [g, bucket] of Object.entries(groups)){
  for (const k of Object.keys(bucket)){
    const m = k.match(/^(.*)__(note|usedBy)$/)
    if (!m) continue
    const [, base, field] = m
    if (typeof bucket[base] !== 'object') bucket[base] = { value: bucket[base] }
    bucket[base][field] = bucket[k]
    delete bucket[k]
  }
}

// 타이포는 클래스로 나가므로 5속성을 풀어 낸다.
const typography = {}
for (const [key, t] of L){
  const p = key.split('.')
  if (p[0] !== 'typography') continue
  const set = p[1], name = p[2]
  const v = t.$value
  const res = r => {
    const n = String(r).slice(1, -1).split('.')
    let node = light
    for (const seg of n) node = node[seg]
    return plainStr(node, light)
  }
  const entry = {
    class: set === 'base' ? name : `${name} (compact)`,
    fontSize: res(v.fontSize), lineHeight: res(v.lineHeight),
    fontWeight: res(v.fontWeight), letterSpacing: res(v.letterSpacing),
  }
  if (t.$description) entry.note = t.$description.replace(/\s+/g, ' ').trim()
  const u = usedBy(name)                       // 클래스 이름은 base·compact 공용이다
  if (u) entry.usedBy = u
  typography[`${set}.${name}`] = entry
  nTypo++
}

// 실제로 쓰이고 있는 **토큰** 수. 컴포넌트가 자기 지역 커스텀 프로퍼티(`--ds-btn-ov-*`)를
// 쓰는 것도 var() 로 잡히므로, 우리 토큰(CSS 변수 또는 타이포 클래스)만 센다.
const nUsed = USAGE
  ? [...USAGE.keys()].filter(k => (CSSVARS.has(k) || TYPO_CLASSES.includes(k)) && USAGE.get(k).size).length
  : 0

const front = {
  name: 'iNext Design System',
  package: pkg.name,
  version: pkg.version,
  spec: 'DTCG 2025.10 (Format · Color Module, Final Community Group Report)',
  source: 'primitive.json + semantic.light.json + semantic.dark.json + typography.json (packages/tokens)',
  generatedBy: 'tokens/build-design-md.mjs — 직접 편집하지 않는다',
  themes: ['light', 'dark'],
  scope: `색·그림자 ${nColor} · 그 외 ${nOther} · 타이포 클래스 ${nTypo}. primitive 팔레트는 CSS 로 나가지 않으므로 제외한다.`,
  usage: USAGE
    ? `usedBy 는 packages/react/src 를 스캔한 **실제 사용처**다(검증 페이지 dev/ 제외). note 는 **의도**이고 usedBy 는 **현실**이라, 둘이 어긋나면 둘 중 하나가 틀린 것이다. 지금 ${nUsed}개 토큰이 쓰이고 있다.`
    : 'packages/react 가 없어 사용처를 스캔하지 않았다 — 토큰 패키지는 단독으로도 빌드된다.',
  typography,
  ...groups,
}

// ── 본문 ───────────────────────────────────────────────────────────
if (!fs.existsSync(NARR)) throw new Error(`narrative/ 가 없다 — 산문 원본이 있어야 한다: ${NARR}`)
const files = fs.readdirSync(NARR).filter(f => f.endsWith('.md')).sort()
if (!files.length) throw new Error('narrative/ 에 .md 가 없다')
const body = files.map(f => fs.readFileSync(`${NARR}/${f}`, 'utf8').trim()).join('\n\n')

const fm = yaml(front)
assertYamlRoundTrip(front, fm)
fs.writeFileSync(OUT, `---\n${fm}\n---\n\n${body}\n`)
console.log(`DESIGN.md — front matter ${nColor + nOther + nTypo}개(색·그림자 ${nColor} · 그 외 ${nOther} · 타이포 ${nTypo}) + narrative ${files.length}개`)
console.log(USAGE ? `사용처 색인 — packages/react 에서 ${nUsed}개 토큰 사용 확인` : '사용처 색인 — packages/react 없음, 건너뜀')
