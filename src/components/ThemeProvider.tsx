'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface ThemeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('aafy-dark-mode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = stored !== null ? stored === 'true' : prefersDark
    setDarkMode(shouldBeDark)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('aafy-dark-mode', String(darkMode))
  }, [darkMode, mounted])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
