import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { TextArea } from './text-area'

describe('TextArea', () => {

  it('renderiza sin errores', () => {
    render(<TextArea />)
  })

  it('muestra el placeholder', () => {
    render(<TextArea placeholder="Escribe aquí" />)
    expect(screen.getByPlaceholderText('Escribe aquí')).toBeInTheDocument()
  })

  it('muestra el label cuando se proporciona', () => {
    render(<TextArea id="campo" label="Reseña" />)
    expect(screen.getByText('Reseña')).toBeInTheDocument()
  })

  it('conecta el label con el textarea via htmlFor', () => {
    render(<TextArea id="campo" label="Reseña" />)
    expect(screen.getByText('Reseña')).toHaveAttribute('for', 'campo')
  })

  it('muestra el indicador de requerido cuando required es true', () => {
    render(<TextArea label="Campo" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('no muestra el indicador de requerido cuando required es false', () => {
    render(<TextArea label="Campo" />)
    expect(screen.queryByText('*')).not.toBeInTheDocument()
  })

  it('permite escribir en el textarea', async () => {
    render(<TextArea placeholder="Escribe aquí" />)
    const textarea = screen.getByPlaceholderText('Escribe aquí')
    await userEvent.type(textarea, 'Hola mundo')
    expect(textarea).toHaveValue('Hola mundo')
  })

  it('llama a onChange al escribir', async () => {
    const handleChange = vi.fn()
    render(<TextArea placeholder="Escribe" onChange={handleChange} />)
    await userEvent.type(screen.getByPlaceholderText('Escribe'), 'a')
    expect(handleChange).toHaveBeenCalled()
  })

  it('está deshabilitado cuando disabled es true', () => {
    render(<TextArea placeholder="Disabled" disabled />)
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled()
  })

  it('no permite escribir cuando está deshabilitado', async () => {
    render(<TextArea placeholder="Disabled" disabled />)
    const textarea = screen.getByPlaceholderText('Disabled')
    await userEvent.type(textarea, 'texto')
    expect(textarea).toHaveValue('')
  })

  it('muestra el ícono de error cuando error es true', () => {
    render(<TextArea error />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('muestra el mensaje de error cuando error es true', () => {
    render(<TextArea error errorMessage="Este campo es requerido" />)
    expect(screen.getByText('Este campo es requerido')).toBeInTheDocument()
  })

  it('no muestra mensaje de error cuando error es false', () => {
    render(<TextArea error={false} errorMessage="Este campo es requerido" />)
    expect(
      screen.queryByText('Este campo es requerido')
    ).not.toBeInTheDocument()
  })

  it('respeta el atributo rows', () => {
    render(<TextArea placeholder="Rows" rows={6} />)
    expect(screen.getByPlaceholderText('Rows')).toHaveAttribute('rows', '6')
  })

  it('respeta el maxLength', () => {
    render(<TextArea placeholder="Max" maxLength={140} />)
    expect(screen.getByPlaceholderText('Max')).toHaveAttribute('maxlength', '140')
  })

})