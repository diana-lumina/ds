import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
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
    src: {
      control: 'text',
    },
    initials: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    size: 'md',
    initials: 'JD',
    alt: 'Jane Doe',
  },
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <h2 style={{ fontFamily: 'sans-serif', marginBottom: 8 }}>
            {size === 'sm' ? 'Small' : size === 'md' ? 'Medium' : 'Large'}
          </h2>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <Avatar
                size={size}
                src="https://i.pravatar.cc/96?img=12"
                alt="Usuario de ejemplo"
              />
              <div style={captionStyle()}>Imagen</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar size={size} initials="AB" alt="Ana Beltrán" />
              <div style={captionStyle()}>Iniciales</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Avatar size={size} alt="Usuario" />
              <div style={captionStyle()}>Fallback</div>
            </div>
          </div>
        </div>
      ))}
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
        gap: 24,
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
          Cursos
        </a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
          Recursos
        </a>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar
          size="sm"
          src="https://i.pravatar.cc/96?img=12"
          alt="Ana Beltrán"
        />
        <span style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>Ana Beltrán</span>
      </div>
    </header>
  ),
}
