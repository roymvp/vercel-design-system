'use client'

import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格工具提示（Base UI Tooltip）。深色反相浮层（ink 面 + canvas 字），
  small 圆角 + md 阴影，层级走 --z-tooltip，进出用 --duration-fast。
  用法：外层套 <TooltipProvider>，再 <Tooltip><TooltipTrigger/><TooltipContent/></Tooltip>。
*/
const TooltipProvider = BaseTooltip.Provider
const Tooltip = BaseTooltip.Root
const TooltipTrigger = BaseTooltip.Trigger

function TooltipContent({
  className,
  sideOffset = 6,
  children,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Popup> & { sideOffset?: number }) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner sideOffset={sideOffset} className="z-[var(--z-tooltip)]">
        <BaseTooltip.Popup
          data-slot="tooltip-content"
          className={cn(
            'rounded-[var(--radius-sm)] bg-ink px-2 py-1 type-caption text-canvas shadow-[var(--shadow-md)]',
            'origin-[var(--transform-origin)] transition-[transform,opacity] duration-[var(--duration-fast)] data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0',
            className,
          )}
          {...props}
        >
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  )
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent }
