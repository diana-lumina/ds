import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Primitives & Utilities/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Primitive visual compartida y no interactiva para separar contenido relacionado. Su uso no implica jerarquía, selección ni estado.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description:
        'horizontal: ancho del contenedor · vertical: altura del contenedor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    thickness: {
      control: 'select',
      options: [1, 2],
      description: 'Grosor contractual: 1 · 2',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

function HorizontalFrame({ children }: { children: React.ReactNode }) {
  return <div style={{ width: 300 }}>{children}</div>
}

function VerticalFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'stretch',
        height: 96,
        paddingInline: 8,
      }}
    >
      {children}
    </div>
  )
}



export const Playground: Story = {
  args: { orientation: 'horizontal', thickness: 1 },
  render: (args) =>
    args.orientation === 'vertical' ? (
      <VerticalFrame>
        <Divider {...args} />
      </VerticalFrame>
    ) : (
      <HorizontalFrame>
        <Divider {...args} />
      </HorizontalFrame>
    ),
}

export const Horizontal: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Divider orientation="horizontal" thickness={1} />`,
      },
    },
  },
  args: { orientation: 'horizontal', thickness: 1 },
  render: (args) => (
    <HorizontalFrame>
      <Divider {...args} />
    </HorizontalFrame>
  ),
}

export const HorizontalThick: Story = {
  name: 'Horizontal thickness 2',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Divider orientation="horizontal" thickness={2} />`,
      },
    },
  },
  args: { orientation: 'horizontal', thickness: 2 },
  render: (args) => (
    <HorizontalFrame>
      <Divider {...args} />
    </HorizontalFrame>
  ),
}

export const Vertical: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Divider orientation="vertical" thickness={1} />`,
      },
    },
  },
  args: { orientation: 'vertical', thickness: 1 },
  render: (args) => (
    <VerticalFrame>
      <Divider {...args} />
    </VerticalFrame>
  ),
}

export const VerticalThick: Story = {
  name: 'Vertical thickness 2',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Divider orientation="vertical" thickness={2} />`,
      },
    },
  },
  args: { orientation: 'vertical', thickness: 2 },
  render: (args) => (
    <VerticalFrame>
      <Divider {...args} />
    </VerticalFrame>
  ),
}


export const AllStates: Story = {
  name: 'Orientation & thickness',
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

    return (
      <div style={{ padding: 8 }}>
    
        <table style={{ borderCollapse: 'collapse', width: '100%', maxWidth: 480 }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Orientation</th>
              <th style={th}>Thickness 1</th>
              <th style={th}>Thickness 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Horizontal</td>
              <td style={td}>
                <HorizontalFrame>
                  <Divider orientation="horizontal" thickness={1} />
                </HorizontalFrame>
              </td>
              <td style={td}>
                <HorizontalFrame>
                  <Divider orientation="horizontal" thickness={2} />
                </HorizontalFrame>
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Vertical</td>
              <td style={td}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <VerticalFrame>
                    <Divider orientation="vertical" thickness={1} />
                  </VerticalFrame>
                </div>
              </td>
              <td style={td}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <VerticalFrame>
                    <Divider orientation="vertical" thickness={2} />
                  </VerticalFrame>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}

/** Uso mínimo: separar contenido relacionado. */
export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => (
    <div
      style={{
        fontFamily: 'sans-serif',
        fontSize: 14,
        maxWidth: 480,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        border: '1px solid #e5e5e5',
        borderRadius: 8,
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      <div style={{ padding: '12px 16px', fontWeight: 600 }}>Cuenta</div>
      <Divider orientation="horizontal" thickness={1} />
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          minHeight: 48,
          paddingInline: 16,
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', paddingBlock: 12 }}>Perfil</span>
        <div style={{ display: 'flex', alignItems: 'stretch', paddingBlock: 12, paddingInline: 16 }}>
          <Divider orientation="vertical" thickness={1} />
        </div>
        <span style={{ display: 'flex', alignItems: 'center', paddingBlock: 12 }}>Configuración</span>
        <div style={{ display: 'flex', alignItems: 'stretch', paddingBlock: 12, paddingInline: 16 }}>
          <Divider orientation="vertical" thickness={1} />
        </div>
        <span style={{ display: 'flex', alignItems: 'center', paddingBlock: 12 }}>Ayuda</span>
      </div>
      <Divider orientation="horizontal" thickness={1} />
      <div style={{ padding: '12px 16px', color: '#666' }}>Cerrar sesión</div>
    </div>
  ),
}
