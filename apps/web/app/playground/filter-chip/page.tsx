'use client'

import { useState } from 'react'
import { FilterChip } from '@workspace/ui'
import { FunnelSimpleIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function FilterChipPlayground() {
  const [online, setOnline] = useState(true)
  const [presencial, setPresencial] = useState(false)
  const [level, setLevel] = useState(true)

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="FilterChip" storybookPath="filterchip--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size sm</h2>
        <div className="flex flex-wrap items-center gap-2">
          <FilterChip
            size="sm"
            selected={online}
            onSelectedChange={setOnline}
            label="Selected"
          />
          <FilterChip
            size="sm"
            selected={presencial}
            onSelectedChange={setPresencial}
            label="Unselected"
          />
          <FilterChip size="sm" selected icon={<FunnelSimpleIcon />} label="Con ícono" />
          <FilterChip size="sm" disabled label="Disabled" />
          <FilterChip size="sm" selected disabled label="Selected disabled" />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size md</h2>
        <div className="flex flex-wrap items-center gap-2">
          <FilterChip
            size="md"
            selected={level}
            onSelectedChange={setLevel}
            icon={<FunnelSimpleIcon />}
            label="Intermedio"
          />
          <FilterChip size="md" selected={false} label="Unselected" />
          <FilterChip size="md" disabled label="Disabled" />
        </div>
      </section>
    </div>
  )
}
