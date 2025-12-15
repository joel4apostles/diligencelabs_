'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-page flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        {/* Animated Logo/Brand */}
        <motion.div
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-text-primary">
            DILIGENCE <span className="text-text-secondary">LABS</span>
          </h1>
          <p className="text-text-muted mt-2">Loading platform...</p>
        </motion.div>

        {/* Loading Animation */}
        <div className="flex space-x-1 justify-center mb-4">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-8 bg-text-secondary rounded-full"
              animate={{
                scaleY: [1, 2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="w-48 h-1 bg-text-muted/20 rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-text-secondary to-text-primary"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  )
}