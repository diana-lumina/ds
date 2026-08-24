import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Combobox,
  type ComboboxAppearance,
  type ComboboxOption,
  type ComboboxTone,
} from './combobox'

const campusOptions: ComboboxOption[] = [
  { value: 'mty', label: 'Monterrey' },
  { value: 'cdmx', label: 'Ciudad de México' },
  { value: 'gdl', label: 'Guadalajara' },
  { value: 'qro', label: 'Querétaro' },
  { value: 'pue', label: 'Puebla' },
]

type ComboboxStoryArgs = {
  appearance: ComboboxAppearance
  tone: ComboboxTone
  error: boolean
  disabled: boolean
  label: string
  supportingText: string
  placeholder: string
}

const meta = {
  title: 'Components/Inputs/Combobox',
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Campo de autocompletado: FormField (label, TextInput, supporting) y lista de opciones con los mismos estilos del Select. Filtra al escribir. Appearances outlined y underline; tones standard e inverse.',
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
    placeholder: { control: 'text' },
  },
} satisfies Meta<ComboboxStoryArgs>

export default meta
type Story = StoryObj<ComboboxStoryArgs>

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

const fieldFrame: React.CSSProperties = { maxWidth: 360, minHeight: 280 }

function Specimen(args: Partial<ComboboxStoryArgs>) {
  return (
    <div style={fieldFrame}>
      <Combobox
        appearance={args.appearance}
        tone={args.tone}
        error={args.error}
        disabled={args.disabled}
        label={args.label ?? 'Campus'}
        supportingText={args.supportingText ?? 'Escribe para buscar'}
        placeholder={args.placeholder ?? 'Buscar campus'}
        options={campusOptions}
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
        minHeight: 280,
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
    label: 'Campus',
    supportingText: 'Escribe para buscar',
    placeholder: 'Buscar campus',
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<Combobox
  label="Campus"
  supportingText="Escribe para buscar"
  placeholder="Buscar campus"
  options={campusOptions}
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
        code: `<Combobox
  appearance="underline"
  label="Campus"
  options={campusOptions}
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
        code: `<Combobox
  tone="inverse"
  label="Campus"
  options={campusOptions}
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />,
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: function InContextStory() {
    const [value, setValue] = useState('mty')

    return (
      <div style={{ maxWidth: 360, minHeight: 280 }}>
        <Combobox
          label="Campus"
          supportingText="Escribe para buscar"
          placeholder="Buscar campus"
          options={campusOptions}
          value={value}
          onValueChange={setValue}
        />
      </div>
    )
  },
}
