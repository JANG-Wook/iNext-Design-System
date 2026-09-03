/* 검증 전용 페이지 — 배포물이 아니다. 브라우저로 실측하려고 둔다. */
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles.css'
import './dev.css'
import Button from '../Button/Button.jsx'
import TextField from '../TextField/TextField.jsx'
import TextArea from '../TextArea/TextArea.jsx'
import Search from '../Search/Search.jsx'

const VARIANTS = ['primary', 'secondary', 'outline', 'text', 'negative']
const SIZES = ['sm', 'md', 'lg']
const Dot = () => <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="currentColor"/></svg>

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

function App() {
  const [bio, setBio] = useState('')
  return (
    <main style={{ padding: 24 }}>
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

      <h2>상태</h2>
      <div className="dev-row">
        <Button label="기본" />
        <Button label="inactive" inactive />
        <Button label="disabled" disabled />
        <Button label="loading" loading />
        <Button variant="outline" label="inactive outline" inactive />
        <Button variant="text" label="inactive text" inactive />
        <Button variant="secondary" label="inactive secondary" inactive />
        <Button variant="negative" label="inactive negative" inactive />
      </div>

      <h2>아이콘</h2>
      <div className="dev-row">
        <Button label="앞 아이콘" leadingIcon={<Dot />} />
        <Button label="뒤 아이콘" trailingIcon={<Dot />} />
        <Button iconOnly label="아이콘 전용" leadingIcon={<Dot />} />
        <Button iconOnly circle label="원형" leadingIcon={<Dot />} size="lg" />
        <Button iconOnly label="작은 아이콘" leadingIcon={<Dot />} size="sm" />
      </div>

      <h2>Text Field</h2>
      <div style={{ display: 'grid', gap: 20, maxWidth: 420 }}>
        <TextField label="이름" placeholder="홍길동" />
        <TextField label="이메일" type="email" required autoComplete="email"
                   helper="회사 메일 주소를 입력합니다." />
        <TextField label="전화번호" type="tel" required
                   helper="숫자만 입력합니다."
                   error="숫자만 입력할 수 있습니다. 하이픈을 빼고 다시 입력하세요." />
        <TextField label="큰 크기" size="lg" helper="lg 단계" />
        <TextField label="읽기 전용" readOnly defaultValue="변경할 수 없음" />
        <TextField label="inactive" inactive defaultValue="포커스는 된다" />
        <TextField label="disabled" disabled defaultValue="포커스도 안 된다" />
      </div>

      <h2>Text Area</h2>
      <div style={{ display: 'grid', gap: 20, maxWidth: 420 }}>
        <TextArea label="메모" placeholder="자유롭게 적습니다" />
        <TextArea label="자기소개" required maxLength={200} value={bio} onChange={e => setBio(e.target.value)}
                  helper="200자까지 입력할 수 있습니다." />
        <TextArea label="사유" rows={5} error="사유를 10자 이상 입력하세요." defaultValue="짧음" />
        <TextArea label="읽기 전용" readOnly defaultValue={'변경할 수 없음\n두 번째 줄'} />
        <TextArea label="inactive" inactive defaultValue="포커스는 된다" />
        <TextArea label="disabled" disabled defaultValue="포커스도 안 된다" />
      </div>

      <h2>Search</h2>
      <div style={{ display: 'grid', gap: 20, maxWidth: 420 }}>
        <Search label="검색" placeholder="검색어를 입력하세요" />
        <Search label="밑줄형" variant="underline" placeholder="밑줄형" defaultValue="지울 수 있음" />
        <Search label="라벨 감춤" hideLabel placeholder="라벨이 화면에는 없다" defaultValue="X 보임" />
        <Search label="도움말" helper="두 글자 이상 입력하세요." />
        <Search label="오류" error="검색어가 너무 짧습니다." defaultValue="가" />
        <Search label="inactive" inactive defaultValue="포커스는 된다" />
        <Search label="disabled" disabled defaultValue="포커스도 안 된다" />
      </div>

      <h2>폼 한 줄 — control.* 공유 검증</h2>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', maxWidth: 520 }}>
        <div style={{ flex: 1 }}><TextField label="검색어" /></div>
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
