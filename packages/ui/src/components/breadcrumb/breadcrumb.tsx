import * as React from 'react'
import { cn } from '../../lib/utils'
import styles from './breadcrumb.module.css'

export type BreadcrumbProps = React.ComponentProps<'nav'>

function Separator() {
  return (
    <span className={styles.separator} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
        <path
          d="M5.55806 2.55806C5.80214 2.31398 6.19777 2.31398 6.44185 2.55806L11.4418 7.55806C11.6859 7.80214 11.6859 8.19777 11.4418 8.44185L6.44185 13.4418C6.19777 13.6859 5.80214 13.6859 5.55806 13.4418C5.31398 13.1978 5.31398 12.8021 5.55806 12.5581L10.1162 7.99995L5.55806 3.44185C5.31398 3.19777 5.31398 2.80214 5.55806 2.55806Z"
          fill="currentColor"
        />
      </svg>
    </span>
  )
}

export function Breadcrumb({
  className,
  children,
  'aria-label': ariaLabel = 'Breadcrumb',
  ...props
}: BreadcrumbProps) {
  const items = React.Children.toArray(children).filter(Boolean)

  return (
    <nav
      data-slot="breadcrumb"
      aria-label={ariaLabel}
      className={cn(className)}
      {...props}
    >
      <ol className={styles.list}>
        {items.map((child, index) => (
          <li key={index} className={styles.item}>
            {index > 0 ? <Separator /> : null}
            {child}
          </li>
        ))}
      </ol>
    </nav>
  )
}
