import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { FilterChip } from './filter-chip'
import { BagIcon, ChevronIcon, CloseIcon } from '@workspace/ui/icons'

const ICONS = {
  none: undefined,
  bag: <BagIcon />,
  chevron: <ChevronIcon />,
  close: <CloseIcon />,
} as const

type IconOption = keyof typeof ICONS

type FilterChipStoryArgs = Omit<React.ComponentProps<typeof FilterChip>, 'icon' | 'onSelectedChange'> & {
  icon: IconOption
}

const meta: Meta<FilterChipStoryArgs> = {
  title: 'Components/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `

        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    selected: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    icon: {
      control: 'select',
      options: Object.keys(ICONS),
    },
    children: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<FilterChipStoryArgs>

function captionStyle(): React.CSSProperties {
  return { fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginTop: 6 }
}

function PlaygroundChip({
  icon,
  selected: selectedArg = false,
  ...args
}: FilterChipStoryArgs) {
  const [selected, setSelected] = useState(selectedArg)

  useEffect(() => {
    setSelected(selectedArg)
  }, [selectedArg])

  return (
    <FilterChip
      {...args}
      icon={ICONS[icon]}
      selected={selected}
      onSelectedChange={setSelected}
    />
  )
}

export const Playground: Story = {
  args: {
    size: 'sm',
    selected: false,
    disabled: false,
    children: 'Categoría',
    icon: 'bag',
  },
  render: (args) => <PlaygroundChip {...args} />,
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Small</h2>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="sm" selected={false}>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Unselected</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="sm" selected={true}>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Selected</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="sm" disabled>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Disabled (unselected)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="sm" selected disabled>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Disabled (selected)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="sm" selected icon={<BagIcon />}>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Con ícono</div>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontFamily: 'sans-serif', marginBottom: 4 }}>Medium</h2>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="md" selected={false}>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Unselected</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="md" selected={true}>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Selected</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="md" disabled>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Disabled (unselected)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="md" selected disabled>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Disabled (selected)</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FilterChip size="md" selected icon={<BagIcon />}>
              Categoría
            </FilterChip>
            <div style={captionStyle()}>Con ícono</div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  render: () => {
    const [modality, setModality] = useState('online')
    const [level, setLevel] = useState<string | null>('intermedio')

    return (
      <div
        style={{
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          maxWidth: 480,
        }}
      >
        <span style={{ fontSize: 13, color: '#666' }}>Filtrar cursos</span>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <FilterChip
            size="sm"
            selected={modality === 'online'}
            onSelectedChange={(selected) => setModality(selected ? 'online' : '')}
          >
            En línea
          </FilterChip>
          <FilterChip
            size="sm"
            selected={modality === 'presencial'}
            onSelectedChange={(selected) => setModality(selected ? 'presencial' : '')}
          >
            Presencial
          </FilterChip>
          <FilterChip
            size="sm"
            selected={level === 'intermedio'}
            onSelectedChange={(selected) => setLevel(selected ? 'intermedio' : null)}
          >
            Intermedio
          </FilterChip>
          <FilterChip size="sm" selected={false} disabled>
            Certificación
          </FilterChip>
        </div>
      </div>
    )
  },
}
