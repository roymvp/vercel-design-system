import { Triangle } from 'lucide-react'

/*
  页脚：多列链接 + 品牌行。中性占位品牌「Northstar」，不使用真实品牌名 / logo。
*/
const columns: { title: string; links: string[] }[] = [
  { title: '产品', links: ['构建', '预览', '交付', '监控', '边缘网络'] },
  { title: '资源', links: ['文档', '指南', '模板', '更新日志', '状态'] },
  { title: '公司', links: ['关于', '博客', '招聘', '联系', '合作'] },
  { title: '法务', links: ['隐私', '条款', 'DPA', 'Cookie'] },
]

export function FooterSection() {
  return (
    <footer className="bg-canvas-soft">
      <div className="mx-auto max-w-[var(--page-width)] px-4 py-[var(--space-4xl)] md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2 text-ink">
              <Triangle className="size-5 fill-ink" strokeWidth={0} />
              <span className="type-body-md-strong">Northstar</span>
            </a>
            <p className="type-body-sm mt-3 max-w-xs text-body">
              一套用于构建、预览与交付的界面语言。基于 vercel 视觉规范提炼，剥离品牌名与
              营销文案。
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="type-body-sm-strong text-ink">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="type-body-sm text-body transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-[var(--space-2xl)] flex flex-col gap-3 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-caption text-mute">
            © 2026 Northstar. 演示用途，非官方品牌资产。
          </p>
          <p className="type-caption-mono text-mute">
            源规范 · VoltAgent/awesome-design-md · vercel/DESIGN.md
          </p>
        </div>
      </div>
    </footer>
  )
}
