import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../accordion'
import { Checkbox } from '../checkbox'
import { Label } from '../label'

// ─── Props ───────────────────────────────────────────────
export type AccordionFilterOption = {
  id: string
  label: string
}

export type AccordionFilterItem = {
  id: string
  label: string
  options: AccordionFilterOption[]
}

export type AccordionFilterProps = {
  items: AccordionFilterItem[]
  selected?: Record<string, string[]>
  onSelectionChange?: (itemId: string, optionId: string, checked: boolean) => void
}

// ─── Componente ──────────────────────────────────────────
export function AccordionFilter({
  items,
  selected = {},
  onSelectionChange,
}: AccordionFilterProps) {
  return (
    <Accordion type="multiple" className="max-w-[249px] ">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-sm font-medium p-4">
            {item.label}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3 pt-1">
              {item.options.map((option) => (
                <div key={option.id} className="flex items-center gap-2">
                  <Checkbox
                    id={`${item.id}-${option.id}`}
                    checked={selected[item.id]?.includes(option.id) ?? false}
                    onCheckedChange={(checked) =>
                      onSelectionChange?.(item.id, option.id, checked as boolean)
                    }
                  />
                  <Label
                    htmlFor={`${item.id}-${option.id}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}