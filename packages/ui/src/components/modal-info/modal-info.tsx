import * as React from 'react'
import { ModalBase } from '../modal-base/modal-base'
import { Separator } from '../separator'

export type ModalInfoProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  icon?: React.ReactNode
  title: string
  subheader?: string
  image?: string
  imageAlt?: string
  body: string | string[]
  note?: string
  footer?: {
    icon?: React.ReactNode
    title: string
    description: string
  }
  cancelLabel?: string
  submitLabel?: string
  onCancel?: () => void
  onSubmit?: () => void
}

export function ModalInfo({
  open,
  onOpenChange,
  icon,
  title,
  subheader,
  image,
  imageAlt,
  body,
  note,
  footer,
  cancelLabel,
  submitLabel,
  onCancel,
  onSubmit,
}: ModalInfoProps) {
  const paragraphs = Array.isArray(body) ? body : [body]

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
      onSubmit={onSubmit}
      maxWidth="720px"
      showFooter={false}
    >
      {/* Imagen + texto */}
      <div className="flex gap-4">
        {image && (
          <div className="shrink-0 w-48">
            <img
              src={image}
              alt={imageAlt ?? title}
              className="w-full rounded-lg object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-3">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {note && (
        <p className="text-xs text-muted-foreground">{note}</p>
      )}

      {footer && (
        <>
          <Separator />
          <div className="flex items-start gap-3 rounded-lg border p-3">
            {footer.icon && (
              <div className="shrink-0 text-muted-foreground">
                {footer.icon}
              </div>
            )}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{footer.title}</span>
              <p className="text-xs text-muted-foreground">
                {footer.description}
              </p>
            </div>
          </div>
        </>
      )}
    </ModalBase>
  )
}