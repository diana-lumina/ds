import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { FilterChip } from './filter-chip'

describe('FilterChip', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<FilterChip label="Categoría" />)
    })

    it('muestra el label correctamente', () => {
      render(<FilterChip label="Categoría" />)
      expect(screen.getByRole('button', { name: 'Categoría' })).toBeInTheDocument()
    })

    it('renderiza como button', () => {
      render(<FilterChip label="Categoría" />)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button"', () => {
      render(<FilterChip label="Categoría" />)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<FilterChip label="Categoría" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'filter-chip')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<FilterChip label="Categoría" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'sm')
    })

    it('aplica el tamaño md', () => {
      render(<FilterChip size="md" label="Categoría" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Prop: selected', () => {
    it('no está seleccionado por defecto', () => {
      render(<FilterChip label="Categoría" />)
      const chip = screen.getByRole('button')
      expect(chip).toHaveAttribute('data-selected', 'false')
      expect(chip).toHaveAttribute('aria-pressed', 'false')
    })

    it('refleja selected=true', () => {
      render(<FilterChip selected label="Categoría" />)
      const chip = screen.getByRole('button')
      expect(chip).toHaveAttribute('data-selected', 'true')
      expect(chip).toHaveAttribute('aria-pressed', 'true')
    })

    it('llama a onSelectedChange con el valor invertido al hacer click', async () => {
      const handleChange = vi.fn()
      render(
        <FilterChip selected={false} onSelectedChange={handleChange} label="Categoría" />
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('llama a onSelectedChange con false cuando ya estaba seleccionado', async () => {
      const handleChange = vi.fn()
      render(<FilterChip selected onSelectedChange={handleChange} label="Categoría" />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).toHaveBeenCalledWith(false)
    })
  })

  describe('Comportamiento: disabled', () => {
    it('está deshabilitado cuando disabled es true', () => {
      render(<FilterChip disabled label="Categoría" />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onSelectedChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(
        <FilterChip disabled onSelectedChange={handleChange} label="Categoría" />
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<FilterChip onSelectedChange={handleChange} label="Categoría" />)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it.each([false, true])('sin violaciones de accesibilidad — selected=%s', async (selected) => {
      const { container } = render(<FilterChip selected={selected} label="Categoría" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<FilterChip disabled label="Categoría" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
