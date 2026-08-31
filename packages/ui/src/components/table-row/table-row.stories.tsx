import type { Meta, StoryObj } from '@storybook/react'
import { TableCell } from '../table-cell'
import { TableHeaderCell } from '../table-header-cell'
import { Table } from '../table'
import { TableRow } from './table-row'

const meta: Meta<typeof TableRow> = {
  title: 'Components/Data Display/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Fila de tabla. Se compone de TableCell. Divider thickness 1 en el bottom. Estados: default, hover, selected y selected-hover (CSS).',
      },
    },
  },
  argTypes: {
    selected: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    children: { control: false },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof TableRow>

function cells() {
  return (
    <>
      <TableCell>Ana Beltrán</TableCell>
      <TableCell>Diseño de interfaces</TableCell>
      <TableCell>Campus Monterrey</TableCell>
    </>
  )
}

function TableFrame({ children }: { children: React.ReactNode }) {
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <tbody>{children}</tbody>
    </table>
  )
}

export const Playground: Story = {
  args: {
    selected: false,
  },
  render: (args) => (
    <TableFrame>
      <TableRow {...args}>{cells()}</TableRow>
    </TableFrame>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<TableRow>
  <TableCell>Ana Beltrán</TableCell>
  <TableCell>Diseño de interfaces</TableCell>
  <TableCell>Campus Monterrey</TableCell>
</TableRow>`,
      },
    },
  },
  render: () => (
    <TableFrame>
      <TableRow>{cells()}</TableRow>
    </TableFrame>
  ),
}

export const Selected: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<TableRow selected>
  <TableCell>Ana Beltrán</TableCell>
  …
</TableRow>`,
      },
    },
  },
  render: () => (
    <TableFrame>
      <TableRow selected>{cells()}</TableRow>
    </TableFrame>
  ),
}

export const States: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'none' as const },
    },
  },
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      padding: '0 16px 12px 0',
      borderBottom: '1px solid #eee',
    }
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      verticalAlign: 'middle',
      padding: '16px 24px 16px 0',
      whiteSpace: 'nowrap',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={th}>State</th>
              <th style={th}>TableRow</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>default / hover</td>
              <td>
                <TableFrame>
                  <TableRow>{cells()}</TableRow>
                </TableFrame>
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>selected / selected-hover</td>
              <td>
                <TableFrame>
                  <TableRow selected>{cells()}</TableRow>
                </TableFrame>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}

export const InTable: Story = {
  name: 'In a table',
  parameters: {
    docs: {
      canvas: { sourceState: 'none' as const },
    },
  },
  render: () => (
    <Table
      header={
        <>
          <TableHeaderCell label="Nombre" />
          <TableHeaderCell label="Programa" />
          <TableHeaderCell label="Campus" />
        </>
      }
    >
      <TableRow selected>
        <TableCell>Ana Beltrán</TableCell>
        <TableCell>Diseño de interfaces</TableCell>
        <TableCell>Campus Monterrey</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Luis Mora</TableCell>
        <TableCell>UX Research aplicado</TableCell>
        <TableCell>Campus Ciudad de México</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Marina Solís</TableCell>
        <TableCell>Accesibilidad web</TableCell>
        <TableCell>En línea</TableCell>
      </TableRow>
    </Table>
  ),
}
