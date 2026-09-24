import { AvatarStack } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

/*
  vercel 风格 changelog 时间线（changelog 列表用）。
  实测官方：左侧日期列 + 一条贯穿的发丝竖线，右侧内容列（大标题 32px/450 + 摘要 + 作者组）。
  竖线用 border-left（hairline 色），日期 body-sm / 常规。桌面左右分栏，移动端日期落到内容上方、竖线隐藏。
*/
export type ChangelogEntry = {
  date: string
  title: string
  summary: string
  authors: { src: string; alt: string }[]
  authorLabel: string
}

export function ChangelogTimeline({
  entries,
  className,
}: {
  entries: ChangelogEntry[]
  className?: string
}) {
  return (
    <div className={cn('flex flex-col', className)}>
      {entries.map((e, i) => (
        <article
          key={e.title + i}
          className="grid gap-3 md:grid-cols-[10rem_1fr] md:gap-8"
        >
          {/* 日期列 */}
          <div className="type-body-sm text-mute md:pt-1 md:text-right">
            {e.date}
          </div>
          {/* 竖线 + 内容列 */}
          <div className="relative pb-14 md:border-l md:border-hairline md:pl-8">
            <h3 className="type-display-sm text-balance text-ink">
              {e.title}
            </h3>
            <p className="mt-3 type-body-md text-pretty text-body">
              {e.summary}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <AvatarStack avatars={e.authors} size="sm" />
              <span className="type-body-sm text-body">{e.authorLabel}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
