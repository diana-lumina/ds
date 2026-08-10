import { Badge } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function BadgePlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Badge" storybookPath="badge--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="sm">Nuevo</Badge>
          <Badge size="md">En revisión</Badge>
          <Badge size="sm">Borrador</Badge>
          <Badge size="md">Publicado</Badge>
        </div>
      </section>
    </div>
  )
}
