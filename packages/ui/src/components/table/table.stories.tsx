import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from 'storybook/preview-api'
import { CaretDownIcon } from '@workspace/ui/icons'
import { TableCell } from '../table-cell'
import { TableHeaderCell } from '../table-header-cell'
import { TableRow } from '../table-row'
import { Table } from './table'

const ROWS = [
  {
    id: 'ana',
    name: 'Ana Beltrán',
    program: 'Diseño de interfaces',
    campus: 'Campus Monterrey',
  },
  {
    id: 'luis',
    name: 'Luis Mora',
    program: 'UX Research aplicado',
    campus: 'Campus Ciudad de México',
  },
  {
    id: 'marina',
    name: 'Marina Solís',
    program: 'Accesibilidad web',
    campus: 'En línea',
  },
] as const

type SelectedRow = 'none' | (typeof ROWS)[number]['id']

type TableStoryArgs = React.ComponentProps<typeof Table> & {
  selectedRow: SelectedRow
}

const meta: Meta<TableStoryArgs> = {
  title: 'Components/Data Display/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Wrapper de TableHeaderCell y TableRow. Border radius 16px y borde 1px #D4D4D4.',
      },
    },
  },
  args: {
    selectedRow: 'ana',
  },
  argTypes: {
    selectedRow: {
      name: 'row selected',
      control: 'select',
      options: ['none', ...ROWS.map((row) => row.id)],
      labels: {
        none: 'Ninguna',
        ana: 'Ana Beltrán',
        luis: 'Luis Mora',
        marina: 'Marina Solís',
      },
      description: 'Fila seleccionada',
      table: { defaultValue: { summary: 'ana' } },
    },
    header: { control: false, table: { disable: true } },
    children: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<TableStoryArgs>

function header() {
  return (
    <>
      <TableHeaderCell label="Nombre" icon={<CaretDownIcon />} />
      <TableHeaderCell label="Programa" />
      <TableHeaderCell label="Campus" icon={<CaretDownIcon />} />
    </>
  )
}

export const Playground: Story = {
  render: function PlaygroundRender(args) {
    const [, updateArgs] = useArgs<TableStoryArgs>()

    return (
      <Table header={header()}>
        {ROWS.map((row) => (
          <TableRow
            key={row.id}
            selected={args.selectedRow === row.id}
            onClick={() => updateArgs({ selectedRow: row.id })}
          >
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.program}</TableCell>
            <TableCell>{row.campus}</TableCell>
          </TableRow>
        ))}
      </Table>
    )
  },
}

export const Default: Story = {
  argTypes: {
    selectedRow: { control: false, table: { disable: true } },
  },
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Table
  header={
    <>
      <TableHeaderCell label="Nombre" />
      <TableHeaderCell label="Programa" />
      <TableHeaderCell label="Campus" />
    </>
  }
>
  <TableRow>
    <TableCell>Ana Beltrán</TableCell>
    <TableCell>Diseño de interfaces</TableCell>
    <TableCell>Campus Monterrey</TableCell>
  </TableRow>
</Table>`,
      },
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
      <TableRow>
        <TableCell>Ana Beltrán</TableCell>
        <TableCell>Diseño de interfaces</TableCell>
        <TableCell>Campus Monterrey</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Luis Mora</TableCell>
        <TableCell>UX Research aplicado</TableCell>
        <TableCell>Campus Ciudad de México</TableCell>
      </TableRow>
    </Table>
  ),
}
