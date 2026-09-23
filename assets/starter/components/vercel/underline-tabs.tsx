'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

/*
  vercel 风格下划线标签（docs / 产品页 hero 用）。
  实测官方：active 项 border-bottom 2px solid ink、body-sm / 常规字重、padding 14px 2px；
  inactive 项透明下边框 + mute 文字，hover 提到 ink。与 TabPills（药丸背景翻转）是两种不同模型：
  下划线用于「同一内容区的视图切换」，药丸用于「筛选 / 分类入口」。
*/
export function UnderlineTabs({
  items,
  className,
}: {
  items: string[]
  className?: string
}) {
  const [active, setActive] = useState(0)
  return (
    <div
      role="tablist"
      className={cn(
        '-mx-4 flex gap-6 overflow-x-auto border-b border-hairline px-4 md:mx-0 md:px-0',
        className,
      )}
    >
      {items.map((item, i) => (
        <button
          key={item}
          type="button"
          role="tab"
          aria-selected={active === i}
          onClick={() => setActive(i)}
          className={cn(
            '-mb-px whitespace-nowrap border-b-2 px-0.5 py-3.5 type-body-sm transition-colors',
            active === i
              ? 'border-ink text-ink'
              : 'border-transparent text-mute hover:text-ink',
          )}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
