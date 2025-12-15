'use client'

import { motion } from 'framer-motion'

interface LoadingStateProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dots' | 'pulse' | 'skeleton'
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8', 
  lg: 'w-12 h-12'
}

const LoadingDots = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const dotSize = size === 'sm' ? 'w-1 h-1' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3'
  
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${dotSize} bg-text-secondary rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

const LoadingPulse = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => (
  <motion.div
    className={`${sizeClasses[size]} bg-text-secondary/20 rounded-full`}
    animate={{
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5]
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <motion.div
      className="w-full h-full bg-text-secondary rounded-full"
      animate={{
        scale: [0.8, 1, 0.8],
        opacity: [0.8, 0.2, 0.8]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>
)

const LoadingSkeleton = ({ className = "w-full h-4" }: { className?: string }) => (
  <div className={`loading-skeleton rounded ${className}`} />
)

export function LoadingState({ 
  className = "", 
  size = 'md', 
  variant = 'dots' 
}: LoadingStateProps) {
  const baseClasses = `flex items-center justify-center ${className}`

  if (variant === 'skeleton') {
    return <LoadingSkeleton className={className} />
  }

  return (
    <div className={baseClasses}>
      {variant === 'dots' ? (
        <LoadingDots size={size} />
      ) : (
        <LoadingPulse size={size} />
      )}
    </div>
  )
}

// Specialized loading states for common use cases
export const CardLoadingSkeleton = () => (
  <div className="glass-refined rounded-xl p-8 space-y-4">
    <LoadingSkeleton className="w-12 h-12 rounded-lg" />
    <LoadingSkeleton className="w-3/4 h-6" />
    <LoadingSkeleton className="w-full h-4" />
    <LoadingSkeleton className="w-5/6 h-4" />
    <div className="space-y-2 mt-6">
      <LoadingSkeleton className="w-full h-3" />
      <LoadingSkeleton className="w-4/5 h-3" />
      <LoadingSkeleton className="w-3/4 h-3" />
    </div>
    <LoadingSkeleton className="w-full h-12 rounded-lg mt-6" />
  </div>
)

export const ButtonLoadingState = ({ children, isLoading }: { children: React.ReactNode, isLoading: boolean }) => (
  <>
    {isLoading && (
      <span className="mr-2">
        <LoadingState size="sm" variant="dots" />
      </span>
    )}
    <span className={isLoading ? 'opacity-50' : 'opacity-100'}>
      {children}
    </span>
  </>
)