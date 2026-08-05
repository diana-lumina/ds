import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

const meta: Meta = {
  title: 'Foundations/Radius',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj


function sortByPxValue(entries: [string, string][]) {
  return [...entries].sort(([, a], [, b]) => parseFloat(a) - parseFloat(b))
}


function RadiusChip({ varName }: { varName: string }) {
  return (
    <div
      style={{
        height: 40,
        width: 120,
        background: '#1a73e8',
        borderRadius: `var(${varName})`,
      }}
    />
  )
}

export const AllRadius: Story = {
  render: () => {
    const tokens = getDesignTokens('radius')
 
    const entries = sortByPxValue(
      Object.entries(tokens).filter(([varName]) => /^--radius-(\d+|full)$/.test(varName))
    )

    return (
      <div style={{ padding: 32, fontFamily: 'sans-serif' }}>
        <h1>Radius</h1>
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
              <RadiusChip varName={varName} />
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
