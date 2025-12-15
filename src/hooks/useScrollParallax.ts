import { useRef, useEffect, useState } from 'react'
import { MotionValue, motionValue } from 'framer-motion'

interface ParallaxConfig {
  yRange?: [number, number]
  opacityRange?: [number, number, number, number]
  scaleRange?: [number, number]
  offset?: [string, string]
}

interface ParallaxReturn {
  ref: React.RefObject<HTMLDivElement | null>
  scrollYProgress: MotionValue<number>
  y: MotionValue<number>
  opacity?: MotionValue<number>
  scale?: MotionValue<number>
}

export function useScrollParallax(config: ParallaxConfig = {}): ParallaxReturn {
  const {
    yRange = [0, -100],
    opacityRange,
    scaleRange
  } = config

  const ref = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  
  // Create static motion values that work for both SSR and client
  const scrollYProgress = motionValue(0)
  const y = motionValue(yRange[0])
  const opacity = opacityRange ? motionValue(opacityRange[0]) : undefined
  const scale = scaleRange ? motionValue(scaleRange[0]) : undefined

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  // Set up scroll-based animations only after mount
  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return

    let animationId: number
    
    const updateValues = () => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height
      
      // Simple scroll progress calculation
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + elementHeight)
      ))
      
      scrollYProgress.set(progress)
      
      // Update transform values
      const yValue = yRange[0] + (yRange[1] - yRange[0]) * progress
      y.set(yValue)
      
      if (opacity && opacityRange) {
        const opacityValue = opacityRange[0] + 
          (opacityRange[1] - opacityRange[0]) * Math.min(progress * 3.33, 1) +
          (opacityRange[2] - opacityRange[1]) * Math.max(0, Math.min((progress - 0.3) * 2.5, 1)) +
          (opacityRange[3] - opacityRange[2]) * Math.max(0, (progress - 0.7) * 3.33)
        opacity.set(Math.max(0, Math.min(1, opacityValue)))
      }
      
      if (scale && scaleRange) {
        const scaleValue = scaleRange[0] + (scaleRange[1] - scaleRange[0]) * progress
        scale.set(scaleValue)
      }
    }

    const handleScroll = () => {
      cancelAnimationFrame(animationId)
      animationId = requestAnimationFrame(updateValues)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateValues, { passive: true })
    
    // Initial calculation
    updateValues()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateValues)
      cancelAnimationFrame(animationId)
    }
  }, [isMounted, yRange, opacityRange, scaleRange, scrollYProgress, y, opacity, scale])

  return {
    ref,
    scrollYProgress,
    y,
    opacity,
    scale
  }
}