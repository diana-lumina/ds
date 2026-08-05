import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

const meta: Meta = {
  title: 'Foundations/Grid',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const CurrentGrid: Story = {
  render: () => {
    const tokens = getDesignTokens('grid')
    const entries = Object.entries(tokens)

    return (
      <div style={{ padding: 32, fontFamily: 'sans-serif' }}>
        <h1>Grid</h1>
        <p style={{ color: '#b45309', marginTop: 8, marginBottom: 24, fontSize: 14, maxWidth: 600 }}>
           Redimensiona la ventana del navegador (o usa el
          selector de viewport de Storybook) 
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {entries.map(([varName, value]) => (
            <div key={varName} style={{ display: 'flex', gap: 16 }}>
              <div style={{ fontFamily: 'monospace', fontSize: 13, width: 240, color: '#444' }}>
                {tokenLabel(varName)}
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#1a73e8', fontWeight: 600 }}>
                {value}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32 }}>
          <h3 style={{ fontFamily: 'sans-serif', fontSize: 14, marginBottom: 12 }}>
            Columnas visualizadas (modo activo)
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(var(--grid-columns), 1fr)`,
              gap: 'var(--grid-gutter)',
              padding: 'var(--grid-margin)',
              background: '#f5f5f5',
              borderRadius: 8,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} style={{ height: 40, background: '#1a73e8', opacity: 0.3, borderRadius: 4 }} />
            ))}
          </div>
        </div>
      </div>
    )
  },
}
