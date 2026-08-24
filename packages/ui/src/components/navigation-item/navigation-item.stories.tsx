import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { HouseIcon } from '@workspace/ui/icons'
import { NavigationItem } from './navigation-item'

const meta: Meta<typeof NavigationItem> = {
  title: 'Components/Navigation/NavigationItem',
  component: NavigationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Ítem de navegación para `navigation-bar` o `side-navigation`. `current` marca la sección activa (`aria-current="page"`). ',
      },
    },
  },
  argTypes: {
    context: {
      control: 'radio',
      options: ['navigation-bar', 'side-navigation'],
      description: 'navigation-bar (sin superficie en current) · side-navigation (superficie current)',
      table: { defaultValue: { summary: 'navigation-bar' } },
    },
    current: {
      control: 'boolean',
      description: 'Sección actual (`aria-current="page"`)',
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
    icon: {
      control: false,
      description: 'Ícono leading opcional (16px)',
    },
  },
}

export default meta
type Story = StoryObj<typeof NavigationItem>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    context: 'navigation-bar',
    current: false,
    disabled: false,
    label: 'Inicio',
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<NavigationItem label="Inicio" />`,
      },
    },
  },
  render: () => <NavigationItem label="Inicio" />,
}

export const WithIcon: Story = {
  name: 'Con ícono',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<NavigationItem label="Inicio" icon={<HouseIcon />} />`,
      },
    },
  },
  render: () => <NavigationItem label="Inicio" icon={<HouseIcon />} />,
}

export const Current: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<NavigationItem label="Inicio" current />`,
      },
    },
  },
  render: () => <NavigationItem label="Inicio" current />,
}

export const SideNavigationCurrent: Story = {
  name: 'Side navigation current',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<NavigationItem context="side-navigation" label="Inicio" current />`,
      },
    },
  },
  render: () => (
    <NavigationItem context="side-navigation" label="Inicio" current />
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<NavigationItem label="Inicio" disabled />`,
      },
    },
  },
  render: () => <NavigationItem label="Inicio" disabled />,
}

export const AllStates: Story = {
  name: 'Current & states',
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
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Context · current</th>
              <th style={th}>Default</th>
              <th style={th}>Con ícono</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Bar · false</td>
              <td style={td}>
                <NavigationItem label="Inicio" />
              </td>
              <td style={td}>
                <NavigationItem label="Inicio" icon={<HouseIcon />} />
              </td>
              <td style={td}>
                <NavigationItem label="Inicio" disabled />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Bar · true</td>
              <td style={td}>
                <NavigationItem label="Inicio" current />
              </td>
              <td style={td}>
                <NavigationItem label="Inicio" current icon={<HouseIcon />} />
              </td>
              <td style={td}>
                <NavigationItem label="Inicio" current disabled />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Side · false</td>
              <td style={td}>
                <NavigationItem context="side-navigation" label="Inicio" />
              </td>
              <td style={td}>
                <NavigationItem context="side-navigation" label="Inicio" icon={<HouseIcon />} />
              </td>
              <td style={td}>
                <NavigationItem context="side-navigation" label="Inicio" disabled />
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>Side · true</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <NavigationItem context="side-navigation" label="Inicio" current />
              </td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <NavigationItem
                  context="side-navigation"
                  label="Inicio"
                  current
                  icon={<HouseIcon />}
                />
              </td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <NavigationItem context="side-navigation" label="Inicio" current disabled />
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
  parameters: hideCode,
  render: () => {
    const [section, setSection] = useState('inicio')
    const items = [
      { id: 'inicio', label: 'Inicio' },
      { id: 'cursos', label: 'Cursos' },
      { id: 'perfil', label: 'Perfil' },
    ] as const

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <nav aria-label="Barra" style={{ display: 'flex', gap: 4 }}>
          {items.map((item) => (
            <NavigationItem
              key={item.id}
              label={item.label}
              current={section === item.id}
              onClick={() => setSection(item.id)}
            />
          ))}
        </nav>
        <nav
          aria-label="Lateral"
          style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 220 }}
        >
          {items.map((item) => (
            <NavigationItem
              key={item.id}
              context="side-navigation"
              label={item.label}
              current={section === item.id}
              onClick={() => setSection(item.id)}
            />
          ))}
        </nav>
      </div>
    )
  },
}
