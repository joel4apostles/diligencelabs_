'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'

interface CalendlyModalProps {
  isOpen: boolean
  onClose: () => void
  meetingType?: string
  title?: string
}

export function CalendlyModal({ 
  isOpen, 
  onClose, 
  meetingType, 
  title = "Schedule Your Consultation" 
}: CalendlyModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  // Auto-hide loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    
    return () => clearTimeout(timer)
  }, [isOpen])
  
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Use the single Calendly URL for all consultation types
  const getCalendlyUrl = () => {
    return "https://calendly.com/diligencelabs/consultancy"
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
          className="relative w-full max-w-4xl mx-4 bg-white rounded-xl shadow-2xl overflow-hidden max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-gray-50 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{title}</h2>
              {meetingType && (
                <p className="text-sm text-gray-600 mt-1">
                  {meetingType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Consultation
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-200 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Calendly Widget */}
          <div className="h-[600px] relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600 mx-auto mb-3"></div>
                  <p className="text-gray-600">Loading calendar...</p>
                </div>
              </div>
            )}
            
            {false && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <p className="text-red-600 mb-3">Unable to load calendar</p>
                  <a 
                    href={getCalendlyUrl()} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Open in New Tab
                  </a>
                </div>
              </div>
            )}
            
            <InlineWidget 
              url={getCalendlyUrl()}
              styles={{
                height: '100%',
                width: '100%',
                display: isLoading ? 'none' : 'block'
              }}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}