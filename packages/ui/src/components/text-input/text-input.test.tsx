import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { TextInput } from './text-input'

describe('TextInput', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<TextInput aria-label="Nombre" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<TextInput aria-label="Nombre" />)
      expect(document.querySelector('[data-slot="text-input"]')).toBeInTheDocument()
    })
  })

  describe('Prop: appearance', () => {
    it('usa outlined por defecto', () => {
      render(<TextInput aria-label="Nombre" />)
      expect(screen.getByLabelText('Nombre')).toHaveAttribute('data-appearance', 'outlined')
    })

    it('aplica underline', () => {
      render(<TextInput aria-label="Nombre" appearance="underline" />)
      expect(screen.getByLabelText('Nombre')).toHaveAttribute('data-appearance', 'underline')
    })
  })

  describe('Prop: error', () => {
    it('no marca error por defecto', () => {
      render(<TextInput aria-label="Nombre" />)
      const input = screen.getByLabelText('Nombre')
      expect(input).not.toHaveAttribute('data-error')
      expect(input).not.toHaveAttribute('aria-invalid')
    })

    it('marca error y aria-invalid', () => {
      render(<TextInput aria-label="Nombre" error />)
      const input = screen.getByLabelText('Nombre')
      expect(input).toHaveAttribute('data-error', 'true')
      expect(input).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Comportamiento: disabled', () => {
    it('deshabilita el input', () => {
      render(<TextInput aria-label="Nombre" disabled />)
      expect(screen.getByLabelText('Nombre')).toBeDisabled()
    })

    it('no llama a onChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(<TextInput aria-label="Nombre" disabled onChange={handleChange} />)
      await userEvent.type(screen.getByLabelText('Nombre'), 'a')
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('error no se aplica cuando está disabled', () => {
      render(<TextInput aria-label="Nombre" error disabled />)
      const input = screen.getByLabelText('Nombre')
      expect(input).not.toHaveAttribute('data-error')
      expect(input).not.toHaveAttribute('aria-invalid')
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado', async () => {
      const user = userEvent.setup()
      render(<TextInput aria-label="Nombre" />)

      await user.tab()
      expect(screen.getByLabelText('Nombre')).toHaveFocus()
    })

    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(<TextInput aria-label="Nombre" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — error', async () => {
      const { container } = render(<TextInput aria-label="Nombre" error />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<TextInput aria-label="Nombre" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
