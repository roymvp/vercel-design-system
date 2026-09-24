import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

/* Live Preview feature cards are flat by default: 16px light / 12px dark.
   Legacy variants remain available as explicitly documented engineering extensions. */
const cardVariants = cva('text-ink', {
  variants: {
    variant: {
      marketing:
        'bg-card rounded-[var(--feature-radius)] p-6 border border-hairline',
      elevated:
        'bg-card rounded-[var(--feature-radius)] p-6 border border-hairline shadow-[var(--shadow-2)]',
      large:
        'bg-canvas rounded-[var(--radius-lg)] p-[var(--space-xl)] shadow-[var(--shadow-4)]',
      soft: 'bg-canvas-soft rounded-[var(--radius-md)] p-[var(--space-lg)] shadow-[var(--shadow-1)]',
      template:
        'bg-canvas rounded-[var(--radius-md)] p-[var(--space-md)] shadow-[var(--shadow-2)]',
      flat: 'bg-canvas rounded-[var(--radius-md)] p-[var(--space-lg)] border border-hairline',
    },
  },
  defaultVariants: {
    variant: 'marketing',
  },
})

function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'h3'>) {
  return (
    <h3
      data-slot="card-title"
      className={cn('type-display-sm text-ink', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="card-description"
      className={cn('type-body-md text-body', className)}
      {...props}
    />
  )
}

export { Card, CardTitle, CardDescription, cardVariants }
