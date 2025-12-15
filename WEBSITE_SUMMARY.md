# Diligence Labs - Single Page Parallax Website

## Project Overview
A stunning single-page parallax website for Diligence Labs advisory consultant services, built with Next.js 15+, featuring pure black (#000000) design with electric cyan (#00f7ff) and neon purple (#8b5cf6) accents.

## ✅ Completed Sections

### 1. Hero Section (`/src/components/sections/hero-section.tsx`)
- **Full viewport height with parallax effects**
- **Animated floating particles** (20 dynamic particles with varying sizes and speeds)
- **Floating geometric shapes** (rotating squares, scaling circles)
- **Gradient text branding** (DILIGENCE LABS with cyan to purple gradient)
- **Parallax background layers** moving at different speeds
- **Animated scroll indicator**
- **Responsive mobile-first design**

### 2. About/Credibility Section (`/src/components/sections/about-section.tsx`)
- **Statistics grid** (50+ Protocols, $2B+ TVL, 8+ Years Experience, 15+ Launches)
- **Two-column experience layout** (Strategic Leadership & Technical Excellence)
- **Protocol logos section** with blurred placeholder cards
- **Parallax background elements**
- **Staggered animations** on scroll

### 3. Services Grid (`/src/components/sections/services-section.tsx`)
- **6 comprehensive service cards:**
  1. Protocol Architecture 🏗️
  2. Tokenomics Design 🪙
  3. Go-to-Market Strategy 🚀
  4. Risk Management 🛡️
  5. Ecosystem Development 🌐
  6. Institutional Adoption 🏛️
- **Hover effects** with border color changes and subtle scaling
- **Feature lists** for each service
- **Background gradient effects** on hover

### 4. How It Works Timeline (`/src/components/sections/how-it-works-section.tsx`)
- **4-step process timeline:**
  1. Initial Consultation (1-2 weeks)
  2. Strategic Planning (2-3 weeks)
  3. Implementation Support (Ongoing)
  4. Optimization & Scale (Long-term)
- **Alternating left/right layout** for desktop
- **Vertical timeline** with connecting line
- **Parallax offset effects** for background elements
- **Detailed breakdown** of each phase

### 5. Testimonials/Case Studies (`/src/components/sections/testimonials-section.tsx`)
- **Tab-based interface** (Testimonials vs Case Studies)
- **4 client testimonials** with results metrics
- **3 detailed case studies** with challenge/solution/results
- **Smooth tab transitions** with framer-motion
- **Industry categorization** (DeFi, Infrastructure, NFT)

### 6. Booking CTA with Calendly (`/src/components/sections/booking-section.tsx`)
- **3 consultation types:**
  - Strategy Session (60 min)
  - Technical Deep Dive (90 min) - MOST POPULAR
  - Launch Planning (120 min)
- **Embedded Calendly widget** with modal interface
- **Alternative contact methods** (Email, Telegram)
- **Benefits showcase** (Strategic Clarity, Risk Mitigation, Accelerated Growth)

### 7. Footer (`/src/components/sections/footer-section.tsx`)
- **Minimal design** with brand information
- **Social media links** (Twitter, LinkedIn, Telegram, GitHub)
- **Newsletter signup** form
- **Quick navigation** links
- **Contact information** and legal links

## 🎨 Design Features

### Color Scheme
- **Pure Black Background**: #000000 (no gradients, no dark gray)
- **Primary Text**: #ffffff (white)
- **Secondary Text**: #e5e7eb (light gray)
- **Primary Accent**: #00f7ff (electric cyan)
- **Secondary Accent**: #8b5cf6 (neon purple)

### Typography
- **Headings**: Geist Mono (with JetBrains Mono fallback)
- **Body Text**: Inter
- **Font optimization**: Next.js 15 font loading

### Parallax Effects
- **Background layers** move slower than foreground content
- **Particle animations** with varying speeds and opacities
- **Geometric shape rotations** and scaling
- **Scroll-based transformations** using framer-motion

### Smooth Scrolling
- **Lenis integration** for buttery-smooth scrolling
- **Optimized performance** with RAF (requestAnimationFrame)
- **Cross-browser compatibility**

## 🚀 Navigation & UX

### Smart Navigation (`/src/components/layout/navigation.tsx`)
- **Hide/show on scroll** behavior
- **Smooth scroll to sections** functionality
- **Mobile hamburger menu**
- **Active section highlighting**
- **Backdrop blur** effect

### Mobile-First Responsive Design
- **Breakpoint system**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid layouts** adapt from 1 column to 2-3 columns
- **Touch-friendly** button sizes and spacing
- **Optimized typography** scaling

## 🛠️ Technical Implementation

### Built With
- **Next.js 15+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v3.4+** for styling
- **Framer Motion** for animations and parallax
- **Lenis** for smooth scrolling
- **shadcn/ui** components
- **React Calendly** for booking integration

### Performance Optimizations
- **Static generation** (SSG) for fast loading
- **Optimized images** (WebP, AVIF formats)
- **Package optimization** with experimental features
- **Code splitting** and lazy loading
- **Minimal bundle size**

### File Structure
```
src/
├── app/
│   ├── layout.tsx (fonts, metadata, root layout)
│   ├── page.tsx (main page with all sections)
│   └── globals.css (pure black theme, shadcn variables)
├── components/
│   ├── layout/
│   │   └── navigation.tsx (smart navigation)
│   ├── providers/
│   │   └── smooth-scroll-provider.tsx (Lenis integration)
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── services-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── booking-section.tsx
│   │   └── footer-section.tsx
│   └── ui/
│       └── button.tsx (shadcn button component)
├── lib/
│   └── utils.ts (utility functions)
└── types/
    └── index.ts (TypeScript interfaces)
```

## 🎯 Key Features Delivered

✅ **Pure black aesthetic** with no gradients or dark gray
✅ **Parallax effects** on every section
✅ **Smooth scrolling** with Lenis
✅ **Mobile-first responsive** design
✅ **Framer Motion animations** throughout
✅ **Calendly integration** for booking
✅ **Professional content** for Web3/DeFi advisory
✅ **Performance optimized** for fast loading
✅ **Type-safe** TypeScript implementation
✅ **Modern tech stack** with Next.js 15+

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The website is now ready for deployment and can be accessed at `http://localhost:3000` during development.