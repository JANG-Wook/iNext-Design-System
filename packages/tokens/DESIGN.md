---
name: iNext Design System
package: "@infobank/ds-tokens"
version: "0.1.0"
spec: DTCG 2025.10 (Format · Color Module, Final Community Group Report)
source: primitive.json + semantic.light.json + semantic.dark.json + typography.json (packages/tokens)
generatedBy: tokens/build-design-md.mjs — 직접 편집하지 않는다
themes: [light, dark]
scope: 색·그림자 66 · 그 외 185 · 타이포 클래스 35. primitive 팔레트는 CSS 로 나가지 않으므로 제외한다.
usage: usedBy 는 packages/react/src 를 스캔한 **실제 사용처**다(검증 페이지 dev/ 제외). note 는 **의도**이고 usedBy 는 **현실**이라, 둘이 어긋나면 둘 중 하나가 틀린 것이다. 지금 53개 토큰이 쓰이고 있다.
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
  "base.label-lg":
    class: label-lg
    fontSize: "1rem"
    lineHeight: 1.5
    fontWeight: 500
    letterSpacing: "-0.01rem"
    note: UI 라벨(대). Button(md·lg), Bottom Sheet CTA. PC 권장. 기본 medium, 강조는 label-lg-strong.
    usedBy: [Button]
  "base.label-lg-strong":
    class: label-lg-strong
    fontSize: "1rem"
    lineHeight: 1.5
    fontWeight: 600
    letterSpacing: "-0.01rem"
    note: label-lg 의 강조 변형(semibold). 용도 동일, 굵기만 다르다.
  "base.label-md":
    class: label-md
    fontSize: "0.875rem"
    lineHeight: 1.428571
    fontWeight: 500
    letterSpacing: "0rem"
    note: UI 라벨(기본) — 라벨의 기준값. Button·Text Button, Tab, Dropdown, Search, Text Field 레이블, Pagination. 기본 medium, 강조는 label-md-strong.
    usedBy: [Button, Search, TextArea, TextField]
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
    usedBy: [Search, TextArea, TextField]
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
  label-normal:
    light: "#161617"
    dark: "#F7F7F8"
    usedBy: [Button, Field, Search, TextArea, TextField]
  label-neutral:
    light: rgba(46, 47, 50, 0.88)
    dark: rgba(193, 195, 199, 0.88)
    usedBy: [Search, TextArea, TextField]
  label-alternative:
    light: rgba(55, 55, 58, 0.7)
    dark: rgba(173, 176, 181, 0.74)
    usedBy: [Button, Field, Search, TextArea, TextField]
  label-assistive:
    light: rgba(55, 55, 58, 0.28)
    dark: rgba(173, 176, 181, 0.28)
  label-disable:
    light: rgba(55, 55, 58, 0.16)
    dark: rgba(152, 155, 161, 0.16)
    usedBy: [Button, Search, TextArea, TextField]
  bg-normal:
    light: "#FFFFFF"
    dark: "#1A1B1C"
    usedBy: [Search, TextArea, TextField]
  bg-normalAlternative:
    light: "#F7F7F8"
    dark: "#0E0E0F"
  bg-elevated:
    light: "#FFFFFF"
    dark: "#212124"
  bg-elevatedAlternative:
    light: "#F7F7F8"
    dark: "#131314"
  bg-transparent:
    light: rgba(255, 255, 255, 0.08)
    dark: rgba(33, 33, 36, 0.6)
  bg-transparentAlternative:
    light: rgba(255, 255, 255, 0.28)
    dark: rgba(33, 33, 36, 0.6)
  line-normal:
    light: rgba(113, 115, 121, 0.22)
    dark: rgba(113, 115, 121, 0.32)
    note: 기본 구분선. 4개 면 최소 대비 라이트 1.31 · 다크 1.43 — **컨트롤 경계로 쓸 수 없다**(WCAG 1.4.11 의 3:1 미달). 이웃 콘텐츠를 나누는 자리이고, 그 근거인 KWCAG 5.4.4 에는 수치 기준이 없다.
  line-strong:
    light: rgba(113, 115, 121, 0.8)
    dark: rgba(193, 195, 199, 0.52)
    note: "**컨트롤 경계선.** 입력·체크박스·라디오처럼 테두리가 곧 컴포넌트의 식별 정보인 자리에 쓴다 — `line.*` 일곱 중 WCAG 1.4.11 의 3:1 을 만족하는 **유일한 단계**다(4개 면 최소 라이트 3.09 · 다크 3.49 — `checks/surfaces.mjs` 가 매 빌드 검사한다). 구분선에는 `normal` 이하를 쓴다(DECISIONS 0-38)."
    usedBy: [Button, Search, TextArea, TextField]
  line-neutral:
    light: rgba(113, 115, 121, 0.16)
    dark: rgba(113, 115, 121, 0.28)
    note: 약한 구분선. 4개 면 최소 대비 라이트 1.21 · 다크 1.35 — 컨트롤 경계로 쓸 수 없다.
  line-alternative:
    light: rgba(113, 115, 121, 0.08)
    dark: rgba(113, 115, 121, 0.22)
    note: 가장 약한 구분선. 4개 면 최소 대비 라이트 1.10 · 다크 1.25 — 컨트롤 경계로 쓸 수 없다.
    usedBy: [Button]
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
  fill-alternative:
    light: rgba(113, 115, 121, 0.05)
    dark: rgba(113, 115, 121, 0.12)
    usedBy: [TextArea, TextField]
  fill-strong:
    light: rgba(113, 115, 121, 0.16)
    dark: rgba(113, 115, 121, 0.28)
    usedBy: [Button]
  interaction-inactive:
    light: "#989BA1"
    dark: "#595B61"
    note: 비활성 컨트롤의 색 — 아이콘·테두리 같은 전경, 그리고 **채워진 버튼이 inactive 일 때의 면**. 면으로 쓰는 것은 채워진 variant 가 실루엣을 잃지 않게 하려는 것이고, 이 면 위에서 4.5:1 을 넘는 라벨은 `label.normal`(6.49/6.34) 하나뿐이다(0-43). 활성 primary 와 4.81/6.34 로 벌어져 상태가 명도로 읽힌다. 비활성 요소라 대비 검사에서 제외된다(KWCAG 5.4.3 예외).
    usedBy: [Button]
  interaction-disable:
    light: "#F4F4F4"
    dark: "#2E2F32"
    note: 비활성 컨트롤의 면색 — 눌리지 않는 버튼·입력 필드의 배경. 위에 올라가는 글자는 `label.disable` 이며, 둘 다 대비 검사 대상이 아니다.
    usedBy: [Button, Search, TextArea, TextField]
  interaction-focus:
    light: "#1266E8"
    dark: "#4D8EFA"
    note: 키보드 포커스 링 색. KWCAG 6.1.2(초점은 시각적으로 구별) · WCAG 2.4.7 대응. 배경 대비 3:1 이상을 유지한다.
    usedBy: [Button, Search, TextArea, TextField]
  interaction-overlay-darken-hovered:
    light: rgba(0, 0, 0, 0.05)
    dark: rgba(0, 0, 0, 0.05)
    note: 밝은 면 위 hover 상태 오버레이. 면을 어둡게 한다. 강도는 `interaction.opacity.normal.hovered` 를 따른다.
    usedBy: [Button, Search]
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
    usedBy: [Button, Search]
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
    usedBy: [Button]
  primary-strong:
    light: "#212124"
    dark: "#E9EAEB"
  primary-heavy:
    light: "#161617"
    dark: "#E0E1E3"
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
    usedBy: [Button, Field, Search, TextArea, TextField]
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
  accent-fg-redOrange:
    light: "#BD4811"
    dark: "#F5601A"
  accent-fg-orange:
    light: "#A25D11"
    dark: "#D27A1A"
  accent-fg-lime:
    light: "#617611"
    dark: "#7F9A19"
  accent-fg-green:
    light: "#137F2C"
    dark: "#1CA53B"
  accent-fg-cyan:
    light: "#14798C"
    dark: "#1D9EB6"
  accent-fg-lightBlue:
    light: "#1374A9"
    dark: "#1C98DB"
  accent-fg-blue:
    light: "#1266E8"
    dark: "#4D8EFA"
  accent-fg-violet:
    light: "#6B56E7"
    dark: "#8A81FA"
  accent-fg-purple:
    light: "#A042CB"
    dark: "#C467F1"
  accent-fg-pink:
    light: "#BB33A6"
    dark: "#E25ACB"
  inverse-primary:
    light: "#F7F7F8"
    dark: "#2E2F32"
  inverse-background:
    light: "#1A1B1C"
    dark: "#FFFFFF"
  inverse-label:
    light: "#F7F7F8"
    dark: "#161617"
    usedBy: [Button]
  static-white:
    light: "#FFFFFF"
    dark: "#FFFFFF"
  static-black:
    light: "#000000"
    dark: "#000000"
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
  16:
    value: "1rem"
    note: "**가장 많이 쓰인다(7곳).** `title-sm` · `body-lg` · `label-lg` · `link-lg`. 기본 본문 크기이자 작은 제목 크기다."
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
    usedBy: [Field]
  14-22:
    value: 1.571429
    note: "14px 글자에 22px 행간. 3개 토큰이 쓴다."
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
    usedBy: [Field]
  8:
    value: "8px"
    usedBy: [Field, Search]
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
radius:
  0:
    value: "0px"
    note: 모서리 없음. 각진 요소.
  4:
    value: "4px"
    note: 작은 버튼·태그·체크박스 같은 매우 작은 요소.
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
    usedBy: [Button, Search]
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
    usedBy: [Button, Field, Search, TextArea, TextField]
  8:
    value: "8px"
    note: 굵은 구분선. 섹션을 크게 가르는 띠. 색은 line 토큰보다 면 색(bg.normalAlternative 등)이 자연스럽다.
focusRing:
  width:
    value: "2px"
    note: 링 두께. WCAG 2.4.13(AAA) 의 2px 기준을 따른다.
    usedBy: [Button, Search, TextArea, TextField]
  offset:
    value: "2px"
    note: 요소와 링 사이 간격. 링이 컴포넌트 색 위에 겹치지 않게 한다.
    usedBy: [Button, Search, TextArea, TextField]
duration:
  0:
    value: "[object Object]"
    note: 지연 없음. DTCG `transition` 은 `delay` 를 필수로 요구하므로 지연이 없어도 쓸 값이 필요하다. 즉시 완료에도 쓴다.
    usedBy: [Button]
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
    usedBy: [Button]
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
  minTarget:
    value: "24px"
    note: "조작 영역 하한 24px — WCAG 2.5.8. **KWCAG 6.1.3(대각 6.0mm)을 포함한다**: CSS 기준 픽셀(1px=1/96in)에서 24×24 의 대각은 8.98mm 이고, 6.0mm 대각을 만족하는 최소 정사각은 16.04px 다. **24 만 지키면 두 기준이 함께 닫힌다**(DECISIONS 0-30). 시각 크기가 이보다 작은 컨트롤은 히트박스를 이 값까지 넓힌다."
    usedBy: [Search]
transition:
  control:
    value: "[object Object]"
    note: 컨트롤 상태 전환 — hover·press 오버레이, 보더 색. 100ms · standard. 가장 빈번한 전환이라 가장 짧다.
    usedBy: [Button, Search, TextArea, TextField]
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
