import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { TextInput } from './text-input'
import { TagIcon } from 'lucide-react'

describe('TextInput', () => {

  it('renderiza sin errores', () => {
    render(<TextInput />)
  })

  it('muestra el placeholder', () => {
    render(<TextInput placeholder="Ingresa tu código" />)
    expect(screen.getByPlaceholderText('Ingresa tu código')).toBeInTheDocument()
  })

  it('muestra el label cuando se proporciona', () => {
    render(<TextInput id="campo" label="Correo electrónico" />)
    expect(screen.getByText('Correo electrónico')).toBeInTheDocument()
  })

  it('conecta el label con el input via htmlFor', () => {
    render(<TextInput id="campo" label="Correo electrónico" />)
    const label = screen.getByText('Correo electrónico')
    expect(label).toHaveAttribute('for', 'campo')
  })

  it('muestra el indicador de requerido cuando required es true', () => {
    render(<TextInput label="Campo" required />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('no muestra el indicador de requerido cuando required es false', () => {
    render(<TextInput label="Campo" />)
    expect(screen.queryByText('*')).not.toBeInTheDocument()
  })

  it('permite escribir en el input', async () => {
    render(<TextInput placeholder="Escribe aquí" />)
    const input = screen.getByPlaceholderText('Escribe aquí')
    await userEvent.type(input, 'Hola mundo')
    expect(input).toHaveValue('Hola mundo')
  })

  it('llama a onChange al escribir', async () => {
    const handleChange = vi.fn()
    render(<TextInput placeholder="Escribe" onChange={handleChange} />)
    await userEvent.type(screen.getByPlaceholderText('Escribe'), 'a')
    expect(handleChange).toHaveBeenCalled()
  })

  it('está deshabilitado cuando disabled es true', () => {
    render(<TextInput placeholder="Disabled" disabled />)
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled()
  })

  it('no permite escribir cuando está deshabilitado', async () => {
    render(<TextInput placeholder="Disabled" disabled />)
    const input = screen.getByPlaceholderText('Disabled')
    await userEvent.type(input, 'texto')
    expect(input).toHaveValue('')
  })

  it('muestra el mensaje de error cuando error es true', () => {
    render(
      <TextInput
        error
        errorMessage="Este campo es requerido"
      />
    )
    expect(screen.getByText('Este campo es requerido')).toBeInTheDocument()
  })

  it('no muestra mensaje de error cuando error es false', () => {
    render(
      <TextInput
        error={false}
        errorMessage="Este campo es requerido"
      />
    )
    expect(
      screen.queryByText('Este campo es requerido')
    ).not.toBeInTheDocument()
  })

  it('no muestra mensaje de error cuando no se proporciona errorMessage', () => {
    render(<TextInput error />)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('renderiza el ícono cuando se proporciona', () => {
    render(
      <TextInput
        placeholder="Con ícono"
        icon={<span data-testid="icono"><TagIcon size={16} /></span>}
      />
    )
    expect(screen.getByTestId('icono')).toBeInTheDocument()
  })

})