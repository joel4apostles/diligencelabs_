'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useScrollVisibility } from '@/hooks'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NavigationItem } from '@/types'

const NAV_ITEMS: readonly NavigationItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Engagement', href: '#how-it-works' },
  { name: 'Contact', href: '#booking' }
] as const

export function Navigation() {
  const { isVisible } = useScrollVisibility({ hideThreshold: 150 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" }
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 vibrant-card backdrop-blur-md border-b border-accent-primary/20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono font-bold text-xl"
          >
            <span className="text-text-primary shimmer-text">DILIGENCE</span>
            <span className="text-accent-primary">LABS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleNavigation(item.href)}
                className="text-text-secondary hover:text-accent-primary transition-colors duration-300 font-medium magnetic-element relative"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle size="md" className="mr-4" />
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleNavigation('#booking')}
            className="hidden md:block bg-text-primary hover:bg-text-secondary text-bg-page px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 btn-primary hover:shadow-lg"
          >
            Schedule Triage
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-text-primary p-2 hover:bg-border-subtle/20 rounded-md transition-all duration-200 interactive-element"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left text-text-secondary hover:text-text-primary transition-colors duration-300 py-2"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('#booking')}
              className="w-full bg-text-primary hover:bg-text-secondary text-bg-page py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 btn-primary hover:shadow-lg mt-4"
            >
              Schedule Triage
            </button>
            
            {/* Mobile Theme Toggle */}
            <div className="pt-4 border-t border-border-subtle mt-4">
              <ThemeToggle size="md" showLabel className="w-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}