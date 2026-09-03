import { useId } from 'react'

/**
 * 라벨·도움말·오류의 id 와 aria-describedby 를 한 곳에서 만든다.
 *
 * **KWCAG 8.1.1** — 같은 컴포넌트를 여러 번 써도 id 가 겹치면 안 된다.
 * 손으로 문자열을 짓지 않는다.
 *
 * 오류가 떠도 도움말을 describedby 에 남긴다 — 형식 안내가 사라지면
 * WCAG 3.3.2 를 잃는다.
 */
export default function useFieldIds({ id: idProp, hasHelper, hasError, hasCount }) {
  const auto = useId()
  const id = idProp ?? `${auto}-control`
  const helpId = `${auto}-help`
  const errId = `${auto}-err`
  const countId = `${auto}-count`
  const describedBy = [
    hasHelper && helpId,
    hasError && errId,
    hasCount && countId,
  ].filter(Boolean).join(' ') || undefined
  return { id, helpId, errId, countId, describedBy }
}
