import * as React from 'react'
import { ModalBase } from '../modal-base/modal-base'
import { TextInput } from '../text-input'
import { TextArea } from '../text-area'
import { Label } from '../label'

export type ModalActionableProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  icon?: React.ReactNode
  title: string
  subheader?: string
  fields: Array<
    | {
        type: 'input'
        id: string
        label: string
        placeholder?: string
        required?: boolean
        hint?: React.ReactNode
      }
    | {
        type: 'rating'
        id: string
        label: string
        required?: boolean
        maxStars?: number
      }
    | {
        type: 'textarea'
        id: string
        label: string
        placeholder?: string
        required?: boolean
        maxLength?: number
      }
  >
  note?: string
  cancelLabel?: string
  submitLabel?: string
  onCancel?: () => void
  onSubmit?: (values: Record<string, string | number>) => void
}

function StarRating({
  value,
  max = 5,
  onChange,
}: {
  value: number
  max?: number
  onChange: (value: number) => void
}) {
  return (
    <div className="flex gap-2 justify-center">
      {Array.from({ length: max }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i + 1)}
          aria-label={`${i + 1} estrella${i !== 0 ? 's' : ''}`}
          className="text-3xl text-muted-foreground transition-colors hover:text-foreground"
        >
          {i < value ? '★' : '☆'}
        </button>
      ))}
    </div>
  )
}

export function ModalActionable({
  open,
  onOpenChange,
  icon,
  title,
  subheader,
  fields,
  note,
  cancelLabel,
  submitLabel,
  onCancel,
  onSubmit,
}: ModalActionableProps) {
  const [values, setValues] = React.useState<Record<string, string | number>>(
    () => Object.fromEntries(fields.map((f) => [f.id, f.type === 'rating' ? 0 : '']))
  )

  const handleChange = (id: string, value: string | number) => {
    setValues((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <ModalBase
      open={open}
      onOpenChange={onOpenChange}
      icon={icon}
      title={title}
      subheader={subheader}
      cancelLabel={cancelLabel}
      submitLabel={submitLabel}
      onCancel={onCancel}
      onSubmit={() => onSubmit?.(values)}
    >
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-1.5">

          {field.type === 'input' && (
            <>
              <div className="flex items-center gap-1">
                <Label htmlFor={field.id}>
                  {field.label}
                  {field.required && (
                    <span className="text-destructive ml-0.5">*</span>
                  )}
                </Label>
                {field.hint && (
                  <span className="text-muted-foreground">{field.hint}</span>
                )}
              </div>
              <TextInput
                id={field.id}
                placeholder={field.placeholder}
                value={values[field.id] as string}
                onChange={(e) => handleChange(field.id, e.target.value)}
                required={field.required}
              />
            </>
          )}

          {field.type === 'rating' && (
            <>
              <Label>
                {field.label}
                {field.required && (
                  <span className="text-destructive ml-0.5">*</span>
                )}
              </Label>
              <StarRating
                value={values[field.id] as number}
                max={field.maxStars ?? 5}
                onChange={(val) => handleChange(field.id, val)}
              />
            </>
          )}

          {field.type === 'textarea' && (
            <>
              <div className="flex items-center justify-between">
                <Label htmlFor={field.id}>
                  {field.label}
                  {field.required && (
                    <span className="text-destructive ml-0.5">*</span>
                  )}
                </Label>
                {field.maxLength && (
                  <span className="text-xs text-muted-foreground">
                    {(values[field.id] as string).length}/{field.maxLength}
                  </span>
                )}
              </div>
              <TextArea
                id={field.id}
                placeholder={field.placeholder}
                value={values[field.id] as string}
                onChange={(e) => handleChange(field.id, e.target.value)}
                required={field.required}
                maxLength={field.maxLength}
                rows={4}
              />
            </>
          )}
        </div>
      ))}

      {note && (
        <p className="text-xs text-muted-foreground">{note}</p>
      )}
    </ModalBase>
  )
}