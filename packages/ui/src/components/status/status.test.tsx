import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Status } from './status'

describe('Status', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Status>Activo</Status>)
    })

    it('renderiza como <span>', () => {
      render(<Status>Activo</Status>)
      expect(screen.getByText('Activo').tagName).toBe('SPAN')
    })

    it('tiene el data-slot correcto', () => {
      render(<Status>Activo</Status>)
      expect(screen.getByText('Activo')).toHaveAttribute('data-slot', 'status')
    })

    it('no renderiza ícono por defecto', () => {
      render(<Status>Activo</Status>)
      expect(document.querySelector('svg')).not.toBeInTheDocument()
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(<Status icon={<svg data-testid="icono" />}>Activo</Status>)
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<Status>Activo</Status>)
      expect(screen.getByText('Activo')).toHaveAttribute('data-size', 'sm')
    })

    it('aplica el tamaño md', () => {
      render(<Status size="md">Activo</Status>)
      expect(screen.getByText('Activo')).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Prop: intent', () => {
    it('aplica intent neutral por defecto', () => {
      render(<Status>Activo</Status>)
      expect(screen.getByText('Activo')).toHaveAttribute('data-intent', 'neutral')
    })

    it.each(['info', 'success', 'warning', 'danger'] as const)('aplica intent %s', (intent) => {
      render(<Status intent={intent}>Activo</Status>)
      expect(screen.getByText('Activo')).toHaveAttribute('data-intent', intent)
    })
  })

  describe('Accesibilidad', () => {
    it.each(['neutral', 'info', 'success', 'warning', 'danger'] as const)(
      'sin violaciones de accesibilidad — intent %s',
      async (intent) => {
        const { container } = render(<Status intent={intent}>Activo</Status>)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )

    it('sin violaciones de accesibilidad con ícono', async () => {
      const { container } = render(<Status icon={<svg aria-hidden="true" />}>Activo</Status>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})