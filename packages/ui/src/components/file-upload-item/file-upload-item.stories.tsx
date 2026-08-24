import type { Meta, StoryObj } from '@storybook/react'
import {
  FileUploadItem,
  type FileUploadItemStatus,
  type FileUploadItemTone,
} from './file-upload-item'

type FileUploadItemStoryArgs = {
  status: FileUploadItemStatus
  tone: FileUploadItemTone
  primaryText: string
  secondaryText: string
  actionLabel: string
  progress: number
}

const meta = {
  title: 'Components/Internal Building Blocks/FileUploadItem',
  component: FileUploadItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Ítem de archivo: selected | uploading | success | error × standard | inverse. ',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['selected', 'uploading', 'success', 'error'],
      table: { defaultValue: { summary: 'selected' } },
    },
    tone: {
      control: 'radio',
      options: ['standard', 'inverse'],
      table: { defaultValue: { summary: 'standard' } },
    },
    primaryText: { control: 'text' },
    secondaryText: { control: 'text' },
    actionLabel: { control: 'text' },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Solo aplica en uploading',
    },
  },
} satisfies Meta<FileUploadItemStoryArgs>

export default meta
type Story = StoryObj<FileUploadItemStoryArgs>

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

function Specimen(args: Partial<FileUploadItemStoryArgs>) {
  return (
    <FileUploadItem
      status={args.status}
      tone={args.tone}
      primaryText={args.primaryText ?? 'syllabus.pdf'}
      secondaryText={args.secondaryText ?? '240 KB'}
      actionLabel={args.actionLabel ?? 'Eliminar'}
      progress={args.progress}
    />
  )
}

export const Playground: Story = {
  args: {
    status: 'selected',
    tone: 'standard',
    primaryText: 'syllabus.pdf',
    secondaryText: '240 KB',
    actionLabel: 'Eliminar',
    progress: 50,
  },
  render: (args) => <Specimen {...args} />,
}

export const Default: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUploadItem
  primaryText="syllabus.pdf"
  secondaryText="240 KB"
  actionLabel="Eliminar"
/>`,
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
        code: `<FileUploadItem
  tone="inverse"
  primaryText="syllabus.pdf"
  secondaryText="240 KB"
  actionLabel="Eliminar"
/>`,
      },
    },
    backgrounds: { default: 'dark' },
  },
  decorators: inverseDecorator,
  render: () => <Specimen tone="inverse" />,
}

export const Uploading: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUploadItem
  status="uploading"
  progress={50}
  primaryText="syllabus.pdf"
  secondaryText="Subiendo · 50%"
  actionLabel="Cancelar"
/>`,
      },
    },
  },
  render: () => (
    <Specimen
      status="uploading"
      progress={50}
      secondaryText="Subiendo · 50%"
      actionLabel="Cancelar"
    />
  ),
}

export const Success: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUploadItem
  status="success"
  primaryText="syllabus.pdf"
  secondaryText="Carga completa"
  actionLabel="Eliminar"
/>`,
      },
    },
  },
  render: () => (
    <Specimen status="success" secondaryText="Carga completa" actionLabel="Eliminar" />
  ),
}

export const Error: Story = {
  parameters: {
    ...showCode,
    docs: {
      ...showCode.docs,
      source: {
        code: `<FileUploadItem
  status="error"
  primaryText="syllabus.pdf"
  secondaryText="No se pudo cargar"
  actionLabel="Reintentar"
/>`,
      },
    },
  },
  render: () => (
    <Specimen status="error" secondaryText="No se pudo cargar" actionLabel="Reintentar" />
  ),
}

export const AllStates: Story = {
  name: 'States & tones',
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
      textAlign: 'left',
      verticalAlign: 'middle',
      padding: '16px',
      borderBottom: '1px solid #f0f0f0',
    }
    const tdInverse: React.CSSProperties = {
      ...td,
      background: 'var(--color-surface-brand-strong, #231f20)',
    }

    const rows: Array<{
      label: string
      status: FileUploadItemStatus
      secondaryText: string
      actionLabel: string
    }> = [
      { label: 'Selected', status: 'selected', secondaryText: '240 KB', actionLabel: 'Eliminar' },
      { label: 'Uploading', status: 'uploading', secondaryText: 'Subiendo · 50%', actionLabel: 'Cancelar' },
      { label: 'Success', status: 'success', secondaryText: 'Carga completa', actionLabel: 'Eliminar' },
      { label: 'Error', status: 'error', secondaryText: 'No se pudo cargar', actionLabel: 'Reintentar' },
    ]

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>State</th>
              <th style={th}>Standard</th>
              <th style={th}>Inverse</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.status}>
                <td style={rowLabel}>{row.label}</td>
                <td style={td}>
                  <FileUploadItem
                    status={row.status}
                    primaryText="syllabus.pdf"
                    secondaryText={row.secondaryText}
                    actionLabel={row.actionLabel}
                    progress={row.status === 'uploading' ? 50 : undefined}
                  />
                </td>
                <td style={tdInverse}>
                  <FileUploadItem
                    status={row.status}
                    tone="inverse"
                    primaryText="syllabus.pdf"
                    secondaryText={row.secondaryText}
                    actionLabel={row.actionLabel}
                    progress={row.status === 'uploading' ? 50 : undefined}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },
}
