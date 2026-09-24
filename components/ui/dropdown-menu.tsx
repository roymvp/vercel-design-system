'use client'

import { Menu as BaseMenu } from '@base-ui/react/menu'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格下拉菜单（Base UI Menu，完整键盘/ARIA）。触发器由调用方给，
  浮层为白面卡 + 发丝描边 + md 阴影，项 hover 转 canvas-soft；分隔用发丝线。
  层级走 --z-popover，进出用 --duration-fast。
*/
const DropdownMenu = BaseMenu.Root
const DropdownMenuTrigger = BaseMenu.Trigger

function DropdownMenuContent({
  className,
  children,
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof BaseMenu.Popup> & { sideOffset?: number }) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner sideOffset={sideOffset} className="z-[var(--z-popover)] outline-none">
        <BaseMenu.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            'min-w-40 rounded-[var(--radius-md)] border border-hairline bg-canvas p-1 shadow-[var(--shadow-md)] outline-none',
            'origin-[var(--transform-origin)] transition-[transform,opacity] duration-[var(--duration-fast)] data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            className,
          )}
          {...props}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}

function DropdownMenuItem({ className, ...props }: React.ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item
      data-slot="dropdown-menu-item"
      className={cn(
        'flex cursor-default items-center gap-2 rounded-[var(--radius-xs)] px-2 py-1.5 type-body-sm text-body outline-none transition-colors data-[highlighted]:bg-canvas-soft data-[highlighted]:text-ink',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof BaseMenu.Separator>) {
  return (
    <BaseMenu.Separator className={cn('my-1 h-px bg-hairline', className)} {...props} />
  )
}

function DropdownMenuLabel({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('px-2 py-1.5 type-caption text-mute', className)} {...props} />
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
}
