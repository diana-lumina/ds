import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { AiResponseStatus } from './ai-response-status'

describe('AiResponseStatus', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<AiResponseStatus activity="thinking" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<AiResponseStatus activity="thinking" />)
      expect(document.querySelector('[data-slot="ai-response-status"]')).toBeInTheDocument()
    })

    it('usa thinking por defecto', () => {
      render(<AiResponseStatus />)
      expect(document.querySelector('[data-slot="ai-response-status"]')).toHaveAttribute(
        'data-activity',
        'thinking',
      )
      expect(screen.getByRole('status')).toHaveTextContent('Pensando')
    })

    it('renderiza el copy de cada activity', () => {
      const { rerender } = render(<AiResponseStatus activity="searching-sources" />)
      expect(screen.getByRole('status')).toHaveTextContent('Buscando fuentes')
      rerender(<AiResponseStatus activity="generating" />)
      expect(screen.getByRole('status')).toHaveTextContent('Generando')
      rerender(<AiResponseStatus activity="streaming" />)
      expect(screen.getByRole('status')).toHaveTextContent('Escribiendo')
    })

    it('permite override de label', () => {
      render(<AiResponseStatus activity="thinking" label="Preparando respuesta" />)
      expect(screen.getByRole('status')).toHaveTextContent('Preparando respuesta')
    })

    it('el ellipsis es decorativo', () => {
      render(<AiResponseStatus activity="thinking" />)
      expect(document.querySelector('[data-slot="ai-response-status-icon"]')).toHaveAttribute(
        'aria-hidden',
        'true',
      )
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<AiResponseStatus activity="generating" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
