import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Primitives & Utilities/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Primitive visual compartida para representar una persona o cuenta mediante imagen, iniciales o fallback icon. Avatar no es un control interactivo ni recibe focus.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size scale: sm · md · lg',
      table: { 
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' } 
      },
    },
    src: {
      control: 'text',
      description: 'URL de imagen. Si carga, content = image',
    },
    initials: {
      control: 'text',
      description: 'Iniciales (hasta 2 caracteres) o nombre completo del que se derivan',
    },
    alt: {
      control: 'text',
      description:
        'alt de la imagen: significativo o vacío según contexto. Si el nombre ya es visible, preferir vacío',
      table: { defaultValue: { summary: '""' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
  { value: 'lg', sizeLabel: 'Large' },
] as const

const DEMO_SRC = 'https://i.pravatar.cc/96?img=12'

const showCode = {
  docs: {
    canvas: { sourceState: 'shown' as const },
  },
}

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    size: 'md',
    initials: 'JD',
    alt: '',
  },
}

export const WithImage: Story = {
  parameters: showCode,
  args: { src: DEMO_SRC, alt: 'Usuario de ejemplo', size: 'md' },
}

export const WithInitials: Story = {
  parameters: showCode,
  args: { initials: 'AB', size: 'md' },
}

export const Fallback: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Usar solo cuando no existe imagen ni iniciales válidas. El glyph es neutral y no comunica error.',
      },
    },
  },
  args: { size: 'md' },
}

/** Comportamiento de cálculo de iniciales a partir de un nombre completo. */
export const Initials: Story = {
  name: 'Initials: cálculo desde nombre',
  parameters: hideCode,
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Avatar size="md" initials="AB" />
        <div style={captionStyle()}>AB</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar size="md" initials="Ana Beltrán" />
        <div style={captionStyle()}>Ana Beltrán → AB</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Avatar size="md" initials="JD" />
        <div style={captionStyle()}>JD</div>
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  name: 'Size & content',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
      borderBottom: '1px solid #eee',
    }
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap',
    }
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0',
    }

    const rows = [
      {
        label: 'Image',
        render: (size: (typeof SIZES)[number]['value']) => (
          <Avatar size={size} src={DEMO_SRC} alt="Usuario de ejemplo" />
        ),
      },
      {
        label: 'Initials',
        render: (size: (typeof SIZES)[number]['value']) => (
          <Avatar size={size} initials="AB" />
        ),
      },
      {
        label: 'Fallback',
        render: (size: (typeof SIZES)[number]['value']) => <Avatar size={size} />,
      },
    ] as const

    return (
      <div style={{ padding: 8 }}>
        <p style={{ fontFamily: 'sans-serif', color: '#666', marginBottom: 24 }}>
          Contenedor circular fijo. Content: image, initials o fallback icon. Avatar no recibe focus.
        </p>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }} />
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, render }) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                {SIZES.map(({ value }) => (
                  <td key={value} style={td}>
                    {render(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
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
        <Avatar size="sm" src={DEMO_SRC} alt="" />
        <span style={{ fontSize: 13, fontWeight: 600, color: '#111' }}>Ana Beltrán</span>
      </div>
    </header>
  ),
}
