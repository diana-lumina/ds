import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Combobox } from './combobox'

const options = [
  { value: 'mty', label: 'Monterrey' },
  { value: 'cdmx', label: 'Ciudad de México' },
  { value: 'gdl', label: 'Guadalajara' },
]

describe('Combobox', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Combobox label="Campus" options={options} />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Combobox label="Campus" options={options} />)
      expect(document.querySelector('[data-slot="combobox"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="text-input"]')).toBeInTheDocument()
    })

    it('asocia el label con el input', () => {
      render(<Combobox label="Campus" options={options} />)
      expect(screen.getByLabelText('Campus')).toHaveAttribute('role', 'combobox')
    })
  })

  describe('Autocompletado', () => {
    it('muestra opciones al enfocar', async () => {
      render(<Combobox label="Campus" options={options} />)
      await userEvent.click(screen.getByLabelText('Campus'))
      expect(screen.getByRole('option', { name: 'Monterrey' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Guadalajara' })).toBeInTheDocument()
    })

    it('filtra opciones al escribir', async () => {
      render(<Combobox label="Campus" options={options} />)
      await userEvent.type(screen.getByLabelText('Campus'), 'Gua')
      expect(screen.getByRole('option', { name: 'Guadalajara' })).toBeInTheDocument()
      expect(screen.queryByRole('option', { name: 'Monterrey' })).not.toBeInTheDocument()
    })

    it('elige una opción y llama a onValueChange', async () => {
      const onValueChange = vi.fn()
      render(
        <Combobox label="Campus" options={options} onValueChange={onValueChange} />,
      )
      await userEvent.type(screen.getByLabelText('Campus'), 'Gua')
      await userEvent.click(screen.getByRole('option', { name: 'Guadalajara' }))
      expect(onValueChange).toHaveBeenCalledWith('gdl')
      expect(screen.getByLabelText('Campus')).toHaveValue('Guadalajara')
    })

    it('muestra emptyText si no hay coincidencias', async () => {
      render(<Combobox label="Campus" options={options} />)
      await userEvent.type(screen.getByLabelText('Campus'), 'xyz')
      expect(screen.getByText('Sin resultados')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(
        <Combobox
          label="Campus"
          supportingText="Escribe para buscar"
          options={options}
        />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
