import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格骨架屏。canvas-soft 面 + 脉冲动画，尺寸/圆角由 className 决定。
  reduced-motion 下由 globals.css 统一停用动画。
*/
function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('animate-pulse rounded-[var(--radius-sm)] bg-canvas-soft', className)}
      {...props}
    />
  )
}

export { Skeleton }
