import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Noto_Sans_SC } from 'next/font/google'
import { ThemeProvider, themeInitScript } from '@/components/theme/theme-provider'
import { ToastProvider, ToastViewport } from '@/components/ui/toast'
import './globals.css'

/* Live Preview loads Inter, not Geist Sans. Geist Mono and Noto Sans SC are explicit code/CJK adaptations. */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-src',
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
    '按 getdesign.md Live Preview 校准的非官方设计系统：纯色明暗画布、600 字重标题、胶囊按钮与发丝描边卡片。工程扩展单独标识。',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
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
      className={`${inter.variable} ${geistMono.variable} ${cjkFont.variable} bg-background`}
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
