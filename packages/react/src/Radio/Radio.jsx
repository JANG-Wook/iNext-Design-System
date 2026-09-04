import { forwardRef, useId } from 'react'
import { useRadioGroup } from './RadioGroup.jsx'
import './Radio.css'

/**
 * Radio — iNext Design System
 *
 * 동작 명세는 `COMPONENTS.md` 8-6 이 원본이다.
 *
 * **키보드는 우리가 만들지 않는다.** 같은 `name` 을 공유하는 네이티브 라디오는
 * 화살표 이동(이동 + 선택이 함께) · 묶음당 탭 정지 1개 · Space 를 브라우저가 준다.
 * `div + role="radio"` 로 만들면 그 전부를 다시 구현해야 한다.
 *
 * `name` · `disabled` · 선택 상태는 `RadioGroup` 이 준다. 밖에서 쓰면 throw 한다.
 *
 * @param {object}  props
 * @param {string}  props.value   이 항목의 값
 * @param {string}  props.label   보이는 라벨. 접근 이름이 된다
 * @param {boolean} [props.disabled=false]  이 항목만 끈다 (묶음 전체는 RadioGroup)
 * @param {string}  [props.id]    생략하면 useId 로 만든다 (KWCAG 8.1.1)
 */
const Radio = forwardRef(function Radio({
  value,
  label,
  disabled = false,
  id: idProp,
  className,
  ...rest
}, ref) {
  const g = useRadioGroup()
  const auto = useId()
  const id = idProp ?? `${auto}-radio`

  // 제어/비제어를 묶음이 정한다 — 항목이 따로 상태를 갖지 않는다.
  const selection = g.controlled
    ? { checked: g.value === value }
    : { defaultChecked: g.defaultValue === value }

  return (
    <div className={['ds-radio', className].filter(Boolean).join(' ')}>
      <input
        ref={ref}
        type="radio"
        id={id}
        className="ds-radio__input"
        name={g.name}
        value={value}
        disabled={disabled || undefined}
        aria-invalid={g.invalid || undefined}
        onChange={g.onChange}
        {...selection}
        {...rest}
      />
      {/* 원은 장식이다 — 상태는 input 이 갖고 CSS 가 형제 선택자로 읽는다.
          체크박스와 달리 표시가 가운데 점이다. SVG 로 그린다 — 글꼴 문자에 기대지 않는다. */}
      <span className="ds-radio__circle" aria-hidden="true">
        <svg className="ds-radio__mark" viewBox="0 0 20 20">
          <circle className="ds-radio__dot" cx="10" cy="10" r="4" fill="currentColor" />
        </svg>
      </span>
      <label className="ds-radio__label label-md" htmlFor={id}>{label}</label>
    </div>
  )
})

export default Radio
