import React, { useState, createContext, useEffect } from 'react'
import { STORAGE_NAME } from 'config'

export type ThemeProps = 'dark' | 'light'

export type ThemeContextData = {
  theme: ThemeProps
  toggleTheme: () => void
}

const storage =
  (localStorage.getItem(`${STORAGE_NAME}:theme`) as ThemeProps) || 'light'

const initialTheme: ThemeProps =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : storage

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
)

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>(initialTheme)
  const html = document.documentElement

  useEffect(() => {
    html.setAttribute('data-theme', initialTheme)
  }, [html])

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem(`${STORAGE_NAME}:theme`, 'dark')
      html.setAttribute('data-theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem(`${STORAGE_NAME}:theme`, 'light')
      html.setAttribute('data-theme', 'light')
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
