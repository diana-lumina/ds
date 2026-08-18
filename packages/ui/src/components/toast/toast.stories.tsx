import type { Meta, StoryObj } from '@storybook/react'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@workspace/ui/icons'
import { Link } from '../link'
import { Toast } from './toast'

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Notificación flotante con tokens de Alert, elevation 2 y dismiss (IconButton tertiary sm). Link opcional.',
      },
    },
  },
  argTypes: {
    intent: {
      control: 'radio',
      options: ['info', 'success', 'warning', 'danger'],
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
type Story = StoryObj<typeof Toast>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    intent: 'success',
    title: 'Cambios guardados',
    message: 'Tu información se actualizó correctamente.',
  },
  render: (args) => <Toast {...args} icon={<CheckCircleIcon />} />,
}

export const Info: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Toast
  intent="info"
  title="Nueva actualización"
  message="Hay una versión disponible del expediente."
  icon={<InfoIcon />}
/>`,
      },
    },
  },
  render: () => (
    <Toast
      intent="info"
      title="Nueva actualización"
      message="Hay una versión disponible del expediente."
      icon={<InfoIcon />}
    />
  ),
}

export const Success: Story = {
  render: () => (
    <Toast
      intent="success"
      title="Cambios guardados"
      message="Tu información se actualizó correctamente."
      icon={<CheckCircleIcon />}
    />
  ),
}

export const Warning: Story = {
  render: () => (
    <Toast
      intent="warning"
      title="Sesión por expirar"
      message="Guarda tu progreso para no perder los cambios."
      icon={<WarningIcon />}
    />
  ),
}

export const Danger: Story = {
  render: () => (
    <Toast
      intent="danger"
      title="No se pudo enviar"
      message="Ocurrió un error al procesar la solicitud."
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
        code: `<Toast
  intent="success"
  title="Cambios guardados"
  message="Tu información se actualizó correctamente."
  icon={<CheckCircleIcon />}
  link={<Link href="/detalle" label="Ver detalle" />}
/>`,
      },
    },
  },
  render: () => (
    <Toast
      intent="success"
      title="Cambios guardados"
      message="Tu información se actualizó correctamente."
      icon={<CheckCircleIcon />}
      link={<Link href="/detalle" label="Ver detalle" />}
    />
  ),
}

export const AllIntents: Story = {
  name: 'Intents',
  parameters: hideCode,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Toast
        intent="info"
        title="Nueva actualización"
        message="Hay una versión disponible del expediente."
        icon={<InfoIcon />}
      />
      <Toast
        intent="success"
        title="Cambios guardados"
        message="Tu información se actualizó correctamente."
        icon={<CheckCircleIcon />}
      />
      <Toast
        intent="warning"
        title="Sesión por expirar"
        message="Guarda tu progreso para no perder los cambios."
        icon={<WarningIcon />}
      />
      <Toast
        intent="danger"
        title="No se pudo enviar"
        message="Ocurrió un error al procesar la solicitud."
        icon={<XCircleIcon />}
      />
    </div>
  ),
}
