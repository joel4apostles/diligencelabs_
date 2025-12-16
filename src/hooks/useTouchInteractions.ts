import { useCallback, useEffect, useState } from 'react'

interface TouchInteractionConfig {
  onTap?: () => void
  onLongPress?: () => void
  longPressDelay?: number
  preventContextMenu?: boolean
}

export function useTouchInteractions({
  onTap,
  onLongPress,
  longPressDelay = 500,
  preventContextMenu = true
}: TouchInteractionConfig) {
  const [isPressed, setIsPressed] = useState(false)
  const [pressTimer, setPressTimer] = useState<NodeJS.Timeout | null>(null)

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (preventContextMenu) {
      e.preventDefault()
    }
    
    setIsPressed(true)
    
    if (onLongPress) {
      const timer = setTimeout(() => {
        onLongPress()
        setIsPressed(false)
      }, longPressDelay)
      setPressTimer(timer)
    }
  }, [onLongPress, longPressDelay, preventContextMenu])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (preventContextMenu) {
      e.preventDefault()
    }
    
    setIsPressed(false)
    
    if (pressTimer) {
      clearTimeout(pressTimer)
      setPressTimer(null)
      
      // If we had a long press timer but it didn't fire, this is a tap
      if (onTap) {
        onTap()
      }
    } else if (onTap && !onLongPress) {
      // Simple tap without long press
      onTap()
    }
  }, [onTap, onLongPress, pressTimer, preventContextMenu])

  const handleTouchCancel = useCallback(() => {
    setIsPressed(false)
    if (pressTimer) {
      clearTimeout(pressTimer)
      setPressTimer(null)
    }
  }, [pressTimer])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (pressTimer) {
        clearTimeout(pressTimer)
      }
    }
  }, [pressTimer])

  return {
    isPressed,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchEnd: handleTouchEnd,
      onTouchCancel: handleTouchCancel,
    }
  }
}

export function useResponsiveBreakpoint() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  
  useEffect(() => {
    const updateBreakpoint = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    
    updateBreakpoint()
    window.addEventListener('resize', updateBreakpoint)
    
    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])
  
  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet }
}