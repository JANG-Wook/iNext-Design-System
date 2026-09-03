## 원칙

### 단일 원본은 DTCG JSON 이다

```
tokens/primitive.json          원시 값 — 실제 hex · rem · 숫자가 사는 유일한 곳
tokens/semantic.light.json     색 역할 — 라이트
tokens/semantic.dark.json      색 역할 — 다크   (라이트와 같은 키, 다른 참조)
tokens/typography.json         복합 토큰 — semantic 을 거치지 않고 primitive 를 직접 참조

  ↓  npm run build:tokens

tokens/tokens.css              CSS 변수 + 타이포 유틸리티 클래스
tokens/tokens.js               해석된 값 (ESM)
tokens/dist/tokens.{light,dark}.json   테마별 단일 DTCG 문서
DESIGN.md                      이 문서
```

**아래 넷은 생성물이다. 직접 편집하지 않는다.**

### 값을 박지 않는다

원시 값은 **primitive 의 잎에만** 산다. 그 위 계층은 별칭 `{group.key}` 으로 참조만 한다.

| ✘ 이렇게 쓰지 않는다 | ✔ 이렇게 쓴다 |
|---|---|
| `color: #161617;` | `color: var(--color-label-normal);` |
| `padding: 16px;` | `padding: var(--spacing-16);` |
| `font-size: 13px; line-height: 1.42;` | `class="body-md"` |
| `background: rgba(0,0,0,.05);` | `background: var(--color-interaction-overlay-darken-hovered);` |

스케일에 없는 값이 필요하면 **primitive 에 토큰을 먼저 만들고** 참조한다. 사용처에 숫자를
적는 순간 그 값은 시스템 밖으로 나간다.

**예외는 구조적 상수뿐이다** — `0`, 원형의 `50%`, 종횡비 `1.777778` 처럼 값 자체가 의미인 것.

### semantic 은 테마 축을 담는 그릇이다

색과 그림자만 semantic 계층을 갖는다. `spacing`·`radius` 에는 테마 축이 없으므로 semantic 을
두지 않는다 — 바꿔 끼울 것이 없는 빈 간접층이 된다.

컴포넌트가 `--spacing-16` 을 직접 고르는 문제는 실재하지만, 해법은 semantic 이 아니라
**컴포넌트 토큰 계층**이다. 이름이 컴포넌트 문맥에서 나오기 때문에 컴포넌트와 함께 만든다.
