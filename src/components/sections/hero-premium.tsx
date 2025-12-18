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
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/5 to-slate-950/20" />
        </div>

        {/* Main Content Container - Mathematical Precision */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-8 pt-24 sm:pt-16 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            {/* Professional Status Indicator */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-emerald-950/40 dark:bg-emerald-950/40 bg-emerald-100/80 backdrop-blur-sm border border-emerald-500/25 dark:border-emerald-500/25 border-emerald-600/30 rounded-full px-5 py-2.5 mb-16"
            >
              <Shield className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400 text-sm font-mono font-semibold tracking-wide uppercase">
                STRATEGIC BLOCKCHAIN ADVISORY
              </span>
            </motion.div>

            {/* Balanced Typography Hierarchy */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h1 
                className="font-black text-slate-900 dark:text-white leading-[0.85] tracking-[-0.04em] mb-8"
                style={{ 
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1, "ss01" 1',
                  textRendering: 'optimizeLegibility',
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale'
                }}
              >
                {/* Consistent sizing across all lines */}
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  <span className="block mb-4">WE HELP YOU</span>
                  <span className="block mb-4 text-emerald-500 dark:text-emerald-400 relative">
                    BUILD &
                    {/* Refined accent treatment */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-emerald-500 dark:bg-emerald-400 rounded-full opacity-60" />
                  </span>
                  <span className="block">SHIP FREELY</span>
                </div>
              </h1>
            </motion.div>

            {/* Refined Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-normal"
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20 lg:mb-24"
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
                className="group bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-emerald-500/20 flex items-center gap-3 min-h-[56px] w-full sm:w-auto border-2 border-emerald-400"
                style={{ 
                  fontFeatureSettings: '"kern" 1',
                  textRendering: 'optimizeLegibility'
                }}
              >
                <span>Schedule Strategic Session</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary Action - Enhanced */}
              <motion.button
                whileHover={shouldReduceMotion ? {} : { 
                  scale: 1.02,
                  y: -1
                }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
                onClick={handleViewCases}
                className="group text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-lg transition-all duration-300 min-h-[56px] px-6 py-4 w-full sm:w-auto border-2 border-slate-300 dark:border-slate-600/60 hover:border-emerald-500 dark:hover:border-emerald-400/60 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-slate-800/30 hover:bg-white/80 dark:hover:bg-slate-700/50"
                style={{ 
                  fontFeatureSettings: '"kern" 1',
                  textRendering: 'optimizeLegibility'
                }}
              >
                <span className="flex items-center gap-2">
                  View Case Studies
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </motion.button>
            </motion.div>


          </motion.div>
        </div>

        {/* Refined Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-1/2 transform -translate-x-1/2 z-0"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs font-mono tracking-wider text-emerald-600 dark:text-emerald-400 opacity-80">SCROLL</span>
            <div className="w-6 h-10 border border-emerald-600/50 dark:border-emerald-500/40 rounded-full flex justify-center p-1 bg-white/10 dark:bg-slate-900/20 backdrop-blur-sm">
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-emerald-600 dark:bg-emerald-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}