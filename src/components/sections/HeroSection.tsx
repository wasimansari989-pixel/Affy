'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const panelRef = useRef<HTMLDivElement>(null)
  const productRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const panel = panelRef.current
    const product = productRef.current
    if (!panel) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = panel.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      panel.style.setProperty('--rx', `${y * -4}deg`)
      panel.style.setProperty('--ry', `${x * 4}deg`)
      panel.style.setProperty('--gx', `${x * 50 + 50}%`)
      panel.style.setProperty('--gy', `${y * 50 + 50}%`)

      if (product) {
        product.style.setProperty('--prx', `${y * -8}deg`)
        product.style.setProperty('--pry', `${x * 8}deg`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[90vw] md:w-[700px] h-[90vw] md:h-[700px] rounded-full"
             style={{
               background: 'radial-gradient(circle, rgba(197,168,128,0.06) 0%, transparent 50%)',
             }} />
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-block text-[0.65rem] tracking-[0.25em] uppercase mb-6 font-bold text-luxury-brown"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}
          >
            Premium Natural Skincare
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-display text-[clamp(2rem,7vw,4.5rem)] leading-[0.92] tracking-[-0.03em]"
          >
            <span className="block text-luxury-brown">AAFY</span>
            <span className="block text-gold-shiny mt-1">Natural</span>
            <span className="block text-luxury-brown mt-1">Beauty Cream</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-sm md:text-base text-luxury-brown/50 mt-5 max-w-md mx-auto lg:mx-0 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
          >
            Crafted with nature. Designed for confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-wrap items-center gap-4 mt-8 justify-center lg:justify-start"
          >
            <button className="glass-btn-primary px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-[500] relative overflow-hidden group"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
            <button onClick={() => scrollTo('about')}
                    className="glass-btn px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-[500] relative overflow-hidden group"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="relative z-10">Discover More</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex items-center gap-6 mt-8 justify-center lg:justify-start"
          >
            {['Natural', 'Cruelty-Free', 'Dermatologist Tested'].map((tag) => (
              <span key={tag}
                    className="text-[0.5rem] tracking-[0.15em] uppercase text-luxury-brown/30"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}>
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          ref={productRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative flex items-center justify-center w-full"
          style={{
            perspective: '1000px',
            transform: 'rotateX(var(--prx, 0deg)) rotateY(var(--pry, 0deg))',
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="relative" style={{ width: 'min(576px, 90vw)', height: 'min(720px, 114vw)' }}>
            <div className="absolute inset-0 rounded-full"
                 style={{
                   background: 'radial-gradient(circle at center, rgba(197,168,128,0.15) 0%, transparent 60%)',
                   transform: 'scale(0.9)',
                 }} />

            <div className="absolute bottom-4 left-[15%] right-[15%] h-12"
                 style={{
                   background: 'radial-gradient(ellipse at center, rgba(197,168,128,0.15) 0%, transparent 70%)',
                   filter: 'blur(12px)',
                 }} />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full"
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="absolute inset-0 rounded-[30px] overflow-hidden backface-hidden"
                  style={{
                    transform: 'rotateY(0deg)',
                    background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                    boxShadow: '0 30px 80px rgba(197,168,128,0.15), 0 0 60px rgba(197,168,128,0.05), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  <img src="/assets/img-1.jpg" alt="AAFY Product Showcase 1"
                       decoding="async"
                       className="w-full h-full object-cover relative z-10"
                       style={{ filter: 'brightness(1.05) contrast(1.02)' }} />
                  <div className="absolute inset-0 rounded-[30px]"
                       style={{
                         background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(197,168,128,0.08) 100%)',
                       }} />
                  <div className="absolute top-2 left-[20%] right-[20%] h-[1px]"
                       style={{
                         background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                       }} />
                </div>

                <div
                  className="absolute inset-0 rounded-[30px] overflow-hidden backface-hidden"
                  style={{
                    transform: 'rotateY(180deg)',
                    background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                    boxShadow: '0 30px 80px rgba(197,168,128,0.15), 0 0 60px rgba(197,168,128,0.05), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}
                >
                  <img src="/assets/img-2.png" alt="AAFY Product Showcase 2"
                       decoding="async"
                       className="w-full h-full object-cover relative z-10"
                       style={{ filter: 'brightness(1.05) contrast(1.02)' }} />
                  <div className="absolute inset-0 rounded-[30px]"
                       style={{
                         background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(197,168,128,0.08) 100%)',
                       }} />
                  <div className="absolute top-2 left-[20%] right-[20%] h-[1px]"
                       style={{
                         background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                       }} />
                </div>
              </motion.div>
            </motion.div>

            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(197,168,128,0.6) 0%, transparent 100%)',
                  boxShadow: '0 0 4px rgba(197,168,128,0.3)',
                }}
                animate={{
                  x: [0, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 60, 0],
                  y: [0, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 60, 0],
                  opacity: [0, 0.8, 0, 0],
                  scale: [0, 1, 0.5, 0],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  delay: i * 0.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-9 rounded-full border border-luxury-gold/25 flex items-start justify-center p-1">
          <div className="w-1 h-2.5 rounded-full bg-luxury-gold/40"
               style={{ animation: 'pulse-soft 2s ease-in-out infinite' }} />
        </div>
      </motion.button>
    </section>
  )
}
