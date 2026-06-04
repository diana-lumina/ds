import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BrandButton } from './brand-button'

describe('BrandButton', () => {

  it('renderiza sin errores', () => {
    render(<BrandButton src="https://example.com/logo.png" alt="Logo" />)
  })

  it('muestra la imagen con el src correcto', () => {
    render(<BrandButton src="https://example.com/logo.png" alt="Logo institución" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://example.com/logo.png')
  })

  it('muestra la imagen con el alt correcto', () => {
    render(<BrandButton src="https://example.com/logo.png" alt="Tec de Monterrey" />)
    expect(screen.getByAltText('Tec de Monterrey')).toBeInTheDocument()
  })

  it('tiene el data-slot correcto', () => {
    render(<BrandButton src="https://example.com/logo.png" alt="Logo" />)
    expect(document.querySelector('[data-slot="brand-button"]')).toBeInTheDocument()
  })

  it('acepta y aplica className adicional', () => {
    render(
      <BrandButton
        src="https://example.com/logo.png"
        alt="Logo"
        className="mi-clase"
      />
    )
    expect(document.querySelector('[data-slot="brand-button"]')).toHaveClass('mi-clase')
  })

  it('acepta props adicionales de div', () => {
    render(
      <BrandButton
        src="https://example.com/logo.png"
        alt="Logo"
        data-testid="brand-btn"
      />
    )
    expect(screen.getByTestId('brand-btn')).toBeInTheDocument()
  })

})