import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GrainOverlay } from "@/components/ui/grain-overlay";
import { PerformanceMonitor } from "@/components/monitoring/PerformanceMonitor";
import { StructuredData } from "@/components/seo/StructuredData";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Suspense } from "react";
import "./globals.css";

// High-contrast typography - Inter for San Francisco-like appearance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Enhanced terminal aesthetic - JetBrains Mono for technical UI elements
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://diligencelabs.xyz'),
  title: "Diligence Labs - Strategic Blockchain Advisory & Consultation Services",
  description: "Expert strategic advisory for blockchain projects. Technical consultation, tokenomics design, and implementation guidance for Web3 teams building production-ready solutions.",
  keywords: "blockchain advisory, Web3 consultation, tokenomics design, smart contract architecture, crypto strategy, DeFi consulting, blockchain development guidance",
  authors: [{ name: "Diligence Labs" }],
  creator: "Diligence Labs",
  publisher: "Diligence Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diligencelabs.xyz',
    siteName: 'Diligence Labs',
    title: 'Diligence Labs - Strategic Blockchain Advisory Services',
    description: 'Expert strategic advisory for blockchain projects. Technical consultation, tokenomics design, and implementation guidance for Web3 teams.',
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Diligence Labs - Blockchain Advisory Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diligence Labs - Strategic Blockchain Advisory',
    description: 'Expert strategic advisory for blockchain projects. Technical consultation, tokenomics design, and implementation guidance.',
    creator: '@diligencelabs',
    images: ['/favicon.png'],
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
  },
  alternates: {
    canonical: 'https://diligencelabs.xyz',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${GeistMono.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        <ThemeProvider defaultTheme="dark">
          {/* Performance Monitoring */}
          <PerformanceMonitor />
          
          {/* Texture overlays for visual refinement */}
          <GrainOverlay />
          
          {/* Main Content */}
          <main className="relative z-10">
            <Suspense fallback={<div className="min-h-screen bg-bg-page" />}>
              {children}
            </Suspense>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
