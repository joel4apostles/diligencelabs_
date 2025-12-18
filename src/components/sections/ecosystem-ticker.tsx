'use client'

import { motion } from 'framer-motion'

const ECOSYSTEM_ITEMS = [
  "ETHEREUM",
  "SOLANA", 
  "ARBITRUM",
  "ZK-ROLLUPS",
  "DEFI PRIMITIVES",
  "POLYGON",
  "OPTIMISM",
  "BASE",
  "AVALANCHE",
  "COSMOS"
] as const

export function EcosystemTicker() {
  return (
    <section className="relative bg-slate-950 py-8 sm:py-12 border-y border-slate-800/50 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h3 className="text-slate-500 text-xs sm:text-sm font-mono font-medium tracking-widest uppercase">
            OPERATIONAL COMPETENCE IN:
          </h3>
        </motion.div>

        {/* Ticker Container */}
        <div className="relative overflow-hidden">
          {/* Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          {/* Scrolling Content */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-8 sm:space-x-12 whitespace-nowrap"
          >
            {/* First Set */}
            {ECOSYSTEM_ITEMS.map((item, index) => (
              <motion.div
                key={`first-${item}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-8 sm:space-x-12"
              >
                <span className="text-slate-500 text-xs sm:text-sm font-mono font-medium tracking-widest uppercase hover:text-emerald-400 transition-colors duration-300 cursor-default">
                  {item}
                </span>
                <div className="w-1 h-1 bg-emerald-500/60 rounded-full" />
              </motion.div>
            ))}

            {/* Second Set (for seamless loop) */}
            {ECOSYSTEM_ITEMS.map((item, index) => (
              <motion.div
                key={`second-${item}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: (ECOSYSTEM_ITEMS.length + index) * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-8 sm:space-x-12"
              >
                <span className="text-slate-500 text-xs sm:text-sm font-mono font-medium tracking-widest uppercase hover:text-emerald-400 transition-colors duration-300 cursor-default">
                  {item}
                </span>
                <div className="w-1 h-1 bg-emerald-500/60 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Secondary Ticker (Reverse Direction for Visual Interest) */}
        <div className="relative overflow-hidden mt-6 opacity-40">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex space-x-6 sm:space-x-8 whitespace-nowrap"
          >
            {[...ECOSYSTEM_ITEMS].reverse().map((item, index) => (
              <div key={`reverse-${item}-${index}`} className="flex items-center space-x-6 sm:space-x-8">
                <div className="w-0.5 h-0.5 bg-emerald-500/30 rounded-full" />
                <span className="text-slate-600 text-xs font-mono tracking-wider uppercase">
                  {item}
                </span>
              </div>
            ))}
            {[...ECOSYSTEM_ITEMS].reverse().map((item, index) => (
              <div key={`reverse-second-${item}-${index}`} className="flex items-center space-x-6 sm:space-x-8">
                <div className="w-0.5 h-0.5 bg-emerald-500/30 rounded-full" />
                <span className="text-slate-600 text-xs font-mono tracking-wider uppercase">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
    </section>
  )
}