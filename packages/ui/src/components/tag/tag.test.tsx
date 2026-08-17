import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Tag } from './tag'

describe('Tag', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Tag label="Virtual" />)
    })

    it('renderiza como <span>', () => {
      render(<Tag label="Virtual" />)
      expect(screen.getByText('Virtual').closest('[data-slot="tag"]')?.tagName).toBe('SPAN')
    })

    it('tiene el data-slot correcto', () => {
      render(<Tag label="Virtual" />)
      expect(screen.getByText('Virtual').closest('[data-slot="tag"]')).toHaveAttribute(
        'data-slot',
        'tag'
      )
    })

    it('renderiza el ícono cuando se pasa', () => {
      render(<Tag label="Virtual" icon={<svg data-testid="icono" />} />)
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('el ícono es decorativo (aria-hidden)', () => {
      render(<Tag label="Virtual" icon={<svg data-testid="icono" />} />)
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })

    it('acepta y aplica className adicional', () => {
      render(<Tag label="Virtual" className="mi-clase" />)
      expect(screen.getByText('Virtual').closest('[data-slot="tag"]')).toHaveClass('mi-clase')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño sm por defecto', () => {
      render(<Tag label="Virtual" />)
      expect(screen.getByText('Virtual').closest('[data-slot="tag"]')).toHaveAttribute(
        'data-size',
        'sm'
      )
    })

    it('aplica el tamaño md', () => {
      render(<Tag size="md" label="Virtual" />)
      expect(screen.getByText('Virtual').closest('[data-slot="tag"]')).toHaveAttribute(
        'data-size',
        'md'
      )
    })
  })

  describe('Prop: tone', () => {
    it('aplica tone neutral por defecto', () => {
      render(<Tag label="Virtual" />)
      expect(screen.getByText('Virtual').closest('[data-slot="tag"]')).toHaveAttribute(
        'data-tone',
        'neutral'
      )
    })

    it('aplica tone brand', () => {
      render(<Tag tone="brand" label="Virtual" />)
      expect(screen.getByText('Virtual').closest('[data-slot="tag"]')).toHaveAttribute(
        'data-tone',
        'brand'
      )
    })
  })

  describe('Accesibilidad', () => {
    it.each(['neutral', 'brand'] as const)(
      'sin violaciones de accesibilidad — tone %s',
      async (tone) => {
        const { container } = render(<Tag tone={tone} label="Virtual" />)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )

    it('sin violaciones de accesibilidad con ícono', async () => {
      const { container } = render(
        <Tag label="Virtual" icon={<svg aria-hidden="true" />} />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
