'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
  return (
    <>
      <GlassNavbar />
      
      <section className="relative min-h-screen bg-slate-950 flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-emerald-500/10 rounded-lg rotate-12 pointer-events-none"
        />

        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-emerald-500/5 rounded-full pointer-events-none"
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.21, 1.11, 0.81, 0.99] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-mono font-medium tracking-wider">
                STRATEGIC BLOCKCHAIN ADVISORY
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 
              className="text-6xl sm:text-7xl lg:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tight"
              style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
            >
              WE HELP YOU{' '}
              <motion.span 
                className="text-emerald-500"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(16,185,129,0)",
                    "0 0 20px rgba(16,185,129,0.5)",
                    "0 0 0px rgba(16,185,129,0)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                BUILD
              </motion.span>
              <br />
              & SHIP FREELY
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 font-medium"
            >
              Strategic consultation for blockchain projects. Expert guidance on tokenomics, 
              architecture, and technical decisions that define successful Web3 ventures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 40px rgba(16,185,129,0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScheduleSession}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg shadow-emerald-500/20 flex items-center space-x-3"
              >
                <span>Schedule Strategic Session</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  y: -3
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewCases}
                className="border border-white/20 hover:border-emerald-500/50 text-white hover:text-emerald-400 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Case Studies
              </motion.button>
            </motion.div>

          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-emerald-400"
          >
            <span className="text-xs font-mono opacity-60">SCROLL</span>
            <div className="w-6 h-10 border border-emerald-500/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [4, 16, 4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-emerald-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}