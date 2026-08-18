import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PhoneInput, type PhoneInputAppearance } from './phone-input'

type PhoneStoryArgs = {
  appearance: PhoneInputAppearance
  error: boolean
  disabled: boolean
}

const meta = {
  title: 'Components/Form Controls/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Campo telefónico compuesto: Select de código de país + TextInput del número. Appearances outlined y underline; estados default, error y disabled.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['outlined', 'underline'],
      table: { defaultValue: { summary: 'outlined' } },
    },
    error: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
  },
} satisfies Meta<PhoneStoryArgs>

export default meta
type Story = StoryObj<PhoneStoryArgs>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const fieldFrame: React.CSSProperties = { maxWidth: 360 }

function Specimen({
  appearance = 'outlined',
  error = false,
  disabled = false,
}: PhoneStoryArgs) {
  const [country, setCountry] = useState('mx')
  const [number, setNumber] = useState('')

  return (
    <div style={fieldFrame}>
      <PhoneInput
        appearance={appearance}
        error={error}
        disabled={disabled}
        country={country}
        onCountryChange={setCountry}
        value={number}
        onChange={(event) => setNumber(event.target.value)}
        aria-label="Teléfono"
      />
    </div>
  )
}

export const Playground: Story = {
  args: {
    appearance: 'outlined',
    error: false,
    disabled: false,
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  render: () => (
    <Specimen appearance="outlined" error={false} disabled={false} />
  ),
}

export const Underline: Story = {
  render: () => (
    <Specimen appearance="underline" error={false} disabled={false} />
  ),
}

export const Error: Story = {
  render: () => <Specimen appearance="outlined" error disabled={false} />,
}

export const Disabled: Story = {
  render: () => <Specimen appearance="outlined" error={false} disabled />,
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
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 280,
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>State</th>
              <th style={th}>Outlined</th>
              <th style={th}>Underline</th>
            </tr>
          </thead>
          <tbody>
            {(
              [
                ['Default', { error: false, disabled: false }],
                ['Error', { error: true, disabled: false }],
                ['Disabled', { error: false, disabled: true }],
              ] as const
            ).map(([label, state]) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                <td style={td}>
                  <Specimen appearance="outlined" {...state} />
                </td>
                <td style={td}>
                  <Specimen appearance="underline" {...state} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}
