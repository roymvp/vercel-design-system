'use client'

import { Accordion as BaseAccordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格手风琴（Base UI Accordion，完整键盘/ARIA）。发丝线分隔条目，
  触发行左标题右箭头，展开时箭头转 180°；面板用 CSS 变量高度做平滑展开，
  过渡走 --duration-normal。用于 FAQ / 可折叠区块。
*/
const Accordion = BaseAccordion.Root

function AccordionItem({ className, ...props }: React.ComponentProps<typeof BaseAccordion.Item>) {
  return (
    <BaseAccordion.Item
      data-slot="accordion-item"
      className={cn('border-b border-hairline', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Trigger>) {
  return (
    <BaseAccordion.Header>
      <BaseAccordion.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group flex w-full items-center justify-between gap-4 py-4 text-left type-body font-medium text-ink outline-none transition-colors hover:text-body focus-visible:ring-2 focus-visible:ring-ring/40',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 text-mute transition-transform duration-[var(--duration-fast)] group-data-[panel-open]:rotate-180" />
      </BaseAccordion.Trigger>
    </BaseAccordion.Header>
  )
}

function AccordionPanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof BaseAccordion.Panel>) {
  return (
    <BaseAccordion.Panel
      data-slot="accordion-panel"
      className={cn(
        'h-[var(--accordion-panel-height)] overflow-hidden transition-[height] duration-[var(--duration-normal)] data-[starting-style]:h-0 data-[ending-style]:h-0',
        className,
      )}
      {...props}
    >
      <div className="pb-4 type-body-sm text-body">{children}</div>
    </BaseAccordion.Panel>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel }
