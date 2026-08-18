import type { Meta, StoryObj } from '@storybook/react'
import {
  CheckCircleIcon,
  FolderSimpleIcon,
  WarningCircleIcon,
} from '@workspace/ui/icons'
import { Button } from '../button'
import { EmptyState } from './empty-state'

const meta: Meta<typeof EmptyState> = {
  title: 'Components/Feedback/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Estado vacío, de error o de éxito: visual, título, supporting message y acción primaria opcional.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['empty', 'error', 'success'],
      description: 'empty · error · success',
      table: { defaultValue: { summary: 'empty' } },
    },
    title: { control: 'text' },
    message: { control: 'text' },
    icon: { control: false },
    action: { control: false },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof EmptyState>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    type: 'empty',
    title: 'Sin resultados',
    message: 'Intenta con otra búsqueda o limpia los filtros.',
  },
  render: (args) => <EmptyState {...args} icon={<FolderSimpleIcon />} />,
}

export const Empty: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<EmptyState
  type="empty"
  title="Sin resultados"
  message="Intenta con otra búsqueda o limpia los filtros."
  icon={<FolderSimpleIcon />}
/>`,
      },
    },
  },
  render: () => (
    <EmptyState
      type="empty"
      title="Sin resultados"
      message="Intenta con otra búsqueda o limpia los filtros."
      icon={<FolderSimpleIcon />}
    />
  ),
}

export const Error: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<EmptyState
  type="error"
  title="No se pudo cargar"
  message="Ocurrió un problema al obtener la información. Inténtalo de nuevo."
  icon={<WarningCircleIcon />}
/>`,
      },
    },
  },
  render: () => (
    <EmptyState
      type="error"
      title="No se pudo cargar"
      message="Ocurrió un problema al obtener la información. Inténtalo de nuevo."
      icon={<WarningCircleIcon />}
    />
  ),
}

export const Success: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<EmptyState
  type="success"
  title="Solicitud enviada"
  message="Recibirás una confirmación cuando el proceso termine."
  icon={<CheckCircleIcon />}
/>`,
      },
    },
  },
  render: () => (
    <EmptyState
      type="success"
      title="Solicitud enviada"
      message="Recibirás una confirmación cuando el proceso termine."
      icon={<CheckCircleIcon />}
    />
  ),
}

export const WithAction: Story = {
  name: 'With action',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<EmptyState
  type="empty"
  title="Sin resultados"
  message="Intenta con otra búsqueda o limpia los filtros."
  icon={<FolderSimpleIcon />}
  action={<Button hierarchy="primary" label="Nueva búsqueda" />}
/>`,
      },
    },
  },
  render: () => (
    <EmptyState
      type="empty"
      title="Sin resultados"
      message="Intenta con otra búsqueda o limpia los filtros."
      icon={<FolderSimpleIcon />}
      action={<Button hierarchy="primary" size="md" label="Nueva búsqueda" />}
    />
  ),
}

export const AllTypes: Story = {
  name: 'Types',
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
      verticalAlign: 'top',
      padding: '16px 16px',
      borderBottom: '1px solid #f0f0f0',
    }

    return (
      <div style={{ padding: 8 }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...th, paddingLeft: 0 }}>Type</th>
              <th style={th}>EmptyState</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>empty</td>
              <td style={td}>
                <EmptyState
                  type="empty"
                  title="Sin resultados"
                  message="Intenta con otra búsqueda o limpia los filtros."
                  icon={<FolderSimpleIcon />}
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>error</td>
              <td style={td}>
                <EmptyState
                  type="error"
                  title="No se pudo cargar"
                  message="Ocurrió un problema al obtener la información. Inténtalo de nuevo."
                  icon={<WarningCircleIcon />}
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>success</td>
              <td style={td}>
                <EmptyState
                  type="success"
                  title="Solicitud enviada"
                  message="Recibirás una confirmación cuando el proceso termine."
                  icon={<CheckCircleIcon />}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
