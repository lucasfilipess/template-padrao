import React, { useState, createContext } from 'react'
import { STORAGE_NAME } from 'config'

export type ThemeProps = 'dark' | 'light'

export type ThemeContextData = {
  theme: ThemeProps
  isDark: boolean
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
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem(`${STORAGE_NAME}:theme`, 'dark')
    } else {
      setTheme('light')
      localStorage.setItem(`${STORAGE_NAME}:theme`, 'light')
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
