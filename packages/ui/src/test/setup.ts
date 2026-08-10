import '@testing-library/jest-dom/vitest'
import { expect } from 'vitest'
import { toHaveNoViolations } from 'vitest-axe/matchers'
import type { AxeMatchers } from 'vitest-axe/matchers'

// Agrega el matcher toHaveNoViolations() (de vitest-axe) a las
// aserciones normales de Vitest — así se puede escribir
// expect(container).toHaveNoViolations() directo en cualquier test.
// Import nombrado específico (no "import * as matchers"), tal como
// documenta vitest-axe — confirmado que el wildcard no registraba el
// matcher correctamente en runtime, aunque TypeScript sí compilaba.
expect.extend({ toHaveNoViolations })

// Lo anterior lo registra en RUNTIME, pero TypeScript no lo "ve" sin
// esto — hay que extender explícitamente la interfaz Assertion de
// Vitest, o marca error de compilación (toHaveNoViolations no existe
// en el tipo), aunque en runtime sí funcione.
declare module 'vitest' {
  interface Assertion extends AxeMatchers {}
  interface AsymmetricMatchersContaining extends AxeMatchers {}
}