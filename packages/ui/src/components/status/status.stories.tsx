import type { Meta, StoryObj } from '@storybook/react'
import { Status } from './status'
import { CheckCircleIcon } from '@workspace/ui/icons'

type StatusStoryArgs = Omit<React.ComponentProps<typeof Status>, 'icon'> & {
  /** Icon visible (opcional; instance swap vía prop icon) */
  showIcon: boolean
}

const meta = {
  title: 'Components/Labels & Status/Status',
  component: Status as unknown as React.ComponentType<StatusStoryArgs>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Condición generada por el sistema. No interactivo; la identidad se resuelve con Semantic modes. No expresa selección, categorías ni navegación.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size: sm · md',
      table: { 
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' }
       },
    },
    intent: {
      control: 'select',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
      description: 'neutral · info · success · warning · danger',
      table: { 
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral' }
       },
    },
    label: {
      control: 'text',
      description: 'Label breve y específico (ej. Pendiente, Completado)',
    },
    showIcon: {
      control: 'boolean',
      description: 'Icon visible (opcional; instance swap vía prop icon)',
      table: { defaultValue: { summary: 'false' } },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<StatusStoryArgs>

export default meta
type Story = StoryObj<StatusStoryArgs>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
] as const

const INTENTS = [
  { value: 'neutral', label: 'Pendiente' },
  { value: 'info', label: 'En revisión' },
  { value: 'success', label: 'Completado' },
  { value: 'warning', label: 'Requiere atención' },
  { value: 'danger', label: 'Error' },
] as const

export const Playground: Story = {
  args: {
    size: 'sm',
    intent: 'neutral',
    label: 'Pendiente',
    showIcon: false,
  },
  render: ({ showIcon, ...args }) => (
    <Status {...args} icon={showIcon ? <CheckCircleIcon /> : undefined} />
  ),
}

export const Neutral: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Status intent="neutral" label="Pendiente" />`,
      },
    },
  },
  render: () => <Status intent="neutral" label="Pendiente" />,
}

export const Info: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Status intent="info" label="En revisión" />`,
      },
    },
  },
  render: () => <Status intent="info" label="En revisión" />,
}

export const Success: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Status intent="success" label="Completado" />`,
      },
    },
  },
  render: () => <Status intent="success" label="Completado" />,
}

export const Warning: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Status intent="warning" label="Requiere atención" />`,
      },
    },
  },
  render: () => <Status intent="warning" label="Requiere atención" />,
}

export const Danger: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Status intent="danger" label="Error" />`,
      },
    },
  },
  render: () => <Status intent="danger" label="Error" />,
}

export const WithIcon: Story = {
  name: 'With icon',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Status intent="success" label="Completado" icon={<CheckCircleIcon />} />`,
      },
    },
  },
  render: () => (
    <Status intent="success" label="Completado" icon={<CheckCircleIcon />} />
  ),
}

export const AllIntents: Story = {
  name: 'Intent & size',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
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
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Intent</th>
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
              <th style={th}>With icon</th>
            </tr>
          </thead>
          <tbody>
            {INTENTS.map(({ value, label }) => (
              <tr key={value}>
                <td style={rowLabel}>{value}</td>
                {SIZES.map(({ value: size }) => (
                  <td key={size} style={td}>
                    <Status size={size} intent={value} label={label} />
                  </td>
                ))}
                <td style={td}>
                  <Status size="sm" intent={value} label={label} icon={<CheckCircleIcon />} />
                </td>
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
        { title: 'Inscripción enviada', intent: 'info' as const, label: 'En revisión' },
        { title: 'Pago confirmado', intent: 'success' as const, label: 'Completado' },
        { title: 'Documentos pendientes', intent: 'warning' as const, label: 'Requiere atención' },
        { title: 'Solicitud rechazada', intent: 'danger' as const, label: 'Error' },
        { title: 'Borrador guardado', intent: 'neutral' as const, label: 'Pendiente' },
      ].map(({ title, intent, label }) => (
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
          <Status size="sm" intent={intent} label={label} />
        </div>
      ))}
    </div>
  ),
}
