'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@workspace/ui/lib/utils'

export function NavLink({ href, name }: { href: string; name: string }) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={cn(
        'text-sm px-2 py-1.5 rounded-md hover:bg-muted transition-colors',
        pathname === href && 'bg-muted font-medium'
      )}
    >
      {name}
    </Link>
  )
}