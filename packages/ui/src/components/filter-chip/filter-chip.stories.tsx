import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { FilterChip } from './filter-chip'
import { FunnelSimpleIcon } from '@workspace/ui/icons'

type FilterChipStoryArgs = Omit<
  React.ComponentProps<typeof FilterChip>,
  'icon' | 'onSelectedChange'
> & {
  showLeadingIcon: boolean
}

const meta = {
  title: 'Components/Labels & Status/FilterChip',
  component: FilterChip as unknown as React.ComponentType<FilterChipStoryArgs>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Control compartido y seleccionable para aplicar o retirar filtros en TEC 360 y TEC Educación Continua. Selected expresa el valor del filtro; State expresa la interacción actual. No representa información pasiva ni valores removibles.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size: sm · md',
      table: { 
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' } 
      },
    },
    selected: {
      control: 'boolean',
      description: 'true = filtro aplicado',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción ni puede cambiar Selected',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Label (string editable)',
    },
    showLeadingIcon: {
      control: 'boolean',
      description: 'Leading icon visible (opcional; instance swap vía prop icon)',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<FilterChipStoryArgs>

export default meta
type Story = StoryObj<FilterChipStoryArgs>

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
] as const

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

function PlaygroundChip({
  showLeadingIcon,
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
      icon={showLeadingIcon ? <FunnelSimpleIcon /> : undefined}
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
    label: 'Categoría',
    showLeadingIcon: false,
  },
  render: (args) => <PlaygroundChip {...args} />,
}

export const Unselected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FilterChip size="sm" selected={false} label="Categoría" />`,
      },
    },
  },
  render: () => <FilterChip size="sm" selected={false} label="Categoría" />,
}

export const Selected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story: 'Selected=true significa que el filtro está aplicado.',
      },
      source: {
        code: `<FilterChip size="sm" selected label="Categoría" />`,
      },
    },
  },
  render: () => <FilterChip size="sm" selected label="Categoría" />,
}

export const WithLeadingIcon: Story = {
  name: 'Leading icon',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FilterChip
  size="sm"
  selected
  label="Categoría"
  icon={<FunnelSimpleIcon />}
/>`,
      },
    },
  },
  render: () => (
    <FilterChip size="sm" selected label="Categoría" icon={<FunnelSimpleIcon />} />
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<FilterChip size="sm" selected disabled label="Categoría" />`,
      },
    },
  },
  render: () => <FilterChip size="sm" selected disabled label="Categoría" />,
}

export const AllStates: Story = {
  name: 'Selected & states',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 16px 12px',
      borderBottom: '1px solid #eee',
    }
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap',
    }
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
    }

    const rows = [
      {
        label: 'Unselected',
        render: (size: 'sm' | 'md') => (
          <FilterChip size={size} selected={false} label="Categoría" />
        ),
      },
      {
        label: 'Selected',
        render: (size: 'sm' | 'md') => (
          <FilterChip size={size} selected label="Categoría" />
        ),
      },
      {
        label: 'Disabled',
        render: (size: 'sm' | 'md') => (
          <FilterChip size={size} selected={false} disabled label="Categoría" />
        ),
      },
      {
        label: 'Selected + disabled',
        render: (size: 'sm' | 'md') => (
          <FilterChip size={size} selected disabled label="Categoría" />
        ),
      },
      {
        label: 'Leading icon',
        render: (size: 'sm' | 'md') => (
          <FilterChip size={size} selected label="Categoría" icon={<FunnelSimpleIcon />} />
        ),
      },
    ] as const

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Selected / state</th>
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, render }) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                {SIZES.map(({ value }) => (
                  <td key={value} style={td}>
                    {render(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
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
            label="En línea"
          />
          <FilterChip
            size="sm"
            selected={modality === 'presencial'}
            onSelectedChange={(selected) => setModality(selected ? 'presencial' : '')}
            label="Presencial"
          />
          <FilterChip
            size="sm"
            selected={level === 'intermedio'}
            onSelectedChange={(selected) => setLevel(selected ? 'intermedio' : null)}
            label="Intermedio"
          />
          <FilterChip size="sm" selected={false} disabled label="Certificación" />
        </div>
      </div>
    )
  },
}
