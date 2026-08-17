import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Status } from './status'

describe('Status', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Status label="Pendiente" />)
    })

    it('renderiza como <span>', () => {
      render(<Status label="Pendiente" />)
      expect(screen.getByText('Pendiente').closest('[data-slot="status"]')?.tagName).toBe('SPAN')
    })

    it('tiene el data-slot correcto', () => {
      render(<Status label="Pendiente" />)
      expect(screen.getByText('Pendiente').closest('[data-slot="status"]')).toHaveAttribute(
        'data-slot',
        'status'
      )
    })

    it('no renderiza ícono por defecto', () => {
      render(<Status label="Pendiente" />)
      expect(document.querySelector('svg')).not.toBeInTheDocument()
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(<Status label="Pendiente" icon={<svg data-testid="icono" />} />)
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('el ícono es decorativo (aria-hidden)', () => {
      render(<Status label="Pendiente" icon={<svg data-testid="icono" />} />)
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<Status label="Pendiente" />)
      expect(screen.getByText('Pendiente').closest('[data-slot="status"]')).toHaveAttribute(
        'data-size',
        'sm'
      )
    })

    it('aplica el tamaño md', () => {
      render(<Status size="md" label="Pendiente" />)
      expect(screen.getByText('Pendiente').closest('[data-slot="status"]')).toHaveAttribute(
        'data-size',
        'md'
      )
    })
  })

  describe('Prop: intent', () => {
    it('aplica intent neutral por defecto', () => {
      render(<Status label="Pendiente" />)
      expect(screen.getByText('Pendiente').closest('[data-slot="status"]')).toHaveAttribute(
        'data-intent',
        'neutral'
      )
    })

    it.each(['info', 'success', 'warning', 'danger'] as const)('aplica intent %s', (intent) => {
      render(<Status intent={intent} label="Pendiente" />)
      expect(screen.getByText('Pendiente').closest('[data-slot="status"]')).toHaveAttribute(
        'data-intent',
        intent
      )
    })
  })

  describe('Accesibilidad', () => {
    it.each(['neutral', 'info', 'success', 'warning', 'danger'] as const)(
      'sin violaciones de accesibilidad — intent %s',
      async (intent) => {
        const { container } = render(<Status intent={intent} label="Pendiente" />)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )

    it('sin violaciones de accesibilidad con ícono', async () => {
      const { container } = render(
        <Status label="Pendiente" icon={<svg aria-hidden="true" />} />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
