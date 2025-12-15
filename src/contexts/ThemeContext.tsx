'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'diligence-labs-theme'
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('dark')
  const [mounted, setMounted] = useState(false)

  // Get system preference
  const getSystemTheme = (): ResolvedTheme => {
    if (typeof window === 'undefined') return 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // Resolve theme based on current setting
  const resolveTheme = (currentTheme: Theme): ResolvedTheme => {
    if (currentTheme === 'system') {
      return getSystemTheme()
    }
    return currentTheme
  }

  // Apply theme to document
  const applyTheme = (newResolvedTheme: ResolvedTheme) => {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark')
    
    // Add new theme class
    root.classList.add(newResolvedTheme)
    
    // Set data attribute for CSS targeting
    root.setAttribute('data-theme', newResolvedTheme)
    
    // Update color-scheme for native form controls
    root.style.colorScheme = newResolvedTheme
  }

  // Set theme and persist to storage
  const setTheme = (newTheme: Theme) => {
    try {
      localStorage.setItem(storageKey, newTheme)
    } catch (error) {
      console.warn('Failed to save theme preference:', error)
    }
    
    setThemeState(newTheme)
    const resolved = resolveTheme(newTheme)
    setResolvedTheme(resolved)
    applyTheme(resolved)
  }

  // Toggle between light and dark (skip system)
  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  // Initialize theme on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(storageKey) as Theme
      const initialTheme = savedTheme || defaultTheme
      const resolved = resolveTheme(initialTheme)
      
      setThemeState(initialTheme)
      setResolvedTheme(resolved)
      applyTheme(resolved)
    } catch (error) {
      console.warn('Failed to load theme preference:', error)
      const resolved = resolveTheme(defaultTheme)
      setResolvedTheme(resolved)
      applyTheme(resolved)
    }
    
    setMounted(true)
  }, [defaultTheme, storageKey])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const newResolvedTheme = e.matches ? 'dark' : 'light'
        setResolvedTheme(newResolvedTheme)
        applyTheme(newResolvedTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme, mounted])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{
        theme: defaultTheme,
        resolvedTheme: 'dark',
        setTheme: () => {},
        toggleTheme: () => {}
      }}>
        {children}
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      resolvedTheme,
      setTheme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext)
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  
  return context
}

// Hook for components that need to know if theme is resolved
export function useIsomorphicTheme() {
  const [mounted, setMounted] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return {
      ...theme,
      resolvedTheme: 'dark' as const,
      isLoading: true
    }
  }

  return {
    ...theme,
    isLoading: false
  }
}