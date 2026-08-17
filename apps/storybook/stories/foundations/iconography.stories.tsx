import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'
import { ShoppingBagIcon } from '@workspace/ui/icons'

const meta: Meta = {
  title: 'Foundations/Iconography',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

function sortByPxValue(entries: [string, string][]) {
  return [...entries].sort(([, a], [, b]) => parseFloat(a) - parseFloat(b))
}

function StrokeDemoIcon({ stroke }: { stroke: string }) {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l2.9 6.6L22 9.3l-5 4.8 1.3 7-6.3-3.5L5.7 21l1.3-7-5-4.8 7.1-.7L12 2z"
        stroke="#1a73e8"
        strokeWidth={stroke}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SizeSection() {
  const entries = sortByPxValue(Object.entries(getDesignTokens('icon-size')))
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 16 }}>Size</h2>
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        {entries.map(([varName, value]) => (
          <div key={varName} style={{ textAlign: 'center', color: '#1a73e8' }}>
            <ShoppingBagIcon size={`var(${varName})`} />
            <div style={{ fontFamily: 'monospace', fontSize: 12, marginTop: 10, color: '#000' }}>
              {tokenLabel(varName)}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#666' }}>{value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StrokeSection() {
  const entries = sortByPxValue(Object.entries(getDesignTokens('icon-stroke')))
  return (
    <section>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 16 }}>Stroke</h2>
     
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end', flexWrap: 'wrap' }}>
        {entries.map(([varName, value]) => (
          <div key={varName} style={{ textAlign: 'center' }}>
            <StrokeDemoIcon stroke={`var(${varName})`} />
            <div style={{ fontFamily: 'monospace', fontSize: 12, marginTop: 10 }}>
              {tokenLabel(varName)}
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#666' }}>{value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const AllIconography: Story = {
  render: () => (
    <div style={{ padding: 32 }}>
      <h1 style={{ fontFamily: 'sans-serif' }}>Iconography</h1>
      <SizeSection />
      <StrokeSection />
    </div>
  ),
}