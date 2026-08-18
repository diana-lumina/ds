import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Banner } from './banner'

describe('Banner', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Banner title="Mantenimiento" message="El servicio se reanudará a las 18:00." />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Banner title="Mantenimiento" message="El servicio se reanudará a las 18:00." />)
      expect(screen.getByText('Mantenimiento').closest('[data-slot="banner"]')).toHaveAttribute(
        'data-slot',
        'banner',
      )
    })

    it('no renderiza dismiss por defecto', () => {
      render(<Banner title="Mantenimiento" message="El servicio se reanudará a las 18:00." />)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })

    it('renderiza IconButton tertiary sm cuando hay onDismiss', () => {
      render(
        <Banner
          title="Mantenimiento"
          message="El servicio se reanudará a las 18:00."
          onDismiss={() => {}}
        />,
      )
      const dismiss = screen.getByRole('button', { name: 'Cerrar' })
      expect(dismiss).toHaveAttribute('data-hierarchy', 'tertiary')
      expect(dismiss).toHaveAttribute('data-size', 'sm')
    })

    it('llama a onDismiss al cerrar', async () => {
      const handleDismiss = vi.fn()
      render(
        <Banner
          title="Mantenimiento"
          message="El servicio se reanudará a las 18:00."
          onDismiss={handleDismiss}
        />,
      )
      await userEvent.click(screen.getByRole('button', { name: 'Cerrar' }))
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })

    it('renderiza el link cuando se pasa', () => {
      render(
        <Banner
          title="Mantenimiento"
          message="El servicio se reanudará a las 18:00."
          link={<a href="/status">Ver estatus</a>}
        />,
      )
      expect(screen.getByRole('link', { name: 'Ver estatus' })).toBeInTheDocument()
    })
  })

  describe('Prop: intent', () => {
    it.each(['info', 'success', 'warning', 'danger'] as const)('aplica intent %s', (intent) => {
      render(<Banner intent={intent} title="Título" message="Mensaje" />)
      expect(screen.getByText('Título').closest('[data-slot="banner"]')).toHaveAttribute(
        'data-intent',
        intent,
      )
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <Banner
          title="Mantenimiento"
          message="El servicio se reanudará a las 18:00."
          onDismiss={() => {}}
        />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
