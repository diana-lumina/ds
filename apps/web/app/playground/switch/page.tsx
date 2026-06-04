'use client'

import * as React from 'react'
import { Switch } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function SwitchPage() {
  const [active, setActive] = React.useState(false)
  const [requirement, setRequirement] = React.useState(false)

  return (
   <div className="p-6 flex flex-col gap-8">
         <PlaygroundHeader
           title="Switch"
           storybookPath="switch"
         />

      <section className="grid grid-cols-2 gap-8 max-w-sm">

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Inactive</h2>
          <Switch />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Inactive / Requirement</h2>
          <Switch disabled />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Active</h2>
          <Switch checked />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground">Active / Requirement</h2>
          <Switch checked disabled />
        </div>

      </section>

      {/* Interactivo */}
      <section className="flex flex-col gap-4">
        <h2 className="text-sm text-muted-foreground">Interactivo</h2>
        <div className="flex items-center gap-3">
          <Switch
            id="notificaciones"
            checked={active}
            onCheckedChange={setActive}
          />
          <label htmlFor="notificaciones" className="text-sm cursor-pointer">
            Recibir notificaciones
          </label>
        </div>
        <div className="flex items-center gap-3">
          <Switch
            id="requirement"
            checked={requirement}
            onCheckedChange={setRequirement}
            disabled
          />
          <label htmlFor="requirement" className="text-sm cursor-pointer text-muted-foreground">
            Opción deshabilitada
          </label>
        </div>
      </section>
    </div>
  )
}