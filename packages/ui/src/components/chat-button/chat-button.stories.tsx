import type { Meta, StoryObj } from '@storybook/react'
import { ChatButton } from './chat-button'
import { MessageCircleIcon } from 'lucide-react'

const meta: Meta<typeof ChatButton> = {
  title: 'Components/ChatButton',
  component: ChatButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Botón flotante fijo en el borde derecho de la pantalla para abrir el chat de IA. Se posiciona pegado al borde derecho con las esquinas izquierdas redondeadas.',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    label: {
      description: 'Texto que aparece debajo del ícono',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    badge: {
      description: 'Número de notificaciones pendientes',
      control: { type: 'number', min: 0 },
      table: { type: { summary: 'number' } },
    },
    icon: {
      description: 'Ícono o logo del chat',
      table: { type: { summary: 'React.ReactNode' } },
    },
    onClick: {
      description: 'Callback al hacer click en el botón',
      table: { type: { summary: '() => void' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatButton>

export const Default: Story = {
  name: 'ChatButton — Default',
  args: {
    label: 'Asistente Tec360',
    icon: <MessageCircleIcon size={24} />,
  },
}

export const ConBadge: Story = {
  name: 'ChatButton — Con notificación',
  args: {
    label: 'Asistente Tec360',
    icon: <MessageCircleIcon size={24} />,
    badge: 1,
  },
}

export const BadgeAlto: Story = {
  name: 'ChatButton — Badge mayor a 99',
  args: {
    label: 'Asistente Tec360',
    icon: <MessageCircleIcon size={24} />,
    badge: 100,
  },
}

export const SinLabel: Story = {
  name: 'ChatButton — Sin label',
  args: {
    icon: <MessageCircleIcon size={24} />,
  },
}

export const Playground: Story = {
  name: 'ChatButton — Playground',
  args: {
    label: 'Asistente Tec360',
    icon: <MessageCircleIcon size={24} />,
    badge: 0,
  },
}