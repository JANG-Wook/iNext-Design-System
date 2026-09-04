/* 검증 전용 페이지 — 배포물이 아니다. 브라우저로 실측하려고 둔다.
 *
 * **이 페이지가 지켜야 할 것 셋.** 셋 다 실측이 거짓말한 사고에서 나왔다(0-49).
 *   ① 페이지가 자기 배경을 칠한다 — 안 칠하면 라이트 토큰이 브라우저의 어두운
 *      바탕 위에 얹혀 outline·text 가 사라진다 (0-33)
 *   ② 테마는 스크립트로 바꾸지 않는다 — data-theme 을 JS 로 바꾸면 재계산 전 값을
 *      읽는다. 브라우저의 colorScheme 을 바꾸고 새로고침한다 (0-34)
 *   ③ 재는 대상을 눌리는 곳에 두지 않는다 — 칸이 줄면 라벨이 줄바꿈해 높이가
 *      늘어난다. 컴포넌트 문제가 아닌데 컴포넌트를 의심하게 된다 (0-48)
 *
 * **대비·합성은 손으로 짜지 않는다.** `measure.js` 를 쓴다 — 즉석 코드가 네 번
 * 틀렸고 그중 둘은 같은 실수였다. 콘솔에서는 `window.__ds` 로 쓴다.
 */
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles.css'
import './dev.css'
import Button from '../Button/Button.jsx'
import TextField from '../TextField/TextField.jsx'
import TextArea from '../TextArea/TextArea.jsx'
import Search from '../Search/Search.jsx'
import Checkbox from '../Checkbox/Checkbox.jsx'
import Radio from '../Radio/Radio.jsx'
import RadioGroup from '../Radio/RadioGroup.jsx'
import ChipGroup from '../Chip/ChipGroup.jsx'
import ChipSelect from '../Chip/ChipSelect.jsx'
import ChipFilter from '../Chip/ChipFilter.jsx'
import ChipInput from '../Chip/ChipInput.jsx'
import Switch from '../Switch/Switch.jsx'
// 실제 아이콘으로 본다 — 원형 플레이스홀더는 획 두께·여백이 진짜와 달라
// 정렬과 시각 무게를 잘못 판단하게 만든다(0-47).
import { Download, ExternalLink, Settings, PanelLeftClose, Plus } from 'lucide-react'
import * as measure from './measure.js'

// 콘솔에서 바로 쓴다 — 즉석으로 합성·대비를 다시 짜지 않는다(0-49)
if (typeof window !== 'undefined') window.__ds = measure

const VARIANTS = ['primary', 'secondary', 'outline', 'text', 'negative']
const STATES = [
  { key: '기본',     props: {} },
  { key: 'disabled', props: { disabled: true } },
  { key: 'loading',  props: { loading: true } },
]
const SIZES = ['sm', 'md', 'lg']
// 아이콘 버튼 5종. 다섯 다 이미 있던 조합이고 이름만 붙였다 — 새 prop 은 없다(0-47).
// 아이콘은 각 종류의 실제 용도에 맞춰 골랐다. 뒤 아이콘이 ExternalLink 인 것은
// 그 자리가 KWCAG 7.2.1(새 창 예고) 때문에 남아 있기 때문이다.
const ICON_KINDS = [
  { key: '앞 아이콘',    label: '다운로드', props: { leadingIcon: <Download /> } },
  { key: '뒤 아이콘',    label: '새 창에서 열기', props: { trailingIcon: <ExternalLink /> } },
  { key: '아이콘만 면O',  label: '설정',    props: { iconOnly: true, leadingIcon: <Settings /> } },
  { key: '아이콘만 면X',  label: '메뉴 접기', props: { iconOnly: true, leadingIcon: <PanelLeftClose />, variant: 'text' } },
  { key: '플로팅',       label: '추가',    props: { iconOnly: true, circle: true, leadingIcon: <Plus /> } },
]

/* WCAG 1.4.12 는 사용자가 아래 값을 적용해도 콘텐츠가 잘리지 않을 것을 요구한다.
   실제 검사는 사용자 스타일시트를 !important 로 얹어 확인하므로 같은 방식으로 만든다. */
function toggleTextSpacing() {
  const id = 'ds-text-spacing-test'
  const on = document.getElementById(id)
  if (on) return on.remove()
  const el = document.createElement('style')
  el.id = id
  /* ds-allow: 1.4.12 검사가 요구하는 사용자 재정의값 자체다. 토큰으로 대체할 수 없다. */
  el.textContent = '* { line-height: 1.5 !important; letter-spacing: 0.12em !important;' +
                   ' word-spacing: 0.16em !important; }'
  document.head.appendChild(el)
}

/* 측정기를 믿을 수 있는지 먼저 본다. 여기가 빨간색이면 아래 숫자를 믿지 않는다. */
function MeasureSelfCheck() {
  const r = measure.selfCheck()
  return (
    <p className={`dev-selfcheck label-sm${r.ok ? '' : ' dev-selfcheck--fail'}`}>
      측정기 자기검사 {r.ok ? `✔ ${r.results.length}건 통과` : `✘ 실패`}
      {!r.ok && r.results.filter(x => !x.ok).map(x => ` · ${x.name}: ${x.got}`)}
    </p>
  )
}

// 칩 크기 셋 — control.* 사다리의 xs~md 구간이다(0-59).
const CHIP_SIZES = [
  { size: 'xs', px: '24px · 라벨 12' },
  { size: 'sm', px: '32px · 라벨 14  ← 기본' },
  { size: 'md', px: '40px · 라벨 15' },
]

/* 칩 데모 — Filter 는 열림 상태를, Input 은 목록을 소비자가 갖는다.
   그 "소비자" 자리를 여기서 흉내낸다. */
function ChipDemo({ size }) {
  const [open, setOpen] = useState(false)
  const [sort, setSort] = useState(null)
  const [people, setPeople] = useState(['김부장', '이차장', '박대리'])
  return (
    <>
      <div className="dev-row">
        <ChipFilter size={size} label="가격" />
        <ChipFilter size={size} label="정렬" selected={sort} open={open}
                    onClick={() => { setOpen(o => !o); if (!sort) setSort('리뷰 많은 순') }} />
        <ChipFilter size={size} label="지역" selected="서울" />
        <ChipFilter size={size} label="비활성" disabled />
      </div>
      <div className="dev-row">
        {people.map(p => (
          <ChipInput key={p} size={size} label={p}
                     onClick={() => {}}
                     onRemove={() => setPeople(v => v.filter(x => x !== p))} />
        ))}
        <ChipInput size={size} label="짜장면" onClick={() => {}} />
        {people.length === 0 && <span className="label-sm">전부 지웠다</span>}
      </div>
    </>
  )
}

function App() {
  const [bio, setBio] = useState('')
  return (
    <main className="dev-page">
      <MeasureSelfCheck />
      <button onClick={() => {
        const r = document.documentElement
        r.dataset.theme = r.dataset.theme === 'dark' ? 'light' : 'dark'
      }}>테마 전환</button>

      <h2>variant × size</h2>
      {SIZES.map(s => (
        <div key={s} className="dev-row">
          <code className="dev-key">{s}</code>
          {VARIANTS.map(v => <Button key={v} variant={v} size={s} label={v} />)}
        </div>
      ))}

      {/* variant × 상태 전면표 — 한 variant 가 상태를 넘어갈 때 모양이 어떻게
          변하는지 가로로 읽는다. 세로로는 같은 상태끼리 구별되는지 본다. */}
      <h2>variant × 상태</h2>
      <div className="dev-row dev-matrix dev-head">
        <code className="dev-key" />
        {STATES.map(st => <code key={st.key} className="dev-cell">{st.key}</code>)}
      </div>
      {VARIANTS.map(v => (
        <div key={v} className="dev-row dev-matrix">
          <code className="dev-key dev-key-wide">{v}</code>
          {STATES.map(st => (
            <span key={st.key} className="dev-cell">
              <Button variant={v} label="레이블" {...st.props} />
            </span>
          ))}
        </div>
      ))}

      {/* 아이콘 버튼 5종 × 3크기 — 가로로 크기가 커지는지, 세로로 종류가 구별되는지 본다.
          정사각·조작영역·아이콘 크기를 여기서 실측한다(0-47). */}
      <h2>아이콘 버튼 5종 × 크기</h2>
      <div className="dev-row dev-matrix dev-head">
        <code className="dev-key dev-key-wide" />
        {SIZES.map(s => <code key={s} className="dev-cell">{s}</code>)}
      </div>
      {ICON_KINDS.map(k => (
        <div key={k.key} className="dev-row dev-matrix">
          <code className="dev-key dev-key-wide">{k.key}</code>
          {SIZES.map(s => (
            <span key={s} className="dev-cell">
              <Button size={s} label={k.label} {...k.props} />
            </span>
          ))}
        </div>
      ))}

      <h2>Text Field</h2>
      <div className="dev-stack">
        <TextField label="이름" placeholder="홍길동" />
        <TextField label="이메일" type="email" required autoComplete="email"
                   helper="회사 메일 주소를 입력합니다." />
        <TextField label="전화번호" type="tel" required
                   helper="숫자만 입력합니다."
                   error="숫자만 입력할 수 있습니다. 하이픈을 빼고 다시 입력하세요." />
        <TextField label="큰 크기" size="lg" helper="lg 단계" />
        <TextField label="읽기 전용" readOnly defaultValue="변경할 수 없음" />
        <TextField label="disabled" disabled defaultValue="포커스도 안 된다" />
      </div>

      <h2>Text Area</h2>
      <div className="dev-stack">
        <TextArea label="메모" placeholder="자유롭게 적습니다" />
        <TextArea label="자기소개" required maxLength={200} value={bio} onChange={e => setBio(e.target.value)}
                  helper="200자까지 입력할 수 있습니다." />
        <TextArea label="사유" rows={5} error="사유를 10자 이상 입력하세요." defaultValue="짧음" />
        <TextArea label="읽기 전용" readOnly defaultValue={'변경할 수 없음\n두 번째 줄'} />
        <TextArea label="disabled" disabled defaultValue="포커스도 안 된다" />
      </div>

      <h2>Search</h2>
      <div className="dev-stack">
        <Search label="검색" placeholder="검색어를 입력하세요" />
        <Search label="밑줄형" variant="underline" placeholder="밑줄형" defaultValue="지울 수 있음" />
        <Search label="라벨 감춤" hideLabel placeholder="라벨이 화면에는 없다" defaultValue="X 보임" />
        <Search label="도움말" helper="두 글자 이상 입력하세요." />
        <Search label="오류" error="검색어가 너무 짧습니다." defaultValue="가" />
        <Search label="disabled" disabled defaultValue="포커스도 안 된다" />
      </div>

      {/* Checkbox — 네모(20)와 조작 영역(24)이 다른 값이라 둘 다 잰다.
          mixed 는 프로퍼티라 화면에서 실제로 켜지는지 봐야 한다(8-5). */}
      <h2>Checkbox</h2>
      <div className="dev-stack">
        <Checkbox label="기본" />
        <Checkbox label="선택됨" defaultChecked />
        <Checkbox label="부분 선택 (mixed)" indeterminate />
        <Checkbox label="도움말이 있다" helper="선택하면 알림을 받습니다." />
        <Checkbox label="오류" error="약관에 동의해야 계속할 수 있습니다." />
        <Checkbox label="disabled" disabled />
        <Checkbox label="disabled + 선택됨" disabled defaultChecked />
        <Checkbox label="라벨이 길어서 두 줄로 넘어가면 네모가 첫 줄에 붙어 있는지 본다. 가운데로 내려가면 안 된다." />
      </div>

      <h2>Checkbox — fieldset 묶음</h2>
      <fieldset className="dev-fieldset">
        <legend className="label-md">받을 알림</legend>
        <div className="dev-stack">
          <Checkbox label="이메일" defaultChecked />
          <Checkbox label="문자" />
          <Checkbox label="푸시" />
        </div>
      </fieldset>

      {/* Radio — 체크박스와 가장 다른 것은 **탭 정지가 묶음당 1개**라는 점이다.
          화살표로 이동하면 선택도 함께 옮겨간다(APG). 둘 다 실측한다. */}
      <h2>Radio</h2>
      <div className="dev-stack">
        <RadioGroup label="배송 방법" defaultValue="normal">
          <Radio value="normal" label="일반 배송" />
          <Radio value="fast" label="빠른 배송" />
          <Radio value="pickup" label="매장 수령" />
        </RadioGroup>

        <RadioGroup label="도움말이 있다" helper="나중에 바꿀 수 있습니다." defaultValue="a">
          <Radio value="a" label="선택 A" />
          <Radio value="b" label="선택 B" />
        </RadioGroup>

        <RadioGroup label="오류" error="하나를 선택해야 합니다.">
          <Radio value="a" label="선택 A" />
          <Radio value="b" label="선택 B" />
        </RadioGroup>

        <RadioGroup label="항목 하나만 비활성" defaultValue="a">
          <Radio value="a" label="고를 수 있다" />
          <Radio value="b" label="이건 못 고른다" disabled />
        </RadioGroup>

        <RadioGroup label="묶음 전체 비활성" defaultValue="a" disabled>
          <Radio value="a" label="선택 A" />
          <Radio value="b" label="선택 B" />
        </RadioGroup>

        <RadioGroup label="긴 라벨">
          <Radio value="a" label="라벨이 길어서 두 줄로 넘어가면 원이 첫 줄에 붙어 있는지 본다. 가운데로 내려가면 안 된다." />
          <Radio value="b" label="짧은 것" />
        </RadioGroup>
      </div>

      {/* Chip — 셋이 한 컴포넌트로 보이지만 역할이 셋이다(8-7).
          Select 는 라디오, Filter 는 버튼+aria-expanded, Input 은 ✕ 유무로 구조가 갈린다. */}
      <h2>Chip — Select × 크기</h2>
      <div className="dev-stack">
        {CHIP_SIZES.map(z => (
          <ChipGroup key={z} label={`음식 종류 (${z.size} · ${z.px})`} defaultValue="all">
            <ChipSelect size={z.size} value="all" label="전체" />
            <ChipSelect size={z.size} value="kr" label="한식" />
            <ChipSelect size={z.size} value="west" label="양식" />
            <ChipSelect size={z.size} value="snack" label="분식" />
            <ChipSelect size={z.size} value="bakery" label="빵집" />
            <ChipSelect size={z.size} value="none" label="못 고름" disabled />
          </ChipGroup>
        ))}
      </div>

      {/* Filter · Input × 크기. Input 의 마지막 하나는 onRemove 가 없다 —
          ✕ 없이 버튼 하나로 도는 형태(최근 검색어 자리)를 함께 본다. */}
      <h2>Chip — Filter · Input × 크기</h2>
      <div className="dev-stack">
        {CHIP_SIZES.map(z => (
          <div key={z.size}>
            <p className="label-sm">{z.size} · {z.px}</p>
            <ChipDemo size={z.size} />
          </div>
        ))}
      </div>

      {/* Switch — 켜짐/꺼짐을 색으로만 알리지 않는다. 손잡이가 실제로 움직이는지 잰다(5.4.1).
          mixed 가 없다는 것이 Checkbox 와의 규정상 차이다(APG). */}
      <h2>Switch</h2>
      <div className="dev-stack">
        <Switch label="알림 받기" />
        <Switch label="켜짐" defaultChecked />
        <Switch label="도움말이 있다" helper="끄면 중요 공지도 오지 않습니다." />
        <Switch label="disabled" disabled />
        <Switch label="disabled + 켜짐" disabled defaultChecked />
        <Switch label="라벨이 길어서 두 줄로 넘어가면 트랙이 첫 줄에 붙어 있는지 본다. 가운데로 내려가면 안 된다." />
      </div>

      <h2>Switch — fieldset 묶음</h2>
      <fieldset className="dev-fieldset">
        <legend className="label-md">알림</legend>
        <div className="dev-stack">
          <Switch label="이메일" defaultChecked />
          <Switch label="문자" />
        </div>
      </fieldset>

      <h2>폼 한 줄 — control.* 공유 검증</h2>
      <div className="dev-inline">
        <div className="dev-grow"><TextField label="검색어" /></div>
        <Button label="검색" />
      </div>

      <h2>1.4.12 글자 간격</h2>
      <p>실제 검사와 같게 <b>사용자 스타일시트를 !important 로</b> 얹는다.</p>
      <button id="ts-toggle" onClick={toggleTextSpacing}>글자 간격 덮어쓰기 켜기/끄기</button>
      <div className="dev-row">
        <Button label="글자 간격 검사" /> <Button label="긴 라벨로 확인하는 버튼" size="sm" />
      </div>
    </main>
  )
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
