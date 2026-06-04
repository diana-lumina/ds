import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './button'

describe('Button', () => {

  it('renderiza sin errores', () => {
    render(<Button>Click</Button>)
  })

  it('muestra el texto correctamente', () => {
    render(<Button>Agregar al carrito</Button>)
    expect(screen.getByText('Agregar al carrito')).toBeInTheDocument()
  })

  it('llama a onClick al hacer click', async () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('no llama a onClick cuando está disabled', async () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>Click</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('está deshabilitado cuando disabled es true', () => {
    render(<Button disabled>Click</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('aplica la variante default por defecto', () => {
    render(<Button>Click</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'default')
  })

  it('aplica la variante correcta', () => {
    render(<Button variant="destructive">Eliminar</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-variant', 'destructive')
  })

  it('aplica el tamaño correcto', () => {
    render(<Button size="lg">Click</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-size', 'lg')
  })

  it('aplica el tamaño default por defecto', () => {
    render(<Button>Click</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-size', 'default')
  })

  it('renderiza como elemento hijo con asChild', () => {
    render(
      <Button asChild>
        <a href="/ruta">Link</a>
      </Button>
    )
    expect(screen.getByRole('link', { name: 'Link' })).toBeInTheDocument()
  })

  it('acepta y aplica className adicional', () => {
    render(<Button className="mi-clase">Click</Button>)
    expect(screen.getByRole('button')).toHaveClass('mi-clase')
  })

  it('renderiza íconos como children', () => {
    render(
      <Button>
        <span data-testid="icono">★</span>
        Favorito
      </Button>
    )
    expect(screen.getByTestId('icono')).toBeInTheDocument()
    expect(screen.getByText('Favorito')).toBeInTheDocument()
  })

})