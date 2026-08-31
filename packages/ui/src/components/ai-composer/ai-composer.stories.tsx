import type { Meta, StoryObj } from '@storybook/react'
import { AiComposer } from './ai-composer'

const meta: Meta<typeof AiComposer> = {
  title: 'Components/AI - Conversational/AiComposer',
  component: AiComposer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'submitting', 'generating', 'error', 'disabled'],
      table: { defaultValue: { summary: 'default' } },
    },
    placeholder: { control: 'text' },
    className: { control: false, table: { disable: true } },
    leadingAction: { control: false, table: { disable: true } },
    trailingAction: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof AiComposer>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const sampleValue = 'Quiero inscribirme en Diseño de interfaces.'

export const Playground: Story = {
  args: {
    status: 'default',
    placeholder: 'Escribe un mensaje',
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiComposer aria-label="Mensaje" placeholder="Escribe un mensaje" />`,
      },
    },
  },
  render: () => (
    <AiComposer aria-label="Mensaje" placeholder="Escribe un mensaje" />
  ),
}

export const WithValue: Story = {
  name: 'Con valor',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiComposer aria-label="Mensaje" defaultValue="${sampleValue}" />`,
      },
    },
  },
  render: () => (
    <AiComposer aria-label="Mensaje" defaultValue={sampleValue} />
  ),
}

export const Submitting: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiComposer aria-label="Mensaje" status="submitting" defaultValue="${sampleValue}" />`,
      },
    },
  },
  render: () => (
    <AiComposer
      aria-label="Mensaje"
      status="submitting"
      defaultValue={sampleValue}
    />
  ),
}

export const Generating: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiComposer aria-label="Mensaje" status="generating" defaultValue="${sampleValue}" />`,
      },
    },
  },
  render: () => (
    <AiComposer
      aria-label="Mensaje"
      status="generating"
      defaultValue={sampleValue}
    />
  ),
}

export const Error: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiComposer aria-label="Mensaje" status="error" defaultValue="${sampleValue}" />`,
      },
    },
  },
  render: () => (
    <AiComposer aria-label="Mensaje" status="error" defaultValue={sampleValue} />
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiComposer aria-label="Mensaje" status="disabled" />`,
      },
    },
  },
  render: () => <AiComposer aria-label="Mensaje" status="disabled" />,
}

export const AllStates: Story = {
  name: 'States',
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
      verticalAlign: 'top',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap',
    }
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
    }
    const statuses = [
      'default',
      'submitting',
      'generating',
      'error',
      'disabled',
    ] as const

    return (
      <div style={{ padding: 8 }}>
      
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }} />
              <th style={th}>Empty</th>
              <th style={th}>Value</th>
            </tr>
          </thead>
          <tbody>
            {statuses.map((status, index) => {
              const last = index === statuses.length - 1
              return (
                <tr key={status}>
                  <td style={{ ...rowLabel, borderBottom: last ? 'none' : undefined }}>
                    {status}
                  </td>
                  <td style={{ ...td, borderBottom: last ? 'none' : undefined }}>
                    <AiComposer
                      aria-label={`Mensaje ${status} vacío`}
                      status={status}
                      placeholder="Escribe un mensaje"
                    />
                  </td>
                  <td style={{ ...td, borderBottom: last ? 'none' : undefined }}>
                    <AiComposer
                      aria-label={`Mensaje ${status} con valor`}
                      status={status}
                      defaultValue={sampleValue}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  },
}
