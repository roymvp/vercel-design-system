import { ArrowRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CodeMockup } from '@/components/vercel/code-mockup'
import { MeshGradient } from '@/components/vercel/mesh-gradient'

/*
  hero 区块：品牌签名网格渐变 + 公告药丸 + display-xl 标题 + CTA 对 + 代码拟态。
  规范约束：渐变仅在 hero 尺度使用；标题负字距不可回默认；CTA 用营销 pill 尺度。
*/
export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <MeshGradient />
      <div className="relative mx-auto max-w-[var(--page-width)] px-4 pb-[var(--space-5xl)] pt-[var(--space-4xl)] md:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Badge variant="outline" className="gap-2">
            <span className="size-1.5 rounded-full bg-link" />
            介绍 · Northstar 设计系统
          </Badge>
          <h1 className="type-display-xl mt-6 text-balance text-ink">
            为构建、预览与交付而生的界面语言
          </h1>
          <p className="type-body-lg mt-6 max-w-xl text-pretty text-body">
            近白画布上的黑墨二重奏，hero 尺度的多色网格渐变，几何无衬线搭配等宽技术标签
            —— 一套克制而自信的视觉系统。
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button variant="primary" size="lg" shape="pill">
              开始构建
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="secondary" size="lg" shape="pill">
              阅读文档
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-[var(--space-4xl)] max-w-2xl">
          <CodeMockup
            filename="~/northstar/deploy.ts"
            lines={[
              { text: 'import { ship } from "northstar"', tone: 'muted' },
              { text: '' },
              { text: 'await ship({' },
              { text: '  build: "next build",', tone: 'accent' },
              { text: '  preview: true,', tone: 'accent' },
              { text: '  regions: ["hkg", "sfo", "fra"],' },
              { text: '})' },
              { text: '' },
              { text: '✓ 已在 42s 内交付至全球边缘', tone: 'muted' },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
