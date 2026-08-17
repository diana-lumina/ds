import { Link } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function LinkPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Link" storybookPath="link--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone standard</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/programa" tone="standard" label="Standalone" />
          <Link
            href="https://example.com"
            tone="standard"
            label="External (abre en sitio externo)"
            external
          />
        </div>
        <p className="text-sm text-foreground max-w-md">
          Inline en párrafo:{' '}
          <Link context="inline" href="/programa" label="descarga el programa" /> del curso.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Tone inverse</h2>
        <div className="flex flex-wrap items-center gap-4 rounded-lg bg-[var(--color-surface-brand-strong,#231f20)] p-4">
          <Link href="/aviso" tone="inverse" label="Aviso de privacidad" />
          <Link
            href="https://example.com"
            tone="inverse"
            label="External"
            external
          />
        </div>
      </section>
    </div>
  )
}
