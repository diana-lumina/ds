import type { Meta, StoryObj } from '@storybook/react'
import { DownloadSimpleIcon, FunnelSimpleIcon } from '@workspace/ui/icons'
import { Button } from '../button'
import { ChipGroup } from '../chip-group'
import { FilterChip } from '../filter-chip'
import { IconButton } from '../icon-button'
import { Search } from '../search'
import { DataTableToolbar } from './data-table-toolbar'

const meta: Meta<typeof DataTableToolbar> = {
  title: 'Components/Data Display/DataTableToolbar',
  component: DataTableToolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Toolbar de Data Table. Search obligatorio; acepta FilterChip, Button e IconButton. Gap 24px.',
      },
    },
  },
  argTypes: {
    search: { control: false },
    filters: { control: false },
    actions: { control: false },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof DataTableToolbar>

export const Playground: Story = {
  render: () => (
    <DataTableToolbar
      search={<Search placeholder="Buscar programas" />}
      filters={
        <ChipGroup>
          <FilterChip label="En línea" />
          <FilterChip label="Presencial" />
        </ChipGroup>
      }
      actions={
        <>
          <Button hierarchy="secondary" size="sm" label="Exportar" />
          <IconButton
            size="sm"
            icon={<DownloadSimpleIcon />}
            aria-label="Descargar"
          />
        </>
      }
    />
  ),
}

export const SearchOnly: Story = {
  name: 'Search only',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<DataTableToolbar search={<Search placeholder="Buscar programas" />} />`,
      },
    },
  },
  render: () => (
    <DataTableToolbar search={<Search placeholder="Buscar programas" />} />
  ),
}

export const WithFilters: Story = {
  name: 'With filters',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<DataTableToolbar
  search={<Search placeholder="Buscar programas" />}
  filters={
    <ChipGroup>
      <FilterChip label="En línea" />
      <FilterChip label="Presencial" icon={<FunnelSimpleIcon />} />
    </ChipGroup>
  }
/>`,
      },
    },
  },
  render: () => (
    <DataTableToolbar
      search={<Search placeholder="Buscar programas" />}
      filters={
        <ChipGroup>
          <FilterChip label="En línea" />
          <FilterChip label="Presencial" icon={<FunnelSimpleIcon />} />
        </ChipGroup>
      }
    />
  ),
}

export const WithActions: Story = {
  name: 'With actions',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<DataTableToolbar
  search={<Search placeholder="Buscar programas" />}
  actions={
    <>
      <Button hierarchy="secondary" size="sm" label="Exportar" />
      <IconButton size="sm" icon={<DownloadSimpleIcon />} aria-label="Descargar" />
    </>
  }
/>`,
      },
    },
  },
  render: () => (
    <DataTableToolbar
      search={<Search placeholder="Buscar programas" />}
      actions={
        <>
          <Button hierarchy="secondary" size="sm" label="Exportar" />
          <IconButton
            size="sm"
            icon={<DownloadSimpleIcon />}
            aria-label="Descargar"
          />
        </>
      }
    />
  ),
}
