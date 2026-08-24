import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DatePicker, type DatePickerAppearance, type DatePickerTone } from './date-picker'

type DatePickerStoryArgs = {
  appearance: DatePickerAppearance
  tone: DatePickerTone
  error: boolean
  disabled: boolean
  label: string
  supportingText: string
}

const meta = {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Selector de fecha: DateField + Calendar en un Popover de Radix. El ícono abre el calendario; al elegir un día se cierra y se actualiza el campo. Appearances outlined y underline; tones standard e inverse.',
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
} satisfies Meta<DatePickerStoryArgs>

export default meta
type Story = StoryObj<DatePickerStoryArgs>

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

const fieldFrame: React.CSSProperties = { maxWidth: 360, minHeight: 420 }

function Specimen(
  args: Partial<DatePickerStoryArgs> & { defaultValue?: Date },
) {
  return (
    <div style={fieldFrame}>
      <DatePicker
        appearance={args.appearance}
        tone={args.tone}
        error={args.error}
        disabled={args.disabled}
        label={args.label ?? 'Fecha de inicio'}
        supportingText={args.supportingText ?? 'Selecciona el día'}
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
        minHeight: 420,
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
    label: 'Fecha de inicio',
    supportingText: 'Selecciona el día',
  },
  render: (args) => <Specimen {...args} defaultValue={new Date(2026, 7, 12)} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<DatePicker
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>`,
      },
    },
  },
  render: () => <Specimen defaultValue={new Date(2026, 7, 12)} />,
}

export const Underline: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<DatePicker
  appearance="underline"
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>`,
      },
    },
  },
  render: () => <Specimen appearance="underline" defaultValue={new Date(2026, 7, 12)} />,
}

export const Inverse: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<DatePicker
  tone="inverse"
  label="Fecha de inicio"
  supportingText="Selecciona el día"
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" defaultValue={new Date(2026, 7, 12)} />,
}

export const Disabled: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<DatePicker
  disabled
  label="Fecha de inicio"
  defaultValue={new Date(2026, 7, 12)}
/>`,
      },
    },
  },
  render: () => <Specimen disabled defaultValue={new Date(2026, 7, 12)} />,
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: function InContextStory() {
    const [value, setValue] = useState<Date | undefined>(new Date(2026, 7, 12))

    return (
      <div style={{ maxWidth: 360 }}>
        <DatePicker
          label="Fecha de inicio"
          supportingText="Selecciona el día"
          value={value}
          onValueChange={setValue}
        />
      </div>
    )
  },
}
