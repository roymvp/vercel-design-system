'use client'

import { Switch as BaseSwitch } from '@base-ui/react/switch'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格开关（Base UI Switch）。轨 36×20，关态发丝描边灰轨，
  开态填 ink 面；滑块 16px canvas 圆点带柔和阴影；聚焦环统一。
*/
function Switch({ className, ...props }: React.ComponentProps<typeof BaseSwitch.Root>) {
  return (
    <BaseSwitch.Root
      data-slot="switch"
      className={cn(
        'inline-flex h-5 w-9 shrink-0 items-center rounded-[var(--radius-full)] border border-hairline bg-canvas-soft p-0.5 outline-none transition-[background-color,border-color,box-shadow] focus-visible:ring-2 focus-visible:ring-ring/40 data-[checked]:border-ink data-[checked]:bg-ink disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]',
        className,
      )}
      {...props}
    >
      <BaseSwitch.Thumb className="size-4 rounded-[var(--radius-full)] bg-canvas shadow-[var(--shadow-xs)] transition-transform data-[checked]:translate-x-4 data-[checked]:bg-canvas" />
    </BaseSwitch.Root>
  )
}

export { Switch }
