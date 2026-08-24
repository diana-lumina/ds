'use client'

import { useState } from 'react'
import { PaginationItem } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function PaginationItemPlayground() {
  const [page, setPage] = useState(2)

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="PaginationItem" storybookPath="paginationitem--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">
          Grupo (exclusividad en el consumidor — futuro Pagination)
        </h2>
        <nav aria-label="Paginación" className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <PaginationItem
              key={value}
              current={page === value}
              onClick={() => setPage(value)}
            >
              {value}
            </PaginationItem>
          ))}
        </nav>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Current · states</h2>
        <div className="flex flex-wrap items-center gap-2">
          <PaginationItem>1</PaginationItem>
          <PaginationItem current>2</PaginationItem>
          <PaginationItem disabled>3</PaginationItem>
          <PaginationItem current disabled>
            4
          </PaginationItem>
        </div>
        <p className="text-xs text-muted-foreground">
          Hover, pressed y Tab = focus-visible. Current marca aria-current=&quot;page&quot;.
        </p>
      </section>
    </div>
  )
}
