import { forwardRef, useId } from 'react'
import { useChipGroup } from './ChipGroup.jsx'
import './Chip.css'

/**
 * ChipSelect — 여럿 중 하나를 고르는 칩. 명세는 `COMPONENTS.md` 8-7.
 *
 * **동작은 Radio 다**(8-6) — 껍데기만 알약이다. 키보드는 우리가 만들지 않는다:
 * 같은 `name` 을 공유하는 네이티브 라디오가 화살표 이동·묶음당 탭 정지 1개를 준다.
 *
 * 진짜 `<input>` 을 숨기지 않고 알약 위에 투명하게 겹친다 —
 * `display:none` 은 보조기술에서도 사라진다.
 *
 * @param {object}  props
 * @param {string}  props.value
 * @param {string}  props.label
 * @param {boolean} [props.disabled=false]
 */
const ChipSelect = forwardRef(function ChipSelect({
  value, label, disabled = false, id: idProp, className, ...rest
}, ref) {
  const g = useChipGroup()
  const auto = useId()
  const id = idProp ?? `${auto}-chip`
  const selection = g.controlled
    ? { checked: g.value === value }
    : { defaultChecked: g.defaultValue === value }

  return (
    <span className={['ds-chip', 'ds-chip--select', className].filter(Boolean).join(' ')}>
      <input
        ref={ref}
        type="radio"
        id={id}
        className="ds-chip__input"
        name={g.name}
        value={value}
        disabled={disabled || undefined}
        onChange={g.onChange}
        {...selection}
        {...rest}
      />
      <label className="ds-chip__label label-md" htmlFor={id}>{label}</label>
    </span>
  )
})

export default ChipSelect
