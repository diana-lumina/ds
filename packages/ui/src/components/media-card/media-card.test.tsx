import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { MediaCard } from './media-card'

describe('MediaCard', () => {

  describe('Empty state', () => {
    it('muestra el mensaje de vacío por default', () => {
      render(<MediaCard type="testimonial-s" isEmpty />)
      expect(
        screen.getByText('No se ha encontrado ningún testimonio')
      ).toBeInTheDocument()
    })

    it('muestra un mensaje de vacío personalizado', () => {
      render(
        <MediaCard
          type="testimonial-s"
          isEmpty
          emptyMessage="Aún no hay testimonios"
        />
      )
      expect(screen.getByText('Aún no hay testimonios')).toBeInTheDocument()
    })
  })

  describe('Testimonial', () => {
    it('renderiza sin errores', () => {
      render(
        <MediaCard
          type="testimonial"
          src="https://example.com/img.jpg"
          name="Diana T."
        />
      )
    })

    it('muestra el nombre', () => {
      render(
        <MediaCard
          type="testimonial"
          src="https://example.com/img.jpg"
          name="Diana T."
        />
      )
      expect(screen.getByText('Diana T.')).toBeInTheDocument()
    })

    it('muestra la descripción cuando se proporciona', () => {
      render(
        <MediaCard
          type="testimonial"
          src="https://example.com/img.jpg"
          name="Diana T."
          description="Médico practicante"
        />
      )
      expect(screen.getByText('Médico practicante')).toBeInTheDocument()
    })

    it('muestra el badge cuando se proporciona', () => {
      render(
        <MediaCard
          type="testimonial"
          src="https://example.com/img.jpg"
          name="Diana T."
          badge={{ label: 'Ver perfil' }}
        />
      )
      expect(screen.getByText('Ver perfil')).toBeInTheDocument()
    })

    it('llama a onClick al hacer click', async () => {
      const handleClick = vi.fn()
      render(
        <MediaCard
          type="testimonial"
          src="https://example.com/img.jpg"
          name="Diana T."
          onClick={handleClick}
        />
      )
      await userEvent.click(screen.getByText('Diana T.'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Testimonial L', () => {
    it('renderiza sin errores', () => {
      render(
        <MediaCard
          type="testimonial-l"
          src="https://example.com/video.mp4"
          name="Francisco L."
        />
      )
    })

    it('muestra el nombre', () => {
      render(
        <MediaCard
          type="testimonial-l"
          src="https://example.com/video.mp4"
          name="Francisco L."
        />
      )
      expect(screen.getByText('Francisco L.')).toBeInTheDocument()
    })

    it('renderiza el elemento video', () => {
      render(
        <MediaCard
          type="testimonial-l"
          src="https://example.com/video.mp4"
          name="Francisco L."
        />
      )
      expect(document.querySelector('video')).toBeInTheDocument()
    })

    it('el video tiene muted, loop y playsInline', () => {
      render(
        <MediaCard
          type="testimonial-l"
          src="https://example.com/video.mp4"
          name="Francisco L."
        />
      )
      const video = document.querySelector('video')
      expect(video?.muted).toBe(true)
      expect(video?.loop).toBe(true)
      expect(video?.hasAttribute('playsinline')).toBe(true)
    })
  })

  describe('Testimonial S', () => {
    it('renderiza sin errores', () => {
      render(
        <MediaCard
          type="testimonial-s"
          src="https://example.com/img.jpg"
          name="Diana T."
        />
      )
    })

    it('muestra el nombre', () => {
      render(
        <MediaCard
          type="testimonial-s"
          src="https://example.com/img.jpg"
          name="Diana T."
        />
      )
      expect(screen.getByText('Diana T.')).toBeInTheDocument()
    })

    it('muestra la descripción cuando se proporciona', () => {
      render(
        <MediaCard
          type="testimonial-s"
          src="https://example.com/img.jpg"
          name="Diana T."
          description="Lorem ipsum"
        />
      )
      expect(screen.getByText('Lorem ipsum')).toBeInTheDocument()
    })

    it('muestra el badge cuando se proporciona', () => {
      render(
        <MediaCard
          type="testimonial-s"
          src="https://example.com/img.jpg"
          name="Diana T."
          badge={{ label: 'Ver video' }}
        />
      )
      expect(screen.getByText('Ver video')).toBeInTheDocument()
    })

    it('muestra la imagen con alt correcto', () => {
      render(
        <MediaCard
          type="testimonial-s"
          src="https://example.com/img.jpg"
          name="Diana T."
          imageAlt="Testimonio de Diana"
        />
      )
      expect(
        screen.getByAltText('Testimonio de Diana')
      ).toBeInTheDocument()
    })

    it('usa el name como alt cuando no se proporciona imageAlt', () => {
      render(
        <MediaCard
          type="testimonial-s"
          src="https://example.com/img.jpg"
          name="Diana T."
        />
      )
      expect(screen.getByAltText('Diana T.')).toBeInTheDocument()
    })
  })
})