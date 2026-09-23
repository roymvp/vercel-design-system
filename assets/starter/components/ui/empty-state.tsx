import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格空状态。居中：可选图标槽 + 标题 + 说明 + 可选操作区。
  发丝描边虚线卡壳，用于「暂无数据/项目/部署」这类占位。
*/
function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div
      data-slot="empty-state"
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)] border border-dashed border-hairline px-6 py-12 text-center',
        className,
      )}
      {...props}
    >
      {icon && <div className="text-mute">{icon}</div>}
      <div className="flex flex-col gap-1">
        <p className="type-body font-medium text-ink">{title}</p>
        {description && <p className="type-body-sm text-body">{description}</p>}
      </div>
      {action && <div className="mt-1">{action}</div>}
    </div>
  )
}

export { EmptyState }
