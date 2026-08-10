import type { Meta, StoryObj } from '@storybook/react'
import { CounterBadge } from './counter-badge'

const meta: Meta<typeof CounterBadge> = {
  title: 'Components/CounterBadge',
  component: CounterBadge,
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
      options: ['sm', 'md'],
    },
    emphasis: {
      control: 'select',
      options: ['neutral', 'attention', 'inverse'],
    },
    count: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
  },
}

export default meta
type Story = StoryObj<typeof CounterBadge>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    size: 'sm',
    emphasis: 'neutral',
    count: 3,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Neutral</h2>
       
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <CounterBadge size="sm" count={3} />
            <div style={captionStyle()}>sm</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <CounterBadge size="md" count={3} />
            <div style={captionStyle()}>md</div>
          </div>
        
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Attention</h2>
       
        <CounterBadge size="sm" emphasis="attention" count={3} />
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Inverse</h2>
       
        <div style={{ background: '#333', padding: 16, borderRadius: 8, display: 'inline-block' }}>
          <CounterBadge size="sm" emphasis="inverse" count={3} />
        </div>
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
        padding: '12px 20px',
        borderBottom: '1px solid #e5e5e5',
        background: '#fff',
        maxWidth: 720,
      }}
    >
      <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em' }}>Tec DS</span>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 14, color: '#444' }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
          Inicio
        </a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
          Cursos
        </a>
      </nav>
      <button
        type="button"
        aria-label="Notificaciones, 7 sin leer"
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
          padding: 0,
          border: 'none',
          borderRadius: 8,
          background: 'transparent',
          color: '#333',
          cursor: 'pointer',
        }}
      >
        <BellIcon />
        <span style={{ position: 'absolute', top: 2, right: 2 }}>
          <CounterBadge size="sm" emphasis="attention" count={7} />
        </span>
      </button>
    </header>
  ),
}

function BellIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-5V11a7 7 0 1 0-14 0v6l-2 2v1h18v-1l-2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}