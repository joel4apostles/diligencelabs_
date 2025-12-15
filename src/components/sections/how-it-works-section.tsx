'use client'

import { motion } from 'framer-motion'
import { useScrollParallax } from '@/hooks'
import { ProcessStep } from '@/types'

const PROCESS_STEPS: readonly ProcessStep[] = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Strategic consultation to understand your project goals, challenges, and current state.",
      details: [
        "Project scope assessment",
        "Strategic goal alignment",
        "Challenge identification",
        "Success metrics definition"
      ],
      duration: "1 session"
    },
    {
      number: "02", 
      title: "Expert Analysis",
      description: "Deep dive analysis of your technical architecture, tokenomics, and strategic positioning.",
      details: [
        "Architecture pattern evaluation",
        "Economic model analysis",
        "Risk assessment",
        "Competitive positioning review"
      ],
      duration: "1-2 weeks"
    },
    {
      number: "03",
      title: "Strategic Recommendations",
      description: "Comprehensive advisory report with actionable recommendations and strategic roadmap.",
      details: [
        "Detailed recommendation report",
        "Strategic implementation roadmap",
        "Risk mitigation strategies",
        "Priority action items"
      ],
      duration: "1 week"
    },
    {
      number: "04",
      title: "Ongoing Advisory",
      description: "Continued strategic guidance and consultation as your project evolves and grows.",
      details: [
        "Regular advisory sessions",
        "Strategic decision support",
        "Market insight sharing",
        "Network introductions"
      ],
      duration: "As needed"
    }
  ] as const

export function HowItWorksSection() {
  const { ref: containerRef, y: y1 } = useScrollParallax({ yRange: [100, -100] })
  const { y: y2 } = useScrollParallax({ yRange: [50, -50] })

  return (
    <section 
      ref={containerRef}
      className="relative bg-bg-page py-12 md:py-16 px-4 overflow-hidden"
    >
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-1/4 right-20 w-64 h-64 border border-text-secondary rotate-45" />
        <div className="absolute bottom-1/4 left-20 w-32 h-32 bg-text-muted rounded-full" />
      </motion.div>

      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-border-subtle rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-text-primary mb-6 heading-refined">
            ADVISORY <span className="text-text-secondary">PROCESS</span>
          </h2>
          <p className="text-lg md:text-xl body-refined max-w-3xl mx-auto">
            Strategic consultation, expert analysis, actionable recommendations, and ongoing guidance.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Floating progress indicator */}
          <motion.div 
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                className="w-2 h-8 bg-border-subtle rounded-full overflow-hidden"
                whileHover={{ scale: 1.2 }}
              >
                <motion.div
                  className="w-full bg-text-secondary rounded-full"
                  initial={{ height: "0%" }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 0.8, delay: idx * 0.2 + 1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Animated Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-b from-text-secondary via-text-muted to-text-secondary relative">
              {/* Animated pulse line */}
              <motion.div 
                className="absolute inset-0 w-full bg-gradient-to-b from-transparent via-text-primary to-transparent"
                animate={{ 
                  y: ["-100%", "100%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 
                  ? 'md:ml-0 md:mr-auto md:pr-16 md:text-right' 
                  : 'md:ml-auto md:mr-0 md:pl-16 md:text-left'
              } md:w-1/2 ml-16 sm:ml-20`}
            >
              {/* Enhanced Step Number Circle */}
              <motion.div 
                className={`absolute w-12 h-12 sm:w-16 sm:h-16 bg-bg-page border-2 border-text-secondary rounded-full flex items-center justify-center font-mono font-bold text-text-primary text-sm sm:text-base z-20 cursor-pointer group/circle ${
                  index % 2 === 0 
                    ? 'md:right-0 md:transform md:translate-x-1/2 -left-12 sm:-left-16' 
                    : 'md:left-0 md:transform md:-translate-x-1/2 -left-12 sm:-left-16'
                }`}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "rgba(255, 255, 255, 1)",
                  boxShadow: "0 0 20px rgba(163, 163, 163, 0.5)"
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(163, 163, 163, 0)",
                    "0 0 0 8px rgba(163, 163, 163, 0.1)",
                    "0 0 0 0 rgba(163, 163, 163, 0)"
                  ]
                }}
                transition={{
                  boxShadow: { 
                    duration: 2, 
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  },
                  scale: { duration: 0.2 },
                  borderColor: { duration: 0.2 }
                }}
              >
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover/circle:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary animate-spin opacity-20"></div>
                </div>
                
                <span className="relative z-10">{step.number}</span>
              </motion.div>

              {/* Enhanced Step Content */}
              <motion.div 
                className="relative z-10 bg-bg-card/50 border border-border-subtle rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm group/card overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  y: -4,
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Dynamic background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-text-secondary/5 via-transparent to-text-muted/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite] opacity-30"></div>
                </div>
                
                {/* Content wrapper */}
                <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-bold text-text-primary heading-refined">
                    {step.title}
                  </h3>
                  <span className="text-xs sm:text-sm text-text-muted font-medium">
                    {step.duration}
                  </span>
                </div>
                
                <p className="text-sm sm:text-base body-refined mb-4 sm:mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-2 sm:space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (detailIndex * 0.1) }}
                      viewport={{ once: true }}
                      whileHover={{ x: index % 2 === 0 ? -4 : 4 }}
                      className="flex items-center space-x-3 group/detail hover:bg-text-secondary/5 rounded-md px-2 py-1 transition-colors duration-200 cursor-pointer"
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-text-muted rounded-full flex-shrink-0" 
                        animate={{
                          scale: [1, 1.3, 1],
                          backgroundColor: [
                            "rgba(82, 82, 82, 1)",
                            "rgba(163, 163, 163, 1)", 
                            "rgba(82, 82, 82, 1)"
                          ]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity,
                          delay: (index * 0.3) + (detailIndex * 0.2),
                          ease: "easeInOut"
                        }}
                      />
                      <span className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed group-hover/detail:text-text-secondary transition-colors duration-200">{detail}</span>
                    </motion.div>
                  ))}
                </div>
                </div>
              </motion.div>

              {/* Connection Arrow (for larger screens) */}
              <div className={`hidden lg:block absolute top-6 sm:top-8 ${
                index % 2 === 0 ? 'right-6 sm:right-8' : 'left-6 sm:left-8'
              }`}>
                <div className={`w-8 h-px bg-text-secondary ${
                  index % 2 === 0 ? 'transform rotate-45' : 'transform -rotate-45'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}