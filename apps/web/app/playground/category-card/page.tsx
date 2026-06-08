'use client'
import { CategoryCard } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function CategoryCardPage() {
  return (
    <div className="p-6 flex flex-col gap-8">
      <PlaygroundHeader
        title="Category card"
        storybookPath="categorycard--docs"
      />

      <section className="flex flex-col gap-2">
        <h2 className="text-sm text-muted-foreground">Default</h2>
        <div className="grid grid-cols-2 gap-4 max-w-3xl">
          <CategoryCard
            title="Inteligencia artificial"
            description="Domina la tecnología que redefine el futuro"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            onCtaClick={() => console.log('explorar IA')}
          />

        </div>
      </section>

    </div>
  )
}