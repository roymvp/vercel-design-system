import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

/*
  vercel 风格输入框
  源规范 components：form-input（40px）/ form-input-sm（32px）/ form-input-lg（48px）。
  白面 + 发丝描边 + 6px 方角；聚焦时描边转 ink 并加聚焦环。
*/
const inputVariants = cva(
  'flex w-full rounded-[var(--radius-sm)] border border-hairline bg-canvas text-ink placeholder:text-mute outline-none transition-[color,box-shadow,border-color] focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-error aria-invalid:ring-2 aria-invalid:ring-error/20',
  {
    variants: {
      inputSize: {
        sm: 'h-8 px-3 type-body-sm',
        md: 'h-10 px-3 type-body-sm',
        lg: 'h-12 px-3 type-body-md',
      },
    },
    defaultVariants: {
      inputSize: 'md',
    },
  },
)

function Input({
  className,
  type,
  inputSize,
  ...props
}: React.ComponentProps<'input'> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ inputSize, className }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
