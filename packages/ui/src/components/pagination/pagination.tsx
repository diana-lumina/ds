"use client"

import * as React from 'react'
import { CaretLeftIcon, CaretRightIcon } from '@workspace/ui/icons'
import { cn } from '../../lib/utils'
import { IconButton } from '../icon-button'
import styles from './pagination.module.css'

export interface PaginationProps
  extends Omit<React.ComponentProps<'nav'>, 'children'> {
  /** SLOT nativo: instancias reales de PaginationItem. Cantidad y rango no son ejes de variante. */
  children: React.ReactNode
  onPrevious?: () => void
  onNext?: () => void
  previousDisabled?: boolean
  nextDisabled?: boolean
  previousLabel?: string
  nextLabel?: string
}

/**
 * Contenedor de paginación. Compone IconButton tertiary md (prev/next)
 * y un SLOT de PaginationItem. No define cantidad de páginas ni current.
 */
export function Pagination({
  children,
  onPrevious,
  onNext,
  previousDisabled = false,
  nextDisabled = false,
  previousLabel = 'Página anterior',
  nextLabel = 'Página siguiente',
  className,
  'aria-label': ariaLabel = 'Paginación',
  ...props
}: PaginationProps) {
  return (
    <nav
      data-slot="pagination"
      aria-label={ariaLabel}
      className={cn(styles.root, className)}
      {...props}
    >
      <IconButton
        hierarchy="tertiary"
        size="md"
        icon={<CaretLeftIcon />}
        aria-label={previousLabel}
        disabled={previousDisabled}
        onClick={onPrevious}
      />
      {children}
      <IconButton
        hierarchy="tertiary"
        size="md"
        icon={<CaretRightIcon />}
        aria-label={nextLabel}
        disabled={nextDisabled}
        onClick={onNext}
      />
    </nav>
  )
}
