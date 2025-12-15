'use client'

import { motion } from 'framer-motion'
import { useScrollParallax } from '@/hooks'

export function AboutSection() {
  const { ref, y, opacity } = useScrollParallax({
    yRange: [100, -100],
    opacityRange: [0, 1, 1, 0]
  })



  return (
    <section 
      ref={ref}
      className="relative bg-bg-page py-12 md:py-16 px-4 overflow-hidden"
    >
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-text-secondary/20 rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-text-muted/10 rotate-45" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto"
      >


        {/* Experience Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-mono font-bold text-text-primary mb-6 heading-refined">
              Strategic Advisory Expertise
            </h3>
            <div className="space-y-4 text-text-secondary">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg leading-relaxed body-refined"
              >
                Experienced working with early-stage projects through launchpads, incubation programs, and acceleration initiatives across the blockchain ecosystem.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg leading-relaxed body-refined"
              >
                Background in protocol development providing strategic insights on smart contract architecture and blockchain infrastructure design decisions.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg leading-relaxed body-refined"
              >
                Now providing strategic consultation to projects on technical architecture decisions, tokenomics design, and implementation planning.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-mono font-bold text-text-primary mb-6 heading-refined">
              Advisory Specializations
            </h3>
            <div className="space-y-4 text-text-secondary">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg leading-relaxed body-refined"
              >
                Practical guidance on smart contract optimization, security best practices, and gas efficiency improvements based on real project experience.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg leading-relaxed body-refined"
              >
                Advisory on multi-chain strategies, Layer 2 integration approaches, and protocol design decisions drawn from development experience.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-base lg:text-lg leading-relaxed body-refined"
              >
                Focus on helping teams avoid common pitfalls through strategic planning sessions and technical architecture reviews.
              </motion.p>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}