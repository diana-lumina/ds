import type { Meta, StoryObj } from '@storybook/react'
import { CardCourse } from './card-course'
import { Clock, MapPin, BarChart2 } from 'lucide-react'

const meta: Meta<typeof CardCourse> = {
  title: 'Components/CardCourse',
  component: CardCourse,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Componente principal para mostrar cursos. Tiene dos variantes según el contexto de uso: evaluativa para exploración y transaccional para compra.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    type: {
      description: 'Define la variante del componente',
      control: 'select',
      options: ['evaluative', 'transactional'],
      table: {
        type: { summary: '"evaluative" | "transactional"' },
      },
    },
    title: {
      description: 'Título del curso',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    category: {
      description: 'Categoría del curso',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    price: {
      description: 'Precio en MXN',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    rating: {
      description: 'Calificación de 0 a 5',
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      table: { type: { summary: 'number' } },
    },
    image: {
      description: 'URL de la imagen hero',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    institution: {
      description: 'URL del logo de la institución',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    badge: {
      description: 'Texto del badge de descuento — solo transaccional',
      control: 'text',
      if: { arg: 'type', eq: 'transactional' },
      table: { type: { summary: 'string' } },
    },
    description: {
      description: 'Descripción corta del curso — solo transaccional',
      control: 'text',
      if: { arg: 'type', eq: 'transactional' },
      table: { type: { summary: 'string' } },
    },
    isFavorite: {
      description: 'Estado del favorito — solo transaccional',
      control: 'boolean',
      if: { arg: 'type', eq: 'transactional' },
      table: { defaultValue: { summary: 'false' } },
    },
    isAuthenticated: {
      description: 'Controla el comportamiento del favorito — solo transaccional',
      control: 'boolean',
      if: { arg: 'type', eq: 'transactional' },
      table: { defaultValue: { summary: 'false' } },
    },
    cta: {
      description: 'Texto del botón de acción — solo transaccional',
      control: 'text',
      if: { arg: 'type', eq: 'transactional' },
      table: { type: { summary: 'string' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof CardCourse>

const metadata = [
  { icon: <Clock size={12} />, label: '100 horas' },
  { icon: <MapPin size={12} />, label: 'Presencial' },
  { icon: <BarChart2 size={12} />, label: 'Avanzado' },
]

const baseArgs = {
  title: 'Título',
  category: 'Categoría',
  price: 22000,
  rating: 4.5,
  image: 'https://picsum.photos/seed/cardcourse/325/180',
  metadata,
}

export const Evaluativa: Story = {
  name: 'CardCourse — Evaluativa',
  parameters: {
    docs: {
      description: {
        story: 'Para exploración — listados, catálogo y recomendaciones.',
      },
    },
  },
  args: {
    ...baseArgs,
    type: 'evaluative',
  },
}

export const EvaluativaConInstitucion: Story = {
  name: 'CardCourse — Evaluativa con institución',
  args: {
    ...baseArgs,
    type: 'evaluative',
    institution: 'https://picsum.photos/seed/brand/40/40',
  },
}

export const Transaccional: Story = {
  name: 'CardCourse — Transaccional',
  parameters: {
    docs: {
      description: {
        story: 'Para compra — wishlist y flujo de compra.',
      },
    },
  },
  args: {
    ...baseArgs,
    type: 'transactional',
    badge: 'Badge',
    description: 'Descripción',
    isFavorite: false,
    isAuthenticated: false,
    cta: 'Agregar al carrito',
  },
}

export const TransaccionalFavorito: Story = {
  name: 'CardCourse — Transaccional favorito activo',
  args: {
    ...baseArgs,
    type: 'transactional',
    badge: 'Badge',
    description: 'Descripción',
    isFavorite: true,
    isAuthenticated: true,
    cta: 'Agregar al carrito',
  },
}

export const Playground: Story = {
  name: 'CardCourse — Playground',
  args: {
    ...baseArgs,
    type: 'evaluative',
    badge: 'Badge',
    description: 'Descripción',
    isFavorite: false,
    isAuthenticated: false,
    cta: 'Agregar al carrito',
  },
}