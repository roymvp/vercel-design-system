'use client'

import * as React from 'react'

/*
  轻量双主题 Provider（不引入 next-themes 依赖）。
  - theme: 用户显式选择，'light' | 'dark' | 'system'，持久化到 localStorage。
  - resolvedTheme: 实际生效的 'light' | 'dark'（system 时跟随 prefers-color-scheme）。
  应用方式：在 <html> 上加/去 `.dark` 类，并同步 color-scheme。
  首屏防闪烁由 layout.tsx 注入的阻塞脚本（themeInitScript）完成，本 Provider 只负责
  水合后的交互与订阅系统主题变化。
*/

export type Theme = 'light' | 'dark' | 'system'
type Resolved = 'light' | 'dark'

const STORAGE_KEY = 'vercel-style-theme'

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: Resolved
  setTheme: (t: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextValue | null>(null)

function systemPref(): Resolved {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function apply(resolved: Resolved) {
  const root = document.documentElement
  root.classList.toggle('dark', resolved === 'dark')
  root.style.colorScheme = resolved
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>('system')
  const [resolvedTheme, setResolved] = React.useState<Resolved>('light')

  // 水合后读取已保存偏好（阻塞脚本已在首屏应用，这里只同步 React 状态）。
  React.useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'system'
    setThemeState(stored)
  }, [])

  // 依据 theme 计算并应用 resolved；system 时订阅媒体查询。
  React.useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const compute = () => {
      const r: Resolved = theme === 'system' ? (mql.matches ? 'dark' : 'light') : theme
      setResolved(r)
      apply(r)
    }
    compute()
    if (theme === 'system') {
      mql.addEventListener('change', compute)
      return () => mql.removeEventListener('change', compute)
    }
  }, [theme])

  const setTheme = React.useCallback((t: Theme) => {
    setThemeState(t)
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch {}
  }, [])

  const value = React.useMemo(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme 必须在 <ThemeProvider> 内使用')
  return ctx
}

/*
  首屏阻塞脚本：在 React 水合前把已保存的主题写到 <html>，避免暗色闪白。
  以字符串注入到 layout 的 <head>，用 dangerouslySetInnerHTML 执行。
*/
export const themeInitScript = `(function(){try{var k='${STORAGE_KEY}';var t=localStorage.getItem(k)||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`
