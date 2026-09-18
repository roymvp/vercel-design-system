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
- `mute` 是原规范值，不保证放在任何背景上都达到小字 AA。可交互标签及必读正文优先 body / ink；不要宣称整个源调色板已通过无障碍认证。

## 排版与中文

Geist（sans）和 Geist Mono（mono）均为开源字体，通过 next/font/google 构建时下载、应用自行托管。Noto Sans SC 提供中文，400 / 500 / 600，display swap、preload false。实际为三款字体资源、两个用途栈。保留系统中文回退。无专有字体依赖；如构建网络不能获取 Google Fonts，应提供合法字体文件改为 next/font/local，而不是静默替换并宣称完全保真。

| 类名 | 桌面字号 | 字重 / 特征 |
| --- | --- | --- |
| type-display-xl | 48px，移动 clamp | 600 / -0.05em |
| type-display-lg | 32px，移动 clamp | 600 / -0.04em |
| type-display-md | 24px | 600 / -0.04em |
| type-display-sm | 20px | 600 / -0.03em |
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
