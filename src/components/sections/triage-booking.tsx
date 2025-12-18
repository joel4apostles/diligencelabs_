'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Terminal, 
  Clock,
  Play,
  Zap
} from 'lucide-react'
import { CalendlyModal } from '@/components/ui/calendly-modal'

const TRIAGE_PROTOCOLS = [
  {
    id: "strategic-triage",
    title: "Strategic Triage",
    duration: "45 MIN",
    protocol: "STRATEGY",
    description: "High-level strategic consultation on technical and business decisions for your blockchain project.",
    command: "INITIALIZE_STRATEGIC_PROTOCOL",
    meetingType: "strategic-guidance",
    priority: "STANDARD"
  },
  {
    id: "deep-analysis", 
    title: "Deep Analysis Protocol",
    duration: "90 MIN",
    protocol: "ANALYSIS",
    description: "Comprehensive consultation on system architecture and tokenomics design for complex projects.",
    command: "EXECUTE_DEEP_ANALYSIS",
    meetingType: "deep-architecture",
    priority: "PRIORITY"
  },
  {
    id: "launch-protocol",
    title: "Launch Protocol",
    duration: "60 MIN", 
    protocol: "LAUNCH",
    description: "Strategic advisory on go-to-market planning, launch preparation, and execution guidance.",
    command: "DEPLOY_LAUNCH_SEQUENCE",
    meetingType: "launch-strategy",
    priority: "STANDARD"
  }
] as const

export function TriageBooking() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProtocol, setSelectedProtocol] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  const handleProtocolSelect = (protocol: any) => {
    setSelectedProtocol(protocol.meetingType)
    setModalTitle(protocol.title)
    setIsModalOpen(true)
  }

  return (
    <>
      <section 
        ref={containerRef}
        className="relative min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Terminal Grid Background */}
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
              className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8"
            >
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono text-sm font-medium">TRIAGE_SYSTEM.EXE</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-green-400 mb-6 leading-tight tracking-tight font-mono">
              TRIAGE PROTOCOLS
            </h2>
            <p className="text-lg sm:text-xl text-green-300/80 max-w-3xl mx-auto leading-relaxed font-mono">
              ./initialize_consultation --mode=interactive --priority=immediate
            </p>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-t-2xl border-2 border-green-500/30 overflow-hidden mb-0"
          >
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-green-400 font-mono text-sm">
                diligence-labs://triage-protocols/
              </div>
              <div className="w-16"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="bg-gray-900 rounded-b-2xl border-x-2 border-b-2 border-green-500/30 p-6 sm:p-8">
              {/* System Status */}
              <div className="p-6 bg-black font-mono text-green-400 mb-8 rounded-xl border border-green-500/20">
                <div className="space-y-2">
                  <div className="text-green-500">$ ./triage_system --status</div>
                  <div className="text-green-300">System Status: ONLINE</div>
                  <div className="text-green-300">Available Protocols: {TRIAGE_PROTOCOLS.length}</div>
                  <div className="text-green-300">Next Available: IMMEDIATE</div>
                </div>
              </div>

              {/* Protocol Data Rows */}
              <div className="space-y-6">
                {TRIAGE_PROTOCOLS.map((protocol, index) => (
                  <motion.div
                    key={protocol.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.21, 1.11, 0.81, 0.99]
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
                    }}
                    className="bg-black border border-green-500/30 hover:border-green-500/60 rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-300 group"
                    onClick={() => handleProtocolSelect(protocol)}
                  >
                    {/* Priority Badge */}
                    {protocol.priority === "PRIORITY" && (
                      <motion.div
                        initial={{ scale: 0, rotate: -12 }}
                        animate={{ scale: 1, rotate: -12 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute -top-2 -right-2 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold font-mono"
                      >
                        {protocol.priority}
                      </motion.div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                      {/* Left Side: Title + Duration */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4">
                          <h3 className="text-xl sm:text-2xl font-bold text-green-400 font-mono leading-tight">
                            {protocol.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-green-500 font-mono font-bold">
                            <Clock className="w-4 h-4" />
                            <span className="text-base sm:text-lg tracking-wider" style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace' }}>
                              {protocol.duration} // {protocol.protocol}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-green-300/80 text-sm leading-relaxed font-mono max-w-2xl">
                          {protocol.description}
                        </p>

                        {/* Command Preview */}
                        <div className="mt-4 font-mono text-xs text-green-500/60 bg-gray-950 rounded px-3 py-2 border border-green-500/20">
                          $ {protocol.command.toLowerCase()}
                        </div>
                      </div>

                      {/* Right Side: Action Button */}
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 hover:border-green-500 rounded-xl px-6 py-4 transition-all duration-300 group/button"
                        >
                          <div className="flex items-center space-x-3">
                            <Terminal className="w-5 h-5 text-green-400 group-hover/button:text-green-300" />
                            <span className="text-green-400 group-hover/button:text-green-300 font-bold font-mono text-lg tracking-wider" style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace' }}>
                              [ INITIALIZE ]
                            </span>
                            <Play className="w-4 h-4 text-green-400 group-hover/button:text-green-300" />
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover Glow Effects */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-400/20 to-green-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                  </motion.div>
                ))}
              </div>

              {/* Terminal Footer */}
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
                      setSelectedProtocol('general')
                      setModalTitle('General Triage Protocol')
                      setIsModalOpen(true)
                    }}
                  >
                    <Zap className="w-5 h-5" />
                    <span style={{ fontFamily: 'JetBrains Mono, ui-monospace, monospace' }}>./emergency_protocol --now</span>
                    <Terminal className="w-5 h-5" />
                  </motion.div>
                  <p className="text-green-500/60 font-mono text-sm mt-4">
                    &gt; All triage protocols are complimentary strategic sessions
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <CalendlyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        meetingType={selectedProtocol}
        title={modalTitle}
      />
    </>
  )
}