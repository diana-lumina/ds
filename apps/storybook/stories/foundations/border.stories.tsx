import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

const meta: Meta = {
  title: 'Foundations/Border',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

function sortByPxValue(entries: [string, string][]) {
  return [...entries].sort(([, a], [, b]) => parseFloat(a) - parseFloat(b))
}

export const AllBorderWidths: Story = {
  render: () => {
    const entries = sortByPxValue(Object.entries(getDesignTokens('border-width')))

    return (
      <div style={{ padding: 32, fontFamily: 'sans-serif' }}>
        <h1>Border Width</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 24,
            marginTop: 24,
          }}
        >
          {entries.map(([varName, value]) => (
            <div key={varName}>
              <div
                style={{
                  height: 60,
                  width: 120,
                  borderRadius: 8,
                  border: `var(${varName}) solid #1a73e8`,
                }}
              />
              <div style={{ fontFamily: 'monospace', fontSize: 12, marginTop: 10 }}>
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
  },
}
