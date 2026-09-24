'use client'

import { Progress as BaseProgress } from '@base-ui/react/progress'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格进度条（Base UI Progress）。轨 6px canvas-soft，已完成段填 ink，
  过渡走 --duration-normal。value 为 null 时为不定态（Base UI 自动处理 aria）。
*/
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof BaseProgress.Root>) {
  return (
    <BaseProgress.Root data-slot="progress" value={value} className={cn('w-full', className)} {...props}>
      <BaseProgress.Track className="h-1.5 w-full overflow-hidden rounded-[var(--radius-full)] bg-canvas-soft">
        <BaseProgress.Indicator className="h-full rounded-[var(--radius-full)] bg-ink transition-[width] duration-[var(--duration-normal)]" />
      </BaseProgress.Track>
    </BaseProgress.Root>
  )
}

export { Progress }
