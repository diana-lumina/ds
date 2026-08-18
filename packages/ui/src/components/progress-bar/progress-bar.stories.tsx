import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './progress-bar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Feedback/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Progreso con label y dato numérico (porcentaje o fracción).',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label visible',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progreso actual',
      table: { defaultValue: { summary: '0' } },
    },
    max: {
      control: 'number',
      description: 'Valor máximo',
      table: { defaultValue: { summary: '100' } },
    },
    valueFormat: {
      control: 'radio',
      options: ['percent', 'fraction'],
      description: 'Formato del dato junto a la barra',
      table: { defaultValue: { summary: 'percent' } },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressBar>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const frame: React.CSSProperties = { maxWidth: 360 }

export const Playground: Story = {
  args: {
    label: 'Carga de documentos',
    value: 40,
    max: 100,
    valueFormat: 'percent',
  },
  render: (args) => (
    <div style={frame}>
      <ProgressBar {...args} />
    </div>
  ),
}

export const Percent: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ProgressBar
  label="Carga de documentos"
  value={40}
/>`,
      },
    },
  },
  render: () => (
    <div style={frame}>
      <ProgressBar label="Carga de documentos" value={40} />
    </div>
  ),
}

export const Fraction: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ProgressBar
  label="Carga de documentos"
  value={2}
  max={5}
  valueFormat="fraction"
/>`,
      },
    },
  },
  render: () => (
    <div style={frame}>
      <ProgressBar
        label="Carga de documentos"
        value={2}
        max={5}
        valueFormat="fraction"
      />
    </div>
  ),
}

export const AllFormats: Story = {
  name: 'Formats',
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
    const rowLabel: React.CSSProperties = {
      fontFamily: 'monospace',
      fontSize: 11,
      color: '#888',
      fontWeight: 600,
      textAlign: 'left',
      verticalAlign: 'top',
      padding: '16px 24px 16px 0',
      borderBottom: '1px solid #f0f0f0',
      whiteSpace: 'nowrap',
    }
    const td: React.CSSProperties = {
      verticalAlign: 'middle',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
      minWidth: 280,
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>Format</th>
              <th style={th}>ProgressBar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>Percent</td>
              <td style={td}>
                <ProgressBar label="Carga de documentos" value={40} />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>Fraction</td>
              <td style={td}>
                <ProgressBar
                  label="Carga de documentos"
                  value={2}
                  max={5}
                  valueFormat="fraction"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
