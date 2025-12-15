import { useState, useEffect } from 'react'

interface BreakpointConfig {
  mobile?: number
  tablet?: number
  desktop?: number
}

const DEFAULT_BREAKPOINTS: Required<BreakpointConfig> = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280
}

export function useResponsiveDetection(breakpoints: BreakpointConfig = {}) {
  const config = { ...DEFAULT_BREAKPOINTS, ...breakpoints }
  
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial size
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width < config.mobile
  const isTablet = windowSize.width >= config.mobile && windowSize.width < config.desktop
  const isDesktop = windowSize.width >= config.desktop

  return {
    windowSize,
    isMobile,
    isTablet,
    isDesktop,
    breakpoints: config
  }
}