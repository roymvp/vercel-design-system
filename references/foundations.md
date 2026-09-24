# 基础规范

权威实现：`assets/starter/app/globals.css`；字体配置：`assets/starter/app/layout.tsx`。本文是只读引用，应用代码从继承后的 `app/` 使用它们。

## 颜色与面层

- `ink #171717`、`body #4d4d4d`、`mute #888888`、`on-primary #ffffff`。
- `canvas #ffffff`、`canvas-soft #fafafa`、`canvas-soft-2 #f5f5f5`；页面 background 使用 canvas-soft。
- `hairline #ebebeb`、`hairline-strong #a1a1a1`。
- `link #0070f3`、`link-deep #0761d1`、`link-bg-soft #d3e5ff`；success 沿用蓝色而不是自造绿色。
- error / warning / violet / cyan 的 soft、deep 与原值均在 CSS 中，highlight-pink / highlight-magenta 同理。示范多色系不等于允许新增任意色板。
- hero 六个渐变端点为 `#007cf0 → #00dfd8`、`#7928ca → #ff0080`、`#ff4d4d → #f9cb28`。使用 MeshGradient 的统一大画幅组合，不缩成图标，不给普通卡片加彩色光晕。
- `--primary` 映射 ink，`--primary-foreground` 映射 on-primary，`--ring` 映射 link。颜色已有 `@theme inline` 映射，可以直接用 `bg-canvas`、`text-body` 等。
- `panel-invert #171717` / `panel-invert-foreground #fafafa`：固定反色面板专用，**刻意不随主题翻转**（`.dark` 与系统暗色回退里都不重定义）。用于代码卡、featured 定价卡等「有意的深色对比面」——双主题下都保持深墨底 + 白字，cyan 强调只在深底上成立。不要用会翻转的 `--primary` 做这类固定深色面板：暗色下 `--primary` 变浅会让硬编码白字消失（底变、字不变的经典 bug）。这类面板上的 CTA 也要用固定色（`bg-panel-invert-foreground text-panel-invert`），不要用会翻转的 `invert` 按钮变体。
- `mute` 是原规范值，不保证放在任何背景上都达到小字 AA。可交互标签及必读正文优先 body / ink；不要宣称整个源调色板已通过无障碍认证。

## 排版与中文

Geist（sans）和 Geist Mono（mono）均为开源字体，通过 next/font/google 构建时下载、应用自行托管。Noto Sans SC 提供中文，400 / 500 / 600，display swap、preload false。实际为三款字体资源、两个用途栈。保留系统中文回退。无专有字体依赖；如构建网络不能获取 Google Fonts，应提供合法字体文件改为 next/font/local，而不是静默替换并宣称完全保真。

| 类名 | 桌面字号 | 字重 / 特征 |
| --- | --- | --- |
| type-display-xl | 48px，移动 clamp | 500 / -0.06em |
| type-display-lg | 32px，移动 clamp | 500 / -0.055em |
| type-display-md | 24px | 500 / -0.045em |
| type-display-sm | 20px | 500 / -0.035em |
| type-body-lg / md / sm | 18 / 16 / 14px | 400 |
| type-body-md-strong / sm-strong | 16 / 14px | 500 |
| type-caption / caption-mono | 12px | 仅辅助样本、标签 |
| type-code | 13px | 等宽代码 |
| type-button-md / lg | 14 / 16px | 500 |

类内部已定义 font-family；新内容使用 `font-sans` / `font-mono` 与现有刻度，不另加第三种用途栈。中文标题避免极窄定宽；长正文不要用技术小字号。

## 间距、圆角、高程

`--space-xxs/xs/sm/md/lg/xl/2xl/3xl/4xl/5xl/6xl/section`：4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 96 / 128 / 192px。

`--radius-none/xs/sm/md/lg/xl/pill-sm/pill/full`：0 / 4 / 6 / 8 / 12 / 16 / 64 / 100 / 9999px。

使用 `p-[var(--space-lg)]`、`rounded-[var(--radius-md)]`。这些刻度当前保存在 :root，不应靠 Tailwind 内建 `rounded-md` 猜测其值。`--page-width: 1400px` 是最大内容宽度而非固定页面宽度。

`--shadow-1` 至 `--shadow-5` 已保存完整复合阴影；所有级别含 `--shadow-inset`。Card 默认 Level 3，large / PricingCard / CodeMockup 用 Level 4，soft 用 Level 1，template 用 Level 2。不要把复合值压成一个 blur。

## 响应式与动效

starter 使用 Tailwind 默认断点：sm 640px、md 768px、lg 1024px、xl 1280px、2xl 1536px；这是实现决策，不是源规范额外规定。布局以 flex 为先，真正二维内容用 grid。网格与 flex 内可滚动子项扩展时加 min-w-0。

原规范没有独立 Motion 章节。当前仅轻量 CSS 控件过渡，无 Motion / GSAP 依赖，无路由过渡承诺。新增动画需尊重 prefers-reduced-motion，不把新库变成默认基础设施。

## 明暗双主题

对齐 Geist 的 light / dark / system 三态。token 分两层：`:root` 存放**语义变量**（canvas / ink / body / mute / hairline 等），`.dark` 覆盖同名语义变量为暗色刻度；`@theme inline` 只映射语义名，组件因此无需感知主题。暗色中性刻度取自 Geist 暗色（canvas `#000` / canvas-soft `#0a0a0a` / ink `#ededed` / hairline `rgba(255,255,255,.12)`），链接与状态色在暗色下相应提亮以维持对比。

- 主题状态由 `<html>` 上的 `.dark` 类表达，`color-scheme` 同步切换，浏览器原生控件（滚动条、表单）随之反相。
- `ThemeProvider`（`@/components/theme/theme-provider`）在 `<head>` 注入阻塞脚本，首帧前依据 localStorage（键 `theme`）或系统偏好写入 `.dark`，杜绝 FOUC；`layout.tsx` 的 `<html>` 必须带 `suppressHydrationWarning`。
- `ThemeToggle`（`@/components/theme/theme-toggle`）是分段式 太阳 / 显示器 / 月亮 三态切换，选择 system 时跟随 `prefers-color-scheme` 实时变化。
- 写组件时**只用语义 token**（`bg-canvas`、`text-ink`、`border-hairline`），不要写死 `#fff` / `#000` 或 tailwind 具体色阶，否则暗色下不会翻转。viewport 的 `themeColor` 已按 `prefers-color-scheme` 提供明暗两个值。
- **系统暗色回退（预览环境必需）**：暗色 token 除挂在 `.dark` 类上，还在 `globals.css` 里额外用 `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }` 复写一份。因为设计系统预览等环境不运行本项目的首屏脚本/`ThemeProvider`，它们靠**模拟系统暗色偏好**切换；若只认 `.dark` 类，浏览器只把默认画布染黑而 token 不翻转，就会出现「背景变了、文字没变」。为此 `ThemeProvider`/首屏脚本在选亮色时显式加 `.light` 类，用 `:not(.light)` 抑制回退（系统暗、用户手动选亮时不误翻）。**媒体块内的 token 值必须与 `.dark` 逐条一致**，改一处要同步另一处。

## 动效 token

`--duration-fast/base/slow`：120 / 200 / 320ms。`--ease-standard`（`cubic-bezier(0.2,0,0,1)`，进出通用）、`--ease-out`、`--ease-in`。用 `duration-[var(--duration-fast)]` 搭配 Base UI 的 `data-[starting-style]` / `data-[ending-style]` 做浮层进出。全部动画受 `prefers-reduced-motion` 收敛（见文末工具），不新增动画库。

## 层级 z-index

`--z-base/sticky/dropdown/overlay/modal/popover/tooltip/toast`：0 / 10 / 30 / 40 / 50 / 60 / 70 / 80。吸顶导航用 sticky，浮层（Dialog/Select/Menu/Tooltip/Toast）各按语义取对应层级，不再手写魔法数字。

## 焦点、描边与不透明度

- 焦点：统一 `focus-visible:ring-2 ring-ring/60`（或浮层内 `ring-ring/40`）+ `ring-offset-2 ring-offset-background`；键盘可见、指针点击不显示。所有交互原语共用此约定。
- 描边宽度当前只有 1px 发丝（`border-hairline` / `border-hairline-strong`），未定义更粗刻度；需要强调用颜色对比而非加粗。
- 不透明度：`--opacity-disabled`（0.5）、`--opacity-muted`（0.7）。禁用态统一 `opacity-[var(--opacity-disabled)]` + `pointer-events-none`。
