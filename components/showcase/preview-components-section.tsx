import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function PreviewComponentsSection() {
  return (
    <div id="components">
      <section className="preview-section" aria-labelledby="buttons-heading">
        <h2 id="buttons-heading" className="type-section-heading mb-8 text-ink">按钮</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 max-[720px]:grid-cols-1">
          {[
            ['primary · 100px pill', <Button key="primary">主操作样本</Button>],
            ['secondary · 100px pill', <Button key="secondary" variant="secondary">次操作样本</Button>],
            ['nav · 6px corners', <Button key="nav" size="nav" shape="rounded">导航操作</Button>],
            ['category · 64px pill', <Button key="category" variant="secondary" size="sm" shape="pill">分类标签</Button>],
          ].map(([label, control], index) => <div key={index} className="rounded-[var(--radius-md)] border border-hairline bg-card p-6">
            <p className="type-caption mb-3 text-body">{label}</p>{control}
          </div>)}
        </div>
        <p className="type-caption mt-4 text-body">此处仅演示外观；导航与首屏链接可跳转至对应展示区。</p>
      </section>
      <section className="preview-section" aria-labelledby="cards-heading">
        <h2 id="cards-heading" className="type-section-heading mb-8 text-ink">卡片</h2>
        <div className="grid gap-5 min-[721px]:grid-cols-3">
          <Card><CardTitle>平面卡片</CardTitle><CardDescription className="mt-2">1px 发丝描边，浅色 16px、暗色 12px 圆角。默认不添加阴影。</CardDescription></Card>
          <Card variant="elevated"><CardTitle>抬升卡片</CardTitle><CardDescription className="mt-2">同样的结构，增加预览实际使用的轻量单层阴影。</CardDescription></Card>
          <div className="rounded-[var(--feature-radius)] bg-panel-invert p-6 text-panel-invert-foreground"><h3 className="type-display-sm">墨色表面</h3><p className="type-body-md mt-2">固定反色面，用于需要强调的内容；不会随主题翻成浅色。</p></div>
        </div>
      </section>
      <section className="preview-section" aria-labelledby="forms-heading">
        <h2 id="forms-heading" className="type-section-heading mb-8 text-ink">表单元素</h2>
        <div className="grid gap-5 min-[721px]:grid-cols-2">
          <div className="rounded-[var(--radius-md)] border border-hairline bg-card p-6">
            <label htmlFor="preview-email" className="type-caption mb-3 block text-body">邮箱 · 6px 圆角</label>
            <Input id="preview-email" type="email" placeholder="you@example.com" />
          </div>
          <div className="rounded-[var(--radius-md)] border border-hairline bg-card p-6">
            <label htmlFor="preview-code" className="type-caption mb-3 block text-body">代码样本 · 等宽适配</label>
            <textarea id="preview-code" rows={2} defaultValue="npm run build" className="focus-ring w-full resize-y rounded-[var(--radius-md)] border border-hairline bg-card px-3.5 py-3 font-mono text-sm text-ink" />
          </div>
        </div>
      </section>
    </div>
  )
}
