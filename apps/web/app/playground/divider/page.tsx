import { Divider } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function DividerPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Divider" storybookPath="divider--docs" />

      <section className="flex flex-col gap-3 max-w-md">
        <h2 className="text-sm text-muted-foreground">Horizontal</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">Thickness 1</span>
            <Divider orientation="horizontal" thickness={1} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">Thickness 2</span>
            <Divider orientation="horizontal" thickness={2} />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Vertical</h2>
        <div className="flex items-stretch gap-4 h-16 text-sm">
          <span className="flex items-center">Perfil</span>
          <Divider orientation="vertical" thickness={1} />
          <span className="flex items-center">Configuración</span>
          <Divider orientation="vertical" thickness={2} />
          <span className="flex items-center">Ayuda</span>
        </div>
      </section>
    </div>
  )
}
