'use client'

import { useState } from 'react'
import { TabItem } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function TabItemPlayground() {
  const [tab, setTab] = useState<'resumen' | 'temario' | 'recursos'>('resumen')

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="TabItem" storybookPath="tabitem--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">
          Grupo (exclusividad en el consumidor — futuro Tab)
        </h2>
        <div role="tablist" aria-label="Secciones" className="flex items-center">
          <TabItem
            selected={tab === 'resumen'}
            onSelectedChange={(s) => s && setTab('resumen')}
            label="Resumen"
          />
          <TabItem
            selected={tab === 'temario'}
            onSelectedChange={(s) => s && setTab('temario')}
            label="Temario"
          />
          <TabItem
            selected={tab === 'recursos'}
            onSelectedChange={(s) => s && setTab('recursos')}
            label="Recursos"
          />
          <TabItem disabled label="Disabled" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Selected · states</h2>
        <div className="flex flex-wrap items-center gap-2">
          <TabItem selected={false} label="Unselected" />
          <TabItem selected label="Selected" />
          <TabItem selected={false} disabled label="Unselected disabled" />
          <TabItem selected disabled label="Selected disabled" />
        </div>
        <p className="text-xs text-muted-foreground">
          Hover y Tab = focus-visible (anillo a 2px del componente). Selected muestra el indicador a todo el ancho; selected disabled igual que unselected disabled.
        </p>
      </section>
    </div>
  )
}
