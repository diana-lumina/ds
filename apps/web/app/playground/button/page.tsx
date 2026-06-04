import { Button } from "@workspace/ui"
import { PlaygroundHeader } from "../playground-header"

export default function ButtonPlayground() {
  return (
    <div className="p-6 flex flex-col gap-8">
       <PlaygroundHeader
        title="Button"
        storybookPath="button"
      />
      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Variantes</h2>
        <div className="flex gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Tamaños</h2>
        <div className="flex items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Estados</h2>
        <div className="flex gap-2">
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </div>
  )
}