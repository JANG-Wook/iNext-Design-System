import { forwardRef } from 'react'
import useFieldIds from '../Field/useFieldIds.js'
import './Switch.css'

/**
 * Switch — iNext Design System
 *
 * 동작 명세는 `COMPONENTS.md` 8-8 이 원본이다.
 *
 * **HTML 에 스위치 요소가 없다.** 네이티브 체크박스에 `role="switch"` 를 얹는다 —
 * APG 가 그렇게 하라고 적고 있고, 그러면 상태는 `aria-checked` 가 아니라 네이티브
 * `checked` 가 전달한다. `div + role="switch"` 로 만들면 Space 토글 · forced-colors ·
 * 폼 제출을 전부 다시 만들어야 한다.
 *
 * **Enter 를 가로채지 않는다.** APG 는 Enter 토글을 *선택* 으로 두는데, 네이티브
 * 체크박스는 Enter 로 폼을 제출한다. 폼 안에서 Enter 가 제출이라는 기대를 깨는 쪽이
 * 더 나쁘다(8-8).
 *
 * @param {object}   props
 * @param {string}   props.label            보이는 라벨. **"켜짐" 을 넣지 않는다** —
 *                                          상태는 role="switch" 가 전달한다
 * @param {boolean}  [props.checked]        제어 컴포넌트로 쓸 때
 * @param {boolean}  [props.defaultChecked]
 * @param {boolean}  [props.disabled=false]
 * @param {string}   [props.helper]
 * @param {string}   [props.id]             생략하면 useId 로 만든다 (KWCAG 8.1.1)
 * @param {(e: Event) => void} [props.onChange]
 */
const Switch = forwardRef(function Switch({
  label,
  disabled = false,
  helper,
  id: idProp,
  className,
  ...rest
}, ref) {
  const { id, helpId, describedBy } = useFieldIds({
    id: idProp, hasHelper: Boolean(helper),
  })

  return (
    <div className={['ds-switch', className].filter(Boolean).join(' ')}>
      <div className="ds-switch__row">
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={id}
          className="ds-switch__input"
          disabled={disabled || undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {/* 트랙과 손잡이는 장식이다 — 상태는 input 이 갖고 CSS 가 형제 선택자로 읽는다.
            켜짐/꺼짐을 색으로만 알리지 않는다: 손잡이가 실제로 움직인다(KWCAG 5.4.1). */}
        <span className="ds-switch__track" aria-hidden="true">
          <span className="ds-switch__thumb" />
        </span>
        <label className="ds-switch__label label-md" htmlFor={id}>{label}</label>
      </div>
      {helper && <p id={helpId} className="ds-switch__help label-sm">{helper}</p>}
    </div>
  )
})

export default Switch
