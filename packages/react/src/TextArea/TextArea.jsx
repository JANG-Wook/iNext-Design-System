import { forwardRef } from 'react'
import '../Field/Field.css'
import './TextArea.css'
import useFieldIds from '../Field/useFieldIds.js'

/**
 * TextArea — iNext Design System
 *
 * 동작 명세는 `COMPONENTS.md` 8-3 이 원본이다.
 *
 * Text Field 와 같은 규약을 따른다 — 검증 시점은 폼이 갖고, 오류가 떠도
 * 도움말을 유지하며, id 는 `useId` 로 만든다.
 *
 * @param {object}   props
 * @param {string}   props.label
 * @param {number}   [props.rows=3]         기본 높이. 자동 확장은 하지 않는다(8-3 미결 ①)
 * @param {string}   [props.helper]
 * @param {string}   [props.error]
 * @param {number}   [props.maxLength]      주면 글자 수 표시가 함께 켜진다
 * @param {boolean}  [props.required=false]
 * @param {boolean}  [props.inactive=false]
 * @param {boolean}  [props.disabled=false]
 * @param {string}   [props.value]          카운터를 쓰려면 제어 컴포넌트여야 한다
 */
const TextArea = forwardRef(function TextArea({
  label,
  rows = 3,
  helper,
  error,
  maxLength,
  required = false,
  inactive = false,
  disabled = false,
  className,
  id: idProp,
  value,
  ...rest
}, ref) {
  if (!label && !rest['aria-label']) {
    throw new Error('TextArea: label 또는 aria-label 이 필요하다 (WCAG 4.1.2)')
  }

  const invalid = Boolean(error)
  // 카운터는 값을 알아야 한다. 비제어면 표시하지 않는다 — 틀린 숫자를 보여주지 않는다.
  const showCount = maxLength != null && value != null
  const { id, helpId, errId, countId, describedBy } = useFieldIds({
    id: idProp, hasHelper: Boolean(helper), hasError: invalid, hasCount: showCount,
  })

  return (
    <div className={['ds-field', className].filter(Boolean).join(' ')}
         data-invalid={invalid || undefined}>
      {label && (
        <label className="ds-field__label label-md" htmlFor={id}>
          {label}
          {required && <span className="ds-field__required">필수</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        className="ds-textarea body-md"
        value={value}
        maxLength={maxLength}
        required={required || undefined}
        disabled={disabled || undefined}
        aria-disabled={inactive || undefined}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {(helper || showCount) && (
        <div className="ds-field__meta">
          {helper
            ? <p id={helpId} className="ds-field__help label-sm">{helper}</p>
            : <span />}
          {showCount && (
            /* aria-live 를 쓰지 않는다 — 글자마다 발화하면 입력을 방해한다.
               describedby 로 연결해 포커스 시·필요할 때 읽히게 한다. */
            <span id={countId} className="ds-field__count label-sm">
              {String(value).length} / {maxLength}
            </span>
          )}
        </div>
      )}
      {invalid && <p id={errId} className="ds-field__error label-sm">{error}</p>}
    </div>
  )
})

export default TextArea
