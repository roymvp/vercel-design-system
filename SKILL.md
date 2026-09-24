---
name: vercel-style
description: >
  「vercel 风格」非官方设计系统。用于用户选择本系统时的新应用、落地页、导航、表单、卡片与技术界面，以及本系统的维护。视觉权威为 getdesign.md/vercel/design-md 的明暗 Live Preview 实际渲染，不用 vercel.com 或文字摘要覆盖。Next.js 16、Tailwind v4、Base UI copy-in 源码；纯色画布、Inter、600 字重标题、营销胶囊、发丝描边平面卡。额外组件明确标为工程扩展。
metadata:
  v0.kind: design-system
  v0.design-system:
    appearance:
      light:
        background: '#FFFFFF'
        foreground: '#171717'
      dark:
        background: '#0A0A0A'
        foreground: '#FFFFFF'
---

# vercel 风格

本系统是所选应用的唯一 UI 来源，非 Vercel 官方组件库。Northstar 是虚构展示名；新应用换成用户自己的产品，不复制原品牌、logo 或暗示背书。

## 从完整 starter 开始

使用 `v0.json` 指向的 `assets/starter/`，继承完整 app、components、lib、examples、tokens、配置与 pnpm 锁文件。不要只导入 components.json 或另起一套脚手架。新应用替换展示页，不把业务接在展示页下面。

这是 **copy-in 源码系统**，不是 npm 包。公开导入：`@/components/ui/*`、`@/components/vercel/*`、`@/components/theme/*`、`@/lib/utils`。不要发明包名或从 skill/reference 路径导入运行时代码。

安装与验证：`pnpm install --frozen-lockfile`、`pnpm typecheck`、`pnpm build`。保留已锁定依赖与 Next.js 16 异步 request APIs；展示主体保持 Server Components，交互按需使用 Client Components。

## 按任务读取

- 基础 tokens、排版、明暗、响应式、动效：`references/foundations.md`。
- 组件真实 API、来源分类与组合限制：`references/components.md`。
- 权威来源、预览矛盾、资产和明确适配：`references/source-and-assets.md`。
- 可编译示例及展示顺序：`references/examples.md`。
- 验证结果及尚未验证的范围：`references/verification.md`。

## 硬约束

1. **视觉权威是 Live Preview 的 computed styles 和截图。** DESIGN.md 是补充描述；vercel.com、其他品牌、旧版实现不得覆盖本次校准。源文字与渲染有差异时记录差异，不擅自“纠正”预览。
2. `app/globals.css` 是 token 真相源。浅色画布 #fff，暗色 #0a0a0a；暗色卡片 #171717。保留 `.dark` 与系统偏好回退，显式 `.light` 必须优先。
3. 默认 hero 左对齐、纯色、无公告徽章、无渐变、无代码卡。MeshGradient、CodeMockup 仅为可选工程扩展，不能自动放回 hero。
4. Latin sans 用预览实际加载的 Inter。Geist Mono 与 Noto Sans SC 是明确的代码/CJK 适配，不声称与源像素完全一致。标题 600；hero 72px、手机 38px；完整刻度见 foundations。
5. Button 默认营销 pill；紧凑导航样本显式 `size="nav" shape="rounded"`。不要恢复“所有默认按钮都是圆角矩形”的旧规则。
6. Card 默认平面描边，浅色 16px、暗色 12px；elevated 使用预览实际的单层 0 8px 24px / 10% 阴影。不要把描述中的“多层”当成实际渲染。
7. 额外组件保留并标为工程扩展：主题控件、浮层、状态、表格、定价、文章、时间线、渐变等。它们不是预览原生，也不是官方业务能力。
8. 源 mute #8f8f8f 在浅底小字不达 AA。展示保留色样，必读正文与标签使用 body/ink；不能宣称源色板全量合规。标签关联、焦点、键盘和移动溢出必须检查。
9. 固定反色面板使用 `panel-invert`，不要用会随主题翻转的 primary；渐变端点与旧 API 保留不代表默认推荐。

## 交付前

检查完整 starter 的冻结安装、类型、构建、桌面/手机明暗截图、主题切换、键盘和表单关联。维护根工程、仓库 starter、持久化 skill 的同一契约；不得把编译通过说成视觉或无障碍认证。
