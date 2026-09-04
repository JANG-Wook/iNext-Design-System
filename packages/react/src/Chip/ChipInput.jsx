import { forwardRef } from 'react'
import { X } from 'lucide-react'
import './Chip.css'

/**
 * ChipInput — 값을 담는 칩. 명세는 `COMPONENTS.md` 8-7.
 *
 * **`onRemove` 가 구조를 바꾼다.**
 *
 *   onRemove 있음 → `<span>` 컨테이너 + 본문 `<button>` + 삭제 `<button>`
 *                   `<button>` 안에 `<button>` 을 넣을 수 없어서다. **탭 정지 2개.**
 *                   수신자 10명이면 20번 탭이다 — 그 대가를 알고 쓴다
 *   onRemove 없음 → 칩 전체가 `<button>` 하나. **탭 정지 1개**
 *
 * 삭제 버튼 이름에 **대상이 들어간다** — "삭제" 로만 지으면 어느 칩인지 알 수 없다
 * (WCAG 2.5.3). Search 의 지우기 버튼(8-4)과 같은 규칙이다.
 *
 * **삭제 뒤 포커스를 컴포넌트가 옮긴다.** 버튼이 사라지면 포커스가 `body` 로 떨어져
 * 키보드 사용자가 위치를 잃는다 — 8-4 Search 의 지우기에서 겪은 그 문제다.
 * `onRemove` 를 부르기 **전에** 옮긴다: 그 시점에는 아직 모든 칩이 DOM 에 있다.
 * 다음 칩 → 없으면 이전 칩 순이다. **마지막 칩을 지울 때는 갈 곳이 없다** —
 * 그때만 호출자가 받는다(미결 ②).
 *
 * @param {object}   props
 * @param {string}   props.label
 * @param {() => void} [props.onClick]    본문을 눌렀을 때. 팝오버·모달을 여는 자리
 * @param {() => void} [props.onRemove]   주면 ✕ 가 생긴다
 * @param {string}   [props.removeLabel]  삭제 버튼 이름. 기본 `${label} 삭제`
 * @param {boolean}  [props.disabled=false]
 */
const ChipInput = forwardRef(function ChipInput({
  label, onClick, onRemove, removeLabel, disabled = false, className, ...rest
}, ref) {
  const cls = ['ds-chip', 'ds-chip--input', className].filter(Boolean).join(' ')

  // ✕ 가 없으면 컨트롤이 하나다. 굳이 컨테이너로 감싸지 않는다 — 탭 정지도 하나다.
  if (!onRemove) {
    return (
      <button
        ref={ref}
        type="button"
        className={`${cls} label-md`}
        disabled={disabled || undefined}
        onClick={onClick}
        {...rest}
      >
        <span className="ds-chip__text">{label}</span>
      </button>
    )
  }

  // 사라질 버튼에서 포커스를 먼저 빼낸다. onRemove 가 상태를 바꾸면 이 노드는 없어진다.
  const handleRemove = (e) => {
    const chip = e.currentTarget.closest('.ds-chip--removable')
    const pick = (el) => el?.querySelector('.ds-chip__remove:not(:disabled)')
                      ?? el?.querySelector('.ds-chip__body:not(:disabled)')
    const next = pick(chip?.nextElementSibling) ?? pick(chip?.previousElementSibling)
    next?.focus()
    onRemove(e)
  }

  return (
    <span className={`${cls} ds-chip--removable`} {...rest}>
      <button
        ref={ref}
        type="button"
        className="ds-chip__body label-md"
        disabled={disabled || undefined}
        onClick={onClick}
      >
        <span className="ds-chip__text">{label}</span>
      </button>
      <button
        type="button"
        className="ds-chip__remove"
        aria-label={removeLabel ?? `${label} 삭제`}
        disabled={disabled || undefined}
        onClick={handleRemove}
      >
        {/* 아이콘은 16px 인데 히트박스는 24×24 다 — 크기는 CSS 가 정한다(2.5.8) */}
        <span className="ds-chip__icon" aria-hidden="true"><X /></span>
      </button>
    </span>
  )
})

export default ChipInput
