import type { Meta, StoryObj } from '@storybook/react'
import { AccordionFilter } from './accordion-filter'
import * as React from 'react'

const meta: Meta<typeof AccordionFilter> = {
  title: 'Components/AccordionFilter',
  component: AccordionFilter,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Accordion con checkboxes para filtrar resultados. Soporta múltiples secciones abiertas simultáneamente y manejo de estado controlado.',
      },
    },
    layout: 'padded',
  },
  argTypes: {
    items: {
      description: 'Lista de secciones con sus opciones',
      table: { type: { summary: 'AccordionFilterItem[]' } },
    },
    selected: {
      description: 'Estado controlado de las opciones seleccionadas',
      table: { type: { summary: 'Record<string, string[]>' } },
    },
    onSelectionChange: {
      description: 'Callback al seleccionar o deseleccionar una opción',
      table: { type: { summary: '(itemId: string, optionId: string, checked: boolean) => void' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof AccordionFilter>

const defaultItems = [
  {
    id: 'edad',
    label: 'Edad',
    options: [
      { id: 'jovenes', label: 'Adultos jóvenes (18 a 29 años)' },
      { id: 'adultos', label: 'Adultos (30 a 54 años)' },
      { id: 'senior', label: 'Adulto Senior (55+ años)' },
    ],
  },
  {
    id: 'modalidad',
    label: 'Modalidad',
    options: [
      { id: 'presencial', label: 'Presencial' },
      { id: 'online', label: 'Online' },
      { id: 'hibrido', label: 'Híbrido' },
    ],
  },
]

export const Default: Story = {
  name: 'AccordionFilter — Default',
  args: {
    items: defaultItems,
    selected: {},
  },
}

export const ConSeleccion: Story = {
  name: 'AccordionFilter — Con selección previa',
  args: {
    items: defaultItems,
    selected: {
      edad: ['jovenes', 'adultos'],
      modalidad: ['presencial'],
    },
  },
}

export const UnaSola: Story = {
  name: 'AccordionFilter — Una sola sección',
  args: {
    items: [defaultItems[0]!],
    selected: {},
  },
}

export const Interactivo: Story = {
  name: 'AccordionFilter — Interactivo',
  parameters: {
    docs: {
      description: {
        story: 'Estado controlado — las selecciones se reflejan en tiempo real.',
      },
    },
  },
  render: () => {
    const [selected, setSelected] = React.useState<Record<string, string[]>>({})

    const handleChange = (itemId: string, optionId: string, checked: boolean) => {
      setSelected((prev) => {
        const current = prev[itemId] ?? []
        return {
          ...prev,
          [itemId]: checked
            ? [...current, optionId]
            : current.filter((id) => id !== optionId),
        }
      })
    }

    return (
      <div className="flex flex-col gap-4">
        <AccordionFilter
          items={defaultItems}
          selected={selected}
          onSelectionChange={handleChange}
        />
        <pre className="text-xs text-muted-foreground bg-muted p-2 rounded">
          {JSON.stringify(selected, null, 2)}
        </pre>
      </div>
    )
  },
}

export const Playground: Story = {
  name: 'AccordionFilter — Playground',
  args: {
    items: defaultItems,
    selected: {},
  },
}