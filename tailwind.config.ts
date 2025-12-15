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
        // Dynamic Theme System - Uses CSS Variables for Light/Dark Switching
        'bg-page': 'hsl(var(--bg-page))',
        'bg-card': 'hsl(var(--bg-card))',
        'bg-surface': 'hsl(var(--bg-surface))',
        'bg-elevated': 'hsl(var(--bg-elevated))',
        
        'border-subtle': 'hsl(var(--border-subtle))',
        'border-highlight': 'hsl(var(--border-highlight))',
        'border-accent': 'hsl(var(--border-accent))',
        
        'text-primary': 'hsl(var(--text-primary))',
        'text-secondary': 'hsl(var(--text-secondary))',
        'text-muted': 'hsl(var(--text-muted))',
        'text-inverse': 'hsl(var(--text-inverse))',
        
        // Accent colors
        'accent-primary': 'hsl(var(--accent-primary))',
        'accent-secondary': 'hsl(var(--accent-secondary))',
        'accent-success': 'hsl(var(--accent-success))',
        'accent-warning': 'hsl(var(--accent-warning))',
        'accent-error': 'hsl(var(--accent-error))',
        
        // State colors (using accent colors)
        destructive: {
          DEFAULT: 'hsl(var(--accent-error))',
          foreground: 'hsl(var(--text-inverse))',
        },
        success: {
          DEFAULT: 'hsl(var(--accent-success))',
          foreground: 'hsl(var(--text-inverse))',
        },
        
        // Legacy shadcn/ui support (mapped to theme variables)
        background: 'hsl(var(--bg-page))',
        foreground: 'hsl(var(--text-primary))',
        card: 'hsl(var(--bg-card))',
        'card-foreground': 'hsl(var(--text-primary))',
        popover: 'hsl(var(--bg-elevated))',
        'popover-foreground': 'hsl(var(--text-primary))',
        primary: 'hsl(var(--accent-primary))',
        'primary-foreground': 'hsl(var(--text-inverse))',
        secondary: 'hsl(var(--bg-surface))',
        'secondary-foreground': 'hsl(var(--text-primary))',
        muted: 'hsl(var(--bg-surface))',
        'muted-foreground': 'hsl(var(--text-muted))',
        accent: 'hsl(var(--accent-primary))',
        'accent-foreground': 'hsl(var(--text-inverse))',
        border: 'hsl(var(--border-subtle))',
        input: 'hsl(var(--bg-surface))',
        ring: 'hsl(var(--accent-primary))',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

