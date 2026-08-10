import { Link } from '@workspace/ui'
import { BagIcon, ChevronIcon } from '@workspace/ui/icons'
import { PlaygroundHeader } from '../playground-header'

export default function LinkPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Link" storybookPath="link--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone standard</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#" tone="standard">Standard</Link>
          <Link href="#" tone="standard" icon={<ChevronIcon />} iconPosition="right">
            Ícono derecha
          </Link>
          <Link href="#" tone="standard" icon={<BagIcon />} iconPosition="left">
            Ícono izquierda
          </Link>
          <Link href="https://example.com" external>
            External
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone inverse</h2>
        <div className="flex flex-wrap items-center gap-4 rounded-lg bg-[var(--color-surface-brand-strong,#231f20)] p-4">
          <Link href="#" tone="inverse">Inverse</Link>
          <Link href="#" tone="inverse" icon={<ChevronIcon />}>
            Inverse + ícono
          </Link>
        </div>
      </section>
    </div>
  )
}
