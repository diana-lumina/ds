import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './icon-button'
import { BagIcon, ChevronIcon } from '@workspace/ui/icons'

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `

        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'inverse'],
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: false,
      table: { disable: true },
    },
    children: {
      control: false,
      table: { disable: true },
    },
    asChild: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

const SIZES = [
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' },
] as const

function labelStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 11, color: '#888', marginBottom: 6 }
}

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    size: 'md',
    variant: 'default',
    disabled: false,
    'aria-label': 'Favorito',
    icon: <BagIcon />,
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ marginBottom: 40, paddingBottom: 28, borderBottom: '1px solid #eee' }}>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Default</h2>
     
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', flexWrap: 'wrap' }}>
        {SIZES.map(({ value, label }) => (
          <div key={value}>
            <div style={labelStyle()}>{label}</div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center' }}>
                <IconButton size={value} variant="default" icon={<BagIcon />} aria-label="Favorito" />
                <div style={captionStyle()}>Default</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <IconButton size={value} variant="default" icon={<BagIcon />} aria-label="Favorito" disabled />
                <div style={captionStyle()}>Disabled</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const Inverse: Story = {
  render: () => (
    <div>
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Inverse</h2>
    
      <div
        style={{
          background: 'var(--color-surface-brand-strong, #333)',
          padding: 24,
          borderRadius: 8,
          display: 'flex',
          gap: 32,
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {SIZES.map(({ value, label }) => (
          <div key={value}>
            <div style={{ ...labelStyle(), color: 'rgba(255,255,255,0.7)' }}>{label}</div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ textAlign: 'center' }}>
                <IconButton size={value} variant="inverse" icon={<BagIcon />} aria-label="Favorito" />
                <div style={{ ...captionStyle(), color: 'rgba(255,255,255,0.6)' }}>Default</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <IconButton size={value} variant="inverse" icon={<BagIcon />} aria-label="Favorito" disabled />
                <div style={{ ...captionStyle(), color: 'rgba(255,255,255,0.6)' }}>Disabled</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  render: () => (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        fontFamily: 'sans-serif',
        padding: '10px 20px',
        borderBottom: '1px solid #e5e5e5',
        background: '#fff',
        maxWidth: 720,
      }}
    >
      <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em' }}>Tec DS</span>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <a href="#" style={{ fontSize: 14, color: '#444', textDecoration: 'none', marginRight: 8 }}>
          Catálogo
        </a>
        <IconButton size="sm" icon={<BagIcon />} aria-label="Carrito" />
        <IconButton size="sm" icon={<ChevronIcon />} aria-label="Abrir menú" />
      </nav>
    </header>
  ),
}