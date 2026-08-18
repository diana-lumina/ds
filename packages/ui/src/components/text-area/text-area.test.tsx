import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { TextArea } from './text-area'

describe('TextArea', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<TextArea aria-label="Comentario" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<TextArea aria-label="Comentario" />)
      expect(document.querySelector('[data-slot="text-area"]')).toBeInTheDocument()
    })
  })

  describe('Prop: appearance', () => {
    it('usa outlined por defecto', () => {
      render(<TextArea aria-label="Comentario" />)
      expect(screen.getByLabelText('Comentario')).toHaveAttribute('data-appearance', 'outlined')
    })

    it('aplica underline', () => {
      render(<TextArea aria-label="Comentario" appearance="underline" />)
      expect(screen.getByLabelText('Comentario')).toHaveAttribute('data-appearance', 'underline')
    })
  })

  describe('Prop: error', () => {
    it('no marca error por defecto', () => {
      render(<TextArea aria-label="Comentario" />)
      const control = screen.getByLabelText('Comentario')
      expect(control).not.toHaveAttribute('data-error')
      expect(control).not.toHaveAttribute('aria-invalid')
    })

    it('marca error y aria-invalid', () => {
      render(<TextArea aria-label="Comentario" error />)
      const control = screen.getByLabelText('Comentario')
      expect(control).toHaveAttribute('data-error', 'true')
      expect(control).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Comportamiento: disabled', () => {
    it('deshabilita el control', () => {
      render(<TextArea aria-label="Comentario" disabled />)
      expect(screen.getByLabelText('Comentario')).toBeDisabled()
    })

    it('no llama a onChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(<TextArea aria-label="Comentario" disabled onChange={handleChange} />)
      await userEvent.type(screen.getByLabelText('Comentario'), 'a')
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('error no se aplica cuando está disabled', () => {
      render(<TextArea aria-label="Comentario" error disabled />)
      const control = screen.getByLabelText('Comentario')
      expect(control).not.toHaveAttribute('data-error')
      expect(control).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado', async () => {
      const user = userEvent.setup()
      render(<TextArea aria-label="Comentario" />)

      await user.tab()
      expect(screen.getByLabelText('Comentario')).toHaveFocus()
    })

    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(<TextArea aria-label="Comentario" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — error', async () => {
      const { container } = render(<TextArea aria-label="Comentario" error />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<TextArea aria-label="Comentario" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
