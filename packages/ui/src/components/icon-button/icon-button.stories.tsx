import type { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './icon-button'
import { CaretDownIcon, ShoppingBagIcon } from '@workspace/ui/icons'

const meta: Meta<typeof IconButton> = {
  title: 'Components/Actions/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Acción únicamente icónica. Reutiliza la receta Primary de Button; la identidad se resuelve con Semantic modes. Hierarchy no es configurable. `aria-label` es obligatorio. Nota: tone=standard (gradiente + ícono claro) tiene un riesgo de contraste pendiente de revisión en TEC 360.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size: sm · md · lg',
      table: { 
        type: { summary: 'string' },
        defaultValue: { summary: 'md' }
       },
    },
    tone: {
      control: 'select',
      options: ['standard', 'inverse'],
      description: 'standard sobre superficies claras · inverse sobre oscuras / brand',
      table: { 
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' }
       },
    },
    loading: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible label obligatorio',
    },
    icon: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
  { value: 'lg', sizeLabel: 'Large' },
] as const

const showCode = {
  docs: {
    canvas: { sourceState: 'shown' as const },
  },
}

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    tone: 'standard',
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito',
  },
}

export const Standard: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<IconButton
  tone="standard"
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
/>`,
      },
    },
  },
  args: {
    tone: 'standard',
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito',
  },
}

export const Inverse: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<IconButton
  tone="inverse"
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  args: {
    tone: 'inverse',
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'var(--color-surface-brand-strong, #231f20)',
          padding: 24,
          borderRadius: 8,
          display: 'inline-flex',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Disabled: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<IconButton
  icon={<ShoppingBagIcon />}
  aria-label="Favorito"
  disabled
/>`,
      },
    },
  },
  args: {
    icon: <ShoppingBagIcon />,
    'aria-label': 'Favorito',
    disabled: true,
  },
}

export const Loading: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<IconButton
  icon={<ShoppingBagIcon />}
  aria-label="Cargando"
  loading
/>`,
      },
    },
  },
  args: {
    icon: <ShoppingBagIcon />,
    'aria-label': 'Cargando',
    loading: true,
  },
}

export const ToneAndSize: Story = {
  name: 'Tone & size',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'center',
      padding: '0 20px 12px',
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
      padding: '16px 20px',
      borderBottom: '1px solid #f0f0f0',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Tone</th>
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Standard</td>
              {SIZES.map(({ value }) => (
                <td key={value} style={td}>
                  <IconButton size={value} tone="standard" icon={<ShoppingBagIcon />} aria-label="Favorito" />
                </td>
              ))}
            </tr>
            <tr>
              <td style={rowLabel}>Inverse</td>
              {SIZES.map(({ value }) => (
                <td
                  key={value}
                  style={{
                    ...td,
                    background: 'var(--color-surface-brand-strong, #231f20)',
                  }}
                >
                  <IconButton size={value} tone="inverse" icon={<ShoppingBagIcon />} aria-label="Favorito" />
                </td>
              ))}
            </tr>
            <tr>
              <td style={{ ...rowLabel, borderBottom: 'none' }}>Disabled</td>
              {SIZES.map(({ value }) => (
                <td key={value} style={{ ...td, borderBottom: 'none' }}>
                  <IconButton
                    size={value}
                    tone="standard"
                    icon={<ShoppingBagIcon />}
                    aria-label="Favorito"
                    disabled
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        fontFamily: 'sans-serif',
        padding: '10px 20px',
        borderBottom: '1px solid #e5e5e5',
        background: '#fff',
        maxWidth: 720,
      }}
    >
      <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em' }}>Tec DS</span>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <a href="#" style={{ fontSize: 14, color: '#444', textDecoration: 'none', marginRight: 8 }}>
          Catálogo
        </a>
        <IconButton size="sm" icon={<ShoppingBagIcon />} aria-label="Carrito" />
        <IconButton size="sm" icon={<CaretDownIcon />} aria-label="Abrir menú" />
      </nav>
    </header>
  ),
}
