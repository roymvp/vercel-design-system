---
name: vercel-style
description: >
  「vercel 风格」非官方设计系统。用于用户明确选择该系统时的新应用、落地页、定价页、导航、表单、卡片与技术产品界面；也用于维护其 tokens、组件、中文字体与 starter。唯一视觉来源为 VoltAgent/awesome-design-md 的 design-md/vercel/DESIGN.md 及本次已验收实现，不混合其他品牌。Next.js App Router、Tailwind CSS v4、shadcn/ui（Base UI）源码组件，近白画布、墨色操作、紧字距标题、营销 pill 与紧凑导航、堆叠阴影、hero 多色渐变。
metadata:
  v0.kind: design-system
  v0.design-system:
    appearance:
      light:
        background: '#FAFAFA'
        foreground: '#171717'
      dark:
        background: '#171717'
        foreground: '#FFFFFF'
---

# vercel 风格

本系统是所选应用的唯一 UI 来源。非 Vercel 官方产品；不要复制原品牌名称、logo、营销文案或暗示官方背书。Northstar 仅是展示用虚构名称，新应用必须换成用户的产品名。

## 从完整 starter 开始

使用 `v0.json` 指向的 `assets/starter/`，其中包含已验收的完整展示页、所有组件、tokens、字体配置、构建配置和 pnpm 锁文件。按原相对路径继承，不要只导入 `components.json`，不要重建另一套脚手架。

这是 **copy-in 源码设计系统**，不是已发布的 npm 组件包。所有应用导入只走 `@/components/ui/*`、`@/components/vercel/*` 和 `@/lib/utils`。不要发明 `@vercel-style/ui` 等包名，不要在运行时代码中导入 skill 或 references 路径。

安装与校验：`pnpm install --frozen-lockfile`、`pnpm typecheck`、`pnpm build`。扩展时保持现有版本与锁文件同步，使用 Next.js 16 的异步 request APIs。大部分展示保持 Server Components，交互区域才使用 Client Components。

## 按任务读取

- 颜色、字体、间距、圆角、阴影、断点、动效边界：`references/foundations.md`。
- 按钮、输入框、卡片、徽章、导航及组合组件的真实 API：`references/components.md`。
- 资产、原规范来源、补充项与限制：`references/source-and-assets.md`。
- 能直接编译的使用示例与展示入口：`references/examples.md`。
- 当前验证范围与待完成的平台操作：`references/verification.md`。

## 不可破坏的约束

1. 视觉来源仅为指定的 vercel 规范。其他仓库、其他团队设计技能不能覆盖本系统；组件行为以 starter 的实际源码为准。
2. `app/globals.css` 是 tokens 的唯一真相源。用语义颜色，不用 Tailwind 默认颜色替代。原规范多色 hero 是刻意保留，不要扩散为每张卡片的装饰。
3. Latin 使用开源 Geist / Geist Mono；中文用 Noto Sans SC，再回落 PingFang SC / Microsoft YaHei。这里没有分发专有字体。不要宣称三种字形来自两款字体。
4. 正文用 sans，技术信息用 mono。保留 display 负字距；中文长文不要使用 caption 或 code 字号。
5. 营销按钮为 pill，导航操作为 6px 圆角；同一操作组不要随意混搭尺度。深色精选定价卡使用反白 CTA。
6. 卡片用现有多层 `--shadow-*` 与 inset 发丝线，不换成单层浓重投影。圆角和间距通过现有 CSS 变量引用。
7. 应用目前为 light-only。appearance.dark 仅表示深墨卡片配色供 v0 展示，不代表实现了全站暗色主题；不要自动生成 `.dark` 映射。
8. 源文件没有给出的行为必须标为工程扩展。不要声称展示 CTA 有注册、支付、AI 或部署功能；需要业务时接入真实路由、事件及服务。
9. 新增输入必须有可访问名称与错误提示关联，交互有键盘焦点，不用颜色独自表达状态。移动端避免整页横向溢出，代码区域可以自身滚动。

## 交付前

检查完整 starter 的安装、类型和构建；用实际浏览器确认桌面与手机的底色、对齐、中文换行、控件与溢出。新业务要测试实际交互，不把静态外观当成功能验收。持续维护本契约、引用与完整 starter，不另建第二套品牌规范。
