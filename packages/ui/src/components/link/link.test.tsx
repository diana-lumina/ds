import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Link } from './link'
import { ArrowRightIcon } from 'lucide-react'

describe('Link', () => {

  describe('General', () => {
    it('renderiza sin errores', () => {
      render(<Link href="#">Texto</Link>)
    })

    it('muestra el texto', () => {
      render(<Link href="#">Ir a cursos</Link>)
      expect(screen.getByText('Ir a cursos')).toBeInTheDocument()
    })

    it('renderiza como elemento a', () => {
      render(<Link href="/cursos">Cursos</Link>)
      expect(screen.getByRole('link')).toBeInTheDocument()
    })

    it('aplica el href correctamente', () => {
      render(<Link href="/cursos">Cursos</Link>)
      expect(screen.getByRole('link')).toHaveAttribute('href', '/cursos')
    })

    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(<Link href="#" onClick={handleClick}>Click</Link>)
      await userEvent.click(screen.getByRole('link'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Disabled', () => {
    it('tiene aria-disabled cuando disabled es true', () => {
      render(<Link href="#" disabled>Link</Link>)
      expect(screen.getByRole('link')).toHaveAttribute('aria-disabled', 'true')
    })

    it('no tiene href cuando disabled es true', () => {
      render(<Link href="/cursos" disabled>Link</Link>)
      expect(screen.getByRole('link')).not.toHaveAttribute('href')
    })

    it('no llama a onClick cuando disabled es true', async () => {
      const handleClick = vi.fn()
      render(<Link href="#" disabled onClick={handleClick}>Link</Link>)
      await userEvent.click(screen.getByRole('link'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Externo', () => {
    it('abre en nueva pestaña cuando external es true', () => {
      render(<Link href="https://tec.mx" external>Sitio</Link>)
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
    })

    it('tiene rel noopener noreferrer cuando external es true', () => {
      render(<Link href="https://tec.mx" external>Sitio</Link>)
      expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('no tiene target cuando external es false', () => {
      render(<Link href="/cursos">Cursos</Link>)
      expect(screen.getByRole('link')).not.toHaveAttribute('target')
    })
  })

  describe('Ícono', () => {
    it('renderiza el ícono cuando se proporciona', () => {
      render(
        <Link
          href="#"
          icon={<span data-testid="icono"><ArrowRightIcon size={14} /></span>}
        >
          Ver más
        </Link>
      )
      expect(screen.getByTestId('icono')).toBeInTheDocument()
    })

    it('posiciona el ícono a la derecha por default', () => {
      render(
        <Link
          href="#"
          icon={<span data-testid="icono">→</span>}
          iconPosition="right"
        >
          Ver más
        </Link>
      )
      const link = screen.getByRole('link')
      const icono = screen.getByTestId('icono')
      const texto = screen.getByText('Ver más')
      expect(link.lastChild).toContain(icono)
      expect(link.firstChild).not.toContain(icono)
    })

    it('posiciona el ícono a la izquierda cuando iconPosition es left', () => {
      render(
        <Link
          href="#"
          icon={<span data-testid="icono">←</span>}
          iconPosition="left"
        >
          Volver
        </Link>
      )
      const link = screen.getByRole('link')
      const icono = screen.getByTestId('icono')
      expect(link.firstChild).toContain(icono)
    })
  })

  describe('Variantes', () => {
    it('aplica clases de variante text por default', () => {
      render(<Link href="#">Link</Link>)
      expect(screen.getByRole('link')).toHaveClass('text-primary')
    })

    it('aplica clases de variante button', () => {
      render(<Link href="#" variant="button">Link</Link>)
      expect(screen.getByRole('link')).toHaveClass('text-foreground')
    })
  })

})