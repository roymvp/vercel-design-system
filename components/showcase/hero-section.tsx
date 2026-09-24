import { buttonVariants } from '@/components/ui/button'

/* Live Preview renders a plain, left-aligned hero; its prose mentions a gradient that is not rendered. */
export function HeroSection() {
  return (
    <section className="preview-hero" aria-labelledby="hero-title">
      <h1 id="hero-title" className="type-hero text-balance text-ink">
        为构建、预览与交付而生的界面语言
      </h1>
      <p className="preview-lede text-pretty text-body">
        纯色画布、墨色文字与发丝描边，以字号和留白建立层级。
        这里以 Live Preview 的实际渲染为依据，展示明暗主题、排版、基础控件与布局刻度。
        额外的交互组件单独标注为工程扩展。
      </p>
      <div className="flex flex-wrap items-center gap-3">
        <a href="#foundations" className={buttonVariants({ size: 'lg', shape: 'pill' })}>浏览基础规范</a>
        <a href="#components" className={buttonVariants({ variant: 'secondary', size: 'lg', shape: 'pill' })}>查看组件</a>
      </div>
    </section>
  )
}
