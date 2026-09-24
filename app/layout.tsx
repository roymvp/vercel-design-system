import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_SC } from 'next/font/google'
import { ThemeProvider, themeInitScript } from '@/components/theme/theme-provider'
import { ToastProvider, ToastViewport } from '@/components/ui/toast'
import './globals.css'

/*
  字体说明：
  源规范将 Geist / Geist Mono 标注为「专有」，但二者实为 Vercel 以 SIL OFL 开源、
  next/font/google 直接可用的字体，因此这里直接使用其本体以最大保真复现视觉：
  - 几何无衬线（display / body / button / label）→ Geist
  - 等宽面（code / mono 小标签 / 终端拟态）→ Geist Mono
  中文无对应字形：直接加载 Noto Sans SC 作为实体中文字体（不依赖用户系统是否安装
  PingFang SC / 微软雅黑），置于每个字体栈 Latin 字体之后 —— Latin 走 Geist，
  CJK 落到 Noto Sans SC。preload:false 避免拖慢首屏。
*/
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-src',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono-src',
  display: 'swap',
})
const cjkFont = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cjk-src',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  title: 'vercel 风格 · 设计系统',
  description:
    '基于 vercel 视觉语言的可复用设计系统展示：近白画布上的黑墨二重奏、hero 尺度的多色网格渐变、几何无衬线与等宽技术标签，以及堆叠阴影的克制高程。',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${cjkFont.variable} bg-background`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <ToastProvider>
            {children}
            <ToastViewport />
          </ToastProvider>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
