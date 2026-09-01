## 상호작용

### 오버레이는 면의 밝기로 고른다

hover·focus·press 는 면 위에 반투명 층을 얹어 표현한다. **테마가 아니라 얹히는 면이 밝은지
어두운지**로 고른다.

```
밝은 면 위   → --color-interaction-overlay-darken-{hovered,focused,pressed}
어두운 면 위 → --color-interaction-overlay-lighten-{hovered,focused,pressed}
```

**`primary` 처럼 테마와 반대로 뒤집히는 면이 있다** — 라이트에서 어둡고 다크에서 밝다. 그런
면은 오버레이 방향도 테마별로 바꿔야 한다. 중립 회색 하나로는 버튼과 카드가 서로 반대로
움직인다.

```css
.btn-primary:hover::after { background: var(--color-interaction-overlay-lighten-hovered); }
[data-theme="dark"] .btn-primary:hover::after { background: var(--color-interaction-overlay-darken-hovered); }
```

강도는 `--interaction-opacity-*` 에 티어(면이 얼마나 짙은가) × 상태로 있다. semantic 에는
`normal` 티어만 색으로 올려 두었고, `light`·`strong` 이 필요하면 숫자를 직접 쓴다.

### 포커스 링에는 offset 이 필수다

**링은 반드시 `outline-offset` 을 둬 페이지 배경 위에 놓는다.** 컴포넌트 면 위에 직접 그리면
같은 색이 되어 대비가 1.00 까지 떨어진다.

```css
outline: var(--focus-ring-width) solid var(--color-interaction-focus);
outline-offset: var(--focus-ring-offset);
```

### 가장자리 페이드

`--gradient-fade-*` 의 키는 **불투명한 가장자리**, 곧 페이드를 놓는 자리다. 색이
`currentColor` 인 것은 의도다 — 쓰는 쪽이 `color` 에 면 색을 넣으면 토큰 하나가 어느 면에서든
맞는다. 길이는 `--spacing-*` 를 쓴다.

### 하지 말 것

- **오버레이를 테마로 고르지 마라.** 면의 밝기로 고른다.
- **포커스 링을 `outline: none` 으로 지우지 마라.** 키보드 사용자가 위치를 잃는다.
- **오버레이가 포커스 링을 대체하지 않는다.** 둘은 함께 쓴다.
