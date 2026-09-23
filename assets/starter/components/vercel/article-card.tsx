import { AvatarStack } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

/*
  vercel 风格文章卡（blog 列表用）。
  实测官方：无边框无阴影、近乎裸排，靠留白与字号分层。
  meta 行 = 日期 + 分类（body-sm / mute）；标题 32px/450 字距 -0.04em；
  摘要 body-md / body 色；底部作者头像组 + 署名。整卡可点。
*/
export function ArticleCard({
  href = '#',
  date,
  category,
  title,
  excerpt,
  authors,
  authorLabel,
  className,
}: {
  href?: string
  date: string
  category: string
  title: string
  excerpt: string
  authors: { src: string; alt: string }[]
  authorLabel: string
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        'group flex flex-col gap-4 rounded-[var(--radius-sm)] outline-none focus-visible:ring-2 focus-visible:ring-ink/60',
        className,
      )}
    >
      <div className="flex items-center gap-3 type-body-sm text-mute">
        <span>{date}</span>
        <span>{category}</span>
      </div>
      <h3 className="type-display-sm text-balance text-ink transition-colors group-hover:text-body">
        {title}
      </h3>
      <p className="type-body-md text-pretty text-body">{excerpt}</p>
      <div className="mt-1 flex items-center gap-2">
        <AvatarStack avatars={authors} size="sm" />
        <span className="type-body-sm text-body">{authorLabel}</span>
      </div>
    </a>
  )
}
