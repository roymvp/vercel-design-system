# 基础规范

权威实现：`assets/starter/app/globals.css`；字体：`assets/starter/app/layout.tsx`。2026-09-25 按明暗 Live Preview 的计算样式校准，具体矛盾记录见 source-and-assets.md。

## 颜色与面层

| 语义 | 浅色 | 暗色 |
| --- | --- | --- |
| background / canvas | #ffffff | #0a0a0a |
| ink / foreground / primary | #171717 | #ffffff |
| body | #4d4d4d | #a1a1a1 |
| mute | #8f8f8f | #a1a1a1 |
| card / popover | #ffffff | #171717 |
| canvas-soft | #f2f2f2 | #171717 |
| hairline | #ebebeb | #2e2e2e |
| on-primary | #ffffff | #171717 |
| link / ring | #0070f3 | #0070f3 |

Violet #7928ca、cyan #50e3c2、pink #ff0080 保留源色样，不自动转成装饰。error 浅 #ee0000、暗 #ff6166；warning #f5a623 是色板样本，上游根变量的 warning 则是中性灰，二者不能混称一致。success 对齐源中性灰；现有 Badge/Note 的 success 蓝色映射是工程扩展。

`panel-invert #171717` / `panel-invert-foreground #ffffff` 刻意固定，不随主题翻转，供代码与精选定价卡使用。旧 soft/deep 与渐变端点为兼容扩展，不是默认页面配色。

源 mute 在白底小字不达 AA。当前展示的必读说明、标签、输入占位使用 body/ink；muted-foreground 也映射 body。保留 mute 色样供对照，不宣称所有扩展样本均完成对比度审计。

## 字体与排版

预览 HTML 实际加载 Inter，尽管 font-family 和文案首先写 Geist。当前 sans 使用 Inter；Geist Mono 和 Noto Sans SC 是代码/CJK 适配。三者开源，next/font/google 构建下载、部署自行托管，中文 preload=false、display=swap。

| 类 | 桌面字号 / 行高 | 字重 / 字距 |
| --- | --- | --- |
| type-hero | 72 / 75.6 | 600 / -1.3px |
| type-section-heading | 36 / 43.2 | 600 / -1px |
| type-display-xl | 64 / 48 | 600 / -2.4px |
| type-display-lg | 32 / 40 | 600 / -1.28px |
| type-display-sm | 20 / 28 | 600 / -0.4px |
| type-body-sm-strong | 14 / 20 | 500 / -0.28px |
| type-caption-mono | 12 / 16 | 500 / 0 |
| type-body-lg / md / sm | 16/24 · 14/20 · 12/16 | 400 / 0 |
| type-code | 14 / 20 | 400 / 0 |
| type-button-md / lg | 14/20 · 16/24 | 600 / 0 |

`type-display-md` 24/32 与 `type-body-md-strong` 16/24 是旧 API 兼容扩展。display-xl 64/48 仅用于单行样本，不能机械套到多行正文。720px 以下适配为 38px/1.1，避免源固定行高的重叠。

## 布局、间距、圆角

容器 **1440px 含内边距**。section 80px 48px；hero 96px 48px；1024px 以下 section 64px 32px；720px 以下均为 48px 20px。hero 标题下 32px，引导段下 36px；引导段 19px/1.5、最大 840px，手机 16px。hero 左对齐、纯色，不挂 MeshGradient/CodeMockup。

spacing `xxs/xs/sm/md/lg/xl/2xl/3xl/4xl/section` = **4/8/12/16/24/32/40/64/96/128px**。`5xl=96`、`6xl=128` 是兼容别名。

radius `none/sm/md/lg/pill-sm/pill/full` = **0/6/12/16/64/100/9999px**；xs=4、xl=16 为兼容扩展。Card 的 feature-radius 是浅 16、暗 12；色板槽位使用 8px。令牌保留在 :root，不占用 Tailwind spacing/radius 命名空间。

## 高程

默认 flat 1px 发丝描边。`shadow-2` = **0 8px 24px rgba(0,0,0,.10)**；`shadow-4` = **0 16px 40px rgba(0,0,0,.16)**。`shadow-1` 是 inset 发丝线、3→2、5→4 为兼容别名。旧“全部五级堆叠阴影”的规则已废止。

## 明暗与交互扩展

ThemeProvider 保留 light/dark/system，首帧脚本和 `.light`/`.dark` 类避免闪烁，已存在的 theme 偏好存储保持不变。系统暗色媒体回退必须逐项与 `.dark` 一致，不能覆盖显式 `.light`。主题控件位于工程扩展区，不冒充源导航控件。

动效 120/180/280ms，standard cubic-bezier(.4,0,.2,1)。z-index base/sticky/drawer/overlay/modal/popover/toast/tooltip = 0/100/200/300/400/500/600/700，dropdown=500。焦点 2px、offset 2px；disabled=.5、muted=.65。以上为工程扩展，不是预览测量值。所有动态尊重 reduced-motion。

基础展示断点为实际预览的 720/1024；扩展组件仍可使用 Tailwind 默认 sm/md/lg。滚动 flex/grid 子项必须 min-w-0，不让内部滚动扩成整页横向滚动。
