import type { Meta, StoryObj } from '@storybook/react'
import { CounterBadge } from './counter-badge'

const meta: Meta<typeof CounterBadge> = {
  title: 'Components/Labels & Status/CounterBadge',
  component: CounterBadge,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Indicador numérico compacto y no interactivo asociado a otro elemento. Comunica cantidad; no sustituye Status, Badge textual ni un control.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size: sm · md',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'sm' },
      },
    },
    emphasis: {
      control: 'select',
      options: ['neutral', 'attention', 'inverse'],
      description:
        'neutral informa · attention destaca novedad/pendiente · inverse solo contraste contextual',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'neutral' },
      },
    },
    value: {
      control: 'text',
      description:
        'Texto breve ya resuelto por el consumidor ("1", "9", "24", "99+").',
      table: { type: { summary: 'string' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof CounterBadge>

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
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

const inverseDecorator: Story['decorators'] = [
  (Story) => (
    <div
      style={{
        background: 'var(--color-surface-brand-strong, #231f20)',
        padding: 24,
        borderRadius: 8,
        display: 'inline-block',
      }}
    >
      <Story />
    </div>
  ),
]

export const Playground: Story = {
  args: { size: 'sm', emphasis: 'neutral', value: '3' },
}

export const Neutral: Story = {
  parameters: showCode,
  args: { size: 'sm', emphasis: 'neutral', value: '3' },
}

export const Attention: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story: 'Attention destaca elementos nuevos o no revisados, no severidad ni prioridad de marca.',
      },
    },
  },
  args: { size: 'sm', emphasis: 'attention', value: '3' },
}

export const Inverse: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story: 'Inverse solo resuelve contraste contextual, no prioridad.',
      },
    },
  },
  decorators: inverseDecorator,
  args: { size: 'sm', emphasis: 'inverse', value: '3' },
}

export const SizeMd: Story = {
  name: 'Size md',
  parameters: showCode,
  args: { size: 'md', emphasis: 'neutral', value: '24' },
}

/**
 * Limitar el máximo es del patrón consumidor. CounterBadge solo recibe el value resuelto.
 */
export const MaxOverflow: Story = {
  name: 'Valor máximo',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      description: {
        story:
          'El consumidor define el tope (99, 9, 999…). CounterBadge no conoce max: solo pinta el string resuelto.',
      },
      source: {
        code: `// Ejemplo de implementación en el consumidor 
  function formatCounterValue(count: number, max: number): string {
  return count > max ? \`\${max}+\` : String(count)
}

const count = 120
const max = 99 // ejemplo; puede ser 9, 99, 999, etc.

<CounterBadge
  size="sm"
  emphasis="attention"
  value={formatCounterValue(count, max)}
/>`,
      },
    },
  },
  render: () => {
    function formatCounterValue(count: number, max: number): string {
      return count > max ? `${max}+` : String(count)
    }

    const count = 120
    const max = 99

    return (
      <CounterBadge
        size="sm"
        emphasis="attention"
        value={formatCounterValue(count, max)}
      />
    )
  },
}

export const AllVariants: Story = {
  name: 'Emphasis & size',
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
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>Emphasis</th>
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Neutral</td>
              {SIZES.map(({ value }) => (
                <td key={value} style={td}>
                  <CounterBadge size={value} emphasis="neutral" value="3" />
                </td>
              ))}
            </tr>
            <tr>
              <td style={rowLabel}>Attention</td>
              {SIZES.map(({ value }) => (
                <td key={value} style={td}>
                  <CounterBadge size={value} emphasis="attention" value="3" />
                </td>
              ))}
            </tr>
            <tr>
              <td style={rowLabel}>Inverse</td>
              {SIZES.map(({ value }) => (
                <td key={value} style={td}>
                  <div
                    style={{
                      background: 'var(--color-surface-brand-strong, #231f20)',
                      padding: 12,
                      borderRadius: 8,
                      display: 'inline-flex',
                    }}
                  >
                    <CounterBadge size={value} emphasis="inverse" value="3" />
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}


export const NumericContent: Story = {
  name: 'Numeric content',
  parameters: hideCode,
  render: () => {
    const unread = 120
    const samples = [
      { value: '1', caption: '1' },
      { value: '9', caption: '9' },
      { value: '24', caption: '24' },
      // consumidor: unread > 99 ? '99+' : String(unread)
      { value: unread > 99 ? '99+' : String(unread), caption: '99+ (consumidor)' },
    ] as const

    return (
      <div style={{ padding: 8 }}>
  
        <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end', flexWrap: 'wrap' }}>
          {samples.map(({ value, caption }) => (
            <div key={caption} style={{ textAlign: 'center' }}>
              <CounterBadge size="sm" emphasis="neutral" value={value} />
              <div
                style={{
                  fontFamily: 'monospace',
                  fontSize: 10,
                  color: '#aaa',
                  marginTop: 6,
                }}
              >
                {caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  },
}

/** Uso mínimo: cantidad asociada a un control; accessible name en el consumidor. */
export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const unread = 7

    return (
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          fontFamily: 'sans-serif',
          padding: '12px 20px',
          borderBottom: '1px solid #e5e5e5',
          background: '#fff',
          maxWidth: 720,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em' }}>Tec DS</span>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: 14, color: '#444' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Inicio
          </a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            Cursos
          </a>
        </nav>
        <button
          type="button"
          aria-label={`Notificaciones, ${unread} sin leer`}
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            padding: 0,
            border: 'none',
            borderRadius: 8,
            background: 'transparent',
            color: '#333',
            cursor: 'pointer',
          }}
        >
          <BellIcon />
          {unread > 0 && (
            <span style={{ position: 'absolute', top: 2, right: 2 }}>
              <CounterBadge size="sm" emphasis="attention" value={String(unread)} />
            </span>
          )}
        </button>
      </header>
    )
  },
}

function BellIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-5V11a7 7 0 1 0-14 0v6l-2 2v1h18v-1l-2-2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  )
}
