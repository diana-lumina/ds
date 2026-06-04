import type { Meta, StoryObj } from '@storybook/react'
import { ModalActionable, ModalActionableProps } from './modal-actionable'
import { StarIcon } from 'lucide-react'

const meta: Meta<typeof ModalActionable> = {
  title: 'Components/ModalActionable',
  component: ModalActionable,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Modal con formulario dinámico. Soporta campos de tipo input, rating con estrellas y textarea. Construido sobre ModalBase.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    open: {
      description: 'Controla si el modal está abierto',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    title: {
      description: 'Título del modal',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    subheader: {
      description: 'Subtítulo o descripción del modal',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    cancelLabel: {
      description: 'Texto del botón cancelar',
      control: 'text',
      table: { defaultValue: { summary: 'Cancelar' } },
    },
    submitLabel: {
      description: 'Texto del botón de acción principal',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    note: {
      description: 'Nota informativa al pie del formulario',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof ModalActionable>

const defaultFields: ModalActionableProps['fields'] = [
  {
    type: 'input',
    id: 'titulo',
    label: 'Añade un título a tu reseña',
    placeholder: 'Ingresa algún título a tu opinión',
    required: true,
  },
  {
    type: 'rating',
    id: 'calificacion',
    label: 'Califica con estrella este programa',
    required: true,
    maxStars: 5,
  },
  {
    type: 'textarea',
    id: 'resena',
    label: 'Ingresa tu reseña',
    placeholder: 'Añade tu reseña aquí sobre este programa',
    required: true,
    maxLength: 140,
  },
]

export const Default: Story = {
  name: 'ModalActionable — Default',
  args: {
    open: true,
    icon: <StarIcon size={24} />,
    title: 'Añadir mi opinión',
    subheader: 'Deja tu reseña sobre este programa para ayudar a otros a tomar una decisión',
    fields: defaultFields,
    note: 'Tu opinión será revisado antes de publicarse por temas de seguridad.',
    cancelLabel: 'Cancelar',
    submitLabel: 'Añadir mi opinión',
  },
}

export const SoloInput: Story = {
  name: 'ModalActionable — Solo input',
  args: {
    open: true,
    title: 'Título',
    subheader: 'Subheader',
    fields: [
      {
        type: 'input',
        id: 'campo',
        label: 'Label',
        placeholder: 'Placeholder',
        required: true,
      },
    ],
    submitLabel: 'Confirmar',
  },
}

export const SoloRating: Story = {
  name: 'ModalActionable — Solo rating',
  args: {
    open: true,
    title: 'Califica este programa',
    fields: [
      {
        type: 'rating',
        id: 'rating',
        label: 'Calificación',
        required: true,
        maxStars: 5,
      },
    ],
    submitLabel: 'Enviar calificación',
  },
}

export const SoloTextarea: Story = {
  name: 'ModalActionable — Solo textarea',
  args: {
    open: true,
    title: 'Deja un comentario',
    fields: [
      {
        type: 'textarea',
        id: 'comentario',
        label: 'Comentario',
        placeholder: 'Escribe tu comentario aquí',
        required: true,
        maxLength: 200,
      },
    ],
    submitLabel: 'Enviar',
  },
}

export const Playground: Story = {
  name: 'ModalActionable — Playground',
  args: {
    open: true,
    icon: <StarIcon size={24} />,
    title: 'Título',
    subheader: 'Subheader',
    fields: defaultFields,
    note: 'Nota informativa',
    cancelLabel: 'Cancelar',
    submitLabel: 'Confirmar',
  },
}