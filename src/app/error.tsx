'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-bg-page flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-24 h-24 mx-auto mb-6 bg-text-secondary/20 rounded-full flex items-center justify-center"
        >
          <svg
            className="w-12 h-12 text-text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Something went wrong
        </h2>
        
        <p className="text-text-secondary mb-6 leading-relaxed">
          We apologize for the inconvenience. Our team has been notified and is working on a fix.
        </p>

        <div className="space-y-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="w-full bg-text-secondary hover:bg-text-primary text-bg-page font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            Try Again
          </motion.button>
          
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="block w-full border border-text-secondary text-text-secondary hover:bg-text-secondary hover:text-bg-page font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
          >
            Go Home
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}