'use client'

import { useState, useCallback } from 'react'
import Image, { ImageProps } from 'next/image'
import { motion } from 'framer-motion'

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string
  showLoader?: boolean
  errorComponent?: React.ReactNode
}

export function OptimizedImage({
  fallbackSrc = '/placeholder.svg',
  showLoader = true,
  errorComponent,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [src, setSrc] = useState(props.src)

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    setHasError(false)
  }, [])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
    setSrc(fallbackSrc)
  }, [fallbackSrc])

  return (
    <div className={`relative ${className}`}>
      {/* Loading State */}
      {showLoader && isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error State */}
      {hasError && errorComponent && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          {errorComponent}
        </div>
      )}

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className={isLoading ? 'invisible' : 'visible'}
      >
        <Image
          {...props}
          src={src}
          alt={props.alt || 'Optimized image'}
          onLoad={handleLoad}
          onError={handleError}
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        />
      </motion.div>
    </div>
  )
}

// Preload utility for critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
}