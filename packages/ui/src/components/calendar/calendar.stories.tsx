import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Calendar } from './calendar'

const august = new Date(2026, 7, 12)

const meta: Meta<typeof Calendar> = {
  title: 'Components/Internal Building Blocks/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Calendario mensual. Compone IconButton tertiary md (mes anterior/siguiente) y CalendarDay.',
      },
    },
  },
  argTypes: {
    locale: {
      control: 'text',
      table: { defaultValue: { summary: 'es-MX' } },
    },
    previousLabel: { control: 'text' },
    nextLabel: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  render: function PlaygroundStory() {
    const [value, setValue] = useState<Date | undefined>(august)
    return (
      <Calendar
        defaultMonth={august}
        value={value}
        onValueChange={setValue}
      />
    )
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Calendar defaultMonth={new Date(2026, 7, 1)} />`,
      },
    },
  },
  render: () => <Calendar defaultMonth={august} />,
}

export const Selected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Calendar
  defaultMonth={new Date(2026, 7, 1)}
  value={new Date(2026, 7, 12)}
/>`,
      },
    },
  },
  render: () => <Calendar defaultMonth={august} value={august} />,
}

export const WithLimits: Story = {
  name: 'minDate / maxDate',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Calendar
  defaultMonth={new Date(2026, 7, 1)}
  minDate={new Date(2026, 7, 10)}
  maxDate={new Date(2026, 7, 20)}
/>`,
      },
    },
  },
  render: () => (
    <Calendar
      defaultMonth={august}
      minDate={new Date(2026, 7, 10)}
      maxDate={new Date(2026, 7, 20)}
    />
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: function InContextStory() {
    const [value, setValue] = useState<Date | undefined>(august)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Calendar defaultMonth={august} value={value} onValueChange={setValue} />
        <p
          style={{
            margin: 0,
            fontFamily: 'monospace',
            fontSize: 12,
            color: '#58585B',
          }}
        >
          {value
            ? value.toLocaleDateString('es-MX', { dateStyle: 'long' })
            : 'Sin fecha'}
        </p>
      </div>
    )
  },
}
