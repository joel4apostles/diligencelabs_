'use client'

import { motion } from 'framer-motion'

const PROTOCOL_COMPETENCIES = [
  'SMART CONTRACTS',
  'DEFI ARCHITECTURE', 
  'CROSS-CHAIN BRIDGING',
  'TOOLING INTEGRATION',
  'LAYER 2 SCALING',
  'MEV PROTECTION',
  'GOVERNANCE PROTOCOLS',
  'TOKENOMICS MODELING'
] as const

export function TechTicker() {
  return (
    <section className="relative bg-slate-950 py-8 sm:py-12 border-y border-slate-800/30 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-slate-500 text-xs tracking-widest uppercase font-mono font-medium">
            CORE COMPETENCIES:
          </h3>
        </motion.div>

        {/* Primary Ticker */}
        <div className="relative overflow-hidden">
          {/* Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          {/* Main Scrolling Content */}
          <motion.div
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 sm:space-x-12 whitespace-nowrap"
          >
            {/* First Set */}
            {PROTOCOL_COMPETENCIES.map((competency, index) => (
              <motion.div
                key={`primary-${competency}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-8 sm:space-x-12"
              >
                <span className="text-slate-500 text-xs font-mono tracking-widest uppercase hover:text-emerald-400 transition-colors duration-500 cursor-default">
                  {competency}
                </span>
                <span className="text-slate-700 text-xs font-mono">
                  //
                </span>
              </motion.div>
            ))}

            {/* Second Set (for seamless loop) */}
            {PROTOCOL_COMPETENCIES.map((competency, index) => (
              <motion.div
                key={`primary-second-${competency}`}
                className="flex items-center space-x-8 sm:space-x-12"
              >
                <span className="text-slate-500 text-xs font-mono tracking-widest uppercase hover:text-emerald-400 transition-colors duration-500 cursor-default">
                  {competency}
                </span>
                <span className="text-slate-700 text-xs font-mono">
                  //
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Secondary Ticker (Reverse Direction) */}
        <div className="relative overflow-hidden mt-6 opacity-30">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[...PROTOCOL_COMPETENCIES].reverse().map((competency, index) => (
              <div key={`reverse-${competency}-${index}`} className="flex items-center space-x-8">
                <span className="text-slate-600 text-xs font-mono tracking-wider uppercase">
                  {competency}
                </span>
                <div className="w-1 h-1 bg-slate-600 rounded-full" />
              </div>
            ))}
            {[...PROTOCOL_COMPETENCIES].reverse().map((competency, index) => (
              <div key={`reverse-second-${competency}-${index}`} className="flex items-center space-x-8">
                <span className="text-slate-600 text-xs font-mono tracking-wider uppercase">
                  {competency}
                </span>
                <div className="w-1 h-1 bg-slate-600 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 h-px w-48 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent origin-center"
        />
      </div>
    </section>
  )
}