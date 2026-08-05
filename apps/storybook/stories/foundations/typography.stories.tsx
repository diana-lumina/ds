import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

// Ordena por el VALOR real (ej. "16px" -> 16), no por el nombre del
// token — tokens como "typography-font-size-action-lg" no terminan en
// un número, así que extraer el número del nombre falla para esos casos.
function sortByPxValue(entries: [string, string][]) {
  return [...entries].sort(([, a], [, b]) => parseFloat(a) - parseFloat(b))
}

// Font Size — cada token va a la propiedad "fontSize", no al shorthand
// "font" (que requiere family + size juntos; un valor suelto ahí es
// inválido y el navegador descarta la declaración completa en silencio).
function FontSizeSection() {
  const entries = sortByPxValue(Object.entries(getDesignTokens('typography-font-size')))
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 16 }}>Font Size</h2>
      {entries.map(([varName, value]) => (
        <div key={varName} style={{ borderBottom: '1px solid #eee', paddingBottom: 12, marginBottom: 12 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#666', marginBottom: 6 }}>
            {tokenLabel(varName)} — {value}
          </div>
          <div style={{ fontSize: `var(${varName})`, fontFamily: 'sans-serif' }}>
            Aa Bb Cc — The quick brown fox
          </div>
        </div>
      ))}
    </section>
  )
}

// Line Height — necesita texto que SÍ se envuelva en varias líneas; en
// una sola línea corta, el interlineado no se puede ver nunca, sin
// importar qué tan distinto sea el valor.
function LineHeightSection() {
  const entries = sortByPxValue(Object.entries(getDesignTokens('typography-line-height')))
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 16 }}>Line Height</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
        {entries.map(([varName, value]) => (
          <div key={varName}>
            <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#666', marginBottom: 6 }}>
              {tokenLabel(varName)} — {value}
            </div>
            <p style={{ lineHeight: `var(${varName})`, fontFamily: 'sans-serif', fontSize: 16, maxWidth: 260 }}>
              The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

// Font Weight — mismo problema que font-size: el valor es solo el
// número (ej. "700"), va directo a fontWeight.
function FontWeightSection() {
  const entries = Object.entries(getDesignTokens('typography-font-weight'))
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 16 }}>Font Weight</h2>
      {entries.map(([varName, value]) => (
        <div key={varName} style={{ borderBottom: '1px solid #eee', paddingBottom: 12, marginBottom: 12 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#666', marginBottom: 6 }}>
            {tokenLabel(varName)} — {value}
          </div>
          <div style={{ fontWeight: `var(${varName})`, fontFamily: 'sans-serif', fontSize: 18 }}>
            Aa Bb Cc — The quick brown fox
          </div>
        </div>
      ))}
    </section>
  )
}

// Letter Spacing — mismo patrón; valor suelto en px, va a letterSpacing.
function LetterSpacingSection() {
  const entries = Object.entries(getDesignTokens('typography-letter-spacing'))
  if (entries.length === 0) return null
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 16 }}>Letter Spacing</h2>
      {entries.map(([varName, value]) => (
        <div key={varName} style={{ borderBottom: '1px solid #eee', paddingBottom: 12, marginBottom: 12 }}>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#666', marginBottom: 6 }}>
            {tokenLabel(varName)} — {value}
          </div>
          <div style={{ letterSpacing: `var(${varName})`, fontFamily: 'sans-serif', fontSize: 18 }}>
            Aa Bb Cc — The quick brown fox
          </div>
        </div>
      ))}
    </section>
  )
}

export const AllTypography: Story = {
  render: () => (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontFamily: 'sans-serif' }}>Typography</h1>
      <p style={{ fontFamily: 'sans-serif', color: '#666', marginBottom: 32 }}>
        Cada categoría se aplica a su propiedad CSS real (font-size,
        line-height, font-weight, letter-spacing) — los tokens son
        valores individuales, no un shorthand "font" completo.
      </p>
      <FontSizeSection />
      <LineHeightSection />
      <FontWeightSection />
      <LetterSpacingSection />
    </div>
  ),
}
