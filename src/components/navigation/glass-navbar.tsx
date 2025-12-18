'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAVIGATION_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' }
] as const

const handleNavigation = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScheduleTriage = () => {
  const element = document.querySelector('#booking')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-md bg-white/80 dark:bg-slate-950/80' 
          : 'backdrop-blur-sm bg-white/60 dark:bg-slate-950/60'
      } border-b border-gray-200/20 dark:border-white/5`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-slate-950 rounded" />
            </div>
            <span 
              className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              DILIGENCE LABS
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ThemeToggle size="sm" />
            </motion.div>
          </div>

          {/* CTA Button - High Contrast */}
          <div className="hidden md:block">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScheduleTriage}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Triage</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors touch-target-44"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-white/5"
      >
        <div className="px-4 py-6 space-y-4">
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => {
                handleNavigation(item.href)
                setIsOpen(false)
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20 
              }}
              transition={{ 
                duration: 0.3, 
                delay: isOpen ? index * 0.1 : 0 
              }}
              className="block text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300 font-medium py-2 text-left"
            >
              {item.label}
            </motion.button>
          ))}
          
          {/* Mobile Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              x: isOpen ? 0 : -20 
            }}
            transition={{ 
              duration: 0.3, 
              delay: isOpen ? NAVIGATION_ITEMS.length * 0.1 : 0 
            }}
            className="flex items-center justify-between py-2"
          >
            <span className="text-gray-600 dark:text-gray-400 font-medium">Theme</span>
            <ThemeToggle size="sm" />
          </motion.div>
          
          {/* Mobile CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isOpen ? 1 : 0, 
              y: isOpen ? 0 : 20 
            }}
            transition={{ 
              duration: 0.3, 
              delay: isOpen ? (NAVIGATION_ITEMS.length + 1) * 0.1 : 0 
            }}
            onClick={() => {
              handleScheduleTriage()
              setIsOpen(false)
            }}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2 mt-4"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Triage</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}