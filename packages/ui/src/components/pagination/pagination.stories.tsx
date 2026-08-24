import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PaginationItem } from '../pagination-item'
import { Pagination } from './pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Paginación: IconButton tertiary md (prev/next) y SLOT nativo de PaginationItem. ',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description:
        'SLOT nativo: instancias reales de PaginationItem. Cantidad y current los aporta la composición.',
      table: { type: { summary: 'ReactNode' } },
    },
    previousDisabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    nextDisabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    previousDisabled: false,
    nextDisabled: false,
  },
  render: (args) => (
    <Pagination {...args}>
      <PaginationItem>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem current>3</PaginationItem>
      <PaginationItem disabled>…</PaginationItem>
      <PaginationItem>10</PaginationItem>
    </Pagination>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          '',
      },
      source: {
        code: `<Pagination>
  <PaginationItem>1</PaginationItem>
  <PaginationItem>2</PaginationItem>
  <PaginationItem current>3</PaginationItem>
  <PaginationItem disabled>…</PaginationItem>
  <PaginationItem>10</PaginationItem>
</Pagination>`,
      },
    },
  },
  render: () => (
    <Pagination>
      <PaginationItem>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem current>3</PaginationItem>
      <PaginationItem disabled>…</PaginationItem>
      <PaginationItem>10</PaginationItem>
    </Pagination>
  ),
}

export const FirstPage: Story = {
  name: 'Primera página',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Pagination previousDisabled>
  <PaginationItem current>1</PaginationItem>
  <PaginationItem>2</PaginationItem>
  <PaginationItem>3</PaginationItem>
</Pagination>`,
      },
    },
  },
  render: () => (
    <Pagination previousDisabled>
      <PaginationItem current>1</PaginationItem>
      <PaginationItem>2</PaginationItem>
      <PaginationItem>3</PaginationItem>
    </Pagination>
  ),
}

export const LastPage: Story = {
  name: 'Última página',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Pagination nextDisabled>
  <PaginationItem>8</PaginationItem>
  <PaginationItem>9</PaginationItem>
  <PaginationItem current>10</PaginationItem>
</Pagination>`,
      },
    },
  },
  render: () => (
    <Pagination nextDisabled>
      <PaginationItem>8</PaginationItem>
      <PaginationItem>9</PaginationItem>
      <PaginationItem current>10</PaginationItem>
    </Pagination>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const total = 10
    const [page, setPage] = useState(3)
    const pages = [1, 2, 3, '…', 10] as const

    return (
      <Pagination
        previousDisabled={page === 1}
        nextDisabled={page === total}
        onPrevious={() => setPage((value) => Math.max(1, value - 1))}
        onNext={() => setPage((value) => Math.min(total, value + 1))}
      >
        {pages.map((value) =>
          value === '…' ? (
            <PaginationItem key="ellipsis" disabled>
              …
            </PaginationItem>
          ) : (
            <PaginationItem
              key={value}
              current={page === value}
              onClick={() => setPage(value)}
            >
              {value}
            </PaginationItem>
          ),
        )}
      </Pagination>
    )
  },
}
