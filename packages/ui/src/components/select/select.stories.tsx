import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  type SelectAppearance,
} from './select'

type SelectStoryArgs = {
  appearance: SelectAppearance
  error: boolean
  disabled: boolean
  placeholder: string
}

const meta = {
  title: 'Components/Form Controls/Select',
  component: SelectTrigger,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Select sobre Radix. Appearances outlined y underline; estados default, error y disabled. El trigger usa CaretDownIcon.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['outlined', 'underline'],
      table: { defaultValue: { summary: 'outlined' } },
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

const fieldFrame: React.CSSProperties = { maxWidth: 360 }

function Specimen({
  appearance = 'outlined',
  error = false,
  disabled = false,
  placeholder = 'Elige un campus',
}: SelectStoryArgs) {
  const [value, setValue] = useState<string>()

  return (
    <div style={fieldFrame}>
      <Select value={value} onValueChange={setValue} disabled={disabled}>
        <SelectTrigger appearance={appearance} error={error} aria-label="Campus">
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

export const Playground: Story = {
  args: {
    appearance: 'outlined',
    error: false,
    disabled: false,
    placeholder: 'Elige un campus',
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
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
  render: () => (
    <Specimen
      appearance="outlined"
      error={false}
      disabled={false}
      placeholder="Elige un campus"
    />
  ),
}

export const Underline: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<SelectTrigger appearance="underline" aria-label="Campus">
  <SelectValue placeholder="Elige un campus" />
</SelectTrigger>`,
      },
    },
  },
  render: () => (
    <Specimen
      appearance="underline"
      error={false}
      disabled={false}
      placeholder="Elige un campus"
    />
  ),
}

export const Error: Story = {
  render: () => (
    <Specimen
      appearance="outlined"
      error
      disabled={false}
      placeholder="Elige un campus"
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Specimen
      appearance="outlined"
      error={false}
      disabled
      placeholder="Elige un campus"
    />
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
            <tr>
              <td style={rowLabel}>Default</td>
              <td style={td}>
                <Specimen appearance="outlined" error={false} disabled={false} placeholder="Elige un campus" />
              </td>
              <td style={td}>
                <Specimen appearance="underline" error={false} disabled={false} placeholder="Elige un campus" />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Error</td>
              <td style={td}>
                <Specimen appearance="outlined" error disabled={false} placeholder="Elige un campus" />
              </td>
              <td style={td}>
                <Specimen appearance="underline" error disabled={false} placeholder="Elige un campus" />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Disabled</td>
              <td style={td}>
                <Specimen appearance="outlined" error={false} disabled placeholder="Elige un campus" />
              </td>
              <td style={td}>
                <Specimen appearance="underline" error={false} disabled placeholder="Elige un campus" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
