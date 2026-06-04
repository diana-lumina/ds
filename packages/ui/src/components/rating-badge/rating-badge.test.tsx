import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { RatingBadge } from './rating-badge'

describe('RatingBadge', () => {

  it('renderiza sin errores', () => {
    render(<RatingBadge rating={4.5} />)
  })

  it('muestra la calificación con un decimal', () => {
    render(<RatingBadge rating={4.5} />)
    expect(screen.getByText('4.5')).toBeInTheDocument()
  })

  it('muestra calificación entera con un decimal', () => {
    render(<RatingBadge rating={5} />)
    expect(screen.getByText('5.0')).toBeInTheDocument()
  })

  it('muestra calificación baja correctamente', () => {
    render(<RatingBadge rating={1.0} />)
    expect(screen.getByText('1.0')).toBeInTheDocument()
  })

  it('redondea a un decimal', () => {
    render(<RatingBadge rating={3.75} />)
    expect(screen.getByText('3.8')).toBeInTheDocument()
  })

  it('tiene el data-slot correcto', () => {
    render(<RatingBadge rating={4.5} />)
    expect(
      document.querySelector('[data-slot="rating-badge"]')
    ).toBeInTheDocument()
  })

  it('renderiza el ícono de estrella', () => {
    render(<RatingBadge rating={4.5} />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('acepta y aplica className adicional', () => {
    render(<RatingBadge rating={4.5} className="mi-clase" />)
    expect(
      document.querySelector('[data-slot="rating-badge"]')
    ).toHaveClass('mi-clase')
  })

  it('acepta props adicionales de div', () => {
    render(<RatingBadge rating={4.5} data-testid="rating" />)
    expect(screen.getByTestId('rating')).toBeInTheDocument()
  })

})