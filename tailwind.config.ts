import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Monochromatic Design System - NO MAGIC HEX CODES
        'bg-page': '#000000',        // Pure Black (#000000) - Main canvas
        'bg-card': '#0a0a0a',        // Very Dark Grey (#050505 / neutral-950) - Service cards
        'border-subtle': '#171717',   // Dark Grey (neutral-900) - Card borders  
        'border-highlight': '#404040', // Mid Grey (neutral-700) - Hover states
        'text-primary': '#ffffff',   // White (#FFFFFF) - Headings
        'text-secondary': '#a3a3a3', // Light Grey (neutral-400) - Body text
        'text-muted': '#525252',     // Dark Grey (neutral-600) - Footer/Meta
        
        // State colors (error/success only - minimal use)
        destructive: {
          DEFAULT: '#dc2626',        // Red-600 for errors
          foreground: '#ffffff',
        },
        success: {
          DEFAULT: '#16a34a',        // Green-600 for success
          foreground: '#ffffff',
        },
        
        // Legacy shadcn/ui support (mapped to semantic colors)
        background: 'var(--bg-page)',
        foreground: 'var(--text-primary)',
        card: 'var(--bg-card)',
        'card-foreground': 'var(--text-primary)',
        popover: 'var(--bg-card)',
        'popover-foreground': 'var(--text-primary)',
        primary: 'var(--text-primary)',
        'primary-foreground': 'var(--bg-page)',
        secondary: 'var(--text-secondary)',
        'secondary-foreground': 'var(--bg-page)',
        muted: 'var(--text-muted)',
        'muted-foreground': 'var(--text-secondary)',
        accent: 'var(--text-secondary)',
        'accent-foreground': 'var(--bg-page)',
        border: 'var(--border-subtle)',
        input: 'var(--bg-card)',
        ring: 'var(--border-highlight)',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

