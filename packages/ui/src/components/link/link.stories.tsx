import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './link'
import { ArrowRightIcon, ExternalLinkIcon, ChevronLeftIcon } from 'lucide-react'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente de navegación. Disponible en dos variantes: text para links inline y button para links de navegación principal. Soporta ícono izquierdo o derecho, estado disabled y links externos.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    variant: {
      description: 'Define el estilo visual del link',
      control: 'select',
      options: ['text', 'button'],
      table: {
        type: { summary: '"text" | "button"' },
        defaultValue: { summary: 'text' },
      },
    },
    href: {
      description: 'URL de destino',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      description: 'Deshabilita la navegación',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    external: {
      description: 'Abre el link en una nueva pestaña',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    iconPosition: {
      description: 'Posición del ícono',
      control: 'select',
      options: ['left', 'right'],
      if: { arg: 'icon' },
      table: {
        type: { summary: '"left" | "right"' },
        defaultValue: { summary: 'right' },
      },
    },
    children: {
      description: 'Texto o contenido del link',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Text: Story = {
  name: 'Link — Text',
  args: {
    variant: 'text',
    href: '#',
    children: 'Tienes un código de descuento',
  },
}

export const TextConIcono: Story = {
  name: 'Link — Text con ícono',
  args: {
    variant: 'text',
    href: '#',
    children: 'Tienes un código de descuento',
    icon: <ArrowRightIcon size={14} />,
    iconPosition: 'right',
  },
}

export const TextDisabled: Story = {
  name: 'Link — Text disabled',
  args: {
    variant: 'text',
    href: '#',
    children: 'Tienes un código de descuento',
    disabled: true,
  },
}

export const TextExterno: Story = {
  name: 'Link — Text externo',
  args: {
    variant: 'text',
    href: 'https://tec.mx',
    children: 'Visitar sitio',
    icon: <ExternalLinkIcon size={14} />,
    external: true,
  },
}

export const Button: Story = {
  name: 'Link — Button',
  args: {
    variant: 'button',
    href: '#',
    children: 'Cursos',
  },
}

export const ButtonConIcono: Story = {
  name: 'Link — Button con ícono',
  args: {
    variant: 'button',
    href: '#',
    children: 'Ver más',
    icon: <ArrowRightIcon size={14} />,
    iconPosition: 'right',
  },
}

export const ButtonIconoIzquierdo: Story = {
  name: 'Link — Button ícono izquierdo',
  args: {
    variant: 'button',
    href: '#',
    children: 'Volver',
    icon: <ChevronLeftIcon size={14} />,
    iconPosition: 'left',
  },
}

export const ButtonDisabled: Story = {
  name: 'Link — Button disabled',
  args: {
    variant: 'button',
    href: '#',
    children: 'Cursos',
    disabled: true,
  },
}

export const QAEstados: Story = {
  name: 'Link — QA Estados',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Text</span>
        <div className="flex gap-4 flex-wrap">
          <Link variant="text" href="#">Default</Link>
          <Link variant="text" href="#" icon={<ArrowRightIcon size={14} />}>Con ícono</Link>
          <Link variant="text" href="#" disabled>Disabled</Link>
          <Link variant="text" href="https://tec.mx" external icon={<ExternalLinkIcon size={14} />}>Externo</Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Button</span>
        <div className="flex gap-4 flex-wrap">
          <Link variant="button" href="#">Default</Link>
          <Link variant="button" href="#" icon={<ArrowRightIcon size={14} />}>Con ícono</Link>
          <Link variant="button" href="#" disabled>Disabled</Link>
        </div>
      </div>
    </div>
  ),
}

export const Playground: Story = {
  name: 'Link — Playground',
  args: {
    variant: 'text',
    href: '#',
    children: 'Texto del link',
    disabled: false,
    external: false,
    iconPosition: 'right',
  },
}