import { ChevronLeft, ChevronRight } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格分页。方角按钮组，当前页填 ink 面 canvas 字，其余发丝描边
  hover 转 canvas-soft；上/下页为图标按钮，禁用时降透明。
  纯展示原语：onPageChange 由调用方接管路由/查询。
*/
function Pagination({
  page,
  total,
  onPageChange,
  className,
}: {
  page: number
  total: number
  onPageChange?: (p: number) => void
  className?: string
}) {
  const pages = Array.from({ length: total }, (_, i) => i + 1)
  const btn =
    'inline-flex h-8 min-w-8 items-center justify-center rounded-[var(--radius-sm)] px-2 type-body-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring/40 disabled:opacity-[var(--opacity-disabled)] disabled:pointer-events-none'
  return (
    <nav aria-label="分页" className={cn('flex items-center gap-1', className)}>
      <button
        type="button"
        className={cn(btn, 'border border-hairline text-body hover:bg-canvas-soft hover:text-ink')}
        onClick={() => onPageChange?.(page - 1)}
        disabled={page <= 1}
        aria-label="上一页"
      >
        <ChevronLeft className="size-4" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={cn(
            btn,
            p === page
              ? 'bg-ink text-canvas'
              : 'border border-hairline text-body hover:bg-canvas-soft hover:text-ink',
          )}
          onClick={() => onPageChange?.(p)}
          aria-current={p === page ? 'page' : undefined}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        className={cn(btn, 'border border-hairline text-body hover:bg-canvas-soft hover:text-ink')}
        onClick={() => onPageChange?.(page + 1)}
        disabled={page >= total}
        aria-label="下一页"
      >
        <ChevronRight className="size-4" />
      </button>
    </nav>
  )
}

export { Pagination }
