import { Tag } from '@workspace/ui'
import { BagIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function TagPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Tag" storybookPath="tag--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone / size</h2>
        <div className="flex flex-wrap items-center gap-2">
          <Tag size="sm" tone="neutral">Neutral sm</Tag>
          <Tag size="md" tone="neutral">Neutral md</Tag>
          <Tag size="sm" tone="brand">Brand sm</Tag>
          <Tag size="md" tone="brand">Brand md</Tag>
          <Tag size="sm" tone="brand" icon={<BagIcon />}>
            Brand + ícono
          </Tag>
          <Tag size="md" tone="neutral" icon={<BagIcon />}>
            Neutral + ícono
          </Tag>
        </div>
      </section>
    </div>
  )
}
