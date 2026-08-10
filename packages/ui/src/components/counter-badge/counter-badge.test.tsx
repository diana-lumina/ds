import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { CounterBadge } from './counter-badge'

describe('CounterBadge', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<CounterBadge count={3} />)
    })

    it('renderiza como <span>', () => {
      render(<CounterBadge count={3} />)
      expect(screen.getByText('3').tagName).toBe('SPAN')
    })

    it('tiene el data-slot correcto', () => {
      render(<CounterBadge count={3} />)
      expect(screen.getByText('3')).toHaveAttribute('data-slot', 'counter-badge')
    })

    it('muestra el número tal cual, sin max', () => {
      render(<CounterBadge count={150} />)
      expect(screen.getByText('150')).toBeInTheDocument()
    })
  })

  describe('Prop: max', () => {
    it('muestra el número real cuando no supera max', () => {
      render(<CounterBadge count={5} max={99} />)
      expect(screen.getByText('5')).toBeInTheDocument()
    })

    it('muestra "{max}+" cuando count supera max', () => {
      render(<CounterBadge count={150} max={99} />)
      expect(screen.getByText('99+')).toBeInTheDocument()
    })

    it('muestra el número exacto cuando count es igual a max', () => {
      render(<CounterBadge count={99} max={99} />)
      expect(screen.getByText('99')).toBeInTheDocument()
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<CounterBadge count={3} />)
      expect(screen.getByText('3')).toHaveAttribute('data-size', 'sm')
    })

    it('aplica el tamaño md', () => {
      render(<CounterBadge count={3} size="md" />)
      expect(screen.getByText('3')).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Prop: emphasis', () => {
    it('aplica emphasis neutral por defecto', () => {
      render(<CounterBadge count={3} />)
      expect(screen.getByText('3')).toHaveAttribute('data-emphasis', 'neutral')
    })

    it.each(['attention', 'inverse'] as const)('aplica emphasis %s', (emphasis) => {
      render(<CounterBadge count={3} emphasis={emphasis} />)
      expect(screen.getByText('3')).toHaveAttribute('data-emphasis', emphasis)
    })
  })

  describe('Accesibilidad', () => {
    it.each(['neutral', 'attention', 'inverse'] as const)(
      'sin violaciones de accesibilidad — emphasis %s',
      async (emphasis) => {
        const { container } = render(<CounterBadge count={3} emphasis={emphasis} />)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )
  })
})