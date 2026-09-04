import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { CHIP_TYPO } from './chipTypo.js'
import './Chip.css'

/**
 * ChipFilter — 눌러서 목록을 여는 칩. 명세는 `COMPONENTS.md` 8-7.
 *
 * **트리거만이다.** 목록은 Dropdown(P1-5)의 몫이고 아직 없다.
 *
 * 그래서 `aria-haspopup="listbox"` 를 **붙이지 않는다.** 목록을 우리가 갖고 있지 않은데
 * 그 속성을 붙이면 APG Combobox 의 키보드 규약(↓로 열기 · Esc · 목록 안 화살표 이동)을
 * 약속하는 것이 되는데, 그 규약을 우리가 지킬 수 없다. `aria-expanded` 만 붙여
 * **"눌리면 뭔가 열린다"** 까지만 말한다. 남은 절반은 8-7 미결 ①이다.
 *
 * 접근 이름에 **선택된 값을 포함한다** — "정렬" 이 아니라 "정렬, 리뷰 많은 순" 이라야
 * 음성 제어 사용자가 짚을 수 있다(WCAG 2.5.3).
 *
 * @param {object}   props
 * @param {string}   props.label              필터 이름. 예: "정렬"
 * @param {string}   [props.selected]         선택된 값의 표시 문구. 예: "리뷰 많은 순"
 * @param {'xs'|'sm'|'md'} [props.size='sm']  24 · 32 · 40px — 라벨 12 · 14 · 15
 * @param {boolean}  [props.open=false]       목록이 열려 있는가 — 소비자가 갖는다
 * @param {boolean}  [props.disabled=false]
 * @param {() => void} [props.onClick]
 */
const ChipFilter = forwardRef(function ChipFilter({
  label, selected, size = 'sm', open = false, disabled = false, className, ...rest
}, ref) {
  const hasValue = selected != null && selected !== ''
  return (
    <button
      ref={ref}
      type="button"
      className={['ds-chip', 'ds-chip--filter', CHIP_TYPO[size] ?? CHIP_TYPO.sm, className]
        .filter(Boolean).join(' ')}
      data-size={size}
      aria-expanded={open}
      data-open={open || undefined}
      data-value={hasValue || undefined}
      disabled={disabled || undefined}
      {...rest}
    >
      {/* 라벨과 값을 한 문장으로 읽히게 둔다 — 따로 aria-label 을 만들지 않는다.
          보이는 글자가 곧 접근 이름이라야 음성 제어가 동작한다(2.5.3). */}
      <span className="ds-chip__text">{hasValue ? `${label}, ${selected}` : label}</span>
      <span className="ds-chip__icon" aria-hidden="true"><ChevronDown /></span>
    </button>
  )
})

export default ChipFilter
