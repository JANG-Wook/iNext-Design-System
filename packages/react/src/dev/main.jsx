/* 검증 전용 페이지 — 배포물이 아니다. 브라우저로 실측하려고 둔다. */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles.css'
import './dev.css'
import Button from '../Button/Button.jsx'

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
      </div>

      <h2>아이콘</h2>
      <div className="dev-row">
        <Button label="앞 아이콘" leadingIcon={<Dot />} />
        <Button label="뒤 아이콘" trailingIcon={<Dot />} />
        <Button iconOnly label="아이콘 전용" leadingIcon={<Dot />} />
        <Button iconOnly circle label="원형" leadingIcon={<Dot />} size="lg" />
        <Button iconOnly label="작은 아이콘" leadingIcon={<Dot />} size="sm" />
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
