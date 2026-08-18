import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Bar } from './bar'

describe('Bar', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Bar aria-label="Progreso" />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Bar aria-label="Progreso" />)
      expect(screen.getByRole('progressbar')).toHaveAttribute('data-slot', 'bar')
    })

    it('acepta y aplica className adicional', () => {
      render(<Bar aria-label="Progreso" className="mi-clase" />)
      expect(screen.getByRole('progressbar')).toHaveClass('mi-clase')
    })
  })

  describe('Prop: value', () => {
    it('usa 0 por defecto', () => {
      render(<Bar aria-label="Progreso" />)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
    })

    it('refleja el valor', () => {
      render(<Bar aria-label="Progreso" value={40} />)
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '40')
    })

    it('respeta max', () => {
      render(<Bar aria-label="Progreso" value={25} max={50} />)
      const bar = screen.getByRole('progressbar')
      expect(bar).toHaveAttribute('aria-valuenow', '25')
      expect(bar).toHaveAttribute('aria-valuemax', '50')
    })
  })

  describe('Accesibilidad', () => {
    it('expone role progressbar', () => {
      render(<Bar aria-label="Progreso" value={60} />)
      expect(screen.getByRole('progressbar', { name: 'Progreso' })).toBeInTheDocument()
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<Bar aria-label="Progreso" value={60} />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
