import { forwardRef } from 'react'
import './Button.css'

/**
 * Button — iNext Design System
 *
 * 동작 명세는 `COMPONENTS.md` 8-1 이 원본이다. 이 파일은 그 구현이다.
 * 명세와 어긋나면 명세가 맞다.
 *
 * 상태(hover · focus · press)는 CSS 가 처리한다. `useState` 로 흉내내면
 * `onFocus` 가 마우스 클릭에도 발생해 포커스 링이 잘못 뜨고,
 * `forced-colors` · `prefers-reduced-motion` 을 만족할 수 없다.
 *
 * @param {object}   props
 * @param {'primary'|'secondary'|'outline'|'text'|'negative'} [props.variant='primary']
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {string}   [props.label]        버튼 텍스트. iconOnly 면 접근 이름이 된다
 * @param {React.ReactNode} [props.leadingIcon]
 * @param {React.ReactNode} [props.trailingIcon]
 * @param {boolean}  [props.iconOnly=false]   정사각. label 이 aria-label 이 된다
 * @param {boolean}  [props.circle=false]     원형 (Floating Button)
 * @param {boolean}  [props.disabled=false]   네이티브 disabled — 예외적으로만
 * @param {boolean}  [props.loading=false]    aria-busy. 폭이 흔들리지 않는다
 * @param {() => void} [props.onClick]
 */
/* 크기별 타이포 — 복합 토큰이라 유틸리티 클래스를 쓴다.
   낱개(font-size·line-height…)로 조합하지 않는다(narrative/04-typography.md).
   lg 가 글자를 키우지 않는 것은 의도다 — 버튼이 커지는 이유는 누르기 쉬우라고지
   읽기 쉬우라고가 아니다(COMPONENTS.md 8-1). */
const TYPO = { sm: 'label-md', md: 'label-lg', lg: 'label-lg' }

const Button = forwardRef(function Button({
  variant = 'primary',
  size = 'md',
  label,
  leadingIcon = null,
  trailingIcon = null,
  iconOnly = false,
  circle = false,
  disabled = false,
  loading = false,
  onClick,
  className,
  children,
  ...rest
}, ref) {
  // 아이콘 전용인데 이름이 없으면 스크린리더·음성 제어에서 정체를 알 수 없다(2.5.3 · 4.1.2).
  if (iconOnly && !label && !rest['aria-label']) {
    throw new Error('Button: iconOnly 에는 label 또는 aria-label 이 필요하다 (WCAG 2.5.3)')
  }

  // loading 중에는 중복 실행을 막는다.
  const handleClick = (e) => {
    if (loading || disabled) return
    onClick?.(e)
  }

  const text = label ?? children

  return (
    <button
      ref={ref}
      type="button"
      className={['ds-btn', TYPO[size] ?? TYPO.md, className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-size={size}
      data-icon-only={iconOnly || undefined}
      data-shape={circle ? 'circle' : undefined}
      data-loading={loading || undefined}
      disabled={disabled || undefined}
      aria-busy={loading || undefined}
      aria-label={iconOnly ? label : undefined}
      onClick={handleClick}
      {...rest}
    >
      {loading && <span className="ds-btn__spinner" aria-hidden="true" />}
      <span className="ds-btn__content">
        {leadingIcon && <span className="ds-btn__icon" aria-hidden="true">{leadingIcon}</span>}
        {!iconOnly && text}
        {trailingIcon && <span className="ds-btn__icon" aria-hidden="true">{trailingIcon}</span>}
      </span>
    </button>
  )
})

export default Button
