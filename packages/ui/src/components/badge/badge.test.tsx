import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from './badge'
import { StarIcon } from 'lucide-react'

describe('Badge', () => {

  it('renderiza sin errores', () => {
    render(<Badge label="Test" />)
  })

  it('muestra el label', () => {
    render(<Badge label="15% OFF" />)
    expect(screen.getByText('15% OFF')).toBeInTheDocument()
  })

  it('aplica la variante amber por default', () => {
    render(<Badge label="Test" />)
    const badge = screen.getByText('Test')
    expect(badge).toHaveClass('bg-[#FAEEDA]')
  })

  it('aplica la variante discount correctamente', () => {
    render(<Badge label="15% OFF" variant="discount" />)
    expect(screen.getByText('15% OFF')).toHaveClass('bg-[#14532D]')
  })

  it('aplica la variante amber correctamente', () => {
    render(<Badge label="Pendiente" variant="amber" />)
    expect(screen.getByText('Pendiente')).toHaveClass('bg-[#FAEEDA]')
  })

  it('aplica la variante green correctamente', () => {
    render(<Badge label="Completado" variant="green" />)
    expect(screen.getByText('Completado')).toHaveClass('bg-[#EAF3DE]')
  })

  it('aplica la variante red correctamente', () => {
    render(<Badge label="Error" variant="red" />)
    expect(screen.getByText('Error')).toHaveClass('bg-[#FCEBEB]')
  })

  it('aplica la variante neutral correctamente', () => {
    render(<Badge label="Neutral" variant="neutral" />)
    expect(screen.getByText('Neutral')).toHaveClass('bg-muted')
  })

  it('renderiza el ícono cuando se proporciona', () => {
    render(
      <Badge
        label="Con ícono"
        icon={<span data-testid="icono"><StarIcon size={12} /></span>}
      />
    )
    expect(screen.getByTestId('icono')).toBeInTheDocument()
  })

  it('no renderiza ícono cuando icon es null', () => {
    render(<Badge label="Sin ícono" icon={null} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('renderiza como elemento span', () => {
    render(<Badge label="Test" />)
    expect(screen.getByText('Test').tagName).toBe('SPAN')
  })

})