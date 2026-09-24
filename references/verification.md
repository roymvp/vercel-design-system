# 验证记录

## 2026-09-25 · Live Preview 校准

用户批准范围：按明暗 Live Preview 校准展示页、基础 tokens、相关组件及持久化 skill/starter；保留额外组件并标为工程扩展。

### 权威来源与完成内容

- 实际打开并检查 `https://getdesign.md/design-md/vercel/preview.html` 与 `https://getdesign.md/design-md/vercel/preview-dark.html` 的 DOM、计算样式和截图。
- 校准纯色左对齐 hero、Inter、600 字重标题、明暗颜色、营销胶囊、导航与输入尺度、平面卡片、间距和阴影。源文字与实际渲染的差异记录在 `source-and-assets.md`。
- 原生示例与额外组件分区；保留定价、文章、时间线、浮层等工程扩展，不声称它们来自原生预览。
- 修改文件已同步到仓库 `assets/starter/` 与个人 live skill `vercel-style`，不是另建技能。已重新读取持久化 SKILL.md、v0.json，枚举确认其 references 和完整 starter 路径存在。
- v0.json 补齐当前已配置参考仓库的规范 mountPath，修复此前配置加载器报告的缺失字段；未更改仓库、分支或项目身份。

### 已通过的验证

- 仓库完整 starter：`pnpm --dir assets/starter install --frozen-lockfile`，锁文件策略检查通过。
- 全量 `pnpm --dir assets/starter typecheck` 与 `pnpm --dir assets/starter build` 通过；Next.js 16.3.3 首页静态输出。
- `node scripts/verify-starter.mjs` 通过，60 个源码/配置文件；检查必要文件、绝对 file: 依赖、符号链接、环境文件、挂载路径导入和损坏字符。
- 根工程 app/components/lib/examples 与仓库 starter 逐文件比较，无差异。
- 实际浏览器：桌面 2108×1513 与手机 390×844 明暗主题截图；主题切换与对话框打开/Escape 关闭通过。手机文档宽度 390px，无整页横向溢出。
- 输入标签关联、滑块可访问名称已补齐。检查中保留的无标签输入为 Base UI 内部隐藏控件，不能据此推断全部无障碍合规。

### 验证边界

- 安装、类型和构建验证运行于仓库完整 starter。memory skill 是文件工具提供的虚拟存储，不能由 Bash 直接访问；对该路径直接运行验证脚本返回 ENOENT。已通过文件工具核验保存内容和引用路径，但未对持久化副本另行运行全量构建。
- 当前工具未提供平台专用设计系统验证器或配置重新加载能力；缺失字段已修复，但不宣称平台加载器复验通过或产生新注册结果。
- 浏览器证据来自开发预览，不是生产部署；生产构建单独通过。未做全站自动 WCAG 审计、全量键盘路径或现场性能测量。
- 源 mute 小字色不满足所有浅底对比度要求；保留色样并记录限制，不能宣称整套源色板符合 AA。
- 示例注册、部署、AI、定价与页脚链接不是业务服务；正式产品须另接真实行为。
- 本轮未执行远程推送、部署或更改参考工作区配置；不将本地同步等同于远程发布。
