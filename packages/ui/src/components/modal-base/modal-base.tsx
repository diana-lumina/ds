import * as React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '../dialog'
import { Button } from '../button/button'

// ─── Props ───────────────────────────────────────────────
export type ModalBaseProps = {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    icon?: React.ReactNode
    title: string
    subheader?: string
    children: React.ReactNode
    cancelLabel?: string
    submitLabel?: string
    showFooter?: boolean
    onCancel?: () => void
    onSubmit?: () => void
    maxWidth?: string
}

// ─── Componente ──────────────────────────────────────────
export function ModalBase({
    open,
    onOpenChange,
    icon,
    title,
    subheader,
    children,
    cancelLabel = 'Cancelar',
    submitLabel = 'Aceptar',
    onCancel,
    onSubmit,
    maxWidth = '480px',
    showFooter = true,
}: ModalBaseProps) {
    const handleCancel = () => {
        onCancel?.()
        onOpenChange?.(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="p-8 gap-6"
                style={{ maxWidth }}
            >
                <DialogHeader>
                    <div className="flex items-center gap-3">
                        {icon && (
                            <div className="shrink-0">{icon}</div>
                        )}
                        <div className="flex flex-col gap-1">
                            <DialogTitle>{title}</DialogTitle>
                            {subheader && (
                                <DialogDescription>{subheader}</DialogDescription>
                            )}
                        </div>
                    </div>
                </DialogHeader>

                {/* Slot libre */}
                <div className="flex flex-col gap-4">
                    {children}
                </div>

                {showFooter && (
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={handleCancel}>
                            {cancelLabel}
                        </Button>
                        <Button type="button" onClick={onSubmit}>
                            {submitLabel}
                        </Button>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    )
}