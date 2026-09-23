'use client'

import { Check, Copy } from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格命令片段。等宽单行命令 + 右侧复制按钮，canvas-soft 面 + 发丝描边 +
  md 圆角。复制成功后图标短暂转对勾。前缀 $ 提示为终端命令（可关）。
*/
function Snippet({
  command,
  prompt = true,
  className,
}: {
  command: string
  prompt?: boolean
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  function copy() {
    navigator.clipboard?.writeText(command).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <div
      data-slot="snippet"
      className={cn(
        'flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-hairline bg-canvas-soft py-2 pl-3.5 pr-2',
        className,
      )}
    >
      <code className="truncate font-mono text-[13px] text-ink">
        {prompt && <span className="select-none text-mute">$ </span>}
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        className="inline-flex size-7 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-mute outline-none transition-colors hover:bg-canvas hover:text-ink focus-visible:ring-2 focus-visible:ring-ring/40"
        aria-label={copied ? '已复制' : '复制命令'}
      >
        {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
      </button>
    </div>
  )
}

export { Snippet }
