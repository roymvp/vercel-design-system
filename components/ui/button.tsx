import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

/*
  vercel 风格按钮
  源规范 components：button-primary / button-secondary、nav-cta-signup / login / ask-ai。

  形状与尺度独立（经 vercel.com 实测校准）：
  - shape 控制圆角，默认 rounded（圆角矩形）——官方最常见的按钮形态：
    常规尺度 8px、nav 与 sm 尺度 6px。
  - shape="pill" 为全圆角，仅用于 hero 主 CTA 等少数强调场景，不作为默认。
  早先「营销尺度一律 pill」是对源规范的过度套用；官方导航与多数营销按钮都是圆角矩形。
  颜色走 variant，尺寸走 size，形状走 shape，label 用规范 button 排版（type-button-*）。
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
        lg: 'h-12 px-6 type-button-lg',
        md: 'h-10 px-5 type-button-md',
        sm: 'h-8 px-4 type-button-md',
        // nav 尺度：28px 高
        nav: 'h-7 px-3 type-body-sm-strong',
        // 纯文字链接
        text: 'h-auto p-0 type-body-md',
      },
      shape: {
        // 默认圆角矩形（8px）——官方默认按钮形态
        rounded: 'rounded-[var(--radius-md)]',
        // 全圆角，仅用于 hero 主 CTA 等强调场景
        pill: 'rounded-[var(--radius-full)]',
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
      shape: 'rounded',
    },
  },
)

function Button({
  className,
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
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
