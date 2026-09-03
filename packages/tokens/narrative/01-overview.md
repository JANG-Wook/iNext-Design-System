# iNext Design System

이 문서는 **자동 생성**된다. 위 front matter 의 값은 `tokens/*.json` 에서, 아래 산문은
`narrative/*.md` 에서 온다. **`DESIGN.md` 를 직접 고치지 마라** — 다음 빌드에 사라진다.

| 고치려는 것 | 고칠 곳 |
|---|---|
| 값 | `tokens/*.json` |
| 토큰 하나의 짧은 설명 | 그 토큰의 `$description` |
| 왜 그렇게 정했는지 · 금지사항 | `narrative/*.md` (이 파일들) |
| 설계 결정의 전체 이력 | `tokens/DECISIONS.md` |

바꾼 뒤 `npm run build:tokens` 를 돌린다. CI 가 `DESIGN.md` 를 다시 만들어 커밋된 것과
다르면 실패시킨다.

## 읽는 사람이 둘이다

**사람**은 왜 이 값인지, 무엇을 하면 안 되는지를 찾는다.
**에이전트**는 front matter 에서 값을 읽고 산문에서 제약을 읽는다.

그래서 이 문서는 값과 근거를 **한 파일에** 둔다. 값만 필요하면 front matter 만 읽으면 되고,
판단이 필요하면 아래를 읽는다.

## 현재 단계

**디자인 토큰까지 완료. 컴포넌트는 아직 없다.** 토큰이 확정된 뒤 착수한다.
컴포넌트 토큰 계층(`--control-medium-padding` 류)도 그때 만든다.
