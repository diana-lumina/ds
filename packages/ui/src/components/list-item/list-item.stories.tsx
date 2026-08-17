import type { Meta, StoryObj } from '@storybook/react'
import { CaretRightIcon } from '@workspace/ui/icons'
import { ListItem } from './list-item'

const meta: Meta<typeof ListItem> = {
  title: 'Components/Data Display/ListItem',
  component: ListItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Fila de lista: Avatar, texto (primary obligatorio; secondary y tertiary opcionales) — ícono trailing obligatorio. Estados: default, hover, pressed, focus-visible y disabled.',
      },
    },
  },
  argTypes: {
    primaryText: {
      control: 'text',
      description: 'Texto primario (obligatorio).',
    },
    secondaryText: {
      control: 'text',
      description: 'Texto secundario (opcional).',
    },
    tertiaryText: {
      control: 'text',
      description: 'Texto terciario (opcional).',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción',
      table: { defaultValue: { summary: 'false' } },
    },
    avatarSrc: {
      control: 'text',
      description: 'URL de imagen del Avatar',
    },
    avatarInitials: {
      control: 'text',
      description: 'Iniciales del Avatar (hasta 2 caracteres o nombre completo)',
    },
    avatarAlt: {
      control: 'text',
      description: 'alt de la imagen. Vacío si el nombre ya está en primaryText',
      table: { defaultValue: { summary: '""' } },
    },
    icon: {
      control: false,
      description: 'Ícono trailing (obligatorio)',
    },
  },
}

export default meta
type Story = StoryObj<typeof ListItem>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const DEMO_SRC = 'https://i.pravatar.cc/96?img=5'

export const Playground: Story = {
  args: {
    primaryText: 'Ana Beltrán',
    secondaryText: '',
    tertiaryText: '',
    disabled: false,
    avatarInitials: 'AB',
    avatarAlt: '',
    icon: <CaretRightIcon />,
  },
}

export const OneLine: Story = {
  name: 'One line',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} />`,
      },
    },
  },
  render: () => (
    <ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} />
  ),
}

export const TwoLines: Story = {
  name: 'Two lines',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ListItem
  primaryText="Ana Beltrán"
  secondaryText="Diseño de interfaces"
  avatarInitials="AB"
  icon={<CaretRightIcon />}
/>`,
      },
    },
  },
  render: () => (
    <ListItem
      primaryText="Ana Beltrán"
      secondaryText="Diseño de interfaces"
      avatarInitials="AB"
      icon={<CaretRightIcon />}
    />
  ),
}

export const ThreeLines: Story = {
  name: 'Three lines',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ListItem
  primaryText="Ana Beltrán"
  secondaryText="Diseño de interfaces"
  tertiaryText="TEC 360"
  avatarSrc="https://i.pravatar.cc/96?img=5"
  icon={<CaretRightIcon />}
/>`,
      },
    },
  },
  render: () => (
    <ListItem
      primaryText="Ana Beltrán"
      secondaryText="Diseño de interfaces"
      tertiaryText="TEC 360"
      avatarSrc={DEMO_SRC}
      icon={<CaretRightIcon />}
    />
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} disabled />`,
      },
    },
  },
  render: () => (
    <ListItem primaryText="Ana Beltrán" avatarInitials="AB" icon={<CaretRightIcon />} disabled />
  ),
}

export const AllStates: Story = {
  name: 'Lines & states',
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
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 0,
    }

    const rows = [
      {
        label: 'One line',
        render: (disabled: boolean) => (
          <ListItem
            primaryText="Ana Beltrán"
            avatarInitials="AB"
            icon={<CaretRightIcon />}
            disabled={disabled}
          />
        ),
      },
      {
        label: 'Two lines',
        render: (disabled: boolean) => (
          <ListItem
            primaryText="Ana Beltrán"
            secondaryText="Diseño de interfaces"
            avatarInitials="AB"
            icon={<CaretRightIcon />}
            disabled={disabled}
          />
        ),
      },
      {
        label: 'Three lines',
        render: (disabled: boolean) => (
          <ListItem
            primaryText="Ana Beltrán"
            secondaryText="Diseño de interfaces"
            tertiaryText="TEC 360"
            avatarSrc={DEMO_SRC}
            icon={<CaretRightIcon />}
            disabled={disabled}
          />
        ),
      },
    ] as const

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Content</th>
              <th style={th}>Default</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, render }) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                <td style={td}>{render(false)}</td>
                <td style={td}>{render(true)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}
