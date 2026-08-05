import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

const meta: Meta = {
  title: 'Foundations/Shadows',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const AllShadows: Story = {
  render: () => {
  
    const tokens = getDesignTokens('elevation')
    const entries = Object.entries(tokens).sort(([a], [b]) => a.localeCompare(b))

    return (
      <div style={{ padding: 32, background: '#f5f5f5', fontFamily: 'sans-serif' }}>
        <h1>Shadows</h1>
       
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 40,
            marginTop:40
          }}
        >
          {entries.map(([varName, value]) => (
            <div key={varName}>
              <div
                style={{
                  height: 96,
                  width: '100%',
                  background: '#fff',
                  borderRadius: 8,
                  boxShadow: `var(${varName})`,
                }}
              />
              <div style={{ fontFamily: 'monospace', fontSize: 12, marginTop: 12 }}>
                {tokenLabel(varName)}
              </div>
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: 11,
                  color: '#666',
                  wordBreak: 'break-all',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
}
