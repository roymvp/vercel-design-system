import { ArrowRight, Search } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { PricingCard } from '@/components/vercel/pricing-card'
import { TabPills } from '@/components/vercel/tab-pills'

/*
  组件区块：按钮、输入框、徽章、卡片、标签药丸、定价卡的可复用示例。
  导航栏在页面顶部单独常驻展示。
*/
function Group({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="type-body-sm-strong text-ink">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function ComponentsSection() {
  return (
    <section className="border-b border-hairline py-[var(--space-5xl)]">
      <div className="mx-auto max-w-[var(--page-width)] px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="type-caption-mono uppercase text-mute">Components</p>
          <h2 className="type-display-lg mt-3 text-balance text-ink">
            可复用组件
          </h2>
          <p className="type-body-md mt-3 text-pretty text-body">
            按钮、输入框、卡片与导航均由 token 驱动，营销尺度用 100px pill，nav 尺度用 6px
            方角，两种尺度不在同一屏混用。
          </p>
        </div>

        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-2xl)] lg:grid-cols-2">
          <Group title="按钮 · 营销 pill 尺度">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg">
                主操作
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="secondary" size="lg">
                次操作
              </Button>
              <Button variant="primary" size="md">
                中号
              </Button>
              <Button variant="secondary" size="sm">
                小号
              </Button>
              <Button variant="link" size="md">
                文字链接
              </Button>
            </div>
          </Group>

          <Group title="按钮 · nav 6px 尺度">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="ghost" size="nav">
                Ask AI
              </Button>
              <Button variant="secondary" size="nav">
                登录
              </Button>
              <Button variant="primary" size="nav">
                注册
              </Button>
            </div>
          </Group>

          <Group title="输入框 · 三档尺寸">
            <div className="flex flex-col gap-3">
              <Input inputSize="lg" placeholder="大号输入框（48px）" />
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-mute" />
                <Input
                  inputSize="md"
                  className="pl-9"
                  placeholder="标准输入框（40px）"
                />
              </div>
              <Input inputSize="sm" placeholder="小号输入框（32px）" />
            </div>
          </Group>

          <Group title="徽章 · 状态药丸">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">默认</Badge>
              <Badge variant="outline">Beta</Badge>
              <Badge variant="info">
                <span className="size-1.5 rounded-full bg-link" />
                New
              </Badge>
              <Badge variant="warning">受限</Badge>
              <Badge variant="error">错误</Badge>
            </div>
          </Group>
        </div>

        {/* 卡片 */}
        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">卡片 · 高程变体</p>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <Card variant="marketing">
              <Badge variant="secondary">Level 3</Badge>
              <CardTitle className="mt-4">营销卡片</CardTitle>
              <CardDescription className="mt-2">
                白面 8px 圆角，堆叠阴影带来克制的浮起感，用于承载功能说明。
              </CardDescription>
            </Card>
            <Card variant="soft">
              <Badge variant="secondary">Level 1</Badge>
              <CardTitle className="mt-4">柔和卡片</CardTitle>
              <CardDescription className="mt-2">
                canvas-soft 面 + inset 发丝环，几乎平贴页面，用于低强调的信息分组。
              </CardDescription>
            </Card>
            <Card variant="large">
              <Badge variant="info">Level 4</Badge>
              <CardTitle className="mt-4">大号卡片</CardTitle>
              <CardDescription className="mt-2">
                12px 圆角与更深的堆叠阴影，用于需要视觉重量的核心内容块。
              </CardDescription>
            </Card>
          </div>
        </div>

        {/* 标签药丸 */}
        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">标签药丸行</p>
          <div className="mt-4">
            <TabPills
              items={['概览', '构建', '预览', '交付', '监控', '团队']}
            />
          </div>
        </div>

        {/* 定价卡 */}
        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">定价卡 · 中间层极性翻转</p>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <PricingCard
              tier="入门"
              price="¥0"
              description="个人项目与实验的起点"
              features={['1 名成员', '100 GB 带宽', '社区支持']}
              cta="免费开始"
            />
            <PricingCard
              tier="专业"
              price="¥149"
              description="面向成长中的团队与生产工作负载"
              features={['无限成员', '1 TB 带宽', '优先支持', '预览评论']}
              cta="升级专业版"
              featured
            />
            <PricingCard
              tier="企业"
              price="定制"
              period=""
              description="面向大规模与合规需求的组织"
              features={['SSO 与审计日志', '专属边缘', 'SLA 保障']}
              cta="联系销售"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
