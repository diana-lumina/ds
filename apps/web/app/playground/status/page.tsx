import { Status } from '@workspace/ui'
import { BagIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function StatusPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Status" storybookPath="status--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Intent — sm</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Status size="sm" intent="neutral">Neutral</Status>
          <Status size="sm" intent="info">Info</Status>
          <Status size="sm" intent="success">Success</Status>
          <Status size="sm" intent="warning">Warning</Status>
          <Status size="sm" intent="danger">Danger</Status>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Intent — md + ícono</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Status size="md" intent="neutral" icon={<BagIcon />}>Neutral</Status>
          <Status size="md" intent="info" icon={<BagIcon />}>Info</Status>
          <Status size="md" intent="success" icon={<BagIcon />}>Success</Status>
          <Status size="md" intent="warning" icon={<BagIcon />}>Warning</Status>
          <Status size="md" intent="danger" icon={<BagIcon />}>Danger</Status>
        </div>
      </section>
    </div>
  )
}
