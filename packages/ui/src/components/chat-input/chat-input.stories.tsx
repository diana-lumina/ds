import type { Meta, StoryObj } from '@storybook/react'
import { ChatInput } from './chat-input'

const meta: Meta<typeof ChatInput> = {
  title: 'Components/AI - Conversational/ChatInput',
  component: ChatInput,
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
    placeholder: { control: 'text' },
    error: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof ChatInput>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    placeholder: 'Escribe un mensaje',
    error: false,
    disabled: false,
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ChatInput aria-label="Mensaje" placeholder="Escribe un mensaje" />`,
      },
    },
  },
  render: () => (
    <ChatInput aria-label="Mensaje" placeholder="Escribe un mensaje" />
  ),
}

export const WithValue: Story = {
  name: 'Con valor',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ChatInput aria-label="Mensaje" defaultValue="Quiero inscribirme en Diseño de interfaces." />`,
      },
    },
  },
  render: () => (
    <ChatInput
      aria-label="Mensaje"
      defaultValue="Quiero inscribirme en Diseño de interfaces."
    />
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ChatInput aria-label="Mensaje" disabled />`,
      },
    },
  },
  render: () => <ChatInput aria-label="Mensaje" disabled />,
}

export const Error: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ChatInput aria-label="Mensaje" error />`,
      },
    },
  },
  render: () => <ChatInput aria-label="Mensaje" error />,
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
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap',
    }
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
    }

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
            <tr>
              <td style={rowLabel}>Default</td>
              <td style={td}>
                <ChatInput aria-label="Mensaje" placeholder="Escribe un mensaje" />
              </td>
              <td style={td}>
                <ChatInput
                  aria-label="Mensaje"
                  defaultValue="Quiero inscribirme en Diseño de interfaces."
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Disabled</td>
              <td style={td}>
                <ChatInput aria-label="Mensaje" disabled placeholder="Escribe un mensaje" />
              </td>
              <td style={td}>
                <ChatInput
                  aria-label="Mensaje"
                  disabled
                  defaultValue="Quiero inscribirme en Diseño de interfaces."
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Error</td>
              <td style={td}>
                <ChatInput aria-label="Mensaje" error placeholder="Escribe un mensaje" />
              </td>
              <td style={td}>
                <ChatInput
                  aria-label="Mensaje"
                  error
                  defaultValue="Quiero inscribirme en Diseño de interfaces."
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>Focus-visible</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <ChatInput
                  aria-label="Mensaje en foco"
                  placeholder="Escribe un mensaje"
                  autoFocus
                />
              </td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <ChatInput
                  aria-label="Mensaje con valor en foco"
                  defaultValue="Quiero inscribirme en Diseño de interfaces."
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
