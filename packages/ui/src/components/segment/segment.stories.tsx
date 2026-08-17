import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { FavoriteIcon } from '@workspace/ui/icons'
import { Segment } from './segment'

type SegmentStoryArgs = Omit<
  React.ComponentProps<typeof Segment>,
  'icon' | 'onSelectedChange'
> & {
  showIcon: boolean
}

const meta = {
  title: 'Components/Actions/Segment',
  component: Segment as unknown as React.ComponentType<SegmentStoryArgs>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Subcomponente interno de Segmented Button: opción individual y su estado visual. Contenido: icon, label o ambos (icon a la izquierda del label). No administra la exclusividad del grupo.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size: sm · md · lg (Semantic/Action por size)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    selected: {
      control: 'boolean',
      description: 'true = opción activa; el grupo garantiza exclusividad',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Label (string editable). Vacío + icon = solo ícono (usar aria-label).',
      table: { type: { summary: 'string' } },
    },
    showIcon: {
      control: 'boolean',
      description: 'Leading icon visible (opcional; instance swap vía prop icon)',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<SegmentStoryArgs>

export default meta
type Story = StoryObj<SegmentStoryArgs>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
  { value: 'lg', sizeLabel: 'Large' },
] as const

function PlaygroundSegment({
  showIcon,
  selected: selectedArg = false,
  ...rest
}: SegmentStoryArgs) {
  const [selected, setSelected] = useState(selectedArg)

  useEffect(() => {
    setSelected(selectedArg)
  }, [selectedArg])

  return (
    <Segment
      {...rest}
      icon={showIcon ? <FavoriteIcon /> : undefined}
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
    label: 'Opción',
    showIcon: false,
  },
  render: (args) => <PlaygroundSegment {...args} />,
}

export const Unselected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Segment size="sm" selected={false} label="Opción" />`,
      },
    },
  },
  render: () => <Segment size="sm" selected={false} label="Opción" />,
}

export const Selected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Segment size="sm" selected label="Opción" />`,
      },
    },
  },
  render: () => <Segment size="sm" selected label="Opción" />,
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Segment size="sm" selected disabled label="Opción" />`,
      },
    },
  },
  render: () => <Segment size="sm" selected disabled label="Opción" />,
}

export const WithIcon: Story = {
  name: 'Icon + label',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Segment size="sm" icon={<FavoriteIcon />} label="Opción" />`,
      },
    },
  },
  render: () => <Segment size="sm" icon={<FavoriteIcon />} label="Opción" />,
}

export const IconOnly: Story = {
  name: 'Icon only',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story: 'Sin label: el ícono va solo. El nombre accesible se aporta con aria-label.',
      },
      source: {
        code: `<Segment size="sm" icon={<FavoriteIcon />} aria-label="Opción" />`,
      },
    },
  },
  render: () => <Segment size="sm" icon={<FavoriteIcon />} aria-label="Opción" />,
}

export const AllStates: Story = {
  name: 'Selected & size',
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
        render: (size: 'sm' | 'md' | 'lg') => (
          <Segment size={size} selected={false} label="Opción" />
        ),
      },
      {
        label: 'Selected',
        render: (size: 'sm' | 'md' | 'lg') => (
          <Segment size={size} selected label="Opción" />
        ),
      },
      {
        label: 'Disabled',
        render: (size: 'sm' | 'md' | 'lg') => (
          <Segment size={size} selected={false} disabled label="Opción" />
        ),
      },
      {
        label: 'Selected + disabled',
        render: (size: 'sm' | 'md' | 'lg') => (
          <Segment size={size} selected disabled label="Opción" />
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

/**
 * Composición provisional de grupo (exclusividad en el consumidor).
 * Cuando exista Segmented Button, este patrón debe vivir ahí.
 */
export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: {
    docs: {
      canvas: { sourceState: 'none' },
      description: {
        story:
          'Solo como dependencia de un grupo. Selected y State son independientes; la exclusividad la administra el contenedor (futuro Segmented Button).',
      },
    },
  },
  render: () => {
    const [view, setView] = useState<'lista' | 'cuadricula'>('lista')

    return (
      <div
        style={{
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 420,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Mis cursos</span>
          <div
            role="group"
            aria-label="Vista"
            style={{ display: 'flex', gap: 4 }}
          >
            <Segment
              size="sm"
              selected={view === 'lista'}
              onSelectedChange={(selected) => selected && setView('lista')}
              icon={<FavoriteIcon />}
              label="Lista"
            />
            <Segment
              size="sm"
              selected={view === 'cuadricula'}
              onSelectedChange={(selected) => selected && setView('cuadricula')}
              label="Cuadrícula"
            />
          </div>
        </div>
        <div style={{ fontSize: 13, color: '#666' }}>
          Vista actual: {view === 'lista' ? 'Lista' : 'Cuadrícula'}
        </div>
      </div>
    )
  },
}
