import { cn } from '@/lib/utils'

/*
  vercel 风格键位提示（搜索框 ⌘K、命令面板等）。
  实测官方：12px、4px 圆角、发丝描边、GeistSans（非等宽）、ink 文字、白面。
*/
export function Kbd({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <kbd
      className={cn(
        'inline-flex h-5 min-w-5 items-center justify-center rounded-[var(--radius-xs)] border border-hairline bg-canvas px-1 font-sans text-[12px] leading-none text-ink',
        className,
      )}
      {...props}
    />
  )
}
