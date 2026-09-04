---
name: iNext Design System
package: "@infobank/ds-tokens"
version: "0.1.0"
spec: DTCG 2025.10 (Format · Color Module, Final Community Group Report)
source: primitive.json + semantic.light.json + semantic.dark.json + typography.json (packages/tokens)
generatedBy: tokens/build-design-md.mjs — 직접 편집하지 않는다
themes: [light, dark]
scope: 색·그림자 66 · 그 외 195 · 타이포 클래스 36. primitive 팔레트는 CSS 로 나가지 않으므로 제외한다.
usage: usedBy 는 packages/react/src 를 스캔한 **실제 사용처**다(검증 페이지 dev/ 제외). note 는 **의도**이고 usedBy 는 **현실**이라, 둘이 어긋나면 둘 중 하나가 틀린 것이다. 지금 56개 토큰이 쓰이고 있다.
typography:
  "base.display-lg":
    class: display-lg
    fontSize: "3.75rem"
    lineHeight: 1.2
    fontWeight: 700
    letterSpacing: "-0.075rem"
    note: 최상위 헤드라인. 랜딩 히어로·프로모션 등 페이지 레벨에서 쓴다 — 대응 컴포넌트 없음. PC 권장. 굵기는 bold 하나. 모바일(<768px) 오버라이드 있음.
  "base.display-md":
    class: display-md
    fontSize: "2.5rem"
    lineHeight: 1.3
    fontWeight: 700
    letterSpacing: "-0.05rem"
    note: 메인 타이틀. 랜딩 섹션 헤더·온보딩 등 페이지 레벨 — 대응 컴포넌트 없음. PC 권장. 굵기는 bold 하나. 모바일(<768px) 오버라이드 있음.
  "base.heading-xl":
    class: heading-xl
    fontSize: "2.25rem"
    lineHeight: 1.222222
    fontWeight: 700
    letterSpacing: "-0.03375rem"
    note: 강조형 헤드라인. 페이지 헤더·배너 등 페이지 레벨 — 대응 컴포넌트 없음. 굵기는 bold 하나. 모바일(<768px) 오버라이드 있음.
  "base.heading-lg":
    class: heading-lg
    fontSize: "2rem"
    lineHeight: 1.25
    fontWeight: 700
    letterSpacing: "-0.03rem"
    note: 페이지 상위 제목. Popup(Full Screen) 제목. 굵기는 bold 하나. 모바일(<768px) 오버라이드 있음.
  "base.heading-md":
    class: heading-md
    fontSize: "1.75rem"
    lineHeight: 1.285714
    fontWeight: 700
    letterSpacing: "-0.02625rem"
    note: 섹션 제목. Popup(Full Screen)·Bottom Sheet(Promotion) 제목. 굵기는 bold 하나. 모바일(<768px) 오버라이드 있음.
  "base.heading-sm":
    class: heading-sm
    fontSize: "1.5rem"
    lineHeight: 1.333333
    fontWeight: 700
    letterSpacing: "-0.0225rem"
    note: 하위 제목·그룹 제목. Popup(Center)·Bottom Sheet 제목. 굵기는 bold 하나. 모바일(<768px) 오버라이드 있음.
  "base.title-lg":
    class: title-lg
    fontSize: "1.25rem"
    lineHeight: 1.4
    fontWeight: 600
    letterSpacing: "-0.0125rem"
    note: 콘텐츠 타이틀. Card·Bottom Sheet·Popup 제목, Accordion 헤더. 기본 semibold, 강조는 title-lg-strong.
  "base.title-lg-strong":
    class: title-lg-strong
    fontSize: "1.25rem"
    lineHeight: 1.4
    fontWeight: 700
    letterSpacing: "-0.0125rem"
    note: title-lg 의 강조 변형(bold). 용도 동일, 굵기만 다르다.
  "base.title-md":
    class: title-md
    fontSize: "1.125rem"
    lineHeight: 1.444444
    fontWeight: 600
    letterSpacing: "-0.01125rem"
    note: 서브 제목. Accordion 헤더, List 섹션 제목, Item Tile 제목. 기본 semibold, 강조는 title-md-strong.
  "base.title-md-strong":
    class: title-md-strong
    fontSize: "1.125rem"
    lineHeight: 1.444444
    fontWeight: 700
    letterSpacing: "-0.01125rem"
    note: title-md 의 강조 변형(bold). 용도 동일, 굵기만 다르다.
  "base.title-sm":
    class: title-sm
    fontSize: "1rem"
    lineHeight: 1.5
    fontWeight: 600
    letterSpacing: "-0.01rem"
    note: 항목 제목. List 아이템·Item Tile 타이틀, Table 헤더 셀. 본문과 같은 크기이지만 굵기로 구분한다. 기본 semibold, 강조는 title-sm-strong.
  "base.title-sm-strong":
    class: title-sm-strong
    fontSize: "1rem"
    lineHeight: 1.5
    fontWeight: 700
    letterSpacing: "-0.01rem"
    note: title-sm 의 강조 변형(bold). 용도 동일, 굵기만 다르다.
  "base.body-lg":
    class: body-lg
    fontSize: "1rem"
    lineHeight: 1.625
    fontWeight: 400
    letterSpacing: "-0.01rem"
    note: 장문 본문 — 행간이 가장 넓다. Popup·Bottom Sheet(Text) 본문. **Text Area 는 여기 없다** — 같은 폼 안의 Text Field(body-md, 14px)와 글자 크기가 어긋나므로 입력값은 body-md 를 쓴다. PC 권장. 기본 regular, 강조는 body-lg-strong.
  "base.body-lg-strong":
    class: body-lg-strong
    fontSize: "1rem"
    lineHeight: 1.625
    fontWeight: 600
    letterSpacing: "-0.01rem"
    note: body-lg 의 강조 변형(semibold). 용도 동일, 굵기만 다르다.
  "base.body-md":
    class: body-md
    fontSize: "0.875rem"
    lineHeight: 1.571429
    fontWeight: 400
    letterSpacing: "0rem"
    note: 기본 본문 — 무엇을 쓸지 모르겠으면 이것. List 설명문, Card 본문, Toast·Snackbar 메시지, Table 셀, Text Field 입력값. 기본 regular, 강조는 body-md-strong.
    usedBy: [Search, TextArea, TextField]
  "base.body-md-strong":
    class: body-md-strong
    fontSize: "0.875rem"
    lineHeight: 1.571429
    fontWeight: 600
    letterSpacing: "0rem"
    note: body-md 의 강조 변형(semibold). 용도 동일, 굵기만 다르다.
  "base.body-sm":
    class: body-sm
    fontSize: "0.75rem"
    lineHeight: 1.5
    fontWeight: 400
    letterSpacing: "0rem"
    note: 보조 설명. Tooltip, Data Visual 축 레이블. 기본 regular, 강조는 body-sm-strong.
  "base.body-sm-strong":
    class: body-sm-strong
    fontSize: "0.75rem"
    lineHeight: 1.5
    fontWeight: 600
    letterSpacing: "0rem"
    note: body-sm 의 강조 변형(semibold). 용도 동일, 굵기만 다르다.
  "base.label-xl":
    class: label-xl
    fontSize: "1rem"
    lineHeight: 1.5
    fontWeight: 500
    letterSpacing: "-0.01rem"
    note: UI 라벨(특대) — **16px**. Button(lg), Bottom Sheet CTA. PC 권장. **이전 이름은 `label-lg` 였다** — 라벨 사다리를 5티어로 다시 짜며 한 칸 올라왔다(DECISIONS 0-50). 기본 medium, 강조는 label-xl-strong.
    usedBy: [Button]
  "base.label-xl-strong":
    class: label-xl-strong
    fontSize: "1rem"
    lineHeight: 1.5
    fontWeight: 600
    letterSpacing: "-0.01rem"
    note: label-xl 의 강조 변형(semibold). 용도 동일, 굵기만 다르다. **이전 이름은 `label-lg-strong` 이다**(DECISIONS 0-50).
  "base.label-lg":
    class: label-lg
    fontSize: "0.9375rem"
    lineHeight: 1.466667
    fontWeight: 500
    letterSpacing: "-0.009375rem"
    note: "UI 라벨(대) — **15px**. Button(md). 14 와 16 사이를 메우려고 만든 자리다: md(40px)와 lg(48px) 버튼이 같은 16px 라벨을 써서 md 쪽이 더 커 보였다 — 글자/높이가 40% 대 33%였다. 셋이 14·15·16 으로 갈리면서 비율이 43.8 → 37.5 → 33.3% 로 단조 감소한다(DECISIONS 0-50). 기본 medium. **`-strong` 은 수요가 확인되기 전까지 두지 않는다**(0-25 와 같은 원칙)."
    usedBy: [Button]
  "base.label-md":
    class: label-md
    fontSize: "0.875rem"
    lineHeight: 1.428571
    fontWeight: 500
    letterSpacing: "0rem"
    note: UI 라벨(기본) — 라벨의 기준값. Button(sm)·Text Button, Tab, Dropdown, Search, Text Field 레이블, Pagination. 기본 medium, 강조는 label-md-strong.
    usedBy: [Button, Checkbox, Radio, Search, TextArea, TextField]
  "base.label-md-strong":
    class: label-md-strong
    fontSize: "0.875rem"
    lineHeight: 1.428571
    fontWeight: 600
    letterSpacing: "0rem"
    note: label-md 의 강조 변형(semibold). 용도 동일, 굵기만 다르다.
  "base.label-sm":
    class: label-sm
    fontSize: "0.75rem"
    lineHeight: 1.333333
    fontWeight: 500
    letterSpacing: "0rem"
    note: UI 라벨(소). Bottom Navigation 라벨, Tag, Breadcrumb, Chip, Indicator(Number), 폼의 헬퍼·에러·글자수(Text Field·Text Area·Search). 기본 medium, 강조는 label-sm-strong.
    usedBy: [Checkbox, Radio, Search, TextArea, TextField]
  "base.label-sm-strong":
    class: label-sm-strong
    fontSize: "0.75rem"
    lineHeight: 1.333333
    fontWeight: 600
    letterSpacing: "0rem"
    note: label-sm 의 강조 변형(semibold). 용도 동일, 굵기만 다르다.
  "base.label-xs":
    class: label-xs
    fontSize: "0.6875rem"
    lineHeight: 1.272727
    fontWeight: 500
    letterSpacing: "0rem"
    note: 밀집 UI 크롬 라벨. 차트 축 레이블, 타임스탬프, 배지, 조밀 테이블. **아이콘·수치와 짝지어진 보조 정보에만 쓴다** — 단독 전달 금지. 좁은 화면(<768px)에서 10px 로 내려간다. `-strong` 변형은 수요가 확인되기 전까지 두지 않는다(DECISIONS 0-25).
  "base.link-lg":
    class: link-lg
    fontSize: "1rem"
    lineHeight: 1.625
    fontWeight: 400
    letterSpacing: "-0.01rem"
    note: 본문 내 링크. body-lg 크기·행간에 밑줄. 굵기는 regular 하나.
  "base.link-md":
    class: link-md
    fontSize: "0.875rem"
    lineHeight: 1.571429
    fontWeight: 400
    letterSpacing: "0rem"
    note: 본문 내 링크. body-md 크기·행간에 밑줄. 굵기는 regular 하나.
  "base.link-sm":
    class: link-sm
    fontSize: "0.75rem"
    lineHeight: 1.5
    fontWeight: 400
    letterSpacing: "0rem"
    note: 보조 텍스트 내 링크. body-sm 크기·행간에 밑줄. 굵기는 regular 하나.
  "compact.display-lg":
    class: display-lg (compact)
    fontSize: "2.5rem"
    lineHeight: 1.3
    fontWeight: 700
    letterSpacing: "-0.05rem"
    note: display-lg 의 모바일 오버라이드(뷰포트 <768px). 용도 동일, 크기·행간만 축소된다.
  "compact.display-md":
    class: display-md (compact)
    fontSize: "2rem"
    lineHeight: 1.25
    fontWeight: 700
    letterSpacing: "-0.03rem"
    note: display-md 의 모바일 오버라이드(뷰포트 <768px). 용도 동일, 크기·행간만 축소된다.
  "compact.heading-xl":
    class: heading-xl (compact)
    fontSize: "2rem"
    lineHeight: 1.25
    fontWeight: 700
    letterSpacing: "-0.03rem"
    note: heading-xl 의 모바일 오버라이드(뷰포트 <768px). 용도 동일, 크기·행간만 축소된다.
  "compact.heading-lg":
    class: heading-lg (compact)
    fontSize: "1.75rem"
    lineHeight: 1.285714
    fontWeight: 700
    letterSpacing: "-0.02625rem"
    note: heading-lg 의 모바일 오버라이드(뷰포트 <768px). 용도 동일, 크기·행간만 축소된다.
  "compact.heading-md":
    class: heading-md (compact)
    fontSize: "1.5rem"
    lineHeight: 1.333333
    fontWeight: 700
    letterSpacing: "-0.0225rem"
    note: heading-md 의 모바일 오버라이드(뷰포트 <768px). 용도 동일, 크기·행간만 축소된다.
  "compact.heading-sm":
    class: heading-sm (compact)
    fontSize: "1.25rem"
    lineHeight: 1.4
    fontWeight: 700
    letterSpacing: "-0.0125rem"
    note: heading-sm 의 모바일 오버라이드(뷰포트 <768px). 용도 동일, 크기·행간만 축소된다.
  "compact.label-xs":
    class: label-xs (compact)
    fontSize: "0.625rem"
    lineHeight: 1.4
    fontWeight: 500
    letterSpacing: "0rem"
    note: label-xs 의 모바일 오버라이드(뷰포트 <768px). **이 그룹에서 유일하게 축소 이유가 다르다** — 제목 6종은 넘침 방지, 이것은 좁은 화면의 밀도 확보다. 행간은 base 와 같은 14px 라 전환 시 높이가 흔들리지 않는다.
color:
  label-strong:
    light: "#000000"
    dark: "#FFFFFF"
    note: 가장 강한 글자 — 제목·핵심 수치처럼 시선을 먼저 받아야 하는 자리. 4개 면 최소 대비 **라이트 19.61 · 다크 16.06** 으로 `label` 계단에서 가장 높다. **지금 코드 소비자가 없다** — 컴포넌트가 아직 넷뿐이라 전부 `label.normal` 로 충분했다.
  label-normal:
    light: "#161617"
    dark: "#F7F7F8"
    note: 기본 글자 — 무엇을 쓸지 모르겠으면 이것. 본문·라벨·입력값에 쓴다. 4개 면 최소 대비 **라이트 16.89 · 다크 15.00**. Button · Text Field · Text Area · Search 가 쓴다.
    usedBy: [Button, Checkbox, Field, Radio, Search, TextArea, TextField]
  label-neutral:
    light: rgba(46, 47, 50, 0.88)
    dark: rgba(193, 195, 199, 0.88)
    note: 한 단계 낮춘 글자 — `normal` 옆에 놓이는 부차적 정보. 4개 면 최소 대비 **라이트 8.68 · 다크 7.39** 로 4.5:1 에 여유가 크다. **지금 코드 소비자가 없다** — 0-32 에서 `inactive` 라벨로 썼다가 0-44 에서 그 상태 자체를 걷어냈다.
  label-alternative:
    light: rgba(55, 55, 58, 0.7)
    dark: rgba(173, 176, 181, 0.74)
    note: "보조 글자 — placeholder · 도움말 · 글자 수 카운터. **4.5:1 을 겨우 넘는다: 4개 면 최소 라이트 4.55 · 다크 4.71.** 라이트 여유가 0.05 뿐이라 면 색을 건드리면 이 토큰부터 다시 잰다(`checks/surfaces.mjs` 가 매 빌드 검사한다). Text Field · Text Area · Search 가 쓴다."
    usedBy: [Checkbox, Field, Radio, Search, TextArea, TextField]
  label-assistive:
    light: rgba(55, 55, 58, 0.28)
    dark: rgba(173, 176, 181, 0.28)
    note: 장식·보조 표시 전용 — 4개 면 최소 대비 **라이트 1.68 · 다크 1.73** 으로 **4.5:1 을 만족하지 않는다.** KWCAG 5.4.3 의 예외(장식 목적)로 검사에서 뺀다. **정보를 이 색으로만 전달하지 않는다.** 지금 코드 소비자가 없다.
  label-disable:
    light: rgba(55, 55, 58, 0.16)
    dark: rgba(152, 155, 161, 0.16)
    note: 비활성 컨트롤의 글자 — 4개 면 최소 대비 **라이트 1.33 · 다크 1.26** 으로 4.5:1 을 만족하지 않는다. 네이티브 `disabled` 는 포커스도 활성화도 안 되는 진짜 inactive 라 **WCAG 1.4.3 의 예외**가 적용된다(0-43). 면은 `interaction.disable` 이다. Button · Text Field · Text Area · Search 가 쓴다.
    usedBy: [Button, Checkbox, Radio, Search, TextArea, TextField]
  bg-normal:
    light: "#FFFFFF"
    dark: "#1A1B1C"
    note: 페이지 바탕 — 가장 아래 면. 라이트 `#FFFFFF` · 다크 `#1A1B1C`. **대비 검사의 기준면 넷 중 첫째**이고, 텍스트 색은 이 면을 포함한 네 면 **전부**에서 4.5:1 을 만족해야 한다 — `bg.normal` 만 보면 카드·모달 위 텍스트가 사각지대가 된다. Text Field · Text Area · Search 가 쓴다.
    usedBy: [Search, TextArea, TextField]
  bg-normalAlternative:
    light: "#F7F7F8"
    dark: "#0E0E0F"
    note: "`bg.normal` 옆에 놓는 한 단계 다른 면 — 구역을 나눌 때. `bg.normal` 과 대비는 **라이트 1.07 · 다크 1.12** 다. **면끼리 3:1 을 요구하지 않는다** — WCAG 1.4.11 은 컴포넌트를 식별하는 시각 정보가 대상이고 면 자체는 아니며, 면끼리 3:1 은 물리적으로도 불가능하다(0-24). 경계가 필요하면 보더를 둔다(KWCAG 5.4.4). 대비 검사의 기준면 넷 중 하나. 지금 코드 소비자가 없다."
  bg-elevated:
    light: "#FFFFFF"
    dark: "#212124"
    note: 떠 있는 면 — 카드·모달·팝오버의 바탕. **라이트는 `bg.normal` 과 값이 같아 대비 1.00** 이고 높이는 그림자가 표현한다. 다크는 `#212124` 로 한 단계 밝다(대비 1.07) — 어두운 테마에서는 위로 올라올수록 밝아진다. 대비 검사의 기준면 넷 중 하나. 지금 코드 소비자가 없다.
  bg-elevatedAlternative:
    light: "#F7F7F8"
    dark: "#131314"
    note: "`bg.elevated` 옆의 한 단계 다른 면 — 카드 안에서 구역을 나눌 때. `bg.normal` 과 대비 **라이트 1.07 · 다크 1.08**. 대비 검사의 기준면 넷 중 하나. 지금 코드 소비자가 없다."
  bg-transparent:
    light: rgba(255, 255, 255, 0.08)
    dark: rgba(33, 33, 36, 0.6)
    note: 면 위에 얹는 반투명 층 — 라이트는 흰색 8%, 다크는 `#212124` 60%. **두 테마의 알파 차이가 크다**(8% 대 60%). 다크는 `transparentAlternative` 와 값이 완전히 같고, 라이트만 8% / 28% 로 갈린다. 지금 코드 소비자가 없다.
  bg-transparentAlternative:
    light: rgba(255, 255, 255, 0.28)
    dark: rgba(33, 33, 36, 0.6)
    note: "`bg.transparent` 보다 진한 반투명 층 — 라이트는 흰색 28%, 다크는 `#212124` 60%. **다크에서는 `bg.transparent` 와 값이 완전히 같아 두 단계가 구별되지 않는다** — 라이트에서만 갈린다. 지금 코드 소비자가 없다."
  line-normal:
    light: rgba(113, 115, 121, 0.22)
    dark: rgba(113, 115, 121, 0.32)
    note: 기본 구분선. 4개 면 최소 대비 라이트 1.31 · 다크 1.43 — **컨트롤 경계로 쓸 수 없다**(WCAG 1.4.11 의 3:1 미달). 이웃 콘텐츠를 나누는 자리이고, 그 근거인 KWCAG 5.4.4 에는 수치 기준이 없다.
  line-strong:
    light: rgba(113, 115, 121, 0.8)
    dark: rgba(193, 195, 199, 0.52)
    note: "**컨트롤 경계선.** 입력·체크박스·라디오처럼 테두리가 곧 컴포넌트의 식별 정보인 자리에 쓴다 — `line.*` 일곱 중 WCAG 1.4.11 의 3:1 을 만족하는 **유일한 단계**다(4개 면 최소 라이트 3.09 · 다크 3.49 — `checks/surfaces.mjs` 가 매 빌드 검사한다). 구분선에는 `normal` 이하를 쓴다(DECISIONS 0-38)."
    usedBy: [Button, Checkbox, Radio, Search, TextArea, TextField]
  line-neutral:
    light: rgba(113, 115, 121, 0.16)
    dark: rgba(113, 115, 121, 0.28)
    note: 약한 구분선. 4개 면 최소 대비 라이트 1.21 · 다크 1.35 — 컨트롤 경계로 쓸 수 없다.
  line-alternative:
    light: rgba(113, 115, 121, 0.08)
    dark: rgba(113, 115, 121, 0.22)
    note: 가장 약한 구분선. 4개 면 최소 대비 라이트 1.10 · 다크 1.25 — 컨트롤 경계로 쓸 수 없다.
    usedBy: [Button, Checkbox, Radio]
  line-solidNormal:
    light: "#E0E1E3"
    dark: "#37373A"
    note: 알파 없는 불투명 구분선. 겹쳐 그려도 색이 짙어지지 않고 아래 면색이 비치지 않는다. 4개 면 최소 대비 라이트 1.22 · 다크 1.35 — 컨트롤 경계로 쓸 수 없다.
  line-solidNeutral:
    light: "#E9EAEB"
    dark: "#333337"
    note: 알파 없는 불투명 구분선 중 약한 단계. 4개 면 최소 대비 라이트 1.13 · 다크 1.28 — 컨트롤 경계로 쓸 수 없다.
  line-solidAlternative:
    light: "#F4F4F4"
    dark: "#2E2F32"
    note: 알파 없는 불투명 구분선 중 가장 약한 단계. 4개 면 최소 대비 라이트 1.03 · 다크 1.20 — 컨트롤 경계로 쓸 수 없다.
  fill-normal:
    light: rgba(113, 115, 121, 0.08)
    dark: rgba(113, 115, 121, 0.22)
    note: 컨트롤·구역의 기본 채움 — `gray.550` 8%(라이트) / 22%(다크). 합성하면 라이트 `#F4F4F4` · 다크 `#2D2E30` 이고 `bg.normal` 과 대비 **1.10 / 1.27**. **라이트에서 `interaction.disable` 과 값이 완전히 같다(`#F4F4F4`)** — 그래서 Button 의 secondary 는 이걸 쓰지 않고 `fill.strong` 을 쓴다. 활성과 비활성의 면이 구별되지 않았다(0-41). 지금 코드 소비자가 없다.
  fill-alternative:
    light: rgba(113, 115, 121, 0.05)
    dark: rgba(113, 115, 121, 0.12)
    note: 가장 옅은 채움 — `gray.550` 5%(라이트) / 12%(다크). 합성하면 라이트 `#F8F8F8` · 다크 `#242627` 이고 `bg.normal` 과 대비 **1.06 / 1.13**. Text Field · Text Area 가 쓴다.
    usedBy: [TextArea, TextField]
  fill-strong:
    light: rgba(113, 115, 121, 0.16)
    dark: rgba(113, 115, 121, 0.28)
    note: 가장 진한 채움 — `gray.550` 16%(라이트) / 28%(다크). 합성하면 라이트 `#E8E9EA` · 다크 `#323436` 이고 `bg.normal` 과 대비 **1.22 / 1.38**. **Button 의 secondary 면이다** — `fill.normal` 이 `interaction.disable` 과 값이 같아 한 단계 올렸다(0-41). 이 대비로는 무늬 있는 배경 위에서 면이 얼룩처럼 보이므로 그런 자리에는 outline 을 쓴다(COMPONENTS.md 8-1 용도).
    usedBy: [Button]
  interaction-inactive:
    light: "#989BA1"
    dark: "#595B61"
    note: 비활성 컨트롤의 전경색 — 아이콘·테두리처럼 "지금 쓸 수 없음"을 색으로 알리는 자리. **지금 소비자가 없다** — 0-43 에서 `inactive` 버튼의 면으로 썼다가 0-44 에서 그 상태 자체를 걷어냈다. 값은 남겨 둔다. 글자에는 `label.disable` 을 쓴다. 비활성 요소라 대비 검사에서 제외된다(KWCAG 5.4.3 예외).
  interaction-disable:
    light: "#F4F4F4"
    dark: "#2E2F32"
    note: 비활성 컨트롤의 면색 — 눌리지 않는 버튼·입력 필드의 배경. 위에 올라가는 글자는 `label.disable` 이며, 둘 다 대비 검사 대상이 아니다.
    usedBy: [Button, Checkbox, Radio, Search, TextArea, TextField]
  interaction-focus:
    light: "#161617"
    dark: "#F4F4F4"
    note: 키보드 포커스 링 색. KWCAG 6.1.2(초점은 시각적으로 구별) · WCAG 2.4.7 대응. **무채색이다** — 우리 팔레트는 명도로 정규화돼 있어 색조를 바꿔도 대비가 같고, 그래서 색조 선택은 `어느 색조가 비어 있나` 라는 배정 문제가 된다. 무채색은 그 문제를 아예 피한다. **primary 가 바뀌어도 링은 그대로 쓸 수 있다**(0-46). 4개 면 최소 대비 라이트 16.89 · 다크 14.60 으로 계열 중 가장 또렷하다. **대가는 `focusRing.offset` 이 필수가 된다는 것** — primary 버튼과 라이트 1.35 · 다크 1.03, 다크 negative 와 1.96 이라 링이 컴포넌트 면 위에 겹치면 사라진다.
    usedBy: [Button, Checkbox, Radio, Search, TextArea, TextField]
  interaction-overlay-darken-hovered:
    light: rgba(0, 0, 0, 0.05)
    dark: rgba(0, 0, 0, 0.05)
    note: 밝은 면 위 hover 상태 오버레이. 면을 어둡게 한다. 강도는 `interaction.opacity.normal.hovered` 를 따른다.
    usedBy: [Button, Checkbox, Radio, Search]
  interaction-overlay-darken-focused:
    light: rgba(0, 0, 0, 0.08)
    dark: rgba(0, 0, 0, 0.08)
    note: 밝은 면 위 focus 상태 오버레이. 면을 어둡게 한다. 강도는 `interaction.opacity.normal.focused` 를 따른다.
  interaction-overlay-darken-pressed:
    light: rgba(0, 0, 0, 0.12)
    dark: rgba(0, 0, 0, 0.12)
    note: 밝은 면 위 press 상태 오버레이. 면을 어둡게 한다. 강도는 `interaction.opacity.normal.pressed` 를 따른다.
    usedBy: [Button]
  interaction-overlay-lighten-hovered:
    light: rgba(255, 255, 255, 0.05)
    dark: rgba(255, 255, 255, 0.05)
    note: 어두운 면 위 hover 상태 오버레이. 면을 밝게 한다. 강도는 `interaction.opacity.normal.hovered` 를 따른다.
    usedBy: [Button, Checkbox, Radio, Search]
  interaction-overlay-lighten-focused:
    light: rgba(255, 255, 255, 0.08)
    dark: rgba(255, 255, 255, 0.08)
    note: 어두운 면 위 focus 상태 오버레이. 면을 밝게 한다. 강도는 `interaction.opacity.normal.focused` 를 따른다.
  interaction-overlay-lighten-pressed:
    light: rgba(255, 255, 255, 0.12)
    dark: rgba(255, 255, 255, 0.12)
    note: 어두운 면 위 press 상태 오버레이. 면을 밝게 한다. 강도는 `interaction.opacity.normal.pressed` 를 따른다.
    usedBy: [Button]
  primary-normal:
    light: "#2E2F32"
    dark: "#F7F7F8"
    note: 브랜드 기본색 — **무채색이다.** 라이트 `#2E2F32` · 다크 `#F7F7F8` 이고 `bg.normal` 과 대비 **13.39 / 16.11** 로 우리 면색 중 배경과 가장 세게 갈린다. Button 의 primary 면이며, 그래서 **화면당 하나**로 제한한다(COMPONENTS.md 8-1 용도). 위에 올라가는 글자는 `label.normal` 이 아니라 `inverse.label` 이다.
    usedBy: [Button, Checkbox, Radio]
  primary-strong:
    light: "#212124"
    dark: "#E9EAEB"
    note: "`primary.normal` 보다 한 단계 어둡다 — 라이트 `#212124`(대비 16.06) · 다크 `#E9EAEB`(14.32). **두 테마 모두 어두워지는 방향**이라 라이트는 대비가 오르고 다크는 내린다. **지금 코드 소비자가 없다** — Button 은 hover·press 를 면색 교체가 아니라 오버레이로 처리한다(0-14)."
  primary-heavy:
    light: "#161617"
    dark: "#E0E1E3"
    note: "`primary` 계단에서 가장 어둡다 — 라이트 `#161617`(대비 18.08) · 다크 `#E0E1E3`(13.18). **지금 코드 소비자가 없다.**"
  status-positive:
    light: "#137F2C"
    dark: "#25CB4B"
    note: 성공·완료. 저장됨·연결됨 같은 긍정 피드백.
  status-cautionary:
    light: "#A25D11"
    dark: "#FC9936"
    note: 주의. 되돌릴 수 있지만 확인이 필요한 상태.
  status-negative:
    light: "#D5242A"
    dark: "#FC948B"
    note: 오류·실패·파괴적 동작. 삭제 확인처럼 되돌릴 수 없는 곳.
    usedBy: [Button, Checkbox, Field, Radio, Search, TextArea, TextField]
  accent-bg-redOrange:
    light: "#D45215"
    dark: "#D45215"
    note: 장식용 주황빨강 면. 글자를 올리지 않는다.
  accent-bg-lime:
    light: "#6C8414"
    dark: "#6C8414"
    note: 장식용 라임 면. 글자를 올리지 않는다.
  accent-bg-cyan:
    light: "#17889D"
    dark: "#17889D"
    note: 장식용 청록 면. 글자를 올리지 않는다.
  accent-bg-lightBlue:
    light: "#1782BD"
    dark: "#1782BD"
    note: 장식용 하늘 면. 글자를 올리지 않는다.
  accent-bg-violet:
    light: "#7864F9"
    dark: "#7864F9"
    note: 장식용 보라 면. 글자를 올리지 않는다.
  accent-bg-purple:
    light: "#B04DDF"
    dark: "#B04DDF"
    note: 장식용 자주 면. 글자를 올리지 않는다.
  accent-bg-pink:
    light: "#CE3FB7"
    dark: "#CE3FB7"
    note: 장식용 분홍 면. 글자를 올리지 않는다.
  accent-fg-red:
    light: "#D5242A"
    dark: "#FB5751"
    note: 빨강 강조 전경색 — 라이트 `red.600`(#D5242A) · 다크 `red.400`(#FB5751), 4개 면 최소 대비 **4.77 / 5.03**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-redOrange:
    light: "#BD4811"
    dark: "#F5601A"
    note: 다홍 강조 전경색 — 라이트 `redOrange.600`(#BD4811) · 다크 `redOrange.400`(#F5601A), 4개 면 최소 대비 **4.79 / 5.02**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-orange:
    light: "#A25D11"
    dark: "#D27A1A"
    note: 주황 강조 전경색 — 라이트 `orange.600`(#A25D11) · 다크 `orange.400`(#D27A1A), 4개 면 최소 대비 **4.77 / 5.00**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-lime:
    light: "#617611"
    dark: "#7F9A19"
    note: 라임 강조 전경색 — 라이트 `lime.600`(#617611) · 다크 `lime.400`(#7F9A19), 4개 면 최소 대비 **4.78 / 5.00**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-green:
    light: "#137F2C"
    dark: "#1CA53B"
    note: 초록 강조 전경색 — 라이트 `green.600`(#137F2C) · 다크 `green.400`(#1CA53B), 4개 면 최소 대비 **4.78 / 4.97**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-cyan:
    light: "#14798C"
    dark: "#1D9EB6"
    note: 청록 강조 전경색 — 라이트 `cyan.600`(#14798C) · 다크 `cyan.400`(#1D9EB6), 4개 면 최소 대비 **4.73 / 5.06**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-lightBlue:
    light: "#1374A9"
    dark: "#1C98DB"
    note: 하늘 강조 전경색 — 라이트 `lightBlue.600`(#1374A9) · 다크 `lightBlue.400`(#1C98DB), 4개 면 최소 대비 **4.79 / 5.02**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-blue:
    light: "#1266E8"
    dark: "#4D8EFA"
    note: 파랑 강조 전경색 — 라이트 `blue.600`(#1266E8) · 다크 `blue.400`(#4D8EFA), 4개 면 최소 대비 **4.79 / 5.02**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-violet:
    light: "#6B56E7"
    dark: "#8A81FA"
    note: 보라 강조 전경색 — 라이트 `violet.600`(#6B56E7) · 다크 `violet.400`(#8A81FA), 4개 면 최소 대비 **4.77 / 5.05**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-purple:
    light: "#A042CB"
    dark: "#C467F1"
    note: 자주 강조 전경색 — 라이트 `purple.600`(#A042CB) · 다크 `purple.400`(#C467F1), 4개 면 최소 대비 **4.74 / 5.01**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  accent-fg-pink:
    light: "#BB33A6"
    dark: "#E25ACB"
    note: 분홍 강조 전경색 — 라이트 `pink.600`(#BB33A6) · 다크 `pink.400`(#E25ACB), 4개 면 최소 대비 **4.74 / 5.02**. **11계열이 상대휘도로 정규화돼 있어 번호가 같으면 대비도 사실상 같다**(라이트 4.73~4.79 · 다크 4.97~5.06 — DECISIONS 1-1). 그래서 계열 선택은 대비 문제가 아니라 **의미 배정** 문제다. 지금 코드 소비자가 없다.
  inverse-primary:
    light: "#F7F7F8"
    dark: "#2E2F32"
    note: 반전 면 위의 브랜드색 — 라이트 `#F7F7F8` · 다크 `#2E2F32` 로 `primary.normal` 을 정확히 뒤집은 값이다. **지금 코드 소비자가 없다.**
  inverse-background:
    light: "#1A1B1C"
    dark: "#FFFFFF"
    note: 반전된 바탕 — 라이트에서 어두운 면, 다크에서 흰 면. `bg.normal` 과 대비가 **두 테마 모두 17.25** 다. **지금 코드 소비자가 없다** — 페이지와 반대 명도의 면을 쓰는 컴포넌트(Notification 은 P1-7)가 아직 없다.
  inverse-label:
    light: "#F7F7F8"
    dark: "#161617"
    note: 반전 면 위의 글자 — 라이트에서는 어두운 면 위, 다크에서는 밝은 면 위에 얹힌다. **Button 의 primary · negative 라벨이 이것**이고 실측 대비 **라이트 12.50 · 다크 16.89** 다. `label.normal` 과 명도 방향이 반대라 같은 면에 섞어 쓰지 않는다.
    usedBy: [Button, Checkbox, Radio]
  static-white:
    light: "#FFFFFF"
    dark: "#FFFFFF"
    note: 테마와 무관하게 항상 흰색 — 라이트·다크 둘 다 `gray.0`. **바탕이 테마를 따르지 않는 자리**(사진·영상 위 등)에만 쓴다. 테마를 따라야 하는 곳에는 `label.*` · `bg.*` 를 쓴다 — 여기에 쓰면 한쪽 테마에서 대비가 무너진다. 지금 코드 소비자가 없다.
  static-black:
    light: "#000000"
    dark: "#000000"
    note: "테마와 무관하게 항상 검정 — 라이트·다크 둘 다 `gray.1000`. `static.white` 와 같은 규칙이다: **바탕이 테마를 따르지 않는 자리에만** 쓴다. 지금 코드 소비자가 없다."
  elevation-dim:
    light: rgba(22, 24, 24, 0.52)
    dark: rgba(22, 22, 23, 0.74)
    note: 콘텐츠를 가리는 어두운 막. 모달·바텀시트 뒤에 깔린다. Elevation 파운데이션에 속하지만 테마별 값이 달라 semantic 색으로 둔다.
opacity:
  4:
    value: 0.04
    note: 사다리의 최소값. 연한 면 hover 오버레이 · 라이트 `shadow.xs` 의 번짐 층.
  5:
    value: 0.05
    note: 기본 hover 오버레이 · 라이트 `fill.alternative` · 라이트 `shadow.sm` 번짐 층.
  6:
    value: 0.06
    note: 연한 면 focus 오버레이 · 라이트 `shadow.md` 번짐 층.
  7:
    value: 0.07
    note: 라이트 `shadow.lg` 번짐 층 전용. 그림자에서만 쓴다.
  8:
    value: 0.08
    note: "**가장 많이 쓰이는 단계(7곳).** 기본 focus · 진한 면 hover 오버레이 · 라이트 `bg.transparent` · `line.alternative` · `fill.normal` · `shadow.xs`/`xl`."
  9:
    value: 0.09
    note: 연한 면 press 오버레이 전용.
  12:
    value: 0.12
    note: 기본 press · 진한 면 focus 오버레이 · 라이트 `shadow.sm` · 다크 `fill.alternative`.
  16:
    value: 0.16
    note: 비활성 글자(`label.disable`, 두 테마) · 라이트 `line.neutral` · `fill.strong` · `shadow.md`. 5곳.
  18:
    value: 0.18
    note: 진한 면 press 오버레이 전용. **상호작용 사다리의 최대값**이다.
  20:
    value: 0.2
    note: 라이트 `shadow.lg` 전용.
  22:
    value: 0.22
    note: 라이트 `line.normal` · 다크 `line.alternative` · 다크 `fill.normal`.
  24:
    value: 0.24
    note: 라이트 `shadow.xl` · 다크 `shadow.xs`. 같은 값이 테마에 따라 다른 단계의 그림자에 쓰인다.
  28:
    value: 0.28
    note: 보조 글자(`label.assistive`, 두 테마) · 라이트 `bg.transparentAlternative` · 다크 `line.neutral` · `fill.strong`.
  30:
    value: 0.3
    note: 다크 `shadow.sm` 전용.
  32:
    value: 0.32
    note: 다크 `line.normal` 전용.
  36:
    value: 0.36
    note: 다크 `shadow.md` 전용.
  42:
    value: 0.42
    note: 다크 `shadow.lg` 전용.
  48:
    value: 0.48
    note: 다크 `shadow.xs` 전용.
  52:
    value: 0.52
    note: 다크 `line.strong` · 라이트 모달 백드롭(`elevation.dim`) · 다크 `shadow.xl`. 3곳.
  60:
    value: 0.6
    note: 다크 `bg.transparent` 와 `bg.transparentAlternative` 전용. 두 곳 다 같은 면의 반투명 변형이다.
  70:
    value: 0.7
    note: 라이트 `label.alternative` · 다크 `shadow.sm`.
  74:
    value: 0.74
    note: 다크 `label.alternative` · 다크 모달 백드롭(`elevation.dim`).
  80:
    value: 0.8
    note: 라이트 `line.strong` · 다크 `shadow.md`. 2곳.
  88:
    value: 0.88
    note: 사다리의 최대값. `label.neutral`(두 테마) · 다크 `shadow.lg`/`xl`. 4곳.
fontFamily:
  base:
    value: Pretendard JP Variable, Pretendard JP, sans-serif
    note: 유일한 패밀리. 폴백 순서는 가변 → 정적 → 시스템이다 — 가변 글꼴이 있으면 굵기 4단계를 한 파일로 덮고, 없으면 정적판, 그마저 없으면 시스템 산세리프로 내려간다. 타이포 35개 전부가 참조한다.
fontWeight:
  bold:
    value: 700
    note: 가장 굵다. `display` 2 · `heading` 4 · `title` 계열의 `-strong` 3, 그리고 compact 6 — 총 15곳. 제목 전용이다.
  semibold:
    value: 600
    note: "`title` 3개의 기본 굵기이자 `body`·`label` 계열 `-strong` 6개의 강조 굵기 — 총 9곳."
  medium:
    value: 500
    note: "`label` 3개의 기본 굵기 전용. 본문보다 살짝 무겁게 해 조작 요소의 글자를 구분한다."
  regular:
    value: 400
    note: 본문 기본. `body` 3 · `link` 3 — 총 6곳. 긴 글에 쓰는 유일한 굵기다.
fontSize:
  10:
    value: "0.625rem"
    note: 가장 작다. compact `label-xs` 전용 — 1곳. **아이콘·수치와 짝지어진 보조 라벨에만 쓴다**(탭바 라벨, 차트 축, 배지). Apple HIG 권장 최소 11pt·Material 12sp 를 밑돌므로 텍스트가 유일한 전달 수단인 곳에는 쓰지 않는다(DECISIONS 0-25).
  11:
    value: "0.6875rem"
    note: base `label-xs` 전용 — 1곳. 밀집 UI 크롬의 기본 크기이며 Apple HIG 권장 최소(11pt)와 같다. 좁은 화면에서는 compact 가 10 으로 내린다.
  12:
    value: "0.75rem"
    note: "`body-sm` · `label-sm` · `link-sm` — 5곳. 본문으로 쓸 수 있는 최소 크기다. 그 아래 10·11 은 `label-xs` 전용이며 본문에 쓰지 않는다."
  14:
    value: "0.875rem"
    note: "`body-md` · `label-md` · `link-md` — 5곳. 목록·표처럼 밀도가 필요한 본문."
    usedBy: [Checkbox, Radio]
  15:
    value: "0.9375rem"
    note: "`label-lg` — 1곳. 14 와 16 사이를 메우려고 넣었다. 버튼 md(40px)가 lg(48px)와 같은 16px 라벨을 써서 md 쪽이 더 커 보였다 — 글자/높이가 40% 대 33%였다. 라벨 사다리를 5티어로 다시 짜며 생긴 자리다(DECISIONS 0-50)."
  16:
    value: "1rem"
    note: "**가장 많이 쓰인다(7곳).** `title-sm` · `body-lg` · `label-xl` · `link-lg`. 기본 본문 크기이자 작은 제목 크기다."
  18:
    value: "1.125rem"
    note: "`title-md` 전용(2곳, 기본/강조). 16과 20 사이를 메운다."
  20:
    value: "1.25rem"
    note: base `title-lg` 와 **compact `heading-sm`** — 3곳. 여기서부터 compact 와 겹치기 시작한다.
  24:
    value: "1.5rem"
    note: base `heading-sm` 과 compact `heading-md` — 2곳.
  28:
    value: "1.75rem"
    note: base `heading-md` 와 compact `heading-lg` — 2곳.
  32:
    value: "2rem"
    note: base `heading-lg` 와 compact `display-md`·`heading-xl` — 3곳. compact 가 가장 많이 모이는 크기다.
  36:
    value: "2.25rem"
    note: base `heading-xl` 전용. compact 에서는 32로 내려간다.
  40:
    value: "2.5rem"
    note: base `display-md` 와 compact `display-lg` — 2곳.
  60:
    value: "3.75rem"
    note: 가장 크다. base `display-lg` 전용. compact 에서는 40으로 내려간다.
lineHeight:
  10-14:
    value: 1.4
    note: "10px 글자에 14px 행간. 1개 토큰이 쓴다. **`11-14` 와 라인박스가 같은 14px 다** — compact 전환에서 탭바 높이가 흔들리지 않게 한 것이다."
  11-14:
    value: 1.272727
    note: "11px 글자에 14px 행간. 1개 토큰이 쓴다. `10-14` 와 짝이며 라인박스가 같은 14px 다."
  12-16:
    value: 1.333333
    note: "12px 글자에 16px 행간. 2개 토큰이 쓴다."
  12-18:
    value: 1.5
    note: "12px 글자에 18px 행간. 3개 토큰이 쓴다."
  14-20:
    value: 1.428571
    note: "14px 글자에 20px 행간. 2개 토큰이 쓴다."
    usedBy: [Checkbox, Field, Radio]
  14-22:
    value: 1.571429
    note: "14px 글자에 22px 행간. 3개 토큰이 쓴다."
  15-22:
    value: 1.466667
    note: "15px 글자에 22px 행간. 1개 토큰이 쓴다."
  16-24:
    value: 1.5
    note: "16px 글자에 24px 행간. 4개 토큰이 쓴다."
  16-26:
    value: 1.625
    note: "16px 글자에 26px 행간. 3개 토큰이 쓴다."
  18-26:
    value: 1.444444
    note: "18px 글자에 26px 행간. 2개 토큰이 쓴다."
  20-28:
    value: 1.4
    note: "20px 글자에 28px 행간. 3개 토큰이 쓴다."
  24-32:
    value: 1.333333
    note: "24px 글자에 32px 행간. 2개 토큰이 쓴다."
  28-36:
    value: 1.285714
    note: "28px 글자에 36px 행간. 2개 토큰이 쓴다."
  32-40:
    value: 1.25
    note: "32px 글자에 40px 행간. 3개 토큰이 쓴다."
  36-44:
    value: 1.222222
    note: "36px 글자에 44px 행간. 1개 토큰이 쓴다."
  40-52:
    value: 1.3
    note: "40px 글자에 52px 행간. 2개 토큰이 쓴다."
  60-72:
    value: 1.2
    note: "60px 글자에 72px 행간. 1개 토큰이 쓴다."
letterSpacing:
  10:
    value: "0rem"
    note: "10px 전용 — none 밴드(0em) 파생. 1개 토큰이 쓴다. 작은 글자는 자간을 넓히는 것이 정석이나 밴드에 양수가 없어 0 이다(DECISIONS 0-25 · 한계)."
  11:
    value: "0rem"
    note: "11px 전용 — none 밴드(0em) 파생. 1개 토큰이 쓴다. `10` 과 같은 한계를 공유한다."
  12:
    value: "0rem"
    note: "12px 전용 — none 밴드(0em) 파생. 5개 토큰이 쓴다."
  14:
    value: "0rem"
    note: "14px 전용 — none 밴드(0em) 파생. 5개 토큰이 쓴다."
  15:
    value: "-0.009375rem"
    note: "15px 전용 — title 밴드(-0.01em) 파생. 1개 토큰이 쓴다. **밴드 범위를 15~20px 로 넓힌 자리다** — 2-2 는 `title` 을 16~20px 로 적어 15 를 덮지 않았고, `none` 의 천장(14px 이하)을 올리는 대신 빈칸을 옆 밴드로 메웠다(DECISIONS 0-50)."
  16:
    value: "-0.01rem"
    note: "16px 전용 — title 밴드(-0.01em) 파생. 7개 토큰이 쓴다."
  18:
    value: "-0.01125rem"
    note: "18px 전용 — title 밴드(-0.01em) 파생. 2개 토큰이 쓴다."
  20:
    value: "-0.0125rem"
    note: "20px 전용 — title 밴드(-0.01em) 파생. 3개 토큰이 쓴다."
  24:
    value: "-0.0225rem"
    note: "24px 전용 — heading 밴드(-0.015em) 파생. 2개 토큰이 쓴다."
  28:
    value: "-0.02625rem"
    note: "28px 전용 — heading 밴드(-0.015em) 파생. 2개 토큰이 쓴다."
  32:
    value: "-0.03rem"
    note: "32px 전용 — heading 밴드(-0.015em) 파생. 3개 토큰이 쓴다."
  36:
    value: "-0.03375rem"
    note: "36px 전용 — heading 밴드(-0.015em) 파생. 1개 토큰이 쓴다."
  40:
    value: "-0.05rem"
    note: "40px 전용 — display 밴드(-0.02em) 파생. 2개 토큰이 쓴다."
  60:
    value: "-0.075rem"
    note: "60px 전용 — display 밴드(-0.02em) 파생. 1개 토큰이 쓴다."
spacing:
  1: "1px"
  2: "2px"
  4:
    value: "4px"
    usedBy: [Field, Search]
  6:
    value: "6px"
    usedBy: [Checkbox, Field, Radio]
  8:
    value: "8px"
    usedBy: [Field, Radio, Search]
  10:
    value: "10px"
    usedBy: [TextArea]
  12: "12px"
  14: "14px"
  16:
    value: "16px"
    usedBy: [Button]
  20: "20px"
  24: "24px"
  32: "32px"
  40: "40px"
  48: "48px"
  56: "56px"
iconSize:
  16:
    value: "16px"
    note: "16px. 컨트롤 sm(32px) 안 — `control.iconSize.sm` 이 참조한다."
  20:
    value: "20px"
    note: "20px. 컨트롤 md(40px) 안 — `control.iconSize.md` 가 참조한다. 기본."
  24:
    value: "24px"
    note: "24px. 컨트롤 lg(48px) 안 — `control.iconSize.lg` 가 참조한다. lucide 가 그려진 원래 크기라 획이 정확히 2px 로 떨어진다."
  28:
    value: "28px"
    note: "28px. 컨트롤 밖 단독 아이콘용. 아직 컴포넌트 소비자가 없다 — 크기 목록을 닫아두려고 함께 정의했다."
  32:
    value: "32px"
    note: "32px. 컨트롤 밖 단독 아이콘용. 아직 컴포넌트 소비자가 없다 — 크기 목록을 닫아두려고 함께 정의했다."
radius:
  0:
    value: "0px"
    note: 모서리 없음. 각진 요소.
  4:
    value: "4px"
    note: 작은 버튼·태그·체크박스 같은 매우 작은 요소.
    usedBy: [Checkbox]
  6:
    value: "6px"
    note: 툴팁 같이 작은 요소.
  8:
    value: "8px"
    note: 기본값 — 버튼·인풋·드롭다운.
  12:
    value: "12px"
    note: 카드·팝업 등 컨테이너 요소.
  16:
    value: "16px"
    note: 바텀시트 같이 화면에서 크게 느껴지는 요소.
  20:
    value: "20px"
    note: 카드 컨테이너 같이 12 보다 더 큰 컨테이너 요소.
  circle:
    value: "50%"
    note: 칩·인디케이터 같이 반원 형태가 필요할 때. 정사각형에 적용하면 원이 된다. `%` 는 DTCG dimension 이 담지 못해 CSS 문자열로 두고 예외 표시했다.
    usedBy: [Button, Radio, Search]
  full:
    value: "9999px"
    note: 완전히 둥근 모서리(알약 형태). 높이와 무관하게 양 끝이 반원이 된다.
ratio:
  1-2:
    value: 0.5
    note: 세로 2배. 긴 세로 배너·사이드 이미지.
  9-16:
    value: 0.5625
    note: 모바일 전체 화면 비율. 스토리·숏폼 영상. `16-9` 의 역수.
  2-3:
    value: 0.666667
    note: 세로 포스터·도서 표지 비율.
  3-4:
    value: 0.75
    note: 세로 카드 이미지. `4-3` 의 역수로 세로 중 가장 흔하다.
  4-5:
    value: 0.8
    note: 소셜 세로 게시물 비율(인스타그램 표준).
  1-1:
    value: 1
    note: 정사각형. 아바타·썸네일·그리드 타일.
  4-3:
    value: 1.333333
    note: 전통적 사진·화면 비율. 카드 이미지에 흔하다.
  3-2:
    value: 1.5
    note: "35mm 사진 비율. DSLR 기본값."
  golden:
    value: 1.618
    note: 황금비 1.618. 장식적 비례 — 키가 `W-H` 형식이 아닌 유일한 예외다.
  16-9:
    value: 1.777778
    note: 영상 표준. 히어로·미디어 썸네일. 네 시스템이 모두 채택.
  2-1:
    value: 2
    note: 와이드 배너.
  21-9:
    value: 2.333333
    note: 시네마틱 울트라와이드.
gradient:
  fade-top:
    value: linear-gradient(to top, transparent, currentColor)
    note: 위 가장자리가 불투명하고 반대편으로 갈수록 투명해진다. 위쪽에 놓는다. 용례 — 스크롤 영역 상단 · 헤더 아래로 콘텐츠가 들어갈 때.
  fade-right:
    value: linear-gradient(to right, transparent, currentColor)
    note: 오른쪽 가장자리가 불투명하고 반대편으로 갈수록 투명해진다. 오른쪽쪽에 놓는다. 용례 — 가로 스크롤 목록의 오른쪽 끝 · 넘치는 한 줄 텍스트.
  fade-bottom:
    value: linear-gradient(to bottom, transparent, currentColor)
    note: 아래 가장자리가 불투명하고 반대편으로 갈수록 투명해진다. 아래쪽에 놓는다. 용례 — 접힌 본문 · 리스트 하단처럼 콘텐츠가 잘리는 자리. 가장 흔하다.
  fade-left:
    value: linear-gradient(to left, transparent, currentColor)
    note: 왼쪽 가장자리가 불투명하고 반대편으로 갈수록 투명해진다. 왼쪽쪽에 놓는다. 용례 — 가로 스크롤 목록의 왼쪽 끝.
interaction:
  opacity-normal-hovered:
    value: 0.05
    note: 기본 hover. 버튼·칩·메뉴 항목 등 대부분의 조작 요소가 쓰는 기준값.
  opacity-normal-focused:
    value: 0.08
    note: 기본 focus. 포커스 링(focusRing)과 함께 쓰며 링을 대체하지 않는다.
  opacity-normal-pressed:
    value: 0.12
    note: 기본 press. hover 의 2.4배로 눌림이 분명히 읽힌다.
  opacity-light-hovered:
    value: 0.04
    note: 연한 면 위 hover. 리스트 행·표 셀처럼 넓은 영역이라 강하면 산만해지는 곳에 쓴다.
  opacity-light-focused:
    value: 0.06
    note: 연한 면 위 focus. hover 보다 한 단 위여서 포인터와 키보드가 구분된다.
  opacity-light-pressed:
    value: 0.09
    note: 연한 면 위 press. 눌린 순간에만 나타나므로 세 상태 중 가장 진하다.
  opacity-strong-hovered:
    value: 0.08
    note: 진한 면 위 hover. primary 버튼처럼 면이 이미 짙어 약한 층은 묻히는 곳에 쓴다.
  opacity-strong-focused:
    value: 0.12
    note: 진한 면 위 focus. normal 의 pressed 와 같은 값이라 티어를 섞어 쓰지 않는다.
  opacity-strong-pressed:
    value: 0.18
    note: 진한 면 위 press. 사다리 전체에서 가장 진한 상호작용 층이다.
divider:
  1:
    value: "1px"
    note: 기본 구분선. 리스트 항목·섹션 사이의 얇은 선.
    usedBy: [Button, Checkbox, Field, Radio, Search, TextArea, TextField]
  8:
    value: "8px"
    note: 굵은 구분선. 섹션을 크게 가르는 띠. 색은 line 토큰보다 면 색(bg.normalAlternative 등)이 자연스럽다.
focusRing:
  width:
    value: "2px"
    note: 링 두께. WCAG 2.4.13(AAA) 의 2px 기준을 따른다.
    usedBy: [Button, Checkbox, Radio, Search, TextArea, TextField]
  offset:
    value: "2px"
    note: 요소와 링 사이 간격. 링이 컴포넌트 색 위에 겹치지 않게 한다.
    usedBy: [Button, Checkbox, Radio, Search, TextArea, TextField]
duration:
  0:
    value: "[object Object]"
    note: 지연 없음. DTCG `transition` 은 `delay` 를 필수로 요구하므로 지연이 없어도 쓸 값이 필요하다. 즉시 완료에도 쓴다.
    usedBy: [Button, Checkbox, Radio]
  100:
    value: "[object Object]"
    note: 상태 오버레이(hover·press). 가장 빈번한 전환이라 가장 짧다.
  150:
    value: "[object Object]"
    note: 작은 컨트롤 — Switch thumb, Tooltip 페이드. 이탈(exit)은 진입보다 짧게 잡는 것이 정석이라 여기서 고른다.
  200:
    value: "[object Object]"
    note: 패널 열림 — Dropdown, Accordion.
  300:
    value: "[object Object]"
    note: 큰 표면 — Popup, Bottom Sheet, Toast. 이동 거리가 길어 더 걸린다.
  500:
    value: "[object Object]"
    note: 느린 강조 · Skeleton 셔머 1주기.
  1000:
    value: "[object Object]"
    note: 루프 1주기 — Loading 스피너 1회전. **1회성 전환이 아니라 무한 반복이라 자릿수가 다르다.**
    usedBy: [Button]
cubicBezier:
  linear:
    value: "0,0,1,1"
    note: 등속 = CSS `linear`. 루프 전용 — 스피너가 등속이 아니면 이음매에서 끊겨 보인다.
    usedBy: [Button]
  standard:
    value: "0.42,0,0.58,1"
    note: 기본 = CSS `ease-in-out`. 양끝이 부드럽다. 상태 전환의 기본값.
  enter:
    value: "0,0,0.58,1"
    note: 진입 = CSS `ease-out`. 빠르게 시작해 부드럽게 멈춘다 — 나타나는 요소.
  exit:
    value: "0.42,0,1,1"
    note: 이탈 = CSS `ease-in`. 부드럽게 시작해 빠르게 사라진다 — 사라지는 요소.
zIndex:
  base:
    value: 0
    note: 일반 콘텐츠. 쌓임 맥락을 만들지 않는 기준선.
  sticky:
    value: 100
    note: 고정 요소 — Top Navigation, 테이블 헤더. 콘텐츠 위, 팝오버 아래.
  dropdown:
    value: 200
    note: 앵커에 붙는 팝오버 — Select, Dropdown, Date Picker. 모달 배경막보다 아래라 모달이 열리면 가려진다.
  backdrop:
    value: 300
    note: 모달 뒤 어두운 막. `color.elevation.dim` 과 짝이다.
  modal:
    value: 400
    note: Popup, Bottom Sheet. 배경막 바로 위.
  toast:
    value: 500
    note: Toast, Snackbar. **모달보다 위다** — 모달이 열린 상태에서 뜬 알림이 가려지면 안 된다.
  tooltip:
    value: 600
    note: 최상위. **토스트보다 위다** — 모달 안 요소의 툴팁이 모달 위에 그려져야 한다.
safeArea:
  status-ios:
    value: "44px"
    note: iOS 상단 인셋 공칭값. 노치·다이내믹 아일랜드 기기의 통상값이다.
  status-android:
    value: "36px"
    note: Android 상단 인셋 공칭값. 기기·제스처 설정마다 달라 근거 기록이 없다 — 컴포넌트 단계에서 재확인한다.
  bottom-ios:
    value: "34px"
    note: iOS 하단 인셋 공칭값. 홈 인디케이터 영역이다.
  bottom-android:
    value: "14px"
    note: Android 하단 인셋 공칭값. 제스처 바 유무에 따라 달라 근거 기록이 없다 — 컴포넌트 단계에서 재확인한다.
breakpoint:
  xs:
    value: "0px"
    note: 기준점 없음(0). 모바일 우선 설계의 기본 구간.
  sm:
    value: "768px"
    note: 태블릿 세로 / 작은 화면 진입점. 타이포 compact 오버라이드가 이 값 미만에서 동작한다.
  md:
    value: "992px"
    note: 태블릿 가로 / 작은 데스크톱.
  lg:
    value: "1200px"
    note: 데스크톱.
  xl:
    value: "1600px"
    note: 와이드 데스크톱.
layout:
  maxWidth-lg:
    value: "1080px"
    note: lg·xl 공통 — 1080px 고정
  maxWidth-xl:
    value: "1080px"
    note: lg·xl 공통 — 1080px 고정
  columns-xs:
    value: 4
    note: xs·sm 공통 — 4컬럼
  columns-sm:
    value: 4
    note: xs·sm 공통 — 4컬럼
  columns-md:
    value: 8
    note: md — 8컬럼
  columns-lg:
    value: 12
    note: lg·xl 공통 — 12컬럼
  columns-xl:
    value: 12
    note: lg·xl 공통 — 12컬럼
  margin-xs:
    value: "20px"
    note: xs·sm 공통 — 20px
  margin-sm:
    value: "20px"
    note: xs·sm 공통 — 20px
  margin-md:
    value: "20px"
    note: md — 20px
  margin-lg:
    value: "0px"
    note: lg·xl 공통 — 여백 없음(maxWidth 가 대신함)
  margin-xl:
    value: "0px"
    note: lg·xl 공통 — 여백 없음(maxWidth 가 대신함)
  gutter-xs:
    value: "12px"
    note: xs·sm 공통 — 12px
  gutter-sm:
    value: "12px"
    note: xs·sm 공통 — 12px
  gutter-md:
    value: "16px"
    note: md — 16px
  gutter-lg:
    value: "24px"
    note: lg·xl 공통 — 24px
  gutter-xl:
    value: "24px"
    note: lg·xl 공통 — 24px
control:
  minHeight-sm:
    value: "32px"
    note: "32px. 조밀한 툴바 · 테이블 행 내부 · Chip. 8px 등차라 세로 리듬이 유지된다. **가장 작은 단계도 24 를 넘어** WCAG 2.5.8(24×24 CSS px)을 자체로 만족한다 — 히트박스를 따로 넓히지 않아도 된다."
    usedBy: [Button]
  minHeight-md:
    value: "40px"
    note: "40px. 기본값. 폼 · 다이얼로그 · 일반 화면. 8px 등차라 세로 리듬이 유지된다."
    usedBy: [Button, Search, TextField]
  minHeight-lg:
    value: "48px"
    note: "48px. 모바일 주요 CTA · Bottom Sheet 하단 버튼. 8px 등차라 세로 리듬이 유지된다."
    usedBy: [Button, TextArea, TextField]
  paddingInline-sm:
    value: "12px"
    note: "12px. `minHeight.sm` 와 짝이다."
    usedBy: [Button]
  paddingInline-md:
    value: "16px"
    note: "16px. `minHeight.md` 와 짝이다."
    usedBy: [Button, Search, TextArea, TextField]
  paddingInline-lg:
    value: "20px"
    note: "20px. `minHeight.lg` 와 짝이다."
    usedBy: [Button, TextField]
  gap-sm:
    value: "4px"
    note: "4px. `minHeight.sm` 와 짝이다."
    usedBy: [Button]
  gap-md:
    value: "6px"
    note: "6px. `minHeight.md` 와 짝이다."
    usedBy: [Button, Checkbox, Radio]
  gap-lg:
    value: "8px"
    note: "8px. `minHeight.lg` 와 짝이다."
    usedBy: [Button]
  radius-sm:
    value: "6px"
    note: "6px. `minHeight.sm` 와 짝이다."
    usedBy: [Button]
  radius-md:
    value: "8px"
    note: "8px. `minHeight.md` 와 짝이다."
    usedBy: [Button, Search, TextArea, TextField]
  radius-lg:
    value: "12px"
    note: "12px. `minHeight.lg` 와 짝이다."
    usedBy: [Button, TextField]
  iconSize-sm:
    value: "16px"
    note: "16px. `minHeight.sm` 와 짝이다. 32px 컨트롤용. 위아래 8px 씩 남는다."
    usedBy: [Button, Search]
  iconSize-md:
    value: "20px"
    note: "20px. `minHeight.md` 와 짝이다. 40px 컨트롤용. 기본."
    usedBy: [Button, Search]
  iconSize-lg:
    value: "24px"
    note: "24px. `minHeight.lg` 와 짝이다. 48px 컨트롤용."
    usedBy: [Button]
  boxSize:
    value: "20px"
    note: 선택 컨트롤의 네모·원 한 변 20px — Checkbox · Radio · Select Button 이 공유한다. **`iconSize.20` 을 쓰지 않는다.** 값은 같지만 축이 다르다 — `iconSize` 는 SVG 래퍼 크기이고 이것은 컨트롤 그 자체의 상자다. 한쪽을 바꿀 때 다른 쪽이 따라 움직이면 안 된다(DECISIONS 0-55). **시각 크기이지 조작 영역이 아니다** — 조작 영역의 하한은 `minTarget`(24px)이고, 라벨까지 포함하면 실제로는 더 넓다. **티어를 두지 않았다** — 크기 단계 수요가 아직 확인되지 않았다(`label-xs` 의 `-strong` 을 두지 않은 것과 같은 원칙, 0-25). 필요해지면 그때 나눈다.
    usedBy: [Checkbox, Radio]
  minInset:
    value: "1px"
    note: "컨트롤 테두리 안쪽 최소 여백 1px — **KWCAG 6.1.3 (KR delta)**. 브라우저 UA 가 `button {padding: 1px 6px}` · `input {padding: 1px 2px}` 로 우연히 이 값을 주고 있었는데, 우리가 `padding-inline` 만 덮어 **세로는 UA 값이 남아 있었다**(0-48). 우연한 만족은 브라우저가 바뀌면 사라진다. `padding-block` 을 이 토큰으로 명시해 **의도해서** 만족시킨다. 이보다 큰 세로 여백을 이미 갖는 컨트롤(Text Area 10px)은 그대로 두면 된다 — **하한이다**. **주의: 6.1.3 은 그 여백이 포인터 조작에 반응하지 않을 것도 요구하는데, padding 만으로는 그 부분이 충족되지 않는다**(미결 25)."
    usedBy: [Button, Search, TextField]
  minTarget:
    value: "24px"
    note: "조작 영역 하한 24px — WCAG 2.5.8. **KWCAG 6.1.3(대각 6.0mm)을 포함한다**: CSS 기준 픽셀(1px=1/96in)에서 24×24 의 대각은 8.98mm 이고, 6.0mm 대각을 만족하는 최소 정사각은 16.04px 다. **24 만 지키면 두 기준이 함께 닫힌다**(DECISIONS 0-30). 시각 크기가 이보다 작은 컨트롤은 히트박스를 이 값까지 넓힌다."
    usedBy: [Checkbox, Radio, Search]
transition:
  control:
    value: "[object Object]"
    note: 컨트롤 상태 전환 — hover·press 오버레이, 보더 색. 100ms · standard. 가장 빈번한 전환이라 가장 짧다.
    usedBy: [Button, Checkbox, Radio, Search, TextArea, TextField]
shadow:
  xs:
    light: "0px 1px 3px 0px rgba(19, 19, 20, 0.08), 0px 0px 1px 0px rgba(19, 19, 20, 0.04)"
    dark: "0px 1px 3px 0px rgba(0, 0, 0, 0.48), 0px 0px 1px 0px rgba(0, 0, 0, 0.24)"
    note: 가장 얕음 — 미세한 떠 있음(구분선 대체).
  sm:
    light: "0px 3px 7px -1px rgba(19, 19, 20, 0.12), 0px 0px 3px 0px rgba(19, 19, 20, 0.05)"
    dark: "0px 3px 7px -1px rgba(0, 0, 0, 0.7), 0px 0px 3px 0px rgba(0, 0, 0, 0.3)"
    note: 얕음 — 칩·작은 버튼처럼 살짝 떠 있는 요소.
  md:
    light: "0px 6px 14px -2px rgba(19, 19, 20, 0.16), 0px 0px 6px 0px rgba(19, 19, 20, 0.06)"
    dark: "0px 6px 14px -2px rgba(0, 0, 0, 0.8), 0px 0px 6px 0px rgba(0, 0, 0, 0.36)"
    note: 기본 — 카드·드롭다운 등 일반적인 떠 있는 면.
  lg:
    light: "0px 12px 24px -4px rgba(19, 19, 20, 0.2), 0px 0px 12px 0px rgba(19, 19, 20, 0.07)"
    dark: "0px 12px 24px -4px rgba(0, 0, 0, 0.88), 0px 0px 12px 0px rgba(0, 0, 0, 0.42)"
    note: 깊음 — 팝오버·바텀시트처럼 화면 위로 확실히 뜬 면.
  xl:
    light: "0px 20px 36px -7px rgba(19, 19, 20, 0.24), 0px 0px 20px 0px rgba(19, 19, 20, 0.08)"
    dark: "0px 20px 36px -7px rgba(0, 0, 0, 0.88), 0px 0px 20px 0px rgba(0, 0, 0, 0.52)"
    note: 가장 깊음 — 모달·풀스크린 오버레이.
---

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

## 색

### 컴포넌트는 semantic 만 쓴다

**primitive 팔레트(`gray`·`blue` 등 99개)는 CSS 변수로 나가지 않는다.** 팔레트를 컴포넌트가
직접 고르면 테마 전환이 깨지기 때문이다. 색은 반드시 `--color-*` 를 쓴다.

라이트·다크는 **같은 키에 다른 참조**다. 컴포넌트는 테마를 신경 쓸 필요가 없다 — 같은
변수명이 알아서 다른 값을 갖는다.

```html
<html>                      OS 설정을 따른다 (prefers-color-scheme)
<html data-theme="light">   라이트 강제
<html data-theme="dark">    다크 강제
```

### 단계는 목표 휘도로 고정돼 있다

유채색 13계열 × 6단계는 OKLCH 로 생성했고, 단계 번호가 **목표 상대휘도**를 뜻한다. 계열이
달라도 같은 번호면 대비가 같다.

**400 과 600 은 서로의 거울이다.** 라이트는 600, 다크는 400 을 쓰면 양쪽 모두 흰/검은 배경에서
5.1~5.4:1 이 나온다. "라이트·다크 동등"이 이 구조로 충족된다.

무채색은 다르다 — **목표 휘도로 생성한 눈금이 아니라 역할에서 역산한 값**이라 간격이 고르지
않다(0·50·100·150·200 … 900·910·925·950·1000). 유채색과 같은 규칙을 기대하고 읽으면 어긋난다.

### 반투명색은 base + 알파다

`rgba()` 를 직접 쓰지 않는다. base 색 별칭과 `opacity` 눈금 참조를 조합해 빌드가 합성한다.
불투명도를 한 곳에서 관리하려는 것이다.

### 하지 말 것

- **primitive 색을 컴포넌트에서 쓰지 마라.** `--color-*` semantic 만 쓴다.
- **`cool.neutral30` · `atomic.*` 을 텍스트에 쓰지 마라.** 두 테마가 같은 색이라 테마 적응형이
  아니고, 다크에서 1.70~2.05:1 로 **AA 미달**이다. 역할이 정의되지 않은 상태다.
- **색만으로 정보를 전달하지 마라.** 상태는 색 + 아이콘/텍스트로 함께 표현한다.

## 타이포그래피

### 변수가 아니라 클래스다

복합 토큰이라 CSS 변수 하나로 표현할 수 없다. 빌드가 **유틸리티 클래스**를 만든다.

```html
<h2 class="heading-md">제목</h2>
<p class="body-md">본문</p>
```

한 토큰이 5속성(`fontFamily`·`fontSize`·`fontWeight`·`lineHeight`·`letterSpacing`)을 함께 갖는다.
낱개로 조합하지 말고 클래스를 쓴다.

### 크기는 rem 이다

키는 px 이고 값은 rem 이다 — **사용자 글자 확대에 반응하게** 하려는 것이다. px 로 바꾸면
브라우저 글자 크기 설정이 무시된다.

### 행간은 배수다

`lineHeight` 는 `number`(단위 없음)이며 `fontSize` 의 배수다. 짝지어진 글자 크기에서만 2px
그리드에 떨어지므로 **짝을 바꾸지 마라** — 빌드가 검사한다.

### 자간은 크기가 결정한다

독립 축이 아니다. 크기가 커질수록 좁아지는 종속 함수이고, 크기별 rem 으로 환산해 두었다.
임의의 `letter-spacing` 을 주지 않는다.

### compact 는 자동이다

뷰포트가 768px 미만이면 7종이 자동으로 내려간다. 클래스를 바꿀 필요가 없다.

담는 기준은 **크기가 아니라 "뷰포트에 따라 값이 달라져야 하는가"** 다.

- `display`·`heading` 6종 — 좁은 화면에서 **넘치지 않게** 한 단계 내린다.
- `label-xs` — 좁은 화면의 **밀도**를 위해 11px → 10px 로 내린다. 행간은 양쪽 다 14px 라
  전환 시 높이가 흔들리지 않는다.

`title`·`body`·`label`·`link` 의 나머지 21종은 20px 이하라 좁은 화면에서도 넘치지 않는다.
**모바일에서 본문을 더 작게 만들지 않는다** — compact 는 축소 장치가 아니다.

### 11px·10px 은 `label-xs` 뿐이다

밀집 UI 크롬 전용이다 — 차트 축 레이블, 타임스탬프, 배지, 조밀 테이블, 탭바 라벨.

**아이콘이나 수치와 짝지어진 보조 정보에만 쓴다.** 10px 은 Apple HIG 권장 최소(11pt)와
Material(12sp)을 밑돈다. WCAG·KWCAG 에 최소 글자 크기 조항은 없어 위반은 아니지만,
**텍스트가 유일한 전달 수단인 곳에는 쓰지 않는다.** 그 조건이 이 크기를 정당화하는 유일한
근거다.

본문·링크에는 없다. 본문 최소는 `body-sm`(12px)이다.

### 하지 말 것

- **`font-size`·`line-height` 를 직접 쓰지 마라.** 클래스를 쓴다.
- **`label-xs` 를 본문·링크·단독 정보에 쓰지 마라.** 아이콘·수치와 짝지어진 보조 라벨 전용이다.
- **10px 아래를 만들지 마라.** `label-xs` 의 compact 값이 스케일 최소다.
- **본문 행간을 1.5 아래로 내리지 마라.**

## 여백 · 레이아웃

### spacing

여백 눈금은 primitive 하나뿐이고 semantic 이 없다. **값 하나에 용도를 1:1 로 묶기 어려워
토큰별 설명을 의도적으로 비워 두었다** — 추측으로 채우지 않는다. 실제로 반복되는 값을 보고
컴포넌트 단계에서 역할을 뽑는다.

그전까지는 컴포넌트가 `--spacing-16` 을 직접 고른다. 불편하지만 지어낸 이름을 붙이는 것보다
낫다.

### 최대폭은 lg 부터

`layout.maxWidth` 는 `lg`·`xl` 에만 있다. **"제약 없음"은 값이 아니라 토큰의 부재로 표현한다**
— DTCG `dimension` 은 `none` 같은 키워드를 허용하지 않는다. 컴포넌트는 `lg` 이상에서만
`max-width` 를 건다.

### breakpoint 는 min-width 임계값

이름은 단계를 뜻하므로 임계값이 조정돼도 유효하다. 타이포 compact 오버라이드가 `sm` 미만에서
동작한다.

### safeArea 는 눈금이 아니다

플랫폼 상수다. 값 사이에 비율 관계가 없다.

**웹에서는 쓰지 않는다** — 브라우저는 `env(safe-area-inset-*)` 로 실제 기기 값을 준다. 이
토큰은 그 함수를 못 쓰는 곳(네이티브·디자인 산출물·목업)에서 쓰는 공칭값이다.
**Android 값의 근거는 기록이 없다** — 기기마다 달라 컴포넌트 단계에서 재확인이 필요하다.

### 하지 말 것

- **스케일에 없는 여백을 쓰지 마라.** 필요하면 primitive 에 단계를 추가한다.
- **`safeArea` 를 웹에서 쓰지 마라.** `env()` 를 쓴다.

## 떠 있음 (Elevation)

그림자는 **테마별 색을 쓰므로 semantic 에 있다.** primitive 에 짝이 없는 유일한 그룹이다.

### 카드에는 보더를 함께 쓴다 — 두 테마 모두

그림자는 두 층으로 되어 있고 역할이 다르다. 1층은 아래로 떨어지고, 2층은 사방을 감싼다.
**카드 윗변에는 2층만 온다.**

| 단계 | 1층(아래) | 2층(사방) |
|---|---|---|
| 라이트 `sm` | 0.0842 | **0.0358** |
| 다크 `sm` | 0.0870 | **0.0354** |

2층이 두 테마 모두 **눈에 들어오는 기준(0.04) 아래**다. 아랫변은 뚜렷한데 윗변이 흐릿하다.
그래서 보더로 경계를 만든다.

```css
.card {
  background: var(--color-bg-elevated);
  border: var(--divider-1) solid var(--color-line-normal);
  box-shadow: var(--shadow-sm);
}
```

**테마 분기를 두지 마라.** 보더가 필요한 정도는 라이트·다크가 거의 같다
(카드 위 대비 1.32 vs 1.44). 한쪽에만 달면 같은 컴포넌트의 구조가 테마마다 달라진다.

### 다크 그림자는 약하지 않다

흔한 오해다. 실측하면 다크가 라이트의 **71~87%** 이고, 카드에 쓰는 `sm` 은 **87%** 다.
면 차이까지 더한 총합은 오히려 다크가 앞선다.

```
라이트   면 차이 0.0000 + 그림자 0.1147 = 0.1147
다크     면 차이 0.0275 + 그림자 0.0993 = 0.1269
```

**막혀 있는 쪽은 라이트다.** `bg.elevated` 가 `bg.normal` 과 완전히 같아서(둘 다 `#FFFFFF`)
그림자 단독으로 버틴다. 흰색 위로 갈 곳이 없다.

### 면 사이 대비는 요구하지 않는다

`bg.normal` 과 `bg.elevated` 가 3:1 이 되려면 그 테마를 포기해야 한다. 물리적으로 불가능하다.
**면은 지각 힌트, 경계는 보더**로 역할을 나눈다.

### 쌓임 순서는 `--z-index-*` 로만 정한다

`z-index` 에 임의의 수를 쓰지 않는다. 눈금이 있고 **100 간격**이라 사이에 끼워 넣을 여지가 있다.

```
base 0 · sticky 100 · dropdown 200 · backdrop 300 · modal 400 · toast 500 · tooltip 600
```

순서에는 이유가 있다.

- **`toast` 가 `modal` 보다 위다** — 모달이 열린 상태에서 뜬 알림이 가려지면 안 된다.
- **`tooltip` 이 `toast` 보다 위다** — 모달 안 요소의 툴팁이 모달 위에 그려져야 한다.
- **`dropdown` 이 `backdrop` 보다 아래다** — 모달이 열리면 뒤의 열린 드롭다운은 가려지는 것이 맞다.

**쌓임 맥락(stacking context)에 갇히면 z-index 는 무력하다.** `transform`·`filter`·`opacity`·
`will-change` 가 걸린 조상이 있으면 그 안에 갇힌다. 오버레이 계열은 포털로 `body` 아래에
붙이는 것을 기본으로 한다 — 이건 토큰이 아니라 컴포넌트 규약이다.

### 모달 백드롭

`--color-elevation-dim` 은 균일한 딤이다. **사진 위 스크림으로 쓰지 마라** — 그건 그라디언트가
필요하고 아직 토큰이 없다.

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

`duration` 은 ms 눈금, `cubicBezier` 는 가속 곡선이다. 둘 다 **Motion** 파운데이션이다 — 조작
피드백(hover·press)과 조작과 무관한 모션(스피너 루프·토스트 자동 닫힘)이 한 눈금을 공유하므로
Interaction 아래 두지 않았다.

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

## 접근성

**WCAG 2.2 AA + KWCAG 2.2 를 충족한다.** 색을 바꾸면 대비를 재검증한다 —
`node tokens/checks/surfaces.mjs`.

| | |
|---|---|
| 텍스트 | **4.5:1** |
| 비텍스트 · UI | **3:1** (WCAG 1.4.11. KWCAG 에는 해당 항목이 없다) |
| 라이트 · 다크 | **동등하게** |

### 4개 면 전부에서 검사한다

`bg.normal` · `bg.normalAlternative` · `bg.elevated` · `bg.elevatedAlternative`.
`bg.normal` 만 보면 **카드·모달 위 텍스트가 사각지대**가 된다 — 실제로 이 누락으로 미달 3건을
놓친 적이 있다.

반투명색은 **배경에 합성한 뒤** 대비를 계산한다.

### 큰 텍스트 3:1 예외는 쓰지 않는다

두 기준 모두 18pt(24px) 이상 또는 14pt(18.67px) 이상 bold 에 3:1 을 허용한다. 그러나
**색 토큰이 어느 크기와 조합될지 정의가 없으므로 전 색상에 4.5:1 을 적용한다.** 미달이 났을 때
"큰 텍스트로만 쓰면 구제 가능"은 참고로만 본다.

### 검사에서 빼는 것

`label.disable` · `label.assistive` — 비활성·장식 목적(KWCAG 5.4.3 예외).

### 컴포넌트 단계에서 확인할 것

지금은 토큰으로 정할 수 없다.

| | |
|---|---|
| 조작 영역 | KWCAG 6.1.3 **6.0mm 이상**(물리) · WCAG 2.5.8 **24×24 CSS px** — 단위가 달라 각각 확인 |
| 2.4.11 Focus Not Obscured | 포커스된 요소가 가려지지 않아야 한다 |
| 2.5.7 Dragging Movements | 끌기 동작에 대안이 있어야 한다 |
| 3.3.7 Redundant Entry | 같은 정보를 다시 입력하게 하지 않는다 |

## 컴포넌트

**아래는 `COMPONENTS.md` 에서 그대로 온다.** 절 번호도 그 파일의 번호이므로
`3-0` · `8-1` 같은 상호 참조가 이 문서 안에서 그대로 해석된다.

내보내는 절은 3개이고, 나머지(진행 순서 · 착수 전 선결 · 토큰 관리 ·
완료 정의 · 기준선)는 **우리 작업 절차**라 뺐다 — 그리는 데 필요한 것만 남긴다.

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
  용도       언제 이것을 고르나 · 변형과 크기를 무슨 기준으로 고르나
             비슷한 컴포넌트가 있으면 갈림길을 적는다
  이름       접근 가능한 이름을 무엇이 만드나 (2.5.3)
  키보드     키 → 동작. Tab 진입 횟수 · roving 여부
  상태       상태 → 노출 속성. 충돌 시 우선순위
  조작영역   최소 크기와 근거 SC
  변형       variant → 색 토큰 매핑
  크기       단계와 기본값
  토큰       쓰는 토큰 목록
  플랫폼     웹 / iOS 대응
  오용       **고르기**를 잘못하는 것 — 설계 실수
  금지       **만들기**를 잘못하는 것 — 구현 실수
  미결       아직 못 정한 것 (비워두지 말고 적는다)
```

**`용도` 와 `오용` 은 근거를 표시한다.** 다른 절과 성격이 다르다 — 나머지는 표준·토큰·실측에
매여 있어 어긋나면 검사가 잡지만, 이 둘은 **우리가 정하는 규범**이라 **빌드가 검사할 수 없다.**
근거 없이 적으면 나중에 아무도 뒤집지 못한다. 그래서 줄 끝에 출처를 단다.

```
(토큰)      토큰 $description 에 이미 적힌 정의를 따른 것
(0-NN)      DECISIONS 항목
(실측)      브라우저·checks 로 잰 값이 근거인 것
(새로 정함)  우리가 새로 세우는 규범 — **반드시 이유를 같이 적는다**
```

**`용도` 가 답하지 않는 것이 하나 있다** — **컴포넌트 사이의 여백·배치**다. "이 버튼 위아래를
얼마나 띄우나" 는 컴포넌트 하나의 명세로 답할 수 없다. 그건 **조합(패턴) 층**이고 아직 문서가
없다. LNB·페이지 골격·폼 배치가 같은 자리다.

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
| 컨트롤 경계 대비 | 1.4.11 | AA | **테두리가 유일한 식별 수단일 때만 3:1** ↓ |
| 포커스 링 사양 | 2.4.13 | AAA | AA 범위 밖이지만 구현 비용이 낮아 **내부 권장**으로 둔다 |
| 포커스 관리 | — | — | 초기 포커스 대상, 트랩 범위, 닫힐 때 복귀 지점, `inert` 사용 여부 |

**1.4.11 의 범위를 넓게 잡지 않는다.** 이 기준은 컴포넌트와 상태를 **식별하는 데 필요한**
시각 정보만 대상이고, W3C Understanding 은 히트 영역 경계선을 요구하지 않는다고 명시한다 —
컨트롤 안에 보이는 콘텐츠(글자·충분히 대비되는 아이콘)가 있으면 테두리는 면제다.

| | 3:1 대상 | |
|---|---|---|
| outline Button · Chip 처럼 **글자가 있는** 컨트롤 | **아니다** | `line.normal`(1.31)로 둔다. 올리지 않는다 |
| Text Field · Text Area · Search | **맞다** | 빈 상태에 보이는 콘텐츠가 없다. 라벨은 컨트롤 **바깥**이다 |
| Checkbox · Radio (미체크) | **맞다** | 윤곽 말고 아무것도 없다 |

대상이면 `line.strong` 을 쓴다 — `line.*` 중 3:1 을 만족하는 유일한 단계다(0-38).
`checks/surfaces.mjs` 가 4개 면 × 2테마로 검사한다. **KWCAG 2.2 에는 1.4.11 에 해당하는
항목이 없다**(4-1).

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
| 색에 무관한 인식 | 1.4.1 | **A** | 색**만**으로 정보를 전달하지 않는다 — 필수 표시 · 오류 · 선택 · 링크 구분. **KWCAG 5.4.1 이 대응하므로 KR delta 가 아니다** ↓ |

**1.4.1 의 범위를 넓게 잡지 않는다.** W3C Understanding 을 확인한 결과 이 조항은
**정보 전달**(필수 표시·오류·선택 상태·본문 속 링크)을 다루고, **컨트롤이 비활성일 때의
표현에는 아무 언급이 없다.** 그러므로 *"비활성을 색만으로 표시하지 마라"* 는 **규정이 아니라
우리가 정한 설계 원칙**이다. 근거를 규정처럼 적지 않는다(DECISIONS 0-43).

기법 인용도 조심한다 — **G183 은 "본문 속 인라인 링크를 주변 텍스트와 3:1 로 구분한다"**
는 기법이고, 버튼의 활성↔비활성에 적용되는 기법이 아니다. Understanding 본문의
*"색이 hue 와 명도 양쪽에서 3:1 이상 다르면 색만으로 구분한 것이 아니다"* 는 유효하지만,
우리 비활성은 hue 없이 명도만 다르므로 그대로 적용되지도 않는다.

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
| disabled 정책 | **정해졌다 — 쓸 수 없는 컨트롤을 만들지 않는다.** 활성으로 두고 눌렀을 때 사유를 보여준다. `aria-disabled`(inactive)는 0-44 에서 걷어냈다. 네이티브 `disabled` 는 정말 사유를 알릴 방법이 없을 때만 쓰고 근거를 남긴다 — `label.disable` 은 WCAG 1.4.3 예외라 대비 검사에서 빠져 있다 |
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
| **6.1.3 조작 가능 — 안쪽 여백** | 링크·입력·콘트롤은 **테두리 안쪽 1px 이상 여백**을 두고 그 영역은 포인터 조작에 반응하지 않게. **앞쪽 절반은 `control.minInset`(1px)으로 닫았다**(0-48). 뒤쪽 절반(반응하지 않게)은 padding 으로 안 되고 2.5.8 과 당긴다 — **미결 25** | WCAG 에 없다. 또 2.5.8 의 예외(인라인 링크 등)가 KWCAG 에는 없어, **본문 속 인라인 링크가 WCAG 는 통과하고 국내 심사에서 걸릴 수 있다** |
| **7.2.1 사용자 요구에 따른 실행** | *"사용자가 의도하지 않은 기능(새 창, 초점에 의한 맥락 변화 등)은 실행되지 않아야 한다."* 레이어 팝업은 닫기 요구에 반드시 닫혀야 한다 | WCAG 에서는 3.2.5 Change on Request 로 **AAA** 다. AA 만 따르면 빠진다. **모달·외부 링크 컴포넌트에 직접 걸린다** |

> 6.4.4 고정된 참조 위치 정보는 전자출판문서 전용이라 일반 컴포넌트에 해당 없음.

**인증 주의** — 디지털포용법에 따른 웹접근성 품질인증 심사는 **KWCAG 33항목으로 채점**한다.
WCAG 2.2 AA 준수가 곧 인증 통과는 아니며, 심사 시점에 매핑이 필요하다.

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

용도       **누르면 그 자리에서 무언가 일어나는 것**이 Button 이다.
           어딘가로 가면 Button 이 아니라 <a> 다 — 역할 절과 같은 말이다

           변형 — 위에서부터 맞는 첫 번째를 쓴다
           negative   되돌릴 수 없는 파괴적 동작. 삭제 · 해지 · 영구 제거
                      {color.status.negative} 의 정의가 그대로 이것이다 (토큰)
           primary    그 화면에서 사용자가 하러 온 일. **화면당 하나** (새로 정함)
                      — 이유: 면이 배경과 가장 세게 갈린다. 배경 대비가
                        primary 13.39(라이트) · 16.11(다크) 인데 negative 5.10 / 8.01 ·
                        secondary 1.22 / 1.38 · outline·text 1.00 이다. 두 테마에서
                        순서가 같다. 둘을 두면 어느 쪽이 주된 행동인지 신호가 사라진다 (실측)
           secondary  primary 옆에 서는, 대등하지 않은 선택. 취소 · 뒤로 · 나중에
           outline    secondary 자리인데 면을 깔면 배경이 시끄러워지는 곳.
                      카드 위 · 이미지 위 · 툴바 (새로 정함)
                      — 이유: secondary 의 면 대비가 1.22 / 1.38 라 무늬 있는 배경
                        위에서 면이 얼룩처럼 보인다. outline 은 면 없이 선으로만 선다 (실측)
           text       누를 수 있다는 것만 알리면 되는 보조 동작.
                      더 보기 · 전체 선택 · 인라인 편집

           크기 — 담기는 자리가 정한다. `control.minHeight` 의 정의를 그대로 따른다 (토큰)
           sm  조밀한 툴바 · 테이블 행 내부 · Chip
           md  폼 · 다이얼로그 · 일반 화면            ← 기본
           lg  모바일 주요 CTA · Bottom Sheet 하단

           아이콘 버튼 5종을 언제 쓰는지는 아이콘 절에 적혀 있다

이름       자식 텍스트가 접근 가능한 이름이 된다
           아이콘 전용이면 aria-label 필수
           보이는 라벨이 있으면 그 텍스트가 이름에 포함돼야 한다 (2.5.3)
           — 음성 제어 사용자가 "확인 눌러" 라고 말할 수 있어야 한다

키보드     Space   활성    APG: "Space: Activates the button"
           Enter   활성    APG: "Enter: Activates the button"
           Tab     진입 1회 · roving tabindex 없음
           실행은 up-event 에서 한다 (2.5.2)
           — 누른 채 밖으로 벗어나면 취소된다

상태       **쓸 수 없는 버튼을 만들지 않는다.** 활성으로 두고 눌렀을 때 사유를 보여준다.
           `aria-disabled`(inactive)는 걷어냈다 — 못 쓰게 보이면 사용자가 애초에 누르지 않아
           "눌러서 사유를 알린다"는 존재 이유가 자기 시각 표현에 무력화된다 (0-44)

           **variant 의 실루엣을 지킨다** — 채워진 버튼은 채워진 채로, 빈 버튼은 빈 채로
           약해진다. 상태가 바뀔 때 모양이 뒤집히면 "같은 버튼이 꺼진 것"으로 안 읽힌다 (0-43)

                        기본                disabled
           primary      primary.normal      interaction.disable
           secondary    fill.strong         interaction.disable
           negative     status.negative     interaction.disable
           outline      line.strong 선      line.alternative 선
           text         면·선 없음          면·선 없음

           채워진 셋은 채워진 채로, 빈 둘은 빈 채로 간다.
           채워진 셋이 disabled 에서 같아지는 것은 의도다 — 라벨이 14.88 → 1.32 로 갈린다

           라벨         label.normal        label.disable
                        (primary·negative 는 inverse.label)

           disabled  (예외)  네이티브 disabled
                            포커스도 활성화도 안 되는 진짜 inactive 라 WCAG 1.4.3 예외가 적용된다
                            **비활성을 색만으로 표시하지 않는 것은 규정이 아니라 우리 원칙이다** —
                            1.4.1/5.4.1 은 비활성 상태의 표현을 다루지 않는다 (0-43)
                            primary 와 negative 는 disabled 에서 같아진다. negative 의 빨강이
                            사라지는 것은 의도다 — 비활성인 파괴적 버튼이 빨가면 활성으로 오인된다
                            **정말 사유를 알릴 방법이 없을 때만** · 쓰면 근거를 남긴다
           loading           aria-busy="true" · 접근 이름은 유지한다
                            스피너는 prefers-reduced-motion 에서도 멈추지 않는다 (0-27)
           pressed           aria-pressed (토글 버튼)
           우선순위          disabled > loading > 나머지

조작영역   ≥ 24×24 CSS px (WCAG 2.5.8) = --control-min-target
           KWCAG 6.1.3(대각 6.0mm)을 포함한다 — 24 만 지키면 둘 다 닫힌다
           가장 작은 sm(32px)도 자체로 만족한다
           시각 크기가 24 미만인 아이콘 버튼은 히트박스를 24 까지 넓힌다

변형       primary    bg {color.primary.normal}   label {color.inverse.label}
           secondary  bg {color.fill.strong}      label {color.label.normal}
                      — fill.normal 은 interaction.disable 과 값이 같아(라이트 둘 다 #F4F4F4)
                        활성·비활성의 면이 구별되지 않았다. 한 단계 올려 갈랐다 (0-41)
           outline    bg 없음 · border {color.line.strong} · label {color.label.normal}
                      — 1.4.11 이 요구해서가 아니라(글자가 있어 면제) 이 선이 outline 과
                        text 를 가르는 유일한 차이라서다. line.normal(1.32)로는 둘이
                        같은 버튼으로 보였다 (0-40). 비활성은 line.alternative 그대로
           text       bg 없음 · label {color.label.normal}      (Text Button)
           negative   bg {color.status.negative}  label {color.inverse.label}
           floating   원형 · radius.circle · 그림자 shadow.md   (Floating Button)

크기       sm 32 · md 40 · lg 48   기본 md
           sm  조밀한 툴바 · 테이블 행 내부 · Chip
           md  폼 · 다이얼로그 · 일반 화면
           lg  모바일 주요 CTA · Bottom Sheet 하단
           타이포  sm → label-md(14) · md → label-lg(15) · lg → label-xl(16)
           — 예전에는 md·lg 가 같은 16px 이었는데 **md 쪽이 더 커 보였다.**
             같은 글자가 40px 상자의 40%, 48px 상자의 33% 를 차지해서다.
             셋으로 갈라 43.8 → 37.5 → 33.3% 로 눕혔다 (0-50)
           — 라벨 사다리를 5티어(xs·sm·md·lg·xl = 11·12·14·15·16)로 다시 짰다.
             `label-lg` 는 16 에서 **15 로 바뀌었고** 옛 16 은 `label-xl` 이다

아이콘     **5종이고 전부 기존 prop 의 조합이다. 새 prop 은 없다** (0-47)

           종류            조합                                     sm / md / lg (높이, 실측)
           앞 아이콘        leadingIcon + label                      32 · 40 · 48
           뒤 아이콘        trailingIcon + label                     32 · 40 · 48
           아이콘만 (면 O)   iconOnly + primary/secondary/negative     32×32 · 40×40 · 48×48
           아이콘만 (면 X)   iconOnly + variant="text"                32×32 · 40×40 · 48×48
           플로팅           iconOnly + circle                        32×32 · 40×40 · 48×48

           **폭은 적지 않는다** — 라벨 길이에 따라 달라진다. 고정하면 1.4.12 를 깬다

           아이콘 크기      --control-icon-size-*  →  16 · 20 · 24
                           **허용 크기는 다섯뿐이다** — --icon-size-* → 16·20·24·28·32.
                           28·32 는 컨트롤 밖 단독 아이콘용이라 버튼은 앞의 셋만 쓴다 (0-51)
           획 두께          **토큰이 없다.** lucide 가 viewBox 24 에 획 2 로 그려져 있어
                           상자를 줄이면 획이 2 x 크기/24 로 따라 줄고, 상자 대비 비율이
                           8.33% 로 저절로 일정하다. 후보 5안을 실물로 비교하고 고른
                           결론이다 — 값을 토큰에 베끼면 아이콘 세트를 바꿀 때
                           조용히 틀린 값이 된다 (0-51)
           라운드          --control-radius-*     →  6 · 8 · 12 · 플로팅은 radius.circle

           **아이콘만 넷은 정사각이고 세 크기 모두 24×24 를 넘는다** — WCAG 2.5.8 ✔ ·
           KWCAG 6.1.3(6.0mm ≈ 16.04px) ✔. iconOnly 는 label 이 aria-label 이 되고,
           없으면 컴포넌트가 throw 한다 (WCAG 2.5.3 · 4.1.2)

           **뒤 아이콘을 남기는 이유** — KWCAG 7.2.1(예고 없는 새 창 금지)의 관례가
           뒤 아이콘이다. Link 컴포넌트가 생기기 전까지 버튼이 그 자리를 갖는다 (0-47)

           **아이콘만 (면 X) 의 용도** — LNB 접힘/펼침처럼 쉴 때는 아이콘만 보이고
           눌리는 영역은 32~48px 인 자리. 면이 없어도 1.4.11 은 만족한다 —
           보이는 콘텐츠(아이콘)가 컨트롤을 식별한다 (0-43)

토큰       크기    --control-min-height-*  --control-padding-inline-*
                   --control-gap-*  --control-radius-*  --control-min-target
                   --control-min-inset  ← padding-block. UA 기본값이 남아 있던 자리다 (0-48)
           전환    --transition-control
           포커스  --focus-ring-width + --focus-ring-offset
                   --color-interaction-focus
           상태    오버레이는 테마가 아니라 면의 밝기로 고른다 (0-14)
                   밝은 면 → overlay-darken-* · 어두운 면 → overlay-lighten-*

플랫폼     웹   <button> · aria-* · CSS px
           iOS  accessibilityTraits.button
                disabled → .notEnabled
                loading  → .updatesFrequently
                조작영역 44×44 pt (HIG) 는 24 CSS px 보다 크므로 별도로 본다

오용       **고르기를 잘못하는 것.** 코드는 멀쩡히 도는데 설계가 틀린 경우다

           x 이동을 Button 으로 만든다 — 새 탭 · 중간클릭 · 다운로드 · URL 공유가
             전부 깨진다. <a> 를 쓴다 (역할 절)
           x 한 화면에 primary 를 둘 이상 둔다 — 주된 행동 신호가 사라진다
             (새로 정함 — 근거는 용도 절의 실측)
           x 파괴적 동작을 primary 로 둔다 — negative 가 그 자리다 (토큰)
           x 취소를 negative 로 둔다 — 취소는 파괴가 아니다. secondary 다 (토큰)
           x 아이콘만 버튼(면 X)을 단독 CTA 로 쓴다 — 면이 없어 눌리는 줄 모른다.
             LNB 접힘/펼침처럼 **문맥이 이미 컨트롤임을 알려주는 자리** 전용이다 (0-43 · 0-47)
           x 쓸 수 없는 버튼을 만든다 — 활성으로 두고 눌렀을 때 사유를 보여준다 (0-44)

금지       **만들기를 잘못하는 것.** 구현 단계에서 걸러야 한다

           height 를 고정하지 마라 — min-height 를 쓴다
           고정 높이는 사용자가 행간을 키웠을 때 글자를 자르고 1.4.12 를 깬다
           outline: none 으로 포커스 링을 지우지 마라
           아이콘 전용 버튼에 이름을 생략하지 마라
           비활성 상태를 색만으로 표현하지 마라 — **우리 원칙이다.** 1.4.1/5.4.1 은
           비활성 표현을 다루지 않는다. 규정처럼 인용하지 마라 (0-43)
           --spacing-* 를 직접 고르지 마라 — --control-* 를 쓴다

미결       ① 해소 — inactive 라벨을 label.neutral 로 바꿨다 (0-32).
             **그 뒤 0-44 에서 inactive 상태 자체를 걷어냈다**
             브라우저 실측 10건 전부 통과, 최저 6.25:1. 토큰 변경 0건
           ~~② Floating Button 의 크기 단계~~ — **해소 (0-47).** `control.min-height` 를
             그대로 쓴다(32/40/48). Material FAB(40/56/96)·HIG(44pt)보다 작지만 두 접근성
             기준은 넘는다. 전용 눈금은 실제로 작다고 판명될 때 만든다 — 지금 만들면 추측이다
           ~~③ 아이콘 크기 토큰이 없다~~ — **해소 (0-51).** `iconSize` 를 Size 파운데이션에
             primitive 그룹으로 세웠다(16·20·24·28·32). `control.iconSize` 는 `spacing` 이 아니라
             이것을 별칭한다 — `spacing` 에 28 이 없어 5단계를 만들 수 없었다
```

### 8-2. Text Field

**APG 패턴: 없음** — 네이티브 `<input>` 이 규약이다. 새로 발명하지 않는다.

```
역할       네이티브 <input>. type 은 prop 으로 통과한다
           (text · email · password · tel · url · search · number)

용도       **한 줄짜리 자유 입력.** 값을 우리가 미리 알 수 없을 때 쓴다

           갈림길 — 아래에 걸리면 Text Field 가 아니다
           여러 줄        Text Area (8-3)
           정해진 목록     Dropdown (P1-5) — 고를 수 있는 값이 정해져 있으면 입력이 아니다
           찾기           Search (8-4) — 돋보기 · 지우기 · Enter 규약이 통째로 다르다
           둘 중 하나     Switch (P0-6) 또는 Checkbox (P0-5)

           **type 을 반드시 고른다** (토큰 아님 · 표준)
           — 모바일 키보드가 달라지고, 1.3.5 의 autocomplete 도 type 에 매여 있다.
             전부 text 로 받으면 둘 다 잃는다

           크기는 md(40) 기본 · lg(48). **sm 은 없다** — 근거는 크기 절에 있다

이름       <label for> ↔ <input id>. **id 는 useId 로 만든다** (KWCAG 8.1.1)
           보이는 라벨이 기본이다. placeholder 는 라벨이 아니다
           — 입력을 시작하면 사라져서 형식을 잊게 만든다

키보드     네이티브. Tab 진입 1회

상태       default / hover / focus / filled / readOnly / disabled / error
           error     → aria-invalid="true" + aria-describedby 로 메시지 연결
           helper    → aria-describedby
           **오류가 떠도 helper 를 유지한다** — 둘 다 describedby 에 넣는다
             형식 안내가 사라지면 3.3.2 를 잃는다
           우선순위   disabled > readOnly > error > 나머지
           **쓸 수 없는 입력은 readOnly 로 두거나 활성으로 두고 검증에서 사유를 알린다** (0-44)

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
           테두리 line.strong — line.* 중 유일하게 WCAG 1.4.11 의 3:1 을 만족한다(라이트 3.09 · 다크 3.49, DECISIONS 0-38)
           오류 status.negative · 포커스 focus-ring + interaction.focus
           타이포 라벨 label-md · 입력값 body-md · 도움말·오류 label-sm

플랫폼     웹   <input> · <label for> · aria-*
           iOS  UITextField + accessibilityLabel
                오류는 accessibilityValue 가 아니라 힌트로 전달한다

오용       **고르기를 잘못하는 것.** 코드는 도는데 사용자가 헤맨다

           x 여러 줄 입력을 Text Field 로 받는다 — Text Area 다 (8-3)
           x 값이 정해진 것을 Text Field 로 받는다 — Dropdown 이다. 오타를 사용자
             책임으로 떠넘기고, 검증 오류를 스스로 만들어낸다 (새로 정함)
           x 검색을 Text Field 로 만든다 — Search 의 규약(돋보기 · 접근 가능한 지우기 ·
             Enter)이 전부 빠진다. 특히 지우기가 없으면 값을 지우려고 백스페이스를
             길게 눌러야 한다 (8-4)
           x type 을 text 로만 쓴다 — 모바일 키보드와 autocomplete(1.3.5)를 함께 잃는다
           x 쓸 수 없는 입력을 disabled 로 둔다 — readOnly 로 두거나, 활성으로 두고
             검증에서 사유를 알린다 (0-44)

금지       placeholder 를 라벨로 쓰지 마라
           오류를 색만으로 표시하지 마라 (5.4.1)
           입력 중 실시간으로 빨갛게 만들지 마라
           height 를 고정하지 마라 — min-height (1.4.12)
           id 를 손으로 짓지 마라 (8.1.1)

미결       ① 지우기 버튼 · 문자 수 카운터는 이번 범위에 없다
           ~~② 테두리 색이 의미상 어긋난다~~ — 2026-09-03 해소(0-38). line.strong 으로 교체
```

**실측 (2026-09-03)**

| | 라이트 | 다크 | 기준 |
|---|---|---|---|
| 테두리 ¹ | 3.09 | 3.49 | 3:1 (1.4.11) |
| 오류 테두리 | 5.10 | 8.01 | 3:1 |
| 입력값 · 라벨 | 18.08 | 16.11 | 4.5:1 |
| placeholder · 도움말 | 4.73 | 4.93 | 4.5:1 |
| 오류 문구 · 필수 표시 | 5.10 | 8.01 | 4.5:1 |

¹ 테두리는 `line.strong` 이고 값은 **4개 면 최소**다(`checks/surfaces.mjs` 가 매 빌드 검사한다). 2026-09-03 에 `label.alternative`(4.73/4.93)에서 옮겼다 — 동작은 맞았지만 글자 색을 선 자리에 쓰고 있었다(0-38).

**`control.*` 공유 검증** — 폼 한 줄에서 입력 40px · 버튼 40px · 바닥 정렬 차 **0**.
미결 17 에서 *"폼 한 줄에서 높이가 맞아야 한다"* 를 근거로 역할 단위 이름을 택한 것이 실물로 확인됐다.

### 8-3. Text Area

**APG 패턴: 없음** — 네이티브 `<textarea>` 가 규약이다.

**8-2 Text Field 와 같은 규약을 따른다** — 검증 시점은 폼이 갖고, 오류가 떠도 도움말을 유지하며,
`id` 는 `useId` 로 만든다. **다른 점만 적는다.**

```
역할       네이티브 <textarea>

용도       **길이를 예측할 수 없는 여러 줄 서술.** 사유 · 메모 · 자기소개

           **줄바꿈이 값의 일부인가**로 가른다 (새로 정함)
           — 이유: textarea 는 Enter 를 값에 담는다. 개행이 필요 없는 자리에 쓰면
             사용자가 제출을 기대하고 Enter 를 눌렀을 때 줄만 바뀐다. 길이가 길어도
             개행이 의미 없으면 Text Field 다

           **입력값은 body-md(14px)를 쓴다** — 같은 폼 안의 Text Field 와 글자 크기를
           맞추기 위해서다. body-lg 가 아니다 (토큰: body-lg 의 $description)

크기       rows 로 정한다(기본 3). control.minHeight 를 쓰지 않는다
           — 한 줄 컨트롤이 아니다. min-height 는 lg(48px)를 하한으로만 잡는다

크기 조절  resize: vertical
           **가로를 막는 이유** — 가로로 늘리면 320px 리플로우(1.4.10)가 깨진다
           **세로를 허용하는 이유** — WCAG 2.5.7(끌기 동작)은 "사용자 에이전트가
           정하고 저작자가 수정하지 않은 기능"을 예외로 둔다. 축만 제한하고
           크기 조절 자체는 UA 에 맡긴다
           disabled 에서는 resize: none

글자 수    maxLength 를 주면 카운터가 함께 켜진다
           **제어 컴포넌트일 때만 표시한다** — 비제어면 값을 모르므로 틀린 숫자를
           보여주느니 감춘다
           aria-describedby 로 연결하고 **aria-live 를 쓰지 않는다**
           — 글자마다 발화하면 입력을 방해한다
           숫자는 tabular-nums 로 폭을 고정한다(미결 21 이 닫히면 토큰으로 옮긴다)

토큰       control.padding-inline / radius (Text Field 와 공유)
           테두리 line.strong — line.* 중 유일하게 3:1 을 만족한다(라이트 3.09 · 다크 3.49, DECISIONS 0-38)
           세로 여백은 spacing-10

오용       x 한 줄 입력을 Text Area 로 만든다 — Enter 가 제출이 아니라 줄바꿈이 된다
           x 개행이 의미 없는 값을 Text Area 로 받는다 — 길이는 이유가 되지 않는다
             (새로 정함 — 위 용도 절의 근거)
           x 비제어로 쓰면서 카운터를 기대한다 — 값을 모르므로 감춘다.
             틀린 숫자를 보여주느니 안 보여준다 (명세: 글자 수 절)
           x 자동 높이 확장을 JS 로 흉내낸다 — 사용자의 수동 크기 조절과 싸운다.
             `field-sizing: content` 가 widely available 이 될 때까지 기다린다 (미결 ①)

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
| ~~inactive 라벨~~ | — | ~~6.25~~ | 0-44 에서 상태를 걷어냈다 |

`rows` 반영 88px(3행) · 132px(5행) · `id` 중복 0(6개) · 라벨 미연결 0 ·
카운터 `describedby` 연결됨 · 입력 시 `0 / 200` → `11 / 200` 갱신 확인 ·
**320px 리플로우 통과**(가로 스크롤 없음, 넘치는 요소 0).

### 8-4. Search

**APG 패턴: 없음** — 네이티브 `<input type="search">` 가 규약이다.
자동완성 목록은 Dropdown(P1-5)의 몫이고 여기 없다.

**8-2 Text Field 와 같은 규약을 따른다.** 다른 점만 적는다.

```
용도       **사용자가 찾으러 온 자리.** 목록·표를 좁히는 필터도 포함한다
           찾는 게 아니면 Text Field 다 (8-2) — 돋보기는 "여기서 찾는다"는 신호라
           일반 입력에 붙이면 거짓말이 된다

           변형
           outline    기본. 자기 영역이 필요한 자리 — 페이지 본문 · 폼 안
           underline  헤더 · 툴바처럼 이미 상자가 많은 자리 (새로 정함)
                      — 이유: 테두리 4변 대신 밑변 하나라 상자를 하나 덜 만든다.
                        좌우 여백도 줄어든다(면이 없어 안쪽 여백이 의미를 잃으므로)

           **자동완성·최근 검색어가 필요하면 아직 쓸 수 없다** — 없다 (미결 ①).
           Dropdown(P1-5) 착수 시 합류한다

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
           테두리 line.strong — line.* 중 유일하게 3:1 을 만족한다(라이트 3.09 · 다크 3.49, DECISIONS 0-38)

오용       x 일반 입력을 Search 로 만든다 — 돋보기가 "찾는 곳"이라고 잘못 말한다
           x 검색 랜드마크(<search> · role="search")를 컴포넌트가 만들어줄 것으로 기대한다
             — 랜드마크는 페이지 구조라 소비자가 감싼다 (미결 ②)
           x 자동완성이 필요한 자리에 지금 쓴다 — 목록이 없다 (미결 ①)
           x 라벨 없이 placeholder 만 둔다 — hideLabel 로 감출 수는 있어도 없앨 수는 없다
             (이름 절)

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

### 8-5. Checkbox

**APG 패턴: Checkbox** — 키보드·ARIA 는 원문을 받아 대조했다.

```
역할       네이티브 <input type="checkbox">
           div 에 role="checkbox" 를 붙이지 않는다 — 네이티브가 Space 토글 ·
           forced-colors · 폼 제출을 전부 갖고 있다
           묶음은 <fieldset> + <legend>. APG 는 role="group" + aria-labelledby 도 허용한다

용도       **여러 개를 서로 독립적으로 켜고 끈다.** 한 항목이 다른 항목에 영향을 주지 않는다

           갈림길
           하나만 고른다           Radio (8-6)
           즉시 적용되는 켜기/끄기   Switch (P0-6) — 체크박스는 제출해야 반영되고
                                  스위치는 누르는 순간 반영된다 (새로 정함)
                                  — 이유: 되돌리는 방법이 다르다. 제출 전이면 취소가 답이고
                                    즉시 반영이면 다시 누르는 것이 답이다. 어느 쪽인지
                                    모르면 사용자는 자기가 한 일이 먹혔는지 알 수 없다
           고르는 대상이 카드       Select Button (8-8) — **동작은 이것과 같고 껍데기만 다르다**
           필터에서 여러 개         Chip Select (8-7)

이름       <label for> ↔ <input id>. **id 는 생성 함수로 만든다** (KWCAG 8.1.1)
           라벨 전체가 조작 영역이 된다 — 네이티브 <label> 의 기본 동작이라 우리가 만들지 않는다

키보드     Space   상태를 바꾼다
                   APG: "When the checkbox has focus, pressing the Space key
                   changes the state of the checkbox."
           Tab     **항목마다 1회.** Radio 와 다르다 — 묶음이 하나의 탭 정지가 아니다
           화살표  쓰지 않는다. 항목이 독립이라 묶음 안 이동이 없다

상태       unchecked / checked / mixed / disabled / error
           checked   네이티브 checked
           mixed     APG tri-state — 전부 체크면 checked · 일부면 mixed · 없으면 unchecked
                     **DOM 속성이 아니라 프로퍼티다.** el.indeterminate 로만 켜지고 HTML 로는
                     못 쓴다. aria-checked="mixed" 는 네이티브가 대신 노출한다
                     **모양은 :indeterminate 로 그리지 않는다** — 프로퍼티로만 켜지는 상태라
                     `~` 형제 선택자에 스타일 무효화가 걸리지 않았다. 접근성은 프로퍼티가,
                     모양은 data-mixed 속성이 맡는다 (0-56)
                     **하위 항목의 요약이지 사용자가 고르는 세 번째 값이 아니다**
           error     aria-invalid + aria-describedby. 묶음 단위 오류는 fieldset 에 건다
           우선순위  disabled > error > 나머지

조작영역   **시각 크기와 조작 영역을 분리한다.** 네모는 --control-box-size(20px)이고
           조작 영역은 ≥24×24 = --control-min-target (WCAG 2.5.8 · KWCAG 6.1.3)
           라벨까지 포함되므로 실제로는 훨씬 넓다

크기       단계 없음. 한 크기다 — 미결 ① 참조

토큰       네모        --control-box-size (20px)   ← Radio · Select Button 과 공유
           미선택 테두리 line.strong                 1.4.11 의 3:1 을 만족하는 유일한 line 단계
           선택 면      primary.normal
           선택 체크    inverse.label                Button primary 와 같은 짝
           비활성      interaction.disable + label.disable
           포커스      focus-ring + interaction.focus  (offset 필수 — 0-46)
           라벨        label-md (14)
           간격        control.gap
           **새 색 토큰 없이 닫힌다** — 전부 기존 값이다

플랫폼     웹   <input type="checkbox"> · <label for> · fieldset/legend
           iOS  UISwitch 가 아니다 — 체크박스는 제출형이라 커스텀 컨트롤 +
                accessibilityTraits 로 만든다. mixed 는 iOS 에 대응이 없어
                "부분 선택" 을 accessibilityValue 로 말해 준다

오용       x 하나만 고르는 자리에 쓴다 — Radio 다 (8-6)
           x 즉시 반영되는 설정에 쓴다 — Switch 다 (새로 정함, 위 용도 절 근거)
           x mixed 를 사용자가 고를 수 있는 세 번째 값으로 쓴다 — 하위 항목의 요약이다
           x 약관 동의 오류를 색으로만 알린다 — KWCAG 5.4.1

금지       div + role="checkbox" 로 만들지 마라
           라벨을 <label for> 없이 옆 텍스트로만 두지 마라
           indeterminate 를 HTML 속성으로 쓰려 하지 마라 — 프로퍼티다
           네모 크기를 조작 영역으로 착각하지 마라 — 20px 은 24 미만이다
           id 를 손으로 짓지 마라 (8.1.1)

미결       ① **크기 단계를 두지 않았다.** Text Field 가 sm 을 안 낸 것과 같은 이유로
             지금은 한 크기다. 조밀한 표 안에서 20px 이 큰지는 Table(P2-1) 에서 본다
           ② **`aria-checked="mixed"` 노출을 눈으로 확인하지 못했다.** HTML-AAM 이
             `indeterminate` → `mixed` 매핑을 규정하고 프로퍼티가 켜진 것은 확인했지만,
             검증 페이지의 접근성 트리 도구가 체크 상태를 보여주지 않는다.
             **스크린리더로 직접 들어봐야 한다**
```

**실측 (2026-09-04)**

| | 라이트 | 다크 | 기준 |
|---|---|---|---|
| 미선택 테두리 | 3.24 | 3.59 | 3:1 (1.4.11) |
| 오류 테두리 | 5.10 | 8.01 | 3:1 |
| 선택 면 | 13.39 | 16.11 | — |
| 선택 체크 · 부분선택 대시 | 12.50 | 16.89 | 3:1 (비텍스트) |
| 라벨 | 18.08 | 16.11 | 4.5:1 |

조작 영역 11개 전부 **24×24**(24 미만 0건) · 네모 20×20 · 두 중심 어긋남 0 ·
`id` 중복 0 · `<label for>` 미연결 0 · 도움말·오류가 `aria-describedby` 로 연결됨 ·
오류 행만 `aria-invalid="true"` · 두 줄 라벨에서 네모가 첫 줄에 붙음.

### 8-6. Radio

**APG 패턴: Radio Group** — 키보드·ARIA 는 원문을 받아 대조했다.

**8-5 Checkbox 와 같은 규약을 따른다** — 네이티브를 쓰고, `id` 는 생성 함수로 만들며,
네모의 시각 크기와 조작 영역을 분리한다. **다른 점만 적는다.**

```
역할       네이티브 <input type="radio">. **같은 name 을 공유한다**
           묶음은 <fieldset> + <legend> — legend 가 묶음의 접근 이름이 된다
           div 에 role="radiogroup" / role="radio" 를 붙이지 않는다 —
           네이티브가 **화살표 이동 · roving tabindex · Space 를 전부 갖고 있다**

용도       **여럿 중 하나만 고른다.** 새로 고르면 이전 선택이 풀린다

           갈림길
           여러 개를 켠다       Checkbox (8-5)
           고르는 대상이 카드    Select Button (8-8) — 동작은 이것과 같고 껍데기만 다르다
           필터에서 하나        Chip Select (8-7)
           선택지가 많다        Dropdown (P1-5) (새로 정함)
                              — 이유: 라디오의 값은 선택지를 **전부 펼쳐 보여주는 것**이다.
                                화면에 다 못 펼칠 만큼 많으면 그 값이 이미 사라졌고,
                                자리만 먹는다

           **선택을 비울 수 있어야 하면 라디오가 아니다** — 사용자는 한 번 고른 라디오를
           네이티브 조작으로 되돌릴 수 없다. "선택 안 함" 이 필요하면 **그것도 선택지로 넣는다**

이름       묶음  <legend>       · 항목  <label for> ↔ <input id>
           name 은 묶음이 하나로 준다 — **name 이 다르면 화살표 이동이 동작하지 않는다.**
           라디오는 혼자 쓸 수 없다: 묶음 컴포넌트가 name 을 소유한다

키보드     **전부 네이티브가 준다. 우리가 만들지 않는다.**
           Tab     묶음 전체가 **탭 정지 1개.** 체크박스(항목마다 1개)와 가장 다른 점이다
                   APG: "If a radio button is checked, focus is set on the checked
                   button. If none of the radio buttons are checked, focus is set on
                   the first radio button in the group."
           Space   "Checks the focused radio button if it is not already checked."
           ↓ · →   "Move focus to the next radio button in the group, uncheck the
                   previously focused button, and check the newly focused button.
                   If focus is on the last button, focus moves to the first button."
           ↑ · ←   같은 규칙, 반대 방향
           **이동과 선택이 함께 일어난다** — 화살표로 훑기만 할 수 없다

상태       unchecked / checked / disabled / error
           **mixed 가 없다** — 부분 선택이라는 개념이 성립하지 않는다
           error   묶음 단위다. fieldset 에 aria-describedby 로 붙인다
                   — "하나를 고르세요" 는 항목이 아니라 묶음의 문제다
           우선순위  disabled > error > 나머지

모양       네모가 아니라 **원**이다 — radius.circle
           선택 표시는 체크가 아니라 **가운데 점**이다
           면·점의 색은 Checkbox 와 같게 쓴다 — 둘이 형제로 보여야 한다

토큰       원          --control-box-size (20px) + --radius-circle   ← Checkbox 와 공유
           나머지      Checkbox 와 동일 (line.strong · primary.normal · inverse.label ·
                      interaction.disable · focus-ring · label-md · control.gap)
           **새 토큰 없이 닫힌다**

플랫폼     웹   <input type="radio"> · fieldset/legend · 공유 name
           iOS  UISegmentedControl 이 아니다 — 세로 목록이면 테이블 셀 +
                accessibilityTraits.selected 로 만든다

오용       x 여러 개를 고를 수 있는 자리에 쓴다 — Checkbox 다 (8-5)
           x 선택을 비울 수 있어야 하는데 라디오로 만든다 — 되돌릴 수 없다.
             "선택 안 함" 을 선택지로 넣는다
           x 선택지가 화면에 다 안 들어가는데 라디오로 만든다 — Dropdown 이다 (새로 정함)
           x 항목마다 name 을 다르게 준다 — 화살표 이동이 죽고 여러 개가 동시에 켜진다
           x 오류를 항목에 건다 — 묶음의 문제다

금지       div + role="radio" 로 만들지 마라 — 화살표 이동을 직접 구현하게 된다
           fieldset 없이 라디오만 나열하지 마라 — 묶음에 이름이 없어진다
           화살표 키를 가로채지 마라 — 네이티브 동작을 덮어쓴다
           id 를 손으로 짓지 마라 (8.1.1)

미결       ① **항목별 설명(aria-describedby)을 넣지 않았다.** 지금은 묶음 단위 도움말·오류만
             있다. 항목마다 부연이 필요한 자리는 Select Button(8-8)이 먼저 만난다
```

**실측 (2026-09-04)**

APG 키보드 5종을 **실제 키 입력으로** 확인했다. 스크립트로 `focus()` 를 준 것이 아니라
브라우저에 클릭·키를 넣어 네이티브 동작을 그대로 봤다.

| 확인한 것 | 결과 |
|---|---|
| Tab 진입 — 체크된 항목으로 | 3번째를 선택해 두고 Tab → `pickup` 에 포커스 ✔ |
| ↓ 이동 + 선택 동시 | `normal → fast → pickup`, 포커스와 선택이 항상 같음 ✔ |
| 마지막에서 ↓ | 첫 항목으로 감쌈 ✔ |
| 첫 항목에서 ↑ | 마지막으로 감쌈 ✔ |
| → 도 ↓ 와 같게 | 같은 방향으로 이동 ✔ |
| Tab 이탈 | **한 번에** 묶음 밖으로 ✔ (체크박스와 다른 지점) |

| | 라이트 | 다크 | 기준 |
|---|---|---|---|
| 미선택 테두리 | 3.24 | 3.59 | 3:1 (1.4.11) |
| 오류 테두리 | 5.10 | 8.01 | 3:1 |
| 선택 면 | 13.39 | 16.11 | — |
| 선택 점 | 12.50 | 16.89 | 3:1 (비텍스트) |
| 라벨 · legend | 18.08 | 16.11 | 4.5:1 |

묶음 6개 전부 `<fieldset>` · 항목 13개 조작 영역 **24×24**(24 미만 0건) · 원 20×20 ·
묶음 안 `name` 공유 · 묶음끼리 `name` 중복 0 · `id` 중복 0 · `<label for>` 미연결 0 ·
도움말·오류가 fieldset 의 `aria-describedby` 로 연결됨.

## 가져다 쓰기

소비 경로는 넷이다. 대부분의 컴포넌트는 **CSS 변수와 타이포 클래스**만 쓰면 된다.

| 경로 | 무엇이 나오나 | 언제 |
|---|---|---|
| `tokens/tokens.css` | CSS 변수 + 타이포 클래스 | 웹 컴포넌트의 기본 |
| `tokens/tokens.js` | 해석된 값 (문자열) | CSS 를 못 읽는 곳 — 문서 · 네이티브 · 차트 |
| `tokens/dist/tokens.{light,dark}.json` | 테마별 단일 DTCG 문서 | 제3자 DTCG 도구 · Figma 플러그인 |
| `tokens/*.json` | 소스 4개 | 토큰을 **고칠 때만**. 소비용이 아니다 |

### 변수 이름 규칙

토큰 경로를 kebab-case 로 이은 것이다. 숫자 앞에 하이픈이 들어간다.

```
color.label.normal   →  --color-label-normal
spacing.16           →  --spacing-16
shadow.sm            →  --shadow-sm
```

### 번들은 확장 없이도 읽힌다

`dist/` 의 반투명색은 스펙 `alpha` 로 해소돼 있다. **`$extensions` 를 통째로 무시해도 값이
올바르다.** 소스는 참조를 유지하지만(불투명도를 한 곳에서 관리하려고) 번들은 배포용이라
값을 완성시킨다.

### 하드코딩은 검사가 막는다

이 문서는 "쓰지 마라"고 설득할 뿐이다. 막는 것은 검사다.

```bash
npm run lint:hardcode     # 토큰 대신 값을 직접 쓴 곳을 찾는다
npm run check             # 빌드 + DTCG + 대비 + 하드코딩 전부
```

CSS 선언(`속성: 값`)만 본다 — `.css` 전체, `.html` 의 `<style>` 과 `style=`,
`.jsx`·`.tsx`·`.vue`·`.svelte` 전 줄. **템플릿 보간(`${...}`)과 `var()` 는 검사하지 않는다** —
토큰에서 계산된 값이다.

| 규칙 | 잡는 것 |
|---|---|
| `color` | `color`·`background`·`border`·`box-shadow` 등에 hex·rgb·hsl 리터럴 |
| `typo` | `font-size`·`line-height`·`letter-spacing`·`font-weight` 에 리터럴 |
| `dim` | `padding`·`margin`·`gap`·`border-radius`·`inset` 등에 px·rem 리터럴 |

`0`·`auto`·`50%`·`100%`·`1px` 은 구조적 상수라 통과한다.

정당한 예외는 **이유와 함께** 표시한다. 이유 없는 예외는 두지 않는다.

```css
.widget { padding: 13px; } /* ds-allow: 외부 위젯 규격에 맞춘 값 */
```

### 새 값이 필요할 때

1. **먼저 찾는다.** 같은 값·역할이 이미 있는지 확인한다.
2. **primitive 에 추가한다.** 원시 값은 여기에만 산다.
3. **semantic·typography 에서 별칭으로 참조한다.** 값 복붙 금지.
4. **`npm run build:tokens`** — 빌드가 가드를 돌리고 이 문서를 다시 만든다.
5. 색을 바꿨으면 **대비를 재검증**한다.
