'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Terminal, 
  Calendar,
  Clock,
  User,
  CheckCircle,
  ArrowRight,
  Zap,
  Star
} from 'lucide-react'
import { CalendlyModal } from '@/components/ui/calendly-modal'

const CONSULTATION_TYPES = [
  {
    id: "strategic-guidance",
    title: "Strategic Guidance Session",
    command: "> EXECUTE_STRATEGIC_GUIDANCE",
    duration: "45 minutes",
    description: "High-level strategic consultation on technical and business decisions for your blockchain project.",
    features: [
      "Strategic roadmap consultation",
      "Technology choice guidance", 
      "Risk assessment and mitigation",
      "Best practices recommendation"
    ],
    price: "Free",
    popular: false,
    terminalOutput: [
      "$ initializing strategic_session...",
      "$ loading blockchain_expertise.db",
      "$ connecting to advisory_network...",
      "✓ Ready for strategic consultation"
    ]
  },
  {
    id: "deep-architecture",
    title: "Deep Architecture & Economics Review", 
    command: "> EXECUTE_DEEP_ANALYSIS",
    duration: "90 minutes",
    description: "Comprehensive consultation on system architecture and tokenomics design for complex projects.",
    features: [
      "Architecture pattern analysis",
      "Token economics consultation", 
      "Scalability strategy guidance",
      "Economic model validation"
    ],
    price: "Free",
    popular: true,
    terminalOutput: [
      "$ sudo apt install deep_analysis_suite",
      "$ scanning architecture_patterns...", 
      "$ analyzing tokenomics_models...",
      "$ generating recommendations...",
      "✓ Advanced analysis complete"
    ]
  },
  {
    id: "launch-strategy", 
    title: "Launch Strategy Consultation",
    command: "> EXECUTE_LAUNCH_PROTOCOL",
    duration: "60 minutes",
    description: "Strategic advisory on go-to-market planning, launch preparation, and execution guidance.",
    features: [
      "Launch timeline consultation",
      "Market positioning strategy",
      "Partnership opportunity mapping", 
      "Risk mitigation planning"
    ],
    price: "Free",
    popular: false,
    terminalOutput: [
      "$ ./launch_strategy_init.sh",
      "$ preparing market_analysis.json",
      "$ configuring partnership_matrix...",
      "$ validating launch_sequence...", 
      "✓ Launch strategy optimized"
    ]
  }
] as const

const TYPING_COMMANDS = [
  "> system_status: online",
  "> advisory_network: connected", 
  "> blockchain_expertise: loaded",
  "> scheduling_system: ready"
]

export function BookingTerminal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedConsultation, setSelectedConsultation] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [typingText, setTypingText] = useState('')
  const [commandIndex, setCommandIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  // Terminal typing effect
  useEffect(() => {
    const command = TYPING_COMMANDS[commandIndex]
    let charIndex = 0
    
    const typeInterval = setInterval(() => {
      if (charIndex < command.length) {
        setTypingText(command.substring(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCommandIndex((prev) => (prev + 1) % TYPING_COMMANDS.length)
          setTypingText('')
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [commandIndex])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  const handleBookConsultation = (consultation: any) => {
    setSelectedConsultation(consultation.id)
    setModalTitle(consultation.title)
    setIsModalOpen(true)
  }

  return (
    <>
      <section 
        ref={containerRef}
        className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Terminal Background Pattern */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-5"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        {/* Floating Terminal Elements */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-green-500/20 rounded-lg pointer-events-none"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Terminal Header */}
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
              className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono text-sm font-medium">BOOKING_TERMINAL.EXE</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-green-400 mb-6 leading-tight tracking-tight font-mono">
              TRIAGE_PROTOCOL
            </h2>
            <p className="text-lg sm:text-xl text-green-300/80 max-w-3xl mx-auto leading-relaxed font-mono">
              ./initialize_consultation --type=strategic --mode=interactive
            </p>
          </motion.div>

          {/* Command Line Interface Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-t-2xl border-2 border-green-500/30 overflow-hidden mb-0"
          >
            {/* Terminal Window Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-green-400 font-mono text-sm">
                diligence-labs://consultation-scheduler/
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Live Terminal Output */}
            <div className="p-6 bg-black font-mono text-green-400 min-h-[100px]">
              <div className="space-y-2">
                <div className="text-green-500">$ ./consultation_system --status</div>
                <div className="text-green-300">System Status: ONLINE</div>
                <div className="text-green-300">Available Experts: 12</div>
                <div className="text-green-300">Next Available: Immediate</div>
                <div className="flex items-center">
                  <span className="text-green-500">diligence@advisory:~$ </span>
                  <span className="ml-2">{typingText}</span>
                  <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>▊</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Consultation Options Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-b-2xl border-x-2 border-b-2 border-green-500/30 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {CONSULTATION_TYPES.map((consultation, index) => (
                <motion.div
                  key={consultation.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.21, 1.11, 0.81, 0.99]
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
                  }}
                  className={`relative bg-black border-2 ${
                    consultation.popular 
                      ? 'border-green-500 bg-gradient-to-b from-green-500/10 to-transparent' 
                      : 'border-green-500/30 hover:border-green-500/60'
                  } rounded-xl p-6 cursor-pointer transition-all duration-300 group overflow-hidden`}
                  onClick={() => handleBookConsultation(consultation)}
                >
                  {/* Popular Badge */}
                  {consultation.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: -12 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="absolute -top-2 -right-2 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1"
                    >
                      <Star className="w-3 h-3 fill-current" />
                      <span>POPULAR</span>
                    </motion.div>
                  )}

                  {/* Terminal Output Animation */}
                  <div className="mb-6 bg-gray-950 rounded-lg p-4 font-mono text-xs border border-green-500/20">
                    {consultation.terminalOutput.map((line, lineIndex) => (
                      <motion.div
                        key={lineIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.1 + lineIndex * 0.1 + 0.5
                        }}
                        viewport={{ once: true }}
                        className={`${
                          line.includes('✓') 
                            ? 'text-green-400' 
                            : line.includes('$') 
                              ? 'text-green-300' 
                              : 'text-green-500'
                        }`}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>

                  {/* Session Info */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-green-400 font-mono leading-tight">
                        {consultation.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-green-500 text-sm font-mono">
                        <Clock className="w-3 h-3" />
                        <span>{consultation.duration}</span>
                      </div>
                    </div>
                    <p className="text-green-300/80 text-sm leading-relaxed font-mono">
                      {consultation.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {consultation.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3,
                          delay: index * 0.05 + featureIndex * 0.05 + 0.8
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-2 group/feature"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          className="flex-shrink-0 mt-1"
                        >
                          <CheckCircle className="w-3 h-3 text-green-500 group-hover/feature:text-green-400 transition-colors" />
                        </motion.div>
                        <span className="text-green-300/70 text-xs font-mono group-hover/feature:text-green-300 transition-colors">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Command Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 hover:border-green-500 rounded-lg px-4 py-3 text-center transition-all duration-300 group/button"
                  >
                    <div className="flex items-center justify-center space-x-2 font-mono">
                      <Terminal className="w-4 h-4 text-green-400 group-hover/button:text-green-300" />
                      <span className="text-green-400 group-hover/button:text-green-300 font-bold text-sm">
                        {consultation.command}
                      </span>
                    </div>
                  </motion.div>

                  {/* Price Tag */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute top-4 left-4 bg-green-500 text-black px-2 py-1 rounded text-xs font-bold font-mono"
                  >
                    {consultation.price}
                  </motion.div>

                  {/* Hover Glow Effects */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-400/20 to-green-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                </motion.div>
              ))}
            </div>

            {/* Terminal Command Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-green-500/20"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-400 px-8 py-4 rounded-xl font-bold text-black transition-all duration-300 shadow-[0_0_30px_rgba(34,197,94,0.3)] cursor-pointer font-mono"
                  onClick={() => {
                    setSelectedConsultation('general')
                    setModalTitle('General Consultation')
                    setIsModalOpen(true)
                  }}
                >
                  <Zap className="w-5 h-5" />
                  <span>./init_consultation --now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <p className="text-green-500/60 font-mono text-sm mt-4">
                  &gt; All consultations are complimentary strategic sessions
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        meetingType={selectedConsultation}
        title={modalTitle}
      />
    </>
  )
}