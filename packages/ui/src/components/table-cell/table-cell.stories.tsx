import type { Meta, StoryObj } from '@storybook/react'
import { TableCell } from './table-cell'

const meta: Meta<typeof TableCell> = {
  title: 'Components/Data Display/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Celda de tabla (Semantic/Label/Medium). Se usa dentro de un <tr>. El contenido va en children.',
      },
    },
  },
  argTypes: {
    children: { control: 'text' },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof TableCell>

function TableFrame({ children }: { children: React.ReactNode }) {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <tbody>
        <tr>{children}</tr>
      </tbody>
    </table>
  )
}

export const Playground: Story = {
  args: {
    children: 'Ana Beltrán',
  },
  render: (args) => (
    <TableFrame>
      <TableCell {...args} />
    </TableFrame>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<TableCell>Ana Beltrán</TableCell>`,
      },
    },
  },
  render: () => (
    <TableFrame>
      <TableCell>Ana Beltrán</TableCell>
    </TableFrame>
  ),
}

export const InRow: Story = {
  name: 'In a row',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<tr>
  <TableCell>Ana Beltrán</TableCell>
  <TableCell>Diseño de interfaces</TableCell>
  <TableCell>Campus Monterrey</TableCell>
</tr>`,
      },
    },
  },
  render: () => (
    <TableFrame>
      <TableCell>Ana Beltrán</TableCell>
      <TableCell>Diseño de interfaces</TableCell>
      <TableCell>Campus Monterrey</TableCell>
    </TableFrame>
  ),
}
