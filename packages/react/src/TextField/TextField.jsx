import { forwardRef } from 'react'
import '../Field/Field.css'
import './TextField.css'
import useFieldIds from '../Field/useFieldIds.js'

/**
 * TextField — iNext Design System
 *
 * 동작 명세는 `COMPONENTS.md` 8-2 가 원본이다. 명세와 어긋나면 명세가 맞다.
 *
 * **검증 시점은 이 컴포넌트가 갖지 않는다.** `error` 를 prop 으로 받는다 —
 * 폼 상태는 폼이 갖는다. 권장 규칙(submit 우선, 첫 submit 이후 blur)은 8-2 에 있다.
 *
 * @param {object}   props
 * @param {string}   props.label            보이는 라벨. placeholder 로 대체하지 않는다
 * @param {'md'|'lg'} [props.size='md']
 * @param {string}   [props.helper]         형식 안내 (3.3.2)
 * @param {string}   [props.error]          오류 메시지. 있으면 aria-invalid 가 켜진다 (3.3.1)
 * @param {boolean}  [props.required=false] 보이는 "필수" 표시 + 네이티브 required
 * @param {boolean}  [props.disabled=false] 네이티브 disabled — 예외적으로만
 */
const TextField = forwardRef(function TextField({
  label,
  size = 'md',
  type = 'text',
  helper,
  error,
  required = false,
  disabled = false,
  className,
  id: idProp,
  ...rest
}, ref) {
  if (!label && !rest['aria-label']) {
    throw new Error('TextField: label 또는 aria-label 이 필요하다 (WCAG 4.1.2)')
  }
  const invalid = Boolean(error)
  const { id, helpId, errId, describedBy } =
    useFieldIds({ id: idProp, hasHelper: Boolean(helper), hasError: invalid })

  return (
    <div className={['ds-field', className].filter(Boolean).join(' ')}
         data-size={size} data-invalid={invalid || undefined}>
      {label && (
        <label className="ds-field__label label-md" htmlFor={id}>
          {label}
          {required && <span className="ds-field__required">필수</span>}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type={type}
        className="ds-field__input body-md"
        required={required || undefined}
        disabled={disabled || undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {helper && <p id={helpId} className="ds-field__help label-sm">{helper}</p>}
      {invalid && <p id={errId} className="ds-field__error label-sm">{error}</p>}
    </div>
  )
})

export default TextField
