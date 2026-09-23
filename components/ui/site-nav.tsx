'use client'

import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { cn } from '@/lib/utils'

/*
  vercel 风格顶栏
  源规范 components：nav-bar（64px 高 / canvas 面）、nav-link（body 色幽灵药丸）、
  nav-cta-signup / login / ask-ai（28px 高 / 6px 方角）。
  布局：左 logo，中 link 行，右「Ask AI / Log In / Sign Up」簇。
  品牌为中性占位「Northstar」，不使用真实品牌名 / logo。
*/
const links = ['产品', '解决方案', '资源', '文档', '定价']

export function SiteNav({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        'sticky top-0 z-40 h-16 border-b border-hairline bg-canvas/80 backdrop-blur-md',
        className,
      )}
    >
      <div className="mx-auto flex h-full max-w-[var(--page-width)] items-center justify-between gap-6 px-4 md:px-6">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 text-ink">
            <span className="type-body-md-strong">Northstar</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((label) => (
              <a
                key={label}
                href="#"
                className="rounded-[var(--radius-full)] px-3 py-1.5 type-body-sm text-body transition-colors hover:bg-canvas-soft hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <Button variant="ghost" size="nav" className="hidden sm:inline-flex">
            Ask AI
          </Button>
          <Button variant="secondary" size="nav" className="hidden sm:inline-flex">
            登录
          </Button>
          <Button variant="primary" size="nav">
            注册
          </Button>
        </div>
      </div>
    </header>
  )
}
