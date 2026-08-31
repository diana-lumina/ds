import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Drawer } from './drawer'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Overlays/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Panel derecho anclado al bottom, altura según contenido (máx. viewport). Sizes sm (400) y lg (640). Cierre: IconButton tertiary centrado a todo el ancho. Slots: header, content y footer (actions).',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'lg'],
      table: { defaultValue: { summary: 'sm' } },
    },
    title: { control: 'text' },
    contentTitle: { control: 'text' },
    children: { control: 'text' },
    header: { control: false, table: { disable: true } },
    footer: { control: false, table: { disable: true } },
    trigger: { control: false, table: { disable: true } },
    primaryAction: { control: false, table: { disable: true } },
    secondaryAction: { control: false, table: { disable: true } },
    className: { control: false, table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

const body =
  'Revisa los datos de la solicitud antes de enviarla. Coordinación te contactará cuando el estatus cambie.'

function actions() {
  return {
    secondaryAction: <Button hierarchy="secondary" size="md" label="Cancelar" />,
    primaryAction: <Button hierarchy="primary" size="md" label="Confirmar" />,
  }
}

function specimen(size: 'sm' | 'lg', triggerLabel: string) {
  return (
    <Drawer
      size={size}
      title="Detalle de la solicitud"
      contentTitle="Resumen"
      trigger={<Button hierarchy="secondary" size="sm" label={triggerLabel} />}
      {...actions()}
    >
      {body}
    </Drawer>
  )
}

export const Playground: Story = {
  args: {
    size: 'sm',
    title: 'Detalle de la solicitud',
    contentTitle: 'Resumen',
    children: body,
  },
  render: (args) => (
    <Drawer
      {...args}
      {...actions()}
      trigger={<Button hierarchy="secondary" size="sm" label="Abrir drawer" />}
    />
  ),
}

export const Small: Story = {
  name: 'Size sm',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Drawer
  size="sm"
  title="Detalle de la solicitud"
  contentTitle="Resumen"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir drawer" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${body}
</Drawer>`,
      },
    },
  },
  render: () => specimen('sm', 'Abrir sm'),
}

export const Large: Story = {
  name: 'Size lg',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<Drawer
  size="lg"
  title="Detalle de la solicitud"
  contentTitle="Resumen"
  trigger={<Button hierarchy="secondary" size="sm" label="Abrir drawer" />}
  secondaryAction={<Button hierarchy="secondary" size="md" label="Cancelar" />}
  primaryAction={<Button hierarchy="primary" size="md" label="Confirmar" />}
>
  ${body}
</Drawer>`,
      },
    },
  },
  render: () => specimen('lg', 'Abrir lg'),
}

export const AllSizes: Story = {
  name: 'Sizes',
  parameters: hideCode,
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {specimen('sm', 'Abrir sm')}
      {specimen('lg', 'Abrir lg')}
    </div>
  ),
}
