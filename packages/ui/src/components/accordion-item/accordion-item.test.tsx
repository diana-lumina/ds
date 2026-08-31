import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { axe } from 'vitest-axe'
import { AccordionItem } from './accordion-item'

const body = 'La inscripción queda sujeta a disponibilidad de cupo.'

describe('AccordionItem', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(<AccordionItem title="Datos del programa">{body}</AccordionItem>)
    })

    it('tiene el data-slot correcto', () => {
      render(<AccordionItem title="Datos del programa">{body}</AccordionItem>)
      expect(document.querySelector('[data-slot="accordion-item"]')).toBeInTheDocument()
    })

    it('usa treatment plain por defecto', () => {
      render(<AccordionItem title="Datos del programa">{body}</AccordionItem>)
      expect(document.querySelector('[data-slot="accordion-item"]')).toHaveAttribute(
        'data-treatment',
        'plain',
      )
    })

    it('aplica treatment contained', () => {
      render(
        <AccordionItem treatment="contained" title="Datos del programa">
          {body}
        </AccordionItem>,
      )
      expect(document.querySelector('[data-slot="accordion-item"]')).toHaveAttribute(
        'data-treatment',
        'contained',
      )
    })

    it('renderiza título y supporting text', () => {
      render(
        <AccordionItem title="Datos del programa" supportingText="Opcional">
          {body}
        </AccordionItem>,
      )
      expect(screen.getByText('Datos del programa')).toBeInTheDocument()
      expect(screen.getByText('Opcional')).toBeInTheDocument()
    })

    it('no renderiza ícono leading por defecto', () => {
      render(<AccordionItem title="Datos del programa">{body}</AccordionItem>)
      expect(
        document.querySelector('[data-slot="accordion-item-icon"]'),
      ).not.toBeInTheDocument()
    })

    it('renderiza el ícono leading cuando se pasa', () => {
      render(
        <AccordionItem title="Datos del programa" icon={<svg data-testid="leading" />}>
          {body}
        </AccordionItem>,
      )
      expect(screen.getByTestId('leading')).toBeInTheDocument()
    })

    it('el ícono leading es decorativo (aria-hidden)', () => {
      render(
        <AccordionItem title="Datos del programa" icon={<svg data-testid="leading" />}>
          {body}
        </AccordionItem>,
      )
      expect(screen.getByTestId('leading').closest('[aria-hidden="true"]')).toBeInTheDocument()
    })

    it('renderiza el caret', () => {
      render(<AccordionItem title="Datos del programa">{body}</AccordionItem>)
      expect(
        screen.getByRole('button').querySelector('svg'),
      ).toBeInTheDocument()
    })

    it('tiene Divider thickness 1 en el bottom cuando es plain', () => {
      render(<AccordionItem title="Datos del programa">{body}</AccordionItem>)
      const divider = document.querySelector(
        '[data-slot="accordion-item"] [data-slot="divider"]',
      )
      expect(divider).toHaveAttribute('data-thickness', '1')
      expect(divider).toHaveAttribute('data-orientation', 'horizontal')
    })

    it('no renderiza Divider cuando es contained', () => {
      render(
        <AccordionItem treatment="contained" title="Datos del programa">
          {body}
        </AccordionItem>,
      )
      expect(
        document.querySelector('[data-slot="accordion-item"] [data-slot="divider"]'),
      ).not.toBeInTheDocument()
    })
  })

  describe('Comportamiento', () => {
    it('está collapsed por defecto', () => {
      render(<AccordionItem title="Datos del programa">{body}</AccordionItem>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false')
      expect(screen.queryByText(body)).not.toBeInTheDocument()
    })

    it('expande al pulsar el trigger', async () => {
      render(<AccordionItem title="Datos del programa">{body}</AccordionItem>)
      await userEvent.click(screen.getByRole('button'))
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true')
      expect(screen.getByText(body)).toBeInTheDocument()
    })

    it('abre con defaultOpen', () => {
      render(
        <AccordionItem title="Datos del programa" defaultOpen>
          {body}
        </AccordionItem>,
      )
      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true')
      expect(screen.getByText(body)).toBeInTheDocument()
    })

    it('notifica onOpenChange', async () => {
      const onOpenChange = vi.fn()
      render(
        <AccordionItem title="Datos del programa" onOpenChange={onOpenChange}>
          {body}
        </AccordionItem>,
      )
      await userEvent.click(screen.getByRole('button'))
      expect(onOpenChange).toHaveBeenCalledWith(true)
    })
  })

  describe('Accesibilidad', () => {
    it('el focus va al trigger, no al contenido', async () => {
      const user = userEvent.setup()
      render(
        <AccordionItem title="Datos del programa" defaultOpen>
          {body}
        </AccordionItem>,
      )
      await user.tab()
      expect(screen.getByRole('button')).toHaveFocus()
    })
    it('sin violaciones de accesibilidad — collapsed', async () => {
      const { container } = render(
        <AccordionItem title="Datos del programa" supportingText="Opcional">
          {body}
        </AccordionItem>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('sin violaciones de accesibilidad — expanded', async () => {
      const { container } = render(
        <AccordionItem title="Datos del programa" supportingText="Opcional" defaultOpen>
          {body}
        </AccordionItem>,
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
