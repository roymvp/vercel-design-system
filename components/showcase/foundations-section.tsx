/*
  基础 tokens 区块：颜色 / 间距 / 圆角 / 高程。
  完整呈现规范 token 集合，供设计系统对照检查。
*/

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string
  title: string
  desc: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="type-caption-mono uppercase text-mute">{eyebrow}</p>
      <h2 className="type-display-lg mt-3 text-balance text-ink">{title}</h2>
      <p className="type-body-md mt-3 text-pretty text-body">{desc}</p>
    </div>
  )
}

const colorGroups: { label: string; swatches: { name: string; value: string; ring?: boolean }[] }[] = [
  {
    label: '墨色与文本',
    swatches: [
      { name: 'ink', value: '#171717' },
      { name: 'body', value: '#4d4d4d' },
      { name: 'mute', value: '#888888' },
      { name: 'on-primary', value: '#ffffff', ring: true },
    ],
  },
  {
    label: '画布与发丝线',
    swatches: [
      { name: 'canvas', value: '#ffffff', ring: true },
      { name: 'canvas-soft', value: '#fafafa', ring: true },
      { name: 'canvas-soft-2', value: '#f5f5f5', ring: true },
      { name: 'hairline', value: '#ebebeb', ring: true },
      { name: 'hairline-strong', value: '#a1a1a1' },
    ],
  },
  {
    label: '链接与强调',
    swatches: [
      { name: 'link', value: '#0070f3' },
      { name: 'link-deep', value: '#0761d1' },
      { name: 'link-bg-soft', value: '#d3e5ff', ring: true },
    ],
  },
  {
    label: '语义状态',
    swatches: [
      { name: 'success', value: '#0070f3' },
      { name: 'error', value: '#ee0000' },
      { name: 'error-deep', value: '#c50000' },
      { name: 'warning', value: '#f5a623' },
      { name: 'warning-deep', value: '#ab570a' },
    ],
  },
  {
    label: '品牌色相',
    swatches: [
      { name: 'violet', value: '#7928ca' },
      { name: 'cyan', value: '#50e3c2' },
      { name: 'highlight-pink', value: '#ff0080' },
      { name: 'highlight-magenta', value: '#eb367f' },
    ],
  },
]

const gradients = [
  { name: 'develop', from: '#007cf0', to: '#00dfd8' },
  { name: 'preview', from: '#7928ca', to: '#ff0080' },
  { name: 'ship', from: '#ff4d4d', to: '#f9cb28' },
]

const radii = [
  { name: 'xs', value: 4 },
  { name: 'sm', value: 6 },
  { name: 'md', value: 8 },
  { name: 'lg', value: 12 },
  { name: 'xl', value: 16 },
  { name: 'pill', value: 100 },
]

const spacing = [
  { name: 'xxs', value: 4 },
  { name: 'xs', value: 8 },
  { name: 'sm', value: 12 },
  { name: 'md', value: 16 },
  { name: 'lg', value: 24 },
  { name: 'xl', value: 32 },
  { name: '2xl', value: 40 },
  { name: '3xl', value: 48 },
]

const elevations = [
  { name: 'Level 1', token: 'var(--shadow-1)' },
  { name: 'Level 2', token: 'var(--shadow-2)' },
  { name: 'Level 3', token: 'var(--shadow-3)' },
  { name: 'Level 4', token: 'var(--shadow-4)' },
  { name: 'Level 5', token: 'var(--shadow-5)' },
]

export function FoundationsSection() {
  return (
    <section className="border-b border-hairline py-[var(--space-5xl)]">
      <div className="mx-auto max-w-[var(--page-width)] px-4 md:px-6">
        <SectionHead
          eyebrow="Foundations"
          title="Tokens 是唯一真相源"
          desc="颜色、间距、圆角与高程全部落实为可引用的 token，组件只消费 token，绝不硬编码原始值。"
        />

        {/* 颜色 */}
        <div className="mt-[var(--space-2xl)] space-y-8">
          {colorGroups.map((group) => (
            <div key={group.label}>
              <p className="type-body-sm-strong text-ink">{group.label}</p>
              <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {group.swatches.map((s) => (
                  <div key={s.name} className="flex flex-col gap-2">
                    <div
                      className="h-16 w-full rounded-[var(--radius-md)]"
                      style={{
                        background: s.value,
                        boxShadow: s.ring ? 'inset 0 0 0 1px #ebebeb' : undefined,
                      }}
                    />
                    <div>
                      <p className="type-body-sm-strong text-ink">{s.name}</p>
                      <p className="type-caption-mono text-mute">{s.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 品牌渐变三对 */}
          <div>
            <p className="type-body-sm-strong text-ink">品牌渐变（仅 hero 尺度）</p>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {gradients.map((g) => (
                <div key={g.name} className="flex flex-col gap-2">
                  <div
                    className="h-16 w-full rounded-[var(--radius-md)]"
                    style={{ background: `linear-gradient(90deg, ${g.from}, ${g.to})` }}
                  />
                  <div>
                    <p className="type-body-sm-strong text-ink">{g.name}</p>
                    <p className="type-caption-mono text-mute">
                      {g.from} → {g.to}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 圆角 / 间距 / 高程 */}
        <div className="mt-[var(--space-3xl)] grid gap-[var(--space-2xl)] lg:grid-cols-2">
          <div>
            <p className="type-body-sm-strong text-ink">圆角刻度</p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {radii.map((r) => (
                <div key={r.name} className="flex flex-col gap-2">
                  <div
                    className="h-16 w-full border border-hairline bg-canvas-soft"
                    style={{ borderRadius: `min(${r.value}px, 32px)` }}
                  />
                  <p className="type-caption-mono text-mute">
                    {r.name} · {r.value}px
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="type-body-sm-strong text-ink">间距刻度（4px 基）</p>
            <div className="mt-4 flex flex-col gap-3">
              {spacing.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 type-caption-mono text-mute">
                    {s.name}
                  </span>
                  <span
                    className="h-3 rounded-[var(--radius-xs)] bg-link"
                    style={{ width: `${s.value}px` }}
                  />
                  <span className="type-caption-mono text-mute">{s.value}px</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">
            高程刻度（堆叠阴影 + inset 发丝环）
          </p>
          <div className="mt-4 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {elevations.map((e) => (
              <div key={e.name} className="flex flex-col items-center gap-3">
                <div
                  className="h-20 w-full rounded-[var(--radius-md)] bg-canvas"
                  style={{ boxShadow: e.token }}
                />
                <p className="type-caption-mono text-mute">{e.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
