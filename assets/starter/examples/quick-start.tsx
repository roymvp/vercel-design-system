import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function QuickStartExample() {
  return (
    <Card variant="marketing" className="flex flex-col gap-4">
      <div><Badge variant="info">组件示例</Badge></div>
      <CardTitle>项目名称</CardTitle>
      <CardDescription>演示组件组合，不会保存或提交数据。</CardDescription>
      <div className="flex flex-col gap-2">
        <label htmlFor="example-project" className="font-sans text-sm text-body">
          名称
        </label>
        <Input id="example-project" name="project" inputSize="md" autoComplete="off" />
      </div>
      <div><Button type="button" disabled>仅展示</Button></div>
    </Card>
  )
}
