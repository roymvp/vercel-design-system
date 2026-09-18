# 已编译示例

完整、独立的组件组合位于 `assets/starter/examples/quick-start.tsx`，由 starter 的 TypeScript 检查覆盖。它导入 Button、Input、Card、CardTitle、CardDescription、Badge，展示正确参数、关联 label 和非业务提交按钮。

继承完整 starter 后可在任意 Server Component 导入：

```tsx
import { QuickStartExample } from '@/examples/quick-start'

export default function Page() {
  return (
    <main className="mx-auto max-w-[var(--page-width)] px-4 py-12 font-sans md:px-6">
      <h1 className="type-display-lg text-ink">组件预览</h1>
      <div className="mt-8"><QuickStartExample /></div>
    </main>
  )
}
```

完整视觉对照入口：`assets/starter/app/page.tsx`。组合顺序是 SiteNav → HeroSection → FoundationsSection → TypeSection → ComponentsSection → FooterSection。

- foundations-section.tsx 展示颜色、间距、圆角与阴影，不是业务 KPI。
- type-section.tsx 展示中英文与等宽排版，保留源字号但不把小号样本当正文模板。
- components-section.tsx 展示多 variant / size / 状态与定价结构；文案与按钮不表示真实服务。
- hero-section.tsx 展示大画幅 MeshGradient 与按钮尺度，具体示例名称可以替换，布局语言保持一致。

不要把展示页所有区块复制到每一个新页面。按任务组合公共组件，只有需要视觉对照时才保留全展示页。
