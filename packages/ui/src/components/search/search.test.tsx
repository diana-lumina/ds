import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Search } from './search'

describe('Search', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Search aria-label="Buscar" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Search aria-label="Buscar" />)
      expect(document.querySelector('[data-slot="search"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="text-input"]')).toBeInTheDocument()
    })

    it('usa type="search"', () => {
      render(<Search aria-label="Buscar" />)
      expect(screen.getByLabelText('Buscar')).toHaveAttribute('type', 'search')
    })

    it('renderiza el ícono de lupa', () => {
      render(<Search aria-label="Buscar" />)
      expect(document.querySelector('[data-slot="search"] svg')).toBeInTheDocument()
    })

    it('no muestra clear cuando está vacío', () => {
      render(<Search aria-label="Buscar" />)
      expect(screen.queryByRole('button', { name: 'Borrar búsqueda' })).not.toBeInTheDocument()
    })
  })

  describe('Prop: appearance', () => {
    it('usa outlined por defecto', () => {
      render(<Search aria-label="Buscar" />)
      expect(document.querySelector('[data-slot="search"]')).toHaveAttribute(
        'data-appearance',
        'outlined',
      )
    })

    it('aplica underline', () => {
      render(<Search aria-label="Buscar" appearance="underline" />)
      expect(document.querySelector('[data-slot="search"]')).toHaveAttribute(
        'data-appearance',
        'underline',
      )
    })
  })

  describe('Prop: tone', () => {
    it('usa standard por defecto', () => {
      render(<Search aria-label="Buscar" />)
      expect(document.querySelector('[data-slot="search"]')).toHaveAttribute(
        'data-tone',
        'standard',
      )
    })

    it('aplica inverse', () => {
      render(<Search aria-label="Buscar" tone="inverse" />)
      expect(document.querySelector('[data-slot="search"]')).toHaveAttribute(
        'data-tone',
        'inverse',
      )
    })
  })

  describe('Clear', () => {
    it('muestra clear cuando hay valor', () => {
      render(<Search aria-label="Buscar" defaultValue="campus" />)
      expect(screen.getByRole('button', { name: 'Borrar búsqueda' })).toBeInTheDocument()
    })

    it('borra el valor y llama a onClear', async () => {
      const handleClear = vi.fn()
      const handleChange = vi.fn()
      render(
        <Search
          aria-label="Buscar"
          defaultValue="campus"
          onClear={handleClear}
          onChange={handleChange}
        />,
      )

      await userEvent.click(screen.getByRole('button', { name: 'Borrar búsqueda' }))
      expect(screen.getByLabelText('Buscar')).toHaveValue('')
      expect(handleClear).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalled()
      expect(screen.queryByRole('button', { name: 'Borrar búsqueda' })).not.toBeInTheDocument()
    })

    it('no muestra clear cuando está disabled', () => {
      render(<Search aria-label="Buscar" defaultValue="campus" disabled />)
      expect(screen.queryByRole('button', { name: 'Borrar búsqueda' })).not.toBeInTheDocument()
    })
  })

  describe('Comportamiento', () => {
    it('llama a onChange al escribir', async () => {
      const handleChange = vi.fn()
      render(<Search aria-label="Buscar" onChange={handleChange} />)
      await userEvent.type(screen.getByLabelText('Buscar'), 'ux')
      expect(handleChange).toHaveBeenCalled()
    })

    it('deshabilita el input', () => {
      render(<Search aria-label="Buscar" disabled />)
      expect(screen.getByLabelText('Buscar')).toBeDisabled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado', async () => {
      const user = userEvent.setup()
      render(<Search aria-label="Buscar" />)
      await user.tab()
      expect(screen.getByLabelText('Buscar')).toHaveFocus()
    })

    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(<Search aria-label="Buscar" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — con valor', async () => {
      const { container } = render(<Search aria-label="Buscar" defaultValue="campus" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — inverse', async () => {
      const { container } = render(<Search aria-label="Buscar" tone="inverse" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
