'use client'

import { useState } from 'react'
import { ChipGroup, FilterChip, InputChip } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function ChipGroupPlayground() {
  const [virtual, setVirtual] = useState(true)
  const [presencial, setPresencial] = useState(false)
  const [hibrido, setHibrido] = useState(false)
  const [applied, setApplied] = useState(['UX Research', 'Campus Monterrey'])

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="ChipGroup" storybookPath="chipgroup--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Filter Chip</h2>
        <ChipGroup>
          <FilterChip label="Virtual" selected={virtual} onSelectedChange={setVirtual} />
          <FilterChip
            label="Presencial"
            selected={presencial}
            onSelectedChange={setPresencial}
          />
          <FilterChip label="Híbrido" selected={hibrido} onSelectedChange={setHibrido} />
        </ChipGroup>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Input Chip</h2>
        <ChipGroup>
          {applied.map((label) => (
            <InputChip
              key={label}
              label={label}
              onClose={() => setApplied((current) => current.filter((item) => item !== label))}
            />
          ))}
        </ChipGroup>
      </section>
    </div>
  )
}
