'use client'

import * as React from 'react'
import { ChatButton } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function ChatButtonPage() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="p-6 flex flex-col gap-8">
      <PlaygroundHeader
        title="Chat button"
        storybookPath="chatbutton--docs"
      />
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">
          El botón aparece fijo en la esquina inferior derecha
        </h2>
        <p className="text-xs text-muted-foreground">
          Estado: {open ? 'Abierto' : 'Cerrado'}
        </p>
      </section>


      {/* Sin notificación */}
      <ChatButton
        label="Asistente Tec360"
        onClick={() => setOpen(!open)}
        className="bottom-32 right-0"
      />

      {/* Botón real fijo */}
      <ChatButton
        label="Asistente Tec360"
        badge={1}
        onClick={() => setOpen(!open)}
      />
    </div>
  )
}