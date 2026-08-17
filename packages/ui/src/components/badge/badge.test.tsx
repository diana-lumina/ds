import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Badge } from './badge'

describe('Badge', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Badge label="New" />)
    })

    it('muestra el label correctamente', () => {
      render(<Badge label="New" />)
      expect(screen.getByText('New')).toBeInTheDocument()
    })

    it('renderiza como <span>', () => {
      render(<Badge label="New" />)
      expect(screen.getByText('New').tagName).toBe('SPAN')
    })

    it('tiene el data-slot correcto', () => {
      render(<Badge label="New" />)
      expect(screen.getByText('New')).toHaveAttribute('data-slot', 'badge')
    })

    it('acepta y aplica className adicional', () => {
      render(<Badge className="mi-clase" label="New" />)
      expect(screen.getByText('New')).toHaveClass('mi-clase')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<Badge label="New" />)
      expect(screen.getByText('New')).toHaveAttribute('data-size', 'sm')
    })

    it('aplica el tamaño md', () => {
      render(<Badge size="md" label="New" />)
      expect(screen.getByText('New')).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Prop: tone', () => {
    it('aplica tone neutral por defecto', () => {
      render(<Badge label="New" />)
      expect(screen.getByText('New')).toHaveAttribute('data-tone', 'neutral')
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<Badge label="New" />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
