/* AA 대비 전수 검사 — 텍스트 색 × 배경 면 4종 × 라이트/다크
   기준: WCAG 2.2 AA 1.4.3 / KWCAG 5.4.3 — 텍스트 4.5:1
   반투명색은 배경에 합성한 뒤 계산한다(CLAUDE.md).
   재작성: 2026-08-27 (스크래치패드 소실로 복구) */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const D = path.join(path.dirname(fileURLToPath(import.meta.url)), '..') + '/'
const P = JSON.parse(fs.readFileSync(D + 'primitive.json'))
const L = JSON.parse(fs.readFileSync(D + 'semantic.light.json'))
const K = JSON.parse(fs.readFileSync(D + 'semantic.dark.json'))
const NS = 'net.infobank.ds.alpha'

const hexOf = v => (v && typeof v === 'object' && typeof v.hex === 'string') ? v.hex : v
const ref = v => hexOf(v.slice(1, -1).split('.').reduce((o, k) => o[k], { color: P.color }).$value)
const op  = r => P.opacity[String(r).match(/opacity\.([\d.]+)/)[1]].$value
const h2r = h => { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255] }
const s2l = c => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
const lum = h => { const [r,g,b] = h2r(h).map(v => s2l(v / 255)); return 0.2126*r + 0.7152*g + 0.0722*b }
const R   = (a, b) => { const [x,y] = [lum(a), lum(b)].sort((m,n) => n - m); return (x + 0.05) / (y + 0.05) }
const hx  = v => '#' + v.map(x => Math.round(x).toString(16).padStart(2,'0')).join('')
/* 반투명 토큰을 배경에 합성해 실제 렌더 색을 만든다 */
const flat = (t, bg) => {
  const h = ref(t.$value), a = t.$extensions?.[NS]
  if (!a) return h
  const al = op(a), B = h2r(bg), Fg = h2r(h)
  return hx(Fg.map((c, i) => c * al + B[i] * (1 - al)))
}

/* CLAUDE.md — 검사에서 빼는 것 (KWCAG 5.4.3 예외): 비활성·장식 목적 */
const SKIP = ['disable', 'assistive']
/* 배경 면 4종 */
const SURF = ['normal', 'normalAlternative', 'elevated', 'elevatedAlternative']
/* 면 위에 올라가는 텍스트 역할 그룹. accent.bg / static 은 텍스트가 아니라 제외.
   inverse.label 은 inverse.background 위에만 놓이므로 이 검사 대상이 아니다. */
// cool.neutral30 과 atomic.* 은 2026-09-01 에 제거됐다(DECISIONS 0-23) — 목록에서도 뺐다.
// cool 은 역할이 없고 다크에서 1.70:1 이었으며, atomic 은 status 와 값이 같은 팔레트식 이름이었다.
const TEXT_GROUPS = ['label', 'status', 'primary']
const TEXT_NESTED = [['accent', 'fg']]

let n = 0, bad = 0
const fails = []
console.log('■ 텍스트 색 × 배경 면 전수 검사 (KWCAG 5.4.3 / WCAG 1.4.3 — 4.5:1)\n')
for (const [theme, S] of [['라이트', L], ['다크', K]]) {
  for (const s of SURF) {
    const bgTok = S.color.bg[s]
    if (!bgTok) { console.log(`  ✗ ${theme} bg.${s} 없음`); bad++; continue }
    const bg = flat(bgTok, ref(bgTok.$value))          // 면 자체가 반투명이면 자기 base 위에 합성
    const targets = []
    for (const g of TEXT_GROUPS)
      for (const [name, t] of Object.entries(S.color[g] || {}))
        if (!name.startsWith('$') && !SKIP.includes(name)) targets.push([`${g}.${name}`, t])
    for (const [g, sub] of TEXT_NESTED)
      for (const [name, t] of Object.entries(S.color[g]?.[sub] || {}))
        if (!name.startsWith('$')) targets.push([`${g}.${sub}.${name}`, t])
    for (const [label, t] of targets) {
      const fg = flat(t, bg)
      const r = R(fg, bg)
      n++
      if (r < 4.5) { bad++; fails.push(`${theme} ${label} on bg.${s} = ${r.toFixed(2)}`) }
    }
  }
}
if (fails.length) { console.log('  미달:'); fails.forEach(f => console.log('    ✗ ' + f)) }
console.log(`\n총 ${n}건 검사 · 미달 ${bad}건`)

/* 비텍스트 대비 — WCAG 2.2 AA 1.4.11 (3:1)
   KWCAG 2.2 에는 대응 항목이 **없다**. 3:1 은 WCAG 만의 요구다(DECISIONS 4-1).

   범위를 넓게 잡지 않는다. 1.4.11 은 "컴포넌트와 상태를 **식별하는 데 필요한**" 시각
   정보만 대상이고, Understanding 문서는 히트 영역 경계선을 요구하지 않는다고 명시한다 —
   컨트롤 안에 보이는 콘텐츠(글자·충분히 대비되는 아이콘)가 있으면 테두리는 면제다.
   그래서 outline Button 의 테두리(`line.normal`, 1.31)는 위반이 아니다. 글자가 있다.

   대상은 **테두리가 유일한 식별 수단인 컨트롤**이다 — 빈 입력 필드, 미체크 상태의
   체크박스·라디오. 우리 토큰에서 그 자리를 맡는 것은 `line.strong` 하나뿐이다(0-38).
   여기 목록을 늘릴 때는 "그 색이 없으면 컨트롤이 거기 있는지 알 수 없는가" 를 먼저 묻는다. */
const NONTEXT = [
  ['line.strong', S => S.color.line.strong,
   '컨트롤 경계선 — 빈 입력 필드·미체크 체크박스는 이 선 말고 식별 수단이 없다'],
]
let nn = 0, nbad = 0
const nfails = []
console.log('\n■ 비텍스트 대비 — 컨트롤 경계 (WCAG 1.4.11 — 3:1)\n')
for (const [theme, S] of [['라이트', L], ['다크', K]]) {
  for (const [label, pick, why] of NONTEXT) {
    const tok = pick(S)
    if (!tok) { console.log(`  ✗ ${theme} ${label} 없음 — 목록을 고치거나 토큰을 되살린다`); nbad++; continue }
    const row = []
    for (const s of SURF) {
      const bgTok = S.color.bg[s]
      const bg = flat(bgTok, ref(bgTok.$value))
      const r = R(flat(tok, bg), bg)
      row.push(r)
      nn++
      if (r < 3) { nbad++; nfails.push(`${theme} ${label} on bg.${s} = ${r.toFixed(2)}`) }
    }
    const min = Math.min(...row)
    console.log(`  ${theme} ${label.padEnd(14)} ${row.map(r => r.toFixed(2)).join('  ')}   최소 ${min.toFixed(2)} ${min >= 3 ? '✔' : '✘'}`)
    if (min >= 3 && min < 3.2) console.log(`         ⚠ 여유 ${(min - 3).toFixed(2)} — 면 색을 조금만 바꿔도 미달로 떨어진다`)
  }
}
if (nfails.length) { console.log('  미달:'); nfails.forEach(f => console.log('    ✗ ' + f)) }
console.log(`\n총 ${nn}건 검사 · 미달 ${nbad}건`)
console.log(`  (면 순서: ${SURF.join(' · ')})`)
bad += nbad

/* 참고 — 면 사이 대비(규정 요건 아님, DECISIONS 4-2) */
console.log('\n■ 참고 — 면 사이 대비 (규정 요건 아님)')
for (const [theme, S] of [['라이트', L], ['다크', K]]) {
  const base = flat(S.color.bg.normal, ref(S.color.bg.normal.$value))
  const out = SURF.slice(1).map(s => {
    const v = flat(S.color.bg[s], base)
    return `${s} ${R(v, base).toFixed(2)}:1`
  })
  console.log(`  ${theme}: ${out.join('  ·  ')}`)
}
process.exit(bad ? 1 : 0)
