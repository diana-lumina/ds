import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { Tooltip } from './tooltip'

describe('Tooltip', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <Tooltip label="Descargar expediente">
          <button type="button">Acciones</button>
        </Tooltip>,
      )
    })

    it('no muestra el overlay por defecto', () => {
      render(
        <Tooltip label="Descargar expediente">
          <button type="button">Acciones</button>
        </Tooltip>,
      )
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('tiene el data-slot correcto cuando está abierto', () => {
      render(
        <Tooltip label="Descargar expediente" defaultOpen>
          <button type="button">Acciones</button>
        </Tooltip>,
      )
      expect(document.querySelector('[data-slot="tooltip"]')).toBeInTheDocument()
    })

    it('muestra el label', () => {
      render(
        <Tooltip label="Descargar expediente" defaultOpen>
          <button type="button">Acciones</button>
        </Tooltip>,
      )
      expect(screen.getByRole('tooltip')).toHaveTextContent('Descargar expediente')
    })
  })

  describe('Comportamiento', () => {
    it('abre al hacer hover', async () => {
      const user = userEvent.setup()
      render(
        <Tooltip label="Descargar expediente" delayDuration={0}>
          <button type="button">Acciones</button>
        </Tooltip>,
      )

      await user.hover(screen.getByRole('button', { name: 'Acciones' }))
      expect(await screen.findByRole('tooltip')).toHaveTextContent(
        'Descargar expediente',
      )
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad — cerrado', async () => {
      const { container } = render(
        <Tooltip label="Descargar expediente">
          <button type="button">Acciones</button>
        </Tooltip>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — abierto', async () => {
      const { container } = render(
        <Tooltip label="Descargar expediente" defaultOpen>
          <button type="button">Acciones</button>
        </Tooltip>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
