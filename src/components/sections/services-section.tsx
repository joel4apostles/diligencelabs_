'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ServiceCard } from '@/components/ui/service-card'
import { CalendlyModal } from '@/components/ui/calendly-modal'
import { useScrollParallax } from '@/hooks'
import { Service } from '@/types'
import { IconSystem } from '@/components/icons/IconSystem'

const SERVICES: readonly Service[] = [
  {
    title: "Tokenomics Advisory",
    description: "Strategic guidance on economic models and token distribution mechanisms. Data-driven recommendations, not speculation.",
    icon: <IconSystem name="tokenomics" category="service" className="w-10 h-10 text-text-secondary" />,
    features: [
      "Economic Model Assessment", 
      "Distribution Strategy Guidance", 
      "Incentive Mechanism Design",
      "Supply/Demand Analysis"
    ] as const,
    meetingType: "token-launch"
  },
  {
    title: "Technical Architecture Consulting",
    description: "Expert advice on smart contract design, security considerations, and scalability planning.",
    icon: <IconSystem name="infrastructure" category="service" className="w-10 h-10 text-text-secondary" />,
    features: [
      "Architecture Design Review",
      "Security Best Practices", 
      "Performance Optimization Guidance",
      "Multi-chain Strategy Consultation"
    ] as const,
    meetingType: "technical-strategy"
  },
  {
    title: "Integration Strategy",
    description: "Advisory on bridging traditional systems with blockchain technology. Practical roadmaps for complex integrations.",
    icon: <IconSystem name="integration" category="service" className="w-10 h-10 text-text-secondary" />,
    features: [
      "Integration Strategy Planning",
      "Legacy System Assessment", 
      "Risk Mitigation Advisory",
      "Implementation Roadmap Design"
    ] as const,
    meetingType: "web2-web3"
  },
  {
    title: "Go-to-Market Consultation",
    description: "Strategic advice on fundraising, partnerships, and market positioning. Leveraging our network for introductions.",
    icon: <IconSystem name="partnerships" category="service" className="w-10 h-10 text-text-secondary" />,
    features: [
      "Pitch Strategy & Messaging",
      "Network Introductions", 
      "Partnership Strategy",
      "Market Entry Planning"
    ] as const,
    meetingType: "vc-launchpad"
  }
] as const

export function ServicesSection() {
  const { ref, y } = useScrollParallax({ yRange: [50, -50] })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('')
  const [modalTitle, setModalTitle] = useState<string>('')

  const handleBookConsultation = (service: Service) => {
    setSelectedService(service.meetingType)
    setModalTitle(`${service.title} Consultation`)
    setIsModalOpen(true)
  }

  return (
    <>
      <section 
        ref={ref}
        className="relative bg-bg-page px-4"
      >
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-5 pointer-events-none"
        >
          <div className="absolute top-1/4 left-10 w-64 h-64 border border-text-secondary/10 rotate-12" />
          <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-text-muted/5 rounded-full" />
        </motion.div>

        <div className="relative z-10 content-width container-spacing section-padding">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-section mb-8">
              STRATEGIC <span className="accent">ADVISORY</span>
            </h2>
            <p className="body-large text-text-secondary max-w-4xl mx-auto">
              Expert consultation on architecture, tokenomics, and strategic decisions that define successful blockchain projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                onBookConsultation={() => handleBookConsultation(service)}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        meetingType={selectedService}
        title={modalTitle}
      />
    </>
  )
}