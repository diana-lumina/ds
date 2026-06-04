import type { Meta, StoryObj } from '@storybook/react'
import { BrandButton } from './brand-button'

const meta: Meta<typeof BrandButton> = {
  title: 'Components/BrandButton',
  component: BrandButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Logo de institución que se muestra sobre la imagen hero de una card. Se posiciona de forma absoluta en la esquina inferior derecha.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    src: {
      description: 'URL del logo de la institución',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    alt: {
      description: 'Texto alternativo del logo',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
  },
  decorators: [
    (Story) => (
      <div className="relative w-64 h-40 bg-muted rounded-lg">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof BrandButton>

export const Default: Story = {
  name: 'BrandButton — Default',
  args: {
    src: 'https://picsum.photos/seed/brand/40/40',
    alt: 'Logo institución',
  },
}

export const ConLogoReal: Story = {
  name: 'BrandButton — Con logo real',
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Technologico_de_Monterrey%28seal%29.svg/120px-Technologico_de_Monterrey%28seal%29.svg.png',
    alt: 'Tec de Monterrey',
  },
}

export const Playground: Story = {
  name: 'BrandButton — Playground',
  args: {
    src: 'https://picsum.photos/seed/brand/40/40',
    alt: 'Logo institución',
  },
}