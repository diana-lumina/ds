import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { FavoriteButton } from './favorite-button'

describe('FavoriteButton', () => {

  it('renderiza sin errores', () => {
    render(<FavoriteButton isAuthenticated={false} />)
  })

  it('tiene aria-label "Agregar a favoritos" cuando isFavorite es false', () => {
    render(<FavoriteButton isAuthenticated={true} isFavorite={false} />)
    expect(
      screen.getByRole('button', { name: 'Agregar a favoritos' })
    ).toBeInTheDocument()
  })

  it('tiene aria-label "Quitar de favoritos" cuando isFavorite es true', () => {
    render(<FavoriteButton isAuthenticated={true} isFavorite={true} />)
    expect(
      screen.getByRole('button', { name: 'Quitar de favoritos' })
    ).toBeInTheDocument()
  })

  it('llama a onFavoriteToggle cuando está autenticado', async () => {
    const handleToggle = vi.fn()
    render(
      <FavoriteButton
        isAuthenticated={true}
        isFavorite={false}
        onFavoriteToggle={handleToggle}
      />
    )
    await userEvent.click(screen.getByRole('button'))
    expect(handleToggle).toHaveBeenCalledTimes(1)
  })

  it('llama a onAuthRequired cuando no está autenticado', async () => {
    const handleAuthRequired = vi.fn()
    render(
      <FavoriteButton
        isAuthenticated={false}
        onAuthRequired={handleAuthRequired}
      />
    )
    await userEvent.click(screen.getByRole('button'))
    expect(handleAuthRequired).toHaveBeenCalledTimes(1)
  })

  it('no llama a onFavoriteToggle cuando no está autenticado', async () => {
    const handleToggle = vi.fn()
    render(
      <FavoriteButton
        isAuthenticated={false}
        onFavoriteToggle={handleToggle}
      />
    )
    await userEvent.click(screen.getByRole('button'))
    expect(handleToggle).not.toHaveBeenCalled()
  })

  it('no llama a onAuthRequired cuando está autenticado', async () => {
    const handleAuthRequired = vi.fn()
    render(
      <FavoriteButton
        isAuthenticated={true}
        onAuthRequired={handleAuthRequired}
      />
    )
    await userEvent.click(screen.getByRole('button'))
    expect(handleAuthRequired).not.toHaveBeenCalled()
  })

  it('está deshabilitado cuando disabled es true', () => {
    render(<FavoriteButton isAuthenticated={true} disabled={true} />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('no llama a ningún callback cuando está disabled', async () => {
    const handleToggle = vi.fn()
    const handleAuthRequired = vi.fn()
    render(
      <FavoriteButton
        isAuthenticated={true}
        disabled={true}
        onFavoriteToggle={handleToggle}
        onAuthRequired={handleAuthRequired}
      />
    )
    await userEvent.click(screen.getByRole('button'))
    expect(handleToggle).not.toHaveBeenCalled()
    expect(handleAuthRequired).not.toHaveBeenCalled()
  })

})