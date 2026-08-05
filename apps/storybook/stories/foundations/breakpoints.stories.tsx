import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

const meta: Meta = {
  title: 'Foundations/Breakpoints',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

function sortByPxValue(entries: [string, string][]) {
  return [...entries].sort(([, a], [, b]) => parseFloat(a) - parseFloat(b))
}

function keepValid(entries: [string, string][]) {
  return entries.filter(([, v]) => Number.isFinite(parseFloat(v)))
}

export const AllBreakpoints: Story = {
  render: () => {
    const entries = sortByPxValue(keepValid(Object.entries(getDesignTokens('breakpoint'))))
    const maxValue = Math.max(...entries.map(([, v]) => parseFloat(v)), 1)

    return (
      <div style={{ padding: 32, fontFamily: 'sans-serif' }}>
        <h1>Breakpoints</h1>
      
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {entries.map(([varName, value]) => {
            const px = parseFloat(value)
            const widthPercent = Math.max((px / maxValue) * 100, 4)
            return (
              <div key={varName} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ fontFamily: 'monospace', fontSize: 12, width: 220, color: '#444' }}>
                  {tokenLabel(varName)}
                </div>
                <div style={{ flex: 1, background: '#eee', borderRadius: 4, height: 20 }}>
                  <div
                    style={{
                      width: `${widthPercent}%`,
                      background: '#1a73e8',
                      height: '100%',
                      borderRadius: 4,
                    }}
                  />
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#666', width: 60 }}>
                  {value}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
}
