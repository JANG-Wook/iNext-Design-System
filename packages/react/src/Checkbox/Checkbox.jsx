import { forwardRef, useEffect, useRef } from 'react'
import useFieldIds from '../Field/useFieldIds.js'
import './Checkbox.css'

/**
 * Checkbox — iNext Design System
 *
 * 동작 명세는 `COMPONENTS.md` 8-5 가 원본이다. 이 파일은 그 구현이다.
 * 명세와 어긋나면 명세가 맞다.
 *
 * **네이티브 `<input type="checkbox">` 를 쓴다.** `div + role="checkbox"` 로 만들면
 * Space 토글 · forced-colors · 폼 제출을 전부 우리가 다시 만들어야 한다.
 * 네모는 CSS 로 그리고 진짜 input 은 그 자리에 겹쳐 둔다 — **숨기지 않는다.**
 * `display:none` 이나 `visibility:hidden` 은 보조기술에서도 사라진다.
 *
 * @param {object}   props
 * @param {string}   props.label              보이는 라벨. 접근 이름이 된다
 * @param {boolean}  [props.checked]          제어 컴포넌트로 쓸 때
 * @param {boolean}  [props.defaultChecked]
 * @param {boolean}  [props.indeterminate=false]  APG tri-state. **하위 항목의 요약이다**
 * @param {boolean}  [props.disabled=false]
 * @param {string}   [props.helper]           도움말
 * @param {string}   [props.error]            오류 문구. 있으면 aria-invalid 가 켜진다
 * @param {string}   [props.id]               생략하면 useId 로 만든다 (KWCAG 8.1.1)
 * @param {(e: Event) => void} [props.onChange]
 */
const Checkbox = forwardRef(function Checkbox({
  label,
  indeterminate = false,
  disabled = false,
  helper,
  error,
  id: idProp,
  className,
  ...rest
}, ref) {
  const invalid = Boolean(error)
  const { id, helpId, errId, describedBy } = useFieldIds({
    id: idProp, hasHelper: Boolean(helper), hasError: invalid,
  })

  // indeterminate 는 HTML 속성이 아니라 **프로퍼티**다. JSX 로는 못 넘긴다(8-5).
  // 접근성에는 이 프로퍼티가 필요하다 — 브라우저가 aria-checked="mixed" 로 노출한다.
  const inner = useRef(null)
  useEffect(() => {
    if (inner.current) inner.current.indeterminate = indeterminate
  }, [indeterminate])

  const setRef = (el) => {
    inner.current = el
    if (typeof ref === 'function') ref(el)
    else if (ref) ref.current = el
  }

  return (
    <div className={['ds-check', className].filter(Boolean).join(' ')}>
      <div className="ds-check__row">
        {/* 모양은 `:indeterminate` 로 못 그린다 — 프로퍼티로만 켜지는 상태라 `~` 형제
            선택자에 스타일 무효화가 걸리지 않는다(실측 확인, 0-56). 그래서
            **접근성은 프로퍼티가, 모양은 data-mixed 가** 맡는다. */}
        <input
          ref={setRef}
          type="checkbox"
          id={id}
          className="ds-check__input"
          disabled={disabled || undefined}
          data-mixed={indeterminate || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {/* 네모는 순수 장식이다 — 상태는 input 이 갖고 CSS 가 형제 선택자로 읽는다.
            체크 표시는 SVG 다. 글꼴 문자(✓)를 쓰면 글꼴이 없는 환경에서 사라진다. */}
        <span className="ds-check__box" aria-hidden="true">
          <svg className="ds-check__mark" viewBox="0 0 20 20" fill="none">
            <path className="ds-check__tick" d="M5 10.5 8.5 14 15 6.5"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" />
            <path className="ds-check__dash" d="M5.5 10h9"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <label className="ds-check__label label-md" htmlFor={id}>{label}</label>
      </div>
      {helper && <p id={helpId} className="ds-check__help label-sm">{helper}</p>}
      {invalid && <p id={errId} className="ds-check__error label-sm">{error}</p>}
    </div>
  )
})

export default Checkbox
