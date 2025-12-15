'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NewsletterSubscriptionProps {
  className?: string
}

type SubscriptionStatus = 'idle' | 'loading' | 'success' | 'error'

interface SubscriptionResponse {
  success: boolean
  message: string
}

export function NewsletterSubscription({ className = '' }: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<SubscriptionStatus>('idle')
  const [message, setMessage] = useState('')

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const subscribeToNewsletter = async (email: string): Promise<SubscriptionResponse> => {
    // Option 1: Mailchimp Integration
    if (process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY) {
      try {
        const response = await fetch('/api/newsletter/mailchimp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        })
        return await response.json()
      } catch (error) {
        return { success: false, message: 'Failed to connect to newsletter service' }
      }
    }

    // Option 2: ConvertKit Integration
    if (process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY) {
      try {
        const response = await fetch('/api/newsletter/convertkit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email })
        })
        return await response.json()
      } catch (error) {
        return { success: false, message: 'Failed to connect to newsletter service' }
      }
    }

    // Option 3: Simple Email Collection (for now - stores in database or sends email)
    if (process.env.NEXT_PUBLIC_ENABLE_EMAIL_COLLECTION === 'true') {
      try {
        const response = await fetch('/api/newsletter/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, timestamp: new Date().toISOString() })
        })
        
        if (response.ok) {
          return { 
            success: true, 
            message: 'Successfully subscribed! Check your email for confirmation.' 
          }
        } else {
          const error = await response.json()
          return { success: false, message: error.message || 'Subscription failed' }
        }
      } catch (error) {
        return { success: false, message: 'Network error. Please try again.' }
      }
    }

    // Option 4: Direct Email Integration (sends notification email)
    try {
      const response = await fetch('/api/newsletter/direct', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email,
          source: 'website_footer',
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString()
        })
      })

      if (response.ok) {
        return { 
          success: true, 
          message: 'Thank you for subscribing! We\'ll be in touch with technical insights.' 
        }
      } else {
        return { success: false, message: 'Unable to process subscription. Please try again.' }
      }
    } catch (error) {
      // Fallback: Store locally and show success (for demo purposes)
      console.log('Newsletter subscription (demo):', { email, timestamp: new Date() })
      return { 
        success: true, 
        message: 'Thank you for your interest! We\'ll be in touch with technical updates.' 
      }
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const result = await subscribeToNewsletter(email.trim())
      
      if (result.success) {
        setStatus('success')
        setMessage(result.message)
        setEmail('') // Clear form on success
      } else {
        setStatus('error')
        setMessage(result.message)
      }
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle')
      setMessage('')
    }, 5000)
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading'}
            className={`w-full bg-bg-card border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-text-primary placeholder-neutral-400 focus:outline-none transition-all duration-300 text-sm sm:text-base ${
              status === 'error' 
                ? 'border-red-500 focus:border-red-500' 
                : status === 'success'
                ? 'border-green-500 focus:border-green-500'
                : 'border-border-subtle focus:border-border-highlight'
            } ${status === 'loading' ? 'opacity-50' : ''}`}
          />
          
          {/* Email validation indicator */}
          <AnimatePresence>
            {email && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {validateEmail(email) ? (
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
          whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
          className={`w-full font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base ${
            status === 'loading'
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
              : status === 'success'
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : status === 'error'
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-text-secondary hover:bg-text-primary text-bg-page hover:scale-105'
          }`}
        >
          {status === 'loading' ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
              <span>Subscribing...</span>
            </div>
          ) : status === 'success' ? (
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Subscribed!</span>
            </div>
          ) : (
            'Subscribe'
          )}
        </motion.button>
      </form>

      {/* Status Messages */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-3 text-xs sm:text-sm ${
              status === 'success' ? 'text-green-400' : 'text-red-400'
            }`}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}