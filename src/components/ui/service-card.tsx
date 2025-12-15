'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'

interface ServiceCardProps extends Omit<Service, 'meetingType'> {
  readonly onBookConsultation: () => void
  readonly index: number
}

export function ServiceCard({ title, description, features, icon, onBookConsultation, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="relative h-full professional-card p-8 focus-ring">
        <div className="absolute inset-0 bg-gradient-to-br from-text-primary/[0.03] via-text-secondary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-text-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />
        <div className="relative z-10 flex flex-col h-full">
          {icon && (
            <div className="mb-6">
              {typeof icon === 'string' ? (
                <div className="text-4xl">{icon}</div>
              ) : (
                <div className="text-text-secondary">{icon}</div>
              )}
            </div>
          )}
          <h3 className="heading-card mb-4 group-hover:text-accent-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="body-refined mb-6 leading-relaxed flex-grow">
            {description}
          </p>
          <div className="space-y-3 mb-8">
            {features.map((feature, featureIndex) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: (index * 0.1) + (featureIndex * 0.05) + 0.3 
                }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-1.5 h-1.5 bg-accent-primary rounded-full flex-shrink-0" />
                <span className="text-sm text-text-muted">{feature}</span>
              </motion.div>
            ))}
          </div>
          <motion.button
            onClick={onBookConsultation}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary-outline py-4 px-6 rounded-lg font-semibold mt-auto magnetic-element"
          >
            <span className="relative z-10">Book Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-text-secondary/10 via-text-primary/10 to-text-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-text-secondary/5 via-transparent to-text-muted/5" />
        </div>
      </div>
    </motion.div>
  )
}