import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { OTP_LENGTH, OtpInput } from './otp-input'

describe('OtpInput', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<OtpInput />)
    })

    it('tiene el data-slot correcto', () => {
      render(<OtpInput />)
      expect(document.querySelector('[data-slot="otp-input"]')).toBeInTheDocument()
    })

    it('renderiza 6 segmentos', () => {
      render(<OtpInput />)
      expect(document.querySelectorAll('[data-slot="otp-input-segment"]')).toHaveLength(
        OTP_LENGTH,
      )
    })
  })

  describe('Comportamiento', () => {
    it('escribe dígitos y avanza de segmento', async () => {
      const onValueChange = vi.fn()
      render(<OtpInput onValueChange={onValueChange} />)
      const segments = screen.getAllByRole('textbox')

      await userEvent.type(segments[0], '8')
      expect(onValueChange).toHaveBeenLastCalledWith('8')
      expect(segments[1]).toHaveFocus()
    })

    it('pega un código completo', async () => {
      const onValueChange = vi.fn()
      render(<OtpInput onValueChange={onValueChange} />)

      await userEvent.click(screen.getAllByRole('textbox')[0])
      await userEvent.paste('847291')
      expect(onValueChange).toHaveBeenCalledWith('847291')
    })

    it('borra con Backspace y retrocede', async () => {
      const onValueChange = vi.fn()
      render(<OtpInput defaultValue="84" onValueChange={onValueChange} />)
      const segments = screen.getAllByRole('textbox')

      segments[1].focus()
      await userEvent.keyboard('{Backspace}')
      expect(onValueChange).toHaveBeenLastCalledWith('8')
    })

    it('ignora letras', async () => {
      const onValueChange = vi.fn()
      render(<OtpInput onValueChange={onValueChange} />)

      await userEvent.type(screen.getAllByRole('textbox')[0], 'a')
      expect(onValueChange).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es un grupo etiquetado', () => {
      render(<OtpInput aria-label="Código de verificación" />)
      expect(
        screen.getByRole('group', { name: 'Código de verificación' }),
      ).toBeInTheDocument()
    })

    it('sin violaciones de accesibilidad — default', async () => {
      const { container } = render(<OtpInput />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
