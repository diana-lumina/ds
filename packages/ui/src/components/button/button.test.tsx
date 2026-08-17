import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Button } from './button'

describe('Button', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Button label="Click" />)
    })

    it('muestra el label correctamente', () => {
      render(<Button label="Agregar al carrito" />)
      expect(screen.getByText('Agregar al carrito')).toBeInTheDocument()
    })

    it('tiene el data-slot correcto', () => {
      render(<Button label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'button')
    })

    it('renderiza siempre como button nativo', () => {
      render(<Button label="Click" />)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('acepta y aplica className adicional', () => {
      render(<Button className="mi-clase" label="Click" />)
      expect(screen.getByRole('button')).toHaveClass('mi-clase')
    })

    it('renderiza leftIcon/rightIcon en sus posiciones, con data-icon="both"', () => {
      render(
        <Button
          label="Click"
          leftIcon={<span data-testid="left">L</span>}
          rightIcon={<span data-testid="right">R</span>}
        />
      )
      expect(screen.getByTestId('left')).toBeInTheDocument()
      expect(screen.getByTestId('right')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveAttribute('data-icon', 'both')
    })
  })

  describe('Prop: hierarchy', () => {
    it('aplica hierarchy primary por defecto', () => {
      render(<Button label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-hierarchy', 'primary')
    })

    it.each(['primary', 'secondary', 'tertiary', 'destructive'] as const)(
      'aplica hierarchy %s',
      (hierarchy) => {
        render(<Button hierarchy={hierarchy} label="Click" />)
        expect(screen.getByRole('button')).toHaveAttribute('data-hierarchy', hierarchy)
      }
    )
  })

  describe('Prop: size', () => {
    it('aplica el tamaño md por defecto', () => {
      render(<Button label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'md')
    })

    it.each(['sm', 'md', 'lg'] as const)('aplica el tamaño %s', (size) => {
      render(<Button size={size} label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', size)
    })
  })

  describe('Prop: tone', () => {
    it('aplica tone inverse en primary', () => {
      render(<Button hierarchy="primary" tone="inverse" label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-tone', 'inverse')
    })

    it('aplica tone inverse en secondary', () => {
      render(<Button hierarchy="secondary" tone="inverse" label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-tone', 'inverse')
    })

    it('ignora tone inverse en tertiary', () => {
      render(<Button hierarchy="tertiary" tone="inverse" label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-tone', 'standard')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<Button onClick={handleClick} label="Click" />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(<Button disabled onClick={handleClick} label="Click" />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<Button disabled label="Click" />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no está deshabilitado por defecto', () => {
      render(<Button label="Click" />)
      expect(screen.getByRole('button')).not.toBeDisabled()
    })

    it('marca aria-busy cuando loading es true', () => {
      render(<Button loading onClick={vi.fn()} label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
      expect(screen.getByRole('button')).toHaveAttribute('data-loading', 'true')
    })

    it('quita data-loading cuando loading es false', () => {
      const { rerender } = render(<Button loading label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-loading', 'true')
      rerender(<Button label="Click" />)
      expect(screen.getByRole('button')).not.toHaveAttribute('data-loading')
    })
  })

  describe('Accesibilidad', () => {
    it('tiene role button implícito', () => {
      render(<Button label="Click" />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('acepta aria-label', () => {
      render(<Button aria-label="Cerrar modal" label="✕" />)
      expect(screen.getByRole('button', { name: 'Cerrar modal' })).toBeInTheDocument()
    })

    it('acepta aria-disabled', () => {
      render(<Button aria-disabled="true" label="Click" />)
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
    })

    it('los botones con solo contenido visual tienen aria-label', () => {
      render(<Button aria-label="Agregar favorito" label="★" />)
      expect(screen.getByRole('button', { name: 'Agregar favorito' })).toBeInTheDocument()
    })

    it('es alcanzable por teclado (Tab + Enter, no solo clic de mouse)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<Button onClick={handleClick} label="Click" />)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it.each(['default', 'disabled', 'loading'] as const)(
      'sin violaciones de accesibilidad en estado %s',
      async (state) => {
        const { container } = render(
          <Button
            disabled={state === 'disabled'}
            loading={state === 'loading'}
            label="Click"
          />
        )
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )

    it('sin violaciones de accesibilidad con aria-label', async () => {
      const { container } = render(
        <Button aria-label="Cerrar" leftIcon={<svg aria-hidden="true" />} />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
