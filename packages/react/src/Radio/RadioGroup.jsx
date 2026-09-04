import { createContext, useContext, useId } from 'react'
import './Radio.css'

/**
 * RadioGroup — iNext Design System
 *
 * 동작 명세는 `COMPONENTS.md` 8-6 이 원본이다.
 *
 * **라디오는 혼자 쓸 수 없다.** 같은 `name` 을 공유해야 브라우저가 하나의 묶음으로 보고
 * 화살표 이동·roving tabindex 를 준다. 그 `name` 을 소유하는 것이 이 컴포넌트다.
 * `<fieldset>` + `<legend>` 도 여기서 나온다 — 묶음의 접근 이름이다.
 *
 * 도움말·오류는 **묶음 단위**다. *"하나를 고르세요"* 는 항목이 아니라 묶음의 문제다.
 *
 * @param {object}   props
 * @param {string}   props.label            <legend> 가 된다. 생략할 수 없다
 * @param {string}   [props.name]           생략하면 useId 로 만든다
 * @param {string}   [props.value]          제어 컴포넌트로 쓸 때
 * @param {string}   [props.defaultValue]
 * @param {(v: string) => void} [props.onChange]  선택된 value 를 넘긴다
 * @param {boolean}  [props.disabled=false] 묶음 전체를 끈다
 * @param {string}   [props.helper]
 * @param {string}   [props.error]
 */
export const RadioGroupContext = createContext(null)

export default function RadioGroup({
  label,
  name: nameProp,
  value,
  defaultValue,
  onChange,
  disabled = false,
  helper,
  error,
  className,
  children,
  ...rest
}) {
  const auto = useId()
  const name = nameProp ?? `${auto}-radio`
  const helpId = `${auto}-help`
  const errId = `${auto}-err`
  const invalid = Boolean(error)
  const describedBy = [helper && helpId, invalid && errId].filter(Boolean).join(' ') || undefined

  const ctx = {
    name, disabled, invalid,
    value, defaultValue,
    onChange: (e) => onChange?.(e.target.value, e),
    controlled: value !== undefined,
  }

  return (
    <fieldset
      className={['ds-radiogroup', className].filter(Boolean).join(' ')}
      disabled={disabled || undefined}
      aria-describedby={describedBy}
      aria-invalid={invalid || undefined}
      {...rest}
    >
      <legend className="ds-radiogroup__legend label-md">{label}</legend>
      <div className="ds-radiogroup__items">
        <RadioGroupContext.Provider value={ctx}>{children}</RadioGroupContext.Provider>
      </div>
      {helper && <p id={helpId} className="ds-radiogroup__help label-sm">{helper}</p>}
      {invalid && <p id={errId} className="ds-radiogroup__error label-sm">{error}</p>}
    </fieldset>
  )
}

export function useRadioGroup() {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) {
    throw new Error(
      'Radio 는 RadioGroup 안에서만 쓴다 — 같은 name 을 공유하지 않으면 화살표 이동이 ' +
      '동작하지 않고 여러 개가 동시에 켜진다 (COMPONENTS.md 8-6)'
    )
  }
  return ctx
}
