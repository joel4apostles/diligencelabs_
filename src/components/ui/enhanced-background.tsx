'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface FloatingOrb {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  direction: number
}

export function EnhancedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [orbs, setOrbs] = useState<FloatingOrb[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.3, 0.1])

  useEffect(() => {
    // Initialize floating orbs with pre-calculated values to avoid Math.random during render
    const orbConfigs = [
      { x: 15, y: 25, size: 120, color: 'rgba(34, 197, 94, 0.1)', speed: 0.02, direction: 45 },
      { x: 85, y: 75, size: 80, color: 'rgba(0, 255, 255, 0.08)', speed: 0.015, direction: 135 },
      { x: 60, y: 10, size: 100, color: 'rgba(168, 85, 247, 0.06)', speed: 0.025, direction: 225 },
      { x: 25, y: 85, size: 90, color: 'rgba(59, 130, 246, 0.07)', speed: 0.018, direction: 315 },
      { x: 75, y: 40, size: 110, color: 'rgba(34, 197, 94, 0.05)', speed: 0.012, direction: 90 },
      { x: 10, y: 60, size: 70, color: 'rgba(251, 191, 36, 0.04)', speed: 0.022, direction: 180 },
      { x: 95, y: 20, size: 85, color: 'rgba(236, 72, 153, 0.06)', speed: 0.016, direction: 270 },
      { x: 45, y: 90, size: 95, color: 'rgba(99, 102, 241, 0.05)', speed: 0.019, direction: 0 }
    ]
    
    const initialOrbs: FloatingOrb[] = orbConfigs.map((config, i) => ({
      id: i,
      x: config.x,
      y: config.y,
      size: config.size,
      color: config.color,
      speed: config.speed,
      direction: config.direction
    }))
    
    const timer = setTimeout(() => setOrbs(initialOrbs), 0)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate orbs
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbs(prevOrbs => 
        prevOrbs.map(orb => ({
          ...orb,
          x: (orb.x + Math.cos(orb.direction) * orb.speed + 100) % 100,
          y: (orb.y + Math.sin(orb.direction) * orb.speed + 100) % 100,
          direction: orb.direction + (Math.random() - 0.5) * 0.1
        }))
      )
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ y: backgroundY, opacity }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
              <stop offset="50%" stopColor="rgba(0, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            transform: `translate(-50%, -50%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: (orb.id * 0.3) + 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Interactive Mouse Trail */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          background: `radial-gradient(circle, rgba(34, 197, 94, 0.05), transparent 70%)`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)'
        }}
        animate={{
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 via-transparent to-blue-500/5" />
      
      {/* Dynamic Light Beams */}
      <motion.div
        className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-green-400/20 via-transparent to-cyan-400/20"
        animate={{
          opacity: [0.2, 0.8, 0.2],
          scaleY: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-purple-400/20 via-transparent to-blue-400/20"
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scaleY: [0.9, 1.1, 0.9]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  )
}