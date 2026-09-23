import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格状态点。8px 圆点表示服务/部署状态，语义色来自 token。
  ready=成功绿、building=进行蓝、error=错误红、queued=中性灰。
  带 sr-only 文案供读屏，不靠颜色单独传达状态。
*/
const TONE = {
  ready: { dot: 'bg-success', label: '正常' },
  building: { dot: 'bg-info', label: '构建中' },
  error: { dot: 'bg-error', label: '错误' },
  queued: { dot: 'bg-mute', label: '排队中' },
} as const

function StatusDot({
  tone = 'ready',
  label,
  className,
  ...props
}: React.ComponentProps<'span'> & {
  tone?: keyof typeof TONE
  label?: string
}) {
  const t = TONE[tone]
  return (
    <span className={cn('inline-flex items-center gap-2', className)} {...props}>
      <span className={cn('size-2 shrink-0 rounded-[var(--radius-full)]', t.dot)} aria-hidden />
      <span className="type-body-sm text-body">{label ?? t.label}</span>
    </span>
  )
}

export { StatusDot }
