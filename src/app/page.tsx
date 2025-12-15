'use client'

import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { Navigation } from '@/components/layout/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { BookingSection } from '@/components/sections/booking-section'
import { FooterSection } from '@/components/sections/footer-section'
import { ParticleBackground } from '@/components/ui/ParticleBackground'
import { PageLayout } from '@/components/layout/PageLayout'

const PAGE_SECTIONS = [
  { id: 'hero', component: HeroSection },
  { id: 'services', component: ServicesSection },
  { id: 'about', component: AboutSection },
  { id: 'how-it-works', component: HowItWorksSection },
  { id: 'booking', component: BookingSection },
  { id: 'footer', component: FooterSection }
] as const

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <PageLayout
        sections={PAGE_SECTIONS}
        navigation={Navigation}
        background={ParticleBackground}
      />
    </SmoothScrollProvider>
  )
}
