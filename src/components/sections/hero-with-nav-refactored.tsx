'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Calendar, Menu, X } from 'lucide-react'
import { useScrollVisibility, useScrollParallax } from '@/hooks'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NavigationItem } from '@/types'

const NAV_ITEMS: readonly NavigationItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Engagement', href: '#how-it-works' },
  { name: 'Contact', href: '#booking' }
] as const

export function HeroWithNavRefactored() {
  const { isVisible } = useScrollVisibility({ hideThreshold: 100 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const { ref, y: heroY, opacity: heroOpacity } = useScrollParallax({
    yRange: [0, -200],
    opacityRange: [1, 1, 0.3, 0],
    offset: ["start start", "end start"]
  })

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Glassmorphism Navigation */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -10, opacity: 0.95 }
        }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 dark:bg-slate-900/90 dark:border-white/5 
                   bg-white/90 border-gray-200/50 backdrop-blur-md border-b"
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
              onClick={() => handleNavigation('#')}
            >
              <div className="font-bold text-lg sm:text-xl tracking-tight" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                <span className="dark:text-white text-gray-900">DILIGENCE</span>
                <span className="text-emerald-500 dark:text-emerald-400 ml-1">LABS</span>
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
                  className="relative group dark:text-gray-300 text-gray-700 hover:text-emerald-500 dark:hover:text-emerald-400 font-medium transition-colors duration-300 py-2 px-3 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <ThemeToggle size="md" />
              </motion.div>

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
                className="group relative bg-emerald-500 hover:bg-emerald-400 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold shadow-lg transition-all duration-300 flex items-center space-x-2 overflow-hidden text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Triage</span>
                
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.2 }}
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]"
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative dark:text-white text-gray-900 p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
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
                background: `linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)`,
              }}
            >
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleNavigation(item.href)}
                  className="block w-full text-left dark:text-gray-300 text-gray-700 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors duration-300 py-4 px-6 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 min-h-[48px] font-medium text-base"
                >
                  {item.name}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                onClick={() => handleNavigation('#booking')}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 mx-6 min-h-[52px] text-base"
                style={{ width: 'calc(100% - 3rem)' }}
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Triage</span>
              </motion.button>
              
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

      {/* Hero Section with Technical Blueprint Background */}
      <div 
        ref={ref}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.04) 0%, transparent 40%),
            radial-gradient(circle, rgba(16, 185, 129, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      >
        <motion.section 
          style={{ 
            y: heroY,
            opacity: heroOpacity
          }}
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-16 sm:pb-20"
        >
          <div className="max-w-7xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
              className="text-center space-y-8 sm:space-y-12 lg:space-y-16"
            >
              {/* Enhanced Typography with Space Grotesk */}
              <div className="space-y-8 px-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold dark:text-white text-black leading-[0.9] sm:leading-[0.85] tracking-tight overflow-visible"
                  style={{ 
                    fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif', 
                    fontWeight: 800,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3), 0px 0px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    WE HELP YOU
                  </motion.span>
                  
                  <motion.span 
                    className="block mt-3 sm:mt-4 lg:mt-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <span className="text-emerald-800 dark:text-emerald-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>BUILD</span>
                    <span className="mx-2 sm:mx-4 lg:mx-6 text-gray-900 dark:text-slate-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>&</span>
                    <span className="text-emerald-800 dark:text-emerald-400" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>SHIP</span>
                  </motion.span>
                  
                  <motion.span 
                    className="block mt-3 sm:mt-4 lg:mt-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                  >
                    FREELY
                  </motion.span>
                </motion.h1>
              </div>

              {/* Improved Subtext */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="space-y-4"
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl dark:text-gray-400 text-gray-800 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed font-medium px-2 sm:px-4">
                  Strategic advisory and technical guidance for teams building the next generation of blockchain solutions
                </p>
              </motion.div>

              {/* Enhanced CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex flex-col items-center space-y-4 sm:space-y-6 px-2 sm:px-4"
              >
                {/* Primary CTA with Enhanced Effects */}
                <motion.button
                  onClick={() => handleNavigation('#booking')}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-emerald-500 hover:bg-emerald-400 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-lg sm:text-xl shadow-2xl transition-all duration-300 flex items-center space-x-2 sm:space-x-3 overflow-hidden min-h-[48px] sm:min-h-[56px]"
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Schedule Triage</span>
                  
                  {/* Animated background overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-white/20 to-emerald-400/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%]"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.button>

                {/* Secondary CTA - Explore Services */}
                <motion.button
                  onClick={() => handleNavigation('#services')}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group dark:text-gray-400 text-gray-800 hover:text-emerald-700 dark:hover:text-emerald-400 font-semibold text-base sm:text-lg flex items-center space-x-2 sm:space-x-3 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 min-h-[44px]"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </motion.div>

              {/* Floating Technical Elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${10 + (i * 12)}%`,
                      top: `${20 + (i * 8)}%`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.7,
                    }}
                  >
                    {/* Technical blueprint dots */}
                    <div className="w-1.5 h-1.5 bg-emerald-400/40 rounded-full" />
                    
                    {/* Connecting lines for blueprint effect */}
                    {i < 7 && (
                      <motion.div
                        className="absolute top-0.5 left-1.5 w-8 h-px bg-emerald-400/20"
                        animate={{
                          scaleX: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}