import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/*
  vercel 风格按钮
  源规范 components：button-primary / button-secondary（营销尺度 100px pill）、
  button-primary-sm / button-secondary-sm、nav-cta-signup / login / ask-ai（nav 尺度 6px 方角）。

  规则：营销尺度一律 pill（rounded-pill 100px），nav 尺度一律 6px 方角（rounded-sm）。
  「不要在同一屏混用两种尺度」是规范硬约束，因此圆角随 size 走，不随 variant 走。
  颜色走 variant，label 用规范 button 排版（type-button-*）。
*/
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // 主 CTA：近黑墨，浅色面上的最高优先级操作
        primary: 'bg-primary text-on-primary hover:bg-primary/90',
        // 次操作：白面 + 发丝描边，与主 CTA 成对
        secondary:
          'bg-canvas text-ink border border-hairline hover:bg-canvas-soft',
        // 反白：深色带内部的主操作（白 pill on ink）
        invert: 'bg-canvas text-ink hover:bg-canvas/90',
        // nav 幽灵：带发丝描边的 Ask AI 型按钮
        ghost: 'bg-canvas text-ink border border-hairline hover:bg-canvas-soft',
        // 行内链接蓝
        link: 'text-link underline-offset-4 hover:underline',
      },
      size: {
        // 营销尺度 → pill
        lg: 'h-12 rounded-[var(--radius-pill)] px-6 type-button-lg',
        md: 'h-10 rounded-[var(--radius-pill)] px-5 type-button-md',
        sm: 'h-8 rounded-[var(--radius-pill)] px-4 type-button-md',
        // nav 尺度 → 6px 方角，28px 高
        nav: 'h-7 rounded-[var(--radius-sm)] px-3 type-body-sm-strong',
        // 纯文字链接
        text: 'h-auto rounded-[var(--radius-xs)] p-0 type-body-md',
      },
    },
    compoundVariants: [{ variant: 'link', size: 'md', class: 'h-auto px-0' }],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
