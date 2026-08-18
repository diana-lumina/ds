import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { ProgressStep } from '../progress-step'
import { ProgressIndicator } from './progress-indicator'

const trail = (
  <ProgressIndicator>
    <ProgressStep state="completed" label="Datos" icon={1} />
    <ProgressStep state="current" label="Pago" icon={2} />
    <ProgressStep state="upcoming" label="Envío" icon={3} />
  </ProgressIndicator>
)

describe('ProgressIndicator', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(trail)
    })

    it('tiene el data-slot correcto', () => {
      render(trail)
      expect(screen.getByRole('navigation')).toHaveAttribute('data-slot', 'progress-indicator')
    })

    it('expone el landmark con aria-label por defecto', () => {
      render(trail)
      expect(screen.getByRole('navigation', { name: 'Progreso' })).toBeInTheDocument()
    })

    it('renderiza los ProgressStep', () => {
      render(trail)
      expect(screen.getByText('Datos')).toBeInTheDocument()
      expect(screen.getByText('Pago')).toBeInTheDocument()
      expect(screen.getByText('Envío')).toBeInTheDocument()
    })

    it('inserta conectores no accesibles entre pasos', () => {
      const { container } = render(trail)
      const connectors = container.querySelectorAll('[data-slot="progress-indicator-connector"]')
      expect(connectors).toHaveLength(2)
    })

    it('el conector tras un paso completed usa estado completed', () => {
      const { container } = render(trail)
      const connectors = container.querySelectorAll('[data-slot="progress-indicator-connector"]')
      expect(connectors[0]).toHaveAttribute('data-state', 'completed')
      expect(connectors[1]).toHaveAttribute('data-state', 'upcoming')
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(trail)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
