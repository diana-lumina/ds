import type { Meta, StoryObj } from '@storybook/react'
import { AccordionModule } from './accordion-module'
import { PlusIcon, BookOpenIcon } from 'lucide-react'

const meta: Meta<typeof AccordionModule> = {
  title: 'Components/AccordionModule',
  component: AccordionModule,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Accordion para mostrar módulos o secciones de contenido. Cada item tiene ícono, título, subtítulo y contenido con link opcional.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    type: {
      description: 'Define si se puede abrir uno o varios items simultáneamente',
      control: 'select',
      options: ['single', 'multiple'],
      table: {
        type: { summary: '"single" | "multiple"' },
        defaultValue: { summary: 'single' },
      },
    },
    items: {
      description: 'Lista de módulos a mostrar',
      table: { type: { summary: 'AccordionModuleItem[]' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof AccordionModule>

const defaultItems = [
  {
    id: 'modulo-1',
    icon: <PlusIcon size={16} />,
    title: 'Módulo 1',
    subtitle: 'Fundamentos de aprendizaje automático',
    content: {
      title: 'Title Home',
      description: 'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus. In quisque justo senectus in sed adipiscing.',
      link: { label: 'Aumentar créditos', href: '#' },
    },
  },
  {
    id: 'modulo-2',
    icon: <PlusIcon size={16} />,
    title: 'Módulo 2',
    subtitle: 'Redes neuronales y deep learning',
    content: {
      title: 'Title Home',
      description: 'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
      link: { label: 'Aumentar créditos', href: '#' },
    },
  },
  {
    id: 'modulo-3',
    icon: <PlusIcon size={16} />,
    title: 'Módulo 3',
    subtitle: 'Aplicaciones prácticas de ML',
    content: {
      description: 'Lorem ipsum dolor sit amet consectetur. Nisl nibh phasellus condimentum mi faucibus.',
    },
  },
]

export const Default: Story = {
  name: 'AccordionModule — Default',
  args: {
    items: defaultItems,
    type: 'single',
  },
}

export const Multiple: Story = {
  name: 'AccordionModule — Múltiple',
  parameters: {
    docs: {
      description: {
        story: 'Permite abrir varios módulos simultáneamente.',
      },
    },
  },
  args: {
    items: defaultItems,
    type: 'multiple',
  },
}

export const SinIcono: Story = {
  name: 'AccordionModule — Sin ícono',
  args: {
    items: [
      {
        id: 'item-1',
        title: 'Módulo 1',
        subtitle: 'Subtítulo del módulo',
        content: {
          description: 'Lorem ipsum dolor sit amet consectetur.',
        },
      },
    ],
    type: 'single',
  },
}

export const ConIconoPersonalizado: Story = {
  name: 'AccordionModule — Con ícono personalizado',
  args: {
    items: [
      {
        id: 'item-1',
        icon: <BookOpenIcon size={16} />,
        title: 'Módulo 1',
        subtitle: 'Subtítulo del módulo',
        content: {
          title: 'Título del contenido',
          description: 'Lorem ipsum dolor sit amet consectetur.',
          link: { label: 'Ver más', href: '#' },
        },
      },
    ],
    type: 'single',
  },
}

export const Playground: Story = {
  name: 'AccordionModule — Playground',
  args: {
    items: defaultItems,
    type: 'single',
  },
}