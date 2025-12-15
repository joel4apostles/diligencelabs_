import { useEffect, useState } from 'react'
import { useResponsiveDetection } from '@/hooks'

interface ParticleConfig {
  readonly count: {
    readonly mobile: number
    readonly desktop: number
  }
  readonly size: {
    readonly mobile: string
    readonly desktop: string
  }
  readonly opacity: number
  readonly animationRange: {
    readonly delay: number
    readonly duration: [number, number]
  }
}

interface Particle {
  readonly id: number
  readonly left: number
  readonly top: number
  readonly animationDelay: number
  readonly animationDuration: number
}

const PARTICLE_CONFIG: ParticleConfig = {
  count: {
    mobile: 40,
    desktop: 80
  },
  size: {
    mobile: '1.5px',
    desktop: '2px'
  },
  opacity: 0.4,
  animationRange: {
    delay: 10,
    duration: [15, 35]
  }
} as const

const NETWORK_GRADIENTS = [
  'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.08) 49%, rgba(255,255,255,0.08) 51%, transparent 52%)',
  'linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.06) 49%, rgba(255,255,255,0.06) 51%, transparent 52%)',
  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.04) 1px, transparent 1px)',
  'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.04) 1px, transparent 1px)'
] as const

const NETWORK_SIZES = ['120px 120px', '100px 100px', '80px 80px', '60px 60px'] as const

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    animationDelay: Math.random() * PARTICLE_CONFIG.animationRange.delay,
    animationDuration: Math.random() * (PARTICLE_CONFIG.animationRange.duration[1] - PARTICLE_CONFIG.animationRange.duration[0]) + PARTICLE_CONFIG.animationRange.duration[0]
  }))
}

export function ParticleBackground() {
  const { isMobile } = useResponsiveDetection()
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true)
      const particleCount = isMobile ? PARTICLE_CONFIG.count.mobile : PARTICLE_CONFIG.count.desktop
      setParticles(generateParticles(particleCount))
    }, 0)
    return () => clearTimeout(timer)
  }, [isMobile])

  if (!isMounted) {
    return (
      <div className="fixed inset-0 w-full h-full bg-bg-page overflow-hidden z-[-1]">
        <div
          className="block"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: NETWORK_GRADIENTS.join(','),
            backgroundSize: NETWORK_SIZES.join(','),
            opacity: 0.25
          }}
        />
      </div>
    )
  }

  const size = isMobile ? PARTICLE_CONFIG.size.mobile : PARTICLE_CONFIG.size.desktop

  return (
    <div className="fixed inset-0 w-full h-full bg-bg-page overflow-hidden z-[-1]">
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size,
              height: size,
              backgroundColor: `rgba(255, 255, 255, ${PARTICLE_CONFIG.opacity})`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
              animationDuration: `${particle.animationDuration}s`
            }}
          />
        ))}
      </div>
      
      <div
        className={isMobile ? "hidden sm:block" : "block"}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: NETWORK_GRADIENTS.join(','),
          backgroundSize: NETWORK_SIZES.join(','),
          opacity: 0.25
        }}
      />
    </div>
  )
}