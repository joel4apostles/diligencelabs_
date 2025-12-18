'use client'

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  MessageCircle, 
  Search, 
  FileText, 
  Users,
  Clock,
  ChevronDown,
  Zap
} from 'lucide-react'

const PROCESS_STEPS = [
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
    duration: "1 session",
    icon: MessageCircle,
    color: "emerald"
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
    duration: "1-2 weeks",
    icon: Search,
    color: "blue"
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
    duration: "1 week",
    icon: FileText,
    color: "purple"
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
    duration: "As needed",
    icon: Users,
    color: "orange"
  }
] as const

const colorVariants = {
  emerald: {
    bg: "bg-emerald-500/20",
    border: "border-emerald-500/50",
    text: "text-emerald-400",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]"
  },
  blue: {
    bg: "bg-blue-500/20", 
    border: "border-blue-500/50",
    text: "text-blue-400",
    glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  },
  purple: {
    bg: "bg-purple-500/20",
    border: "border-purple-500/50", 
    text: "text-purple-400",
    glow: "shadow-[0_0_30px_rgba(147,51,234,0.3)]"
  },
  orange: {
    bg: "bg-orange-500/20",
    border: "border-orange-500/50",
    text: "text-orange-400", 
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  }
} as const

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Transform scroll progress to timeline fill
  const timelineFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [50, -50])

  // Update active step based on scroll progress
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const stepProgress = progress * PROCESS_STEPS.length
    const currentStep = Math.min(Math.floor(stepProgress), PROCESS_STEPS.length - 1)
    setActiveStep(currentStep)
  })

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
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
            <span className="text-emerald-400 font-mono text-sm font-medium">PROCESS_FLOW.SYS</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
            ADVISORY <span className="text-emerald-500">PROCESS</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Strategic consultation, expert analysis, actionable recommendations, and ongoing guidance.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-3">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 font-mono">STEP</span>
              <motion.span 
                key={activeStep}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl font-black text-emerald-400 font-mono"
              >
                {String(activeStep + 1).padStart(2, '0')}
              </motion.span>
              <span className="text-sm text-gray-400 font-mono">/ {String(PROCESS_STEPS.length).padStart(2, '0')}</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div 
            ref={timelineRef}
            className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px md:transform md:-translate-x-1/2"
          >
            {/* Background line */}
            <div className="h-full w-full bg-white/20 rounded-full" />
            {/* Animated fill line */}
            <motion.div 
              style={{ height: timelineFill }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"
              transition={{ duration: 0.1 }}
            />
            {/* Animated pulse dot */}
            <motion.div
              style={{ 
                top: timelineFill,
                translateY: "-50%"
              }}
              className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full h-full bg-emerald-400 rounded-full"
              />
            </motion.div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 sm:space-y-24">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon
              const colors = colorVariants[step.color]
              const isActive = index <= activeStep
              const isAlternating = index % 2 === 1

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.21, 1.11, 0.81, 0.99]
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative ${
                    isAlternating 
                      ? 'md:ml-auto md:mr-0 md:pl-16 md:text-left' 
                      : 'md:ml-0 md:mr-auto md:pr-16 md:text-right'
                  } md:w-1/2 ml-16 sm:ml-20`}
                >
                  {/* Step Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute w-12 h-12 sm:w-16 sm:h-16 ${
                      isActive ? colors.bg : 'bg-white/5'
                    } ${
                      isActive ? colors.border : 'border-white/20'
                    } border-2 rounded-full flex items-center justify-center z-20 ${
                      isAlternating
                        ? 'md:left-0 md:transform md:-translate-x-1/2 -left-12 sm:-left-16'
                        : 'md:right-0 md:transform md:translate-x-1/2 -left-12 sm:-left-16'
                    } ${isActive ? colors.glow : ''}`}
                  >
                    <motion.div
                      initial={false}
                      animate={{ 
                        scale: isActive ? 1 : 0.8,
                        opacity: isActive ? 1 : 0.5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className={`w-5 h-5 sm:w-7 sm:h-7 ${
                        isActive ? colors.text : 'text-white/40'
                      }`} />
                    </motion.div>
                  </motion.div>

                  {/* Step Content Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      ...(isActive && { boxShadow: colors.glow })
                    }}
                    transition={{ duration: 0.3 }}
                    className={`relative bg-white/5 backdrop-blur-sm border ${
                      isActive ? colors.border : 'border-white/10'
                    } rounded-2xl p-6 sm:p-8 group cursor-pointer overflow-hidden ${
                      isActive ? 'hover:border-emerald-500/70' : 'hover:border-white/30'
                    }`}
                  >
                    {/* Gradient Background Overlay */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute inset-0 ${colors.bg} rounded-2xl`}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <motion.span 
                            className={`text-2xl sm:text-3xl font-black font-mono ${
                              isActive ? colors.text : 'text-white/40'
                            }`}
                            initial={false}
                            animate={{ 
                              scale: isActive ? 1 : 0.9,
                              opacity: isActive ? 1 : 0.5
                            }}
                          >
                            {step.number}
                          </motion.span>
                          <h3 className={`text-xl sm:text-2xl font-bold ${
                            isActive ? 'text-white' : 'text-white/60'
                          } leading-tight`}
                              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                            {step.title}
                          </h3>
                        </div>
                        
                        <motion.div
                          className={`flex items-center space-x-1 px-3 py-1 rounded-full border ${
                            isActive ? colors.border : 'border-white/20'
                          } ${isActive ? colors.bg : 'bg-white/5'}`}
                        >
                          <Clock className={`w-3 h-3 ${
                            isActive ? colors.text : 'text-white/40'
                          }`} />
                          <span className={`text-xs font-mono ${
                            isActive ? colors.text : 'text-white/40'
                          }`}>
                            {step.duration}
                          </span>
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className={`mb-6 leading-relaxed ${
                        isActive ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {step.description}
                      </p>

                      {/* Details */}
                      <motion.div 
                        initial={false}
                        animate={{ 
                          opacity: isActive ? 1 : 0.6,
                          y: isActive ? 0 : 10
                        }}
                        className="space-y-3"
                      >
                        {step.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detail}
                            initial={{ opacity: 0, x: isAlternating ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.1 + detailIndex * 0.05 
                            }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 group/detail"
                          >
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${
                                isActive ? colors.bg.replace('/20', '/60') : 'bg-white/20'
                              } rounded-full flex-shrink-0`}
                            />
                            <span className={`text-sm sm:text-base ${
                              isActive ? 'text-gray-300' : 'text-gray-500'
                            } group-hover/detail:text-white transition-colors`}>
                              {detail}
                            </span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    {isActive && (
                      <>
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl opacity-50" />
                        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-emerald-500/5 rounded-full blur-xl opacity-30" />
                      </>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-emerald-400"
          >
            <span className="text-xs font-mono opacity-60">SCROLL TO PROGRESS</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}