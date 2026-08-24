import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { MenuItem } from './menu-item'

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Navigation/MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Ítem de menú.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label (string editable)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof MenuItem>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    label: 'Editar',
    disabled: false,
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<MenuItem label="Editar" />`,
      },
    },
  },
  render: () => <MenuItem label="Editar" />,
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<MenuItem label="Editar" disabled />`,
      },
    },
  },
  render: () => <MenuItem label="Editar" disabled />,
}

export const AllStates: Story = {
  name: 'States',
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
    const td: React.CSSProperties = {
      textAlign: 'center',
      verticalAlign: 'middle',
      padding: '16px 16px',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}>Default</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={td}>
                <MenuItem label="Editar" />
              </td>
              <td style={td}>
                <MenuItem label="Editar" disabled />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
