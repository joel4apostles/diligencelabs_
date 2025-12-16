'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { useScrollParallax } from '@/hooks'

export function HeroSectionRefactored() {
  const { ref, y: heroY, opacity: heroOpacity } = useScrollParallax({
    yRange: [0, -200],
    opacityRange: [1, 1, 0.3, 0],
    offset: ["start start", "end start"]
  })

  const handleNavigation = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div 
      ref={ref}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 40%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 100%)
        `,
        backgroundImage: `
          radial-gradient(circle, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }}
    >
      {/* Hero Content */}
      <motion.section 
        style={{ 
          y: heroY,
          opacity: heroOpacity
        }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
            className="text-center space-y-12"
          >
            {/* Main Headline with Space Grotesk Typography */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white leading-[0.85] tracking-tight"
                style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
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
                  className="block mt-2 lg:mt-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <span className="text-emerald-400">BUILD</span>
                  <span className="mx-6 text-slate-500">&</span>
                  <span className="text-emerald-400">SHIP</span>
                </motion.span>
                
                <motion.span 
                  className="block mt-2 lg:mt-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  FREELY
                </motion.span>
              </motion.h1>
            </div>

            {/* Enhanced Subtext */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="space-y-4"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
                Strategic advisory and technical guidance for teams building the next generation of blockchain solutions
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-col items-center space-y-6"
            >
              {/* Primary CTA */}
              <motion.button
                onClick={() => handleNavigation('#booking')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center space-x-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Triage</span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.2 }}
                />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => handleNavigation('#services')}
                whileHover={{ x: 5 }}
                className="group text-gray-400 hover:text-emerald-400 font-medium text-lg flex items-center space-x-2 transition-colors duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Floating Elements for Visual Interest */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
                  style={{
                    left: `${15 + (i * 15)}%`,
                    top: `${20 + (i * 10)}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}