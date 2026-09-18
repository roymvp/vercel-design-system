# 来源、资产与边界

## 唯一视觉来源

- https://getdesign.md/vercel/design-md
- https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/vercel/DESIGN.md
- 原始文本：https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/vercel/DESIGN.md

只引用其中 vercel 这一份规范，不引入该仓库其他品牌。以上为可变的上游链接，不是固定 commit 快照；复用时以本次验收并封装的 tokens / 组件为准。重新跟进上游属于设计更新，不能静默覆盖。

## 从规范到实现

| 领域 | 本系统的落实位置 |
| --- | --- |
| 颜色、间距、圆角、阴影、排版刻度 | assets/starter/app/globals.css |
| 字体与中文回退 | assets/starter/app/layout.tsx |
| 按钮、输入框、卡片、徽章、导航 | assets/starter/components/ui/ |
| hero 多色渐变、代码拟态、定价卡、标签药丸 | assets/starter/components/vercel/ |
| 完整展示页 | assets/starter/app/page.tsx + components/showcase/ |

这是依据文本规范合成的实现，不是官方组件库的二进制分发。无独立源组件包可安装，因此提供可直接安装运行的 copy-in starter；不虚构 npm 发布记录。

## 原规范边界与工程补充

本次导入确认源规范只有 light 主题，没有独立动效与无障碍章节。响应式断点、客户端选中状态、聚焦环、输入错误样式、中文字体与 Next.js 工程配置属于实现补充，而非原规范明确给出的完整交互设计。

上一次总结中的「全部组件可用」应理解为外观与公开源码可复用，不代表已连接注册、登录、支付或 AI 服务。源规范并不提供这些业务能力。API 的实际限制见 components.md。

## 字体授权与替代

Geist / Geist Mono 是开源字体，当前直接通过 next/font/google 使用，无需用近似 Latin 字体替代。中文由 Noto Sans SC 补齐，属于明确的 CJK 字形补充。构建时需能访问字体源；部署后的浏览器使用 Next.js 托管字体。没有打包、再分发任何专有字体文件。

## 素材清单

- 图标：已安装 lucide-react 的公开图标导出；以当前源码实际 import 为准，不发明私有图标库。
- 渐变：MeshGradient 的 CSS 组合，非官方原始图片。
- 照片、视频、品牌 logo、插画、3D 模型：无。无需外部素材与存储集成。
- starter 不包含脚手架默认 placeholder 图片、品牌图形或未使用 favicon。
- Northstar 是示例文字，不代表真实客户、服务或授权。正式应用替换为用户自己的内容。

## 安装与分发

完整入口为本仓库本身或 assets/starter/，推荐通过 GitHub 获取。保留 package.json、pnpm-lock.yaml、pnpm-workspace.yaml、components.json、Next / PostCSS / TypeScript 配置及全部 app/components/lib/examples 源码。

不包含 node_modules、.next、.git、.env*、绝对 file: 依赖或只读挂载路径。未授予第三方商标权；如另行公开发布包，需要单独核对所有上游许可，不因本说明产生新的授权。
