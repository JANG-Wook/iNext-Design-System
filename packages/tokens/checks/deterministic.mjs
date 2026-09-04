// ============================================================
//  결정성 — 같은 입력이면 같은 산출물인가
//
//  `CLAUDE.md` 는 생성기가 결정적이어야 한다고 못 박는다(타임스탬프·난수·정렬 안 한
//  디렉터리 읽기 금지). **그런데 그걸 확인하는 검사가 없었다.**
//
//  CI 는 "커밋된 산출물 ≠ 재빌드" 를 `git diff` 로 잡는다. 그건 깨끗한 체크아웃이라
//  가능한 것이고, 커밋 전 작업 트리에서는 소스도 함께 바뀌어 있어 그대로 옮길 수 없다.
//  대신 여기서 **두 번 빌드해 산출물이 바이트까지 같은지** 본다. 그게 참이고 산출물을
//  소스와 함께 커밋하면 CI 의 그 두 단계는 따라온다.
//
//  결정적이지 않으면 CI 가 **간헐적으로** 빨개진다 — 가장 찾기 어려운 종류다.
// ============================================================
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const DIR = path.dirname(fileURLToPath(import.meta.url))
const PKG = path.resolve(DIR, '..')

const TARGETS = ['tokens.css', 'tokens.js', 'DESIGN.md', 'dist/tokens.light.json', 'dist/tokens.dark.json']

const snapshot = () => Object.fromEntries(TARGETS.map(f => {
  const p = path.join(PKG, f)
  if (!fs.existsSync(p)) throw new Error(`산출물이 없다: ${f} — 먼저 빌드한다`)
  return [f, crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')]
}))

const before = snapshot()
execFileSync('node', ['build.mjs'], { cwd: PKG, stdio: 'ignore' })
execFileSync('node', ['build-design-md.mjs'], { cwd: PKG, stdio: 'ignore' })
const after = snapshot()

const moved = TARGETS.filter(f => before[f] !== after[f])
console.log(`■ 결정성 — 다시 빌드해 산출물 ${TARGETS.length}개를 바이트 비교`)
if (moved.length) {
  console.error('\n✖ 같은 입력인데 산출물이 달라졌다')
  for (const f of moved) console.error(`  · ${f}\n      ${before[f].slice(0, 16)} → ${after[f].slice(0, 16)}`)
  console.error('  → 생성기에 타임스탬프·난수·정렬 안 한 디렉터리 읽기가 있는지 본다(CLAUDE.md)')
  process.exit(1)
}
console.log('✔ 5개 전부 동일 — 결정적이다')
