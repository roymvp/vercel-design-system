import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/* Live Preview uses 100px marketing pills; its compact nav specimen uses 6px corners.
   Shape remains explicit for backwards-compatible engineering controls. */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // 主 CTA：近黑墨，浅色面上的最高优先级操作
        primary: 'border-2 border-primary bg-primary text-on-primary hover:bg-primary/90',
        // 次操作：白面 + 发丝描边，与主 CTA 成对
        secondary:
          'bg-canvas text-ink border-[length:var(--secondary-button-width)] border-[var(--secondary-button-border)] hover:bg-canvas-soft',
        // 反白：深色带内部的主操作（白 pill on ink）
        invert: 'bg-canvas text-ink hover:bg-canvas/90',
        // nav 幽灵：带发丝描边的 Ask AI 型按钮
        ghost: 'bg-canvas text-ink border border-hairline hover:bg-canvas-soft',
        // 行内链接蓝
        link: 'text-link underline-offset-4 hover:underline',
      },
      size: {
        lg: 'h-12 px-[27px] type-button-lg',
        md: 'h-10 px-[18px] type-button-md',
        sm: 'h-8 px-4 type-button-md',
        // Live Preview compact navigation specimen: 32px.
        nav: 'h-8 px-3 type-button-md',
        // 纯文字链接
        text: 'h-auto p-0 type-body-md',
      },
      shape: {
        // Engineering control shape; compact sizes remain 6px below.
        rounded: 'rounded-[var(--radius-md)]',
        // Live Preview marketing default.
        pill: 'rounded-[var(--radius-pill)]',
      },
    },
    compoundVariants: [
      // 小尺度圆角矩形收到 6px，贴合官方 nav / 小按钮
      { size: 'sm', shape: 'rounded', class: 'rounded-[var(--radius-sm)]' },
      { size: 'nav', shape: 'rounded', class: 'rounded-[var(--radius-sm)]' },
      { variant: 'link', size: 'md', class: 'h-auto px-0' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      shape: 'pill',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
