import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Button } from './button'

describe('Button', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Button>Click</Button>)
    })

    it('muestra el texto correctamente', () => {
      render(<Button>Agregar al carrito</Button>)
      expect(screen.getByText('Agregar al carrito')).toBeInTheDocument()
    })

    it('tiene el data-slot correcto', () => {
      render(<Button>Click</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'button')
    })

    it('renderiza como button por defecto', () => {
      render(<Button>Click</Button>)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('renderiza como elemento hijo con asChild, sin envoltorio extra', () => {
      render(
        <Button asChild>
          <a href="/ruta">Link</a>
        </Button>
      )
      const link = screen.getByRole('link', { name: 'Link' })
      expect(link.tagName).toBe('A')
      expect(link).toHaveAttribute('href', '/ruta')
    })

    it('acepta y aplica className adicional', () => {
      render(<Button className="mi-clase">Click</Button>)
      expect(screen.getByRole('button')).toHaveClass('mi-clase')
    })

    it('renderiza contenido arbitrario como children', () => {
      render(
        <Button>
          <span data-testid="icono">★</span>
          Favorito
        </Button>
      )
      expect(screen.getByTestId('icono')).toBeInTheDocument()
      expect(screen.getByText('Favorito')).toBeInTheDocument()
    })

    it('renderiza leftIcon/rightIcon en sus posiciones, con data-icon="both"', () => {
      render(
        <Button leftIcon={<span data-testid="left">L</span>} rightIcon={<span data-testid="right">R</span>}>
          Click
        </Button>
      )
      expect(screen.getByTestId('left')).toBeInTheDocument()
      expect(screen.getByTestId('right')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveAttribute('data-icon', 'both')
    })
  })

  describe('Prop: variant', () => {
    it('aplica la variante default por defecto', () => {
      render(<Button>Click</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'default')
    })

    it.each(['outline', 'secondary', 'ghost', 'destructive', 'link'] as const)(
      'aplica la variante %s',
      (variant) => {
        render(<Button variant={variant}>Click</Button>)
        expect(screen.getByRole('button')).toHaveAttribute('data-variant', variant)
      }
    )
  })

  describe('Prop: size', () => {
    it('aplica el tamaño default por defecto', () => {
      render(<Button>Click</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'default')
    })

    // "xs" NO está en esta lista a propósito — se eliminó del componente
    // (sin respaldo en Figma, decisión confirmada). Si alguien lo
    // reintroduce sin querer, TypeScript ya marca error antes de llegar
    // a este test.
    it.each(['sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'] as const)(
      'aplica el tamaño %s',
      (size) => {
        render(
          <Button size={size} aria-label={size.startsWith('icon') ? 'Favorito' : undefined}>
            {size.startsWith('icon') ? '★' : 'Click'}
          </Button>
        )
        expect(screen.getByRole('button')).toHaveAttribute('data-size', size)
      }
    )
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick}>Click</Button>)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(
        <Button disabled onClick={handleClick}>
          Click
        </Button>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<Button disabled>Click</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no está deshabilitado por defecto', () => {
      render(<Button>Click</Button>)
      expect(screen.getByRole('button')).not.toBeDisabled()
    })

    it('SÍ llama a onClick en loading — confirmado: no bloquea interacción, a diferencia de disabled', async () => {
      const handleClick = vi.fn()
      render(
        <Button loading onClick={handleClick}>
          Click
        </Button>
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('aplica aria-busy cuando loading=true, y lo omite cuando es false', () => {
      const { rerender } = render(<Button loading>Click</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')

      rerender(<Button>Click</Button>)
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-busy')
    })
  })

  describe('Accesibilidad', () => {
    it('es encontrable por role button', () => {
      render(<Button>Click</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('acepta aria-label', () => {
      render(<Button aria-label="Cerrar modal">✕</Button>)
      expect(screen.getByRole('button', { name: 'Cerrar modal' })).toBeInTheDocument()
    })

    it('acepta aria-disabled', () => {
      render(<Button aria-disabled="true">Click</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
    })

    it('los botones icon sin texto tienen aria-label', () => {
      render(
        <Button size="icon" aria-label="Agregar favorito">
          ★
        </Button>
      )
      expect(screen.getByRole('button', { name: 'Agregar favorito' })).toBeInTheDocument()
    })

    it('es alcanzable por teclado (Tab + Enter, no solo clic de mouse)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Button onClick={handleClick}>Click</Button>)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it.each(['default', 'disabled', 'loading'] as const)(
      'sin violaciones de accesibilidad en estado %s',
      async (state) => {
        const { container } = render(
          <Button disabled={state === 'disabled'} loading={state === 'loading'}>
            Click
          </Button>
        )
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )

    it('sin violaciones de accesibilidad con solo ícono (con aria-label)', async () => {
      const { container } = render(
        <Button size="icon" aria-label="Cerrar">
          <svg aria-hidden="true" />
        </Button>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})