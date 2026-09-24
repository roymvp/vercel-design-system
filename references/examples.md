# 可编译示例

`assets/starter/examples/quick-start.tsx` 使用真实的 Button/Input/Card/CardTitle/CardDescription/Badge API，纳入完整 TypeScript 检查。继承 starter 后从 `@/examples/quick-start` 导入，不从 memory 或只读路径导入。

```tsx
import { QuickStartExample } from '@/examples/quick-start'

export default function Page() {
  return (
    <main className="preview-section font-sans">
      <h1 className="type-section-heading text-ink">组件预览</h1>
      <div className="mt-8"><QuickStartExample /></div>
    </main>
  )
}
```

展示顺序：SiteNav → HeroSection → FoundationsSection（色板）→ TypeSection → PreviewComponentsSection（按钮/卡片/表单）→ LayoutFoundationsSection（间距/圆角/高程/响应式）→ ComponentsSection（工程扩展组合）→ SystemSection（工程扩展交互）→ FooterSection。

- hero 左对齐、纯色、真实页内链接，无 MeshGradient 或 CodeMockup。
- 基础区按 Live Preview 实际样式校准；中文、等宽字体和无障碍修正明确记录。
- 工程扩展独立标注；保留主题、定价、文章、时间线、反馈与浮层等，但不冒充源预览原生组件。
- 新应用必须替换展示页，不把所有样本复制进业务页面。按实际需求组合公开组件。
