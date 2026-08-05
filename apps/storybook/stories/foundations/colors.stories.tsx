import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

const meta: Meta = {
  title: 'Foundations/Colors',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

// Grupos reales (auditados directo del CSS generado por build.js).
// "action" ya NO es una categoría propia — vive anidado dentro de cada una
// de estas (ej. --color-surface-action-primary-default), por eso no hace
// falta un grupo aparte para eso: cae naturalmente dentro de Surface/Text/Icon.
const GROUPS = [
  { label: 'Surface', prefix: 'color-surface' },
  { label: 'Text', prefix: 'color-text' },
  { label: 'Border', prefix: 'color-border' },
  { label: 'Icon', prefix: 'color-icon' },
  { label: 'Focus', prefix: 'color-focus' },
  { label: 'Primitivos — Neutral (referencia)', prefix: 'color-neutral' },
  { label: 'Primitivos — Blue (referencia)', prefix: 'color-blue' },
]

function ColorGroup({ label, prefix }: { label: string; prefix: string }) {
  const tokens = getDesignTokens(prefix)
  const entries = Object.entries(tokens)

  if (entries.length === 0) return null

  return (
    <div style={{ marginBottom: 32 }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 12 }}>
        {label} <span style={{ fontWeight: 400, color: '#888', fontSize: 14 }}>({entries.length})</span>
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 16,
        }}
      >
        {entries.map(([varName, value]) => (
          <div key={varName}>
            <div
              style={{
                height: 64,
                borderRadius: 8,
                border: '1px solid rgba(0,0,0,0.1)',
                background: `var(${varName})`,
              }}
            />
            <div
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                marginTop: 6,
                wordBreak: 'break-all',
              }}
            >
              {tokenLabel(varName)}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#666' }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const AllColors: Story = {
  render: () => (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontFamily: 'sans-serif' }}>Colors</h1>
      <p style={{ fontFamily: 'sans-serif', color: '#666', marginBottom: 32 }}>
        Usa el selector "Marca" en la toolbar de arriba para comparar TEC 360
        vs. TEC Educación Continua. Semánticos primero (los que deben usarse
        en componentes), primitivos al final solo como referencia.
      </p>
      {GROUPS.map((group) => (
        <ColorGroup key={group.prefix} {...group} />
      ))}
    </div>
  ),
}
