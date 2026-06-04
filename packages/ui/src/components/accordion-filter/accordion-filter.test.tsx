import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { AccordionFilter } from './accordion-filter'

const defaultItems = [
  {
    id: 'edad',
    label: 'Edad',
    options: [
      { id: 'jovenes', label: 'Adultos jóvenes' },
      { id: 'adultos', label: 'Adultos' },
    ],
  },
  {
    id: 'modalidad',
    label: 'Modalidad',
    options: [
      { id: 'presencial', label: 'Presencial' },
      { id: 'online', label: 'Online' },
    ],
  },
]

describe('AccordionFilter', () => {

  it('renderiza sin errores', () => {
    render(<AccordionFilter items={defaultItems} />)
  })

  it('muestra los títulos de las secciones', () => {
    render(<AccordionFilter items={defaultItems} />)
    expect(screen.getByText('Edad')).toBeInTheDocument()
    expect(screen.getByText('Modalidad')).toBeInTheDocument()
  })

  it('las opciones no son visibles antes de abrir el accordion', () => {
    render(<AccordionFilter items={defaultItems} />)
    expect(screen.queryByText('Adultos jóvenes')).not.toBeVisible()
  })

  it('muestra las opciones al abrir una sección', async () => {
    render(<AccordionFilter items={defaultItems} />)
    await userEvent.click(screen.getByText('Edad'))
    expect(screen.getByText('Adultos jóvenes')).toBeVisible()
    expect(screen.getByText('Adultos')).toBeVisible()
  })

  it('permite abrir múltiples secciones simultáneamente', async () => {
    render(<AccordionFilter items={defaultItems} />)
    await userEvent.click(screen.getByText('Edad'))
    await userEvent.click(screen.getByText('Modalidad'))
    expect(screen.getByText('Adultos jóvenes')).toBeVisible()
    expect(screen.getByText('Presencial')).toBeVisible()
  })

  it('llama a onSelectionChange al seleccionar una opción', async () => {
    const handleChange = vi.fn()
    render(
      <AccordionFilter
        items={defaultItems}
        onSelectionChange={handleChange}
      />
    )
    await userEvent.click(screen.getByText('Edad'))
    await userEvent.click(screen.getByLabelText('Adultos jóvenes'))
    expect(handleChange).toHaveBeenCalledWith('edad', 'jovenes', true)
  })

  it('llama a onSelectionChange con false al deseleccionar', async () => {
    const handleChange = vi.fn()
    render(
      <AccordionFilter
        items={defaultItems}
        selected={{ edad: ['jovenes'] }}
        onSelectionChange={handleChange}
      />
    )
    await userEvent.click(screen.getByText('Edad'))
    await userEvent.click(screen.getByLabelText('Adultos jóvenes'))
    expect(handleChange).toHaveBeenCalledWith('edad', 'jovenes', false)
  })

  it('muestra el checkbox marcado cuando la opción está seleccionada', async () => {
    render(
      <AccordionFilter
        items={defaultItems}
        selected={{ edad: ['jovenes'] }}
      />
    )
    await userEvent.click(screen.getByText('Edad'))
    expect(screen.getByLabelText('Adultos jóvenes')).toBeChecked()
  })

  it('muestra el checkbox desmarcado cuando la opción no está seleccionada', async () => {
    render(
      <AccordionFilter
        items={defaultItems}
        selected={{}}
      />
    )
    await userEvent.click(screen.getByText('Edad'))
    expect(screen.getByLabelText('Adultos jóvenes')).not.toBeChecked()
  })

  it('renderiza una lista vacía sin errores', () => {
    render(<AccordionFilter items={[]} />)
  })

})