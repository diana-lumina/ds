import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Button } from '../button/button'
import { ButtonGroup } from './button-group'

function getGroup(container: HTMLElement) {
  return container.querySelector('[data-slot="button-group"]')
}

describe('ButtonGroup', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <ButtonGroup>
          <Button label="Guardar" />
        </ButtonGroup>
      )
    })

    it('tiene el data-slot correcto', () => {
      const { container } = render(
        <ButtonGroup>
          <Button label="Guardar" />
        </ButtonGroup>
      )
      expect(getGroup(container)).toHaveAttribute('data-slot', 'button-group')
    })

    it('no asume role toolbar ni es focusable', () => {
      const { container } = render(
        <ButtonGroup>
          <Button label="Guardar" />
        </ButtonGroup>
      )
      const group = getGroup(container)
      expect(group).not.toHaveAttribute('role')
      expect(group).not.toHaveAttribute('tabindex')
    })

    it('renderiza los hijos', () => {
      render(
        <ButtonGroup>
          <Button label="Cancelar" />
          <Button label="Guardar" />
        </ButtonGroup>
      )
      expect(screen.getByRole('button', { name: 'Cancelar' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Guardar' })).toBeInTheDocument()
    })
  })

  describe('Prop: orientation', () => {
    it('aplica orientation horizontal por defecto', () => {
      const { container } = render(
        <ButtonGroup>
          <Button label="Guardar" />
        </ButtonGroup>
      )
      expect(getGroup(container)).toHaveAttribute('data-orientation', 'horizontal')
    })

    it('aplica orientation vertical', () => {
      const { container } = render(
        <ButtonGroup orientation="vertical">
          <Button label="Guardar" />
        </ButtonGroup>
      )
      expect(getGroup(container)).toHaveAttribute('data-orientation', 'vertical')
    })
  })

  describe('Accesibilidad', () => {
    it.each(['horizontal', 'vertical'] as const)(
      'sin violaciones de accesibilidad — orientation %s',
      async (orientation) => {
        const { container } = render(
          <ButtonGroup orientation={orientation}>
            <Button label="Cancelar" />
            <Button label="Guardar" />
          </ButtonGroup>
        )
        const results = await axe(container)
        expect(results).toHaveNoViolations()
      }
    )
  })
})
