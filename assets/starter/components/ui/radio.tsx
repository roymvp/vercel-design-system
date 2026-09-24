'use client'

import { Radio as BaseRadio } from '@base-ui/react/radio'
import { RadioGroup as BaseRadioGroup } from '@base-ui/react/radio-group'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格单选（Base UI RadioGroup + Radio）。16px 圆点、发丝描边，
  选中时描边转 ink 并显示居中 ink 圆点；聚焦环统一。
*/
function RadioGroup({ className, ...props }: React.ComponentProps<typeof BaseRadioGroup>) {
  return (
    <BaseRadioGroup
      data-slot="radio-group"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function Radio({ className, ...props }: React.ComponentProps<typeof BaseRadio.Root>) {
  return (
    <BaseRadio.Root
      data-slot="radio"
      className={cn(
        'flex size-4 shrink-0 items-center justify-center rounded-[var(--radius-full)] border border-hairline bg-canvas outline-none transition-[border-color,box-shadow] focus-visible:ring-2 focus-visible:ring-ring/40 data-[checked]:border-ink disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]',
        className,
      )}
      {...props}
    >
      <BaseRadio.Indicator className="size-2 rounded-[var(--radius-full)] bg-ink data-[unchecked]:hidden" />
    </BaseRadio.Root>
  )
}

export { RadioGroup, Radio }
