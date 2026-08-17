'use client'

import { useState } from 'react'
import { Segment } from '@workspace/ui'
import { FavoriteIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function SegmentPlayground() {
  const [view, setView] = useState<'lista' | 'grid'>('lista')

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Segment" storybookPath="segment--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">
          Grupo (exclusividad en el consumidor — futuro Segmented Button)
        </h2>
        <div role="group" aria-label="Vista" className="flex flex-wrap items-center gap-1">
          <Segment
            size="sm"
            selected={view === 'lista'}
            onSelectedChange={(s) => s && setView('lista')}
            label="Lista"
          />
          <Segment
            size="sm"
            selected={view === 'grid'}
            onSelectedChange={(s) => s && setView('grid')}
            label="Cuadrícula"
          />
          <Segment size="sm" disabled label="Disabled" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size · Selected</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Segment size="md" selected label="Medium selected" />
          <Segment size="md" selected={false} label="Medium" />
          <Segment size="lg" selected label="Large selected" />
          <Segment size="lg" selected={false} label="Large" />
          <Segment size="md" selected disabled label="Selected disabled" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Icon · label · ambos</h2>
        <div role="group" aria-label="Contenido" className="flex flex-wrap items-center gap-1">
          <Segment size="sm" icon={<FavoriteIcon />} aria-label="Favorito" />
          <Segment size="sm" label="Texto" />
          <Segment size="sm" selected icon={<FavoriteIcon />} label="Ambos" />
        </div>
      </section>
    </div>
  )
}
