import * as React from 'react'

import { cn } from '@/lib/utils'

/*
  vercel 风格头像与头像组（blog / changelog 作者署名用）。
  实测官方：作者头像小号圆形，多作者时重叠成组、后一枚负外边距压叠，
  每枚外描一圈画布色环把彼此分隔开。尺寸走 sm(20) / md(24) / lg(32)。
*/
const sizeMap = {
  sm: 'size-5',
  md: 'size-6',
  lg: 'size-8',
} as const

type AvatarSize = keyof typeof sizeMap

function Avatar({
  src,
  alt,
  size = 'md',
  className,
  ...props
}: Omit<React.ComponentProps<'img'>, 'size'> & { size?: AvatarSize }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      data-slot="avatar"
      src={src || '/placeholder.svg'}
      alt={alt ?? ''}
      className={cn(
        'inline-block shrink-0 rounded-[var(--radius-full)] object-cover ring-2 ring-canvas',
        sizeMap[size],
        className,
      )}
      {...props}
    />
  )
}

function AvatarStack({
  avatars,
  size = 'md',
  className,
}: {
  avatars: { src: string; alt: string }[]
  size?: AvatarSize
  className?: string
}) {
  return (
    <div
      data-slot="avatar-stack"
      className={cn('flex items-center', className)}
    >
      {avatars.map((a, i) => (
        <Avatar
          key={a.src + i}
          src={a.src}
          alt={a.alt}
          size={size}
          className={i > 0 ? '-ml-2' : undefined}
        />
      ))}
    </div>
  )
}

export { Avatar, AvatarStack }
