'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import SmoothScroll from '@/components/layout/SmoothScroll'

// Dynamic imports for heavy background effects (client-side only rendering to unblock main thread)
const BeachBackground = dynamic(() => import('@/components/effects/BeachBackground'), { ssr: false })
const Particles = dynamic(() => import('@/components/effects/Particles'), { ssr: false })
const CursorGlow = dynamic(() => import('@/components/effects/CursorGlow'), { ssr: false })

// Dynamic imports for below-the-fold sections (code splitting into separate lazy chunks)
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'))
const IngredientsSection = dynamic(() => import('@/components/sections/IngredientsSection'))
const ProductSection = dynamic(() => import('@/components/sections/ProductSection'))
const BenefitsSection = dynamic(() => import('@/components/sections/BenefitsSection'))
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'))
const Footer = dynamic(() => import('@/components/layout/Footer'))

export default function Home() {
  return (
    <SmoothScroll>
      <BeachBackground />
      <Particles />
      <CursorGlow />
      <div className="noise-overlay" />
      <div className="vignette" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <IngredientsSection />
        <ProductSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
