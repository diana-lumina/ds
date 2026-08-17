import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { InputChip } from './input-chip'

describe('InputChip', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<InputChip label="Etiqueta" onClose={() => {}} />)
    })

    it('tiene el data-slot correcto', () => {
      render(<InputChip label="Etiqueta" onClose={() => {}} />)
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toBeInTheDocument()
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(
        <InputChip label="Etiqueta" icon={<svg data-testid="icono" />} onClose={() => {}} />
      )
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('siempre renderiza el botón de cerrar', () => {
      render(<InputChip label="Etiqueta" onClose={() => {}} />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<InputChip label="Etiqueta" onClose={() => {}} />)
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toHaveAttribute(
        'data-size',
        'sm'
      )
    })

    it('aplica el tamaño md', () => {
      render(<InputChip size="md" label="Etiqueta" onClose={() => {}} />)
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toHaveAttribute(
        'data-size',
        'md'
      )
    })
  })

  describe('Comportamiento: botón de cerrar', () => {
    it('llama a onClose al hacer click en la X', async () => {
      const handleClose = vi.fn()
      render(<InputChip label="Etiqueta" onClose={handleClose} />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    it('no llama a onClose cuando disabled es true', async () => {
      const handleClose = vi.fn()
      render(<InputChip label="Etiqueta" onClose={handleClose} disabled />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClose).not.toHaveBeenCalled()
    })

    it('usa Eliminar {label} como nombre accesible por defecto', () => {
      render(<InputChip label="Categoría" onClose={() => {}} />)
      expect(screen.getByRole('button', { name: 'Eliminar Categoría' })).toBeInTheDocument()
    })

    it('permite override de closeLabel', () => {
      render(
        <InputChip label="Categoría" onClose={() => {}} closeLabel="Quitar filtro de categoría" />
      )
      expect(screen.getByRole('button', { name: 'Quitar filtro de categoría' })).toBeInTheDocument()
    })

    it('marca data-disabled en el contenedor cuando disabled es true', () => {
      render(<InputChip label="Etiqueta" onClose={() => {}} disabled />)
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).toHaveAttribute(
        'data-disabled',
        'true'
      )
    })

    it('no marca data-disabled cuando disabled no está activo', () => {
      render(<InputChip label="Etiqueta" onClose={() => {}} />)
      expect(screen.getByText('Etiqueta').closest('[data-slot="input-chip"]')).not.toHaveAttribute(
        'data-disabled'
      )
    })
  })

  describe('Accesibilidad', () => {
    it('el leading icon es decorativo (aria-hidden)', () => {
      render(
        <InputChip label="Etiqueta" icon={<svg data-testid="icono" />} onClose={() => {}} />
      )
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })

    it('el botón de cerrar es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClose = vi.fn()
      const user = userEvent.setup()
      render(<InputChip label="Etiqueta" onClose={handleClose} />)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClose).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<InputChip label="Etiqueta" onClose={() => {}} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<InputChip label="Etiqueta" onClose={() => {}} disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
