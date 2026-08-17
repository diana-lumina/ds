import { Badge } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function BadgePlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Badge" storybookPath="badge--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Size</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="sm" label="Nuevo" />
          <Badge size="md" label="En revisión" />
          <Badge size="sm" label="Borrador" />
          <Badge size="md" label="Publicado" />
        </div>
      </section>
    </div>
  )
}
