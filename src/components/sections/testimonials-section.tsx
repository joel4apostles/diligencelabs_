'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const [activeTab, setActiveTab] = useState<'testimonials' | 'case-studies'>('testimonials')

  const testimonials = [
    {
      quote: "Diligence Labs provided invaluable strategic guidance during our protocol launch. Their deep understanding of DeFi mechanics and market dynamics was crucial to our success.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "DeFi Protocol Alpha",
      result: "$500M TVL in 6 months"
    },
    {
      quote: "The tokenomics design and go-to-market strategy we developed with Diligence Labs exceeded all expectations. Their expertise in institutional adoption was game-changing.",
      author: "Marcus Rodriguez",
      role: "CTO",
      company: "Blockchain Beta",
      result: "150% user growth"
    },
    {
      quote: "Working with Diligence Labs felt like having a co-founder with decades of Web3 experience. They guided us through every challenge with precision and insight.",
      author: "Emma Thompson",
      role: "Head of Strategy",
      company: "Web3 Gamma",
      result: "$2B market cap"
    },
    {
      quote: "The risk management framework they designed for us prevented multiple potential exploits and saved our protocol millions in potential losses.",
      author: "David Park",
      role: "Security Lead",
      company: "DeFi Delta",
      result: "Zero security incidents"
    }
  ]

  const caseStudies = [
    {
      title: "DeFi Lending Protocol Launch",
      challenge: "New lending protocol needed comprehensive tokenomics, security framework, and go-to-market strategy for institutional adoption.",
      solution: "Designed multi-layered security architecture, developed sustainable tokenomics model, and created institutional onboarding pipeline.",
      results: [
        "$1.2B TVL within 8 months",
        "50+ institutional partners",
        "Zero security incidents",
        "Top 10 DeFi protocol ranking"
      ],
      category: "DeFi"
    },
    {
      title: "Cross-Chain Infrastructure",
      challenge: "Multi-chain protocol required complex bridge architecture and cross-chain governance mechanisms.",
      solution: "Architected secure cross-chain infrastructure, implemented novel consensus mechanism, and designed interoperable governance system.",
      results: [
        "15+ blockchain integrations", 
        "$500M cross-chain volume",
        "99.9% uptime achieved",
        "Industry-leading security rating"
      ],
      category: "Infrastructure"
    },
    {
      title: "NFT Marketplace Optimization",
      challenge: "Existing NFT platform needed scalability improvements and new revenue models to compete with major platforms.",
      solution: "Redesigned smart contract architecture, implemented Layer 2 scaling, and developed innovative creator incentive programs.",
      results: [
        "300% increase in transaction volume",
        "50% reduction in gas costs",
        "2M+ active users",
        "$100M+ in creator earnings"
      ],
      category: "NFT"
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-black py-20 px-4 overflow-hidden"
    >
      {/* Background Parallax Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-1/4 left-10 w-80 h-80 border border-accent-primary rotate-12" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent-primary rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6">
            SUCCESS <span className="text-accent-primary">STORIES</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Real results from real protocols. See how our strategic guidance has driven measurable success across the Web3 ecosystem.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab('testimonials')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'testimonials'
                    ? 'bg-cyan-400 text-black'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => setActiveTab('case-studies')}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'case-studies'
                    ? 'bg-purple-500 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Case Studies
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="min-h-[600px]">
          {activeTab === 'testimonials' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-cyan-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                    <p className="text-gray-300 text-lg leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-semibold text-white mb-1">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-400 text-sm mb-1">
                        {testimonial.role}
                      </div>
                      <div className="text-purple-400 text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                    <div className="text-cyan-400 font-mono font-bold text-sm">
                      {testimonial.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'case-studies' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="mb-4">
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                      {study.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-mono font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2 text-sm">Challenge</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2 text-sm">Solution</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-cyan-400 font-semibold mb-3 text-sm">Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-mono font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the ranks of successful protocols that have leveraged our expertise to achieve breakthrough results.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-primary/90 transition-all duration-300"
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}