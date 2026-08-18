import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Toast } from './toast'

describe('Toast', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Toast title="Guardado" message="Los cambios se aplicaron correctamente." />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Toast title="Guardado" message="Los cambios se aplicaron correctamente." />)
      expect(screen.getByText('Guardado').closest('[data-slot="toast"]')).toHaveAttribute(
        'data-slot',
        'toast',
      )
    })

    it('siempre renderiza dismiss tertiary sm', () => {
      render(<Toast title="Guardado" message="Los cambios se aplicaron correctamente." />)
      const dismiss = screen.getByRole('button', { name: 'Cerrar' })
      expect(dismiss).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(dismiss).toHaveAttribute('data-size', 'sm')
    })

    it('llama a onDismiss al cerrar', async () => {
      const handleDismiss = vi.fn()
      render(
        <Toast
          title="Guardado"
          message="Los cambios se aplicaron correctamente."
          onDismiss={handleDismiss}
        />,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Cerrar' }))
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })

    it('renderiza el link cuando se pasa', () => {
      render(
        <Toast
          title="Guardado"
          message="Los cambios se aplicaron correctamente."
          link={<a href="/detalle">Ver detalle</a>}
        />,
      )
      expect(screen.getByRole('link', { name: 'Ver detalle' })).toBeInTheDocument()
    })
  })

  describe('Prop: intent', () => {
    it.each(['info', 'success', 'warning', 'danger'] as const)('aplica intent %s', (intent) => {
      render(<Toast intent={intent} title="Título" message="Mensaje" />)
      expect(screen.getByText('Título').closest('[data-slot="toast"]')).toHaveAttribute(
        'data-intent',
        intent,
      )
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <Toast title="Guardado" message="Los cambios se aplicaron correctamente." />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
