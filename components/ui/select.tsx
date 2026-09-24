'use client'

import { Select as BaseSelect } from '@base-ui/react/select'
import { Check, ChevronDown } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格下拉选择（Base UI Select）。触发器与 Input 同款（40px 白面 + 发丝描边 +
  6px 方角 + 聚焦环）；浮层为白面卡 + 发丝描边 + md 阴影，选项 hover 转 canvas-soft、
  选中项右侧显示勾选。层级走 --z-popover，进出用 --duration-fast。
*/
const SelectRoot = BaseSelect.Root
const SelectValue = BaseSelect.Value

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseSelect.Trigger>) {
  return (
    <BaseSelect.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex h-10 w-full items-center justify-between gap-2 rounded-[var(--radius-sm)] border border-hairline bg-canvas px-3 type-body-sm text-ink outline-none transition-[color,box-shadow,border-color] focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ring/40 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-[var(--opacity-disabled)] [&>span]:truncate',
        className,
      )}
      {...props}
    >
      {children}
      <BaseSelect.Icon className="text-mute">
        <ChevronDown className="size-4" />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  )
}

function SelectContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseSelect.Popup>) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner
        className="z-[var(--z-popover)] outline-none"
        sideOffset={6}
      >
        <BaseSelect.Popup
          data-slot="select-content"
          className={cn(
            'max-h-[var(--available-height)] min-w-[var(--anchor-width)] overflow-y-auto rounded-[var(--radius-md)] border border-hairline bg-canvas p-1 shadow-[var(--shadow-md)] outline-none',
            'origin-[var(--transform-origin)] transition-[transform,opacity] duration-[var(--duration-fast)] data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            className,
          )}
          {...props}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseSelect.Item>) {
  return (
    <BaseSelect.Item
      data-slot="select-item"
      className={cn(
        'flex cursor-default items-center justify-between gap-2 rounded-[var(--radius-xs)] px-2 py-1.5 type-body-sm text-body outline-none transition-colors data-[highlighted]:bg-canvas-soft data-[highlighted]:text-ink data-[selected]:text-ink',
        className,
      )}
      {...props}
    >
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="text-ink">
        <Check className="size-4" />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  )
}

export {
  SelectRoot as Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
}
