import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { CategoryCard } from './category-card'

const defaultProps = {
  title: 'Inteligencia artificial',
  src: 'https://example.com/video.mp4',
  poster: 'https://example.com/poster.jpg',
}

describe('CategoryCard', () => {

  it('renderiza sin errores', () => {
    render(<CategoryCard {...defaultProps} />)
  })

  it('muestra el título', () => {
    render(<CategoryCard {...defaultProps} />)
    expect(screen.getByText('Inteligencia artificial')).toBeInTheDocument()
  })

  it('muestra la descripción cuando se proporciona', () => {
    render(
      <CategoryCard
        {...defaultProps}
        description="Domina la tecnología que redefine el futuro"
      />
    )
    expect(
      screen.getByText('Domina la tecnología que redefine el futuro')
    ).toBeInTheDocument()
  })

  it('no muestra descripción cuando no se proporciona', () => {
    render(<CategoryCard {...defaultProps} />)
    expect(
      screen.queryByText('Domina la tecnología que redefine el futuro')
    ).not.toBeInTheDocument()
  })

  it('muestra el CTA con el label por default', () => {
    render(<CategoryCard {...defaultProps} />)
    expect(screen.getByRole('button', { name: /explorar ofertas/i })).toBeInTheDocument()
  })

  it('muestra el CTA con label personalizado', () => {
    render(<CategoryCard {...defaultProps} ctaLabel="Ver cursos" />)
    expect(screen.getByRole('button', { name: /ver cursos/i })).toBeInTheDocument()
  })

  it('llama a onCtaClick al hacer click en el CTA', async () => {
    const handleClick = vi.fn()
    render(<CategoryCard {...defaultProps} onCtaClick={handleClick} />)
    await userEvent.click(screen.getByRole('button', { name: /explorar ofertas/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renderiza el video con el src correcto', () => {
    render(<CategoryCard {...defaultProps} />)
    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
    expect(video?.src).toContain('video.mp4')
  })

  it('renderiza el video con el poster correcto', () => {
    render(<CategoryCard {...defaultProps} />)
    const video = document.querySelector('video')
    expect(video?.poster).toContain('poster.jpg')
  })

  it('el video tiene muted, loop y playsInline', () => {
    render(<CategoryCard {...defaultProps} />)
    const video = document.querySelector('video')
    expect(video?.muted).toBe(true)
    expect(video?.loop).toBe(true)
    expect(video?.hasAttribute('playsinline')).toBe(true)
  })

})