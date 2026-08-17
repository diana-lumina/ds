import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { InputChip } from './input-chip'
import { ShoppingBagIcon } from '@workspace/ui/icons'

type InputChipStoryArgs = Omit<React.ComponentProps<typeof InputChip>, 'icon' | 'onClose'> & {
  /** Leading icon visible — el close es estructural y siempre está presente. */
  showLeadingIcon: boolean
}

const meta = {
  title: 'Components/Labels & Status/InputChip',
  component: InputChip as unknown as React.ComponentType<InputChipStoryArgs>,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Valor introducido o aplicado que puede eliminarse. Close estructural y siempre visible; Leading icon opcional. No expresa selección, clasificación ni condición del sistema.',
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
        defaultValue: { summary: 'sm' }
       },
    },
    label: {
      control: 'text',
      description: 'Label (string editable)',
    },
    showLeadingIcon: {
      control: 'boolean',
      description: 'Leading icon visible (opcional; instance swap vía prop icon)',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled: no interacción ni remoción; close sigue visible',
      table: { defaultValue: { summary: 'false' } },
    },
    closeLabel: {
      control: 'text',
      description: 'aria-label del close (default: Eliminar {label})',
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
} satisfies Meta<InputChipStoryArgs>

export default meta
type Story = StoryObj<InputChipStoryArgs>

const SIZES = [
  { value: 'sm', sizeLabel: 'Small' },
  { value: 'md', sizeLabel: 'Medium' },
] as const

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    size: 'sm',
    label: 'Valor aplicado',
    disabled: false,
    showLeadingIcon: false,
  },
  render: ({ showLeadingIcon, ...args }) => (
    <InputChip
      {...args}
      icon={showLeadingIcon ? <ShoppingBagIcon /> : undefined}
      onClose={() => {}}
    />
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<InputChip label="Valor aplicado" onClose={() => {}} />`,
      },
    },
  },
  render: () => <InputChip label="Valor aplicado" onClose={() => {}} />,
}

export const WithLeadingIcon: Story = {
  name: 'Leading icon',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<InputChip
  label="Valor aplicado"
  icon={<ShoppingBagIcon />}
  onClose={() => {}}
/>`,
      },
    },
  },
  render: () => (
    <InputChip label="Valor aplicado" icon={<ShoppingBagIcon />} onClose={() => {}} />
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<InputChip label="Valor aplicado" onClose={() => {}} disabled />`,
      },
    },
  },
  render: () => <InputChip label="Valor aplicado" onClose={() => {}} disabled />,
}

export const AllStates: Story = {
  name: 'Size & states',
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

    const rows = [
      {
        label: 'Default',
        render: (size: 'sm' | 'md') => (
          <InputChip size={size} label="Valor aplicado" onClose={() => {}} />
        ),
      },
      {
        label: 'Leading icon',
        render: (size: 'sm' | 'md') => (
          <InputChip
            size={size}
            label="Valor aplicado"
            icon={<ShoppingBagIcon />}
            onClose={() => {}}
          />
        ),
      },
      {
        label: 'Disabled',
        render: (size: 'sm' | 'md') => (
          <InputChip size={size} label="Valor aplicado" onClose={() => {}} disabled />
        ),
      },
      {
        label: 'Icon + disabled',
        render: (size: 'sm' | 'md') => (
          <InputChip
            size={size}
            label="Valor aplicado"
            icon={<ShoppingBagIcon />}
            onClose={() => {}}
            disabled
          />
        ),
      },
    ] as const

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: 'left', paddingLeft: 0 }}>State</th>
              {SIZES.map(({ value, sizeLabel }) => (
                <th key={value} style={th}>
                  {sizeLabel}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ label, render }) => (
              <tr key={label}>
                <td style={rowLabel}>{label}</td>
                {SIZES.map(({ value }) => (
                  <td key={value} style={td}>
                    {render(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [values, setValues] = React.useState(['UX Research', 'Producto', 'Figma'])

    return (
      <div
        style={{
          fontFamily: 'sans-serif',
          maxWidth: 420,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <label style={{ fontSize: 13, color: '#666' }}>Valores aplicados</label>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            padding: 12,
            border: '1px solid #e5e5e5',
            borderRadius: 8,
            minHeight: 48,
            alignItems: 'center',
          }}
        >
          {values.map((value) => (
            <InputChip
              key={value}
              size="sm"
              label={value}
              onClose={() => setValues((prev) => prev.filter((v) => v !== value))}
            />
          ))}
          {values.length === 0 && (
            <span style={{ fontSize: 13, color: '#999' }}>Sin valores</span>
          )}
        </div>
      </div>
    )
  },
}
