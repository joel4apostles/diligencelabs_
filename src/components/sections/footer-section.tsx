'use client'

import { motion } from 'framer-motion'
import { IconSystem } from '@/components/icons/IconSystem'
import { SocialLink, QuickLink } from '@/types'

const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    name: 'Twitter',
    href: 'https://x.com/diligencelabs_',
    icon: <IconSystem name="twitter" category="social" className="w-5 h-5" />
  },
  {
    name: 'LinkedIn', 
    href: 'https://www.linkedin.com/company/diligence-labs/about/',
    icon: <IconSystem name="linkedin" category="social" className="w-5 h-5" />
  },
  {
    name: 'Telegram',
    href: 'https://t.me/+4gUUpwxIgv5iNmJk',
    icon: <IconSystem name="telegram" category="social" className="w-5 h-5" />
  },
  {
    name: 'GitHub',
    href: 'https://github.com/diligencelabs',
    icon: <IconSystem name="github" category="social" className="w-5 h-5" />
  }
] as const

const QUICK_LINKS: readonly QuickLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Engagement', href: '#how-it-works' },
  { name: 'Schedule Triage', href: '#booking' }
] as const

export function FooterSection() {

  return (
    <footer className="relative bg-bg-page border-t border-border-subtle py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-text-primary mb-2 heading-refined">
                DILIGENCE <span className="text-text-secondary">LABS</span>
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                Technical advisory for Web3 infrastructure, tokenomics, and protocol architecture.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a 
                href="mailto:info@diligencelabs.xyz" 
                className="block text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm sm:text-base"
              >
                info@diligencelabs.xyz
              </a>
              <div className="text-neutral-400 text-xs sm:text-sm">
                Global advisory • Remote first
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-text-primary font-semibold text-base sm:text-lg kicker-text">QUICK LINKS</h4>
            <nav className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-neutral-400 hover:text-text-primary transition-colors duration-300 text-sm sm:text-base"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-text-primary font-semibold text-base sm:text-lg kicker-text">TECHNICAL UPDATES</h4>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Protocol development insights and infrastructure analysis.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-bg-card border border-border-subtle rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-text-primary placeholder-neutral-400 focus:border-border-highlight focus:outline-none transition-colors duration-300 text-sm sm:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-text-secondary hover:bg-text-primary text-bg-page font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 btn-primary text-sm sm:text-base"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-subtle pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 gap-4">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4 sm:space-x-6"
            >
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  viewport={{ once: true }}
                  className="text-text-muted hover:text-text-secondary transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-xs sm:text-sm text-center sm:text-right"
            >
              <div>© 2024 Diligence Labs. All rights reserved.</div>
              <div className="flex space-x-4 mt-2">
                <a href="/privacy" className="hover:text-text-secondary transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="hover:text-text-secondary transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 border border-text-secondary/20 rotate-45" />
        <div className="absolute top-6 sm:top-10 right-6 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-text-muted/10 rounded-full" />
      </div>
    </footer>
  )
}