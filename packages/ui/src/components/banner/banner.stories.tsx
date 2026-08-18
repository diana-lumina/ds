import type { Meta, StoryObj } from '@storybook/react'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@workspace/ui/icons'
import { Link } from '../link'
import { Banner } from './banner'

const meta: Meta<typeof Banner> = {
  title: 'Components/Feedback/Banner',
  component: Banner,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Banner de página con intents de Alert. Puede incluir Link y un IconButton tertiary sm para cerrar.',
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
type Story = StoryObj<typeof Banner>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    intent: 'info',
    title: 'Mantenimiento programado',
    message: 'El servicio se reanudará el martes a las 18:00.',
  },
  render: (args) => <Banner {...args} icon={<InfoIcon />} />,
}

export const Info: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
/>`,
      },
    },
  },
  render: () => (
    <Banner
      intent="info"
      title="Mantenimiento programado"
      message="El servicio se reanudará el martes a las 18:00."
      icon={<InfoIcon />}
    />
  ),
}

export const Success: Story = {
  render: () => (
    <Banner
      intent="success"
      title="Cambios publicados"
      message="Tu información ya está visible en el portal."
      icon={<CheckCircleIcon />}
    />
  ),
}

export const Warning: Story = {
  render: () => (
    <Banner
      intent="warning"
      title="Acción requerida"
      message="Hay documentos pendientes por cargar en tu solicitud."
      icon={<WarningIcon />}
    />
  ),
}

export const Danger: Story = {
  render: () => (
    <Banner
      intent="danger"
      title="Servicio interrumpido"
      message="No pudimos completar la operación. Inténtalo más tarde."
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
        code: `<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
  link={<Link href="/estatus" label="Ver estatus" />}
/>`,
      },
    },
  },
  render: () => (
    <Banner
      intent="info"
      title="Mantenimiento programado"
      message="El servicio se reanudará el martes a las 18:00."
      icon={<InfoIcon />}
      link={<Link href="/estatus" label="Ver estatus" />}
    />
  ),
}

export const WithDismiss: Story = {
  name: 'With dismiss',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Banner
  intent="info"
  title="Mantenimiento programado"
  message="El servicio se reanudará el martes a las 18:00."
  icon={<InfoIcon />}
  onDismiss={() => {}}
/>`,
      },
    },
  },
  render: () => (
    <Banner
      intent="info"
      title="Mantenimiento programado"
      message="El servicio se reanudará el martes a las 18:00."
      icon={<InfoIcon />}
      onDismiss={() => {}}
    />
  ),
}

export const AllIntents: Story = {
  name: 'Intents',
  parameters: hideCode,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Banner
        intent="info"
        title="Mantenimiento programado"
        message="El servicio se reanudará el martes a las 18:00."
        icon={<InfoIcon />}
      />
      <Banner
        intent="success"
        title="Cambios publicados"
        message="Tu información ya está visible en el portal."
        icon={<CheckCircleIcon />}
      />
      <Banner
        intent="warning"
        title="Acción requerida"
        message="Hay documentos pendientes por cargar en tu solicitud."
        icon={<WarningIcon />}
      />
      <Banner
        intent="danger"
        title="Servicio interrumpido"
        message="No pudimos completar la operación. Inténtalo más tarde."
        icon={<XCircleIcon />}
      />
    </div>
  ),
}
