'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Shield } from 'lucide-react'
import { GlassNavbar } from '@/components/navigation/glass-navbar'

const handleScheduleSession = () => {
  const element = document.querySelector('#booking')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleViewCases = () => {
  const element = document.querySelector('#about')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function HeroPremium() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <GlassNavbar />
      
      <section className="relative min-h-[100dvh] bg-gray-50 dark:bg-slate-950 flex items-center justify-center overflow-hidden">
        {/* Refined Background Architecture */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Minimal Grid Foundation */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px]" />
          </div>
          
          {/* Subtle Depth Gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/5 to-slate-950/20 transform-gpu" />
        </div>

        {/* Main Content Container - Mathematical Precision */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 md:pt-32 lg:pt-28 pb-20 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.3 : 0.8, 
              ease: [0.25, 0.1, 0.25, 1] 
            }}
            className="text-center will-change-transform"
          >
            {/* Professional Status Indicator */}
            <motion.div
              initial={{ 
                scale: shouldReduceMotion ? 1 : 0.95, 
                opacity: 0 
              }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.2 : 0.6, 
                delay: shouldReduceMotion ? 0 : 0.2 
              }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-emerald-100/80 dark:bg-emerald-950/40 backdrop-blur-sm border border-emerald-600/30 dark:border-emerald-500/25 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 mb-8 sm:mb-10 md:mb-12 relative z-10"
            >
              <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 dark:text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-mono font-semibold tracking-wide uppercase whitespace-nowrap" aria-label="Our specialization: Strategic blockchain advisory services">
                STRATEGIC BLOCKCHAIN ADVISORY
              </span>
            </motion.div>

            {/* Balanced Typography Hierarchy */}
            <motion.div 
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.2 : 0.8, 
                delay: shouldReduceMotion ? 0 : 0.3 
              }}
              className="mb-1 sm:mb-1 md:mb-2"
            >
              <h1 
                className="font-black text-slate-900 dark:text-white leading-[0.85] sm:leading-[0.85] tracking-[-0.02em] sm:tracking-[-0.04em] mb-6 sm:mb-8"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1, "ss01" 1',
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                {/* Consistent sizing across all lines */}
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                  <span className="block mb-2 sm:mb-3 md:mb-4">WE HELP YOU</span>
                  <span className="block mb-2 sm:mb-3 md:mb-4 text-emerald-500 dark:text-emerald-400 relative">
                    BUILD & SHIP
                    {/* Refined accent treatment */}
                    <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-28 h-0.5 sm:h-1 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-60 transform-gpu" />
                  </span>
                  <span className="block">FREELY</span>
                </div>
              </h1>
            </motion.div>

            {/* Refined Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.2 : 0.8, 
                delay: shouldReduceMotion ? 0 : 0.4 
              }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 dark:text-slate-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 font-normal px-2 sm:px-0"
              style={{ 
                fontFeatureSettings: '"kern" 1, "liga" 1',
                textRendering: 'optimizeLegibility'
              }}
            >
              Strategic consultation for blockchain projects. Expert guidance on{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">tokenomics</span>,{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">architecture</span>, and{' '}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">technical decisions</span>{' '}
              that define successful Web3 ventures.
            </motion.p>

            {/* Institutional CTA Design */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0.2 : 0.8, 
                delay: shouldReduceMotion ? 0 : 0.6 
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0"
            >
              {/* Primary Action - Investment Grade */}
              <motion.button
                whileHover={shouldReduceMotion ? {} : { 
                  scale: 1.02, 
                  y: -1,
                  boxShadow: "0 16px 32px rgba(16, 185, 129, 0.25)"
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                onClick={handleScheduleSession}
                className="group bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 sm:gap-3 min-h-[48px] sm:min-h-[56px] w-full sm:w-auto border-2 border-emerald-400 touch-manipulation will-change-transform"
                style={{ 
                  fontFeatureSettings: '"kern" 1',
                  textRendering: 'optimizeLegibility'
                }}
                type="button"
                aria-label="Schedule a strategic consultation session"
              >
                <span>Schedule Strategic Session</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
              </motion.button>

              {/* Secondary Action - Enhanced */}
              <motion.button
                whileHover={shouldReduceMotion ? {} : { 
                  scale: 1.02,
                  y: -1
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                onClick={handleViewCases}
                className="group text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-base sm:text-lg transition-all duration-300 min-h-[48px] sm:min-h-[56px] px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto border-2 border-slate-300 dark:border-slate-600/60 hover:border-emerald-500 dark:hover:border-emerald-400/60 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-slate-800/30 hover:bg-white/80 dark:hover:bg-slate-700/50 touch-manipulation will-change-transform"
                style={{ 
                  fontFeatureSettings: '"kern" 1',
                  textRendering: 'optimizeLegibility'
                }}
                type="button"
                aria-label="View our case studies and portfolio"
              >
                <span className="flex items-center gap-2">
                  <span className="hidden sm:inline">View Case Studies</span><span className="sm:hidden">Case Studies</span>
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </motion.button>
            </motion.div>

            {/* Refined Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: shouldReduceMotion ? 0.3 : 1.5 }}
              className="flex justify-center -mt-2 sm:-mt-3 md:-mt-4"
            >
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 sm:gap-3 will-change-transform"
              >
                <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 opacity-80 hidden sm:block">SCROLL</span>
                <div className="w-5 h-8 sm:w-6 sm:h-10 border border-emerald-600/50 dark:border-emerald-500/40 rounded-full flex justify-center p-1 bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-0.5 h-2 sm:w-1 sm:h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

      </section>
    </>
  )
}