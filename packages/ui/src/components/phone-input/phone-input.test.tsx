import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { PhoneInput } from './phone-input'

describe('PhoneInput', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<PhoneInput aria-label="Teléfono" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<PhoneInput aria-label="Teléfono" />)
      expect(document.querySelector('[data-slot="phone-input"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="select-trigger"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="text-input"]')).toBeInTheDocument()
    })
  })

  describe('Prop: appearance', () => {
    it('usa outlined por defecto', () => {
      render(<PhoneInput aria-label="Teléfono" />)
      expect(document.querySelector('[data-slot="phone-input"]')).toHaveAttribute(
        'data-appearance',
        'outlined'
      )
    })

    it('aplica underline', () => {
      render(<PhoneInput aria-label="Teléfono" appearance="underline" />)
      expect(document.querySelector('[data-slot="phone-input"]')).toHaveAttribute(
        'data-appearance',
        'underline'
      )
    })
  })

  describe('Comportamiento', () => {
    it('deshabilita select e input', () => {
      render(<PhoneInput aria-label="Teléfono" disabled />)
      expect(screen.getByLabelText('Código de país')).toBeDisabled()
      expect(screen.getByLabelText('Teléfono')).toBeDisabled()
    })

    it('llama a onChange al escribir el número', async () => {
      const handleChange = vi.fn()
      render(<PhoneInput aria-label="Teléfono" onChange={handleChange} />)
      await userEvent.type(screen.getByLabelText('Teléfono'), '81')
      expect(handleChange).toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(<PhoneInput aria-label="Teléfono" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
