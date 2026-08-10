import { FloatingActionButton } from '@workspace/ui'
import { BagIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function FloatingActionButtonPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader
        title="FloatingActionButton"
        storybookPath="floatingactionbutton--docs"
      />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Type</h2>
        <div className="flex flex-wrap items-center gap-4">
          <FloatingActionButton
            type="standard"
            floating={false}
            icon={<BagIcon />}
            aria-label="Agregar"
          />
          <FloatingActionButton type="extended" floating={false} icon={<BagIcon />}>
            Agregar
          </FloatingActionButton>
          <FloatingActionButton
            type="standard"
            floating={false}
            icon={<BagIcon />}
            aria-label="Agregar disabled"
            disabled
          />
          <FloatingActionButton type="extended" floating={false} icon={<BagIcon />} disabled>
            Agregar disabled
          </FloatingActionButton>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">En contexto (no fixed)</h2>
        <div className="relative flex min-h-48 items-end justify-end rounded-lg border bg-muted/30 p-4">
          <FloatingActionButton type="extended" floating={false} icon={<BagIcon />}>
            Nuevo
          </FloatingActionButton>
        </div>
        <p className="text-xs text-muted-foreground">
          La prop <code>floating</code> fija el botón a la viewport; se ve mejor en el showcase.
        </p>
      </section>
    </div>
  )
}
