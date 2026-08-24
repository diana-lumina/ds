import type { Meta, StoryObj } from '@storybook/react'
import { TimeField, type TimeFieldAppearance, type TimeFieldTone } from './time-field'

type TimeFieldStoryArgs = {
  appearance: TimeFieldAppearance
  tone: TimeFieldTone
  error: boolean
  disabled: boolean
  label: string
  supportingText: string
}

const meta = {
  title: 'Components/Inputs/TimeField',
  component: TimeField,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Campo de hora compuesto como FormField: label, TextInput `type="time"` y supporting. Appearances outlined y underline; tones standard e inverse. ClockIcon trailing (abre el picker nativo).',
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
    label: { control: 'text' },
    supportingText: { control: 'text' },
  },
} satisfies Meta<TimeFieldStoryArgs>

export default meta
type Story = StoryObj<TimeFieldStoryArgs>

const showCode = {
  docs: {
    canvas: { sourceState: 'shown' as const },
  },
}

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const fieldFrame: React.CSSProperties = { maxWidth: 360 }

function Specimen(args: Partial<TimeFieldStoryArgs> & { defaultValue?: string }) {
  return (
    <div style={fieldFrame}>
      <TimeField
        appearance={args.appearance}
        tone={args.tone}
        error={args.error}
        disabled={args.disabled}
        label={args.label ?? 'Hora de inicio'}
        supportingText={args.supportingText ?? 'Selecciona la hora'}
        defaultValue={args.defaultValue}
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
    label: 'Hora de inicio',
    supportingText: 'Selecciona la hora',
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TimeField
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>`,
      },
    },
  },
  render: () => <Specimen />,
}

export const Underline: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TimeField
  appearance="underline"
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>`,
      },
    },
  },
  render: () => <Specimen appearance="underline" />,
}

export const Inverse: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TimeField
  tone="inverse"
  label="Hora de inicio"
  supportingText="Selecciona la hora"
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />,
}

export const Error: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TimeField
  error
  label="Hora de inicio"
  supportingText="La hora es obligatoria"
/>`,
      },
    },
  },
  render: () => <Specimen error supportingText="La hora es obligatoria" />,
}

export const Disabled: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<TimeField
  disabled
  label="Hora de inicio"
  supportingText="Selecciona la hora"
  defaultValue="09:30"
/>`,
      },
    },
  },
  render: () => <Specimen disabled defaultValue="09:30" />,
}

export const AllAppearances: Story = {
  name: 'Appearances & tones',
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
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
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
              <th style={th}> </th>
              <th style={th}>Standard</th>
              <th style={th}>Inverse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...th, paddingTop: 16 }}>Outlined</td>
              <td style={td}>
                <Specimen appearance="outlined" defaultValue="09:30" />
              </td>
              <td style={tdInverse}>
                <Specimen appearance="outlined" tone="inverse" defaultValue="09:30" />
              </td>
            </tr>
            <tr>
              <td style={th}>Outlined disabled</td>
              <td style={td}>
                <Specimen appearance="outlined" defaultValue="09:30" disabled />
              </td>
              <td style={tdInverse}>
                <Specimen
                  appearance="outlined"
                  tone="inverse"
                  defaultValue="09:30"
                  disabled
                />
              </td>
            </tr>
            <tr>
              <td style={th}>Underline</td>
              <td style={td}>
                <Specimen appearance="underline" defaultValue="09:30" />
              </td>
              <td style={tdInverse}>
                <Specimen appearance="underline" tone="inverse" defaultValue="09:30" />
              </td>
            </tr>
            <tr>
              <td style={{ ...th, borderBottom: 'none' }}>Underline disabled</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <Specimen appearance="underline" defaultValue="09:30" disabled />
              </td>
              <td style={{ ...tdInverse, borderBottom: 'none' }}>
                <Specimen
                  appearance="underline"
                  tone="inverse"
                  defaultValue="09:30"
                  disabled
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
