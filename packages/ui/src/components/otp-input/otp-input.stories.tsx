import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { OtpInput } from './otp-input'

const meta: Meta<typeof OtpInput> = {
  title: 'Components/Form Controls/OtpInput',
  component: OtpInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Código de un solo uso en 6 segmentos. Estados default y focus-visible: el anillo rodea el grupo, no cada celda.',
      },
    },
  },
  argTypes: {
    value: { control: false },
    defaultValue: { control: 'text' },
    'aria-label': { control: 'text' },
    autoFocus: { control: 'boolean' },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof OtpInput>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

function Specimen({
  defaultValue,
  autoFocus,
}: {
  defaultValue?: string
  autoFocus?: boolean
}) {
  const [code, setCode] = useState(defaultValue ?? '')

  return (
    <OtpInput
      value={code}
      onValueChange={setCode}
      autoFocus={autoFocus}
      aria-label="Código de verificación"
    />
  )
}

export const Playground: Story = {
  args: {
    defaultValue: '',
    autoFocus: false,
  },
  render: (args) => (
    <Specimen defaultValue={args.defaultValue} autoFocus={args.autoFocus} />
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<OtpInput aria-label="Código de verificación" />`,
      },
    },
  },
  render: () => <Specimen />,
}

export const FocusVisible: Story = {
  name: 'Focus-visible',
  parameters: {
    docs: {
      description: {
        story:
          'El anillo rodea los 6 segmentos. En el canvas, Tab entra al primer dígito.',
      },
      canvas: { sourceState: 'shown' },
      source: {
        code: `<OtpInput aria-label="Código de verificación" autoFocus />`,
      },
    },
  },
  render: () => <Specimen autoFocus />,
}

export const WithValue: Story = {
  name: 'Con valor',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<OtpInput defaultValue="847291" aria-label="Código de verificación" />`,
      },
    },
  },
  render: () => <Specimen defaultValue="847291" />,
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
      textAlign: 'left',
      padding: '0 24px 12px 0',
      borderBottom: '1px solid #eee',
    }
    const td: React.CSSProperties = {
      padding: '16px 24px 16px 0',
      verticalAlign: 'middle',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>State</th>
              <th style={th}> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...th, borderBottom: '1px solid #f0f0f0' }}>Default</td>
              <td style={td}>
                <Specimen defaultValue="12" />
              </td>
            </tr>
            <tr>
              <td style={{ ...th, borderBottom: 'none' }}>Focus-visible</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <Specimen defaultValue="12" autoFocus />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
