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

## 主题

### ThemeProvider / ThemeToggle — `@/components/theme/*`

源：`components/theme/theme-provider.tsx`、`theme-toggle.tsx`。ThemeProvider 在 `<head>` 注入阻塞脚本防 FOUC，并提供 `useTheme()`（返回 theme: 'light' | 'dark' | 'system' 与 setTheme）。持久化键 `theme`，system 态跟随 `prefers-color-scheme`。ThemeToggle 是分段式 太阳 / 显示器 / 月亮 三态控件，已挂在 SiteNav 右簇。`layout.tsx` 的 `<html>` 必须 `suppressHydrationWarning` 并挂 ThemeProvider。无第三方 next-themes 依赖。

## 表单原语

### Field — `@/components/ui/field`

源：`components/ui/field.tsx`。导出 FormField、FieldLabel、FieldDescription、FieldError。FormField 是纵向 `gap-2` 容器；FieldLabel 用 body-sm-strong；FieldDescription / FieldError 为 caption，Error 走 error 色。它是排版容器，不做校验逻辑；校验状态由内部控件的 `aria-invalid` 表达。

### Textarea — `@/components/ui/textarea`

源：`components/ui/textarea.tsx`。原生 textarea，继承发丝描边 + 焦点环 + `aria-invalid` 处理，最小高度 80px，`resize-y`。

### Select — `@/components/ui/select`

源：`components/ui/select.tsx`。基于 `@base-ui/react/select`。组合式：Select（Root）/ SelectTrigger / SelectValue / SelectContent / SelectItem。Trigger 高 40px 与 Input 对齐，Content 走 Portal + `--z-popover`，进出用 `--duration-fast`。受控用 value/onValueChange（透传 Base UI）。不是原生 select 的便捷 props 封装。

### Checkbox / Radio / Switch — `@/components/ui/{checkbox,radio,switch}`

源同名文件，均基于 Base UI。Checkbox 16px 方形、选中翻 ink 面 + canvas 勾；RadioGroup + Radio 16px 圆点；Switch 轨 36×20、开态填 ink。三者共用焦点环与 `--opacity-disabled` 禁用态。它们是无 label 的纯控件，标签由 FormField / 外层 `<label>` 提供（见 showcase 的 Row 模式）。

### Slider — `@/components/ui/slider`

源：`components/ui/slider.tsx`。基于 Base UI Slider。props 透传 value/defaultValue/min/max/step 等。轨道发丝灰、已选段 ink、拇指 canvas 圆点带阴影 + 焦点环。

## 反馈与状态

### Spinner / Skeleton / Progress — `@/components/ui/{spinner,skeleton,progress}`

Spinner：SVG 旋转，尊重 reduced-motion（收敛为不旋转）；size 通过 className 的 `size-*` 调整。Skeleton：`bg-canvas-soft-2` 脉冲占位块，reduced-motion 下停脉冲。Progress：基于 Base UI Progress，value 0–100，轨发丝、条 ink，无值时不伪造动画。

### Note — `@/components/ui/note`

源：`components/ui/note.tsx`。props：tone（info 默认 / success / warning / error）、children、className。左图标 + 文本，用对应状态色的 soft 底 + deep 文字，发丝描边。暗色下同语义翻转。是静态提示块，不含关闭按钮或自动消失。

### StatusDot — `@/components/ui/status-dot`

源：`components/ui/status-dot.tsx`。props：tone（ready / building / queued / error）、label（可选，缺省用默认中文文案）。小圆点 + 文本，building 态带脉冲（reduced-motion 收敛）。用于部署 / 服务状态。

### EmptyState — `@/components/ui/empty-state`

源：`components/ui/empty-state.tsx`。props：icon、title、description、action（可选 ReactNode）、className。居中留白版式，用于列表 / 面板空态。

### Toast — `@/components/ui/toast`

源：`components/ui/toast.tsx`。基于 Base UI Toast manager。导出 ToastProvider（已挂在 layout 全局）、ToastViewport、useToast（`toast({ title, description })`）。Viewport 走 `--z-toast`，右下角堆叠，进出动画尊重 reduced-motion。

## 浮层

### Dialog — `@/components/ui/dialog`

源：`components/ui/dialog.tsx`。基于 Base UI Dialog。组合式：Dialog / DialogTrigger / DialogContent / DialogTitle / DialogDescription / DialogFooter / DialogClose。Trigger 与 Close 用 `render={<Button .../>}` 接受自定义元素（Base UI render，不是 asChild）。Content 走 Portal + `--z-modal`，遮罩 + 居中卡，Esc / 点遮罩关闭，焦点陷阱由 Base UI 提供。

### Tooltip — `@/components/ui/tooltip`

源：`components/ui/tooltip.tsx`。基于 Base UI Tooltip。组合式：TooltipProvider（包裹一次）/ Tooltip / TooltipTrigger / TooltipContent。深色反相浮层（ink 面 + canvas 字），`--z-tooltip`，sideOffset 默认 6。Trigger 用 render 接受自定义元素。

### DropdownMenu — `@/components/ui/dropdown-menu`

源：`components/ui/dropdown-menu.tsx`。基于 Base UI Menu。组合式：DropdownMenu / DropdownMenuTrigger / DropdownMenuContent / DropdownMenuItem / DropdownMenuSeparator / DropdownMenuLabel。Content 走 Portal + `--z-dropdown`，键盘可达，`data-[highlighted]` 高亮态。破坏性项自行叠 `text-error`。

### Accordion — `@/components/ui/accordion`

源：`components/ui/accordion.tsx`。基于 Base UI Accordion。组合式：Accordion / AccordionItem（value）/ AccordionTrigger / AccordionPanel。发丝线分隔，图标随展开旋转，键盘可达，高度过渡尊重 reduced-motion。

## 导航与数据

### Tabs — `@/components/ui/tabs`

源：`components/ui/tabs.tsx`。基于 Base UI Tabs，是真正的 WAI-ARIA Tabs（区别于视觉示例 TabPills / UnderlineTabs）。组合式：Tabs（defaultValue / value / onValueChange）/ TabsList / TabsTab（value）/ TabsPanel（value）。下划线 active 指示、发丝基线，含真实 tabpanel 与键盘方向键切换。需要真实内容切换时用它，不要用 TabPills / UnderlineTabs 伪造。

### Table — `@/components/ui/table`

源：`components/ui/table.tsx`。导出 Table / TableHeader / TableBody / TableRow / TableHead / TableCell。语义 `<table>`，发丝线分隔行，表头 body-sm-strong，行 hover 提亮。是排版容器，不含排序 / 分页 / 虚拟滚动逻辑。

### Breadcrumbs — `@/components/ui/breadcrumbs`

源：`components/ui/breadcrumbs.tsx`。props：items（{ label, href? }[]）、className。末项无 href 为当前页（`aria-current="page"`），分隔符斜杠，`<nav aria-label>` 包裹。

### Pagination — `@/components/ui/pagination`

源：`components/ui/pagination.tsx`。props：page、total、onPageChange。上一页 / 页码 / 下一页，当前页 ink 底，边界禁用。是受控组件，自行持有 page state。

### Separator — `@/components/ui/separator`

源：`components/ui/separator.tsx`。基于 Base UI Separator。props：orientation（horizontal 默认 / vertical）。发丝线，语义分隔（role=separator）。

### Snippet — `@/components/ui/snippet`

源：`components/ui/snippet.tsx`。props：command、className。等宽命令行 + 右侧复制按钮（Clipboard API，复制后短暂显示已复制态）。深色代码底，用于展示 CLI 命令。

## 使用边界

`components/showcase/` 是示例，不是稳定公共组件 API。保留其完整代码供参考，但��页面优先组合上述组件。交互 client 边界由实际组件需求决定，整个 app 不必转为 client。不要重新安装覆盖这些自定义 variant 的上游 button/card 文件。
