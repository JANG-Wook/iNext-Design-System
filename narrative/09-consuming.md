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
