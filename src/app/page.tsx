'use client'

import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { HeroWithNavRefactored } from '@/components/sections/hero-with-nav-refactored'
import { AboutSection } from '@/components/sections/about-section'
import { ServicesSection } from '@/components/sections/services-section'
import { HowItWorksSection } from '@/components/sections/how-it-works-section'
import { BookingSection } from '@/components/sections/booking-section'
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
          
          <section id="services">
            <ServicesSection />
          </section>
          
          <section id="about">
            <AboutSection />
          </section>
          
          <section id="how-it-works">
            <HowItWorksSection />
          </section>
          
          <section id="booking">
            <BookingSection />
          </section>
          
          <section id="footer">
            <FooterSection />
          </section>
        </div>
      </div>
    </SmoothScrollProvider>
  )
}
