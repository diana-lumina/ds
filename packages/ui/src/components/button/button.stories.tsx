import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { PlusIcon, TrashIcon, ArrowRightIcon } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente de acción principal del DS. Disponible en seis variantes y ocho tamaños. Soporta íconos y el patrón asChild para usarlo como link.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    variant: {
      description: 'Define el tipo de botón según su jerarquía de acción',
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
      table: {
        type: { summary: '"default" | "outline" | "secondary" | "ghost" | "destructive" | "link"' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      description: 'Tamaño del botón',
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
      table: {
        type: { summary: '"default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      description: 'Deshabilita la interacción',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    asChild: {
      description: 'Renderiza el componente hijo en lugar de un button — útil para usar como link',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      description: 'Contenido del botón',
      control: 'text',
    },
    onClick: {
      description: 'Callback al hacer click',
      table: { type: { summary: '() => void' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  name: 'Button — Default',
  args: { children: 'Button' },
}

export const Outline: Story = {
  name: 'Button — Outline',
  args: { variant: 'outline', children: 'Button' },
}

export const Secondary: Story = {
  name: 'Button — Secondary',
  args: { variant: 'secondary', children: 'Button' },
}

export const Ghost: Story = {
  name: 'Button — Ghost',
  args: { variant: 'ghost', children: 'Button' },
}

export const Destructive: Story = {
  name: 'Button — Destructive',
  args: { variant: 'destructive', children: 'Button' },
}

export const Link: Story = {
  name: 'Button — Link',
  args: { variant: 'link', children: 'Button' },
}

export const Disabled: Story = {
  name: 'Button — Disabled',
  args: { children: 'Button', disabled: true },
}

export const ConIconoIzquierdo: Story = {
  name: 'Button — Con ícono izquierdo',
  args: {
    children: (
      <>
        <PlusIcon />
        Agregar
      </>
    ),
  },
}

export const ConIconoDerecho: Story = {
  name: 'Button — Con ícono derecho',
  args: {
    children: (
      <>
        Siguiente
        <ArrowRightIcon />
      </>
    ),
  },
}

export const SoloIcono: Story = {
  name: 'Button — Solo ícono',
  args: {
    size: 'icon',
    children: <TrashIcon />,
    'aria-label': 'Eliminar',
  },
}

export const Tamaños: Story = {
  name: 'Button — QA Estados',
  parameters: {
    docs: {
      description: {
        story: 'Todos los tamaños disponibles para verificación visual.',
      },
    },
  },
  render: () => (
    <div className="flex items-center gap-2 flex-wrap">
      <Button size="xs">XSmall</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><TrashIcon /></Button>
      <Button size="icon-xs"><TrashIcon /></Button>
      <Button size="icon-sm"><TrashIcon /></Button>
      <Button size="icon-lg"><TrashIcon /></Button>
    </div>
  ),
}

export const Playground: Story = {
  name: 'Button — Playground',
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
    disabled: false,
  },
}