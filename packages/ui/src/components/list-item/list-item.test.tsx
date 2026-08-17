import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { ListItem } from './list-item'

const trailingIcon = <svg data-testid="icono" />

describe('ListItem', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} />)
    })

    it('renderiza como button', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} />)
      expect(screen.getByRole('button').tagName).toBe('BUTTON')
    })

    it('tiene type="button"', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} />)
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
    })

    it('tiene el data-slot correcto', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} />)
      expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'list-item')
    })

    it('muestra el texto primario', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} />)
      expect(screen.getByRole('button', { name: 'Ana Beltrán' })).toBeInTheDocument()
    })

    it('renderiza Avatar', () => {
      render(<ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={trailingIcon} />)
      expect(screen.getByRole('button').querySelector('[data-slot="avatar"]')).toBeInTheDocument()
    })

    it('renderiza el ícono trailing', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} />)
      expect(screen.getByTestId('icono')).toBeInTheDocument()
      expect(screen.getByRole('button').querySelector('[data-slot="list-item-icon"]')).toBeInTheDocument()
    })

    it('el ícono trailing es decorativo (aria-hidden)', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} />)
      expect(screen.getByTestId('icono').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })
  })

  describe('Textos', () => {
    it('una línea por defecto (solo primary)', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} />)
      expect(screen.getByRole('button')).toHaveAttribute('data-lines', '1')
    })

    it('dos líneas con secondaryText', () => {
      render(
        <ListItem
          primaryText="Ana Beltrán"
          secondaryText="Diseño de interfaces"
          icon={trailingIcon}
        />
      )
      expect(screen.getByRole('button')).toHaveAttribute('data-lines', '2')
      expect(screen.getByText('Diseño de interfaces')).toBeInTheDocument()
    })

    it('tres líneas con tertiaryText', () => {
      render(
        <ListItem
          primaryText="Ana Beltrán"
          secondaryText="Diseño de interfaces"
          tertiaryText="TEC 360"
          icon={trailingIcon}
        />
      )
      expect(screen.getByRole('button')).toHaveAttribute('data-lines', '3')
      expect(screen.getByText('TEC 360')).toBeInTheDocument()
    })
  })

  describe('Comportamiento: disabled', () => {
    it('está deshabilitado cuando disabled es true', () => {
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} disabled />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('no llama a onClick cuando está disabled', async () => {
      const handleClick = vi.fn()
      render(
        <ListItem primaryText="Ana Beltrán" icon={trailingIcon} disabled onClick={handleClick} />
      )
      await userEvent.click(screen.getByRole('button'))
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Accesibilidad', () => {
    it('es alcanzable por teclado (Tab + Enter)', async () => {
      const handleClick = vi.fn()
      const user = userEvent.setup()
      render(<ListItem primaryText="Ana Beltrán" icon={trailingIcon} onClick={handleClick} />)

      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()

      await user.keyboard('{Enter}')
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('sin violaciones de accesibilidad — una línea', async () => {
      const { container } = render(
        <ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={trailingIcon} />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — tres líneas', async () => {
      const { container } = render(
        <ListItem
          primaryText="Ana Beltrán"
          secondaryText="Diseño de interfaces"
          tertiaryText="TEC 360"
          avatarInitials="AB"
          icon={trailingIcon}
        />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — disabled', async () => {
      const { container } = render(
        <ListItem primaryText="Ana Beltrán" disabled avatarInitials="AB" icon={trailingIcon} />
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
