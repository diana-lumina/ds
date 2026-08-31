import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { AiComposer } from './ai-composer'

describe('AiComposer', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<AiComposer aria-label="Mensaje" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<AiComposer aria-label="Mensaje" />)
      expect(document.querySelector('[data-slot="ai-composer"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="ai-composer-field"]')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="ai-composer-actions"]')).toBeInTheDocument()
    })

    it('marca empty cuando no hay valor', () => {
      render(<AiComposer aria-label="Mensaje" />)
      expect(document.querySelector('[data-slot="ai-composer"]')).toHaveAttribute(
        'data-empty',
        'true',
      )
    })

    it('quita empty cuando hay valor', () => {
      render(<AiComposer aria-label="Mensaje" defaultValue="Hola" />)
      expect(document.querySelector('[data-slot="ai-composer"]')).not.toHaveAttribute(
        'data-empty',
      )
    })

    it('renderiza acciones tertiary y primary sm', () => {
      render(<AiComposer aria-label="Mensaje" />)
      const attach = screen.getByRole('button', { name: 'Adjuntar' })
      const send = screen.getByRole('button', { name: 'Enviar' })
      expect(attach).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(attach).toHaveAttribute('data-size', 'sm')
      expect(send).toHaveAttribute('data-hierarchy', 'primary')
      expect(send).toHaveAttribute('data-size', 'sm')
      expect(send).toBeDisabled()
    })
  })

  describe('Estados', () => {
    it('usa default por defecto', () => {
      render(<AiComposer aria-label="Mensaje" />)
      expect(document.querySelector('[data-slot="ai-composer"]')).toHaveAttribute(
        'data-status',
        'default',
      )
    })

    it('aplica error', () => {
      render(<AiComposer aria-label="Mensaje" status="error" />)
      expect(document.querySelector('[data-slot="ai-composer"]')).toHaveAttribute(
        'data-status',
        'error',
      )
      expect(screen.getByLabelText('Mensaje')).toHaveAttribute('aria-invalid', 'true')
    })

    it('disabled bloquea el campo y las acciones', () => {
      render(<AiComposer aria-label="Mensaje" status="disabled" defaultValue="Hola" />)
      expect(screen.getByLabelText('Mensaje')).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Adjuntar' })).toBeDisabled()
      expect(screen.getByRole('button', { name: 'Enviar' })).toBeDisabled()
    })

    it('submitting marca busy y loading en enviar', () => {
      render(
        <AiComposer aria-label="Mensaje" status="submitting" defaultValue="Hola" />,
      )
      expect(document.querySelector('[data-slot="ai-composer"]')).toHaveAttribute(
        'aria-busy',
        'true',
      )
      expect(screen.getByLabelText('Mensaje')).toHaveAttribute('readOnly')
      expect(screen.getByRole('button', { name: 'Enviar' })).toHaveAttribute(
        'data-loading',
        'true',
      )
    })

    it('generating muestra stop cuadrado en primary default', () => {
      render(
        <AiComposer aria-label="Mensaje" status="generating" defaultValue="Hola" />,
      )
      const stop = screen.getByRole('button', { name: 'Detener' })
      expect(stop).not.toBeDisabled()
      expect(stop).toHaveAttribute('data-hierarchy', 'primary')
      expect(stop).not.toHaveAttribute('data-loading')
    })

    it('error con valor deja enviar en primary default', () => {
      render(<AiComposer aria-label="Mensaje" status="error" defaultValue="Hola" />)
      const send = screen.getByRole('button', { name: 'Enviar' })
      expect(send).not.toBeDisabled()
      expect(send).not.toHaveAttribute('data-loading')
    })

    it('error vacío deja enviar disabled', () => {
      render(<AiComposer aria-label="Mensaje" status="error" />)
      expect(screen.getByRole('button', { name: 'Enviar' })).toBeDisabled()
    })

    it('acepta texto', async () => {
      render(<AiComposer aria-label="Mensaje" />)
      const field = screen.getByLabelText('Mensaje')
      await userEvent.type(field, 'Hola')
      expect(field).toHaveValue('Hola')
      expect(document.querySelector('[data-slot="ai-composer"]')).not.toHaveAttribute(
        'data-empty',
      )
      expect(screen.getByRole('button', { name: 'Enviar' })).not.toBeDisabled()
    })

    it('envía con Enter', async () => {
      const onSubmit = vi.fn()
      render(<AiComposer aria-label="Mensaje" defaultValue="Hola" onSubmit={onSubmit} />)
      screen.getByLabelText('Mensaje').focus()
      await userEvent.keyboard('{Enter}')
      expect(onSubmit).toHaveBeenCalledWith('Hola')
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<AiComposer aria-label="Mensaje" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
