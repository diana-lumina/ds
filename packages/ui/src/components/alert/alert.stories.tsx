import type { Meta, StoryObj } from '@storybook/react'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@workspace/ui/icons'
import { Link } from '../link'
import { Alert } from './alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Mensaje contextual con intent info, success, warning o danger. Link y dismiss (IconButton tertiary sm) son opcionales.',
      },
    },
  },
  argTypes: {
    intent: {
      control: 'radio',
      options: ['info', 'success', 'warning', 'danger'],
      description: 'info · success · warning · danger',
      table: { defaultValue: { summary: 'info' } },
    },
    title: { control: 'text' },
    message: { control: 'text' },
    icon: { control: false },
    link: { control: false },
    onDismiss: { control: false },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    intent: 'info',
    title: 'Información importante',
    message: 'Revisa los datos de tu expediente antes de continuar.',
  },
  render: (args) => <Alert {...args} icon={<InfoIcon />} />,
}

export const Info: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
/>`,
      },
    },
  },
  render: () => (
    <Alert
      intent="info"
      title="Información importante"
      message="Revisa los datos de tu expediente antes de continuar."
      icon={<InfoIcon />}
    />
  ),
}

export const Success: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Alert
  intent="success"
  title="Cambios guardados"
  message="Tu información se actualizó correctamente."
  icon={<CheckCircleIcon />}
/>`,
      },
    },
  },
  render: () => (
    <Alert
      intent="success"
      title="Cambios guardados"
      message="Tu información se actualizó correctamente."
      icon={<CheckCircleIcon />}
    />
  ),
}

export const Warning: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Alert
  intent="warning"
  title="Acción requerida"
  message="Hay documentos pendientes por cargar en tu solicitud."
  icon={<WarningIcon />}
/>`,
      },
    },
  },
  render: () => (
    <Alert
      intent="warning"
      title="Acción requerida"
      message="Hay documentos pendientes por cargar en tu solicitud."
      icon={<WarningIcon />}
    />
  ),
}

export const Danger: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Alert
  intent="danger"
  title="No se pudo completar"
  message="Ocurrió un error al enviar la solicitud. Inténtalo de nuevo."
  icon={<XCircleIcon />}
/>`,
      },
    },
  },
  render: () => (
    <Alert
      intent="danger"
      title="No se pudo completar"
      message="Ocurrió un error al enviar la solicitud. Inténtalo de nuevo."
      icon={<XCircleIcon />}
    />
  ),
}

export const WithLink: Story = {
  name: 'With link',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
  link={<Link href="/expediente" label="Ver expediente" />}
/>`,
      },
    },
  },
  render: () => (
    <Alert
      intent="info"
      title="Información importante"
      message="Revisa los datos de tu expediente antes de continuar."
      icon={<InfoIcon />}
      link={<Link href="/expediente" label="Ver expediente" />}
    />
  ),
}

export const WithDismiss: Story = {
  name: 'With dismiss',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Alert
  intent="info"
  title="Información importante"
  message="Revisa los datos de tu expediente antes de continuar."
  icon={<InfoIcon />}
  onDismiss={() => {}}
/>`,
      },
    },
  },
  render: () => (
    <Alert
      intent="info"
      title="Información importante"
      message="Revisa los datos de tu expediente antes de continuar."
      icon={<InfoIcon />}
      onDismiss={() => {}}
    />
  ),
}

export const AllIntents: Story = {
  name: 'Intents',
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
              <th style={{ ...th, paddingLeft: 0 }}>Intent</th>
              <th style={th}>Alert</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={rowLabel}>info</td>
              <td style={td}>
                <Alert
                  intent="info"
                  title="Información importante"
                  message="Revisa los datos de tu expediente antes de continuar."
                  icon={<InfoIcon />}
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>success</td>
              <td style={td}>
                <Alert
                  intent="success"
                  title="Cambios guardados"
                  message="Tu información se actualizó correctamente."
                  icon={<CheckCircleIcon />}
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>warning</td>
              <td style={td}>
                <Alert
                  intent="warning"
                  title="Acción requerida"
                  message="Hay documentos pendientes por cargar en tu solicitud."
                  icon={<WarningIcon />}
                />
              </td>
            </tr>
            <tr>
              <td style={rowLabel}>danger</td>
              <td style={td}>
                <Alert
                  intent="danger"
                  title="No se pudo completar"
                  message="Ocurrió un error al enviar la solicitud. Inténtalo de nuevo."
                  icon={<XCircleIcon />}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
}
