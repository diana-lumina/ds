import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen p-12 max-w-3xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground font-medium uppercase tracking-widest">
            Work in progress
          </span>
          <h1 className="text-3xl font-bold tracking-tight">
            Design System — Playground
          </h1>
          <p className="text-muted-foreground">
            Proyecto de prueba para validar componentes en desarrollo.
            No es documentación oficial ni el producto final.
          </p>
        </div>

        <hr />

        <p className="text-sm text-muted-foreground">
          Los componentes mostrados aquí son un work in progress — 
          estilos, tokens y marca se definirán en etapas posteriores.
        </p>

        <Link
          href="/playground/button"
          className="text-sm font-medium underline underline-offset-4"
        >
          Ver componentes →
        </Link>
      </div>
    </main>
  )
}