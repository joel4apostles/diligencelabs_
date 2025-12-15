export interface Service {
  title: string
  description: string
  icon: React.ReactNode
  features: readonly string[]
  meetingType: 'token-launch' | 'technical-strategy' | 'web2-web3' | 'vc-launchpad'
}

export interface ProcessStep {
  readonly number: string
  readonly title: string
  readonly description: string
  readonly details: readonly string[]
  readonly duration: string
}

export interface ConsultationType {
  readonly title: string
  readonly duration: string
  readonly description: string
  readonly features: readonly string[]
  readonly price: string
  readonly popular: boolean
}

export interface SocialLink {
  readonly name: string
  readonly href: string
  readonly icon: React.ReactNode
}

export interface QuickLink {
  readonly name: string
  readonly href: string
}

export interface MotionProps {
  readonly initial?: Record<string, unknown>
  readonly animate?: Record<string, unknown>
  readonly transition?: Record<string, unknown>
  readonly viewport?: { once?: boolean }
  readonly whileInView?: Record<string, unknown>
  readonly whileHover?: Record<string, unknown>
  readonly whileTap?: Record<string, unknown>
}

export interface BaseComponentProps {
  readonly className?: string
  readonly children?: React.ReactNode
}

export interface NavigationItem {
  readonly name: string
  readonly href: string
}

export interface ConsultationRequest {
  name: string
  email: string
  company?: string
  message: string
  services?: readonly string[]
}

export interface TeamMember {
  readonly id: string
  readonly name: string
  readonly role: string
  readonly bio: string
  readonly image?: string
  readonly linkedin?: string
  readonly twitter?: string
}