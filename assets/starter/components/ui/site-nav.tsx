'use client'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/* Northstar is a fictional specimen name; links navigate the showcase, not a product service. */
const links = [
  ['基础规范', '#foundations'],
  ['排版', '#typography'],
  ['组件', '#components'],
  ['布局', '#layout'],
  ['工程扩展', '#extensions'],
]

export function SiteNav({ className }: { className?: string }) {
  return (
    <header className={cn('sticky top-0 z-[var(--z-sticky)] border-b border-hairline bg-background', className)}>
      <div className="grid h-16 grid-cols-[1fr_auto_1fr] items-center px-12 max-[720px]:h-14 max-[720px]:grid-cols-[1fr_auto] max-[720px]:px-5">
        <a href="#hero-title" className="focus-ring justify-self-start text-base font-bold text-ink">Northstar</a>
        <nav aria-label="展示页导航" className="flex items-center gap-7 max-[720px]:hidden">
          {links.map(([label, href]) => <a key={href} href={href} className="focus-ring text-[15px] font-medium text-ink hover:underline">{label}</a>)}
        </nav>
        <a href="#components" className={cn(buttonVariants({ size: 'md' }), 'justify-self-end max-[1024px]:hidden')}>浏览组件</a>
        <a href="#extensions" className="focus-ring hidden justify-self-end text-sm max-[720px]:inline">工程扩展</a>
      </div>
    </header>
  )
}
