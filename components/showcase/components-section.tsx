import { ArrowRight, Search } from 'lucide-react'
import { ThemeToggle } from '@/components/theme/theme-toggle'

import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Kbd } from '@/components/ui/kbd'
import { ArticleCard } from '@/components/vercel/article-card'
import {
  ChangelogTimeline,
  type ChangelogEntry,
} from '@/components/vercel/changelog-timeline'
import { PricingCard } from '@/components/vercel/pricing-card'
import { TabPills } from '@/components/vercel/tab-pills'
import { UnderlineTabs } from '@/components/vercel/underline-tabs'

/*
  作者头像样本（纯色占位，演示头像组的重叠与描环，不代表真实人物）。
*/
const AUTHORS = [
  { src: '/placeholder-user.jpg', alt: '作者头像一' },
  { src: '/placeholder-user.jpg', alt: '作者头像二' },
  { src: '/placeholder-user.jpg', alt: '作者头像三' },
]

const CHANGELOG: ChangelogEntry[] = [
  {
    date: '9 月 23 日',
    title: 'Sandbox 持久化磁盘进入公测',
    summary:
      '现在可以把最大 16 TiB 的持久化磁盘挂载进 Sandbox，并按用量计费，适合需要跨会话保留状态的构建任务。',
    authors: AUTHORS.slice(0, 3),
    authorLabel: '三位作者',
  },
  {
    date: '9 月 22 日',
    title: '新一代模型已上线 AI Gateway',
    summary:
      '面向编码、专业工作流与 agent 应用的新模型现已通过统一网关提供，零配置即可在预览与生产中调用。',
    authors: AUTHORS.slice(0, 2),
    authorLabel: '两位作者',
  },
]

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
    <section id="extensions" className="preview-section border-t border-hairline">
      <div>
        <div className="max-w-2xl">
          <p className="type-caption text-body">工程扩展 · 保留的组合与兼容 API</p>
          <h2 className="type-section-heading mt-3 text-balance text-ink">扩展组件</h2>
          <p className="type-body-lg mt-3 text-pretty text-body">
            以下额外变体、定价模板、文章与更新日志不属于 Live Preview 原生内容。
            示例数据只用于展示布局，不代表真实服务、价格或发布公告。
          </p>
          <div className="mt-4"><ThemeToggle /></div>
        </div>

        <div className="mt-[var(--space-2xl)] grid gap-[var(--space-2xl)] lg:grid-cols-2">
          <Group title="按钮 · 营销胶囊（默认）">
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

          <Group title="按钮 · pill（hero 主 CTA）">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg" shape="pill">
                开始构建
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="secondary" size="lg" shape="pill">
                阅读文档
              </Button>
            </div>
          </Group>

          <Group title="按钮 · nav 6px 尺度">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="ghost" size="nav" shape="rounded">
                Ask AI
              </Button>
              <Button variant="secondary" size="nav" shape="rounded">
                登录
              </Button>
              <Button variant="primary" size="nav" shape="rounded">
                注册
              </Button>
            </div>
          </Group>

          <Group title="输入框 · 三档尺寸">
            <div className="flex flex-col gap-3">
              <Input inputSize="lg" aria-label="大号输入框" placeholder="大号输入框（48px）" />
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-mute" />
                <Input
                  inputSize="md"
                  className="pl-9"
                  aria-label="标准输入框" placeholder="标准输入框（40px）"
                />
              </div>
              <Input inputSize="sm" aria-label="小号输入框" placeholder="小号输入框（32px）" />
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-mute" />
                <Input inputSize="md" className="pl-9 pr-14" aria-label="搜索文档" placeholder="搜索文档" />
                <Kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  ⌘K
                </Kbd>
              </div>
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
              <Badge variant="secondary">Flat</Badge>
              <CardTitle className="mt-4">营销卡片</CardTitle>
              <CardDescription className="mt-2">
                默认平面描边，浅色 16px、暗色 12px 圆角，用于承载功能说明。
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
                16px 圆角与更深的单层阴影；这是兼容保留的工程变体。
              </CardDescription>
            </Card>
          </div>
        </div>

        {/* 下划线标签 */}
        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">
            下划线标签 · 视图切换（docs / hero）
          </p>
          <div className="mt-4">
            <UnderlineTabs
              items={['部署应用', '配置 Agent', '调用模型', '连接数据']}
            />
          </div>
        </div>

        {/* 标签药丸 */}
        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">
            标签药丸行 · 筛选 / 分类入口
          </p>
          <div className="mt-4">
            <TabPills
              items={['概览', '构建', '预览', '交付', '监控', '团队']}
            />
          </div>
        </div>

        {/* 头像与头像组 */}
        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">
            头像与头像组 · 作者署名（blog / changelog）
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <Avatar src="/placeholder-user.jpg" alt="示例头像小号" size="sm" />
              <Avatar src="/placeholder-user.jpg" alt="示例头像中号" size="md" />
              <Avatar src="/placeholder-user.jpg" alt="示例头像大号" size="lg" />
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center">
                {AUTHORS.map((a, i) => (
                  <Avatar
                    key={a.alt}
                    src={a.src}
                    alt={a.alt}
                    size="sm"
                    className={i > 0 ? '-ml-2' : undefined}
                  />
                ))}
              </span>
              <span className="type-body-sm text-body">三位作者重叠成组</span>
            </div>
          </div>
        </div>

        {/* 文章卡 */}
        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">
            文章卡 · blog 列表（裸排，靠留白与字号分层）
          </p>
          <div className="mt-4 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            <ArticleCard
              date="9 月 18 日"
              category="工程"
              title="以 token 为唯一真相源构建设计系统"
              excerpt="从颜色、排版到间距与圆角，所有决策都收敛到一层语义 token，让预览与规范永远一致。"
              authors={AUTHORS.slice(0, 3)}
              authorLabel="三位作者"
            />
            <ArticleCard
              date="9 月 8 日"
              category="产品"
              title="按尺寸与形状解耦的按钮模型"
              excerpt="营销按钮默认 pill，紧凑导航样本采用 6px 圆角；尺寸与形状保持独立。"
              authors={AUTHORS.slice(0, 2)}
              authorLabel="两位作者"
            />
            <ArticleCard
              date="9 月 1 日"
              category="社区"
              title="下划线标签与药丸标签的分工"
              excerpt="视图切换用下划线、筛选分类用药丸，两种模型各司其职，避免同一交互出现两种视觉语言。"
              authors={AUTHORS.slice(0, 1)}
              authorLabel="Amelia Charles"
            />
          </div>
        </div>

        {/* changelog 时间线 */}
        <div className="mt-[var(--space-3xl)]">
          <p className="type-body-sm-strong text-ink">
            changelog 时间线 · 左日期列 + 发丝竖线 + 右内容
          </p>
          <div className="mt-6">
            <ChangelogTimeline entries={CHANGELOG} />
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
