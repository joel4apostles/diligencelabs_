'use client'

import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { 
  MessageCircle, 
  Search, 
  FileText, 
  Users,
  Clock,
  ChevronDown,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle2,
  Target
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

// Institutional-grade color variants aligned with hero section
const stepVariants = {
  pending: {
    bg: "bg-slate-800/40",
    border: "border-slate-600/30",
    text: "text-slate-400",
    icon: "text-slate-400",
    glow: "shadow-none",
    cardBg: "bg-white/[0.02]"
  },
  active: {
    bg: "bg-emerald-500/15",
    border: "border-emerald-500/40",
    text: "text-emerald-400",
    icon: "text-emerald-400", 
    glow: "shadow-[0_0_25px_rgba(16,185,129,0.25)]",
    cardBg: "bg-emerald-950/20"
  },
  completed: {
    bg: "bg-emerald-500/20",
    border: "border-emerald-500/60",
    text: "text-emerald-300",
    icon: "text-emerald-300",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.4)]",
    cardBg: "bg-emerald-950/30"
  }
} as const

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  // Enhanced transforms for institutional sophistication
  const timelineFill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  // Smoother step progression with enhanced logic
  const handleScrollProgress = useCallback((progress: number) => {
    if (typeof progress !== 'number' || !isFinite(progress)) return
    const stepProgress = progress * (PROCESS_STEPS.length + 1)
    const currentStep = Math.min(Math.floor(stepProgress), PROCESS_STEPS.length - 1)
    setActiveStep(currentStep)
  }, [])

  useMotionValueEvent(scrollYProgress, "change", handleScrollProgress)

  // Get step state based on progress
  const getStepState = useCallback((index: number) => {
    if (index < activeStep) return 'completed'
    if (index === activeStep) return 'active'
    return 'pending'
  }, [activeStep])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-gray-50 dark:bg-slate-950 py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Institutional Background Architecture */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Refined grid foundation matching hero */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>
        
        {/* Sophisticated depth gradient */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/5 to-slate-950/20 dark:from-transparent dark:via-slate-950/5 dark:to-slate-950/20" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/[0.02] dark:bg-emerald-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald-500/[0.03] dark:bg-emerald-500/10 rounded-full blur-2xl" />
        </motion.div>
      </div>

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
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
            ADVISORY <span className="text-emerald-500">PROCESS</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Strategic consultation, expert analysis, actionable recommendations, and ongoing guidance.
          </p>
        </motion.div>

        {/* Enhanced Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: shouldReduceMotion ? 0.2 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.5
          }}
          className="flex justify-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div 
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
            className="bg-white/[0.08] dark:bg-white/5 backdrop-blur-sm border border-slate-200/20 dark:border-white/10 rounded-2xl px-6 py-3 shadow-xl shadow-slate-900/5 dark:shadow-black/20"
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span className="text-sm text-slate-600 dark:text-slate-400 font-mono font-semibold">STEP</span>
              </div>
              <motion.span 
                key={activeStep}
                initial={{ scale: shouldReduceMotion ? 1 : 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                className="text-2xl font-black text-emerald-500 dark:text-emerald-400 font-mono"
                style={{ fontFeatureSettings: '"tnum" 1' }}
              >
                {String(activeStep + 1).padStart(2, '0')}
              </motion.span>
              <span className="text-sm text-slate-600 dark:text-slate-400 font-mono font-semibold">/ {String(PROCESS_STEPS.length).padStart(2, '0')}</span>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-700 mx-2" />
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">Active</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline Container */}
        <div className="relative">
          {/* Sophisticated Vertical Timeline - Desktop Only */}
          <div 
            ref={timelineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2 z-10"
          >
            {/* Background line with gradient */}
            <div className="h-full w-full bg-gradient-to-b from-slate-300/30 via-slate-400/20 to-slate-500/10 dark:from-slate-600/30 dark:via-slate-700/20 dark:to-slate-800/10 rounded-full" />
            
            {/* Animated progress fill */}
            <motion.div 
              style={{ height: timelineFill }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.4)] backdrop-blur-sm"
              transition={{ duration: shouldReduceMotion ? 0 : 0.1, ease: "easeOut" }}
            />
            
            {/* Enhanced progress indicator dot */}
            <motion.div
              style={{ 
                top: timelineFill,
                translateY: "-50%"
              }}
              className="absolute left-1/2 transform -translate-x-1/2 z-20"
            >
              {/* Outer ring */}
              <motion.div
                animate={shouldReduceMotion ? {} : { scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.9)]" 
              />
              {/* Main dot */}
              <motion.div
                animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-4 h-4 bg-emerald-400 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.9)] border-2 border-emerald-300 backdrop-blur-sm"
              />
            </motion.div>
          </div>
          
          {/* Mobile Timeline - Left Side */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 z-10">
            <div className="h-full w-full bg-gradient-to-b from-slate-300/30 via-slate-400/20 to-slate-500/10 dark:from-slate-600/30 dark:via-slate-700/20 dark:to-slate-800/10 rounded-full" />
            <motion.div 
              style={{ height: timelineFill }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 rounded-full"
            />
          </div>

          {/* Enhanced Timeline Steps */}
          <div className="space-y-20 sm:space-y-28 md:space-y-32">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon
              const stepState = getStepState(index)
              const colors = stepVariants[stepState]
              const isAlternating = index % 2 === 1
              const isHovered = hoveredStep === index

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 120, scale: shouldReduceMotion ? 1 : 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: shouldReduceMotion ? 0.3 : 0.9, 
                    delay: shouldReduceMotion ? 0 : index * 0.15,
                    ease: [0.21, 1.11, 0.81, 0.99],
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                  className={`relative group ${
                    isAlternating 
                      ? 'md:ml-auto md:mr-0 md:pl-20 lg:pl-24 md:text-left' 
                      : 'md:ml-0 md:mr-auto md:pr-20 lg:pr-24 md:text-right'
                  } md:w-1/2 ml-16 sm:ml-20 will-change-transform`}
                >
                  {/* Enhanced Step Number Circle */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { 
                      scale: 1.15, 
                      rotate: stepState === 'completed' ? 360 : 5,
                      y: -2
                    }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                    animate={shouldReduceMotion ? {} : {
                      scale: stepState === 'active' ? [1, 1.05, 1] : 1,
                      boxShadow: stepState === 'active' ? [colors.glow, 'shadow-[0_0_40px_rgba(16,185,129,0.4)]', colors.glow] : colors.glow
                    }}
                    transition={{
                      scale: { duration: 2, repeat: stepState === 'active' && !shouldReduceMotion ? Infinity : 0 },
                      boxShadow: { duration: 2, repeat: stepState === 'active' && !shouldReduceMotion ? Infinity : 0 }
                    }}
                    className={`absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${
                      colors.bg
                    } ${
                      colors.border
                    } border-2 rounded-full flex items-center justify-center z-30 cursor-pointer backdrop-blur-sm ${
                      isAlternating
                        ? 'md:left-0 md:transform md:-translate-x-1/2 -left-8 sm:-left-10'
                        : 'md:right-0 md:transform md:translate-x-1/2 -left-8 sm:-left-10'
                    } ${colors.glow} hover:border-emerald-400/60 transition-all duration-300`}
                    style={{
                      background: stepState === 'completed' ? 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.1))' : undefined
                    }}
                  >
                    <motion.div
                      initial={false}
                      animate={{ 
                        scale: stepState !== 'pending' ? 1 : 0.8,
                        opacity: stepState !== 'pending' ? 1 : 0.6,
                        rotate: stepState === 'completed' && !shouldReduceMotion ? 360 : 0
                      }}
                      transition={{ duration: shouldReduceMotion ? 0.2 : 0.4, ease: "easeOut" }}
                    >
                      {stepState === 'completed' ? (
                        <CheckCircle2 className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${colors.icon} drop-shadow-sm`} />
                      ) : (
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${colors.icon} drop-shadow-sm`} />
                      )}
                    </motion.div>
                    
                    {/* Status ring for active state */}
                    {stepState === 'active' && (
                      <motion.div
                        animate={shouldReduceMotion ? {} : { rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-dashed border-emerald-400/50 rounded-full"
                      />
                    )}
                  </motion.div>

                  {/* Enhanced Step Content Card */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { 
                      scale: 1.02, 
                      y: -8,
                      boxShadow: stepState !== 'pending' ? colors.glow : 'shadow-xl'
                    }}
                    transition={{ duration: shouldReduceMotion ? 0.1 : 0.3, ease: "easeOut" }}
                    className={`relative ${colors.cardBg} backdrop-blur-sm border ${
                      colors.border
                    } rounded-2xl p-6 sm:p-8 lg:p-10 group cursor-pointer overflow-hidden shadow-xl dark:shadow-black/20 ${
                      stepState !== 'pending' 
                        ? 'hover:border-emerald-500/70 dark:hover:border-emerald-400/70' 
                        : 'hover:border-slate-400/30 dark:hover:border-slate-600/30'
                    } transition-all duration-300`}
                  >
                    {/* Sophisticated gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent dark:from-white/[0.02] dark:to-transparent rounded-2xl" />
                    
                    {stepState !== 'pending' && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: stepState === 'active' ? 0.15 : 0.1, scale: 1 }}
                          transition={{ duration: shouldReduceMotion ? 0.2 : 0.6, ease: "easeOut" }}
                          className={`absolute inset-0 ${colors.cardBg} rounded-2xl`}
                        />
                        
                        {/* Subtle mesh pattern for institutional feel */}
                        <div className="absolute inset-0 opacity-[0.01] dark:opacity-[0.02]" style={{
                          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16,185,129,0.3) 1px, transparent 0)`,
                          backgroundSize: '20px 20px'
                        }} />
                      </>
                    )}
                    
                    {/* Animated border accent */}
                    {stepState === 'active' && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, ease: "easeOut" }}
                        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-t-2xl"
                      />
                    )}

                    {/* Enhanced Content */}
                    <div className="relative z-20">
                      {/* Professional Header */}
                      <div className="flex items-start justify-between mb-6 sm:mb-8">
                        <div className="flex items-start space-x-4 flex-1 min-w-0">
                          {/* Step number with enhanced styling */}
                          <motion.div
                            className="flex-shrink-0"
                            initial={false}
                            animate={{ 
                              scale: stepState !== 'pending' ? 1 : 0.9,
                              opacity: stepState !== 'pending' ? 1 : 0.6
                            }}
                            transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
                          >
                            <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${
                              stepState !== 'pending' ? colors.bg : 'bg-slate-800/20 dark:bg-slate-800/40'
                            } border ${
                              colors.border
                            } backdrop-blur-sm`}>
                              <span className={`text-lg sm:text-xl font-black font-mono ${
                                colors.text
                              }`} style={{ fontFeatureSettings: '"tnum" 1' }}>
                                {step.number}
                              </span>
                            </div>
                          </motion.div>
                          
                          {/* Title with institutional typography */}
                          <div className="flex-1 min-w-0">
                            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${
                              stepState !== 'pending' ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                            } leading-tight mb-2`}
                                style={{ 
                                  fontFamily: 'Inter, system-ui, sans-serif',
                                  fontFeatureSettings: '"kern" 1, "liga" 1',
                                  textRendering: 'optimizeLegibility'
                                }}>
                              {step.title}
                            </h3>
                            
                            {/* Step state indicator */}
                            <motion.div
                              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
                              className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase ${
                                stepState === 'completed' 
                                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300'
                                  : stepState === 'active'
                                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400'
                                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400'
                              }`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                stepState === 'completed'
                                  ? 'bg-emerald-500'
                                  : stepState === 'active'
                                    ? 'bg-emerald-400 animate-pulse'
                                    : 'bg-slate-400'
                              }`} />
                              <span>
                                {stepState === 'completed' ? 'Completed' : stepState === 'active' ? 'In Progress' : 'Upcoming'}
                              </span>
                            </motion.div>
                          </div>
                        </div>
                        
                        {/* Duration indicator with better responsive sizing */}
                        <motion.div
                          whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                          className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-xl border backdrop-blur-sm flex-shrink-0 ml-2 sm:ml-4 min-w-max ${
                            stepState !== 'pending' ? colors.border : 'border-slate-300 dark:border-slate-600'
                          } ${stepState !== 'pending' ? colors.bg : 'bg-slate-100/50 dark:bg-slate-800/30'}`}
                        >
                          <Clock className={`w-4 h-4 flex-shrink-0 ${
                            stepState !== 'pending' ? colors.icon : 'text-slate-500 dark:text-slate-400'
                          }`} />
                          <span className={`text-sm font-mono font-semibold whitespace-nowrap ${
                            stepState !== 'pending' ? colors.text : 'text-slate-600 dark:text-slate-400'
                          }`}>
                            {step.duration}
                          </span>
                        </motion.div>
                      </div>

                      {/* Enhanced Description */}
                      <motion.p 
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 + 0.2 }}
                        className={`mb-8 text-base sm:text-lg leading-relaxed font-normal ${
                          stepState !== 'pending' 
                            ? 'text-slate-700 dark:text-slate-300' 
                            : 'text-slate-600 dark:text-slate-500'
                        }`}
                        style={{ fontFeatureSettings: '"kern" 1' }}
                      >
                        {step.description}
                      </motion.p>

                      {/* Sophisticated Details Grid */}
                      <motion.div 
                        initial={false}
                        animate={{ 
                          opacity: stepState !== 'pending' ? 1 : 0.7,
                          y: stepState !== 'pending' ? 0 : 10
                        }}
                        transition={{ duration: shouldReduceMotion ? 0.1 : 0.4 }}
                        className="space-y-4"
                      >
                        <div className="grid gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <motion.div
                              key={detail}
                              initial={{ opacity: 0, x: shouldReduceMotion ? 0 : (isAlternating ? 20 : -20) }}
                              whileInView={{ opacity: 1, x: 0 }}
                              whileHover={shouldReduceMotion ? {} : { x: isAlternating ? -4 : 4, scale: 1.01 }}
                              transition={{ 
                                duration: shouldReduceMotion ? 0.1 : 0.4, 
                                delay: shouldReduceMotion ? 0 : index * 0.1 + detailIndex * 0.05 
                              }}
                              viewport={{ once: true }}
                              className={`flex items-start space-x-4 p-4 rounded-xl group/detail cursor-pointer transition-all duration-300 ${
                                stepState !== 'pending'
                                  ? 'bg-white/[0.03] dark:bg-white/[0.02] hover:bg-white/[0.05] dark:hover:bg-white/[0.04] border border-slate-200/10 dark:border-white/5 hover:border-emerald-500/20 dark:hover:border-emerald-400/20'
                                  : 'bg-slate-50/50 dark:bg-slate-800/20 hover:bg-slate-100/50 dark:hover:bg-slate-700/20 border border-slate-200/20 dark:border-slate-700/30'
                              }`}
                            >
                              {/* Enhanced bullet point */}
                              <motion.div
                                whileHover={shouldReduceMotion ? {} : { scale: 1.3, rotate: 180 }}
                                className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                                  stepState === 'completed'
                                    ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]'
                                    : stepState === 'active'
                                      ? 'bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.4)] animate-pulse'
                                      : 'bg-slate-400 dark:bg-slate-500'
                                } group-hover/detail:bg-emerald-400 group-hover/detail:shadow-[0_0_8px_rgba(16,185,129,0.5)]`}
                              />
                              
                              <div className="flex-1">
                                <span className={`text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                                  stepState !== 'pending' 
                                    ? 'text-slate-700 dark:text-slate-300 group-hover/detail:text-slate-900 dark:group-hover/detail:text-white'
                                    : 'text-slate-600 dark:text-slate-500 group-hover/detail:text-slate-700 dark:group-hover/detail:text-slate-400'
                                } font-medium`}
                                  style={{ fontFeatureSettings: '"kern" 1' }}
                                >
                                  {detail}
                                </span>
                                
                                {/* Subtle progress indicator for active items */}
                                {stepState === 'active' && (
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: shouldReduceMotion ? 0.2 : 0.8, delay: detailIndex * 0.1 }}
                                    className="h-px bg-gradient-to-r from-emerald-400/50 to-transparent mt-2"
                                  />
                                )}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                      
                      {/* Call-to-action for active step */}
                      {stepState === 'active' && (
                        <motion.div
                          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: shouldReduceMotion ? 0.1 : 0.8, duration: shouldReduceMotion ? 0.2 : 0.5 }}
                          className="mt-8 pt-6 border-t border-emerald-500/20 dark:border-emerald-400/20"
                        >
                          <motion.button
                            whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                            className="inline-flex items-center space-x-2 bg-emerald-500/10 hover:bg-emerald-500/20 dark:bg-emerald-400/10 dark:hover:bg-emerald-400/20 border border-emerald-500/30 hover:border-emerald-500/50 dark:border-emerald-400/30 dark:hover:border-emerald-400/50 rounded-xl px-6 py-3 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-semibold transition-all duration-300 backdrop-blur-sm"
                          >
                            <span className="text-sm">Learn More About This Step</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.button>
                        </motion.div>
                      )}
                    </div>

                    {/* Sophisticated Decorative Elements */}
                    {stepState !== 'pending' && (
                      <>
                        {/* Top-right accent */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: stepState === 'active' ? [0.8, 1.2, 1] : 1, 
                            opacity: stepState === 'active' ? [0.3, 0.6, 0.4] : 0.3 
                          }}
                          transition={{ 
                            duration: shouldReduceMotion ? 0.2 : (stepState === 'active' ? 2 : 0.8),
                            repeat: stepState === 'active' && !shouldReduceMotion ? Infinity : 0 
                          }}
                          className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-xl"
                        />
                        
                        {/* Bottom-left accent */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: stepState === 'active' ? [1, 0.8, 1] : 1, 
                            opacity: stepState === 'active' ? [0.4, 0.2, 0.3] : 0.2 
                          }}
                          transition={{ 
                            duration: shouldReduceMotion ? 0.2 : (stepState === 'active' ? 3 : 0.8),
                            repeat: stepState === 'active' && !shouldReduceMotion ? Infinity : 0,
                            delay: shouldReduceMotion ? 0 : 1
                          }}
                          className="absolute -bottom-8 -left-8 w-16 h-16 bg-emerald-500/5 dark:bg-emerald-500/8 rounded-full blur-xl"
                        />
                        
                        {/* Corner highlights */}
                        {stepState === 'completed' && (
                          <>
                            <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400/60 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                            <div className="absolute top-6 right-6 w-1 h-1 bg-emerald-300/40 rounded-full" />
                          </>
                        )}
                      </>
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: shouldReduceMotion ? 0.3 : 1.5 }}
          className="flex justify-center mt-16 sm:mt-20 lg:mt-24"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -5 }}
            animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="flex flex-col items-center space-y-3 sm:space-y-4 text-emerald-400 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-lg p-2"
            role="button"
            tabIndex={0}
            aria-label="Scroll to continue"
            onClick={() => {
              const nextSection = document.querySelector('#booking')
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                const nextSection = document.querySelector('#booking')
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' })
                }
              }
            }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-1 h-1 bg-emerald-400/60 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Continue to Booking
              </span>
              <div className="w-1 h-1 bg-emerald-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <motion.div
              className="relative"
              animate={shouldReduceMotion ? {} : { 
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
            >
              <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 group-hover:text-emerald-300 transition-colors duration-300" />
              
              {/* Subtle glow effect */}
              <motion.div
                animate={shouldReduceMotion ? {} : {
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-emerald-400/20 rounded-full blur-sm"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subtle bottom fade for seamless section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-slate-950 to-transparent pointer-events-none" />
    </section>
  )
}