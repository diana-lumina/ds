import type { Meta, StoryObj } from '@storybook/react'
import { FavoriteButton } from './favorite-button'

const meta: Meta<typeof FavoriteButton> = {
  title: 'Components/FavoriteButton',
  component: FavoriteButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Botón de favorito con lógica de autenticación. Si el usuario no está autenticado, llama a onAuthRequired en lugar de onFavoriteToggle.',
      },
    },
    layout: 'padded',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a1a' }],
    },
  },
  argTypes: {
    isAuthenticated: {
      description: 'Si el usuario está autenticado',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    isFavorite: {
      description: 'Estado actual del favorito',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      description: 'Deshabilita la interacción',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    onFavoriteToggle: {
      description: 'Callback al marcar/desmarcar favorito — solo cuando está autenticado',
      table: { type: { summary: '() => void' } },
    },
    onAuthRequired: {
      description: 'Callback cuando el usuario no está autenticado',
      table: { type: { summary: '() => void' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof FavoriteButton>

export const Inactivo: Story = {
  name: 'FavoriteButton — Inactivo',
  args: {
    isAuthenticated: true,
    isFavorite: false,
  },
}

export const Activo: Story = {
  name: 'FavoriteButton — Activo',
  args: {
    isAuthenticated: true,
    isFavorite: true,
  },
}

export const Disabled: Story = {
  name: 'FavoriteButton — Disabled',
  args: {
    isAuthenticated: true,
    isFavorite: false,
    disabled: true,
  },
}

export const NoAutenticado: Story = {
  name: 'FavoriteButton — No autenticado',
  parameters: {
    docs: {
      description: {
        story: 'Cuando el usuario no está autenticado, el click llama a onAuthRequired en lugar de onFavoriteToggle.',
      },
    },
  },
  args: {
    isAuthenticated: false,
    isFavorite: false,
  },
}

export const Playground: Story = {
  name: 'FavoriteButton — Playground',
  args: {
    isAuthenticated: true,
    isFavorite: false,
    disabled: false,
  },
}