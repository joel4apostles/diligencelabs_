'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useIsomorphicTheme } from '@/contexts/ThemeContext'
import { useState } from 'react'

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function ThemeToggle({ 
  className = '', 
  showLabel = false,
  size = 'md' 
}: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme, toggleTheme, isLoading } = useIsomorphicTheme()
  const [isOpen, setIsOpen] = useState(false)

  const sizes = {
    sm: { button: 'w-8 h-8', icon: 'w-4 h-4' },
    md: { button: 'w-10 h-10', icon: 'w-5 h-5' },
    lg: { button: 'w-12 h-12', icon: 'w-6 h-6' }
  }

  const currentSize = sizes[size]

  // Prevent rendering until mounted to avoid hydration mismatch
  if (isLoading) {
    return (
      <div className={`${currentSize.button} bg-bg-card/50 rounded-lg animate-pulse ${className}`} />
    )
  }

  const ThemeOption = ({ 
    value, 
    label, 
    icon 
  }: { 
    value: 'light' | 'dark' | 'system'
    label: string
    icon: React.ReactNode 
  }) => (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        setTheme(value)
        setIsOpen(false)
      }}
      className={`flex items-center space-x-3 w-full px-3 py-2 text-left rounded-lg transition-colors duration-200 ${
        theme === value 
          ? 'bg-text-secondary/20 text-text-primary' 
          : 'text-text-secondary hover:text-text-primary hover:bg-text-secondary/10'
      }`}
    >
      <div className={`${currentSize.icon} flex items-center justify-center`}>
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
      {theme === value && (
        <motion.div
          layoutId="theme-indicator"
          className="ml-auto w-2 h-2 bg-text-secondary rounded-full"
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )

  const SunIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )

  const MoonIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )

  const SystemIcon = () => (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )

  return (
    <div className={`relative ${className}`}>
      {/* Simple Toggle Mode */}
      <div className="flex items-center space-x-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          onMouseEnter={() => setIsOpen(false)}
          className={`relative ${currentSize.button} bg-bg-card/80 backdrop-blur-sm border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-highlight transition-all duration-300 group`}
          aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={resolvedTheme}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={currentSize.icon}
            >
              {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </motion.div>
          </AnimatePresence>

          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-text-secondary/5 via-text-secondary/10 to-text-secondary/5" />
        </motion.button>

        {/* Advanced Toggle Mode - Three Options */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`${currentSize.button} bg-bg-card/80 backdrop-blur-sm border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border-highlight transition-all duration-300`}
          aria-label="Theme options"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={currentSize.icon}
          >
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.button>

        {showLabel && (
          <span className="text-sm text-text-secondary font-medium capitalize">
            {theme === 'system' ? `Auto (${resolvedTheme})` : theme}
          </span>
        )}
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 z-50 bg-bg-card/95 backdrop-blur-md border border-border-subtle rounded-xl shadow-xl min-w-[160px] py-2"
            >
              <div className="px-3 py-2 text-xs text-text-muted font-semibold uppercase tracking-wider border-b border-border-subtle mb-2">
                Theme
              </div>
              
              <div className="space-y-1 px-2">
                <ThemeOption 
                  value="light" 
                  label="Light" 
                  icon={<SunIcon />} 
                />
                <ThemeOption 
                  value="dark" 
                  label="Dark" 
                  icon={<MoonIcon />} 
                />
                <ThemeOption 
                  value="system" 
                  label="System" 
                  icon={<SystemIcon />} 
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}