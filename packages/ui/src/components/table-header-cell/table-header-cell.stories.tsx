import type { Meta, StoryObj } from '@storybook/react'
import { CaretDownIcon } from '@workspace/ui/icons'
import { TableHeaderCell } from './table-header-cell'

const meta: Meta<typeof TableHeaderCell> = {
  title: 'Components/Data Display/TableHeaderCell',
  component: TableHeaderCell,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Encabezado de columna (Semantic/Label/Medium/Strong). Ícono trailing opcional. Estados: default, hover y focus-visible (CSS).',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    icon: { control: false },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof TableHeaderCell>

function TableFrame({ children }: { children: React.ReactNode }) {
  return (
    <table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>{children}</tr>
      </thead>
    </table>
  )
}

export const Playground: Story = {
  args: {
    label: 'Nombre',
  },
  render: (args) => (
    <TableFrame>
      <TableHeaderCell {...args} icon={<CaretDownIcon />} />
    </TableFrame>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<TableHeaderCell label="Nombre" />`,
      },
    },
  },
  render: () => (
    <TableFrame>
      <TableHeaderCell label="Nombre" />
    </TableFrame>
  ),
}

export const WithIcon: Story = {
  name: 'With icon',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<TableHeaderCell label="Nombre" icon={<CaretDownIcon />} />`,
      },
    },
  },
  render: () => (
    <TableFrame>
      <TableHeaderCell label="Nombre" icon={<CaretDownIcon />} />
    </TableFrame>
  ),
}

export const InRow: Story = {
  name: 'In a row',
  parameters: {
    docs: {
      canvas: { sourceState: 'none' as const },
    },
  },
  render: () => (
    <TableFrame>
      <TableHeaderCell label="Nombre" icon={<CaretDownIcon />} />
      <TableHeaderCell label="Programa" />
      <TableHeaderCell label="Campus" icon={<CaretDownIcon />} />
    </TableFrame>
  ),
}
