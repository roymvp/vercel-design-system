import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/*
  vercel 风格定价卡
  源规范 components：pricing-card（canvas 面 / 12px 圆角 / Level 4）、
  pricing-card-featured（极性翻转到 primary 深墨面，CTA 反白）。
  3-up 布局中间层翻转是品牌的定价节奏。
*/
export function PricingCard({
  tier,
  price,
  period = '/ 月',
  description,
  features,
  cta,
  featured = false,
  className,
}: {
  tier: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-[var(--radius-lg)] p-[var(--space-xl)] shadow-[var(--shadow-4)]',
        featured
          ? 'bg-panel-invert text-panel-invert-foreground'
          : 'bg-canvas text-ink',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <h3 className="type-display-md">{tier}</h3>
        {featured && (
          <span className="rounded-[var(--radius-full)] bg-white/15 px-2 py-0.5 type-caption text-on-primary">
            最受欢迎
          </span>
        )}
      </div>
      <p
        className={cn(
          'mt-2 type-body-sm',
          featured ? 'text-white/70' : 'text-body',
        )}
      >
        {description}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="type-display-xl">{price}</span>
        <span
          className={cn(
            'type-body-sm',
            featured ? 'text-white/70' : 'text-mute',
          )}
        >
          {period}
        </span>
      </div>
      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 type-body-md">
            <Check
              className={cn(
                'mt-0.5 size-4 shrink-0',
                featured ? 'text-cyan' : 'text-link',
              )}
            />
            <span className={featured ? 'text-white/90' : 'text-body'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={featured ? 'invert' : 'primary'}
        size="md"
        className={cn(
          'mt-8 w-full',
          // featured 面板是固定深底，CTA 固定为白 pill + 深字（invert 变体会随主题翻转，此处覆盖）
          featured &&
            'bg-panel-invert-foreground text-panel-invert hover:bg-panel-invert-foreground/90',
        )}
      >
        {cta}
      </Button>
    </div>
  )
}
