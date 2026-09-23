import * as React from 'react'
import { cn } from '@/lib/utils'

/*
  vercel 风格数据表。发丝线分隔、表头 canvas-soft 面 + mute 小字，
  行 hover 转 canvas-soft；单元格 12px 纵向内距。外层可选 rounded 卡壳。
*/
function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div className="w-full overflow-x-auto rounded-[var(--radius-md)] border border-hairline">
      <table
        data-slot="table"
        className={cn('w-full caption-bottom border-collapse text-left', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead className={cn('bg-canvas-soft', className)} {...props} />
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return <tbody className={className} {...props} />
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      className={cn(
        'border-b border-hairline transition-colors last:border-0 hover:bg-canvas-soft',
        className,
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      className={cn(
        'h-10 px-3 align-middle type-caption font-medium text-mute',
        className,
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td className={cn('px-3 py-3 align-middle type-body-sm text-body', className)} {...props} />
  )
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell }
