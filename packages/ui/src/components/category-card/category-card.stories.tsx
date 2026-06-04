import type { Meta, StoryObj } from '@storybook/react'
import { CategoryCard } from './category-card'

const meta: Meta<typeof CategoryCard> = {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tarjeta de categoría con video de fondo, gradiente y CTA. Se usa en grids para navegar por categorías o temas.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    title: {
      description: 'Título principal de la categoría',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    description: {
      description: 'Descripción corta de la categoría',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    src: {
      description: 'URL del video de fondo',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    poster: {
      description: 'Imagen que se muestra mientras el video carga',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    ctaLabel: {
      description: 'Texto del botón de acción',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Explorar ofertas' },
      },
    },
    onCtaClick: {
      description: 'Callback al hacer click en el CTA',
      table: { type: { summary: '() => void' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof CategoryCard>

const defaultArgs = {
  title: 'Título',
  description: 'Descripción',
  src: 'https://www.w3schools.com/html/mov_bbb.mp4',
  poster: 'https://picsum.photos/seed/category/560/256',
}

export const Default: Story = {
  name: 'CategoryCard — Default',
  args: defaultArgs,
}

export const SinDescripcion: Story = {
  name: 'CategoryCard — Sin descripción',
  args: {
    ...defaultArgs,
    description: undefined,
  },
}

export const CtaPersonalizado: Story = {
  name: 'CategoryCard — CTA personalizado',
  args: {
    ...defaultArgs,
    ctaLabel: 'Ver cursos',
  },
}

export const Playground: Story = {
  name: 'CategoryCard — Playground',
  args: {
    ...defaultArgs,
    ctaLabel: 'Explorar ofertas',
  },
}