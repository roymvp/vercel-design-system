# 验证记录

## 已完成

- 用户已确认展示页与视觉验收通过，允许保存 skill 与推进 GitHub。
- 完整 starter 独立安装、冻结锁文件复装、全量 TypeScript 检查及 Next.js 生产构建通过；首页以静态页面输出。
- Next.js 已移除 ignoreBuildErrors，构建不能再绕过类型错误。
- starter 包含 27 个源文件与配置文件（含实际生成的 pnpm 锁文件），不是单个组件 JSON。
- 根工程与 starter 的直接依赖固定为验收所用版本；原始浮动范围不再用于后续安装。锁文件由包管理器生成，不手改。
- `node scripts/verify-starter.mjs` 检查 starter 必备文件、v0.json 路径、绝对 file: 依赖、挂载路径导入、符号链接及损坏字符。这个本地检查不代替平台专用验证器。
- 预览桌面 2198×1513、手机 390×844 的全页截图与从上到下滚动检查完成；document scrollWidth 分别为 2198 / 390，没有整页横向溢出。去除导航与页脚的实心三角标识，维持原验收版式。
- 真实浏览器入口最终解析为预览端口 3000，因此截图证明的是预览渲染，而非另起端口的生产服务器行为；生产构建本身已单独通过。

## 尚未完成 / 不得宣称已通过

- [VERIFY] 完整 WebM 录屏：已执行录制流程，但导出失败，浏览器工具环境缺少 ffmpeg；只有截图和滚动检查，不存在可交付视频。
- [VERIFY] 平台 VerifyDesignSystemSkill：当前工具列表不提供此能力，不能宣称完成 v0 官方契约验证或生成注册链接。
- [VERIFY] GitHub 关联：当前项目没有 git remote。当前工具不能创建并关联 GitHub 仓库，需要在项目右上角设置的 GitHub 入口创建/连接。
- [VERIFY] v0 Design Systems 2.0 注册：在 GitHub 连接后，以本项目完整仓库作为来源，填写名称「vercel 风格」。不可改为只导入 components.json，也不要选原始规范仓库代替当前成品仓库。
- 未进行全站自动 WCAG 审计；原规范 mute 小字对比度、展示输入标签等不能视为完全无障碍认证。
- 展示页的注册、登录、AI、定价 CTA 与虚构部署输出不是业务功能；正式应用应连接真实行为并另行验收。

## 保存与后续维护

个人 skill 标识为 vercel-style，中文展示名称为「vercel 风格」。SKILL.md、v0.json、references/ 与 assets/starter/ 组成完整交付，原视觉来源始终只有指定 vercel 规范。

后续可从任何对话继续维护该个人 skill，不必回到本对话。正式创建的平台设计系统也可从 Design Systems 页面维护；当前没有注册成功返回值，不编造系统 ID、GitHub URL 或 prompt 链接。
