import type { Meta, StoryObj } from '@storybook/react'
import { AiResponseStatus } from './ai-response-status'

const meta: Meta<typeof AiResponseStatus> = {
  title: 'Components/AI - Conversational/AiResponseStatus',
  component: AiResponseStatus,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Indicador de actividad de una respuesta de IA.',
      },
    },
  },
  argTypes: {
    activity: {
      control: 'radio',
      options: ['searching-sources', 'generating', 'streaming', 'thinking'],
      table: { defaultValue: { summary: 'thinking' } },
    },
    label: { control: 'text' },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof AiResponseStatus>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    activity: 'thinking',
  },
}

export const SearchingSources: Story = {
  name: 'Searching sources',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiResponseStatus activity="searching-sources" />`,
      },
    },
  },
  render: () => <AiResponseStatus activity="searching-sources" />,
}

export const Generating: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiResponseStatus activity="generating" />`,
      },
    },
  },
  render: () => <AiResponseStatus activity="generating" />,
}

export const Streaming: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiResponseStatus activity="streaming" />`,
      },
    },
  },
  render: () => <AiResponseStatus activity="streaming" />,
}

export const Thinking: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<AiResponseStatus activity="thinking" />`,
      },
    },
  },
  render: () => <AiResponseStatus activity="thinking" />,
}

export const AllActivities: Story = {
  name: 'Activities',
  parameters: hideCode,
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 8 }}>
      <AiResponseStatus activity="searching-sources" />
      <AiResponseStatus activity="generating" />
      <AiResponseStatus activity="streaming" />
      <AiResponseStatus activity="thinking" />
    </div>
  ),
}
