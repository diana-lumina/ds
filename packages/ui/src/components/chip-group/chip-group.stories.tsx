import type { Meta, StoryObj } from '@storybook/react'
import { FilterChip } from '../filter-chip/filter-chip'
import { InputChip } from '../input-chip/input-chip'
import { ChipGroup } from './chip-group'

const meta: Meta<typeof ChipGroup> = {
  title: 'Components/Labels & Status/ChipGroup',
  component: ChipGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Pattern compartido para componer chips relacionados mediante instancias reales de FilterChip o InputChip. No introduce una acción ni apariencia propias; organiza wrap y gap. La cantidad, size, selected y labels los aporta cada chip. Alignment es responsabilidad del contenedor padre. El wrapper no es focusable ni asume role=toolbar: Tab recorre cada chip en orden DOM.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description:
        'SLOT nativo compartido: instancias reales de FilterChip o InputChip. Cantidad y API las aporta cada chip.',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof ChipGroup>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  render: (args) => (
    <ChipGroup {...args}>
      <FilterChip label="Virtual" selected />
      <FilterChip label="Presencial" />
      <FilterChip label="Híbrido" />
    </ChipGroup>
  ),
}

export const FilterChips: Story = {
  name: 'Filter Chip',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Grupo de FilterChip. Selected y State viven en cada instancia. El grupo solo envuelve y hace wrap.',
      },
      source: {
        code: `<ChipGroup>
  <FilterChip label="Virtual" selected />
  <FilterChip label="Presencial" />
  <FilterChip label="Híbrido" />
</ChipGroup>`,
      },
    },
  },
  render: () => (
    <ChipGroup>
      <FilterChip label="Virtual" selected />
      <FilterChip label="Presencial" />
      <FilterChip label="Híbrido" />
    </ChipGroup>
  ),
}

export const InputChips: Story = {
  name: 'Input Chip',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Grupo de InputChip. La remoción (onClose) la resuelve cada instancia; el grupo no duplica estados ni tokens.',
      },
      source: {
        code: `<ChipGroup>
  <InputChip label="UX Research" onClose={() => {}} />
  <InputChip label="Posgrado" onClose={() => {}} />
  <InputChip label="Campus Monterrey" onClose={() => {}} />
</ChipGroup>`,
      },
    },
  },
  render: () => (
    <ChipGroup>
      <InputChip label="UX Research" onClose={() => {}} />
      <InputChip label="Posgrado" onClose={() => {}} />
      <InputChip label="Campus Monterrey" onClose={() => {}} />
    </ChipGroup>
  ),
}

export const Wrap: Story = {
  name: 'Wrap',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story:
          'flex-wrap: wrap. No hay variantes por cantidad. Cuando el ancho no alcanza, los chips bajan de línea. Alignment interno Hug: align-items y align-content flex-start.',
      },
    },
  },
  render: () => (
    <div style={{ width: 220, padding: 8, border: '1px solid #eee', borderRadius: 8 }}>
      <ChipGroup>
        <FilterChip label="Virtual" selected />
        <FilterChip label="Presencial" />
        <FilterChip label="Híbrido" />
        <FilterChip label="Sincrónico" />
        <FilterChip label="Asincrónico" />
      </ChipGroup>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: {
    ...hideCode,
    docs: {
      ...hideCode.docs,
      description: {
        story:
          'La alineación se resuelve desde el padre. FilterChip e InputChip no se mezclan en el mismo grupo de uso: cada uno cubre un patrón distinto (filtrar vs valor aplicado).',
      },
    },
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        fontFamily: 'sans-serif',
        maxWidth: 480,
      }}
    >
      <div>
        <p style={{ fontSize: 13, color: '#666', margin: '0 0 8px' }}>Modalidad</p>
        <ChipGroup>
          <FilterChip label="Virtual" selected />
          <FilterChip label="Presencial" />
          <FilterChip label="Híbrido" />
        </ChipGroup>
      </div>
      <div>
        <p style={{ fontSize: 13, color: '#666', margin: '0 0 8px' }}>Filtros aplicados</p>
        <ChipGroup>
          <InputChip label="UX Research" onClose={() => {}} />
          <InputChip label="Campus Monterrey" onClose={() => {}} />
        </ChipGroup>
      </div>
    </div>
  ),
}
