'use client'

import { motion } from 'framer-motion'
import { useScrollParallax } from '@/hooks'

export function HeroSection() {
  const { ref, y: heroY, opacity: heroOpacity } = useScrollParallax({
    yRange: [0, -300],
    opacityRange: [1, 1, 0, 0],
    offset: ["start start", "end start"]
  })

  return (
    <div 
      ref={ref}
      className="relative min-h-screen bg-bg-page"
    >
      {/* Hero Content */}
      <motion.section 
        style={{ 
          y: heroY,
          opacity: heroOpacity
        }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-56 pb-16 md:pt-64 md:pb-20"
      >
        {/* Optimized container with better max-width and breathing room */}
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
            className="text-center space-y-10 md:space-y-16"
          >
            {/* Main headline with optimal typography scale and spacing */}
            <div className="space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.21, 1.11, 0.81, 0.99] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono font-black text-text-primary leading-[0.9] heading-refined tracking-[-0.02em] relative"
              >
                <motion.span 
                  className="block relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  WE HELP YOU
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-text-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </motion.span>
                <motion.span 
                  className="block mt-3 lg:mt-6 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease: [0.21, 1.11, 0.81, 0.99] }}
                >
                  <span className="relative inline-block professional-text-accent magnetic-element">
                    BUILD
                  </span>
                  <span className="mx-4 text-text-muted/60 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl floating-element">&</span>
                  <span className="relative inline-block professional-text-accent magnetic-element">
                    SHIP
                  </span>
                </motion.span>
                <motion.span 
                  className="block mt-3 lg:mt-6 relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <span className="relative">
                    FREELY
                    <motion.div 
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-text-secondary to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    />
                  </span>
                </motion.span>
              </motion.h1>
            </div>

            {/* Enhanced visual separator with subtle animation */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.4, delay: 1.3, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-text-secondary/40 to-transparent"></div>
                <motion.div
                  animate={{ 
                    opacity: [0.2, 0.8, 0.2],
                    scaleX: [1, 1.5, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute inset-0 w-48 h-[2px] bg-gradient-to-r from-transparent via-text-primary/60 to-transparent"
                />
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-text-secondary rounded-full">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="w-full h-full bg-text-primary rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Supporting tagline with optimal readability */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-text-secondary max-w-4xl mx-auto leading-[1.3] body-refined font-light">
                Strategic advisory and technical guidance
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed body-refined">
                for teams building the next generation of blockchain solutions
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

    </div>
  )
}