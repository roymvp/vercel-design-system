'use client'

import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox'
import { Check, Minus } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格复选框（Base UI Checkbox）。16px 方块、4px 圆角、发丝描边，
  选中/半选时填 ink 面、勾选图标转 canvas；聚焦环统一。
*/
function Checkbox({ className, ...props }: React.ComponentProps<typeof BaseCheckbox.Root>) {
  return (
    <BaseCheckbox.Root
      data-slot="checkbox"
      className={cn(
        'flex size-4 shrink-0 items-center justify-center rounded-[var(--radius-xs)] border border-hairline bg-canvas text-canvas outline-none transition-[background-color,border-color,box-shadow] focus-visible:ring-2 focus-visible:ring-ring/40 data-[checked]:border-ink data-[checked]:bg-ink data-[indeterminate]:border-ink data-[indeterminate]:bg-ink disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]',
        className,
      )}
      {...props}
    >
      <BaseCheckbox.Indicator
        className="flex items-center justify-center data-[unchecked]:hidden"
        render={(indicatorProps, state) => (
          <span {...indicatorProps}>
            {state.indeterminate ? (
              <Minus className="size-3" strokeWidth={3} />
            ) : (
              <Check className="size-3" strokeWidth={3} />
            )}
          </span>
        )}
      />
    </BaseCheckbox.Root>
  )
}

export { Checkbox }
