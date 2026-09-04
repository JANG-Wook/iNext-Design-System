// ============================================================
//  CI 대조 — `npm run check` 가 CI 와 같은 것을 보고 있는가
//
//  왜 있나. CI 는 여섯 단계인데 `check` 는 다섯을 돈다. 그 차이를 **알고** 두는 것과
//  모르고 벌어지는 것은 다르다. CI 에 단계가 늘면 이 검사가 서고, 그때 `check` 를
//  같이 고치게 된다. 파운데이션 목록이 네 곳에 복제돼 하나만 고쳐도 통과하던 문제
//  (미결 22)와 같은 부류를 여기서는 미리 막는다.
//
//  워크플로 파일은 저장소 루트에 있고 토큰 패키지 밖이다 — 없으면 건너뛴다.
//  토큰 패키지는 단독으로 빌드된다(의존성 0).
// ============================================================
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR = path.dirname(fileURLToPath(import.meta.url))
const WF  = path.resolve(DIR, '../../../.github/workflows/tokens.yml')

// CI 의 `run:` 한 줄(또는 블록의 첫 실행 명령) → `check` 가 그것을 어떻게 감당하는가.
// **CI 에 단계를 추가하면 여기에도 적는다.** 안 적으면 이 검사가 선다.
const COVERED = {
  'npm run build:tokens': 'check 가 그대로 돈다',
  'node packages/tokens/checks/audit.mjs': 'check 가 `node checks/audit.mjs` 로 돈다',
  'node packages/tokens/checks/audit.mjs bundle': 'check 가 `node checks/audit.mjs bundle` 로 돈다',
  'node packages/tokens/checks/surfaces.mjs': 'check 가 `node checks/surfaces.mjs` 로 돈다',
  'node packages/tokens/checks/hardcode.mjs': 'check 가 `npm run lint:hardcode` 로 돈다',
  // 아래 둘은 **그대로 옮길 수 없다.** CI 는 깨끗한 체크아웃이라 "커밋된 산출물 ≠ 재빌드"
  // 를 곧바로 잡지만, 커밋 전 작업 트리에서는 소스도 함께 바뀌어 있어 항상 다르다.
  // 대신 `deterministic.mjs` 가 **같은 입력이면 같은 산출물** 인지를 본다 — 그게 참이고
  // 산출물을 소스와 함께 커밋하면 CI 의 두 단계는 따라온다.
  'git diff --exit-code -- packages/tokens/tokens.css packages/tokens/tokens.js packages/tokens/dist':
    'deterministic.mjs 로 대신한다 — 작업 트리에서는 그대로 옮길 수 없다',
  'git diff --exit-code -- packages/tokens/DESIGN.md':
    'deterministic.mjs 로 대신한다 — 작업 트리에서는 그대로 옮길 수 없다',
}

if (!fs.existsSync(WF)) {
  console.log('■ CI 대조 — 워크플로 파일이 없어 건너뛴다(토큰 패키지 단독 빌드)')
  process.exit(0)
}

const yml = fs.readFileSync(WF, 'utf8')

// `run:` 다음의 실행 명령만 뽑는다. 한 줄 형식과 `|` 블록 둘 다 받는다.
// 셸 제어문(if/fi/echo/exit)은 단계 이름이 아니라 그 안의 논리라 세지 않는다.
const lines = yml.split('\n')
const found = new Set()
for (let i = 0; i < lines.length; i++) {
  const m = /^\s*run:\s*(\|?)\s*(.*)$/.exec(lines[i])
  if (!m) continue
  if (m[2].trim()) { found.add(m[2].trim()); continue }   // `run: <명령>`
  const indent = /^\s*/.exec(lines[i])[0].length
  for (let j = i + 1; j < lines.length; j++) {            // `run: |` 블록
    const raw = lines[j]
    if (raw.trim() === '') continue
    if (/^\s*/.exec(raw)[0].length <= indent) break
    const t = raw.trim()
    if (/^(if|fi|then|else|echo|exit|;;)\b/.test(t)) {
      // `if ! <명령>; then` 안의 실제 명령을 꺼낸다
      const inner = /^if\s+!\s+(.+?);\s*then$/.exec(t)
      if (inner) found.add(inner[1].trim())
      continue
    }
    found.add(t)
  }
}

const unknown = [...found].filter(c => !(c in COVERED))
const stale   = Object.keys(COVERED).filter(c => !found.has(c))

console.log(`■ CI 대조 — 워크플로 실행 단계 ${found.size}개`)
for (const c of found) console.log(`  · ${c}\n      → ${COVERED[c] ?? '**대응 없음**'}`)

let bad = false
if (unknown.length) {
  bad = true
  console.error('\n✖ CI 에 있는데 check 가 모르는 단계')
  for (const c of unknown) console.error(`  · ${c}`)
  console.error('  → checks/ci-parity.mjs 의 COVERED 에 적고, check 가 실제로 감당하게 한다')
}
if (stale.length) {
  bad = true
  console.error('\n✖ COVERED 에 있는데 CI 에 없는 단계 (목록이 낡았다)')
  for (const c of stale) console.error(`  · ${c}`)
}
if (bad) process.exit(1)
console.log('\n✔ CI 단계와 check 가 어긋나지 않는다')
