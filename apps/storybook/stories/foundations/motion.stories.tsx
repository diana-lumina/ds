import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'


const meta: Meta = {
  title: 'Foundations/Motion',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

function sortByMsValue(entries: [string, string][]) {
  return [...entries].sort(([, a], [, b]) => parseFloat(a) - parseFloat(b))
}

const KEYFRAMES = `
@keyframes moveAcross {
  from { transform: translateX(0); }
  to { transform: translateX(216px); }
}
`

function DurationSection() {
  const entries = sortByMsValue(Object.entries(getDesignTokens('motion-duration')))
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 16 }}>Duration</h2>
      <p style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>
        Misma curva (standard) en todas las filas — solo cambia la duración.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {entries.map(([varName, value]) => (
          <div key={varName} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 12, width: 220, color: '#444' }}>
              {tokenLabel(varName)} — {value}
            </div>
            <div style={{ position: 'relative', width: 240, height: 24, background: '#f0f0f0', borderRadius: 12 }}>
              <div
                style={{
                  position: 'absolute',
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: '#1a73e8',
                  animationName: 'moveAcross',
                  animationDuration: `var(${varName})`,
                  animationTimingFunction: 'var(--motion-easing-standard)',
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function EasingSection() {
  const entries = Object.entries(getDesignTokens('motion-easing'))
  return (
    <section>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 16 }}>Easing</h2>
      <p style={{ color: '#666', fontSize: 13, marginBottom: 16 }}>
        Misma duración (moderate) en todas las filas — solo cambia la curva.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {entries.map(([varName, value]) => (
          <div key={varName} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ fontFamily: 'monospace', fontSize: 12, width: 220, color: '#444' }}>
              {tokenLabel(varName)}
            </div>
            <div style={{ position: 'relative', width: 240, height: 24, background: '#f0f0f0', borderRadius: 12 }}>
              <div
                style={{
                  position: 'absolute',
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: '#8b5cf6',
                  animationName: 'moveAcross',
                  animationDuration: 'var(--motion-duration-moderate)',
                  animationTimingFunction: `var(${varName})`,
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate',
                }}
              />
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: '#666' }}>{value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const AllMotion: Story = {
  render: () => (
    <div style={{ padding: 32 }}>
      <style>{KEYFRAMES}</style>
      <h1 style={{ fontFamily: 'sans-serif' }}>Motion</h1>
      <DurationSection />
      <EasingSection />
    </div>
  ),
}
