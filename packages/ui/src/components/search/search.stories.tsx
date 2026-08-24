import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Search, type SearchAppearance, type SearchTone } from './search'

type SearchStoryArgs = {
  appearance: SearchAppearance
  tone: SearchTone
  error: boolean
  disabled: boolean
  placeholder: string
}

const meta = {
  title: 'Components/Inputs/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Campo de búsqueda compuesto sobre TextInput. Appearances outlined y underline; tones standard e inverse. Lupa leading fija; clear trailing cuando hay valor.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: 'radio',
      options: ['outlined', 'underline'],
      description: 'outlined (caja) o underline',
      table: { defaultValue: { summary: 'outlined' } },
    },
    tone: {
      control: 'radio',
      options: ['standard', 'inverse'],
      description: 'standard sobre superficies claras · inverse sobre oscuras / brand',
      table: { defaultValue: { summary: 'standard' } },
    },
    error: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<SearchStoryArgs>

export default meta
type Story = StoryObj<SearchStoryArgs>

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

const fieldFrame: React.CSSProperties = { maxWidth: 360 }

function Specimen({
  appearance = 'outlined',
  tone = 'standard',
  error = false,
  disabled = false,
  placeholder = 'Buscar',
  defaultValue,
}: Partial<SearchStoryArgs> & { defaultValue?: string }) {
  return (
    <div style={fieldFrame}>
      <Search
        appearance={appearance}
        tone={tone}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        defaultValue={defaultValue}
        aria-label="Buscar"
      />
    </div>
  )
}

const inverseDecorator: Story['decorators'] = [
  (Story) => (
    <div
      style={{
        background: 'var(--color-surface-brand-strong, #231f20)',
        padding: 24,
        borderRadius: 8,
        display: 'inline-block',
        minWidth: 360,
      }}
    >
      <Story />
    </div>
  ),
]

export const Playground: Story = {
  args: {
    appearance: 'outlined',
    tone: 'standard',
    error: false,
    disabled: false,
    placeholder: 'Buscar',
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<Search aria-label="Buscar" placeholder="Buscar" />`,
      },
    },
  },
  render: () => <Specimen />,
}

export const Inverse: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<Search tone="inverse" aria-label="Buscar" placeholder="Buscar" />`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />,
}

export const Underline: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<Search appearance="underline" aria-label="Buscar" placeholder="Buscar" />`,
      },
    },
  },
  render: () => <Specimen appearance="underline" />,
}

export const WithValue: Story = {
  name: 'Con valor (clear)',
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<Search aria-label="Buscar" defaultValue="campus" />`,
      },
    },
  },
  render: () => <Specimen defaultValue="campus" />,
}

export const Disabled: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<Search aria-label="Buscar" disabled />`,
      },
    },
  },
  render: () => <Specimen disabled />,
}

export const AllAppearances: Story = {
  name: 'Appearances & tones',
  parameters: hideCode,
  render: () => {
    const th: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      padding: '0 16px 12px',
      borderBottom: '1px solid #eee',
    }
    const td: React.CSSProperties = {
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 260,
    }
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={th}> </th>
              <th style={th}>Standard</th>
              <th style={th}>Inverse</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ ...th, paddingTop: 16 }}>Outlined</td>
              <td style={td}>
                <Specimen appearance="outlined" defaultValue="campus" />
              </td>
              <td style={tdInverse}>
                <Specimen appearance="outlined" tone="inverse" defaultValue="campus" />
              </td>
            </tr>
            <tr>
              <td style={th}>Outlined disabled</td>
              <td style={td}>
                <Specimen appearance="outlined" defaultValue="campus" disabled />
              </td>
              <td style={tdInverse}>
                <Specimen appearance="outlined" tone="inverse" defaultValue="campus" disabled />
              </td>
            </tr>
            <tr>
              <td style={th}>Underline</td>
              <td style={td}>
                <Specimen appearance="underline" defaultValue="campus" />
              </td>
              <td style={tdInverse}>
                <Specimen appearance="underline" tone="inverse" defaultValue="campus" />
              </td>
            </tr>
            <tr>
              <td style={{ ...th, borderBottom: 'none' }}>Underline disabled</td>
              <td style={{ ...td, borderBottom: 'none' }}>
                <Specimen appearance="underline" defaultValue="campus" disabled />
              </td>
              <td style={{ ...tdInverse, borderBottom: 'none' }}>
                <Specimen appearance="underline" tone="inverse" defaultValue="campus" disabled />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
