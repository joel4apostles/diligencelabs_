'use client'

import { motion } from 'framer-motion'
import { 
  Coins, 
  Cpu, 
  GitBranch, 
  Rocket
} from 'lucide-react'

const SERVICES = [
  {
    id: 'tokenomics',
    title: 'Tokenomics Advisory',
    description: 'Strategic guidance on economic models and distribution mechanisms.',
    icon: Coins,
    colSpan: 'md:col-span-2',
    priority: true
  },
  {
    id: 'integration',
    title: 'Integration Strategy',
    description: 'Advisory on bridging traditional systems with blockchain.',
    icon: GitBranch,
    colSpan: 'md:col-span-1',
    priority: false
  },
  {
    id: 'architecture',
    title: 'Technical Architecture',
    description: 'Expert consultation on smart contract design and security.',
    icon: Cpu,
    colSpan: 'md:col-span-2',
    priority: true
  },
  {
    id: 'market',
    title: 'Go-to-Market',
    description: 'Strategic guidance on fundraising and partnerships.',
    icon: Rocket,
    colSpan: 'md:col-span-1',
    priority: false
  }
] as const

const handleServiceClick = (serviceId: string) => {
  const element = document.querySelector('#booking')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function ServicesGridPremium() {
  return (
    <section className="relative bg-gray-50 dark:bg-slate-950 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight"
            style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
          >
            EXPERT <span className="text-emerald-500">SERVICES</span>
          </h2>
        </motion.div>

        {/* Premium Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto auto-rows-fr">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.21, 1.11, 0.81, 0.99]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                onClick={() => handleServiceClick(service.id)}
                className={`group relative bg-white/80 dark:bg-slate-900/50 border border-gray-200 dark:border-white/10 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-500 overflow-hidden ${service.colSpan} ${
                  service.priority ? 'min-h-[280px] sm:min-h-[300px]' : 'min-h-[240px] sm:min-h-[260px]'
                } flex flex-col justify-between`}
              >
                {/* Priority Indicator */}
                {service.priority && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl w-fit">
                      <Icon className="w-8 h-8 text-emerald-400" />
                    </div>
                  </motion.div>
                  
                  {/* Title */}
                  <h3 
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-50 transition-colors"
                    style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors flex-1">
                    {service.description}
                  </p>

                  {/* Subtle Action Hint */}
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-emerald-500 text-xs sm:text-sm font-mono">
                      Click to schedule →
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Premium Shadow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm -z-10" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}