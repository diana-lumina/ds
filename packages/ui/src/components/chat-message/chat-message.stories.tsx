import type { Meta, StoryObj } from '@storybook/react'
import { ChatMessage } from './chat-message'

const meta: Meta<typeof ChatMessage> = {
  title: 'Components/AI - Conversational/ChatMessage',
  component: ChatMessage,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Mensaje de chat: Avatar y message body (Body Small). role assistant: avatar a la izquierda; role user: avatar a la derecha.',
      },
    },
  },
  argTypes: {
    role: {
      control: 'radio',
      options: ['assistant', 'user'],
      table: { defaultValue: { summary: 'assistant' } },
    },
    children: { control: 'text' },
    avatarSrc: { control: 'text' },
    avatarInitials: { control: 'text' },
    avatarAlt: { control: 'text', table: { defaultValue: { summary: '""' } } },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof ChatMessage>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const DEMO_SRC = 'https://i.pravatar.cc/96?img=5'
const ASSISTANT_BODY =
  'Puedo orientarte sobre cupo, fechas y modalidad. Si prefieres, deja tus datos en el formulario de contacto.'
const USER_BODY = 'Quiero inscribirme en Diseño de interfaces, campus Monterrey.'

export const Playground: Story = {
  args: {
    role: 'assistant',
    children: ASSISTANT_BODY,
    avatarInitials: 'EC',
    avatarAlt: '',
  },
}

export const Assistant: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ChatMessage role="assistant" avatarInitials="EC">
  ${ASSISTANT_BODY}
</ChatMessage>`,
      },
    },
  },
  render: () => (
    <ChatMessage role="assistant" avatarInitials="EC">
      {ASSISTANT_BODY}
    </ChatMessage>
  ),
}

export const User: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ChatMessage role="user" avatarSrc="${DEMO_SRC}" avatarAlt="Ana Beltrán">
  ${USER_BODY}
</ChatMessage>`,
      },
    },
  },
  render: () => (
    <ChatMessage role="user" avatarSrc={DEMO_SRC} avatarAlt="Ana Beltrán">
      {USER_BODY}
    </ChatMessage>
  ),
}

export const Fallback: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<ChatMessage role="assistant">${ASSISTANT_BODY}</ChatMessage>`,
      },
    },
  },
  render: () => (
    <ChatMessage role="assistant">{ASSISTANT_BODY}</ChatMessage>
  ),
}

export const Thread: Story = {
  name: 'Roles',
  parameters: hideCode,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 8 }}>
      <ChatMessage role="assistant" avatarInitials="EC">
        Hola, soy el asistente de Educación Continua. ¿En qué programa te gustaría inscribirte?
      </ChatMessage>
      <ChatMessage role="user" avatarSrc={DEMO_SRC} avatarAlt="Ana Beltrán">
        {USER_BODY}
      </ChatMessage>
      <ChatMessage role="assistant" avatarInitials="EC">
        {ASSISTANT_BODY}
      </ChatMessage>
    </div>
  ),
}
