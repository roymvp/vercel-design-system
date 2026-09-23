'use client'

import * as React from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme, type Theme } from './theme-provider'

/*
  分段主题切换器（light / system / dark），对齐 Geist 的三态模型。
  纯 token 驱动：胶囊外框 hairline 描边，选中项用 canvas 面 + 阴影浮起。
  水合前 theme 恒为 'system'，避免 SSR/CSR 不一致；水合后读回真实偏好。
*/

const OPTIONS: { value: Theme; label: string; Icon: typeof Sun }[] = [
  { value: 'light', label: '浅色', Icon: Sun },
  { value: 'system', label: '跟随系统', Icon: Monitor },
  { value: 'dark', label: '深色', Icon: Moon },
]

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <div
      role="radiogroup"
      aria-label="主题"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-[var(--radius-full)] border border-hairline bg-canvas-soft p-0.5',
        className,
      )}
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = mounted && theme === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              'focus-ring flex size-7 items-center justify-center rounded-[var(--radius-full)] text-mute transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]',
              active
                ? 'bg-canvas text-ink shadow-[var(--shadow-2)]'
                : 'hover:text-ink',
            )}
          >
            <Icon className="size-4" strokeWidth={1.75} aria-hidden />
          </button>
        )
      })}
    </div>
  )
}
