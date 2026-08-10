import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Etiqueta de texto corta. Solo acepta texto.
Para contadores de notificaciones usa CounterBadge.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    children: {
      control: 'text',
      description: 'Texto visible del badge',
    },
    tone: {
      control: 'select',
      options: ['neutral'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    size: 'sm',
    tone: 'neutral',
    children: 'Nuevo',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Badge size="sm">Nuevo</Badge>
        <div style={captionStyle()}>Small</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Badge size="md">Nuevo</Badge>
        <div style={captionStyle()}>Medium</div>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        fontFamily: 'sans-serif',
        maxWidth: 360,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Curso de UX Research</h3>
        <Badge size="sm">Nuevo</Badge>
      </div>
      <p style={{ margin: 0, fontSize: 13, color: '#666', lineHeight: 1.4 }}>
        Aprende métodos de investigación para validar hipótesis de producto.
      </p>
    </div>
  ),
}
