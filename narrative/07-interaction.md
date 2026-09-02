## 상호작용

### 오버레이는 면의 밝기로 고른다

hover·focus·press 는 면 위에 반투명 층을 얹어 표현한다. **테마가 아니라 얹히는 면이 밝은지
어두운지**로 고른다.

```
밝은 면 위   → --color-interaction-overlay-darken-{hovered,focused,pressed}
어두운 면 위 → --color-interaction-overlay-lighten-{hovered,focused,pressed}
```

**`primary` 처럼 테마와 반대로 뒤집히는 면이 있다** — 라이트에서 어둡고 다크에서 밝다.
그래서 라이트 테마 안에 흰 배경(밝음)과 검은 버튼(어두움)이 **동시에** 있다. 테마는 면의
밝기를 알려주지 못한다. 중립 회색 하나로는 버튼과 카드가 서로 반대로 움직인다.

뒤집히는 면에서는 규칙을 따르느라 **결과적으로** 테마별 선택자가 필요해진다. 규칙이 테마인
것이 아니라, 면이 테마를 따라 뒤집히기 때문이다.

```css
/* primary 는 라이트에서 어둡다 → lighten */
.btn-primary:hover::after { background: var(--color-interaction-overlay-lighten-hovered); }
/* 다크에서는 밝아진다 → darken. 규칙(면 밝기)은 그대로다 */
[data-theme="dark"] .btn-primary:hover::after { background: var(--color-interaction-overlay-darken-hovered); }
```

뒤집히지 않는 면(`bg.*` 등)은 테마별 선택자가 필요 없다.

M3 는 같은 문제를 콘텐츠(`on-`) 색으로, Primer 는 역할별 명시 토큰으로 푼다. **셋 다 면을
따라가며 테마를 따라가지 않는다**(DECISIONS 0-14).

강도는 `--interaction-opacity-*` 에 티어(면이 얼마나 짙은가) × 상태로 있다. semantic 에는
`normal` 티어만 색으로 올려 두었고, `light`·`strong` 이 필요하면 숫자를 직접 쓴다.

### 포커스 링에는 offset 이 필수다

**링은 반드시 `outline-offset` 을 둬 페이지 배경 위에 놓는다.** 컴포넌트 면 위에 직접 그리면
같은 색이 되어 대비가 1.00 까지 떨어진다.

```css
outline: var(--focus-ring-width) solid var(--color-interaction-focus);
outline-offset: var(--focus-ring-offset);
```

### 모션 — 길이와 곡선

`duration` 은 ms 눈금, `cubicBezier` 는 가속 곡선이다. 둘 다 Interaction 파운데이션에 있다.

```css
transition: background-color var(--duration-100) var(--cubic-bezier-standard);
```

**곡선 이름은 하는 일이다.**

| | 언제 |
|---|---|
| `--cubic-bezier-standard` | 상태 전환 기본. 양끝이 부드럽다 |
| `--cubic-bezier-enter` | 나타나는 요소 |
| `--cubic-bezier-exit` | 사라지는 요소. **진입보다 짧게 잡는다** |
| `--cubic-bezier-linear` | 루프 전용. 스피너가 등속이 아니면 이음매에서 끊겨 보인다 |

값은 새로 만들지 않고 CSS `ease-in-out`·`ease-out`·`ease-in`·`linear` 의 정의값을 그대로 썼다.

**`prefers-reduced-motion` 을 토큰으로 일괄 처리하지 않는다.** duration 을 전부 0 으로 덮으면
스피너까지 멈춘다. 로딩 표시는 정보를 전달하므로 살려두거나 회전이 아닌 형태로 바꾼다.
**컴포넌트가 각자 판단한다.**

```css
@media (prefers-reduced-motion: reduce) {
  .panel { transition-duration: var(--duration-0); }   /* 위치 이동은 없앤다 */
  /* 스피너는 그대로 둔다 — 정보 전달 수단이다 */
}
```

`transition` 복합 토큰(`duration` + `delay` + `timingFunction`)은 **아직 없다.** 의도 이름이
컴포넌트 문맥에서 나오므로 먼저 지으면 추측이 된다.

### 가장자리 페이드

`--gradient-fade-*` 의 키는 **불투명한 가장자리**, 곧 페이드를 놓는 자리다. 색이
`currentColor` 인 것은 의도다 — 쓰는 쪽이 `color` 에 면 색을 넣으면 토큰 하나가 어느 면에서든
맞는다. 길이는 `--spacing-*` 를 쓴다.

### 하지 말 것

- **오버레이를 테마로 고르지 마라.** 면의 밝기로 고른다.
- **`transition` 에 값을 직접 쓰지 마라.** `--duration-*` · `--cubic-bezier-*` 를 쓴다.
- **reduced-motion 에서 스피너를 멈추지 마라.** 진행 중이라는 정보가 사라진다.
- **포커스 링을 `outline: none` 으로 지우지 마라.** 키보드 사용자가 위치를 잃는다.
- **오버레이가 포커스 링을 대체하지 않는다.** 둘은 함께 쓴다.
