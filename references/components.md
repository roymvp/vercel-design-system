# 公开组件与来源分类

源路径均相对于 `assets/starter/`；运行时使用 `@/components/...`。这是自定义 Base UI 系统，不是 shadcn 默认 API。不要重新安装上游组件覆盖本地 variants。

## Live Preview 校准组件

### Button — `@/components/ui/button`

导出 Button、buttonVariants，基于 Base UI Button，继承其 Props；自定义元素用 `render` 而非 asChild。

- variant：primary 默认 / secondary / invert / ghost / link。
- size：md 默认 40px / lg 48px / sm 32px / nav 32px / text。
- shape：**pill 默认**，100px；rounded 常规 12px、sm/nav 为 6px。
- 原生营销主/次操作使用 pill；紧凑导航样本显式 `size="nav" shape="rounded"`。旧“默认 rounded”已废止。
- lg 水平 27px、md 18px；字重 600。暗色 secondary 2px 白边，浅色 1px hairline。
- 无 isPending/isLoading/outline/default variants。表单用 type=submit，普通动作 type=button。真实导航用 buttonVariants 套 `<a>`。
- inverse/ghost/link、禁用与焦点行为为工程扩展，不声称都在源预览中出现。

### Card — `@/components/ui/card`

导出 Card、CardTitle(h3)、CardDescription(p)、cardVariants。**marketing 默认为平面描边**，24px 内距、浅16/暗12圆角；elevated 同结构 + shadow-2。large、soft、template、flat 是保留的工程变体。large 使用 radius-lg=16、shadow-4；其余实际值见源码。

没有 CardHeader/CardContent/CardFooter。组合标题和描述即可，不能编造导出。

### Input — `@/components/ui/input`

原生 input；导出 Input、inputVariants。`inputSize="preview"` 默认：45px 高、15px 字号、6px 圆角、14px 水平内距。sm/md/lg = 32/40/48 是兼容扩展。调用方必须提供 htmlFor+id 或 aria-label，错误用 aria-invalid+aria-describedby；placeholder 不替代标签。

### SiteNav — `@/components/ui/site-nav`

布局模板，仅 className。64px 桌面栏、手机56px；桌面三列使链接真正居中，纯色底，无玻璃 blur。展示为 Northstar + 页内锚点，不提供注册、登录或移动抽屉 API。主题切换移到工程扩展区。

## 工程扩展（不是 Live Preview 原生）

以下保留真实源码 API 供业务开发复用，不是官方组件或业务服务。tokens 服从当前系统；原始 vercel.com 参考不能反向覆盖基础校准。

| 导入（均为 @/components/） | 用途与关键 API |
| --- | --- |
| ui/badge | Badge：variant secondary/outline/info/success/warning/error；success 当前为蓝色扩展 |
| ui/kbd | Kbd：原生 kbd props；4px 圆角，sans |
| ui/avatar | Avatar、AvatarStack；src/alt、size sm/md/lg；业务必须传有效头像 |
| vercel/mesh-gradient | MeshGradient：intensity hero/band、className；父 relative；非默认 hero |
| vercel/code-mockup | CodeMockup：filename、lines[{text,tone?}]、className；静态 pre/code，非编辑器 |
| vercel/pricing-card | PricingCard：tier/price/description/features/cta，period/featured/className；没有支付或 action/href API |
| vercel/tab-pills | TabPills：items:string[]；内部 aria-pressed 状态，无真实筛选或受控 API |
| vercel/underline-tabs | UnderlineTabs：items:string[]；视觉选择样本，无 tabpanel；内容切换使用 ui/tabs |
| vercel/article-card | ArticleCard：href/date/category/title/excerpt/authors/authorLabel/className；静态文章布局 |
| vercel/changelog-timeline | ChangelogTimeline：entries（date/title/summary/authors/authorLabel）；静态时间线 |
| theme/theme-provider | ThemeProvider、useTheme、themeInitScript；light/dark/system，既有 theme 偏好存储 |
| theme/theme-toggle | ThemeToggle：三态切换，当前放在扩展区 |

### 表单

- `ui/field`：FormField、FieldLabel、FieldDescription、FieldError、Label，基于 Base UI Field。使用原生 Input/Textarea 时显式 id/htmlFor/aria-describedby，不假定容器自动注册原生控件。
- `ui/textarea`：原生 textarea props、resize-y、invalid/focus；展示的原生代码输入样本另外使用12px圆角。
- `ui/select`：Select、SelectTrigger、SelectValue、SelectContent、SelectItem；Base UI 的 value/onValueChange，非原生 select API。
- `ui/checkbox`：Checkbox；`ui/radio`：RadioGroup、Radio；`ui/switch`：Switch。透传 Base UI props，调用方提供 label。
- `ui/slider`：Slider，value/defaultValue/min/max/step；调用方提供可访问名称。

### 反馈、浮层、导航

- `ui/spinner`、`ui/skeleton`、`ui/progress`：Spinner/Skeleton/Progress（value）；尊重 reduced-motion。
- `ui/note`：Note tone info/success/warning/error；静态提示。
- `ui/status-dot`：StatusDot tone ready/building/queued/error、label。
- `ui/empty-state`：EmptyState icon/title/description/action。
- `ui/toast`：ToastProvider、ToastViewport、useToast（title/description）。
- `ui/dialog`：Dialog/Trigger/Content/Title/Description/Footer/Close；render 接 Button，必须有 Title。
- `ui/tooltip`：TooltipProvider/Tooltip/Trigger/Content。
- `ui/dropdown-menu`：DropdownMenu/Trigger/Content/Item/Separator/Label；onClick 采用 Base UI 约定。
- `ui/accordion`：Accordion/Item/Trigger/Panel；Item value。
- `ui/tabs`：Tabs/List/Tab/Panel，value/defaultValue/onValueChange，是真实内容 tab 组件。
- `ui/table`：Table/Header/Body/Row/Head/Cell，不含排序、分页或虚拟化。
- `ui/breadcrumbs`：Breadcrumbs items[{label,href?}]；末项当前页。
- `ui/pagination`：Pagination page/total/onPageChange，受控。
- `ui/separator`：Separator orientation。
- `ui/snippet`：Snippet command；Clipboard API，必须在实际业务中处理复制失败。

## 展示与业务边界

`components/showcase/` 不是稳定业务 API。基础区演示外观；扩展区样本不承诺真实注册、支付、发布、删除或数据加载。涉及业务时连接真实 href、事件、验证与服务，并另行验收。保留 extra 组件不等于对其全量无障碍、错误状态和后端行为作认证。
