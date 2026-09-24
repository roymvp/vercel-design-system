/* Palette, spacing, radii and depth follow the Live Preview's rendered examples, not conflicting labels. */
const colors = [
  { name: 'Ink', token: 'ink', value: '#171717 / #ffffff', role: '标题、主按钮与最高强调文字。' },
  { name: 'Body', token: 'body', value: '#4d4d4d / #a1a1a1', role: '正文与必读辅助信息。' },
  { name: 'Mute', token: 'mute', value: '#8f8f8f / #a1a1a1', role: '预览原始弱化色；不用于浅底必读小字。' },
  { name: 'Hairline', token: 'hairline', value: '#ebebeb / #2e2e2e', role: '卡片、输入框与分隔线。' },
  { name: 'Canvas', token: 'background', value: '#ffffff / #0a0a0a', role: '实际页面画布，不以色板标签推断底色。' },
  { name: 'Surface', token: 'card', value: '#ffffff / #171717', role: '内容卡片与浮层表面。' },
  { name: 'Blue', token: 'link', value: '#0070f3', role: '链接、焦点与少量强调。' },
  { name: 'Violet', token: 'violet', value: '#7928ca', role: '源色板样本，不代表默认装饰。' },
  { name: 'Cyan', token: 'cyan', value: '#50e3c2', role: '源色板样本，不代表默认装饰。' },
  { name: 'Pink', token: 'highlight-pink', value: '#ff0080', role: '源色板样本，不代表默认装饰。' },
  { name: 'Error', token: 'error', value: '#ee0000 / #ff6166', role: '错误与破坏性操作。' },
  { name: 'Warning', token: 'warning', value: '#f5a623', role: '警示色样本；状态同时提供文字。' },
]
const spacing = [['xxs', 4], ['xs', 8], ['sm', 12], ['md', 16], ['lg', 24], ['xl', 32], ['2xl', 40], ['3xl', 64], ['4xl', 96], ['section', 128]] as const
const radii = [['none', 0], ['sm', 6], ['md', 12], ['lg', 16], ['pill-sm', 64], ['pill', 100], ['full', 9999]] as const

export function FoundationsSection() {
  return (
    <section id="foundations" className="preview-section" aria-labelledby="palette-heading">
      <h2 id="palette-heading" className="type-section-heading mb-8 text-ink">色彩体系</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 max-[720px]:grid-cols-1">
        {colors.map((color) => (
          <div key={color.name} className="overflow-hidden rounded-[8px] border border-hairline">
            <div className="h-[90px]" style={{ background: `var(--${color.token})` }} />
            <div className="p-3">
              <p className="text-sm font-semibold text-ink">{color.name}</p>
              <p className="type-caption mt-0.5 text-body">{color.value}</p>
              <p className="type-caption mt-1.5 text-body">{color.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function LayoutFoundationsSection() {
  return (
    <div id="layout">
      <section className="preview-section" aria-labelledby="spacing-heading">
        <h2 id="spacing-heading" className="type-section-heading mb-8 text-ink">间距刻度</h2>
        <div className="flex flex-wrap items-end gap-4">
          {spacing.map(([name, value]) => <div key={name}>
            <div className="h-10 rounded-[var(--radius-sm)] bg-ink" style={{ width: value }} />
            <p className="type-caption mt-2 text-body">{name} · {value}px</p>
          </div>)}
        </div>
      </section>
      <section className="preview-section" aria-labelledby="radius-heading">
        <h2 id="radius-heading" className="type-section-heading mb-8 text-ink">圆角刻度</h2>
        <div className="flex flex-wrap items-end gap-4">
          {radii.map(([name, value]) => <div key={name}>
            <div className="flex size-[90px] items-center justify-center border-2 border-ink text-xs" style={{ borderRadius: value }}>{value}px</div>
            <p className="type-caption mt-2 text-body">{name}</p>
          </div>)}
        </div>
      </section>
      <section className="preview-section" aria-labelledby="depth-heading">
        <h2 id="depth-heading" className="type-section-heading mb-8 text-ink">高程与深度</h2>
        <div className="grid gap-5 min-[721px]:grid-cols-2">
          <div className="rounded-[var(--radius-md)] border border-hairline bg-card p-6 type-body-md text-body">Level 0 · 默认平面，仅 1px 发丝描边。</div>
          <div className="rounded-[var(--radius-md)] bg-card p-6 type-body-md text-body shadow-[var(--shadow-2)]">Level 2 · 实际渲染为 0 8px 24px / 10% 单层阴影。</div>
        </div>
      </section>
      <section className="preview-section" aria-labelledby="responsive-heading">
        <h2 id="responsive-heading" className="type-section-heading mb-8 text-ink">响应式布局</h2>
        <p className="type-body-lg text-body">容器最大 1440px。桌面两侧 48px，平板 32px，手机 20px。预览实际在 1024px 和 720px 切换，基础网格在手机收为单列。</p>
        <div className="mt-6 flex flex-wrap items-end gap-3" aria-label="示意设备宽度，非等比模型">
          {[375, 768, 1024, 1280, 1440].map((width, index) => <div key={width} className="flex items-center justify-center rounded-[8px] border border-hairline text-xs text-body" style={{ width: 60 + index * 24, height: 80 + index * 16 }}>{width}</div>)}
        </div>
      </section>
    </div>
  )
}
