import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Divider } from './divider'

describe('Divider', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Divider />)
    })

    it('tiene el data-slot correcto', () => {
      render(<Divider />)
      expect(screen.getByRole('separator')).toHaveAttribute('data-slot', 'divider')
    })

    it('tiene role="separator"', () => {
      render(<Divider />)
      expect(screen.getByRole('separator')).toBeInTheDocument()
    })
  })

  describe('Prop: orientation', () => {
    it('aplica orientation horizontal por defecto', () => {
      render(<Divider />)
      const divider = screen.getByRole('separator')
      expect(divider).toHaveAttribute('data-orientation', 'horizontal')
      expect(divider).toHaveAttribute('aria-orientation', 'horizontal')
    })

    it('aplica orientation vertical', () => {
      render(<Divider orientation="vertical" />)
      const divider = screen.getByRole('separator')
      expect(divider).toHaveAttribute('data-orientation', 'vertical')
      expect(divider).toHaveAttribute('aria-orientation', 'vertical')
    })
  })

  describe('Prop: thickness', () => {
    it('aplica thickness 1 por defecto', () => {
      render(<Divider />)
      expect(screen.getByRole('separator')).toHaveAttribute('data-thickness', '1')
    })

    it('aplica thickness 2', () => {
      render(<Divider thickness={2} />)
      expect(screen.getByRole('separator')).toHaveAttribute('data-thickness', '2')
    })
  })

  describe('Accesibilidad', () => {
    it.each(['horizontal', 'vertical'] as const)(
      'sin violaciones de accesibilidad — orientation %s',
      async (orientation) => {
        const { container } = render(<Divider orientation={orientation} />)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )
  })
})