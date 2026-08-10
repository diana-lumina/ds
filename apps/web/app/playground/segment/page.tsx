'use client'

import { useState } from 'react'
import { Segment } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function SegmentPlayground() {
  const [view, setView] = useState<'lista' | 'grid'>('lista')

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Segment" storybookPath="segment--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size sm</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Segment size="sm" selected={view === 'lista'} onSelectedChange={(s) => s && setView('lista')}>
            Lista
          </Segment>
          <Segment size="sm" selected={view === 'grid'} onSelectedChange={(s) => s && setView('grid')}>
            Grid
          </Segment>
          <Segment size="sm" disabled>
            Disabled
          </Segment>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size md / lg</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Segment size="md" selected>Medium selected</Segment>
          <Segment size="md" selected={false}>Medium</Segment>
          <Segment size="lg" selected>Large selected</Segment>
          <Segment size="lg" selected={false}>Large</Segment>
          <Segment size="md" selected disabled>
            Selected disabled
          </Segment>
        </div>
      </section>
    </div>
  )
}
