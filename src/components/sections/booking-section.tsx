'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import { IconSystem } from '@/components/icons/IconSystem'

export function BookingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const [showCalendly, setShowCalendly] = useState(false)

  const consultationTypes = [
    {
      title: "Strategic Guidance Session",
      duration: "45 minutes",
      description: "High-level strategic consultation on technical and business decisions for your blockchain project.",
      features: [
        "Strategic roadmap consultation",
        "Technology choice guidance",
        "Risk assessment and mitigation",
        "Best practices recommendation"
      ],
      price: "Free",
      popular: false
    },
    {
      title: "Deep Architecture & Economics Review",
      duration: "90 minutes", 
      description: "Comprehensive consultation on system architecture and tokenomics design for complex projects.",
      features: [
        "Architecture pattern analysis",
        "Token economics consultation",
        "Scalability strategy guidance",
        "Economic model validation"
      ],
      price: "Free",
      popular: true
    },
    {
      title: "Launch Strategy Consultation",
      duration: "60 minutes",
      description: "Strategic advisory on go-to-market planning, launch preparation, and execution guidance.",
      features: [
        "Launch timeline consultation",
        "Go-to-market strategy review",
        "Risk mitigation planning",
        "Success metrics guidance"
      ],
      price: "Free",
      popular: false
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="relative bg-bg-page py-12 md:py-16 px-4 overflow-hidden"
    >
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 border border-text-secondary/20 rotate-12" />
        <div className="absolute bottom-20 left-10 sm:left-20 w-32 sm:w-48 h-32 sm:h-48 bg-text-muted/10 rounded-full" />
      </motion.div>

      <div className="relative z-10 content-width container-spacing section-padding">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-8">
            SCHEDULE <span className="accent">CONSULTATION</span>
          </h2>
          <p className="body-large text-text-secondary max-w-4xl mx-auto">
            Strategic advisory sessions focused on your specific challenges. No sales pitches, just expert guidance.
          </p>
        </motion.div>

        {!showCalendly ? (
          <>
            {/* Session Types */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {consultationTypes.map((consultation, index) => (
                <motion.div
                  key={consultation.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative vibrant-card glow-effect magnetic-element rounded-xl p-6 sm:p-8 md:p-10 backdrop-blur-sm transition-all duration-500 group cursor-pointer focus-ring ${
                    consultation.popular 
                      ? 'border-accent-primary/60 shadow-lg shadow-accent-primary/15 hover:shadow-accent-primary/25 hover:border-accent-primary ring-1 ring-accent-primary/20' 
                      : 'border-border-subtle hover:border-border-highlight hover:shadow-lg hover:shadow-text-primary/8'
                  }`}
                >
                  {/* Dynamic background gradient overlay */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-text-secondary/5 via-transparent to-text-muted/5 animate-pulse"></div>
                  </div>
                  
                  {/* Animated border glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-[-1px] rounded-xl bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite] opacity-20"></div>
                  </div>


                  <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-bold text-text-primary mb-2 group-hover:text-text-secondary transition-colors heading-refined">
                      {consultation.title}
                    </h3>
                    <div className="text-text-muted font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                      {consultation.duration}
                    </div>
                    <p className="body-refined text-xs sm:text-sm leading-relaxed">
                      {consultation.description}
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {consultation.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center space-x-3 group/feature hover:bg-text-secondary/5 rounded-md px-2 py-1 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.1) + 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 4 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-text-secondary rounded-full flex-shrink-0" 
                          animate={{
                            scale: [1, 1.2, 1],
                            backgroundColor: [
                              "rgba(163, 163, 163, 1)",
                              "rgba(255, 255, 255, 1)", 
                              "rgba(163, 163, 163, 1)"
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: featureIndex * 0.2,
                            ease: "easeInOut"
                          }}
                        />
                        <span className="text-neutral-400 text-xs sm:text-sm group-hover/feature:text-text-secondary transition-colors duration-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-mono font-bold text-text-primary mb-3 sm:mb-4">
                      {consultation.price}
                    </div>
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        y: -3,
                        boxShadow: consultation.popular 
                          ? "0 12px 30px rgba(163, 163, 163, 0.25)" 
                          : "0 8px 25px rgba(82, 82, 82, 0.15)"
                      }}
                      whileTap={{ scale: 0.98, y: 0 }}
                      onClick={() => setShowCalendly(true)}
                      className={`relative overflow-hidden w-full py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base magnetic-element ${
                        consultation.popular
                          ? 'btn-primary-solid'
                          : 'btn-primary-outline'
                      }`}
                    >
                      {/* Ripple effect background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>
                      
                      {/* Button text */}
                      <span className="relative z-10">Book Consultation</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-12 md:mb-16"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-text-primary mb-6 sm:mb-8 heading-refined">
                What You&apos;ll Receive
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-text-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <IconSystem name="target" category="service" className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary" />
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm sm:text-base">Strategic Clarity</h4>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    Clear, actionable recommendations tailored to your specific challenges and objectives.
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-text-muted/20 rounded-full flex items-center justify-center mx-auto">
                    <IconSystem name="shield" category="service" className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary" />
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm sm:text-base">Risk Mitigation</h4>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    Expert identification of potential pitfalls and guidance on how to avoid them.
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-text-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <IconSystem name="rocket" category="service" className="w-6 h-6 sm:w-8 sm:h-8 text-text-secondary" />
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm sm:text-base">Strategic Roadmap</h4>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    Practical next steps and strategic roadmap to achieve your project goals.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          /* Calendly Widget */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="p-4 bg-gray-100 border-b flex justify-between items-center">
              <h3 className="text-gray-800 font-semibold">Schedule Technical Session</h3>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-gray-600 hover:text-gray-800 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <InlineWidget 
              url="https://calendly.com/diligencelabs/consultancy" 
              styles={{ height: '600px' }}
            />
          </motion.div>
        )}

        {/* Contact Alternative */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-bg-card/30 border border-border-subtle rounded-xl p-4 sm:p-6 md:p-8 backdrop-blur-sm"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-bold text-text-primary mb-3 sm:mb-4 heading-refined">
            Alternative Contact
          </h3>
          <p className="body-refined text-sm sm:text-base mb-4 sm:mb-6">
            For complex projects requiring extended consultation or immediate strategic guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a 
              href="mailto:info@diligencelabs.xyz" 
              className="bg-text-muted hover:bg-text-secondary text-bg-page px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              Direct Email
            </a>
            <a 
              href="https://t.me/+4gUUpwxIgv5iNmJk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-text-secondary text-text-secondary hover:bg-text-secondary hover:text-bg-page px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105"
            >
              Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}