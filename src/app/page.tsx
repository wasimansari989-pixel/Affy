'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Background from '@/components/effects/Background'
import Particles from '@/components/effects/Particles'
import CursorGlow from '@/components/effects/CursorGlow'
import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import IngredientsSection from '@/components/sections/IngredientsSection'
import ProductSection from '@/components/sections/ProductSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Background />
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
    </>
  )
}
