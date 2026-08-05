import type { Meta, StoryObj } from '@storybook/react'
import { getDesignTokens, tokenLabel } from '../../src/utils/getDesignTokens'

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

function BagIcon({ size }: { size: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_42_76)">
        <path
          d="M13.9121 15.3033H2.5345C2.18448 15.3033 1.88576 15.0496 1.82923 14.7041L0.457764 6.32142L1.86831 6.0904L3.14171 13.8739H13.2713L14.0318 6.92061H4.17398C3.92132 6.92061 3.68751 6.7873 3.55874 6.56954C3.43032 6.35213 3.42613 6.08307 3.54757 5.86148L5.43272 2.43352C6.01969 1.36636 7.14094 0.703308 8.35886 0.703308C9.43719 0.703308 10.4544 1.22781 11.0798 2.10688L13.1195 5.38687L13.1834 5.49122H14.8288C15.0319 5.49122 15.2253 5.57776 15.361 5.72887C15.4964 5.87997 15.5613 6.08168 15.5393 6.28373L14.6226 14.6664C14.5828 15.0286 14.2767 15.3033 13.9121 15.3033ZM5.38282 5.49122H11.5017L9.8905 2.89835C9.55723 2.43282 8.97549 2.1327 8.35886 2.1327C7.66231 2.1327 7.0209 2.51203 6.68553 3.12239L5.38282 5.49122Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_42_76">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
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
            <BagIcon size={`var(${varName})`} />
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
