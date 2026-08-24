import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { NavigationItem } from '../navigation-item'
import { NavigationBar } from './navigation-bar'

const meta: Meta<typeof NavigationBar> = {
  title: 'Components/Navigation/NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Barra de navegación horizontal.',
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: 'SLOT nativo: instancias reales de NavigationItem',
      table: { type: { summary: 'ReactNode' } },
    },
    className: {
      control: false,
      table: { disable: true },
    },
  },
}

export default meta
type Story = StoryObj<typeof NavigationBar>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  render: (args) => (
    <NavigationBar {...args}>
      <NavigationItem label="Inicio" current />
      <NavigationItem label="Cursos" />
      <NavigationItem label="Perfil" />
    </NavigationBar>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<NavigationBar>
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Cursos" />
  <NavigationItem label="Perfil" />
</NavigationBar>`,
      },
    },
  },
  render: () => (
    <NavigationBar>
      <NavigationItem label="Inicio" current />
      <NavigationItem label="Cursos" />
      <NavigationItem label="Perfil" />
    </NavigationBar>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [section, setSection] = useState('inicio')
    const items = [
      { id: 'inicio', label: 'Inicio' },
      { id: 'cursos', label: 'Cursos' },
      { id: 'perfil', label: 'Perfil' },
    ] as const

    return (
      <NavigationBar>
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            label={item.label}
            current={section === item.id}
            onClick={() => setSection(item.id)}
          />
        ))}
      </NavigationBar>
    )
  },
}
