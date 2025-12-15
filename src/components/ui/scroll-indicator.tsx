'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
      {/* Main scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary origin-left z-50 opacity-80"
        style={{ scaleX }}
      />
      
      {/* Subtle glow effect */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-text-secondary/30 via-text-primary/50 to-text-secondary/30 origin-left z-49 blur-sm"
        style={{ scaleX }}
      />
    </>
  )
}