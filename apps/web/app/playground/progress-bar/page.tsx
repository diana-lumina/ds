'use client'

import * as React from 'react'
import { Progress } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function ProgressPage() {
  const [value, setValue] = React.useState(30)

  return (
    <div className="p-6 flex flex-col gap-8">
          <PlaygroundHeader
            title="Progress bar"
            storybookPath="progress-bar"
          />

      <section className="flex flex-col gap-6 max-w-sm">

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Small — con valor</h2>
          <Progress value={value} className="h-1" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Default — vacío</h2>
          <Progress value={0} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">25%</h2>
          <Progress value={25} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">50%</h2>
          <Progress value={50} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">100%</h2>
          <Progress value={100} />
        </div>

        {/* Interactivo */}
        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">
            Interactivo — {value}%
          </h2>
          <Progress value={value} />
          <input
            type="range"
            min={0}
            max={100}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full"
          />
        </div>

      </section>
    </div>
  )
}