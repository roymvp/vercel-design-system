import { cn } from '@/lib/utils'

/*
  vercel 风格代码 / 终端拟态
  源规范 components：code-editor-mockup（primary 深墨面 / code 排版 / 8px 圆角）。
  技术层一律用等宽面（type-code）。窗口点用发丝色，不引入新强调色。
*/
export function CodeMockup({
  filename = '~/northstar',
  lines,
  className,
}: {
  filename?: string
  lines: { text: string; tone?: 'muted' | 'accent' | 'default' }[]
  className?: string
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[var(--radius-md)] bg-primary text-on-primary shadow-[var(--shadow-4)]',
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-[var(--space-lg)] py-3">
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="ms-2 type-caption-mono text-white/50">{filename}</span>
      </div>
      <pre className="overflow-x-auto p-[var(--space-lg)] type-code">
        <code className="block">
          {lines.map((line, i) => (
            <span
              key={i}
              className={cn(
                'block',
                line.tone === 'muted' && 'text-white/40',
                line.tone === 'accent' && 'text-cyan',
                (!line.tone || line.tone === 'default') && 'text-white/90',
              )}
            >
              {line.text || '\u00a0'}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
