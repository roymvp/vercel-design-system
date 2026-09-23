'use client'

import { Dialog as BaseDialog } from '@base-ui/react/dialog'
import { X } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格模态（Base UI Dialog）。半透黑遮罩 + 居中白面卡（lg 圆角 + lg 阴影 +
  发丝描边），层级走 --z-modal，进出用 --duration-normal。默认带右上角关闭按钮。
*/
const Dialog = BaseDialog.Root
const DialogTrigger = BaseDialog.Trigger
const DialogClose = BaseDialog.Close

function DialogContent({
  className,
  children,
  showClose = true,
  ...props
}: React.ComponentProps<typeof BaseDialog.Popup> & { showClose?: boolean }) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop
        className={cn(
          'fixed inset-0 z-[var(--z-modal-backdrop)] bg-overlay',
          'transition-opacity duration-[var(--duration-normal)] data-[starting-style]:opacity-0 data-[ending-style]:opacity-0',
        )}
      />
      <BaseDialog.Popup
        data-slot="dialog-content"
        className={cn(
          'fixed left-1/2 top-1/2 z-[var(--z-modal)] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[var(--radius-lg)] border border-hairline bg-canvas p-6 shadow-[var(--shadow-lg)] outline-none',
          'transition-[transform,opacity] duration-[var(--duration-normal)] data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
          className,
        )}
        {...props}
      >
        {children}
        {showClose && (
          <BaseDialog.Close
            className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-[var(--radius-sm)] text-mute outline-none transition-colors hover:bg-canvas-soft hover:text-ink focus-visible:ring-2 focus-visible:ring-ring/40"
            aria-label="关闭"
          >
            <X className="size-4" />
          </BaseDialog.Close>
        )}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('mb-4 flex flex-col gap-1.5', className)} {...props} />
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof BaseDialog.Title>) {
  return (
    <BaseDialog.Title
      className={cn('type-title-sm text-ink', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof BaseDialog.Description>) {
  return (
    <BaseDialog.Description
      className={cn('type-body-sm text-body', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
}
