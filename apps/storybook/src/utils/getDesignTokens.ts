/**
 * Lee las CSS custom properties definidas en :root que empiecen con un prefijo dado.
 * Evita hardcodear listas de tokens en cada story: si Style Dictionary genera
 * un token nuevo, aparece solo en la story sin tocar código.
 */
export function getDesignTokens(prefix: string): Record<string, string> {
  const styles = getComputedStyle(document.documentElement)
  const tokens: Record<string, string> = {}

  for (let i = 0; i < styles.length; i++) {
    const prop = styles[i]
    if (prop.startsWith(`--${prefix}`)) {
      tokens[prop] = styles.getPropertyValue(prop).trim()
    }
  }

  return tokens
}

/**
 * Convierte "--color-background-brand" en "background-brand" para mostrar
 * un nombre legible en la UI de la story.
 */
export function tokenLabel(cssVarName: string): string {
  return cssVarName.replace(/^--/, '')
}
