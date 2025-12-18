'use client'

import { useEffect } from 'react'
import type { WebVital } from '@/types/performance'

declare global {
  interface Navigator {
    connection?: {
      effectiveType: string
    }
  }
}

interface PerformanceEntry {
  startTime: number
  processingStart?: number
  value?: number
  hadRecentInput?: boolean
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  responseStart: number
  requestStart: number
  domContentLoadedEventEnd: number
  fetchStart: number
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const reportWebVitals = (metric: WebVital) => {
      // In production, send to analytics service
      if (process.env.NODE_ENV === 'production') {
        // Example: Analytics.track('web_vital', metric)
      }
    }

    // Monitor largest contentful paint
    const observeLCP = () => {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1] as PerformanceEntry
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.startTime,
          rating: lastEntry.startTime <= 2500 ? 'good' : lastEntry.startTime <= 4000 ? 'needs-improvement' : 'poor'
        })
      })
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    }

    // Monitor first input delay
    const observeFID = () => {
      const observer = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry: PerformanceEntry) => {
          const fidValue = (entry.processingStart || 0) - entry.startTime
          reportWebVitals({
            name: 'FID',
            value: fidValue,
            rating: fidValue <= 100 ? 'good' : 
                   fidValue <= 300 ? 'needs-improvement' : 'poor'
          })
        })
      })
      observer.observe({ entryTypes: ['first-input'] })
    }

    // Monitor cumulative layout shift
    const observeCLS = () => {
      let clsValue = 0
      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const layoutEntry = entry as PerformanceEntry
          if (!layoutEntry.hadRecentInput) {
            clsValue += layoutEntry.value || 0
          }
        }
        reportWebVitals({
          name: 'CLS',
          value: clsValue,
          rating: clsValue <= 0.1 ? 'good' : clsValue <= 0.25 ? 'needs-improvement' : 'poor'
        })
      })
      observer.observe({ entryTypes: ['layout-shift'] })
    }

    // Monitor navigation timing
    const monitorNavigation = () => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        const navTiming = performance.getEntriesByType('navigation')[0] as unknown as PerformanceNavigationTiming
        
        reportWebVitals({
          name: 'TTFB',
          value: navTiming.responseStart - navTiming.requestStart,
          rating: navTiming.responseStart - navTiming.requestStart <= 800 ? 'good' : 'needs-improvement'
        })

        reportWebVitals({
          name: 'FCP',
          value: navTiming.domContentLoadedEventEnd - navTiming.fetchStart,
          rating: navTiming.domContentLoadedEventEnd - navTiming.fetchStart <= 1800 ? 'good' : 'needs-improvement'
        })
      }
    }

    // Monitor connection quality
    const monitorConnection = () => {
      if ('connection' in navigator && navigator.connection) {
        const connection = navigator.connection
        reportWebVitals({
          name: 'Connection',
          value: connection.effectiveType,
          rating: connection.effectiveType === '4g' ? 'good' : 'needs-improvement'
        })
      }
    }

    // Initialize monitoring
    const initMonitoring = () => {
      try {
        observeLCP()
        observeFID()
        observeCLS()
        monitorNavigation()
        monitorConnection()
      } catch (error) {
        console.warn('Performance monitoring initialization failed:', error)
      }
    }

    // Start monitoring after page load
    if (document.readyState === 'complete') {
      initMonitoring()
    } else {
      window.addEventListener('load', initMonitoring)
    }

    return () => {
      window.removeEventListener('load', initMonitoring)
    }
  }, [])

  // This component doesn't render anything
  return null
}