import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CalendarDay } from './calendar-day'

const meta: Meta<typeof CalendarDay> = {
  title: 'Components/Internal Building Blocks/CalendarDay',
  component: CalendarDay,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Día de calendario. `selected` marca el día elegido. ',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Día seleccionado (`aria-pressed`)',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled no recibe interacción',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Número o contenido visible',
    },
  },
}

export default meta
type Story = StoryObj<typeof CalendarDay>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    selected: false,
    disabled: false,
    children: '12',
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<CalendarDay>12</CalendarDay>`,
      },
    },
  },
  render: () => <CalendarDay>12</CalendarDay>,
}

export const Selected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<CalendarDay selected>12</CalendarDay>`,
      },
    },
  },
  render: () => <CalendarDay selected>12</CalendarDay>,
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<CalendarDay disabled>12</CalendarDay>`,
      },
    },
  },
  render: () => <CalendarDay disabled>12</CalendarDay>,
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
      padding: '16px',
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
              <td style={rowLabel}>false</td>
              <td style={td}>
                <CalendarDay>12</CalendarDay>
              </td>
              <td style={td}>
                <CalendarDay disabled>12</CalendarDay>
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>true</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <CalendarDay selected>12</CalendarDay>
              </td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <CalendarDay selected disabled>
                  12
                </CalendarDay>
              </td>
            </tr>
          </tbody>
        </table>
        <p
          style={{
            margin: '16px 0 0',
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#888',
          }}
        >
          Hover: pasa el cursor sobre Default. El selected no cambia de fondo al hover.
        </p>
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
          'Solo como dependencia de un calendario. Selected y disabled son independientes; la exclusividad la administra el contenedor.',
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState(12)
    const days = [10, 11, 12, 13, 14]

    return (
      <div style={{ display: 'flex', gap: 4 }}>
        {days.map((value) => (
          <CalendarDay
            key={value}
            selected={selected === value}
            disabled={value === 14}
            onClick={() => setSelected(value)}
          >
            {value}
          </CalendarDay>
        ))}
      </div>
    )
  },
}
