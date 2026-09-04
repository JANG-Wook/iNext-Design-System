import { forwardRef, useRef, useState } from 'react'
import { Search as SearchIcon, X } from 'lucide-react'
import '../Field/Field.css'
import './Search.css'
import useFieldIds from '../Field/useFieldIds.js'

/**
 * Search — iNext Design System
 *
 * 동작 명세는 `COMPONENTS.md` 8-4 가 원본이다.
 * 8-2 Text Field 와 같은 규약을 따른다. 다른 점만 이 파일에 있다.
 *
 * **라벨은 생략할 수 없다.** 보이지 않게 하려면 `hideLabel` 을 쓴다 —
 * placeholder 는 접근 가능한 이름이 아니고 입력을 시작하면 사라진다.
 *
 * @param {object}   props
 * @param {string}   props.label
 * @param {boolean}  [props.hideLabel=false]  화면에서만 감춘다. 보조기술에는 남는다
 * @param {'outline'|'underline'} [props.variant='outline']
 * @param {string}   [props.helper]
 * @param {string}   [props.error]
 * @param {boolean}  [props.disabled=false]
 * @param {() => void} [props.onClear]        지우기 버튼. 없으면 값만 비운다
 * @param {(v: string) => void} [props.onSearch]  Enter. 폼 안이면 폼 제출이 우선이다
 */
const Search = forwardRef(function Search({
  label,
  hideLabel = false,
  variant = 'outline',
  helper,
  error,
  disabled = false,
  onClear,
  onSearch,
  className,
  id: idProp,
  value,
  defaultValue,
  onChange,
  ...rest
}, ref) {
  if (!label) {
    throw new Error('Search: label 이 필요하다. 감추려면 hideLabel 을 쓴다 (WCAG 4.1.2 · 2.5.3)')
  }

  const invalid = Boolean(error)
  const { id, helpId, errId, describedBy } =
    useFieldIds({ id: idProp, hasHelper: Boolean(helper), hasError: invalid })

  // 지우기 버튼은 값이 있을 때만 나온다. 제어·비제어 모두에서 동작해야 하므로
  // 내부 상태로 "비었는지"만 따로 추적한다.
  const innerRef = useRef(null)
  const setRefs = (el) => {
    innerRef.current = el
    if (typeof ref === 'function') ref(el)
    else if (ref) ref.current = el
  }
  const [dirty, setDirty] = useState(Boolean(defaultValue))
  const hasValue = value != null ? String(value).length > 0 : dirty

  const handleChange = (e) => {
    if (value == null) setDirty(e.target.value.length > 0)
    onChange?.(e)
  }

  const handleClear = () => {
    if (value == null && innerRef.current) {
      innerRef.current.value = ''
      setDirty(false)
    }
    onClear?.()
    // 지운 뒤 포커스를 입력으로 되돌린다 — 버튼이 사라지면 포커스가 body 로
    // 떨어져 키보드 사용자가 위치를 잃는다.
    innerRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSearch) onSearch(e.currentTarget.value)
    rest.onKeyDown?.(e)
  }

  return (
    <div className={['ds-field', className].filter(Boolean).join(' ')}
         data-invalid={invalid || undefined}>
      <label className={['ds-field__label', 'label-md', hideLabel && 'ds-visually-hidden']
        .filter(Boolean).join(' ')} htmlFor={id}>
        {label}
      </label>

      <div className="ds-search" data-variant={variant}>
        <span className="ds-search__icon" aria-hidden="true"><SearchIcon /></span>
        <input
          {...rest}
          ref={setRefs}
          id={id}
          type="search"
          className="ds-search__input body-md"
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
        />
        {hasValue && !disabled && (
          <button type="button" className="ds-search__clear" onClick={handleClear}
                  aria-label={`${label} 지우기`}>
            <X aria-hidden="true" />
          </button>
        )}
      </div>

      {helper && <p id={helpId} className="ds-field__help label-sm">{helper}</p>}
      {invalid && <p id={errId} className="ds-field__error label-sm">{error}</p>}
    </div>
  )
})

export default Search
