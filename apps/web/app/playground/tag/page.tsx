import { Tag } from '@workspace/ui'
import { MapPinIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function TagPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Tag" storybookPath="tag--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone / size</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Tag size="sm" tone="neutral" label="Virtual" />
          <Tag size="md" tone="neutral" label="Posgrado" />
          <Tag size="sm" tone="brand" label="Ingeniería" />
          <Tag size="md" tone="brand" label="Campus Monterrey" />
          <Tag size="sm" tone="brand" label="Virtual" icon={<MapPinIcon />} />
          <Tag size="md" tone="neutral" label="8 semanas" icon={<MapPinIcon />} />
        </div>
      </section>
    </div>
  )
}
