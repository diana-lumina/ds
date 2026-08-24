'use client'

import { useState } from 'react'
import { Pagination, PaginationItem } from '@workspace/ui'
import { PlaygroundHeader } from '../playground-header'

export default function PaginationPlayground() {
  const total = 10
  const [page, setPage] = useState(3)

  return (
    <div className="flex flex-col gap-8">
      <PlaygroundHeader title="Pagination" storybookPath="navigation-pagination--docs" />

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Espécimen (1, 2, 3, …, 10)</h2>
        <Pagination>
          <PaginationItem>1</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem current>3</PaginationItem>
          <PaginationItem disabled>…</PaginationItem>
          <PaginationItem>10</PaginationItem>
        </Pagination>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm text-muted-foreground">Interactivo</h2>
        <Pagination
          previousDisabled={page === 1}
          nextDisabled={page === total}
          onPrevious={() => setPage((value) => Math.max(1, value - 1))}
          onNext={() => setPage((value) => Math.min(total, value + 1))}
        >
          <PaginationItem current={page === 1} onClick={() => setPage(1)}>
            1
          </PaginationItem>
          <PaginationItem current={page === 2} onClick={() => setPage(2)}>
            2
          </PaginationItem>
          <PaginationItem current={page === 3} onClick={() => setPage(3)}>
            3
          </PaginationItem>
          <PaginationItem disabled>…</PaginationItem>
          <PaginationItem current={page === 10} onClick={() => setPage(10)}>
            10
          </PaginationItem>
        </Pagination>
      </section>
    </div>
  )
}
