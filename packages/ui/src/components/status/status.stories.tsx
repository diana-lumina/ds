import type { Meta, StoryObj } from '@storybook/react'
import { Status } from './status'
import { BagIcon } from '@workspace/ui/icons'

type StatusStoryArgs = Omit<React.ComponentProps<typeof Status>, 'icon'> & {
  showIcon: boolean
}

const meta: Meta<StatusStoryArgs> = {
  title: 'Components/Status',
  component: Status,
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
    intent: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
    showIcon: {
      control: 'boolean',
      description: 'Muestra el ícono a la izquierda',
    },
    children: {
      control: 'text',
    },
 
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<StatusStoryArgs>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

export const Playground: Story = {
  args: {
    size: 'sm',
    intent: 'neutral',
    children: 'Activo',
    showIcon: false,
  },
  render: ({ showIcon, ...args }) => (
    <Status {...args} icon={showIcon ? <BagIcon /> : undefined} />
  ),
}

const INTENTS = [
  { value: 'neutral', label: 'Neutral' },
  { value: 'info', label: 'Info' },
  { value: 'success', label: 'Success' },
  { value: 'warning', label: 'Warning' },
  { value: 'danger', label: 'Danger' },
] as const

export const AllIntents: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {INTENTS.map(({ value, label }) => (
          <div key={value} style={{ textAlign: 'center' }}>
            <Status intent={value}>{label}</Status>
            <div style={captionStyle()}>{value}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {INTENTS.map(({ value, label }) => (
          <div key={value} style={{ textAlign: 'center' }}>
            <Status intent={value} icon={<BagIcon />}>
              {label}
            </Status>
            <div style={captionStyle()}>{value} + ícono</div>
          </div>
        ))}
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
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
      }}
    >
      {[
        { title: 'Inscripción enviada', intent: 'info' as const },
        { title: 'Pago confirmado', intent: 'success' as const },
        { title: 'Documentos pendientes', intent: 'warning' as const },
        { title: 'Solicitud rechazada', intent: 'danger' as const },
      ].map(({ title, intent }) => (
        <div
          key={title}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
            padding: '12px 0',
            borderBottom: '1px solid #eee',
          }}
        >
          <span style={{ fontSize: 14 }}>{title}</span>
          <Status size="sm" intent={intent}>
            {intent === 'info'
              ? 'En revisión'
              : intent === 'success'
                ? 'Completado'
                : intent === 'warning'
                  ? 'Atención'
                  : 'Error'}
          </Status>
        </div>
      ))}
    </div>
  ),
}
