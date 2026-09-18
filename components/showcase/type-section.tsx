/*
  排版区块：完整呈现规范排版刻度（display / body / caption / code）。
  Geist 为几何无衬线主面，Geist Mono 用于技术标签与代码。
*/
const specimens: { cls: string; name: string; meta: string; sample: string }[] = [
  { cls: 'type-display-xl', name: 'display-xl', meta: '48 / 600 / -5% 字距', sample: '构建、预览、交付' },
  { cls: 'type-display-lg', name: 'display-lg', meta: '32 / 600 / -4% 字距', sample: '为速度而设计的界面' },
  { cls: 'type-display-md', name: 'display-md', meta: '24 / 600 / -4% 字距', sample: '统一的视觉语言' },
  { cls: 'type-display-sm', name: 'display-sm', meta: '20 / 600 / -3% 字距', sample: '组件与 token' },
  { cls: 'type-body-lg', name: 'body-lg', meta: '18 / 400', sample: '正文大号用于引导段落，行高宽松、阅读舒适。' },
  { cls: 'type-body-md', name: 'body-md', meta: '16 / 400', sample: '标准正文，承载页面大部分说明性文字与描述。' },
  { cls: 'type-body-sm', name: 'body-sm', meta: '14 / 400 / -2% 字距', sample: '小号正文，用于辅助说明、表单帮助与元信息。' },
  { cls: 'type-caption', name: 'caption', meta: '12 / 400', sample: '标注文字，用于图注、时间戳与次要标签。' },
  { cls: 'type-caption-mono', name: 'caption-mono', meta: '12 / 400 · mono', sample: 'DEPLOYMENT · READY · 2.4s' },
  { cls: 'type-code', name: 'code', meta: '13 / 400 · mono', sample: 'const region = "hkg1"' },
]

export function TypeSection() {
  return (
    <section className="border-b border-hairline py-[var(--space-5xl)]">
      <div className="mx-auto max-w-[var(--page-width)] px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="type-caption-mono uppercase text-mute">Typography</p>
          <h2 className="type-display-lg mt-3 text-balance text-ink">
            几何无衬线 + 等宽技术标签
          </h2>
          <p className="type-body-md mt-3 text-pretty text-body">
            Geist 承载全部层级，display 的紧负字距是品牌声音；Geist Mono 专属于代码、
            终端与技术标签，绝不用于正文段落。
          </p>
        </div>

        <div className="mt-[var(--space-2xl)] divide-y divide-hairline">
          {specimens.map((s) => (
            <div
              key={s.name}
              className="grid grid-cols-1 gap-2 py-6 md:grid-cols-[200px_1fr] md:items-baseline md:gap-8"
            >
              <div className="shrink-0">
                <p className="type-body-sm-strong text-ink">{s.name}</p>
                <p className="type-caption-mono text-mute">{s.meta}</p>
              </div>
              <p className={`${s.cls} text-ink`}>{s.sample}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
