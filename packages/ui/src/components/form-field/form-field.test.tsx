import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { FormField } from './form-field'

describe('FormField', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<FormField label="Correo" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<FormField label="Correo" />)
      expect(document.querySelector('[data-slot="form-field"]')).toBeInTheDocument()
    })

    it('asocia el label con el input', () => {
      render(<FormField label="Correo" />)
      expect(screen.getByLabelText('Correo')).toBeInTheDocument()
    })

    it('no muestra supporting text por defecto', () => {
      render(<FormField label="Correo" />)
      expect(screen.queryByText('Texto de ayuda')).not.toBeInTheDocument()
    })

    it('muestra supporting text cuando se pasa', () => {
      render(<FormField label="Correo" supportingText="Usa tu correo institucional" />)
      expect(screen.getByText('Usa tu correo institucional')).toBeInTheDocument()
    })
  })

  describe('Prop: error', () => {
    it('no está en error por defecto', () => {
      render(<FormField label="Correo" />)
      expect(document.querySelector('[data-slot="form-field"]')).toHaveAttribute(
        'data-error',
        'false'
      )
      expect(screen.getByLabelText('Correo')).not.toHaveAttribute('aria-invalid')
    })

    it('marca error y aria-invalid', () => {
      render(<FormField label="Correo" error supportingText="Formato inválido" />)
      expect(document.querySelector('[data-slot="form-field"]')).toHaveAttribute(
        'data-error',
        'true'
      )
      expect(screen.getByLabelText('Correo')).toHaveAttribute('aria-invalid', 'true')
    })
  })

  describe('Comportamiento: disabled', () => {
    it('deshabilita el input', () => {
      render(<FormField label="Correo" disabled />)
      expect(screen.getByLabelText('Correo')).toBeDisabled()
    })

    it('no llama a onChange cuando está disabled', async () => {
      const handleChange = vi.fn()
      render(<FormField label="Correo" disabled onChange={handleChange} />)
      await userEvent.type(screen.getByLabelText('Correo'), 'a')
      expect(handleChange).not.toHaveBeenCalled()
    })

    it('error no se aplica visualmente cuando está disabled', () => {
      render(<FormField label="Correo" error disabled />)
      expect(document.querySelector('[data-slot="form-field"]')).toHaveAttribute(
        'data-error',
        'false'
      )
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado', async () => {
      const user = userEvent.setup()
      render(<FormField label="Correo" />)

      await user.tab()
      expect(screen.getByLabelText('Correo')).toHaveFocus()
    })

    it('asocia supporting text con aria-describedby', () => {
      render(<FormField label="Correo" supportingText="Usa tu correo institucional" />)
      const input = screen.getByLabelText('Correo')
      const describedBy = input.getAttribute('aria-describedby')
      expect(describedBy).toBeTruthy()
      expect(document.getElementById(describedBy!)).toHaveTextContent(
        'Usa tu correo institucional'
      )
    })

    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(
        <FormField label="Correo" supportingText="Usa tu correo institucional" />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — error', async () => {
      const { container } = render(
        <FormField label="Correo" error supportingText="Formato inválido" />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<FormField label="Correo" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
