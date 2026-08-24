'use client'

import { useState } from 'react'
import { NavigationItem, SideNavigation } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function SideNavigationPlayground() {
  const [section, setSection] = useState('inicio')

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="SideNavigation" storybookPath="sidenavigation--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Con heading</h2>
        <SideNavigation heading="Cursos">
          <NavigationItem
            label="Inicio"
            current={section === 'inicio'}
            onClick={() => setSection('inicio')}
          />
          <NavigationItem
            label="Temario"
            current={section === 'temario'}
            onClick={() => setSection('temario')}
          />
          <NavigationItem
            label="Recursos"
            current={section === 'recursos'}
            onClick={() => setSection('recursos')}
          />
        </SideNavigation>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Sin heading</h2>
        <SideNavigation>
          <NavigationItem label="Inicio" current />
          <NavigationItem label="Temario" />
          <NavigationItem label="Recursos" />
        </SideNavigation>
      </section>
    </div>
  )
}
