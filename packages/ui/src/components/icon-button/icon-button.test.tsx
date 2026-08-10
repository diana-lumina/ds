import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { IconButton } from './icon-button'

function DummyIcon() {
  return (
    <svg viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="4" />
    </svg>
  )
}

describe('IconButton', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" />)
    })

    it('renderiza como button por defecto', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" />)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene el data-slot correcto', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'icon-button')
    })

    it('renderiza el ícono', () => {
      render(<IconButton icon={<DummyIcon data-testid="icono" />} aria-label="Favorito" />)
      // El wrapper del ícono es aria-hidden, pero el SVG debe existir en el DOM
      expect(document.querySelector('svg')).toBeInTheDocument()
    })

    it('renderiza como elemento hijo con asChild', () => {
      render(
        <IconButton asChild aria-label="Ir">
          <a href="/destino">
            <DummyIcon />
          </a>
        </IconButton>
      )
      const link = screen.getByRole('link', { name: 'Ir' })
      expect(link.tagName).toBe('A')
    })
  })

  describe('Prop: size', () => {
    it('aplica el tamaño md por defecto', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', 'md')
    })

    it.each(['sm', 'md', 'lg'] as const)('aplica el tamaño %s', (size) => {
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" size={size} />)
      expect(screen.getByRole('button')).toHaveAttribute('data-size', size)
    })
  })

  describe('Prop: variant', () => {
    it('aplica variant default por defecto', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'default')
    })

    it('aplica variant inverse', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" variant="inverse" />)
      expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'inverse')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" onClick={handleClick} />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" onClick={handleClick} disabled />)
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })

    it('está deshabilitado cuando disabled es true', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Favorito" disabled />)
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })

  describe('Accesibilidad', () => {
    it('usa aria-label como nombre accesible', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Cerrar" />)
      expect(screen.getByRole('button', { name: 'Cerrar' })).toBeInTheDocument()
    })

    it('el wrapper del ícono está aria-hidden (el nombre accesible viene solo de aria-label)', () => {
      render(<IconButton icon={<DummyIcon />} aria-label="Cerrar" />)
      const hiddenWrapper = screen.getByRole('button').querySelector('[aria-hidden="true"]')
      expect(hiddenWrapper).toBeInTheDocument()
    })

    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<IconButton icon={<DummyIcon />} aria-label="Cerrar" onClick={handleClick} />)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it.each(['default', 'inverse'] as const)(
      'sin violaciones de accesibilidad — variant %s',
      async (variant) => {
        const { container } = render(<IconButton icon={<DummyIcon />} aria-label="Cerrar" variant={variant} />)
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(<IconButton icon={<DummyIcon />} aria-label="Cerrar" disabled />)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})