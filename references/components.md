# 公开组件索引

所有源路径相对于完整 starter 根目录（本仓库中对应 `assets/starter/`）。运行时导入 `@/`，不要导入本文档、assets/starter 或 memory 路径。下列是本次已验收版本的实际 API，不是 shadcn 默认 API。

## 操作与表单

### Button — `@/components/ui/button`

源：`components/ui/button.tsx`。导出 Button、buttonVariants。基于 `@base-ui/react/button`，继承 ButtonPrimitive.Props；自定义元素走 Base UI 的 `render`，不是 Radix 的 asChild。

- variant：primary（默认）/ secondary / invert / ghost / link——只控制颜色。
- size：md（默认，40px）/ lg（48px）/ sm（32px）/ nav（28px）/ text——只控制尺寸。
- shape：rounded（默认，圆角矩形；常规 8px、sm 与 nav 收到 6px）/ pill（全圆角）。经 vercel.com 实测校准：官方默认按钮是圆角矩形，pill 仅用于 hero 主 CTA 等强调场景，不要默认全站 pill。
- 三轴（variant / size / shape）彼此独立，可自由组合。disabled、focus-visible 聚焦环已实现。没有 isLoading / isPending / outline / default 等额外 variant，不要臆造。
- 表单提交明确 type="submit"；一般操作 type="button"。纯导航也可用 buttonVariants 给真实链接套样式，避免按钮内嵌链接。

### Input — `@/components/ui/input`

源：`components/ui/input.tsx`。导出 Input、inputVariants。继承原生 input 属性。尺寸参数叫 `inputSize`：sm / md / lg，对应 32 / 40 / 48px，默认 md；不是 size。

白底、6px 圆角、发丝边。支持 disabled、aria-invalid 样式。调用方提供 label（htmlFor + id）或 aria-label、错误描述 id 与 aria-describedby；placeholder 不代替标签。

搜索框模式：`relative` 容器内左侧绝对定位图标（`pl-9`）、右侧用 Kbd 放 ⌘K 提示（`pr-14`）。Kbd 与图标 `pointer-events-none`，不拦截输入。

### Kbd — `@/components/ui/kbd`

源：`components/ui/kbd.tsx`。继承 kbd 原生属性，只接受 className + children。经 vercel.com 实测校准：12px、4px 圆角（radius-xs）、发丝描边、**GeistSans（非等宽）**、ink 文字、白面、高 20px。用于搜索框快捷键提示、命令面板。子内容自带（如 `⌘K`），不做按键序列解析。

## 内容与状态

### Card — `@/components/ui/card`

源：`components/ui/card.tsx`。导出 Card、CardTitle（h3）、CardDescription（p）、cardVariants。

variant：marketing（默认，8px / Level 3）/ large（12px / Level 4）/ soft（8px / 浅灰面 / Level 1）/ template（紧凑内距 / Level 2）/ flat（白面描边）。标题与说明由调用方放进 Card。

当前没有 CardHeader、CardContent、CardFooter 等导出，不要照搬上游 API。需要扩展必须先实现再使用，或直接按已提供的公开组合结构编排。页面标题语义由调用方负责。

### Badge — `@/components/ui/badge`

源：`components/ui/badge.tsx`。导出 Badge、badgeVariants；继承 span 属性。

variant：secondary（默认）/ outline / info / success / warning / error。success 使用源规范的蓝色。状态必须带文字，不只靠色块。

### Avatar / AvatarStack — `@/components/ui/avatar`

源：`components/ui/avatar.tsx`。导出 Avatar、AvatarStack。经 vercel.com 实测校准（blog / changelog 作者署名）：小号圆形头像，尺寸 size="sm"(20) / md(24) / lg(32)，默认 md；每枚外描一圈画布色环（`ring-2 ring-canvas`）。

- Avatar：接受 src、alt、size；继承 img 属性。缺图回落 `/placeholder.svg`；装饰性头像 alt 传空串。
- AvatarStack：接受 avatars（{ src, alt }[]）、size、className；后一枚 `-ml-2` 负外边距压叠成组，描环把彼此分隔开。用于多作者署名。不做最大数量截断或「+N」溢出徽章，需要时自行扩展。

## 导航与组合

### SiteNav — `@/components/ui/site-nav`

源：`components/ui/site-nav.tsx`。当前仅接受 className，可复用的是布局模板：64px 吸顶栏、桌面链接、紧凑 CTA、手机精简布局。展示名称 Northstar，链接及按钮是演示内容，不具备业务路由或登录能力。

真实项目须把名称、href 和 action 接到自己的业务。不要宣称已有移动抽屉或导航数据 API；这些未实现。不要恢复被移除的原品牌形似三角标识。

### MeshGradient — `@/components/vercel/mesh-gradient`

源：`components/vercel/mesh-gradient.tsx`。props：className、intensity="hero" | "band"（默认 hero）。父容器使用 relative；组件绝对填充、aria-hidden、pointer-events-none。用多重 CSS radial-gradient 近似源视觉，不是官方原始图片。

### CodeMockup — `@/components/vercel/code-mockup`

源：`components/vercel/code-mockup.tsx`。props：filename（默认 ~/northstar）、lines 数组（每项 text，tone 可为 muted / accent / default）、className。语义 pre/code，长行在内部滚动。它不运行代码，也不是编辑器。

### PricingCard — `@/components/vercel/pricing-card`

源：`components/vercel/pricing-card.tsx`。必填 tier、price、description、features: string[]、cta；可选 period（默认 / 月）、featured（默认 false）、className。featured 翻为深墨面与反白 CTA。按钮当前没有对外 action/href 参数，是定价展示模板，不是支付组件；扩展真实支付时需另行接入与服务端校验。

### TabPills — `@/components/vercel/tab-pills`

源：`components/vercel/tab-pills.tsx`。props：items: string[]、className。内部管理当前选项，以 aria-pressed 表达状态，移动端横向滚动。它是按钮组选中状态示例，不是 WAI-ARIA Tabs：没有 tabpanel、受控 value/onChange 或内容过滤承诺。真实筛选需求应增加受控接口或使用正确的基础组件，不伪造已有行为。

用途区分：TabPills（药丸背景翻转）用于「筛选 / 分类入口」；UnderlineTabs（下划线）用于「同一内容区的视图切换」。两者不要混用。

### UnderlineTabs — `@/components/vercel/underline-tabs`

源：`components/vercel/underline-tabs.tsx`。props：items: string[]、className。经 vercel.com 实测校准（docs / 产品页 hero）：active 项 `border-bottom 2px solid ink` + ink 文字、body-sm 常规字重、padding 14px 2px；inactive 项透明下边框 + mute 文字、hover 提到 ink；整行下方一条 hairline 基线，移动端横向滚动。以 role=tablist / role=tab / aria-selected 表达状态，但与 TabPills 一样**不含 tabpanel 或受控 value/onChange**，是视图切换的视觉示例；真实内容切换需自行接受控接口，不要伪造。

### ArticleCard — `@/components/vercel/article-card`

源：`components/vercel/article-card.tsx`。props：href（默认 #）、date、category、title、excerpt、authors（{ src, alt }[]）、authorLabel、className。经 vercel.com 实测校准（blog 列表）：无边框无阴影裸排，靠留白与字号分层；meta 行 = 日期 + 分类（body-sm / mute），标题 type-display-sm（32px/450，字距 -0.04em），摘要 body-md，底部 AvatarStack + 署名。整卡为一个 `<a>`，聚焦环已实现。它是列表项模板，不含真实路由或分页；authorLabel 由调用方按语言/人数自行组织（如「三位作者」或具体姓名）。

### ChangelogTimeline — `@/components/vercel/changelog-timeline`

源：`components/vercel/changelog-timeline.tsx`。导出 ChangelogTimeline、类型 ChangelogEntry。props：entries（ChangelogEntry[]）、className。ChangelogEntry = { date, title, summary, authors, authorLabel }。经 vercel.com 实测校准（changelog 列表）：桌面 `md:grid-cols-[10rem_1fr]` 左日期列 + 右内容列，内容列用 `border-l border-hairline` 画一条贯穿发丝竖线；标题 type-display-sm、摘要 body-md、底部 AvatarStack + 署名。移动端日期落到内容上方、竖线隐藏。它是版式模板，不含筛选、分页或锚点跳转，需要时自行扩展。

## 使用边界

`components/showcase/` 是示例，不是稳定公共组件 API。保留其完整代码供参考，但��页面优先组合上述组件。交互 client 边界由实际组件需求决定，整个 app 不必转为 client。不要重新安装覆盖这些自定义 variant 的上游 button/card 文件。
