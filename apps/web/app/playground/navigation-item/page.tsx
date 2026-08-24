'use client'

import { useState } from 'react'
import { BookIcon, HouseIcon, UserIcon } from '@workspace/ui/icons'
import { NavigationItem } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function NavigationItemPlayground() {
  const [section, setSection] = useState('inicio')

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="NavigationItem" storybookPath="navigationitem--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Navigation bar</h2>
        <nav aria-label="Principal" className="flex items-center gap-1">
          <NavigationItem
            label="Inicio"
            icon={<HouseIcon />}
            current={section === 'inicio'}
            onClick={() => setSection('inicio')}
          />
          <NavigationItem
            label="Cursos"
            icon={<BookIcon />}
            current={section === 'cursos'}
            onClick={() => setSection('cursos')}
          />
          <NavigationItem
            label="Perfil"
            icon={<UserIcon />}
            current={section === 'perfil'}
            onClick={() => setSection('perfil')}
          />
        </nav>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Side navigation</h2>
        <nav aria-label="Lateral" className="flex max-w-xs flex-col gap-1">
          <NavigationItem
            context="side-navigation"
            label="Inicio"
            icon={<HouseIcon />}
            current={section === 'inicio'}
            onClick={() => setSection('inicio')}
          />
          <NavigationItem
            context="side-navigation"
            label="Cursos"
            icon={<BookIcon />}
            current={section === 'cursos'}
            onClick={() => setSection('cursos')}
          />
          <NavigationItem
            context="side-navigation"
            label="Perfil"
            icon={<UserIcon />}
            current={section === 'perfil'}
            onClick={() => setSection('perfil')}
          />
        </nav>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Current · states</h2>
        <div className="flex flex-wrap items-center gap-2">
          <NavigationItem label="Default" />
          <NavigationItem label="Con ícono" icon={<HouseIcon />} />
          <NavigationItem label="Current bar" current />
          <NavigationItem context="side-navigation" label="Current side" current />
          <NavigationItem label="Disabled" disabled />
        </div>
        <p className="text-xs text-muted-foreground">
          Hover, pressed y Tab = focus-visible. Current en side-navigation usa superficie.
        </p>
      </section>
    </div>
  )
}
