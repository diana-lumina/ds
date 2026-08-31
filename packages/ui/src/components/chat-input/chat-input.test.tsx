import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { ChatInput } from './chat-input'

describe('ChatInput', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<ChatInput aria-label="Mensaje" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<ChatInput aria-label="Mensaje" />)
      expect(document.querySelector('[data-slot="chat-input"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="chat-input-field"]')).toBeInTheDocument()
    })

    it('marca empty cuando no hay valor', () => {
      render(<ChatInput aria-label="Mensaje" />)
      expect(document.querySelector('[data-slot="chat-input"]')).toHaveAttribute(
        'data-empty',
        'true',
      )
    })

    it('quita empty cuando hay valor', () => {
      render(<ChatInput aria-label="Mensaje" defaultValue="Hola" />)
      expect(document.querySelector('[data-slot="chat-input"]')).not.toHaveAttribute(
        'data-empty',
      )
    })
  })

  describe('Estados', () => {
    it('aplica error', () => {
      render(<ChatInput aria-label="Mensaje" error />)
      expect(document.querySelector('[data-slot="chat-input"]')).toHaveAttribute(
        'data-error',
        'true',
      )
      expect(screen.getByLabelText('Mensaje')).toHaveAttribute('aria-invalid', 'true')
    })

    it('disabled gana sobre error', () => {
      render(<ChatInput aria-label="Mensaje" error disabled />)
      expect(document.querySelector('[data-slot="chat-input"]')).toHaveAttribute(
        'data-disabled',
      )
      expect(document.querySelector('[data-slot="chat-input"]')).not.toHaveAttribute(
        'data-error',
      )
      expect(screen.getByLabelText('Mensaje')).toBeDisabled()
    })

    it('acepta texto', async () => {
      render(<ChatInput aria-label="Mensaje" />)
      const field = screen.getByLabelText('Mensaje')
      await userEvent.type(field, 'Hola')
      expect(field).toHaveValue('Hola')
      expect(document.querySelector('[data-slot="chat-input"]')).not.toHaveAttribute(
        'data-empty',
      )
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<ChatInput aria-label="Mensaje" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
