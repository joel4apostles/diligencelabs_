'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Coins, 
  Cpu, 
  GitBranch, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Calendar
} from 'lucide-react'
import { CalendlyModal } from '@/components/ui/calendly-modal'

const SERVICES = [
  {
    title: "Tokenomics Advisory",
    description: "Strategic guidance on economic models and token distribution mechanisms. Data-driven recommendations, not speculation.",
    icon: Coins,
    features: [
      "Economic Model Assessment",
      "Distribution Strategy Guidance", 
      "Incentive Mechanism Design",
      "Supply/Demand Analysis"
    ],
    meetingType: "token-launch",
    gradient: "from-emerald-500/20 via-emerald-400/10 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  {
    title: "Technical Architecture",
    description: "Expert advice on smart contract design, security considerations, and scalability planning.",
    icon: Cpu,
    features: [
      "Architecture Design Review",
      "Security Best Practices",
      "Performance Optimization", 
      "Multi-chain Strategy"
    ],
    meetingType: "technical-strategy",
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  {
    title: "Integration Strategy", 
    description: "Advisory on bridging traditional systems with blockchain technology. Practical roadmaps for complex integrations.",
    icon: GitBranch,
    features: [
      "Integration Strategy Planning",
      "Legacy System Assessment",
      "Risk Mitigation Advisory", 
      "Implementation Roadmap"
    ],
    meetingType: "web2-web3",
    gradient: "from-purple-500/20 via-purple-400/10 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]"
  },
  {
    title: "Go-to-Market",
    description: "Strategic advice on fundraising, partnerships, and market positioning. Leveraging our network for introductions.",
    icon: Rocket,
    features: [
      "Pitch Strategy & Messaging",
      "Network Introductions",
      "Partnership Strategy",
      "Market Entry Planning"
    ],
    meetingType: "vc-launchpad", 
    gradient: "from-orange-500/20 via-orange-400/10 to-transparent",
    borderGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  }
] as const

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string>('')
  const [modalTitle, setModalTitle] = useState<string>('')

  const handleBookConsultation = (service: any) => {
    setSelectedService(service.meetingType)
    setModalTitle(`${service.title} Consultation`)
    setIsModalOpen(true)
  }

  return (
    <>
      <section 
        ref={containerRef}
        className="relative min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated Background Grid */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        </motion.div>

        {/* Floating Geometric Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-emerald-500/20 rounded-lg rotate-12 pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-emerald-500/10 rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 1.11, 0.81, 0.99] }}
            viewport={{ once: true }}
            className="text-center mb-16 sm:mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-400 font-mono text-sm font-medium">STRATEGIC_ADVISORY.EXE</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight" 
                style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
              EXPERT <span className="text-emerald-500">SERVICES</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
              Advanced consultation on architecture, tokenomics, and strategic decisions that define successful blockchain projects.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: [0.21, 1.11, 0.81, 0.99]
                  }}
                  viewport={{ once: true }}
                  className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-emerald-500/50 hover:scale-105 cursor-pointer overflow-hidden ${service.borderGlow} ${
                    index === 0 ? 'md:col-span-1 lg:col-span-2' : ''
                  } ${
                    index === 1 ? 'lg:row-span-2' : ''
                  }`}
                  whileHover={{ y: -8 }}
                  onClick={() => handleBookConsultation(service)}
                >
                  {/* Gradient Background Overlay */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                    initial={false}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title Row */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="p-2 rounded-lg bg-white/5 group-hover:bg-emerald-500/20 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-emerald-50 transition-colors"
                        style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 group/feature"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="flex-shrink-0"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-500 group-hover/feature:text-emerald-400 transition-colors" />
                          </motion.div>
                          <span className="text-gray-300 text-sm group-hover/feature:text-white transition-colors">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-6"
                    >
                      <div className="w-full bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 hover:border-emerald-500 rounded-xl px-4 py-3 text-center transition-all duration-300 group/button">
                        <div className="flex items-center justify-center space-x-2">
                          <Calendar className="w-4 h-4 text-emerald-400 group-hover/button:text-emerald-300" />
                          <span className="text-emerald-400 group-hover/button:text-emerald-300 font-semibold text-sm">
                            Schedule Consultation
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16 sm:mt-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-3 bg-emerald-500 hover:bg-emerald-400 px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] cursor-pointer"
              onClick={() => {
                setSelectedService('general')
                setModalTitle('General Consultation')
                setIsModalOpen(true)
              }}
            >
              <Calendar className="w-5 h-5" />
              <span>Start Your Strategic Journey</span>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
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