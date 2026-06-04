import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import { ModalInfo } from './modal-info'

const defaultProps = {
  open: true,
  title: 'Aprendizaje',
  body: 'Lorem ipsum dolor sit amet consectetur.',
}

describe('ModalInfo', () => {

  it('renderiza sin errores', () => {
    render(<ModalInfo {...defaultProps} />)
  })

  it('muestra el título', () => {
    render(<ModalInfo {...defaultProps} />)
    expect(screen.getByText('Aprendizaje')).toBeInTheDocument()
  })

  it('no se muestra cuando open es false', () => {
    render(<ModalInfo {...defaultProps} open={false} />)
    expect(screen.queryByText('Aprendizaje')).not.toBeInTheDocument()
  })

  it('muestra el subheader cuando se proporciona', () => {
    render(<ModalInfo {...defaultProps} subheader="Subheader opcional" />)
    expect(screen.getByText('Subheader opcional')).toBeInTheDocument()
  })

  describe('Body', () => {
    it('muestra el body como string', () => {
      render(<ModalInfo {...defaultProps} body="Texto del body" />)
      expect(screen.getByText('Texto del body')).toBeInTheDocument()
    })

    it('muestra el body como array de párrafos', () => {
      render(
        <ModalInfo
          {...defaultProps}
          body={['Párrafo uno', 'Párrafo dos']}
        />
      )
      expect(screen.getByText('Párrafo uno')).toBeInTheDocument()
      expect(screen.getByText('Párrafo dos')).toBeInTheDocument()
    })
  })

  describe('Imagen', () => {
    it('muestra la imagen cuando se proporciona', () => {
      render(
        <ModalInfo
          {...defaultProps}
          image="https://example.com/img.jpg"
          imageAlt="Imagen del campus"
        />
      )
      expect(screen.getByAltText('Imagen del campus')).toBeInTheDocument()
    })

    it('usa el título como alt cuando no se proporciona imageAlt', () => {
      render(
        <ModalInfo
          {...defaultProps}
          image="https://example.com/img.jpg"
        />
      )
      expect(screen.getByAltText('Aprendizaje')).toBeInTheDocument()
    })

    it('no muestra imagen cuando no se proporciona', () => {
      render(<ModalInfo {...defaultProps} />)
      expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })
  })

  describe('Nota', () => {
    it('muestra la nota cuando se proporciona', () => {
      render(<ModalInfo {...defaultProps} note="Nota importante" />)
      expect(screen.getByText('Nota importante')).toBeInTheDocument()
    })

    it('no muestra nota cuando no se proporciona', () => {
      render(<ModalInfo {...defaultProps} />)
      expect(screen.queryByText('Nota importante')).not.toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    it('muestra el footer cuando se proporciona', () => {
      render(
        <ModalInfo
          {...defaultProps}
          footer={{
            title: 'Title Home',
            description: 'Descripción del footer',
          }}
        />
      )
      expect(screen.getByText('Title Home')).toBeInTheDocument()
      expect(screen.getByText('Descripción del footer')).toBeInTheDocument()
    })

    it('no muestra footer cuando no se proporciona', () => {
      render(<ModalInfo {...defaultProps} />)
      expect(screen.queryByText('Title Home')).not.toBeInTheDocument()
    })
  })

  describe('Botones de acción', () => {
    it('no muestra botones de acción', () => {
      render(<ModalInfo {...defaultProps} />)
      expect(screen.queryByRole('button', { name: /cancelar/i })).not.toBeInTheDocument()
      expect(screen.queryByRole('button', { name: /aceptar/i })).not.toBeInTheDocument()
    })
  })
})