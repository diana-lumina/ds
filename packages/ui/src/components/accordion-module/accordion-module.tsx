import * as React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../accordion'

// ─── Props ───────────────────────────────────────────────
export type AccordionModuleItem = {
  id: string
  icon?: React.ReactNode
  title: string
  subtitle?: string
  content: {
    title?: string
    description: string
    link?: {
      label: string
      href: string
    }
  }
}

export type AccordionModuleProps = {
  items: AccordionModuleItem[]
  type?: 'single' | 'multiple'
}

// ─── Componente ──────────────────────────────────────────
export function AccordionModule({
  items,
  type = 'single',
}: AccordionModuleProps) {
  return (
    <Accordion type={type} collapsible className="w-full">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              {item.icon && (
                <div className="shrink-0 text-muted-foreground">
                  {item.icon}
                </div>
              )}
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-sm font-medium">{item.title}</span>
                {item.subtitle && (
                  <span className="text-xs text-muted-foreground">
                    {item.subtitle}
                  </span>
                )}
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 pt-2 pb-1">
              {item.content.title && (
                <span className="text-sm font-medium">
                  {item.content.title}
                </span>
              )}
              <p className="text-sm text-muted-foreground">
                {item.content.description}
              </p>
              {item.content.link && (
                <a
                  href={item.content.link.href}
                  className="text-sm text-primary flex items-center gap-1 hover:underline"
                >
                  {item.content.link.label}
                  <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}