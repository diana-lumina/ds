import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { FilterChip } from './filter-chip'

describe('FilterChip', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<FilterChip>Categoría</FilterChip>)
    })

    it('renderiza como button', () => {
      render(<FilterChip>Categoría</FilterChip>)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button" (no se comporta como submit por accidente dentro de un form)', () => {
      render(<FilterChip>Categoría</FilterChip>)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<FilterChip>Categoría</FilterChip>)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'filter-chip')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<FilterChip>Categoría</FilterChip>)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'sm')
    })

    it('aplica el tamaño md', () => {
      render(<FilterChip size="md">Categoría</FilterChip>)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Prop: selected', () => {
    it('no está seleccionado por defecto', () => {
      render(<FilterChip>Categoría</FilterChip>)
      const chip = screen.getByRole('button')
      expect(chip).toHaveAttribute('data-selected', 'false')
      expect(chip).toHaveAttribute('aria-pressed', 'false')
    })

    it('refleja selected=true', () => {
      render(<FilterChip selected>Categoría</FilterChip>)
      const chip = screen.getByRole('button')
      expect(chip).toHaveAttribute('data-selected', 'true')
      expect(chip).toHaveAttribute('aria-pressed', 'true')
    })

    it('llama a onSelectedChange con el valor invertido al hacer click', async () => {
      const handleChange = vi.fn()
      render(
        <FilterChip selected={false} onSelectedChange={handleChange}>
          Categoría
        </FilterChip>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).toHaveBeenCalledWith(true)
    })

    it('llama a onSelectedChange con false cuando ya estaba seleccionado', async () => {
      const handleChange = vi.fn()
      render(
        <FilterChip selected onSelectedChange={handleChange}>
          Categoría
        </FilterChip>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).toHaveBeenCalledWith(false)
    })
  })

  describe('Comportamiento: disabled', () => {
    it('está deshabilitado cuando disabled es true', () => {
      render(<FilterChip disabled>Categoría</FilterChip>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onSelectedChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(
        <FilterChip disabled onSelectedChange={handleChange}>
          Categoría
        </FilterChip>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleChange = vi.fn()
      const user = userEvent.setup()
      render(<FilterChip onSelectedChange={handleChange}>Categoría</FilterChip>)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it.each([false, true])('sin violaciones de accesibilidad — selected=%s', async (selected) => {
      const { container } = render(<FilterChip selected={selected}>Categoría</FilterChip>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<FilterChip disabled>Categoría</FilterChip>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})