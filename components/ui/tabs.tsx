'use client'

import { Tabs as BaseTabs } from '@base-ui/react/tabs'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格标签页（Base UI Tabs，完整 WAI-ARIA 键盘导航）。
  下划线样式：TabsList 底部一条 hairline 基线，激活项由 TabsIndicator（2px ink 条）
  跟随移动；非激活 mute 文字 hover 提亮。这是「视图切换」的真交互组件，
  与展示用的 UnderlineTabs（静态）互补。
*/
const Tabs = BaseTabs.Root

function TabsList({ className, children, ...props }: React.ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      data-slot="tabs-list"
      className={cn('relative flex items-center gap-1 border-b border-hairline', className)}
      {...props}
    >
      {children}
      <BaseTabs.Indicator className="absolute bottom-0 left-0 h-0.5 w-[var(--active-tab-width)] translate-x-[var(--active-tab-left)] bg-ink transition-[width,transform] duration-[var(--duration-fast)]" />
    </BaseTabs.List>
  )
}

function TabsTab({ className, ...props }: React.ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      data-slot="tabs-tab"
      className={cn(
        'inline-flex items-center whitespace-nowrap px-1 pb-3 pt-2 type-body-sm text-mute outline-none transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-ring/40 data-[selected]:text-ink',
        className,
      )}
      {...props}
    />
  )
}

function TabsPanel({ className, ...props }: React.ComponentProps<typeof BaseTabs.Panel>) {
  return (
    <BaseTabs.Panel
      data-slot="tabs-panel"
      className={cn('pt-4 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTab, TabsPanel }
