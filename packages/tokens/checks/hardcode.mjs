// ============================================================
//  하드코딩 검사 — 소비자 코드가 토큰 대신 값을 직접 쓰는지 본다
//  실행: node tokens/checks/hardcode.mjs [경로...]
//
//  DESIGN.md 는 "쓰지 마라"고 설득할 뿐이고, 막는 것은 이 스크립트다.
//
//  오탐을 줄이는 것이 이 도구의 전부다. 시끄러운 린터는 꺼진다.
//  그래서 CSS 선언(`속성: 값`)만 보고, 아래는 애초에 검사하지 않는다.
//    - 템플릿 보간(`${...}`)·문자열 결합 — 토큰에서 계산된 값이다
//    - 토큰 소스와 빌드 산출물 — 원시 값이 사는 곳이거나 생성물이다
//    - 주석
// ============================================================
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// 검사 범위는 저장소 전체다 — 컴포넌트 패키지도 본다.
// 눈금(스케일)은 토큰 패키지의 tokens.css 에서 읽으므로 두 경로를 따로 잡는다.
const PKG  = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')   // packages/tokens
const ROOT = path.resolve(PKG, '../..')                                          // 저장소 루트

// ── 검사하지 않는 경로 ─────────────────────────────────────────────
const SKIP_DIR  = new Set(['node_modules', '.git', 'dist', 'narrative'])
const SKIP_FILE = new Set([
  'packages/tokens/tokens.css',   // 생성물 — 원시 값이 여기로 나오는 게 정상
  'packages/tokens/tokens.js',    // 생성물
  'packages/tokens/DESIGN.md',    // 생성물
])
const EXT = new Set(['.css', '.html', '.jsx', '.tsx', '.vue', '.svelte'])

// ── 파일 단위 예외 — 이유 없이 등록하지 않는다 ─────────────────────
// TIER_EXEMPT · RATIO_EXEMPT 와 같은 규약이다. 예외가 쓸모없어지면 실패시킨다.
// 형식: '경로': '이유'. 지금은 비어 있다 — 뷰어 두 개도 걸리는 것이 없다.
// 예외가 더는 필요 없어지면 실패시킨다(TIER_EXEMPT 와 같은 규약).
const FILE_EXEMPT = {}

// ── 규칙 ───────────────────────────────────────────────────────────
// 속성을 좁게 잡는다. 아무 곳의 숫자나 잡으면 오탐만 늘어난다.
const COLOR_PROPS = /^(color|background|background-color|background-image|border|border-[a-z-]+|outline|outline-color|fill|stroke|box-shadow|text-shadow|caret-color|accent-color|column-rule|column-rule-color)$/
// 논리 속성과 크기까지 잡는다. `padding-[a-z]+` 는 하이픈이 하나 더 붙는 순간 빠져나가
// padding-inline-start 를 놓쳤고, width·min-block-size 류는 아예 목록에 없었다.
// 컴포넌트가 실제로 쓰는 속성이 검사 밖에 있었다는 뜻이다.
const SPACE_PROPS = /^(margin|margin-[a-z-]+|padding|padding-[a-z-]+|gap|row-gap|column-gap|border-radius|border-[a-z-]*radius|inset|inset-[a-z-]+|top|right|bottom|left|width|height|min-width|max-width|min-height|max-height|inline-size|block-size|min-inline-size|max-inline-size|min-block-size|max-block-size|flex-basis)$/
const TYPO_PROPS  = /^(font|font-size|line-height|letter-spacing|font-weight)$/
// 시간은 duration 눈금, 층은 zIndex 눈금이다 — 둘 다 목록에 없어 통째로 사각지대였다.
const TIME_PROPS  = /^(transition|transition-duration|transition-delay|animation|animation-duration|animation-delay)$/
const Z_PROP      = /^z-index$/

const COLOR_LIT = /#[0-9a-fA-F]{3,8}\b|\brgba?\s*\(|\bhsla?\s*\(|\boklch\s*\(|\bcolor-mix\s*\(/
const DIM_LIT   = /(?<![\w.-])(\d+(?:\.\d+)?)(px|rem|em|ch)\b/g
// `.18s` 처럼 앞자리 0 이 없는 표기가 실제로 있었다 — 정수만 보면 놓친다.
const TIME_LIT  = /(?<![\w.-])(\d*\.\d+|\d+)(ms|s)\b/g

// 값 자체가 의미인 구조적 상수 — CLAUDE.md 의 하드코딩 예외
const STRUCTURAL = new Set(['0', '0px', '0rem', '1', 'auto', 'inherit', 'initial', 'unset', 'none',
                            '100%', '50%', '1px'])

// 값이 코드면 스타일 선언이 아니다 — JS 객체 키가 CSS 속성과 이름이 같을 뿐이다.
// (실제로 preview.html 의 `lineHeight: t => ...` 를 잘못 잡았다.)
function isComputed(v){
  if (/=>|\bfunction\b/.test(v)) return true          // 값이 함수다
  if (v.includes('${')) return true                     // 템플릿 보간 — 토큰에서 계산된다
  if (/['"]\s*\+/.test(v)) return true                  // 문자열 결합
  if (v.includes('var(') && !COLOR_LIT.test(v.replace(/var\([^)]*\)/g, ''))) return true
  return false
}

// ── CSS 선언 뽑기 ──────────────────────────────────────────────────
// 정식 파서를 두지 않는다. 선언 한 줄 단위로만 보므로 그 정도면 충분하고,
// 놓치는 쪽이 잘못 잡는 쪽보다 낫다(오탐이 이 도구를 죽인다).
function declarations(text, ext){
  const out = []
  const lines = text.split('\n')
  let inStyle = ext === '.css'
  let inComment = false
  lines.forEach((raw, i) => {
    let line = raw
    if (ext !== '.css'){
      if (/<style[\s>]/i.test(line)) inStyle = true
      if (/<\/style>/i.test(line))   { inStyle = false }
    }
    // 블록 주석
    if (inComment){ if (line.includes('*/')) { inComment = false; line = line.slice(line.indexOf('*/') + 2) } else return }
    let ci
    while ((ci = line.indexOf('/*')) !== -1){
      const cj = line.indexOf('*/', ci + 2)
      if (cj === -1){ inComment = true; line = line.slice(0, ci); break }
      line = line.slice(0, ci) + ' ' + line.slice(cj + 2)
    }
    if (line.trim().startsWith('//')) return

    // .css 는 전부, .html 은 <style> 안과 style= 줄, 그 외(jsx·vue·svelte)는 전 줄을 본다.
    // 전 줄을 봐도 되는 이유는 속성 목록이 좁기 때문이다 — color·padding·font-size 같은
    // 이름이 스타일이 아닌 뜻으로 쓰이는 경우는 드물다.
    const scan = ext === '.css' ? true
      : ext === '.html' ? (inStyle || /\bstyle\s*=/.test(raw))
      : true
    if (!scan) return
    // 값은 따옴표(JSX 인라인 스타일)로 싸여 있을 수도, 맨 값(CSS)일 수도 있다.
    for (const m of line.matchAll(/(^|[{;,\s])(-{0,2}[a-zA-Z][a-zA-Z0-9-]*)\s*:\s*(?:'([^']*)'|"([^"]*)"|`([^`]*)`|([^;{}\n,]+))/g)){
      const val = (m[3] ?? m[4] ?? m[5] ?? m[6] ?? '').trim()
      if (!val) continue
      // JSX 는 camelCase 다 — fontSize → font-size
      const prop = m[2].replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
      out.push({ line: i + 1, prop, val, raw: raw.trim() })
    }
  })
  return out
}

// ── 검사 ───────────────────────────────────────────────────────────
// 눈금은 축마다 다르다 — 길이(px·rem) · 시간(ms·s) · 층(z-index, 단위 없는 정수).
// 한 자루에 담으면 "300 이 duration 에 있으니 300px 도 괜찮다"가 되어버린다.
let scaleCache = null
function scales(){
  if (scaleCache) return scaleCache
  const dim = new Set(), time = new Set(), z = new Set()
  const css = fs.readFileSync(`${PKG}/tokens.css`, 'utf8')
  for (const m of css.matchAll(/^\s*(--[a-z0-9-]+)\s*:\s*([^;]+);/gm)){
    const name = m[1], v = m[2].trim()
    if (/^\d+(\.\d+)?(px|rem)$/.test(v)) dim.add(v)
    else if (/^\d+(\.\d+)?(ms|s)$/.test(v)) time.add(v)
    if (name.startsWith('--z-index-') && /^\d+$/.test(v)) z.add(v)
  }
  scaleCache = { dim, time, z }
  return scaleCache
}

function check(rel, text){
  const ext = path.extname(rel)
  const found = []
  const allowLines = new Set()
  // 줄 단위 예외 — 그 줄과 다음 줄을 덮는다.
  // 블록 예외 — 여러 줄이 같은 이유일 때만 쓴다(뷰어의 표본 상자처럼).
  //   /* ds-allow-block: 이유 */ … /* ds-allow-end */
  // 닫지 않으면 파일 끝까지 조용히 삼키므로 실패시킨다.
  let blockFrom = 0
  text.split('\n').forEach((l, i) => {
    const n = i + 1
    if (/ds-allow\s*:/.test(l)) { allowLines.add(n); allowLines.add(n + 1) }
    if (/ds-allow-block/.test(l) && !/ds-allow-block\s*:\s*\S/.test(l)){
      console.error(`  ✗ ${rel}:${n} ds-allow-block 에 이유가 없다`); process.exitCode = 1
    }
    if (/ds-allow-block\s*:\s*\S/.test(l) && !blockFrom) blockFrom = n
    if (/ds-allow-end/.test(l) && blockFrom){ for (let k = blockFrom; k <= n; k++) allowLines.add(k); blockFrom = 0 }
  })
  if (blockFrom){
    console.error(`  ✗ ${rel}:${blockFrom} ds-allow-block 이 닫히지 않았다 — /* ds-allow-end */ 를 둔다`)
    process.exitCode = 1
  }
  const scale = scales()
  // JSX 인라인 스타일은 단위 없는 숫자가 px 로 해석된다(`padding: 24`).
  // CSS 파일에서는 그런 표기가 애초에 무효라 이 규칙을 적용하지 않는다.
  // 한 줄에 style= 가 보이는 경우만 본다 — 여러 줄로 흩어진 스타일 객체는 놓친다(오탐보다 낫다).
  const jsxy = ext !== '.css' && ext !== '.html'

  for (const d of declarations(text, ext)){
    if (allowLines.has(d.line)) continue
    if (isComputed(d.val)) continue
    const bare = d.val.replace(/var\([^)]*\)/g, ' ')

    if (COLOR_PROPS.test(d.prop) && COLOR_LIT.test(bare))
      found.push({ ...d, rule: 'color', why: '색 리터럴 — semantic --color-* 를 쓴다' })

    if (TYPO_PROPS.test(d.prop) && !/^(inherit|initial|unset|normal|bold|1)$/.test(bare.trim()) && /[\d.]/.test(bare))
      found.push({ ...d, rule: 'typo', why: '타이포 리터럴 — 유틸리티 클래스(.body-md 등)를 쓴다' })

    if (SPACE_PROPS.test(d.prop)){
      for (const m of bare.matchAll(DIM_LIT)){
        const lit = m[1] + m[2]
        if (STRUCTURAL.has(lit)) continue
        if (!scale.dim.has(lit)) found.push({ ...d, rule: 'dim', why: `${lit} — 스케일에 없다. primitive 에 추가하고 참조한다` })
        else found.push({ ...d, rule: 'dim', why: `${lit} — 스케일에 있는 값이다. 해당 토큰의 var() 를 쓴다` })
      }
      if (jsxy && /\bstyle\s*=/.test(d.raw)){
        const n = bare.trim().match(/^(\d+(?:\.\d+)?)$/)
        if (n && !STRUCTURAL.has(n[1])){
          const px = `${n[1]}px`
          found.push({ ...d, rule: 'dim', why: scale.dim.has(px)
            ? `${n[1]} — 단위 없는 숫자는 ${px} 다. 스케일에 있으니 var() 를 쓴다`
            : `${n[1]} — 단위 없는 숫자는 ${px} 다. 스케일에 없다` })
        }
      }
    }

    if (TIME_PROPS.test(d.prop)){
      for (const m of bare.matchAll(TIME_LIT)){
        const lit = m[1] + m[2]
        if (lit === '0s' || lit === '0ms') continue
        found.push({ ...d, rule: 'time', why: `${lit} — ${scale.time.has(lit) ? '스케일에 있는 값이다' : '스케일에 없다'}. --duration-* 를 쓴다` })
      }
    }

    if (Z_PROP.test(d.prop)){
      const n = bare.trim()
      if (/^-?\d+$/.test(n) && n !== '0')
        found.push({ ...d, rule: 'z', why: `${n} — 층 순서는 --z-index-* 로 표현한다${scale.z.has(n) ? '(같은 값의 토큰이 있다)' : ''}` })
    }
  }
  return found
}

// ── 실행 ───────────────────────────────────────────────────────────
function collect(dir, out = []){
  for (const e of fs.readdirSync(dir, { withFileTypes: true })){
    if (e.name.startsWith('.') && e.name !== '.github') continue
    const p = path.join(dir, e.name)
    const rel = path.relative(ROOT, p)
    if (e.isDirectory()){ if (!SKIP_DIR.has(e.name)) collect(p, out); continue }
    if (!EXT.has(path.extname(e.name))) continue
    if (SKIP_FILE.has(rel)) continue
    out.push(rel)
  }
  return out
}

const args = process.argv.slice(2)
const files = args.length ? args.map(a => path.relative(ROOT, path.resolve(a))) : collect(ROOT)

let total = 0, exempted = 0, scanned = 0
const report = []
for (const rel of files){
  const abs = path.join(ROOT, rel)
  if (!fs.existsSync(abs)) { console.error(`  ✗ 없는 경로: ${rel}`); process.exitCode = 1; continue }
  scanned++
  const hits = check(rel, fs.readFileSync(abs, 'utf8'))
  if (!hits.length) continue
  if (FILE_EXEMPT[rel]) { exempted += hits.length; continue }
  total += hits.length
  report.push([rel, hits])
}

console.log('■ 하드코딩 검사 — CSS 선언에서 토큰 대신 값을 직접 쓴 곳')
console.log(`  파일 ${scanned}개 검사 · 예외 파일에서 ${exempted}건 무시`)
for (const [rel, hits] of report){
  console.log(`\n  ${rel}`)
  for (const h of hits) console.log(`    ${String(h.line).padStart(4)}  [${h.rule}] ${h.prop}: ${h.val.slice(0, 50)}\n          → ${h.why}`)
}
// 예외가 쓸모없어지면 알려준다 — 남겨두면 다음 사람이 오해한다
for (const rel of Object.keys(FILE_EXEMPT)){
  const abs = path.join(ROOT, rel)
  if (!fs.existsSync(abs)){
    console.log(`\n  ✗ FILE_EXEMPT 의 ${rel} 이 없다 — 예외를 지운다`); process.exitCode = 1
  } else if (!check(rel, fs.readFileSync(abs, 'utf8')).length){
    console.log(`\n  ✗ FILE_EXEMPT 의 ${rel} 에 걸리는 것이 없다 — 예외를 지운다`); process.exitCode = 1
  }
}
console.log(total ? `\n✗ ${total}건` : '\n✔ 0건')
console.log('\n  예외를 두려면 그 줄 위나 같은 줄에 /* ds-allow: 이유 */ 를 단다.')
if (total) process.exitCode = 1
