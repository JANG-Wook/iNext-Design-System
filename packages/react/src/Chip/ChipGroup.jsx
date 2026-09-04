import { createContext, useContext, useId } from 'react'
import './Chip.css'

/**
 * ChipGroup — Select 칩의 묶음. 명세는 `COMPONENTS.md` 8-7.
 *
 * **Select 칩은 라디오다.** 같은 `name` 을 공유해야 브라우저가 화살표 이동과
 * 묶음당 탭 정지 1개를 준다. `RadioGroup`(8-6)과 소유하는 것이 같다 —
 * **다른 것은 레이아웃뿐이다**(칩은 가로로 흐르고 감싼다).
 *
 * 지금 둘을 합치지 않은 이유는 8-7 미결 ③에 있다: 사례가 둘뿐이라 공통점을 잘못
 * 뽑을 수 있다. **세 번째가 나올 때까지 둔다** — 무엇이 세 번째일지 미리 지목하지 않는다.
 *
 * @param {object}   props
 * @param {string}   props.label            <legend>. 화면에서 감추려면 hideLabel
 * @param {boolean}  [props.hideLabel=false]
 * @param {string}   [props.name]
 * @param {string}   [props.value]          제어 컴포넌트로 쓸 때
 * @param {string}   [props.defaultValue]
 * @param {(v: string) => void} [props.onChange]
 * @param {boolean}  [props.disabled=false] 묶음 전체를 끈다
 */
const ChipGroupContext = createContext(null)

export default function ChipGroup({
  label,
  hideLabel = false,
  name: nameProp,
  value,
  defaultValue,
  onChange,
  disabled = false,
  className,
  children,
  ...rest
}) {
  const auto = useId()
  const name = nameProp ?? `${auto}-chip`
  const ctx = {
    name, disabled, value, defaultValue,
    controlled: value !== undefined,
    onChange: (e) => onChange?.(e.target.value, e),
  }
  return (
    <fieldset
      className={['ds-chipgroup', className].filter(Boolean).join(' ')}
      disabled={disabled || undefined}
      {...rest}
    >
      <legend className={['ds-chipgroup__legend', 'label-md', hideLabel && 'ds-visually-hidden']
        .filter(Boolean).join(' ')}>{label}</legend>
      <div className="ds-chipgroup__items">
        <ChipGroupContext.Provider value={ctx}>{children}</ChipGroupContext.Provider>
      </div>
    </fieldset>
  )
}

export function useChipGroup() {
  const ctx = useContext(ChipGroupContext)
  if (!ctx) {
    throw new Error(
      'ChipSelect 는 ChipGroup 안에서만 쓴다 — 같은 name 을 공유하지 않으면 화살표 이동이 ' +
      '동작하지 않고 여러 개가 동시에 켜진다 (COMPONENTS.md 8-7)'
    )
  }
  return ctx
}
