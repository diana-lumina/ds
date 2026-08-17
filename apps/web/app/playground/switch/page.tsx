'use client'

import { useState } from 'react'
import { Switch } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function SwitchPlayground() {
  const [notifications, setNotifications] = useState(true)
  const [marketing, setMarketing] = useState(false)

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Switch" storybookPath="switch--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Estados</h2>
        <div className="flex flex-col gap-3 max-w-sm">
          <label className="flex items-center gap-2 text-sm">
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
              aria-label="Checked"
            />
            Checked
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Switch
              checked={marketing}
              onCheckedChange={setMarketing}
              aria-label="Unchecked"
            />
            Unchecked
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Switch checked disabled aria-label="Disabled checked" />
            Disabled checked
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Switch checked={false} disabled aria-label="Disabled unchecked" />
            Disabled unchecked
          </label>
        </div>
        <p className="text-xs text-muted-foreground">
          Hover, press y Tab = focus-visible.
        </p>
      </section>
    </div>
  )
}
