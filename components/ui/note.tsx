import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格提示块（Note / inline banner）。左侧语义图标 + 文案，
  柔和语义底 + 同色系发丝描边。用于页面内的信息/成功/警告/错误提示。
  语气克制：默认 info 用中性 canvas-soft，避免整页彩色噪声。
*/
const TONE = {
  info: { wrap: 'border-hairline bg-canvas-soft text-body', icon: 'text-mute', Icon: Info },
  success: { wrap: 'border-success/30 bg-success-soft text-ink', icon: 'text-success', Icon: CheckCircle2 },
  warning: { wrap: 'border-warning/30 bg-warning-soft text-ink', icon: 'text-warning', Icon: AlertTriangle },
  error: { wrap: 'border-error/30 bg-error-soft text-ink', icon: 'text-error', Icon: XCircle },
} as const

function Note({
  tone = 'info',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { tone?: keyof typeof TONE }) {
  const t = TONE[tone]
  return (
    <div
      data-slot="note"
      role="note"
      className={cn(
        'flex items-start gap-2.5 rounded-[var(--radius-md)] border px-3.5 py-3 type-body-sm',
        t.wrap,
        className,
      )}
      {...props}
    >
      <t.Icon className={cn('mt-0.5 size-4 shrink-0', t.icon)} aria-hidden />
      <div className="min-w-0">{children}</div>
    </div>
  )
}

export { Note }
