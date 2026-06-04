import { MediaCard } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function MediaCardPage() {
  return (
    <div className="p-6 flex flex-col gap-8">
      <PlaygroundHeader
        title="Media card"
        storybookPath="media-card"
      />
      {/* ── Testimonial ── */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Testimonios</h2>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">Enabled</span>
            <MediaCard
              type="testimonial"
              src="https://picsum.photos/seed/test1/128/160"
              name="Benjamín Fernández"
              description="Médico practicante y..."
              badge={{ label: 'Ver perfil' }}
            />
          </div>

        </div>
      </section>

      {/* ── Testimonial L ── */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Testimonio L</h2>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">Enabled</span>
            <MediaCard
              type="testimonial-l"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              poster="https://picsum.photos/seed/testl/331/548"
              name="Francisco L."
            />
          </div>

        </div>
      </section>

      {/* ── Testimonial S ── */}
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Testimonio S</h2>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">Enabled</span>
            <MediaCard
              type="testimonial-s"
              src="https://picsum.photos/seed/test5/128/160"
              name="Diana T."
              description="Lorem ipsum dolor sit amet consectetur..."
              badge={{ label: 'Ver video' }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-xs text-muted-foreground">Empty</span>
            <MediaCard
              type="testimonial-s"
              isEmpty
            />
          </div>
        </div>
      </section>
    </div>
  )
}