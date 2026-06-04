import type { Meta, StoryObj } from '@storybook/react'
import { MediaCard } from './media-card'

const meta: Meta<typeof MediaCard> = {
  title: 'Components/MediaCard',
  component: MediaCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Tarjeta de media para mostrar testimonios. Tiene tres variantes: testimonial (imagen con gradiente), testimonial-l (video vertical con play) y testimonial-s (imagen con overlay).',
      },
    },
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a1a' }],
    },
  },
  argTypes: {
    type: {
      description: 'Define la variante del componente',
      control: 'select',
      options: ['testimonial', 'testimonial-l', 'testimonial-s'],
      table: { type: { summary: '"testimonial" | "testimonial-l" | "testimonial-s"' } },
    },
    src: {
      description: 'URL del video o imagen de fondo',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    poster: {
      description: 'Imagen que se muestra mientras el video carga — solo testimonial-l',
      control: 'text',
      if: { arg: 'type', eq: 'testimonial-l' },
      table: { type: { summary: 'string' } },
    },
    name: {
      description: 'Nombre de la persona',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    description: {
      description: 'Descripción o cargo',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    isEmpty: {
      description: 'Muestra el estado vacío',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    emptyMessage: {
      description: 'Mensaje del estado vacío',
      control: 'text',
      if: { arg: 'isEmpty', eq: true },
      table: { defaultValue: { summary: 'No se ha encontrado ningún testimonio' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof MediaCard>

export const Testimonial: Story = {
  name: 'MediaCard — Testimonial',
  parameters: {
    docs: {
      description: {
        story: 'Variante base con imagen de fondo y gradiente inferior.',
      },
    },
  },
  args: {
    type: 'testimonial',
    src: 'https://picsum.photos/seed/test1/324/344',
    name: 'Nombre',
    description: 'Descripción',
    badge: { label: 'Ver perfil' },
  },
}

export const TestimonialL: Story = {
  name: 'MediaCard — Testimonial L',
  parameters: {
    docs: {
      description: {
        story: 'Variante vertical con video de fondo y botón de play.',
      },
    },
  },
  args: {
    type: 'testimonial-l',
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://picsum.photos/seed/test2/331/548',
    name: 'Nombre',
  },
}

export const TestimonialS: Story = {
  name: 'MediaCard — Testimonial S',
  parameters: {
    docs: {
      description: {
        story: 'Variante pequeña con imagen y overlay oscuro.',
      },
    },
  },
  args: {
    type: 'testimonial-s',
    src: 'https://picsum.photos/seed/test3/331/303',
    name: 'Nombre',
    description: 'Descripción',
    badge: { label: 'Ver video' },
  },
}

export const Empty: Story = {
  name: 'MediaCard — Empty',
  parameters: {
    docs: {
      description: {
        story: 'Estado vacío cuando no hay testimonio disponible.',
      },
    },
  },
  args: {
    type: 'testimonial-s',
    isEmpty: true,
  },
}

export const EmptyMensajePersonalizado: Story = {
  name: 'MediaCard — Empty mensaje personalizado',
  args: {
    type: 'testimonial-s',
    isEmpty: true,
    emptyMessage: 'Aún no hay testimonios disponibles',
  },
}

export const Playground: Story = {
  name: 'MediaCard — Playground',
  args: {
    type: 'testimonial',
    src: 'https://picsum.photos/seed/test4/324/344',
    name: 'Nombre',
    description: 'Descripción',
    badge: { label: 'Ver perfil' },
    isEmpty: false,
  },
}