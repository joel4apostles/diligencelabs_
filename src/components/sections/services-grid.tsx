'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { 
  Coins, 
  Cpu, 
  GitBranch, 
  Rocket,
  ArrowUpRight,
  Zap
} from 'lucide-react'

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
    colSpan: "md:col-span-2",
    priority: true
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
    colSpan: "md:col-span-2",
    priority: true
  },
  {
    title: "Integration Strategy",
    description: "Advisory on bridging traditional systems with blockchain technology.",
    icon: GitBranch,
    features: [
      "Integration Planning",
      "Legacy Assessment",
      "Risk Mitigation", 
      "Implementation Roadmap"
    ],
    colSpan: "md:col-span-1",
    priority: false
  },
  {
    title: "Go-to-Market",
    description: "Strategic advice on fundraising, partnerships, and market positioning.",
    icon: Rocket,
    features: [
      "Pitch Strategy",
      "Network Introductions",
      "Partnership Strategy",
      "Market Entry Planning"
    ],
    colSpan: "md:col-span-1",
    priority: false
  }
] as const

export function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 border border-emerald-500/10 rounded-lg rotate-12 pointer-events-none"
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
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-mono text-sm font-medium">ADVISORY_PROTOCOLS.SYS</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight font-mono">
            EXPERT <span className="text-emerald-500">SERVICES</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Strategic consultation protocols for architecture, tokenomics, and technical decisions.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.21, 1.11, 0.81, 0.99]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`group relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/10 hover:border-emerald-500/50 cursor-pointer overflow-hidden ${service.colSpan} ${
                  service.priority ? 'min-h-[400px] sm:min-h-[450px]' : 'min-h-[350px] sm:min-h-[400px]'
                }`}
              >
                {/* Priority Indicator */}
                {service.priority && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="absolute top-4 left-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                  />
                )}

                {/* Top Right Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-6 right-6 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"
                >
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl w-fit mb-4"
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                    </motion.div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight group-hover:text-emerald-50 transition-colors font-mono">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex-1 flex flex-col justify-end">
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + featureIndex * 0.05 + 0.3 
                          }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 group/feature"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="w-1.5 h-1.5 bg-emerald-500/60 rounded-full flex-shrink-0"
                          />
                          <span className="text-gray-300 text-sm group-hover/feature:text-white transition-colors font-mono">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Terminal Command Hint */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      className="mt-6 pt-4 border-t border-white/5"
                    >
                      <div className="font-mono text-xs text-emerald-500/60 group-hover:text-emerald-400 transition-colors">
                        $ ./init_consultation --type={service.title.toLowerCase().replace(/\s+/g, '_')}
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Hover Glow Effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-400/20 to-emerald-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                
                {/* Priority Services Extra Styling */}
                {service.priority && (
                  <>
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-emerald-500/3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-400 font-mono text-sm mb-4">
              Ready to initialize consultation protocol?
            </p>
            <div className="font-mono text-emerald-400 text-lg">
              $ ./book_consultation --priority=immediate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}