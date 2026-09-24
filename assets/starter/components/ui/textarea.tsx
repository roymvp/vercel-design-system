import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格多行输入。与 Input 同一视觉语言：白面 + 发丝描边 + 6px 方角，
  聚焦时描边转 ink 并加聚焦环；最小高度 80px，垂直可拉伸。
*/
function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex min-h-20 w-full resize-y rounded-[var(--radius-sm)] border border-hairline bg-canvas px-3 py-2 type-body-sm text-ink placeholder:text-mute outline-none transition-[color,box-shadow,border-color] focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)] aria-invalid:border-error aria-invalid:ring-2 aria-invalid:ring-error/20',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
