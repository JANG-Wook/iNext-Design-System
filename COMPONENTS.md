# 컴포넌트

**생성물이 아니다.** 손으로 고치고, 변경은 승인을 거쳐 근거를 `DECISIONS.md`(루트) 에 남긴다.
값의 원본은 `packages/tokens/*.json`, 토큰 레퍼런스는 `packages/tokens/DESIGN.md` —
구현은 `packages/react` 다. 이 파일은 **무엇을 어떤 순서로,
무엇을 만족시키며 만드는가**만 다룬다.

**컴포넌트와 관련된 작업이면 이 파일을 먼저 읽는다.**

---

## 1. 진행 순서

**P0 — 폼과 기본 컨트롤 (9종)**

| | 컴포넌트 | 변형 |
|---|---|---|
| 1 | Button | Button · Text Button · Floating Button |
| 2 | Text Field | |
| 3 | Text Area | |
| 4 | Search | Outline · Underline |
| 5 | Selection Controls | Checkbox · Radio · Chip(Select/Filter/Input) · Select Button |
| 6 | Switch | |
| 7 | Loading | S · M · L |
| 8 | Tag | Membership · Status · Category |
| 9 | Tooltip | Toggle · Auto |

**P1 — 구조와 알림 (9종)**

| | 컴포넌트 | 변형 |
|---|---|---|
| 1 | Card | Text · Image Text |
| 2 | List | Vertical · Horizontal · Menu |
| 3 | Tab | Fixed · Scrollable |
| 4 | Top Navigation | |
| 5 | Dropdown | Text · Text Icon |
| 6 | Popup | Center · Full Screen |
| 7 | Notification | Toast · Snackbar |
| 8 | Indicator | Dot · Number · Progress |
| 9 | Accordion | |

**P2 — 데이터와 탐색 (8종)**

| | 컴포넌트 | 변형 |
|---|---|---|
| 1 | Table | Data · List · Text |
| 2 | Pagination | |
| 3 | Item Tile | Vertical · Horizontal |
| 4 | Navigation | 4 Depth |
| 5 | Breadcrumb | |
| 6 | Date Picker | Single · Range · Time |
| 7 | Slider | Basic · Popover · Range |
| 8 | Bottom Navigation | |

**P3 — 바텀시트 (1종)**

| | 컴포넌트 | 변형 |
|---|---|---|
| 1 | Bottom Sheet | Text · Depth Contents · Text List · Icon Text List · Check List · Radio List · Promotion · Search · Image List · Input Stack |

### 이 목록은 닫힌 집합이 아니다

**P0~P3 는 착수 순서지 전체 목록이 아니다.** 필요한 컴포넌트가 생기면 추가한다.
그래서 아래 둘은 결함이 아니다.

- **`Data Visual`(Chart) 이 목록에 없다** — `body-sm` 의 `$description` 과 미결 21(`tnum`)이
  전제하고 있지만 아직 착수 대상이 아닐 뿐이다. 필요해지면 넣는다.
- **합계 27종 vs 미결 9 의 "29종"** — 목록이 열려 있으므로 숫자를 맞출 이유가 없다.
  다만 미결 9(상위 3단계에 대응 컴포넌트 없음)의 논거가 **그 시점 스냅샷에 기대고 있다**는
  점은 기억한다 — 나중에 큰 제목을 쓰는 컴포넌트가 추가되면 그 미결은 저절로 풀린다.

**추가할 때** — 우선순위(P0~P3)를 정하고, 3절의 공통 요구와 6절 완료 정의는 그대로 적용한다.

---

## 2. 착수 전 선결

| | 선결 항목 | 상태 |
|---|---|---|
| **⓪** | **배포 형태** — 무엇으로 만드나 | **React 컴포넌트로 확정** |
| **⓪′** | **지원 범위** — 브라우저 × 입력 방식 | **미정 · Tooltip 착수 전 마감.** P0 에서 이 결정에 걸리는 것은 **Tooltip 하나뿐이다** — Button · Text Field · Text Area · Search · Selection Controls · Switch · Loading · Tag 는 영향받지 않는다. 플랫폼 API 사용 가부를 결정한다 ↓ |
| **①** | **동작 명세** — 컴포넌트별 역할·키보드·상태 | 3-0 의 형식으로 컴포넌트마다 쓴다 |
| **②** | **기반 프리미티브** — headless 냐 직접 구현이냐 | **headless 를 쓰지 않는다.** 아래 근거 |
| **③** | **사용자 환경 설정** | `Loading` 이 P0-7 이라 `prefers-reduced-motion` 이 P0 로 딸려 온다 |
| **④** | **레이어링** | `Tooltip` 이 P0-9 이라 포털·스크롤 잠금·중첩 오버레이가 통째로 P0 로 딸려 온다. z-index 눈금은 이미 있다(0-27) |

> 원래 계획서는 선결을 ①②만 꼽았다. **Tooltip 과 Loading 이 P0 에 있는 한 ③④도 P0 이다.**
>
> **다만 "선결"이 전부를 막는다는 뜻은 아니다.** 미정으로 남은 ⓪′(지원 범위)는 Tooltip 에만
> 걸린다 — **Button 은 지금 착수할 수 있다.** 실제로 Button 을 막는 것은 이 표가 아니라
> **미결 17(컴포넌트 토큰 계층)** 과 `transition` 복합 토큰이며, 둘 다 Button 을 만들면서
> 정하기로 한 것들이다(0-16 · 0-27).

### ② headless 를 쓰지 않는다

Radix · React Aria 같은 headless 라이브러리를 **쓰지 않고 직접 구현한다.**

**주된 이유 — 멀티플랫폼에서 필요한 것은 "동작 명세"다.**
웹으로 시작하지만 앱·iOS 를 고려한다. iOS 에서 같은 Switch 를 만들려면 역할·키보드/포커스 맵·
상태 전이를 **어차피 문서로 써야 한다.** 그걸 Radix 에 맡기면 그 명세가 **서드파티 React 코드
안에 암묵적으로 갇히고**, iOS 개발자는 읽을 수 없다.

> **토큰이 값의 단일 원본이라면, 동작 명세는 행동의 단일 원본이다.**
> 어차피 쓸 명세라면 한 번 써서 세 곳에 구현하는 쪽이 일관된다. 그 형식이 **3-0** 이다.

**보조 근거 셋**
- **KR delta 5건 중 4건은 headless 가 해주지 않는다** — 6.0mm · 안쪽 1px 여백 · 새 창 예고 ·
  이웃 콘텐츠 구분. `id` 중복(8.1.1)만 해준다.
- **의존성 0개가 지금 자산이다.** CI 가 빠르고 공급망 위험이 없다.
- **P0 다수는 네이티브 HTML 로 거의 끝난다.** `<button>` · `<input type=checkbox|radio>` ·
  `<textarea>` 가 키보드·ARIA·폼 연동을 준다 — Button · Text Field · Text Area · Tag ·
  Switch · Checkbox · Radio.

**성립하지 않는 근거 하나 (헷갈리지 말 것)** — *"iOS 를 고려하니 headless 를 피한다"* 는 논리
자체로는 맞지 않는다. DTCG 는 **토큰 층**이고 headless 는 **웹 구현체 층**이라 둘은 만나지
않는다. Radix 를 썼어도 iOS 는 Swift 로 따로 구현한다 — 웹과 네이티브를 함께 덮는 headless 는
없다. 결론은 같지만 근거는 위의 "동작 명세" 쪽이다.

**중간 지대는 열어둔다.** headless **프레임워크 라이브러리**는 안 쓰되, **프레임워크 중립 단일
목적 유틸리티**는 후보로 남긴다. `@floating-ui/dom` 은 바닐라 JS 라 React 에 묶지 않는다 —
CSS anchor positioning 이 지원 범위 밖으로 판정되면 Dropdown·Tooltip 의 현실적인 대안이다.

### 아이콘은 lucide 를 쓴다

**결정 — 아이콘 세트는 [lucide](https://lucide.dev) 다. 라이선스는 ISC**(확인함, 2026-09-03).
`packages/react` 의 런타임 의존성이 된다(`lucide-react`). `packages/tokens` 는 영향받지 않는다 —
아이콘은 웹 구현체 층이고 토큰은 플랫폼 중립을 유지한다(0-29).

**기본값 — `lucide-react` 1.39.0 소스에서 확인했다**(2026-09-03, `defaultAttributes.mjs`).

```
width 24 · height 24 · viewBox "0 0 24 24"
stroke "currentColor" · strokeWidth 2 · fill "none"
```

**쓰는 방식 — CSS 로 크기를 준다. `size` prop 을 쓰지 않는다.**
래퍼에 `--control-icon-size-*` 를 주고 `svg { inline-size: 100% }` 로 채운다.
viewBox 가 함께 줄어들어 **획도 비례해 얇아지므로**(16px 에서 ≈1.33px) `strokeWidth` 를
따로 조정하지 않는다. 아이콘 세트가 바뀌어도 CSS 가 그대로 동작한다.

`stroke` 가 `currentColor` 라 **아이콘용 색 토큰을 두지 않는다** — 컨테이너의 `color` 가 제어한다.

크기 토큰은 `control.iconSize` sm 16 · md 20 · lg 24 다(0-34).

### 그 대가 — 직접 구현이 비싼 5종

**눈 뜨고 받는 비용이다.** 이 다섯은 일정을 넉넉히 잡고, 착수 전에 3-0 명세를 특히 꼼꼼히 쓴다.

| 컴포넌트 | 왜 비싼가 |
|---|---|
| **Tooltip** (P0-9) | WCAG 1.4.13 이 **dismissible · hoverable · persistent 를 동시에** 요구한다. 트리거→툴팁으로 마우스가 넘어가는 타이밍까지 다뤄야 한다 |
| **Dropdown** (P1-5) | roving tabindex + 위치 계산(flip/shift) + 외부 클릭 처리 |
| **Date Picker** (P2-6) | **가장 비싸다.** 키보드 그리드 + 로케일 + 범위 선택 |
| **Slider** (P2-7) | WCAG 2.5.7 끌기 동작 대안이 필수다 |
| **Bottom Sheet** (P3) | 포커스 트랩 + 스크롤 잠금 + iOS 대응 |

### 플랫폼 API 가 상당 부분 덜어준다 — 다만 조건부다

| API | Baseline |
|---|---|
| **Popover API**(`popover` 속성) | **Newly available — 2025-01** |
| **`<dialog>`** | `showModal()` 이 **배경을 `inert` 로 만들고 포커스를 가둔다.** **배경 스크롤 잠금은 포함되지 않는다** — 그건 우리 몫이고 iOS Safari 대응이 특히 까다롭다 |
| **CSS anchor positioning**(`anchor-name`) | **Newly available — 2026-01** |

**둘 다 "widely available" 이 아니라 "newly available" 이다.** 최신 브라우저에서만 동작하고,
anchor positioning 은 특히 최근이다. **그래서 지원 범위(⓪′)를 Tooltip 착수 전에 정해야 한다** —
그전에는 이 API 들을 쓸 수 있는지 알 수 없고, 못 쓰면 위 5종의 비용이 다시 올라간다.
**Button 을 비롯한 나머지 P0 는 이 결정을 기다리지 않는다.**

---

## 3. 모든 컴포넌트가 만족해야 하는 것

접근성 기준은 **WCAG 2.2 AA + KWCAG 2.2** 다(`CLAUDE.md`). AA 준수는 A 를 포함하므로
**등급과 무관하게 아래를 전부 지킨다.**

### 3-0. 동작 명세 — 컴포넌트마다 먼저 쓴다

**headless 를 쓰지 않기로 했으므로(2절 ②) 이것이 그 자리를 대신한다.** 구현 전에 쓰고,
구현이 명세를 따르는지로 완료를 판정한다.

**플랫폼 중립으로 쓴다.** 웹 구현만을 위한 문서가 아니다 — iOS·Android 가 같은 컴포넌트를
만들 때 읽는 문서다. 그래서 CSS 클래스나 React prop 이 아니라 **역할·키보드·상태**로 쓴다.

```
<컴포넌트 이름>                              APG 패턴: <패턴 또는 "없음">
  역할       무엇으로 만드나 · 어떤 role 인가
  이름       접근 가능한 이름을 무엇이 만드나 (2.5.3)
  키보드     키 → 동작. Tab 진입 횟수 · roving 여부
  상태       상태 → 노출 속성. 충돌 시 우선순위
  조작영역   최소 크기와 근거 SC
  변형       variant → 색 토큰 매핑
  크기       단계와 기본값
  토큰       쓰는 토큰 목록
  플랫폼     웹 / iOS 대응
  금지       하지 말 것
  미결       아직 못 정한 것 (비워두지 말고 적는다)
```

**작성한 명세는 8절에 모은다.** 첫 사례는 **8-1 Button** 이다.

**플랫폼별로 이렇게 읽힌다.**

| 명세 항목 | 웹 | iOS |
|---|---|---|
| 역할 | `role` · 네이티브 요소 | `accessibilityTraits` |
| 이름 | 자식 텍스트 · `aria-label` | `accessibilityLabel` |
| 상태 | `aria-*` | `accessibilityValue` · traits |
| 키보드 | 키 핸들러 | VoiceOver 제스처 · 하드웨어 키보드 |
| 조작영역 | CSS px | pt |

**ARIA APG 패턴이 있는 컴포넌트는 그 패턴 이름을 명시한다.** 직접 구현하더라도 키보드 규약을
새로 발명하지 않는다 — 사용자가 이미 아는 동작을 따른다.

### 3-1. 조작 영역과 포인터

| 항목 | SC | 등급 | 기준 |
|---|---|---|---|
| 조작 영역 크기 | 2.5.8 | AA | **24×24 CSS px** 이상. 간격·인라인·필수적인 경우 예외 조항이 있다 |
| 끌기 동작 대안 | 2.5.7 | AA | 끌기로만 되는 기능에 단일 포인터 대안 |
| 다중 포인터·경로 제스처 | 2.5.1 | A | 핀치·스와이프·그리기에 단일 포인터 대안 |
| 포인터 취소 | 2.5.2 | A | 실행은 **up-event** 에서. 누른 뒤 벗어나면 취소 가능 |
| 호버·포커스 콘텐츠 | 1.4.13 | AA | 툴팁·팝오버는 **dismissible · hoverable · persistent** 셋을 모두 만족 |
| 호버 없는 환경 | — | — | hover 로만 드러나는 정보·조작은 터치에서 소실된다. 대안을 명시한다 |

### 3-2. 키보드와 포커스

| 항목 | SC | 등급 | 기준 |
|---|---|---|---|
| 키보드 조작 | 2.1.1 / 2.1.2 | A | 모든 기능을 키보드로. 트랩 없음. **APG 패턴을 컴포넌트마다 지정한다**(선결 ①) |
| 포커스 표시 | 2.4.7 | AA | 초점을 시각적으로 구별할 수 있어야 한다 |
| 포커스 가려짐 | 2.4.11 | AA | sticky 헤더·푸터에 **완전히** 가려지지 않아야 한다 |
| 포커스 링 대비 | 1.4.11 | AA | 인접 색과 **3:1**. 표면이 달라도 보이는지 확인 |
| 포커스 링 사양 | 2.4.13 | AAA | AA 범위 밖이지만 구현 비용이 낮아 **내부 권장**으로 둔다 |
| 포커스 관리 | — | — | 초기 포커스 대상, 트랩 범위, 닫힐 때 복귀 지점, `inert` 사용 여부 |

**링에는 offset 이 필수다.** 컴포넌트 면 위에 직접 그리면 `accent.bg` 계열과 같은 색이 되어
대비가 1.00 까지 떨어진다. `--focus-ring-width` · `--focus-ring-offset` 를 쓴다.

### 3-3. 이름 · 역할 · 상태

| 항목 | SC | 등급 | 기준 |
|---|---|---|---|
| 이름·역할·값 | 4.1.2 | A | 접근 가능한 이름을 무엇이 만드는지(라벨 / `aria-label` / 자식 텍스트), 상태를 어떤 속성으로 노출하는지(`aria-expanded`·`selected`·`invalid`·`current`) |
| 레이블과 네임 | 2.5.3 | A | **보이는 라벨 텍스트가 접근 가능한 이름에 포함**돼야 한다. 아이콘 버튼·음성 제어에서 자주 깨진다 |
| 상태 메시지 | 4.1.3 | AA | 토스트·검증·비동기 결과의 live region 정책(`polite`/`assertive`), 중복 발화 방지 |
| 오류 식별 | 3.3.1 | A | 오류 위치와 이유를 텍스트로. `aria-describedby` 연결, 검증 시점(blur vs submit) |
| 오류 제안 | 3.3.3 | AA | 수정 방법을 제안한다 |
| 레이블·지시문 | 3.3.2 | A | 필수 표시 방법, 형식 안내 문구의 위치 |
| 반복 입력 정보 | 3.3.7 | **A** | 이전 단계에서 입력한 정보를 다시 입력하게 하지 않는다 |
| 접근 가능한 인증 | 3.3.8 | **AA** | 인증이 인지 기능 테스트에만 의존하지 않는다 |
| 입력 시 맥락 변화 | 3.2.2 | A | select·토글의 값 변경만으로 맥락이 바뀌지 않게 |
| 입력 목적 식별 | 1.3.5 | AA | `autocomplete` 속성 매핑 |
| 찾기 쉬운 도움 정보 | 3.2.6 | **A** | 도움 정보를 제공한다면 각 페이지에서 동일한 상대적 순서로 |

### 3-4. 텍스트 · 레이아웃 견고성

| 항목 | SC | 등급 | 기준 |
|---|---|---|---|
| 글자 간격 | 1.4.12 | AA | 사용자가 행간·자간을 덮어써도 깨지지 않아야 한다. **고정 높이 버튼·칩에서 실패한다** |
| 리플로우 | 1.4.10 | AA | **320px** 폭에서 가로·세로 스크롤이 동시에 생기지 않게 |
| 텍스트 크기 조정 | 1.4.4 | AA | 200% 확대에서 콘텐츠·기능 손실 없음. 우리 타이포는 전부 rem 이라 유리하다 |
| 긴 텍스트·오버플로 | — | — | 줄임 vs 줄바꿈, 최대 줄 수, 툴팁 노출 여부. **한글은 `word-break: keep-all` 정책을 함께 정한다** |
| 국제화 | — | — | 텍스트 팽창 여유, RTL 미러링 대상(아이콘·화살표·패딩), 숫자 tabular figures(미결 21) |

### 3-5. 사용자 환경 설정

| 항목 | 기준 |
|---|---|
| `forced-colors` | Windows 고대비에서 **투명 배경 버튼·아이콘 전용 버튼·커스텀 체크박스가 통째로 사라진다.** 시스템 색상 키워드와 강제 테두리 규칙을 컴포넌트마다 정한다 |
| `prefers-reduced-motion` | 위치 이동은 없애고 opacity 로 대체. **스피너는 멈추지 않는다** — 진행 중이라는 정보가 사라진다(0-27). 토큰으로 일괄 0ms 처리하지 않는다 |
| `prefers-contrast` | 테두리 추가·그림자 제거 등 대체 규칙 |
| `prefers-reduced-transparency` | 오버레이·블러 표면의 대체 규칙 |

### 3-6. 상태와 콘텐츠

| 항목 | 기준 |
|---|---|
| 상태 매트릭스 | default / hover / focus / active / disabled / read-only / loading / error / selected 중 **유효한 조합**과 충돌 시 우선순위(`disabled + error` 는?) |
| disabled 정책 | 포커스 가능하게 둘지 `aria-disabled` 로 대체할지. 대비 예외를 어디까지 허용할지 — `label.disable` 은 대비 검사에서 빠져 있다 |
| 빈 상태 | 문구·아이콘·행동 유도의 유무 |
| 로딩 | 스켈레톤 유무, 로딩 중 레이아웃 이동 방지, 낙관적 업데이트 여부 |
| 부분 실패 | 재시도 진입점의 위치 |

### 3-7. API 계약

| 항목 | 기준 |
|---|---|
| 기반 프리미티브 | **headless 를 쓰지 않고 React 로 직접 구현한다**(2절 ②). 동작은 3-0 명세가 원본이다 |
| 제어 / 비제어 | `value` · `defaultValue` · `onChange` 규약, 폼 라이브러리 연결 방식 |
| `id` 생성 | **KWCAG 8.1.1 의 id 중복 금지 때문에 필수.** React 로 확정했으므로 **`useId` 를 규약으로 고정한다** — 손으로 문자열을 짓지 않는다 |
| 확장 지점 | `ref` 포워딩, 네이티브 props 통과, `asChild`/`as`, slot 구조. **직접 구현이므로 우리가 설계한다** — 라이브러리 규약을 물려받지 않는다 |
| 오버라이드 정책 | `className` 허용 범위, **임의값·하드코딩 색상 금지**(`npm run lint:hardcode` 가 막는다). 에이전트에게 가장 명시적으로 적어둬야 할 항목 |
| 네이밍 규약 | boolean prop 접두사, 이벤트 핸들러 이름, variant 값의 어휘 |
| 합성 규칙 | 어떤 컴포넌트가 어떤 컴포넌트를 자식으로 받을 수 있는지 |
| 외부 여백 소유권 | **컴포넌트는 자기 바깥 margin 을 갖지 않는다.** 미결 17 의 의도 이름 계층(`stack-gap`)과 짝을 이룬다 |

### 3-8. 레이어링

| 항목 | 기준 |
|---|---|
| z-index | **`--z-index-*` 만 쓴다.** `base 0 · sticky 100 · dropdown 200 · backdrop 300 · modal 400 · toast 500 · tooltip 600`(0-27) |
| 포털 전략 | 어디에 마운트하는지. **`transform`·`filter`·`opacity`·`will-change` 조상이 있으면 z-index 가 무력해진다** |
| 스크롤 잠금 | 배경 스크롤 차단 방식, iOS 대응 |
| 중첩 오버레이 | 모달 위 팝오버, 팝오버 위 툴팁의 닫힘 순서 |
| 새 창·팝업 | **KWCAG 7.2.1 대응.** 예고 방식과 닫기 보장 |

---

## 4. KR delta — WCAG 2.2 AA 로 덮이지 않는 KWCAG 항목

**이 5개만 따로 챙기면 국내 기준과의 차이가 닫힌다.** 두 기준은 포함 관계가 아니다 —
WCAG 에만 1.4.11 이 있고, KWCAG 에만 5.4.4 가 있다(DECISIONS 4-1).

| KWCAG | 기준 | WCAG 로 안 덮이는 이유 |
|---|---|---|
| **8.1.1 마크업 오류 방지** | 요소의 열고 닫음·중첩·속성 선언에 오류가 없어야 한다. *"하나의 마크업 문서에서는 같은 id 값을 중복하여 선언하지 않아야 한다"* | **WCAG 2.2 에서 4.1.1 Parsing 이 폐지됐다.** 컴포넌트를 여러 번 인스턴스화할 때 정확히 이게 터진다 — **`id` 는 반드시 생성 함수로 만든다** |
| **5.4.4 콘텐츠 간의 구분** | *"이웃한 콘텐츠는 시각적으로 구분될 수 있도록 제공해야 한다."* 준수 방법 — ①테두리 ②구분선 ③무늬 ④배경색 명도대비 ⑤줄·글자 간격 ⑥기타 | **대응하는 WCAG 조항이 없다.** **수치 기준도 없다.** 카드·리스트 항목·칩의 구분 정책. 우리는 보더로 만족시킨다(0-24) |
| **6.1.3 조작 가능 — 크기** | 콘트롤의 **대각선 길이 6.0mm 이상** 권고 | 2.5.8 은 24×24 CSS px 로 **단위가 다르다.** 각각 확인한다 |
| **6.1.3 조작 가능 — 안쪽 여백** | 링크·입력·콘트롤은 **테두리 안쪽 1px 이상 여백**을 두고 그 영역은 포인터 조작에 반응하지 않게 | WCAG 에 없다. 또 2.5.8 의 예외(인라인 링크 등)가 KWCAG 에는 없어, **본문 속 인라인 링크가 WCAG 는 통과하고 국내 심사에서 걸릴 수 있다** |
| **7.2.1 사용자 요구에 따른 실행** | *"사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 한다."* 레이어 팝업은 닫기 요구에 반드시 닫혀야 한다 | WCAG 에서는 3.2.5 Change on Request 로 **AAA** 다. AA 만 따르면 빠진다. **모달·외부 링크 컴포넌트에 직접 걸린다** |

> 6.4.4 고정된 참조 위치 정보는 전자출판문서 전용이라 일반 컴포넌트에 해당 없음.

**인증 주의** — 디지털포용법에 따른 웹접근성 품질인증 심사는 **KWCAG 33항목으로 채점**한다.
WCAG 2.2 AA 준수가 곧 인증 통과는 아니며, 심사 시점에 매핑이 필요하다.

---

## 5. 토큰 — 이미 정해진 것 / 아직 아닌 것

### 다시 열지 않는다 (결정 완료)

| 항목 | 결론 | 근거 |
|---|---|---|
| composite type | typography 는 복합, shadow 는 semantic | `CLAUDE.md` |
| `$type` 선언 위치 | **토큰마다 필수.** 값에서 추론 금지 | `CLAUDE.md` |
| 테마 분리 | `COMPOSITION.modifiers.theme` → `dist/tokens.{light,dark}.json` | 0-9 |
| `$extensions` 정책 | `net.infobank.ds.*` 4종만. 늘리지 않는다 | `CLAUDE.md` |
| **오버레이 방향** | **테마가 아니라 얹히는 면의 밝기**로 고른다. 뒤집히는 면(`primary`)에서는 결과적으로 테마별 선택자가 필요해질 뿐이다 | **0-14** |
| 모션 · 쌓임 | `duration` · `cubicBezier`(Motion) · `zIndex`(Elevation) 완비 | 0-27 |
| 빌드 파이프라인 | **자체 `build.mjs`.** Style Dictionary 는 쓰지 않는다 — 검사 9종이 여기 붙어 있다 | — |

### 컴포넌트와 함께 정한다 (열림)

| 미결 | 항목 |
|---|---|
| **17** | **컴포넌트 토큰 계층** — `--spacing-16` 을 직접 고르는 문제. 필요한 것은 semantic 이 아니라 **의도 이름 계층**(`control-padding`·`stack-gap`). **첫 관문이다** |
| 8 | 타이포–컴포넌트 매핑이 잠정. 크기만 보고 배분한 추정이다 |
| 9 | `display-lg`(60) · `display-md`(40) · `heading-xl`(36) 에 대응 컴포넌트 없음 |
| 10 | `spacing` 사용 가이드 부재 |
| 16 | 미디어 스크림 없음 |
| 19 | 플랫폼 축 미도입 |
| 21 | 숫자 폭 고정(`tnum`) 수단 없음 — Chart·Table |
| 22 | 파운데이션 목록이 네 곳에 복제 |

**아직 안 만든 것** — `transition` 복합 토큰. 의도 이름이 컴포넌트 문맥에서 나오므로
먼저 지으면 추측이 된다(0-27). Button 을 만들면서 짓는다.

### 밀도 / 사이즈 스케일 (미정)

`sm`/`md`/`lg` 중 기본값, 그리고 **어떤 사이즈가 2.5.8(24 CSS px)과 KWCAG 6.0mm 를 모두
만족하는지.** 작은 사이즈의 사용 조건을 명시한다.

---

## 6. 완료 정의 (DoD)

| 항목 | 기준 |
|---|---|
| 시각 회귀 | 스냅샷 대상 상태를 컴포넌트마다 지정 |
| 자동 검사 | axe 통과. `npm run check`(DTCG · AA · 하드코딩) 통과 |
| 키보드 | 시나리오 스크립트 — **3-0 명세대로** 동작하는지. APG 패턴을 지정했다면 그 패턴대로 |
| **KR delta 수동 체크** | **자동화 도구가 안 잡는다.** ① `id` 중복(정적 분석) ② 인라인 링크의 조작 영역 ③ 새 창 예고 ④ 이웃 콘텐츠 구분 ⑤ 콘트롤 안쪽 여백 |
| 사용하지 말아야 할 때 | 대체 컴포넌트로 안내. **do / don't 예시가 있으면 에이전트 산출물 품질이 눈에 띄게 올라간다** |
| 지원 범위 | 브라우저 × 입력 방식(마우스 / 터치 / 키보드 / 스크린리더 / 음성 제어) 매트릭스. **정하는 것은 선결 ⓪′ 이고**(Popover API·anchor positioning 사용 가부를 결정한다), 여기서는 그 범위대로 검증했는지를 본다 |

---

## 7. 기준선

| 축 | 기준 |
|---|---|
| 접근성 | **WCAG 2.2 Level AA** 단일 기준. 2023-10 W3C 권고이자 **ISO/IEC 40500:2025**(2025-10-21 승인). AA 준수는 A + AA 를 모두 만족해야 하므로 위 표에는 A 항목도 포함된다 |
| WCAG 3.0 | Working Draft 다. 권고까지 시간이 남아 **이 문서의 기준으로 삼지 않는다** |
| 국내 | **KWCAG 2.2** — 33개 검사항목 / 14지침 / 4원칙, 등급 구분 없음. 대부분 WCAG 2.2 AA 로 덮이고, 덮이지 않는 것만 4절 KR delta 로 분리했다 |
| 인증 | 디지털포용법 웹접근성 품질인증 심사는 **KWCAG 33항목으로 채점**한다 |
| 토큰 | **DTCG 2025.10** — Final Community Group Report(2025-10-28). `/tr/drafts/` 는 근거로 쓰지 않는다 |

**출처**
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [What's New in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) · [ISO 승인 공지](https://www.w3.org/WAI/news/2025-10-21/wcag22-iso)
- [KWCAG 2.2 검사항목](https://a11ykr.github.io/kwcag22/)
- [DTCG Format Module 2025.10](https://www.designtokens.org/tr/2025.10/format/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/)

---

## 8. 컴포넌트 동작 명세

3-0 의 형식으로 컴포넌트마다 쓴다. **구현 전에 쓰고, 구현이 명세를 따르는지로 완료를 판정한다.**

> 27종이 쌓이면 이 절이 비대해진다. 그때 별도 파일로, iOS 착수 시 패키지로 승격한다
> (Adobe `component-schemas` 가 같은 자리다 — DECISIONS 0-29).

### 8-1. Button

**APG 패턴: Button** — 키보드 규약을 새로 발명하지 않는다.

```
역할       네이티브 <button type="button">
           div·span 에 role="button" 을 붙이지 않는다
           링크처럼 이동하는 것은 Button 이 아니라 <a> 다

이름       자식 텍스트가 접근 가능한 이름이 된다
           아이콘 전용이면 aria-label 필수
           보이는 라벨이 있으면 그 텍스트가 이름에 포함돼야 한다 (2.5.3)
           — 음성 제어 사용자가 "확인 눌러" 라고 말할 수 있어야 한다

키보드     Space   활성    APG: "Space: Activates the button"
           Enter   활성    APG: "Enter: Activates the button"
           Tab     진입 1회 · roving tabindex 없음
           실행은 up-event 에서 한다 (2.5.2)
           — 누른 채 밖으로 벗어나면 취소된다

상태       inactive  (기본)  aria-disabled="true"
                            포커스 받는다 · 활성화된다 · 눌리면 사유를 안내한다
                            라벨은 label.neutral 이다 — label.disable 은 1.29:1 로 미달이고
                            조작 가능하므로 WCAG 1.4.3 예외로 볼 수 없다 (0-32)
                            비활성 신호는 배경·보더·커서가 함께 담당한다 (KWCAG 5.4.1)
           disabled  (예외)  네이티브 disabled · 라벨은 label.disable
                            포커스도 활성화도 안 되는 진짜 inactive 라 1.4.3 예외가 적용된다
                            사유를 알릴 방법이 정말 없을 때만 · 쓰면 근거를 남긴다
           loading           aria-busy="true" · 접근 이름은 유지한다
                            스피너는 prefers-reduced-motion 에서도 멈추지 않는다 (0-27)
           pressed           aria-pressed (토글 버튼)
           우선순위          disabled > inactive > loading > 나머지

조작영역   ≥ 24×24 CSS px (WCAG 2.5.8) = --control-min-target
           KWCAG 6.1.3(대각 6.0mm)을 포함한다 — 24 만 지키면 둘 다 닫힌다
           가장 작은 sm(32px)도 자체로 만족한다
           시각 크기가 24 미만인 아이콘 버튼은 히트박스를 24 까지 넓힌다

변형       primary    bg {color.primary.normal}   label {color.inverse.label}
           secondary  bg {color.fill.normal}      label {color.label.normal}
           outline    bg 없음 · border {color.line.normal} · label {color.label.normal}
           text       bg 없음 · label {color.label.normal}      (Text Button)
           negative   bg {color.status.negative}  label {color.inverse.label}
           floating   원형 · radius.circle · 그림자 shadow.md   (Floating Button)

크기       sm 32 · md 40 · lg 48   기본 md
           sm  조밀한 툴바 · 테이블 행 내부 · Chip
           md  폼 · 다이얼로그 · 일반 화면
           lg  모바일 주요 CTA · Bottom Sheet 하단
           타이포  sm → label-md(14) · md·lg → label-lg(16)
           — lg 가 글자를 키우지 않는 것은 의도다. 커지는 이유는
             누르기 쉬우라고지 읽기 쉬우라고가 아니다

토큰       크기    --control-min-height-*  --control-padding-inline-*
                   --control-gap-*  --control-radius-*  --control-min-target
           전환    --transition-control
           포커스  --focus-ring-width + --focus-ring-offset
                   --color-interaction-focus
           상태    오버레이는 테마가 아니라 면의 밝기로 고른다 (0-14)
                   밝은 면 → overlay-darken-* · 어두운 면 → overlay-lighten-*

플랫폼     웹   <button> · aria-* · CSS px
           iOS  accessibilityTraits.button
                inactive → .notEnabled + 힌트로 사유
                loading  → .updatesFrequently
                조작영역 44×44 pt (HIG) 는 24 CSS px 보다 크므로 별도로 본다

금지       height 를 고정하지 마라 — min-height 를 쓴다
           고정 높이는 사용자가 행간을 키웠을 때 글자를 자르고 1.4.12 를 깬다
           outline: none 으로 포커스 링을 지우지 마라
           아이콘 전용 버튼에 이름을 생략하지 마라
           비활성 상태를 색만으로 표현하지 마라 (5.4.1 · 색에 무관한 인식)
           --spacing-* 를 직접 고르지 마라 — --control-* 를 쓴다

미결       ① 해소 — inactive 라벨을 label.neutral 로 바꿨다 (0-32)
             브라우저 실측 10건 전부 통과, 최저 6.25:1. 토큰 변경 0건
           ② Floating Button 의 크기 단계 — 원형이라 min-height 짝이 맞지 않는다
           ③ 아이콘 크기 토큰이 없다 — Size 파운데이션에 추가할 후보
```

### 8-2. Text Field

**APG 패턴: 없음** — 네이티브 `<input>` 이 규약이다. 새로 발명하지 않는다.

```
역할       네이티브 <input>. type 은 prop 으로 통과한다
           (text · email · password · tel · url · search · number)

이름       <label for> ↔ <input id>. **id 는 useId 로 만든다** (KWCAG 8.1.1)
           보이는 라벨이 기본이다. placeholder 는 라벨이 아니다
           — 입력을 시작하면 사라져서 형식을 잊게 만든다

키보드     네이티브. Tab 진입 1회

상태       default / hover / focus / filled / readOnly / inactive / disabled / error
           error     → aria-invalid="true" + aria-describedby 로 메시지 연결
           helper    → aria-describedby
           **오류가 떠도 helper 를 유지한다** — 둘 다 describedby 에 넣는다
             형식 안내가 사라지면 3.3.2 를 잃는다
           우선순위   disabled > inactive > readOnly > error > 나머지

검증 시점  **컴포넌트가 갖지 않는다.** error 를 prop 으로 받는다 — 폼 상태는 폼이 갖는다
           권장 규칙: **submit 우선 · 첫 submit 이후에는 blur**
           입력 중 실시간 검증은 다 치기도 전에 사용자를 혼낸다

오류       3.3.1 위치와 이유를 텍스트로 · 3.3.3 수정 방법을 제안
           **필드 자체 오류에 live region 을 쓰지 않는다** — 포커스가 들어올 때
           describedby 로 읽힌다. live 로 하면 중복 발화된다
           폼 전체 요약에는 live region 을 쓴다(다른 컴포넌트의 몫)

필수       네이티브 required + **보이는 텍스트 "필수"**
           별표만 쓰면 KWCAG 5.4.1(색·모양에 무관한 인식)과 3.3.2 에 걸린다

자동완성   1.3.5 — autocomplete 를 통과시킨다. 기본값을 지어내지 않는다

크기       md 40 · lg 48. **sm 은 노출하지 않는다** — 32px 입력은 글자와 여백이 답답하다
           control.* 을 Button 과 공유한다

조작영역   입력 자체는 충분하다. 안에 컨트롤을 넣으면 그것이 ≥24×24 여야 한다

토큰       control.min-height / padding-inline / radius   ← Button 과 공유(검증됨)
           테두리 ★ label.alternative — line.* 는 전부 3:1 미달이다(미결 23)
           오류 status.negative · 포커스 focus-ring + interaction.focus
           타이포 라벨 label-md · 입력값 body-md · 도움말·오류 label-sm

플랫폼     웹   <input> · <label for> · aria-*
           iOS  UITextField + accessibilityLabel
                오류는 accessibilityValue 가 아니라 힌트로 전달한다

금지       placeholder 를 라벨로 쓰지 마라
           오류를 색만으로 표시하지 마라 (5.4.1)
           입력 중 실시간으로 빨갛게 만들지 마라
           height 를 고정하지 마라 — min-height (1.4.12)
           id 를 손으로 짓지 마라 (8.1.1)

미결       ① 지우기 버튼 · 문자 수 카운터는 이번 범위에 없다
           ② 테두리 색이 의미상 어긋난다 — label 색을 line 자리에 쓰고 있다(미결 23)
```

**실측 (2026-09-03)**

| | 라이트 | 다크 | 기준 |
|---|---|---|---|
| 테두리 | 4.73 | 4.93 | 3:1 (1.4.11) |
| 오류 테두리 | 5.10 | 8.01 | 3:1 |
| 입력값 · 라벨 | 18.08 | 16.11 | 4.5:1 |
| placeholder · 도움말 | 4.73 | 4.93 | 4.5:1 |
| 오류 문구 · 필수 표시 | 5.10 | 8.01 | 4.5:1 |

**`control.*` 공유 검증** — 폼 한 줄에서 입력 40px · 버튼 40px · 바닥 정렬 차 **0**.
미결 17 에서 *"폼 한 줄에서 높이가 맞아야 한다"* 를 근거로 역할 단위 이름을 택한 것이 실물로 확인됐다.

### 8-3. Text Area

**APG 패턴: 없음** — 네이티브 `<textarea>` 가 규약이다.

**8-2 Text Field 와 같은 규약을 따른다** — 검증 시점은 폼이 갖고, 오류가 떠도 도움말을 유지하며,
`id` 는 `useId` 로 만든다. **다른 점만 적는다.**

```
역할       네이티브 <textarea>

크기       rows 로 정한다(기본 3). control.minHeight 를 쓰지 않는다
           — 한 줄 컨트롤이 아니다. min-height 는 lg(48px)를 하한으로만 잡는다

크기 조절  resize: vertical
           **가로를 막는 이유** — 가로로 늘리면 320px 리플로우(1.4.10)가 깨진다
           **세로를 허용하는 이유** — WCAG 2.5.7(끌기 동작)은 "사용자 에이전트가
           정하고 저작자가 수정하지 않은 기능"을 예외로 둔다. 축만 제한하고
           크기 조절 자체는 UA 에 맡긴다
           inactive · disabled 에서는 resize: none

글자 수    maxLength 를 주면 카운터가 함께 켜진다
           **제어 컴포넌트일 때만 표시한다** — 비제어면 값을 모르므로 틀린 숫자를
           보여주느니 감춘다
           aria-describedby 로 연결하고 **aria-live 를 쓰지 않는다**
           — 글자마다 발화하면 입력을 방해한다
           숫자는 tabular-nums 로 폭을 고정한다(미결 21 이 닫히면 토큰으로 옮긴다)

토큰       control.padding-inline / radius (Text Field 와 공유)
           테두리 ★ label.alternative — line.* 는 전부 3:1 미달(미결 23)
           세로 여백은 spacing-10

미결       ① 자동 높이 확장을 넣지 않았다
             CSS `field-sizing: content` 가 정답이지만 **Baseline newly available
             2026-06** 으로 3개월밖에 안 됐다. JS 로 흉내내면 사용자의 수동 크기
             조절과 싸운다. widely available 이 되면 그걸로 바꾼다
           ② 카운터가 한도에 닿았을 때의 처리 — 지금은 maxLength 가 조용히 막는다
```

**실측 (2026-09-03)**

| | 라이트 | 다크 | 기준 |
|---|---|---|---|
| 테두리 | 4.73 | 4.93 | 3:1 |
| 오류 테두리 | 5.10 | 8.01 | 3:1 |
| 입력값 | 18.08 | 16.11 | 4.5:1 |
| placeholder · 카운터 | 4.73 | 4.93 | 4.5:1 |
| inactive 라벨 | — | 6.25 | 4.5:1 |

`rows` 반영 88px(3행) · 132px(5행) · `id` 중복 0(6개) · 라벨 미연결 0 ·
카운터 `describedby` 연결됨 · 입력 시 `0 / 200` → `11 / 200` 갱신 확인 ·
**320px 리플로우 통과**(가로 스크롤 없음, 넘치는 요소 0).

### 8-4. Search

**APG 패턴: 없음** — 네이티브 `<input type="search">` 가 규약이다.
자동완성 목록은 Dropdown(P1-5)의 몫이고 여기 없다.

**8-2 Text Field 와 같은 규약을 따른다.** 다른 점만 적는다.

```
변형       outline (기본) · underline
           underline 은 좌우 여백을 줄인다 — 면이 없어 안쪽 여백이 의미를 갖지 않는다

이름       **라벨을 생략할 수 없다.** 화면에서 감추려면 hideLabel 을 쓴다
           placeholder 는 접근 가능한 이름이 아니고 입력을 시작하면 사라진다
           hideLabel 은 .ds-visually-hidden 으로 처리한다 —
           display:none 이나 visibility:hidden 은 보조기술에서도 사라진다

앞 아이콘  돋보기. 장식이라 aria-hidden 이고 pointer-events: none 이다
           — 아이콘을 눌러도 입력으로 포커스가 간다

지우기     **네이티브 지우기 버튼을 숨긴다**(::-webkit-search-cancel-button)
           — 키보드로 도달할 수 없어 WCAG 2.1.1 을 만족하지 못한다
           대신 진짜 <button> 을 둔다
           · 값이 있을 때만 나타난다 (제어·비제어 모두 동작)
           · 조작 영역 24×24 = --control-min-target (2.5.8 · KWCAG 6.1.3)
           · 이름은 "<라벨> 지우기" — 여러 검색이 한 화면에 있을 때 구분된다
           · **지운 뒤 포커스를 입력으로 되돌린다** — 버튼이 사라지면 포커스가
             body 로 떨어져 키보드 사용자가 위치를 잃는다

Enter      onSearch 를 부른다. 폼 안이면 폼 제출이 우선이다

토큰       control.min-height / padding-inline / radius / icon-size / min-target
           테두리 ★ label.alternative — line.* 는 전부 3:1 미달(미결 23)

미결       ① 자동완성·최근 검색어 목록 없음 — Dropdown 착수 시 합류한다
           ② 검색 랜드마크(<search> · role="search")를 컴포넌트가 만들지 않는다
             랜드마크는 페이지 구조라 소비자가 감싼다
```

**실측 (2026-09-03)**

| | 라이트 | 다크 | 기준 |
|---|---|---|---|
| outline 테두리 · underline 밑줄 | 4.73 | 4.93 | 3:1 |
| 오류 테두리 | 5.10 | 8.01 | 3:1 |
| 입력값 | 18.08 | 16.11 | 4.5:1 |
| placeholder · 앞 아이콘 · 지우기 아이콘 | 4.73 | 4.93 | 4.5:1 |

지우기 버튼 4개 모두 **24×24**(24 미만 0건) · 이름 `"밑줄형 지우기"` 처럼 라벨이 들어감 ·
**클릭 시 값 비움 → 버튼 사라짐 → 포커스가 입력으로 복귀 → 재입력 시 버튼 복귀** 확인 ·
`hideLabel` 라벨이 화면 1×1 이면서 `htmlFor` 로 연결됨.
