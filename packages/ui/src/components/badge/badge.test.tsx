import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Badge } from './badge'

describe('Badge', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Badge>12</Badge>)
    })

    it('renderiza como <span>', () => {
      render(<Badge>12</Badge>)
      expect(screen.getByText('12').tagName).toBe('SPAN')
    })

    it('tiene el data-slot correcto', () => {
      render(<Badge>12</Badge>)
      expect(screen.getByText('12')).toHaveAttribute('data-slot', 'badge')
    })

    it('acepta y aplica className adicional', () => {
      render(<Badge className="mi-clase">12</Badge>)
      expect(screen.getByText('12')).toHaveClass('mi-clase')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<Badge>12</Badge>)
      expect(screen.getByText('12')).toHaveAttribute('data-size', 'sm')
    })

    it('aplica el tamaño md', () => {
      render(<Badge size="md">12</Badge>)
      expect(screen.getByText('12')).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Prop: tone', () => {
    it('aplica tone neutral por defecto', () => {
      render(<Badge>12</Badge>)
      expect(screen.getByText('12')).toHaveAttribute('data-tone', 'neutral')
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<Badge>12</Badge>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})