import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  PhoneInput,
  type PhoneInputAppearance,
  type PhoneInputTone,
} from './phone-input'

type PhoneStoryArgs = {
  appearance: PhoneInputAppearance
  tone: PhoneInputTone
  error: boolean
  disabled: boolean
}

const meta = {
  title: 'Components/Internal Building Blocks/PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Campo telefónico compuesto: Select de código de país + TextInput del número. Appearances outlined y underline; tones standard e inverse; estados default, error y disabled.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['outlined', 'underline'],
      table: { defaultValue: { summary: 'outlined' } },
    },
    tone: {
      control: 'radio',
      options: ['standard', 'inverse'],
      description:
        'standard sobre superficies claras · inverse sobre oscuras / brand',
      table: { defaultValue: { summary: 'standard' } },
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
  tone = 'standard',
  error = false,
  disabled = false,
}: PhoneStoryArgs) {
  const [country, setCountry] = useState('mx')
  const [number, setNumber] = useState('')

  return (
    <div style={fieldFrame}>
      <PhoneInput
        appearance={appearance}
        tone={tone}
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

const inverseDecorator: Story['decorators'] = [
  (Story) => (
    <div
      style={{
        background: 'var(--color-surface-brand-strong, #231f20)',
        padding: 24,
        borderRadius: 8,
        display: 'inline-block',
        minWidth: 360,
      }}
    >
      <Story />
    </div>
  ),
]

export const Playground: Story = {
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  render: () => (
    <Specimen appearance="outlined" tone="standard" error={false} disabled={false} />
  ),
}

export const Inverse: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => (
    <Specimen appearance="outlined" tone="inverse" error={false} disabled={false} />
  ),
}

export const Underline: Story = {
  render: () => (
    <Specimen appearance="underline" tone="standard" error={false} disabled={false} />
  ),
}

export const Error: Story = {
  render: () => (
    <Specimen appearance="outlined" tone="standard" error disabled={false} />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Specimen appearance="outlined" tone="standard" error={false} disabled />
  ),
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
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>State</th>
              <th style={th}>Outlined</th>
              <th style={th}>Underline</th>
              <th style={th}>Outlined inverse</th>
              <th style={th}>Underline inverse</th>
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
                  <Specimen appearance="outlined" tone="standard" {...state} />
                </td>
                <td style={td}>
                  <Specimen appearance="underline" tone="standard" {...state} />
                </td>
                <td style={tdInverse}>
                  <Specimen appearance="outlined" tone="inverse" {...state} />
                </td>
                <td style={tdInverse}>
                  <Specimen appearance="underline" tone="inverse" {...state} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}
