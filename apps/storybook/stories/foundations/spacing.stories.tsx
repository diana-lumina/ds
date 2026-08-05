import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

const meta: Meta = {
  title: 'Foundations/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const AllSpacing: Story = {
  render: () => {
    const tokens = getDesignTokens('spacing')

    // Orden numérico, no alfabético — "spacing-12" no debe aparecer antes
    // que "spacing-2" solo porque "1" viene antes que "2" como texto.
    const entries = Object.entries(tokens).sort(([, a], [, b]) => parseFloat(a) - parseFloat(b))

    return (
      <div style={{ padding: 32, fontFamily: 'sans-serif' }}>
        <h1>Spacing</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 24 }}>
          {entries.map(([varName, value]) => (
            <div key={varName} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: 12,
                  width: 260,
                  color: '#444',
                }}
              >
                {tokenLabel(varName)}
              </div>
              <div
                style={{
                  height: 16,
                  width: `var(${varName})`,
                  minWidth: 2,
                  background: '#1a73e8',
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />
              <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#666' }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
}
