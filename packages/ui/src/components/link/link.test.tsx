import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { Link } from './link'

describe('Link', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<Link href="/destino">Ir a destino</Link>)
    })

    it('renderiza como <a>', () => {
      render(<Link href="/destino">Ir a destino</Link>)
      expect(screen.getByRole('link').tagName).toBe('A')
    })

    it('tiene el data-slot correcto', () => {
      render(<Link href="/destino">Ir a destino</Link>)
      expect(screen.getByRole('link')).toHaveAttribute('data-slot', 'link')
    })

    it('aplica el href correctamente', () => {
      render(<Link href="/destino">Ir a destino</Link>)
      expect(screen.getByRole('link')).toHaveAttribute('href', '/destino')
    })

    it('renderiza el ícono en la posición indicada', () => {
      render(
        <Link href="/destino" icon={<svg data-testid="icono" />} iconPosition="left">
          Ir a destino
        </Link>
      )
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })
  })

  describe('Prop: tone', () => {
    it('aplica tone standard por defecto', () => {
      render(<Link href="/destino">Ir</Link>)
      expect(screen.getByRole('link')).toHaveAttribute('data-tone', 'standard')
    })

    it('aplica tone inverse', () => {
      render(
        <Link href="/destino" tone="inverse">
          Ir
        </Link>
      )
      expect(screen.getByRole('link')).toHaveAttribute('data-tone', 'inverse')
    })
  })

  describe('Prop: external', () => {
    it('sin external, no tiene target ni rel', () => {
      render(<Link href="/destino">Ir</Link>)
      const link = screen.getByRole('link')
      expect(link).not.toHaveAttribute('target')
      expect(link).not.toHaveAttribute('rel')
    })

    it('con external, abre en pestaña nueva de forma segura', () => {
      render(
        <Link href="https://externo.com" external>
          Ir
        </Link>
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('Comportamiento', () => {
    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(
        <Link href="/destino" onClick={handleClick}>
          Ir
        </Link>
      )
      await userEvent.click(screen.getByRole('link'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(
        <Link href="/destino" onClick={handleClick}>
          Ir a destino
        </Link>
      )

      await user.tab()
      expect(screen.getByRole('link')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(<Link href="/destino">Ir a destino</Link>)
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
