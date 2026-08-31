import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Stat } from './stat'

const icon = <svg data-testid="icono" />

describe('Stat', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Stat value="1,248" label="Inscripciones" icon={icon} />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Stat value="1,248" label="Inscripciones" icon={icon} />)
      expect(screen.getByText('1,248').closest('[data-slot="stat"]')).toHaveAttribute(
        'data-slot',
        'stat',
      )
    })

    it('renderiza value y label', () => {
      render(<Stat value="1,248" label="Inscripciones" icon={icon} />)
      expect(screen.getByText('1,248')).toBeInTheDocument()
      expect(screen.getByText('Inscripciones')).toBeInTheDocument()
    })

    it('renderiza el ícono', () => {
      render(<Stat value="1,248" label="Inscripciones" icon={icon} />)
      expect(screen.getByTestId('icono')).toBeInTheDocument()
      expect(document.querySelector('[data-slot="stat-icon"]')).toBeInTheDocument()
    })

    it('el ícono es decorativo (aria-hidden)', () => {
      render(<Stat value="1,248" label="Inscripciones" icon={icon} />)
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <Stat value="1,248" label="Inscripciones" icon={icon} />,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
