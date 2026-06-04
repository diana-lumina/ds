import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ChatButton } from './chat-button'

describe('ChatButton', () => {

  it('renderiza sin errores', () => {
    render(<ChatButton />)
  })

  it('muestra el label cuando se proporciona', () => {
    render(<ChatButton label="Asistente Tec360" />)
    expect(screen.getByText('Asistente Tec360')).toBeInTheDocument()
  })

  it('no muestra label cuando no se proporciona', () => {
    render(<ChatButton />)
    expect(screen.queryByText('Asistente Tec360')).not.toBeInTheDocument()
  })

  it('usa el label como aria-label del botón', () => {
    render(<ChatButton label="Asistente Tec360" />)
    expect(
      screen.getByRole('button', { name: 'Asistente Tec360' })
    ).toBeInTheDocument()
  })

  it('usa "Abrir chat" como aria-label por default', () => {
    render(<ChatButton />)
    expect(
      screen.getByRole('button', { name: 'Abrir chat' })
    ).toBeInTheDocument()
  })

  it('llama a onClick al hacer click', async () => {
    const handleClick = vi.fn()
    render(<ChatButton onClick={handleClick} />)
    await userEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('muestra el badge cuando es mayor a 0', () => {
    render(<ChatButton badge={3} />)
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('no muestra el badge cuando es 0', () => {
    render(<ChatButton badge={0} />)
    expect(screen.queryByText('0')).not.toBeInTheDocument()
  })

  it('muestra 99+ cuando el badge supera 99', () => {
    render(<ChatButton badge={100} />)
    expect(screen.getByText('99+')).toBeInTheDocument()
  })

  it('no muestra badge cuando no se proporciona', () => {
    render(<ChatButton />)
    expect(screen.queryByText('99+')).not.toBeInTheDocument()
  })

  it('renderiza el ícono cuando se proporciona', () => {
    render(<ChatButton icon={<span data-testid="icono">★</span>} />)
    expect(screen.getByTestId('icono')).toBeInTheDocument()
  })

})