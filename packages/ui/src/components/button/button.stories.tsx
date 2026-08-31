import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { ArrowRightIcon, ShoppingBagIcon } from '@workspace/ui/icons'

const meta: Meta<typeof Button> = {
  title: 'Components/Actions/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Componente de acción principal. ',
      },
    },
  },
  argTypes: {
    hierarchy: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      description: 'Jerarquía por intención y prominencia: primary | secondary | tertiary | destructive',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size scale coordinado (altura, tipografía, padding, gap, ícono)',
      table: { defaultValue: { summary: 'md' } },
    },
    tone: {
      control: 'select',
      options: ['standard', 'inverse'],
      description: 'inverse solo con primary y secondary (superficies oscuras)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'standard' },
      },
    },
    label: {
      control: 'text',
      description: 'Label del botón',
      table: { type: { summary: 'string' } },
    },
    leftIcon: {
      control: false,
      description: 'Ícono a la izquierda del label',
    },
    rightIcon: {
      control: false,
      description: 'Ícono a la derecha del label',
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carga; conserva el layout del botón',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    hierarchy: 'primary',
    tone: 'standard',
    size: 'md',
    disabled: false,
    loading: false,
    label: 'Button',
  },
}

export default meta
type Story = StoryObj<typeof Button>

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
  { value: 'lg', sizeLabel: 'Large' },
] as const

type Hierarchy = 'primary' | 'secondary' | 'tertiary' | 'destructive'
type Size = (typeof SIZES)[number]['value']

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

const th: React.CSSProperties = {
  fontFamily: 'monospace',
  fontSize: 11,
  color: '#888',
  fontWeight: 600,
  textAlign: 'left',
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
  textAlign: 'left',
  verticalAlign: 'middle',
  padding: '16px 20px',
  borderBottom: '1px solid #f0f0f0',
}

export const Playground: Story = {}

export const Primary: Story = {
  parameters: showCode,
  args: { hierarchy: 'primary', label: 'Button' },
}

export const Secondary: Story = {
  parameters: showCode,
  args: { hierarchy: 'secondary', label: 'Button' },
}

export const Tertiary: Story = {
  parameters: showCode,
  args: { hierarchy: 'tertiary', label: 'Button' },
}

export const Destructive: Story = {
  parameters: showCode,
  args: { hierarchy: 'destructive', label: 'Button' },
}

export const PrimaryInverse: Story = {
  name: 'Primary inverse',
  parameters: showCode,
  args: { hierarchy: 'primary', tone: 'inverse', label: 'Button' },
  decorators: [
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
  ],
}

export const SecondaryInverse: Story = {
  name: 'Secondary inverse',
  parameters: showCode,
  args: { hierarchy: 'secondary', tone: 'inverse', label: 'Button' },
  decorators: [
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
  ],
}

export const WithLeftIcon: Story = {
  name: 'Left icon',
  parameters: showCode,
  args: { label: 'Button', leftIcon: <ShoppingBagIcon /> },
}

export const WithRightIcon: Story = {
  name: 'Right icon',
  parameters: showCode,
  args: { label: 'Button', rightIcon: <ArrowRightIcon /> },
}

export const WithIcons: Story = {
  name: 'Icons both',
  parameters: showCode,
  args: {
    label: 'Button',
    leftIcon: <ShoppingBagIcon />,
    rightIcon: <ArrowRightIcon />,
  },
}

export const Loading: Story = {
  parameters: showCode,
  args: { label: 'Button', loading: true },
}

export const Disabled: Story = {
  parameters: showCode,
  args: { label: 'Button', disabled: true },
}

function HierarchyTable({
  hierarchy,
  tone = 'standard',
  inverse = false,
}: {
  hierarchy: Hierarchy
  tone?: 'standard' | 'inverse'
  inverse?: boolean
}) {
  const headerStyle: React.CSSProperties = inverse
    ? { ...th, color: 'rgba(255,255,255,0.7)', borderBottomColor: 'rgba(255,255,255,0.15)' }
    : th
  const labelStyle: React.CSSProperties = inverse
    ? { ...rowLabel, color: 'rgba(255,255,255,0.7)', borderBottomColor: 'rgba(255,255,255,0.1)' }
    : rowLabel
  const cellStyle: React.CSSProperties = inverse
    ? { ...td, borderBottomColor: 'rgba(255,255,255,0.1)' }
    : td

  const rows: { label: string; render: (size: Size) => React.ReactNode }[] = [
    {
      label: 'Default',
      render: (size) => (
        <Button hierarchy={hierarchy} tone={tone} size={size} label="Button" />
      ),
    },
    {
      label: 'Disabled',
      render: (size) => (
        <Button hierarchy={hierarchy} tone={tone} size={size} label="Button" disabled />
      ),
    },
    {
      label: 'Loading',
      render: (size) => (
        <Button hierarchy={hierarchy} tone={tone} size={size} label="Button" loading />
      ),
    },
    {
      label: 'Icons',
      render: (size) => (
        <Button
          hierarchy={hierarchy}
          tone={tone}
          size={size}
          label="Button"
          leftIcon={<ShoppingBagIcon />}
          rightIcon={<ArrowRightIcon />}
        />
      ),
    },
  ]

  return (
    <table style={{ borderCollapse: 'collapse', marginBottom: 8 }}>
      <thead>
        <tr>
          <th style={{ ...headerStyle, textAlign: 'left', paddingLeft: 0 }} />
          {SIZES.map(({ value, sizeLabel }) => (
            <th key={value} style={headerStyle}>
              {sizeLabel}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ label, render }) => (
          <tr key={label}>
            <td style={labelStyle}>{label}</td>
            {SIZES.map(({ value }) => (
              <td key={value} style={cellStyle}>
                {render(value)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}


export const AllVariants: Story = {
  name: 'Hierarchy & states',
  parameters: hideCode,
  render: () => (
    <div style={{ padding: 8 }}>
  
      <h2 style={{ fontFamily: 'sans-serif', marginBottom: 12 }}>Primary</h2>
      <HierarchyTable hierarchy="primary" />

      <h2 style={{ fontFamily: 'sans-serif', margin: '32px 0 12px' }}>Primary — tone inverse</h2>
      <div
        style={{
          background: 'var(--color-surface-brand-strong, #231f20)',
          padding: 24,
          borderRadius: 8,
          marginBottom: 8,
        }}
      >
        <HierarchyTable hierarchy="primary" tone="inverse" inverse />
      </div>

      <h2 style={{ fontFamily: 'sans-serif', margin: '32px 0 12px' }}>Secondary</h2>
      <HierarchyTable hierarchy="secondary" />

      <h2 style={{ fontFamily: 'sans-serif', margin: '32px 0 12px' }}>Secondary — tone inverse</h2>
      <div
        style={{
          background: 'var(--color-surface-brand-strong, #231f20)',
          padding: 24,
          borderRadius: 8,
          marginBottom: 8,
        }}
      >
        <HierarchyTable hierarchy="secondary" tone="inverse" inverse />
      </div>

      <h2 style={{ fontFamily: 'sans-serif', margin: '32px 0 12px' }}>Tertiary</h2>
      <HierarchyTable hierarchy="tertiary" />

      <h2 style={{ fontFamily: 'sans-serif', margin: '32px 0 12px' }}>Destructive</h2>
      <HierarchyTable hierarchy="destructive" />
    </div>
  ),
}

/** Uso mínimo: hierarchy por intención (tertiary de apoyo + primary principal). */
export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => (
    <div
      style={{
        fontFamily: 'sans-serif',
        maxWidth: 400,
        padding: 24,
        border: '1px solid #e5e5e5',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div>
        <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>Publicar cambios</h3>
        <p style={{ margin: 0, fontSize: 13, color: '#666', lineHeight: 1.4 }}>
          Los cambios serán visibles para todos los usuarios del curso.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-start' }}>
        <Button hierarchy="tertiary" label="Cancelar" />
        <Button hierarchy="primary" label="Publicar" />
      </div>
    </div>
  ),
}
