# 来源、资产与校准边界

## 视觉权威

2026-09-25 实际浏览、截图并读取 computed styles：

- 入口：https://getdesign.md/vercel/design-md
- 浅色 Live Preview：https://getdesign.md/design-md/vercel/preview
- 暗色 Live Preview：https://getdesign.md/design-md/vercel/preview-dark
- 补充文本：https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/vercel/DESIGN.md

**优先级：预览实际渲染 > 预览内标签/说明 > DESIGN.md 描述。** 不再用 vercel.com 测量覆盖此来源。这些 URL 可变；更新上游需重新校准，不能静默改成另一套视觉。

## 上游矛盾及本次取舍

| 项目 | 标签/文字 | 实际渲染及采用值 |
| --- | --- | --- |
| hero | 文字提及 mesh gradient | 纯色、左对齐、无徽章、无代码卡 |
| display-xl | 48px | inline style 64px、600、48px 行高、-2.4px |
| 字体 | Geist | 仅加载 Inter；sans 采用 Inter |
| 浅色画布 | 色板写 #fafafa | body #ffffff |
| 卡片 | 说明写 12px | 浅色 16px、暗色 12px |
| 阴影 | 多层极低透明度 | shadow-md 实为 0 8px 24px rgba(0,0,0,.1) |
| 输入 | 基础 class 为 0px 圆角 | inline 覆盖后 6px；计算高度 45px |
| 响应式 | 表格描述 768px | CSS 真正使用 720px、1024px |
| warning | 根变量中性灰 | 色板为 #f5a623，保留色板语义并明确差异 |

## 明确适配，不宣称逐像素复制

- 预览按英文内容排版；当前中文内容使用 Noto Sans SC，代码引入 Geist Mono。不是源站实际下载的全部字体集合。
- 必读小字使用 body 而非源低对比 mute；display-xl 手机端降低字号并增加行高，防止重叠。
- 展示省略原品牌和商业文案，导航链接改为本页真实锚点；没有复制 getdesign 的 GitHub 品牌控件。
- 基础色板展示当前主题 token，并同时注明明暗值，避免把静态浅色样本当成暗色 token。
- 额外组件保留于工程扩展区：主题切换、徽章、Kbd、头像、文章、日志、定价、tabs、完整表单、反馈、浮层、表格等。MeshGradient/CodeMockup 保留源码但不放入默认 hero。
- extra soft/deep 色阶、旧 card 变体、动效、z-index、焦点、禁用与错误行为属于工程扩展。

## 资产与安装

copy-in 源码，无独立 npm 包。公开运行时导入只使用 starter 的 @/ 路径。图标来自已安装 lucide-react；无官方 logo、摄影、插画、视频、3D 模型或专有字体。

Inter / Geist Mono / Noto Sans SC 通过 next/font/google 构建获取并自行托管。网络受限时可用合法本地字体替代并声明差异，不能伪称原样。

通过 GitHub 获取本仓库或完整 assets/starter。包含 manifests、锁文件、Next/PostCSS/TypeScript 配置及 app/components/lib/examples；不包含 node_modules、.next、.git、.env、绝对 file: 依赖或只读挂载路径。展示数据不代表注册、支付、AI、部署或真实客户能力。
