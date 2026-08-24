import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PaginationItem } from './pagination-item'

const meta: Meta<typeof PaginationItem> = {
  title: 'Components/Navigation/PaginationItem',
  component: PaginationItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Ítem de paginación. `current` marca la página activa (`aria-current="page"`). Hover, pressed, focus-visible y disabled son estados CSS nativos. La exclusividad de current la administra el contenedor (Pagination).',
      },
    },
  },
  argTypes: {
    current: {
      control: 'boolean',
      description: 'Página actual (`aria-current="page"`)',
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
type Story = StoryObj<typeof PaginationItem>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    current: false,
    disabled: false,
    children: '1',
  },
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<PaginationItem>1</PaginationItem>`,
      },
    },
  },
  render: () => <PaginationItem>1</PaginationItem>,
}

export const Current: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<PaginationItem current>2</PaginationItem>`,
      },
    },
  },
  render: () => <PaginationItem current>2</PaginationItem>,
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<PaginationItem disabled>1</PaginationItem>`,
      },
    },
  },
  render: () => <PaginationItem disabled>1</PaginationItem>,
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
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Current</th>
              <th style={th}>Default</th>
              <th style={th}>Disabled</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>false</td>
              <td style={td}>
                <PaginationItem>1</PaginationItem>
              </td>
              <td style={td}>
                <PaginationItem disabled>1</PaginationItem>
              </td>
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>true</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <PaginationItem current>1</PaginationItem>
              </td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <PaginationItem current disabled>
                  1
                </PaginationItem>
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
          'Solo como dependencia de un grupo. Current y State son independientes; la exclusividad la administra el contenedor (Pagination).',
      },
    },
  },
  render: () => {
    const [page, setPage] = useState(2)
    const pages = [1, 2, 3, 4, 5]

    return (
      <nav aria-label="Paginación" style={{ display: 'flex', gap: 4 }}>
        {pages.map((value) => (
          <PaginationItem
            key={value}
            current={page === value}
            onClick={() => setPage(value)}
          >
            {value}
          </PaginationItem>
        ))}
      </nav>
    )
  },
}
