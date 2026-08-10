import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
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
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    thickness: {
      control: 'select',
      options: [1, 2],
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 11, color: '#888', marginBottom: 8 }
}

export const Playground: Story = {
  args: {
    orientation: 'horizontal',
    thickness: 1,
  },
  render: (args) =>
    args.orientation === 'vertical' ? (
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          height: 96,
          paddingInline: 24,
        }}
      >
        <Divider {...args} />
      </div>
    ) : (
      <div style={{ width: 300 }}>
        <Divider {...args} />
      </div>
    ),
}

export const Horizontal: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 300 }}>
      <div>
        <div style={captionStyle()}>Thickness 1</div>
        <Divider orientation="horizontal" thickness={1} />
      </div>
      <div>
        <div style={captionStyle()}>Thickness 2</div>
        <Divider orientation="horizontal" thickness={2} />
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 48, height: 96 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}>
        <div style={captionStyle()}>Thickness 1</div>
        <div style={{ flex: 1, display: 'flex' }}>
          <Divider orientation="vertical" thickness={1} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, height: '100%' }}>
        <div style={captionStyle()}>Thickness 2</div>
        <div style={{ flex: 1, display: 'flex' }}>
          <Divider orientation="vertical" thickness={2} />
        </div>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
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
