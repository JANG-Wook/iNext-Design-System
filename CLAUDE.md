# iNext Design System Project

**현재 단계는 디자인 토큰(DTCG) 작업**이며, 작업 대상은 `tokens/` 폴더다.
(컴포넌트는 토큰 확정 후 이후 단계에서 진행한다.)

**설계 배경과 미결 사항은 `tokens/DECISIONS.md` 를 먼저 읽는다.** 왜 그렇게 정했는지·무엇을 검토했다 버렸는지가 거기 있다. 토큰 하나하나의 의미는 JSON 의 `$description` 에 있다.

## 작업 방식
- **코드 작성 전 계획을 먼저 세우고 공유한다** (plan-before-code). 승인 후 구현한다.
- **승인 없이 새 파일·구조·토큰을 만들지 않는다.** 범위를 임의로 넓히지 않는다(scope creep 금지).
- **추측을 사실처럼 말하지 않는다.** 불확실하면 "모른다"고 말하고 근거·출처를 제시한다. 지어내지 않는다.
- 문제를 발견해도 바로 수정하지 않는다. 보고 → 해결책 2~3개 제시 → 승인 후 수정.
- 한국어로 답하고, 문장은 마침표로 끝낸다.

## DTCG 스펙으로 관리
**기준 버전: 2025.10** — *Final Community Group Report, 2025-10-28* (stable). 고정 릴리스를 본다.
- [Format Module 2025.10](https://www.designtokens.org/tr/2025.10/format/)
- [Color Module 2025.10](https://www.designtokens.org/tr/2025.10/color/)

`/tr/drafts/` 는 계속 움직이는 초안이므로 **근거로 쓰지 않는다.** 이전 형식(2nd Editors' Draft)과는 값 형식이 **양립하지 않는다.** 형식이 헷갈리면 기억이 아니라 위 문서를 확인한다.

- 모든 토큰은 `$value` / `$type` / `$description` / `$extensions` / `$deprecated`, 별칭 `{group.key}` 로 쓴다. 이 다섯 외의 `$` 속성은 쓰지 않는다.
- **`$type` 은 필수다.** 토큰에 없고 상위 그룹에도 없으면 스펙상 무효다. 값에서 타입을 추론하는 것도 금지된다.
- 값 형식 — `color` = `{colorSpace:"oklch", components:[L,C,H], hex:"#rrggbb"}` (**hex 문자열 단독은 무효**) · `dimension` = `{value, unit}` (`px`·`rem` 만, `none` 같은 키워드 불가) · `number` = JSON 숫자.
- 계층: **primitive**(테마 무관 원시 값) → **semantic.light / semantic.dark**(색 역할, 같은 키·다른 참조) → **생성물**.
  `typography.json` 은 semantic 을 거치지 않고 **primitive 를 직접 참조**한다(색만 semantic 계층을 갖는다).
  생성물은 `tokens.css` · `tokens.js` · `dist/tokens.{light,dark}.json`(테마별 단일 DTCG 문서) · `DESIGN.md` 넷이다.
- 타이포는 **복합 토큰**(`$type:"typography"`, `typography.json`) 으로 관리한다. 스펙 9.8 이 요구하는 **5속성을 모두** 갖춰야 하고, 하위 타입이 정해져 있다.
  `fontFamily`=fontFamily · `fontSize`=dimension · `fontWeight`=fontWeight · `letterSpacing`=dimension · **`lineHeight`=number(fontSize 배수)**.
  행간 토큰 키는 `글자px-행간px`(예: `lineHeight.14-22`)이며 **짝지어진 글자 크기에서만 2px 그리드에 떨어진다** — 빌드가 짝을 검사한다.
- **값의 단일 원본은 `tokens/` 의 소스 JSON 4개.** `tokens.css`·`tokens.js`·`dist/`·`DESIGN.md` 는 산출물이므로 **직접 편집하지 않는다.** (산문의 원본은 `narrative/` — 아래 절)
- 변경 절차: **JSON 수정 → `npm run build:tokens` 로 재생성.**
- **새 소스 JSON 을 만들면 `build.mjs` 의 `COMPOSITION` 에 등록한다.** 빌드가 디스크와 등록 목록을 양방향으로 검사해 누락 시 실패한다. (DTCG Resolver Module 의 sets/modifiers 개념만 차용했고 resolver 파일은 두지 않는다 — DECISIONS 0-9)
- **토큰 값의 형식을 바꾸면 JSON 을 직접 읽는 소비자 전부를 같이 고친다.** 목록은 `build.mjs` · `preview.html` · 검증 스크립트다. `preview.html` 은 브라우저에서 JSON 과 `tokens.css` 를 직접 읽으므로 빌드가 잡아주지 못한다 — 실제로 두 번 놓쳤다(DECISIONS 0-6 · 0-7).
- 반투명색은 base 색 참조 + `$extensions."net.infobank.ds.alpha"`(opacity 참조)로 두고, 빌드가 rgba 로 합성한다.
  스펙 color 객체에 native `alpha` 필드가 있지만 **쓰지 않는다** — 그쪽은 0~1 숫자만 받아 `{opacity.16}` 같은 토큰 참조를 담지 못한다. 불투명도를 `opacity` 스케일 한 곳에서 관리하려면 확장이 필요하다.

**그룹 나누는 기준**
- primitive 그룹은 **하나의 눈금(스케일)** 또는 **하나의 설정 묶음** 단위로 나눈다. 타입이 같아도 눈금이 다르면 다른 그룹이다 — `dimension` 이 9그룹인 이유다. 스펙은 그룹을 임의 조직 수단으로 규정하고 **그룹에서 타입·용도를 추론하지 말라고 한다.**
- 파운데이션은 **문서 축**이지 파일 구조가 아니다. 파운데이션 → 그룹 배정은 **1:N** 을 허용한다.
  **11개다** — Typography · Colors · Elevation · Spacing · Breakpoint · Radius · Layout · Divider · Interaction · Effects · Ratio.
  배정은 그룹의 `$extensions."net.infobank.ds.foundation"` 배열에 적는다. 누락·오타·미사용을 빌드가 검사하고, `preview.html` 내비게이션도 이 값을 읽는다.
- **티어 이름(`xs`~`xl`)을 쓰면 값이 이름 순서를 따라야 한다.** 빌드가 검사하며, 의도적 역순은 `build.mjs` 의 `TIER_EXEMPT` 에 이유와 함께 등록한다(DECISIONS 0-10).
- 여러 파운데이션이 참조하는 스케일(`opacity`)은 어느 한 곳에 귀속시키지 않고 **참조하는 곳을 전부 나열**한다.

**스펙 밖의 값**
- DTCG 타입으로 표현할 수 없는 값은 `$extensions."net.infobank.ds.cssRecipe": true` 로 표시하고 `DECISIONS.md` 에 근거를 남긴다.
- **예외를 늘리지 않는다.** 먼저 스펙 타입으로 표현할 방법을 찾고, 정말 없을 때만 예외로 둔다.

## DESIGN.md — DTCG 에서 생성한다

**`DESIGN.md` 는 생성물이다. 직접 편집하지 않는다** — 다음 빌드에 사라진다.
front matter 는 토큰에서, 본문은 `narrative/*.md` 에서 온다.

**사람이 쓰는 것 둘**
- `tokens/*.json` — 값과 `$description`
- `narrative/*.md` — 산문. 왜 그 값인지·금지사항. 파일명 순서대로 이어 붙는다

**고칠 곳을 헷갈리지 않는다**

| 고치려는 것 | 고칠 곳 |
|---|---|
| 값 | `tokens/*.json` |
| 토큰 하나의 짧은 설명 | 그 토큰의 `$description` |
| 왜 그렇게 정했는지 · 금지사항 | `narrative/*.md` |
| 설계 결정의 전체 이력 | `tokens/DECISIONS.md` |

**자동 반영** — `npm run build:tokens` 가 토큰 빌드와 `DESIGN.md` 생성을 함께 돌린다.
CI 가 `DESIGN.md` 를 다시 만들어 커밋된 것과 다르면 실패시킨다(`tokens.css`·`dist/` 와 같은 방식).
**토큰만 고치고 `DESIGN.md` 를 안 고친 변경은 머지되지 않는다.**

**front matter 에 들어가는 것 = CSS 변수가 되는 것 + 타이포 클래스**
- 곧 **컴포넌트가 실제로 쓰는 API 면**이다. primitive 팔레트 99개는 CSS 로 나가지 않으므로 제외한다 — 다 넣으면 읽는 쪽(사람·에이전트)에 노이즈다.
- **이름 접두사로 거르지 않는다.** 우리 번들에는 `semantic.` 접두사가 없다.
- **`$type` 으로 분류하지 않는다.** `dimension` 이 9개 그룹에 흩어져 있다 — 그룹으로 나눈다.
- 색은 **라이트·다크 두 값**을 함께 낸다. 반투명색은 `rgba()` 로 낸다.
- `$description` 이 그대로 `note` 로 실려 나간다. **그래서 설명을 지어내면 안 된다** — 실제 근거만 쓴다.

**생성기를 고칠 때** — `tokens/build-design-md.mjs` 는 **결정적이어야 한다.** 타임스탬프·난수를
넣으면 drift 검사가 매번 실패한다. YAML 을 손으로 만들므로 **왕복 검사**가 들어 있다 —
되읽은 결과가 원본과 다르면 쓰기 전에 실패한다.

## 하드코딩 절대 금지
값을 직접 박지 않고 **토큰으로만** 표현한다.

**검사가 막는다** — `npm run lint:hardcode`(`tokens/checks/hardcode.mjs`). CI 에도 걸려 있다.
CSS 선언만 보고 템플릿 보간·`var()` 는 검사하지 않는다. 정당한 예외는 그 줄에
`/* ds-allow: 이유 */` 를 단다. **이유 없는 예외는 두지 않는다.**

**하드코딩으로 보는 것 (금지)**
- 색: `#hex`·`rgb()`·`rgba()`·`hsl()` 직접 기입.
- 크기·간격: 스케일에 없는 임의 값(예: `13px`, `0.9rem`).
- 타이포: 임의 lineHeight·letterSpacing 매직넘버.
- semantic·typography 에 **원시 값 인라인** — 반드시 별칭 `{group.key}` 로 참조.

**원시 값이 사는 유일한 곳 = primitive 리프**
- 실제 hex·rem·opacity 숫자는 **primitive 토큰의 `$value` 에만** 둔다.
- semantic·typography 는 그 primitive 를 **별칭으로 참조만** 한다 (값 복붙 금지).

**새 값이 필요하면**
- 먼저 primitive 에 토큰으로 정의 → semantic·typography 에서 참조. 사용처에 바로 박지 않는다.

**예외 (하드코딩 아님)**
- 구조적 상수: `0`, radius `50%`(원형), 종횡비 `1.777778`(16:9) 처럼 값 자체가 의미인 것.
- **DTCG 로 표현 못 하는 구조적 상수는 예외 표시가 필요하다.** `radius.circle`(`%`) · `gradient` 방향형(`currentColor`) 이 그렇다 — 하드코딩은 아니지만 스펙 타입에 안 맞으므로 `$extensions."net.infobank.ds.cssRecipe"` 를 단다. 위 "스펙 밖의 값" 참조.
- **먼저 스펙 안으로 옮길 방법을 찾는다.** `letterSpacing` 은 `em` 이라 예외였으나, 글자 크기가 전부 rem 이라 **크기별 rem 으로 환산하면 동등**했다 — 예외 4건이 사라졌다(DECISIONS 0-11). 예외로 남기기 전에 이런 길이 있는지 본다.
- `tokens.css`·`tokens.js` 안의 실제 값 — 빌드 산출물이라 편집 대상이 아님.

## 기존 토큰 먼저 탐색
- 새 토큰을 만들기 전에 `primitive.json`·`semantic.light/dark.json`·`typography.json` 에 이미 있는지 검색한다.
- 같은 값·역할이 있으면 재사용/참조하고, 중복 토큰을 새로 만들지 않는다.
- 새 값이 정말 필요할 때만 primitive 에 추가하고 semantic/typography 에서 참조한다.

## 최소 변경
- 요청한 토큰만 건드린다. 인접 값·주석·포맷을 임의로 "개선"하지 않는다.
- 관련 없는 이상한 값은 발견하면 보고하고, 임의로 고치거나 지우지 않는다.

## 에러는 읽고 판단
- 빌드·스크립트 실패 시 실제 에러/로그를 끝까지 읽고 원인을 확정한 뒤 고친다. 키워드로 짐작해 "흔한 수정"을 먼저 적용하지 않는다.

## 접근성 (필수)
- **WCAG 2.2 AA + KWCAG 2.2** 를 충족한다. 근거 조항과 확인 내역은 `tokens/DECISIONS.md` 4-1 에 있다.
- 대비: 텍스트 **4.5:1**, 비텍스트·UI **3:1**. 라이트·다크 **동등**하게.
- 색을 바꾸면 **대비를 재검증**한다. 반투명색은 **배경에 합성한 뒤** 대비를 계산한다.
- 타이포는 rem 기반(사용자 확대 대응), 본문 행간 ≥1.5 를 기준으로 한다.

**대비는 4개 면 전부에서 검사한다**
- `bg.normal` · `bg.normalAlternative` · `bg.elevated` · `bg.elevatedAlternative`.
- `bg.normal` 만 보면 카드·모달 위 텍스트가 사각지대가 된다(실제로 이 누락으로 미달 3건을 놓쳤다).

**큰 텍스트 3:1 예외는 쓰지 않는다**
- 두 기준 모두 18pt(24px) 이상 또는 14pt(18.67px) 이상 bold 에 3:1 을 허용하지만, **색 토큰이 어느 크기와 조합될지 정의가 없으므로 전 색상에 4.5:1 을 적용한다.**
- 미달이 났을 때 "큰 텍스트로만 쓰면 구제 가능"은 참고로만 본다. 그것을 근거로 미달을 남기지 않는다.

**검사에서 빼는 것 (KWCAG 5.4.3 예외)**
- `label.disable` · `label.assistive` — 비활성·장식 목적.
- 로고, 초점 시 대비가 커지는 콘텐츠.

**비텍스트 3:1 의 범위를 넓게 잡지 않는다**
- KWCAG 2.2 에는 WCAG 1.4.11 에 해당하는 검사항목이 **없다**. 3:1 은 WCAG 만의 요구다.
- 1.4.11 도 *"컴포넌트를 **식별**하는 데 필요한 시각 정보"* 가 대상이라, 모달·카드의 **컨테이너 면 자체**는 대상으로 보기 어렵다. 면끼리 3:1 은 물리적으로도 불가능하니 요구하지 않는다.
- 면은 지각 힌트, **경계는 보더**가 담당한다.
- **다만 보더는 규정 근거가 있다 — KWCAG 5.4.4(콘텐츠 간의 구분).** *"이웃한 콘텐츠는 시각적으로 구분될 수 있도록 제공해야 한다."* **WCAG 에 대응 조항이 없는 국내 전용 항목**이다. **수치 기준은 없고** 준수 방법 첫 번째가 "테두리를 이용하여 구분"이라, 보더를 두면 만족한다(DECISIONS 4-1 · 0-24). 두 기준은 포함 관계가 아니다 — WCAG 에만 1.4.11 이, KWCAG 에만 5.4.4 가 있다.

**포커스 (KWCAG 6.1.2 · WCAG 2.4.7)**
- 링 색은 `color.interaction.focus`, 두께·간격은 `focusRing.width` · `focusRing.offset`.
- **링은 반드시 offset 을 둬 페이지 배경 위에 놓는다.** 컴포넌트 면 위에 직접 그리면 `accent.bg` 계열과 같은 색이 되어 대비가 1.00 까지 떨어진다.

**컴포넌트 단계에서 확인할 것 (지금은 토큰으로 못 정함)**
- 조작 영역 — KWCAG 6.1.3 **6.0mm 이상**(물리 크기) · WCAG 2.5.8 **24×24 CSS px**. 둘은 다른 단위라 각각 확인한다.
- WCAG 2.2 신설 — **AA**: 2.4.11 Focus Not Obscured · 2.5.7 Dragging Movements · 2.5.8 Target Size · 3.3.8 Accessible Authentication(Minimum) / **A**: 3.2.6 Consistent Help · 3.3.7 Redundant Entry. **AA 준수는 A 를 포함하므로 등급과 무관하게 전부 지킨다.**

## 완료 전 검증
- 토큰을 수정했으면 "완료" 전에 `npm run build:tokens` 로 재생성한다.
- 색을 바꿨으면 대비(AA)를 재검증한 뒤 결과를 보고한다. 통과 전엔 완료 선언 금지.
- 사용자가 "끝/완료"라고 하기 전에 먼저 검증한다.

## 이전 세션 이어받기
- "완료됐다"는 요약을 그대로 믿지 않는다. 실제 JSON·생성물을 직접 열어 확인한다.
- 상태가 불확실하면 `npm run build:tokens` 로 재생성한 뒤 결과로 검증하고 진행한다.