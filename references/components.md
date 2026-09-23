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

## 内容与状态

### Card — `@/components/ui/card`

源：`components/ui/card.tsx`。导出 Card、CardTitle（h3）、CardDescription（p）、cardVariants。

variant：marketing（默认，8px / Level 3）/ large（12px / Level 4）/ soft（8px / 浅灰面 / Level 1）/ template（紧凑内距 / Level 2）/ flat（白面描边）。标题与说明由调用方放进 Card。

当前没有 CardHeader、CardContent、CardFooter 等导出，不要照搬上游 API。需要扩展必须先实现再使用，或直接按已提供的公开组合结构编排。页面标题语义由调用方负责。

### Badge — `@/components/ui/badge`

源：`components/ui/badge.tsx`。导出 Badge、badgeVariants；继承 span 属性。

variant：secondary（默认）/ outline / info / success / warning / error。success 使用源规范的蓝色。状态必须带文字，不只靠色块。

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

## 使用边界

`components/showcase/` 是示例，不是稳定公共组件 API。保留其完整代码供参考，但新页面优先组合上述组件。交互 client 边界由实际组件需求决定，整个 app 不必转为 client。不要重新安装覆盖这些自定义 variant 的上游 button/card 文件。
