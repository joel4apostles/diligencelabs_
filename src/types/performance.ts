export interface WebVital {
  name: 'LCP' | 'FID' | 'CLS' | 'TTFB' | 'FCP' | 'Connection'
  value: number | string
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp?: number
}

export interface PerformanceMetrics {
  lcp?: number
  fid?: number
  cls?: number
  ttfb?: number
  fcp?: number
  connection?: string
}

export interface ErrorInfo {
  message: string
  stack?: string
  componentStack?: string
  timestamp: number
  userAgent?: string
  url?: string
}

export interface LoadingState {
  isLoading: boolean
  error?: Error | null
  retryCount?: number
}

export type NotificationLevel = 'info' | 'warning' | 'error' | 'success'

export interface Notification {
  id: string
  message: string
  level: NotificationLevel
  timestamp: number
  autoClose?: boolean
}