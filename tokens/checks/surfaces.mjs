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
// cool.neutral30 은 제외 — 라이트·다크가 같은 색(coolGray.700)이라 테마 적응형 텍스트가 아니다.
// 역할이 정의돼 있지 않다(미결 5). 텍스트로 쓰인다면 다크에서 1.70~2.05:1 로 미달이다.
const TEXT_GROUPS = ['label', 'status', 'primary', 'atomic']
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
