'use client'

import * as React from 'react'
import { Bell, FileQuestion, Plus } from 'lucide-react'
import { FormField, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, Radio } from '@/components/ui/radio'
import { Switch } from '@/components/ui/switch'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Spinner } from '@/components/ui/spinner'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'
import { Tabs, TabsList, TabsTab, TabsPanel } from '@/components/ui/tabs'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Note } from '@/components/ui/note'
import { EmptyState } from '@/components/ui/empty-state'
import { StatusDot } from '@/components/ui/status-dot'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Pagination } from '@/components/ui/pagination'
import { Snippet } from '@/components/ui/snippet'
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '@/components/ui/accordion'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

function Block({ title, hint, children }: { title: string; hint: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="type-body-sm font-medium text-ink">{title}</p>
        <p className="type-caption text-mute">{hint}</p>
      </div>
      <div className="rounded-[var(--radius-lg)] border border-hairline bg-canvas p-6">{children}</div>
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex items-center gap-3">
      {children}
      <span className="type-body-sm text-body">{label}</span>
    </label>
  )
}

export function SystemSection() {
  const [page, setPage] = React.useState(2)

  return (
    <section id="system" className="preview-section">
      <div>
        <div className="flex flex-col gap-3">
          <p className="type-caption font-medium text-body">工程扩展 · 交互组件</p>
          <h2 className="type-section-heading text-ink">表单、反馈、浮层与导航</h2>
          <p className="type-body-lg text-body text-pretty">
            以下组件不属于 Live Preview 的原生内容，保留供业务开发复用。
            基于 Base UI 的交互与明暗主题支持，不代表已连接部署、支付或其他服务。
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <Block title="表单原语" hint="Field / Input / Textarea / Select，含标签、说明">
            <div className="flex flex-col gap-5">
              <FormField>
                <FieldLabel htmlFor="extension-project">项目名称</FieldLabel>
                <Input id="extension-project" aria-describedby="extension-project-hint" placeholder="my-vercel-app" />
                <FieldDescription id="extension-project-hint">小写字母、数字与连字符</FieldDescription>
              </FormField>
              <FormField>
                <FieldLabel>框架预设</FieldLabel>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="选择框架" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="svelte">SvelteKit</SelectItem>
                    <SelectItem value="nuxt">Nuxt</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField>
                <FieldLabel htmlFor="extension-note">备注</FieldLabel>
                <Textarea id="extension-note" rows={3} placeholder="部署备注……" />
              </FormField>
            </div>
          </Block>

          <Block title="选择控件" hint="Checkbox / Radio / Switch / Slider">
            <div className="flex flex-col gap-6">
              <Row label="启用自动部署">
                <Checkbox defaultChecked />
              </Row>
              <RadioGroup defaultValue="prod" aria-label="环境">
                <Row label="生产环境">
                  <Radio value="prod" />
                </Row>
                <Row label="预览环境">
                  <Radio value="preview" />
                </Row>
              </RadioGroup>
              <Row label="启用 Web Analytics">
                <Switch defaultChecked />
              </Row>
              <div className="flex flex-col gap-2">
                <span className="type-body-sm text-body">并发构建数</span>
                <Slider aria-label="并发构建数" defaultValue={3} min={1} max={8} />
              </div>
            </div>
          </Block>

          <Block title="加载与进度" hint="Spinner / Skeleton / Progress">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Spinner />
                <span className="type-body-sm text-body">部署中……</span>
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <Progress value={64} />
            </div>
          </Block>

          <Block title="提示块与状态" hint="Note / StatusDot">
            <div className="flex flex-col gap-4">
              <Note tone="success">部署成功，已分配生产域名。</Note>
              <Note tone="warning">此环境变量未加密。</Note>
              <div className="flex flex-wrap gap-4">
                <StatusDot tone="ready" />
                <StatusDot tone="building" />
                <StatusDot tone="error" />
                <StatusDot tone="queued" />
              </div>
            </div>
          </Block>

          <Block title="浮层" hint="Dialog / Tooltip / DropdownMenu">
            <div className="flex flex-wrap items-center gap-3">
              <Dialog>
                <DialogTrigger render={<Button variant="secondary" size="sm">打开对话框</Button>} />
                <DialogContent>
                  <DialogTitle>删除项目</DialogTitle>
                  <DialogDescription>此操作不可撤销，项目及其所有部署将被永久移除。</DialogDescription>
                  <DialogFooter>
                    <DialogClose render={<Button variant="ghost" size="sm">取消</Button>} />
                    <DialogClose render={<Button variant="primary" size="sm">删除</Button>} />
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="secondary" size="sm">
                        <Bell className="size-4" />
                        悬停查看提示
                      </Button>
                    }
                  />
                  <TooltipContent>重新部署当前 commit</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="secondary" size="sm">菜单</Button>} />
                <DropdownMenuContent>
                  <DropdownMenuLabel>项目操作</DropdownMenuLabel>
                  <DropdownMenuItem>访问部署</DropdownMenuItem>
                  <DropdownMenuItem>查看日志</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-error data-[highlighted]:text-error">删除</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Block>

          <Block title="命令片段" hint="Snippet / 复制按钮">
            <div className="flex flex-col gap-4">
              <Input aria-label="搜索命令" placeholder="搜索……" />
              <Snippet command="npx vercel deploy --prod" />
            </div>
          </Block>

          <Block title="标签页" hint="Tabs（WAI-ARIA，Base UI）">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTab value="overview">概览</TabsTab>
                <TabsTab value="deployments">部署</TabsTab>
                <TabsTab value="settings">设置</TabsTab>
              </TabsList>
              <TabsPanel value="overview" className="pt-4 type-body-sm text-body">
                项目概览与关键指标。
              </TabsPanel>
              <TabsPanel value="deployments" className="pt-4 type-body-sm text-body">
                最近的部署记录。
              </TabsPanel>
              <TabsPanel value="settings" className="pt-4 type-body-sm text-body">
                项目配置与环境变量。
              </TabsPanel>
            </Tabs>
          </Block>

          <Block title="数据表" hint="Table，发丝线分隔 + 行 hover">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>部署</TableHead>
                  <TableHead>状态</TableHead>
                  <TableHead>环境</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-mono">a1b2c3d</TableCell>
                  <TableCell><StatusDot tone="ready" /></TableCell>
                  <TableCell>生产</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">e4f5g6h</TableCell>
                  <TableCell><StatusDot tone="building" /></TableCell>
                  <TableCell>预览</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Block>

          <Block title="导航" hint="Breadcrumbs / Pagination">
            <div className="flex flex-col gap-6">
              <Breadcrumbs
                items={[
                  { label: '控制台', href: '#' },
                  { label: '项目', href: '#' },
                  { label: 'my-vercel-app' },
                ]}
              />
              <Pagination page={page} total={5} onPageChange={setPage} />
            </div>
          </Block>

          <Block title="手风琴" hint="Accordion（Base UI，键盘可达）">
            <Accordion>
              <AccordionItem value="a">
                <AccordionTrigger>什么是边缘网络？</AccordionTrigger>
                <AccordionPanel>全球分布的 CDN 与计算层，就近响应请求。</AccordionPanel>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger>如何回滚部署？</AccordionTrigger>
                <AccordionPanel>在部署列表中选择历史版本，一键提升为生产。</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Block>

          <Block title="空状态" hint="EmptyState">
            <EmptyState
              icon={<FileQuestion className="size-8" />}
              title="暂无部署"
              description="推送到已连接的 Git 分支即可创建首个部署。"
              action={
                <Button size="sm">
                  <Plus className="size-4" />
                  新建部署
                </Button>
              }
            />
          </Block>
        </div>
      </div>
    </section>
  )
}
