import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { CounterBadge } from './counter-badge'

describe('CounterBadge', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<CounterBadge value="3" />)
    })

    it('renderiza como <span>', () => {
      render(<CounterBadge value="3" />)
      expect(screen.getByText('3').tagName).toBe('SPAN')
    })

    it('tiene el data-slot correcto', () => {
      render(<CounterBadge value="3" />)
      expect(screen.getByText('3')).toHaveAttribute('data-slot', 'counter-badge')
    })

    it('muestra el value tal cual (sin formateo interno)', () => {
      render(<CounterBadge value="150" />)
      expect(screen.getByText('150')).toBeInTheDocument()
    })

    it('acepta value ya resuelto por el consumidor (99+)', () => {
      render(<CounterBadge value="99+" />)
      expect(screen.getByText('99+')).toBeInTheDocument()
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<CounterBadge value="3" />)
      expect(screen.getByText('3')).toHaveAttribute('data-size', 'sm')
    })

    it('aplica el tamaño md', () => {
      render(<CounterBadge value="3" size="md" />)
      expect(screen.getByText('3')).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Prop: emphasis', () => {
    it('aplica emphasis neutral por defecto', () => {
      render(<CounterBadge value="3" />)
      expect(screen.getByText('3')).toHaveAttribute('data-emphasis', 'neutral')
    })

    it.each(['attention', 'inverse'] as const)('aplica emphasis %s', (emphasis) => {
      render(<CounterBadge value="3" emphasis={emphasis} />)
      expect(screen.getByText('3')).toHaveAttribute('data-emphasis', emphasis)
    })
  })

  describe('Accesibilidad', () => {
    it.each(['neutral', 'attention', 'inverse'] as const)(
      'sin violaciones de accesibilidad — emphasis %s',
      async (emphasis) => {
        const { container } = render(<CounterBadge value="3" emphasis={emphasis} />)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )
  })
})
