'use client'

import { Slider as BaseSlider } from '@base-ui/react/slider'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格滑块（Base UI Slider）。轨 4px canvas-soft，已填充段转 ink；
  拇指 16px canvas 圆点 + 发丝描边 + 柔和阴影；聚焦环统一。
*/
function Slider({ className, ...props }: React.ComponentProps<typeof BaseSlider.Root>) {
  return (
    <BaseSlider.Root data-slot="slider" className={cn('w-full', className)} {...props}>
      <BaseSlider.Control className="flex w-full items-center py-2">
        <BaseSlider.Track className="h-1 w-full rounded-[var(--radius-full)] bg-canvas-soft">
          <BaseSlider.Indicator className="rounded-[var(--radius-full)] bg-ink" />
          <BaseSlider.Thumb className="size-4 rounded-[var(--radius-full)] border border-hairline bg-canvas shadow-[var(--shadow-xs)] outline-none focus-visible:ring-2 focus-visible:ring-ring/40" />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  )
}

export { Slider }
