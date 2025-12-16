'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import { useScrollVisibility } from '@/hooks'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NavigationItem } from '@/types'

const NAV_ITEMS: readonly NavigationItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Engagement', href: '#how-it-works' },
  { name: 'Contact', href: '#booking' }
] as const

export function NavigationRefactored() {
  const { isVisible } = useScrollVisibility({ hideThreshold: 100 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -10, opacity: 0.95 }
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/5"
      style={{
        background: `
          linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.85) 100%)
        `,
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Glassmorphism Enhancement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer"
            onClick={() => handleNavigation('#')}
          >
            <div className="font-bold text-xl tracking-tight" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
              <span className="text-white">DILIGENCE</span>
              <span className="text-emerald-400 ml-1">LABS</span>
            </div>
            <div className="absolute inset-0 bg-emerald-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleNavigation(item.href)}
                className="relative group text-gray-300 hover:text-emerald-400 font-medium transition-colors duration-300 py-2 px-3 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.div
                  className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-full group-hover:left-0 transition-all duration-300"
                  style={{ transformOrigin: 'center' }}
                />
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <ThemeToggle size="md" />
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => handleNavigation('#booking')}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center space-x-2 overflow-hidden"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Triage</span>
              
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              />
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]"
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:hidden overflow-hidden"
        >
          <motion.div 
            className="py-6 space-y-4 backdrop-blur-sm bg-slate-900/50 rounded-xl mx-2 mb-4"
            style={{
              background: `
                linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)
              `,
            }}
          >
            {/* Mobile Navigation Items */}
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors duration-300 py-3 px-6 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </motion.button>
            ))}

            {/* Mobile CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={() => handleNavigation('#booking')}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 mx-6"
              style={{ width: 'calc(100% - 3rem)' }}
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Triage</span>
            </motion.button>
            
            {/* Mobile Theme Toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-4 border-t border-white/10 mx-6"
            >
              <ThemeToggle size="md" showLabel className="w-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  )
}