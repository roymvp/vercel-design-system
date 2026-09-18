'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

/*
  vercel 风格标签药丸行
  源规范 components：tab-ghost（canvas 面 / body-sm / 64px pill-sm 圆角）。
  居中一行，移动端可横向滚动；选中项翻转为 ink 面。
*/
export function TabPills({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  const [active, setActive] = useState(0)
  return (
    <div
      className={cn(
        '-mx-4 flex snap-x gap-2 overflow-x-auto px-4 md:mx-0 md:justify-center md:overflow-visible md:px-0',
        className,
      )}
    >
      {items.map((item, i) => (
        <button
          key={item}
          type="button"
          onClick={() => setActive(i)}
          aria-pressed={active === i}
          className={cn(
            'snap-start whitespace-nowrap rounded-[var(--radius-pill-sm)] px-4 py-2 type-body-sm transition-colors',
            active === i
              ? 'bg-primary text-on-primary'
              : 'bg-canvas text-ink border border-hairline hover:bg-canvas-soft',
          )}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
