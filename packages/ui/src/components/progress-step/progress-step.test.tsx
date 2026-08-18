import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { ProgressStep } from './progress-step'

describe('ProgressStep', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<ProgressStep label="Datos" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<ProgressStep label="Datos" />)
      expect(screen.getByText('Datos').closest('[data-slot="progress-step"]')).toHaveAttribute(
        'data-slot',
        'progress-step',
      )
    })

    it('no renderiza ícono por defecto', () => {
      render(<ProgressStep label="Datos" />)
      expect(document.querySelector('svg')).not.toBeInTheDocument()
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(<ProgressStep label="Datos" icon={<svg data-testid="icono" />} />)
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('el ícono es decorativo (aria-hidden)', () => {
      render(<ProgressStep label="Datos" icon={<svg data-testid="icono" />} />)
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })
  })

  describe('Prop: state', () => {
    it('aplica upcoming por defecto', () => {
      render(<ProgressStep label="Datos" />)
      expect(screen.getByText('Datos').closest('[data-slot="progress-step"]')).toHaveAttribute(
        'data-state',
        'upcoming',
      )
    })

    it.each(['completed', 'current', 'upcoming', 'error', 'disabled'] as const)(
      'aplica state %s',
      (state) => {
        render(<ProgressStep state={state} label="Datos" />)
        expect(screen.getByText('Datos').closest('[data-slot="progress-step"]')).toHaveAttribute(
          'data-state',
          state,
        )
      },
    )

    it('marca el paso actual con aria-current', () => {
      render(<ProgressStep state="current" label="Pago" />)
      expect(screen.getByText('Pago').closest('[data-slot="progress-step"]')).toHaveAttribute(
        'aria-current',
        'step',
      )
    })

    it('marca disabled con aria-disabled', () => {
      render(<ProgressStep state="disabled" label="Envío" />)
      expect(screen.getByText('Envío').closest('[data-slot="progress-step"]')).toHaveAttribute(
        'aria-disabled',
        'true',
      )
    })
  })

  describe('Accesibilidad', () => {
    it.each(['completed', 'current', 'upcoming', 'error', 'disabled'] as const)(
      'sin violaciones de accesibilidad — state %s',
      async (state) => {
        const { container } = render(
          <ProgressStep state={state} label="Datos" icon={<svg aria-hidden="true" />} />,
        )
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      },
    )
  })
})
