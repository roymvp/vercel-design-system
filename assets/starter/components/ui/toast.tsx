'use client'

import { Toast as BaseToast } from '@base-ui/react/toast'
import { X } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格轻提示（Base UI Toast）。右下角堆叠白面卡（md 圆角 + lg 阴影 +
  发丝描边），层级走 --z-toast，进出用 --duration-normal。
  用法：在 layout 或页面顶层套 <ToastProvider>，业务代码用 useToast().add({...}) 触发。
*/
const ToastProvider = BaseToast.Provider
const useToast = BaseToast.useToastManager

function ToastViewport({ className }: { className?: string }) {
  return (
    <BaseToast.Portal>
      <BaseToast.Viewport
        className={cn(
          'fixed bottom-4 right-4 z-[var(--z-toast)] flex w-80 max-w-[calc(100vw-2rem)] flex-col gap-2',
          className,
        )}
      >
        <ToastList />
      </BaseToast.Viewport>
    </BaseToast.Portal>
  )
}

function ToastList() {
  const { toasts } = useToast()
  return (
    <>
      {toasts.map((toast) => (
        <BaseToast.Root
          key={toast.id}
          toast={toast}
          className={cn(
            'relative flex flex-col gap-1 rounded-[var(--radius-md)] border border-hairline bg-canvas p-4 pr-9 shadow-[var(--shadow-lg)]',
            'transition-[transform,opacity] duration-[var(--duration-normal)] data-[starting-style]:translate-x-full data-[starting-style]:opacity-0 data-[ending-style]:translate-x-full data-[ending-style]:opacity-0',
          )}
        >
          <BaseToast.Title className="type-body-sm font-medium text-ink" />
          <BaseToast.Description className="type-caption text-body" />
          <BaseToast.Close
            className="absolute right-2 top-2 inline-flex size-6 items-center justify-center rounded-[var(--radius-xs)] text-mute outline-none transition-colors hover:bg-canvas-soft hover:text-ink focus-visible:ring-2 focus-visible:ring-ring/40"
            aria-label="关闭"
          >
            <X className="size-3.5" />
          </BaseToast.Close>
        </BaseToast.Root>
      ))}
    </>
  )
}

export { ToastProvider, ToastViewport, useToast }
