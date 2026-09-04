/* ============================================================
 *  측정기 — 검증 페이지 전용. 배포물이 아니다.
 *
 *  왜 있나. 브라우저 실측이 여섯 번 거짓말했고 그중 **넷이 즉석 측정 코드** 탓이었다.
 *    0-34  테마를 스크립트로 바꾸고 재계산 전 값을 읽음        (2건)
 *    0-38  알파를 배경에 합성하지 않음                        (1건)
 *    0-41  알파를 합성하지 않음 — 같은 실수 반복               (1건)
 *
 *  알파 합성은 `CLAUDE.md` 에 규칙으로 적혀 있었는데도 두 번 틀렸다. 지식을 적는 것으로는
 *  안 됐다 — **매번 손으로 다시 짜기 때문**이다. 그래서 한 번만 짜서 여기 둔다.
 *
 *  정답은 `packages/tokens/checks/surfaces.mjs` 에 있다. 이 파일은 그것을 브라우저에서
 *  쓸 수 있게 옮긴 것이고, **같은 답을 내야 한다.** 그래서 `selfCheck()` 가 들어 있고
 *  페이지가 뜰 때마다 돌아 결과를 화면에 띄운다 — 측정기를 믿을 수 있는지 먼저 본다.
 *
 *  설계 원칙 하나: **모르는 형식이면 던진다.** 예전 즉석 코드는 hex 를 못 읽고 `null`
 *  이나 쓰레기 값을 돌려줘서 `#71737900` 같은 결과를 냈다. 조용히 틀리느니 멈춘다.
 * ============================================================ */

/** CSS 색 문자열 → [r, g, b, a]. 모르는 형식이면 던진다. */
export function parse(css) {
  if (typeof css !== 'string') throw new Error(`색이 문자열이 아니다: ${css}`)
  const s = css.trim()
  if (s === 'transparent') return [0, 0, 0, 0]
  const hexM = s.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)
  if (hexM) {
    const h = hexM[1].length === 3 ? hexM[1].split('').map(c => c + c).join('') : hexM[1]
    const n = parseInt(h, 16)
    return [n >> 16 & 255, n >> 8 & 255, n & 255, 1]
  }
  const fnM = s.match(/^rgba?\(([^)]+)\)$/)
  if (fnM) {
    const p = fnM[1].split(/[,/\s]+/).filter(Boolean).map(Number)
    if (p.length < 3 || p.slice(0, 3).some(Number.isNaN)) throw new Error(`rgb 를 읽을 수 없다: ${css}`)
    return [p[0], p[1], p[2], p.length > 3 && !Number.isNaN(p[3]) ? p[3] : 1]
  }
  throw new Error(`모르는 색 형식이다: ${css} — 측정기가 지원하는 것은 hex · rgb() · rgba() 뿐이다`)
}

/**
 * 반투명색을 배경에 합성해 **실제 렌더되는 색**을 만든다.
 * 8비트로 반올림한다 — 브라우저가 칠하는 것이 8비트이고 `surfaces.mjs` 도 합성 후
 * hex 로 반올림한다. 반올림하지 않으면 두 구현이 소수 둘째 자리에서 어긋난다.
 */
export function composite(fg, bg) {
  const f = Array.isArray(fg) ? fg : parse(fg)
  const b = Array.isArray(bg) ? bg : parse(bg)
  const a = f.length > 3 ? f[3] : 1
  return [0, 1, 2].map(i => Math.round(f[i] * a + b[i] * (1 - a))).concat(1)
}

const s2l = c => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
const lum = c => {
  const [r, g, b] = c.slice(0, 3).map(v => s2l(v / 255))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/** 대비. 인자는 **불투명한 색**이어야 한다 — 알파가 남아 있으면 던진다. */
export function contrast(a, b) {
  const A = Array.isArray(a) ? a : parse(a)
  const B = Array.isArray(b) ? b : parse(b)
  for (const [c, which] of [[A, '앞'], [B, '뒤']])
    if (c.length > 3 && c[3] !== 1)
      throw new Error(`${which} 색에 알파가 남아 있다(${c[3]}) — composite() 로 배경에 합성한 뒤 넘긴다`)
  const [x, y] = [lum(A), lum(B)].sort((m, n) => n - m)
  return +((x + 0.05) / (y + 0.05)).toFixed(2)
}

export const hex = c => '#' + c.slice(0, 3).map(v => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase()

/**
 * 요소 **뒤에 실제로 깔린 면**을 찾는다. 조상을 거슬러 올라가며 불투명해질 때까지 합성한다.
 * 0-33 이 이것 때문이었다 — 페이지가 자기 배경을 안 칠하면 토큰이 엉뚱한 바탕 위에 얹힌다.
 */
export function surfaceOf(el) {
  const stack = []
  for (let n = el.parentElement; n; n = n.parentElement) {
    const c = parse(getComputedStyle(n).backgroundColor)
    if (c[3] === 0) continue
    stack.push(c)
    if (c[3] === 1) break
  }
  // 브라우저 캔버스는 흰색으로 본다 — 아무것도 안 칠해져 있으면 그게 실제다
  let base = [255, 255, 255, 1]
  for (const c of stack.reverse()) base = composite(c, base)
  return base
}

/** 컨트롤 하나의 면·글자·테두리를 한 번에 읽는다. 전부 합성된 값이다. */
export function readControl(el) {
  const cs = getComputedStyle(el)
  const page = surfaceOf(el)
  const fill = composite(cs.backgroundColor, page)
  const text = composite(cs.color, fill)
  const shadowColor = (cs.boxShadow || '').match(/rgba?\([^)]+\)|#[0-9a-fA-F]{3,6}/)
  const borderRaw = shadowColor ? shadowColor[0]
    : (cs.borderTopWidth !== '0px' ? cs.borderTopColor : null)
  const border = borderRaw ? composite(borderRaw, fill) : null
  return {
    면: hex(fill), 면대비: contrast(fill, page),
    글자: hex(text), 글자대비: contrast(text, fill),
    테두리: border ? hex(border) : null,
    테두리대비: border ? contrast(border, page) : null,
    크기: `${Math.round(el.getBoundingClientRect().width)}×${Math.round(el.getBoundingClientRect().height)}`,
  }
}

/**
 * 자기검사 — 측정기가 `surfaces.mjs` 와 같은 계산을 하는지 본다.
 * 토큰 값이 아니라 **계산 자체**를 검사한다. 토큰을 바꿔도 안 깨지고, 두 번 저지른
 * "알파를 합성하지 않는" 실수는 정확히 여기서 걸린다.
 */
export function selfCheck() {
  const cases = [
    ['검정 위 흰색 = 21', () => contrast('#000000', '#FFFFFF'), 21],
    ['같은 색 = 1', () => contrast('#FFFFFF', '#FFFFFF'), 1],
    ['50% 검정을 흰 면에 합성 = #808080', () => hex(composite('rgba(0,0,0,0.5)', '#FFFFFF')), '#808080'],
    // 합성을 건너뛰면 21 이 나온다 — 0-38 · 0-41 의 그 실수다.
    // 3.95 는 손으로 넣지 않고 자기검사가 잡아준 값이다. 처음엔 5.32 로 적었다가 틀렸다(0-49).
    ['50% 검정 합성 후 대비 = 3.95', () => contrast(composite('rgba(0,0,0,0.5)', '#FFFFFF'), '#FFFFFF'), 3.95],
    ['알파가 남은 색은 던진다', () => { try { contrast('rgba(0,0,0,0.5)', '#FFFFFF'); return '안 던짐' } catch { return '던짐' } }, '던짐'],
    ['모르는 형식은 던진다', () => { try { parse('color(srgb 1 0 0)'); return '안 던짐' } catch { return '던짐' } }, '던짐'],
    ['hex 를 읽는다', () => hex(parse('#147C6D')), '#147C6D'],
  ]
  const results = cases.map(([name, fn, want]) => {
    let got
    try { got = fn() } catch (e) { got = `오류: ${e.message}` }
    return { name, got, want, ok: got === want }
  })
  return { ok: results.every(r => r.ok), results }
}
