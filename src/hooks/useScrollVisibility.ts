import { useState, useEffect } from 'react'
import { motionValue } from 'framer-motion'

interface ScrollVisibilityConfig {
  hideThreshold?: number
  showOnTop?: boolean
}

export function useScrollVisibility(config: ScrollVisibilityConfig = {}) {
  const { hideThreshold = 150, showOnTop = true } = config
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  
  const scrollY = motionValue(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return

    let previousScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollY.set(currentScrollY)
      
      if (currentScrollY < hideThreshold && showOnTop) {
        setIsVisible(true)
      } else if (currentScrollY > previousScrollY && currentScrollY > hideThreshold) {
        setIsVisible(false)
      } else if (currentScrollY < previousScrollY) {
        setIsVisible(true)
      }
      
      previousScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMounted, hideThreshold, showOnTop, scrollY])

  return {
    isVisible,
    scrollY
  }
}