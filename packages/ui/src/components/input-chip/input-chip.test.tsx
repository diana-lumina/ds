import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { InputChip } from './input-chip'

describe('InputChip', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<InputChip onClose={() => {}}>Etiqueta</InputChip>)
    })

    it('tiene el data-slot correcto', () => {
      render(<InputChip onClose={() => {}}>Etiqueta</InputChip>)
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toBeInTheDocument()
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(
        <InputChip icon={<svg data-testid="icono" />} onClose={() => {}}>
          Etiqueta
        </InputChip>
      )
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('siempre renderiza el botón de cerrar', () => {
      render(<InputChip onClose={() => {}}>Etiqueta</InputChip>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<InputChip onClose={() => {}}>Etiqueta</InputChip>)
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toHaveAttribute(
        'data-size',
        'sm'
      )
    })

    it('aplica el tamaño md', () => {
      render(
        <InputChip size="md" onClose={() => {}}>
          Etiqueta
        </InputChip>
      )
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toHaveAttribute(
        'data-size',
        'md'
      )
    })
  })

  describe('Comportamiento: botón de cerrar', () => {
    it('llama a onClose al hacer click en la X', async () => {
      const handleClose = vi.fn()
      render(<InputChip onClose={handleClose}>Etiqueta</InputChip>)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    it('no llama a onClose cuando closeDisabled es true', async () => {
      const handleClose = vi.fn()
      render(
        <InputChip onClose={handleClose} closeDisabled>
          Etiqueta
        </InputChip>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClose).not.toHaveBeenCalled()
    })

    it('usa closeLabel como nombre accesible del botón', () => {
      render(
        <InputChip onClose={() => {}} closeLabel="Quitar filtro de categoría">
          Categoría
        </InputChip>
      )
      expect(screen.getByRole('button', { name: 'Quitar filtro de categoría' })).toBeInTheDocument()
    })

    it('marca data-close-disabled en el contenedor cuando closeDisabled es true', () => {
      render(
        <InputChip onClose={() => {}} closeDisabled>
          Etiqueta
        </InputChip>
      )
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toHaveAttribute(
        'data-close-disabled',
        'true'
      )
    })

    it('data-close-disabled es "false" cuando closeDisabled no está activo', () => {
      render(<InputChip onClose={() => {}}>Etiqueta</InputChip>)
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toHaveAttribute(
        'data-close-disabled',
        'false'
      )
    })
  })

  describe('Accesibilidad', () => {
    it('el botón de cerrar es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClose = vi.fn()
      const user = userEvent.setup()
      render(<InputChip onClose={handleClose}>Etiqueta</InputChip>)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<InputChip onClose={() => {}}>Etiqueta</InputChip>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — botón de cerrar deshabilitado', async () => {
      const { container } = render(
        <InputChip onClose={() => {}} closeDisabled>
          Etiqueta
        </InputChip>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})