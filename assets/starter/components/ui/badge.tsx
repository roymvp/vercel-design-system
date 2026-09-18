import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

/*
  vercel 风格徽章 / 药丸
  源规范 components：badge-secondary（canvas-soft 面 / caption / full 圆角）、
  banner-marketing（「Introducing X」公告药丸）。语义色变体用于 New / Beta / Live 等状态。
*/
const badgeVariants = cva(
  'inline-flex items-center gap-1.5 whitespace-nowrap rounded-[var(--radius-full)] type-caption',
  {
    variants: {
      variant: {
        secondary: 'bg-canvas-soft text-body px-2 py-0.5',
        outline: 'border border-hairline bg-canvas text-body px-2 py-0.5',
        info: 'bg-link-bg-soft text-link-deep px-2 py-0.5',
        success: 'bg-link-bg-soft text-link-deep px-2 py-0.5',
        warning: 'bg-warning-soft text-warning-deep px-2 py-0.5',
        error: 'bg-error-soft text-error-deep px-2 py-0.5',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  },
)

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
