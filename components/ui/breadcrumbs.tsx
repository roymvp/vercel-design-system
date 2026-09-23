import { ChevronRight } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格面包屑。mute 小字链接 hover 转 ink，斜杠/箭头分隔，
  末项为当前页（aria-current=page，ink 字不可点）。nav+ol 语义完整。
*/
type Crumb = { label: string; href?: string }

function Breadcrumbs({
  items,
  className,
  ...props
}: React.ComponentProps<'nav'> & { items: Crumb[] }) {
  return (
    <nav aria-label="面包屑" className={cn('flex', className)} {...props}>
      <ol className="flex flex-wrap items-center gap-1.5 type-body-sm">
        {items.map((item, i) => {
          const last = i === items.length - 1
          return (
            <li key={i} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <a href={item.href} className="text-mute transition-colors hover:text-ink">
                  {item.label}
                </a>
              ) : (
                <span className={last ? 'text-ink' : 'text-mute'} aria-current={last ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="size-3.5 text-mute/60" aria-hidden />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export { Breadcrumbs }
