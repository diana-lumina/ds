import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Tag } from './tag'

describe('Tag', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Tag>Nuevo</Tag>)
    })

    it('renderiza como <span>', () => {
      render(<Tag>Nuevo</Tag>)
      expect(screen.getByText('Nuevo').tagName).toBe('SPAN')
    })

    it('tiene el data-slot correcto', () => {
      render(<Tag>Nuevo</Tag>)
      expect(screen.getByText('Nuevo')).toHaveAttribute('data-slot', 'tag')
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(<Tag icon={<svg data-testid="icono" />}>Nuevo</Tag>)
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('acepta y aplica className adicional', () => {
      render(<Tag className="mi-clase">Nuevo</Tag>)
      expect(screen.getByText('Nuevo')).toHaveClass('mi-clase')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<Tag>Nuevo</Tag>)
      expect(screen.getByText('Nuevo')).toHaveAttribute('data-size', 'sm')
    })

    it('aplica el tamaño md', () => {
      render(<Tag size="md">Nuevo</Tag>)
      expect(screen.getByText('Nuevo')).toHaveAttribute('data-size', 'md')
    })
  })

  describe('Prop: tone', () => {
    it('aplica tone neutral por defecto', () => {
      render(<Tag>Nuevo</Tag>)
      expect(screen.getByText('Nuevo')).toHaveAttribute('data-tone', 'neutral')
    })

    it('aplica tone brand', () => {
      render(<Tag tone="brand">Nuevo</Tag>)
      expect(screen.getByText('Nuevo')).toHaveAttribute('data-tone', 'brand')
    })
  })

  describe('Accesibilidad', () => {
    it.each(['neutral', 'brand'] as const)('sin violaciones de accesibilidad — tone %s', async (tone) => {
      const { container } = render(<Tag tone={tone}>Nuevo</Tag>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})