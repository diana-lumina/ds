import type { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import * as Icons from '@workspace/ui/icons'
import type { IconProps } from '@workspace/ui/icons'

type CatalogIcon = (props: IconProps) => ReactNode

const catalog: Array<[string, CatalogIcon]> = []
for (const [name, value] of Object.entries(Icons)) {
  if (name.endsWith('Icon') && name !== 'LoadingIcon' && typeof value === 'function') {
    catalog.push([name, value as CatalogIcon])
  }
}

const meta = {
  title: 'Foundations/Icons',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Catálogo público de `@workspace/ui/icons`. Decorative (`aria-hidden`). Size via `size` or CSS on the parent.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Catalog: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 20,
      }}
    >
      {catalog.map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            padding: '16px 12px',
            border: '1px solid var(--border-default)',
            borderRadius: 8,
            color: 'var(--text-primary)',
            minWidth: 0,
          }}
        >
          <Icon size={24} />
          <code
            style={{
              fontSize: 11,
              lineHeight: 1.35,
              textAlign: 'center',
              overflowWrap: 'anywhere',
              wordBreak: 'break-word',
              maxWidth: '100%',
            }}
          >
            {name}
          </code>
        </div>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, color: 'var(--text-primary)' }}>
      <Icons.ShoppingBagIcon size={16} />
      <Icons.ShoppingBagIcon size={20} />
      <Icons.ShoppingBagIcon size={24} />
      <Icons.ShoppingBagIcon size={32} />
    </div>
  ),
}
