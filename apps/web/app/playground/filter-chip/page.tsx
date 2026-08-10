'use client'

import { useState } from 'react'
import { FilterChip } from '@workspace/ui'
import { BagIcon } from '@workspace/ui/icons'
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
          <FilterChip size="sm" selected={online} onSelectedChange={setOnline}>
            Selected
          </FilterChip>
          <FilterChip size="sm" selected={presencial} onSelectedChange={setPresencial}>
            Unselected
          </FilterChip>
          <FilterChip size="sm" selected icon={<BagIcon />}>
            Con ícono
          </FilterChip>
          <FilterChip size="sm" disabled>
            Disabled
          </FilterChip>
          <FilterChip size="sm" selected disabled>
            Selected disabled
          </FilterChip>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size md</h2>
        <div className="flex flex-wrap items-center gap-2">
          <FilterChip size="md" selected={level} onSelectedChange={setLevel} icon={<BagIcon />}>
            Intermedio
          </FilterChip>
          <FilterChip size="md" selected={false}>
            Unselected
          </FilterChip>
          <FilterChip size="md" disabled>
            Disabled
          </FilterChip>
        </div>
      </section>
    </div>
  )
}
