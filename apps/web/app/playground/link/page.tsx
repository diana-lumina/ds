import { Link } from '@workspace/ui'
import { ArrowRightIcon, ExternalLinkIcon } from 'lucide-react'
import { PlaygroundHeader } from '../playground-header'

export default function LinkPage() {
  return (
    <div className="p-6 flex flex-col gap-8">
      <PlaygroundHeader
        title="Link"
        storybookPath="link"
      />

      {/* ── Text Link ── */}
      <section className="flex flex-col gap-4">
        <h2 className="text-sm text-muted-foreground">Button Link</h2>
        <Link variant="button" href="#">
          Cursos
        </Link>

        <h2 className="text-sm text-muted-foreground">Text Link</h2>
        <Link variant="text" href="#" icon={<ArrowRightIcon size={14} />}>
          Usa un código de descuento
        </Link>

      </section>
    </div>
  )
}