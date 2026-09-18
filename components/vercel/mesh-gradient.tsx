import { cn } from '@/lib/utils'

/*
  品牌签名：多色网格渐变（develop 蓝→青 / preview 紫→粉 / ship 珊瑚→琥珀）
  源规范约束：三对渐变塌缩为一个统一的多色网格，仅在 hero 尺度使用；
  不裁成单色、不重排停靠点、不缩成图标。这里用多重 radial-gradient 叠加 + 模糊近似。
  作为氛围背景绝对定位于容器内，本身不接收指针事件。
*/
export function MeshGradient({
  className,
  intensity = 'hero',
}: {
  className?: string
  intensity?: 'hero' | 'band'
}) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div
        className={cn(
          'absolute left-1/2 top-0 aspect-[2/1] w-[140%] -translate-x-1/2 -translate-y-1/4 rounded-[var(--radius-full)]',
          intensity === 'hero' ? 'opacity-90 blur-[64px]' : 'opacity-70 blur-[80px]',
        )}
        style={{
          background: [
            'radial-gradient(28% 40% at 18% 32%, var(--grad-develop-start), transparent 70%)',
            'radial-gradient(26% 38% at 34% 20%, var(--grad-develop-end), transparent 68%)',
            'radial-gradient(30% 44% at 52% 30%, var(--grad-preview-start), transparent 70%)',
            'radial-gradient(26% 38% at 68% 18%, var(--grad-preview-end), transparent 66%)',
            'radial-gradient(30% 42% at 82% 34%, var(--grad-ship-start), transparent 70%)',
            'radial-gradient(26% 40% at 95% 22%, var(--grad-ship-end), transparent 66%)',
          ].join(','),
        }}
      />
    </div>
  )
}
