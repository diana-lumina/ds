import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from './text-area'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Campo de texto multilínea con soporte para estado de error, contador de caracteres y label. Construido sobre el primitivo Textarea de shadcn.',
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
    rows: {
      description: 'Número de filas visibles',
      control: { type: 'number', min: 1 },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
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
    maxLength: {
      description: 'Límite máximo de caracteres — muestra contador',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    required: {
      description: 'Muestra el indicador de campo requerido',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  name: 'TextArea — Default',
  args: {
    placeholder: 'Placeholder',
  },
}

export const ConLabel: Story = {
  name: 'TextArea — Con label',
  args: {
    id: 'resena',
    label: 'Reseña',
    placeholder: 'Escribe tu reseña aquí',
    required: true,
  },
}

export const Disabled: Story = {
  name: 'TextArea — Disabled',
  args: {
    placeholder: 'Placeholder',
    disabled: true,
  },
}

export const Error: Story = {
  name: 'TextArea — Error',
  args: {
    placeholder: 'Placeholder',
    error: true,
    errorMessage: 'Este campo es requerido',
  },
}

export const ErrorSinMensaje: Story = {
  name: 'TextArea — Error sin mensaje',
  args: {
    placeholder: 'Placeholder',
    error: true,
  },
}

export const ConContador: Story = {
  name: 'TextArea — Con contador',
  args: {
    id: 'resena',
    label: 'Reseña',
    placeholder: 'Escribe tu reseña aquí',
    maxLength: 140,
    required: true,
  },
}

export const QAEstados: Story = {
  name: 'TextArea — QA Estados',
  parameters: {
    docs: {
      description: {
        story: 'Todos los estados del componente para verificación visual.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 max-w-xs">
      <TextArea placeholder="Default" />
      <TextArea placeholder="Disabled" disabled />
      <TextArea placeholder="Error" error errorMessage="Este campo es requerido" />
      <TextArea
        id="contador"
        label="Con contador"
        placeholder="Escribe aquí"
        maxLength={140}
        required
      />
    </div>
  ),
}

export const Playground: Story = {
  name: 'TextArea — Playground',
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    error: false,
    rows: 4,
    required: false,
  },
}