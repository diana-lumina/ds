import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { CardCourse } from './card-course'

const defaultProps = {
  title: 'Introducción al Machine Learning',
  category: 'Inteligencia artificial',
  price: 22000,
  rating: 4.5,
  image: 'https://picsum.photos/seed/test/325/180',
}

describe('CardCourse', () => {

  describe('General', () => {
    it('renderiza sin errores', () => {
      render(<CardCourse {...defaultProps} type="evaluative" />)
    })

    it('muestra el título', () => {
      render(<CardCourse {...defaultProps} type="evaluative" />)
      expect(screen.getByText('Introducción al Machine Learning')).toBeInTheDocument()
    })

    it('muestra la categoría', () => {
      render(<CardCourse {...defaultProps} type="evaluative" />)
      expect(screen.getByText('Inteligencia artificial')).toBeInTheDocument()
    })

    it('muestra el precio formateado', () => {
      render(<CardCourse {...defaultProps} type="evaluative" />)
      expect(screen.getByText(/22,000/)).toBeInTheDocument()
    })

    it('muestra la imagen con el alt correcto', () => {
      render(<CardCourse {...defaultProps} type="evaluative" />)
      expect(screen.getByAltText('Introducción al Machine Learning')).toBeInTheDocument()
    })
  })

  describe('Variante evaluativa', () => {
    it('muestra el RatingBadge', () => {
      render(<CardCourse {...defaultProps} type="evaluative" />)
      expect(screen.getByText('4.5')).toBeInTheDocument()
    })

    it('no muestra el FavoriteButton', () => {
      render(<CardCourse {...defaultProps} type="evaluative" />)
      expect(
        screen.queryByRole('button', { name: /favorito/i })
      ).not.toBeInTheDocument()
    })

    it('muestra los metadatos cuando se proporcionan', () => {
      render(
        <CardCourse
          {...defaultProps}
          type="evaluative"
          metadata={[
            { label: '100 horas' },
            { label: 'Presencial' },
          ]}
        />
      )
      expect(screen.getByText('100 horas')).toBeInTheDocument()
      expect(screen.getByText('Presencial')).toBeInTheDocument()
    })
  })

  describe('Variante transaccional', () => {
    const transactionalProps = {
      ...defaultProps,
      type: 'transactional' as const,
      cta: 'Agregar al carrito',
    }

    it('muestra el botón de favorito', () => {
      render(<CardCourse {...transactionalProps} />)
      expect(
        screen.getByRole('button', { name: /favorito/i })
      ).toBeInTheDocument()
    })

    it('muestra el badge de descuento cuando se proporciona', () => {
      render(<CardCourse {...transactionalProps} badge="15% OFF" />)
      expect(screen.getByText('15% OFF')).toBeInTheDocument()
    })

    it('no muestra el badge cuando no se proporciona', () => {
      render(<CardCourse {...transactionalProps} />)
      expect(screen.queryByText('15% OFF')).not.toBeInTheDocument()
    })

    it('muestra la descripción cuando se proporciona', () => {
      render(
        <CardCourse
          {...transactionalProps}
          description="Aprende los fundamentos del ML."
        />
      )
      expect(screen.getByText('Aprende los fundamentos del ML.')).toBeInTheDocument()
    })

    it('muestra el botón CTA', () => {
      render(<CardCourse {...transactionalProps} />)
      expect(
        screen.getByRole('button', { name: /agregar al carrito/i })
      ).toBeInTheDocument()
    })

    it('llama a onAddToCart al hacer click en el CTA', async () => {
      const handleAddToCart = vi.fn()
      render(
        <CardCourse
          {...transactionalProps}
          onAddToCart={handleAddToCart}
        />
      )
      await userEvent.click(
        screen.getByRole('button', { name: /agregar al carrito/i })
      )
      expect(handleAddToCart).toHaveBeenCalledTimes(1)
    })

    it('llama a onFavoriteToggle cuando está autenticado', async () => {
      const handleFavoriteToggle = vi.fn()
      render(
        <CardCourse
          {...transactionalProps}
          isAuthenticated={true}
          onFavoriteToggle={handleFavoriteToggle}
        />
      )
      await userEvent.click(
        screen.getByRole('button', { name: /favorito/i })
      )
      expect(handleFavoriteToggle).toHaveBeenCalledTimes(1)
    })

    it('llama a onAuthRequired cuando no está autenticado', async () => {
      const handleAuthRequired = vi.fn()
      render(
        <CardCourse
          {...transactionalProps}
          isAuthenticated={false}
          onAuthRequired={handleAuthRequired}
        />
      )
      await userEvent.click(
        screen.getByRole('button', { name: /favorito/i })
      )
      expect(handleAuthRequired).toHaveBeenCalledTimes(1)
    })
  })
})