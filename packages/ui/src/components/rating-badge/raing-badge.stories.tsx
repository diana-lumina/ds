import type { Meta, StoryObj } from '@storybook/react'
import { RatingBadge } from './rating-badge'

const meta: Meta<typeof RatingBadge> = {
  title: 'Components/RatingBadge',
  component: RatingBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Badge de calificación con estrella. Se posiciona de forma absoluta en la esquina superior derecha de la imagen hero de una card evaluativa.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    rating: {
      description: 'Calificación numérica — se muestra con un decimal',
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
      table: { type: { summary: 'number' } },
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
type Story = StoryObj<typeof RatingBadge>

export const Default: Story = {
  name: 'RatingBadge — Default',
  args: { rating: 4.5 },
}

export const Perfecto: Story = {
  name: 'RatingBadge — Calificación perfecta',
  args: { rating: 5.0 },
}

export const Bajo: Story = {
  name: 'RatingBadge — Calificación baja',
  args: { rating: 1.0 },
}

export const Decimal: Story = {
  name: 'RatingBadge — Con decimal',
  args: { rating: 3.7 },
}

export const QAEstados: Story = {
  name: 'RatingBadge — QA Estados',
  parameters: {
    docs: {
      description: {
        story: 'Diferentes valores de calificación para verificación visual.',
      },
    },
  },
  render: () => (
    <div className="flex gap-8 flex-wrap">
      {[1.0, 2.5, 3.7, 4.5, 5.0].map((rating) => (
        <div key={rating} className="relative w-40 h-20 bg-muted rounded-lg">
          <RatingBadge rating={rating} />
        </div>
      ))}
    </div>
  ),
}

export const Playground: Story = {
  name: 'RatingBadge — Playground',
  args: { rating: 4.5 },
}