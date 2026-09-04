/**
 * 칩 크기 → 타이포 클래스. 명세는 `COMPONENTS.md` 8-7.
 *
 * 복합 토큰이라 유틸리티 클래스를 쓴다 — 낱개(font-size·line-height…)로 조합하지 않는다
 * (narrative/04-typography.md).
 *
 * 12 · 14 · 15 로 한 칸씩 오른다. 높이(24 · 32 · 40)와 짝지으면 글자/높이가
 * 50.0 → 43.8 → 37.5% 로 **단조 감소**한다 — Button 에서 md 가 lg 보다 커 보였던
 * 원인을 만들지 않으려는 것이다(0-50).
 *
 * **lg 를 두지 않는다.** 40px·15px 이면 Button md 와 치수가 이미 같고, 그 위는
 * 알약 모양 말고는 버튼과 구별되지 않는다.
 */
export const CHIP_TYPO = { xs: 'label-sm', sm: 'label-md', md: 'label-lg' }
