import type { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './text-input'
import { TagIcon, SearchIcon, MailIcon } from 'lucide-react'

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Campo de texto con soporte para ícono izquierdo, estado de error y label. Construido sobre el primitivo Input de shadcn.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    placeholder: {
      description: 'Texto de placeholder',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    label: {
      description: 'Label del campo',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      description: 'Deshabilita el campo',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    error: {
      description: 'Muestra el estado de error',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    errorMessage: {
      description: 'Mensaje de error — solo visible cuando error es true',
      control: 'text',
      if: { arg: 'error', eq: true },
      table: { type: { summary: 'string' } },
    },
    required: {
      description: 'Muestra el indicador de campo requerido',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof TextInput>

export const Default: Story = {
  name: 'TextInput — Default',
  args: {
    placeholder: 'Placeholder',
  },
}

export const ConIcono: Story = {
  name: 'TextInput — Con ícono',
  args: {
    placeholder: 'Ingresa tu código',
    icon: <TagIcon size={16} />,
  },
}

export const ConLabel: Story = {
  name: 'TextInput — Con label',
  args: {
    id: 'email',
    label: 'Correo electrónico',
    placeholder: 'correo@ejemplo.com',
    icon: <MailIcon size={16} />,
    required: true,
  },
}

export const Disabled: Story = {
  name: 'TextInput — Disabled',
  args: {
    placeholder: 'Placeholder',
    icon: <TagIcon size={16} />,
    disabled: true,
  },
}

export const Error: Story = {
  name: 'TextInput — Error',
  args: {
    placeholder: 'Placeholder',
    icon: <TagIcon size={16} />,
    error: true,
    errorMessage: 'Este campo es requerido',
  },
}

export const ErrorSinMensaje: Story = {
  name: 'TextInput — Error sin mensaje',
  args: {
    placeholder: 'Placeholder',
    error: true,
  },
}

export const QAEstados: Story = {
  name: 'TextInput — QA Estados',
  parameters: {
    docs: {
      description: {
        story: 'Todos los estados del componente para verificación visual.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 max-w-xs">
      <TextInput placeholder="Default" />
      <TextInput placeholder="Con ícono" icon={<SearchIcon size={16} />} />
      <TextInput placeholder="Disabled" disabled />
      <TextInput placeholder="Error" error errorMessage="Este campo es requerido" />
      <TextInput
        id="label"
        label="Con label"
        placeholder="Placeholder"
        required
        icon={<TagIcon size={16} />}
      />
    </div>
  ),
}

export const Playground: Story = {
  name: 'TextInput — Playground',
  args: {
    placeholder: 'Placeholder',
    icon: <TagIcon size={16} />,
    disabled: false,
    error: false,
    required: false,
  },
}