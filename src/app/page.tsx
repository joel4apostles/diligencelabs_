'use client'

import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { HeroWithNavRefactored } from '@/components/sections/hero-with-nav-refactored'
import { EcosystemTicker } from '@/components/sections/ecosystem-ticker'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesGrid } from '@/components/sections/services-grid'
import { ProcessTimeline } from '@/components/sections/process-timeline-refactored'
import { TriageBooking } from '@/components/sections/triage-booking'
import { FooterSection } from '@/components/sections/footer-section'
import { ScrollIndicator } from '@/components/ui/scroll-indicator'
import { EnhancedBackground } from '@/components/ui/enhanced-background'

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <div>
        <EnhancedBackground />
        <ScrollIndicator />
        
        {/* Subtle texture overlays for professional appearance */}
        <div className="grain-overlay" />
        <div className="vignette-overlay" />
        
        <div className="relative z-10 text-text-primary">
          <HeroWithNavRefactored />
          
          <EcosystemTicker />
          
          <section id="services">
            <ServicesGrid />
          </section>
          
          <section id="about">
            <AboutSection />
          </section>
          
          <section id="how-it-works">
            <ProcessTimeline />
          </section>
          
          <section id="booking">
            <TriageBooking />
          </section>
          
          <section id="footer">
            <FooterSection />
          </section>
        </div>
      </div>
    </SmoothScrollProvider>
  )
}
