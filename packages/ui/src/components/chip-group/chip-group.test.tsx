import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe } from 'vitest-axe'
import { FilterChip } from '../filter-chip/filter-chip'
import { InputChip } from '../input-chip/input-chip'
import { ChipGroup } from './chip-group'

function getGroup(container: HTMLElement) {
  return container.querySelector('[data-slot="chip-group"]')
}

describe('ChipGroup', () => {
  describe('Renderizado', () => {
    it('renderiza sin errores', () => {
      render(
        <ChipGroup>
          <FilterChip label="Virtual" />
        </ChipGroup>
      )
    })

    it('tiene el data-slot correcto', () => {
      const { container } = render(
        <ChipGroup>
          <FilterChip label="Virtual" />
        </ChipGroup>
      )
      expect(getGroup(container)).toHaveAttribute('data-slot', 'chip-group')
    })

    it('no asume role toolbar ni es focusable', () => {
      const { container } = render(
        <ChipGroup>
          <FilterChip label="Virtual" />
        </ChipGroup>
      )
      const group = getGroup(container)
      expect(group).not.toHaveAttribute('role')
      expect(group).not.toHaveAttribute('tabindex')
    })

    it('renderiza FilterChip e InputChip', () => {
      render(
        <ChipGroup>
          <FilterChip label="Virtual" />
          <InputChip label="UX" onClose={() => {}} />
        </ChipGroup>
      )
      expect(screen.getByRole('button', { name: 'Virtual' })).toBeInTheDocument()
      expect(screen.getByText('UX')).toBeInTheDocument()
    })
  })

  describe('Accesibilidad', () => {
    it('sin violaciones de accesibilidad', async () => {
      const { container } = render(
        <ChipGroup>
          <FilterChip label="Virtual" />
          <InputChip label="UX" onClose={() => {}} />
        </ChipGroup>
      )
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })
})
