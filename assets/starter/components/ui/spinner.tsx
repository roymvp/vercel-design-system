import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
  vercel 风格加载指示。Spinner：旋转环，尺寸随 className 上的 size-* 调整，
  颜色继承 currentColor（默认 text-mute）。带 sr-only 文案供读屏。
*/
function Spinner({
  className,
  label = '加载中',
}: {
  className?: string
  label?: string
}) {
  return (
    <span role="status" className="inline-flex items-center text-mute">
      <Loader2 className={cn('size-4 animate-spin', className)} />
      <span className="sr-only">{label}</span>
    </span>
  )
}

export { Spinner }
