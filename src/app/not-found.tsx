'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-page flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg mx-auto"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <div className="text-8xl md:text-9xl font-mono font-bold text-text-secondary/30 mb-4">
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Page Not Found
          </h1>
          
          <p className="text-text-secondary mb-8 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back to exploring our strategic advisory services.
          </p>

          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/"
                className="inline-block bg-text-secondary hover:bg-text-primary text-bg-page font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Return Home
              </Link>
            </motion.div>
            
            <div className="text-sm text-text-muted">
              <p>Looking for something specific?</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link 
                  href="/#services" 
                  className="hover:text-text-secondary transition-colors"
                >
                  Services
                </Link>
                <Link 
                  href="/#about" 
                  className="hover:text-text-secondary transition-colors"
                >
                  About
                </Link>
                <Link 
                  href="/#booking" 
                  className="hover:text-text-secondary transition-colors"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-text-secondary/20"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-text-muted/10 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  )
}