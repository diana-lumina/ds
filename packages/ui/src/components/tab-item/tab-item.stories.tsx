import type { Meta, StoryObj } from '@storybook/react'
import { useEffect, useState } from 'react'
import { TabItem } from './tab-item'

const meta: Meta<typeof TabItem> = {
  title: 'Components/Navigation/TabItem',
  component: TabItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
         'Descripción pendiente.',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'true = pestaña activa; el grupo garantiza exclusividad',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción',
      table: { defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'text',
      description: 'Label (string editable)',
    },
  },
}

export default meta
type Story = StoryObj<typeof TabItem>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

function PlaygroundTabItem({
  selected: selectedArg = false,
  ...rest
}: React.ComponentProps<typeof TabItem>) {
  const [selected, setSelected] = useState(selectedArg)

  useEffect(() => {
    setSelected(selectedArg)
  }, [selectedArg])

  return <TabItem {...rest} selected={selected} onSelectedChange={setSelected} />
}

export const Playground: Story = {
  args: {
    selected: false,
    disabled: false,
    label: 'Tab',
  },
  render: (args) => <PlaygroundTabItem {...args} />,
}

export const Unselected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<TabItem selected={false} label="Tab" />`,
      },
    },
  },
  render: () => <TabItem selected={false} label="Tab" />,
}

export const Selected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'Indicador inferior a todo el ancho. Hover usa color de texto selected. Focus-visible conserva el indicador y el anillo a 2px del componente.',
      },
      source: {
        code: `<TabItem selected label="Tab" />`,
      },
    },
  },
  render: () => <TabItem selected label="Tab" />,
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<TabItem selected={false} disabled label="Tab" />`,
      },
    },
  },
  render: () => <TabItem selected={false} disabled label="Tab" />,
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

    return (
      <div style={{ padding: 8 }}>
       
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Selected</th>
              <th style={th}>Default</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Unselected</td>
              <td style={td}>
                <TabItem selected={false} label="Tab" />
              </td>
              <td style={td}>
                <TabItem selected={false} disabled label="Tab" />
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>Selected</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <TabItem selected label="Tab" />
              </td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <TabItem selected disabled label="Tab" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: {
    docs: {
      canvas: { sourceState: 'none' },
      description: {
        story:
          'Solo como dependencia de un grupo. Selected y State son independientes; la exclusividad la administra el contenedor (futuro Tab).',
      },
    },
  },
  render: () => {
    const [tab, setTab] = useState<'resumen' | 'temario' | 'recursos'>('resumen')

    return (
      <div
        style={{
          fontFamily: 'sans-serif',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          maxWidth: 480,
        }}
      >
        <div role="tablist" aria-label="Secciones del curso" style={{ display: 'flex' }}>
          <TabItem
            selected={tab === 'resumen'}
            onSelectedChange={(selected) => selected && setTab('resumen')}
            label="Resumen"
          />
          <TabItem
            selected={tab === 'temario'}
            onSelectedChange={(selected) => selected && setTab('temario')}
            label="Temario"
          />
          <TabItem
            selected={tab === 'recursos'}
            onSelectedChange={(selected) => selected && setTab('recursos')}
            label="Recursos"
          />
        </div>
        <div style={{ fontSize: 13, color: '#666' }}>
          Pestaña activa: {tab === 'resumen' ? 'Resumen' : tab === 'temario' ? 'Temario' : 'Recursos'}
        </div>
      </div>
    )
  },
}
