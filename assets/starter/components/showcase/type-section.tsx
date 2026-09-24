/* Rendered preview values take precedence over its contradictory specimen labels. */
const specimens = [
  { cls: 'type-display-xl', name: 'display-xl', meta: '64px / 600 / 48px / -2.4px', sample: '构建、预览、交付' },
  { cls: 'type-display-lg', name: 'heading-lg', meta: '32px / 600 / 40px / -1.28px', sample: '为速度而设计的界面' },
  { cls: 'type-display-sm', name: 'heading-md', meta: '20px / 600 / 28px / -0.4px', sample: '统一的视觉语言' },
  { cls: 'type-body-sm-strong', name: 'label-sm', meta: '14px / 500 / 20px / -0.28px', sample: '组件与设计令牌' },
  { cls: 'type-caption-mono', name: 'mono-eyebrow', meta: '12px / 500 / 16px', sample: 'BUILD · PREVIEW · SHIP' },
  { cls: 'type-body-lg', name: 'body-lg', meta: '16px / 400 / 24px', sample: '大号正文用于引导段落，保持清晰的阅读节奏。' },
  { cls: 'type-body-md', name: 'body-md', meta: '14px / 400 / 20px', sample: '标准正文承载说明性文字与描述。' },
  { cls: 'type-body-sm', name: 'body-sm', meta: '12px / 400 / 16px', sample: '小号样本，不作为中文长文模板。' },
  { cls: 'type-code', name: 'code', meta: '14px / 400 / 20px', sample: 'const region = "hkg1"' },
]

export function TypeSection() {
  return (
    <section id="typography" className="preview-section" aria-labelledby="type-heading">
      <h2 id="type-heading" className="type-section-heading mb-8 text-ink">排版体系</h2>
      <p className="type-body-lg mb-7 text-body">预览实际加载 Inter，标题使用 600 字重。中文补充 Noto Sans SC，代码使用 Geist Mono；后二者为明确的字体适配。下方标注顺序为字号、字重、行高、字距。</p>
      <div>
        {specimens.map((s) => (
          <div key={s.name} className="grid grid-cols-[240px_1fr] items-baseline gap-6 border-t border-hairline py-[18px] max-[1024px]:grid-cols-1 max-[1024px]:gap-2">
            <div className="type-caption text-body"><p>{s.name}</p><p>{s.meta}</p></div>
            <p className={`${s.cls} text-ink`}>{s.sample}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
