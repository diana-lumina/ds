import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'
import { TagIcon, StarIcon, CheckIcon, AlertCircleIcon } from 'lucide-react'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Badge informativo con variantes de color semánticas. La variante discount tiene un border-radius especial (esquina superior derecha) para usarse sobre imágenes en la esquina inferior izquierda.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    label: {
      description: 'Texto del badge',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    variant: {
      description: 'Define el color y propósito del badge',
      control: 'select',
      options: ['discount', 'amber', 'green', 'red', 'neutral'],
      table: {
        type: { summary: '"discount" | "amber" | "green" | "red" | "neutral"' },
        defaultValue: { summary: 'amber' },
      },
    },
    icon: {
      description: 'Ícono opcional a la izquierda del texto',
      table: { type: { summary: 'ReactNode' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Discount: Story = {
  name: 'Badge — Discount',
  parameters: {
    docs: {
      description: {
        story: 'Variante para mostrar descuentos sobre imágenes de cards.',
      },
    },
    backgrounds: { default: 'dark' },
  },
  args: {
    label: '15% OFF',
    variant: 'discount',
  },
}

export const Amber: Story = {
  name: 'Badge — Amber',
  args: {
    label: 'Pendiente',
    variant: 'amber',
    icon: <AlertCircleIcon size={12} />,
  },
}

export const Green: Story = {
  name: 'Badge — Green',
  args: {
    label: 'Completado',
    variant: 'green',
    icon: <CheckIcon size={12} />,
  },
}

export const Red: Story = {
  name: 'Badge — Red',
  args: {
    label: 'Error',
    variant: 'red',
    icon: <AlertCircleIcon size={12} />,
  },
}

export const Neutral: Story = {
  name: 'Badge — Neutral',
  args: {
    label: 'Borrador',
    variant: 'neutral',
  },
}

export const ConIcono: Story = {
  name: 'Badge — Con ícono',
  args: {
    label: 'Destacado',
    variant: 'amber',
    icon: <StarIcon size={12} />,
  },
}

export const QAEstados: Story = {
  name: 'Badge — QA Estados',
  parameters: {
    docs: {
      description: {
        story: 'Todas las variantes para verificación visual.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 flex-wrap items-center">
        <Badge label="15% OFF" variant="discount" />
        <Badge label="Pendiente" variant="amber" icon={<TagIcon size={12} />} />
        <Badge label="Completado" variant="green" icon={<CheckIcon size={12} />} />
        <Badge label="Error" variant="red" icon={<AlertCircleIcon size={12} />} />
        <Badge label="Neutral" variant="neutral" />
      </div>
    </div>
  ),
}

export const Playground: Story = {
  name: 'Badge — Playground',
  args: {
    label: 'Label',
    variant: 'amber',
  },
}