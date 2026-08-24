import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { NavigationItem } from '../navigation-item'
import { SideNavigation } from './side-navigation'

const meta: Meta<typeof SideNavigation> = {
  title: 'Components/Navigation/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Navegación lateral',
      },
    },
  },
  argTypes: {
    heading: {
      control: 'text',
      description: 'Heading opcional de la sección',
    },
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
type Story = StoryObj<typeof SideNavigation>

const hideCode = {
  docs: {
    canvas: { sourceState: 'none' as const },
  },
}

export const Playground: Story = {
  args: {
    heading: 'Cursos',
  },
  render: (args) => (
    <SideNavigation {...args}>
      <NavigationItem label="Inicio" current />
      <NavigationItem label="Temario" />
      <NavigationItem label="Recursos" />
    </SideNavigation>
  ),
}

export const Default: Story = {
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<SideNavigation heading="Cursos">
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Temario" />
  <NavigationItem label="Recursos" />
</SideNavigation>`,
      },
    },
  },
  render: () => (
    <SideNavigation heading="Cursos">
      <NavigationItem label="Inicio" current />
      <NavigationItem label="Temario" />
      <NavigationItem label="Recursos" />
    </SideNavigation>
  ),
}

export const WithoutHeading: Story = {
  name: 'Sin heading',
  parameters: {
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        code: `<SideNavigation>
  <NavigationItem label="Inicio" current />
  <NavigationItem label="Temario" />
  <NavigationItem label="Recursos" />
</SideNavigation>`,
      },
    },
  },
  render: () => (
    <SideNavigation>
      <NavigationItem label="Inicio" current />
      <NavigationItem label="Temario" />
      <NavigationItem label="Recursos" />
    </SideNavigation>
  ),
}

export const InContext: Story = {
  name: 'Ejemplo de uso',
  parameters: hideCode,
  render: () => {
    const [section, setSection] = useState('inicio')
    const items = [
      { id: 'inicio', label: 'Inicio' },
      { id: 'temario', label: 'Temario' },
      { id: 'recursos', label: 'Recursos' },
    ] as const

    return (
      <SideNavigation heading="Cursos">
        {items.map((item) => (
          <NavigationItem
            key={item.id}
            label={item.label}
            current={section === item.id}
            onClick={() => setSection(item.id)}
          />
        ))}
      </SideNavigation>
    )
  },
}
