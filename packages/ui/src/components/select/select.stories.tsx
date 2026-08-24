import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type SelectAppearance,
  type SelectTone,
} from './select'

type SelectStoryArgs = {
  appearance: SelectAppearance
  tone: SelectTone
  error: boolean
  disabled: boolean
  placeholder: string
}

const meta = {
  title: 'Components/Inputs/Select',
  component: SelectTrigger,
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
    appearance: {
      control: 'radio',
      options: ['outlined', 'underline'],
      table: { defaultValue: { summary: 'outlined' } },
    },
    tone: {
      control: 'radio',
      options: ['standard', 'inverse'],
      description: 'standard sobre superficies claras · inverse sobre oscuras / brand.',
      table: { defaultValue: { summary: 'standard' } },
    },
    error: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<SelectStoryArgs>

export default meta
type Story = StoryObj<SelectStoryArgs>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const showCode = {
  docs: {
    canvas: { sourceState: 'shown' as const },
  },
}

const fieldFrame: React.CSSProperties = { maxWidth: 360 }

function Specimen({
  appearance = 'outlined',
  tone = 'standard',
  error = false,
  disabled = false,
  placeholder = 'Elige un campus',
}: Partial<SelectStoryArgs>) {
  const [value, setValue] = useState<string>()

  return (
    <div style={fieldFrame}>
      <Select value={value} onValueChange={setValue} disabled={disabled}>
        <SelectTrigger appearance={appearance} tone={tone} error={error} aria-label="Campus">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mty">Monterrey</SelectItem>
          <SelectItem value="cdmx">Ciudad de México</SelectItem>
          <SelectItem value="gdl">Guadalajara</SelectItem>
        </SelectContent>
      </Select>
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
    placeholder: 'Elige un campus',
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<Select>
  <SelectTrigger aria-label="Campus">
    <SelectValue placeholder="Elige un campus" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="mty">Monterrey</SelectItem>
  </SelectContent>
</Select>`,
      },
    },
  },
  render: () => <Specimen />,
}

export const Inverse: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<SelectTrigger tone="inverse" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />,
}

export const Underline: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<SelectTrigger appearance="underline" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>`,
      },
    },
  },
  render: () => <Specimen appearance="underline" />,
}

export const Error: Story = {
  render: () => <Specimen error />,
}

export const Disabled: Story = {
  render: () => <Specimen disabled />,
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
      minWidth: 240,
    }
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)',
    }

    const states = [
      ['Default', { error: false, disabled: false }],
      ['Error', { error: true, disabled: false }],
      ['Disabled', { error: false, disabled: true }],
    ] as const

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>State</th>
              <th style={th}>Outlined standard</th>
              <th style={th}>Outlined inverse</th>
              <th style={th}>Underline standard</th>
              <th style={th}>Underline inverse</th>
            </tr>
          </thead>
          <tbody>
            {states.map(([label, state]) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                <td style={td}>
                  <Specimen appearance="outlined" tone="standard" placeholder="Elige un campus" {...state} />
                </td>
                <td style={tdInverse}>
                  <Specimen appearance="outlined" tone="inverse" placeholder="Elige un campus" {...state} />
                </td>
                <td style={td}>
                  <Specimen appearance="underline" tone="standard" placeholder="Elige un campus" {...state} />
                </td>
                <td style={tdInverse}>
                  <Specimen appearance="underline" tone="inverse" placeholder="Elige un campus" {...state} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}
