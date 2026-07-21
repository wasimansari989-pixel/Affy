'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

const heroImages = [
  '/assets/1.webp',
  '/assets/2.webp',
  '/assets/4.webp',
  '/assets/5.webp',
  '/assets/6.webp',
  '/assets/7.webp',
  '/assets/8.webp',
  '/assets/9.webp',
  '/assets/10.webp',
  '/assets/11.webp',
  '/assets/12.png',
  '/assets/img-1.jpg',
]

export default function HeroSection() {
  const n = heroImages.length

  const tzEm = useMemo(() => {
    const wEm = 13
    const halfAngle = Math.PI / n
    const rEm = (0.5 * wEm + 0.5) / Math.tan(halfAngle)
    return -rEm
  }, [n])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-36 md:pt-44 pb-16 px-4">
      {/* Radial Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div
          className="absolute w-[90vw] md:w-[900px] h-[90vw] md:h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(197,168,128,0.12) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* Top Floating Text (Positioned neatly below header) */}
      <div className="relative z-20 w-full max-w-3xl mx-auto text-center mb-6 mt-2 md:mt-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="inline-block text-[0.65rem] tracking-[0.25em] uppercase mb-3 font-bold text-luxury-brown"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}
        >
          Premium Natural Skincare
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-[clamp(2.2rem,6vw,4.2rem)] leading-[0.95] tracking-[-0.03em] mb-3"
        >
          <span className="inline-block text-luxury-brown mr-3">AAFY</span>
          <span className="inline-block text-gold-shiny mr-3">Natural</span>
          <span className="inline-block text-luxury-brown">Beauty Cream</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-sm md:text-base text-luxury-brown/70 max-w-md mx-auto leading-relaxed mb-6"
          style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}
        >
          Crafted with nature. Designed for confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-5"
        >
          <button
            onClick={() => scrollTo('products')}
            className="glass-btn-primary px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase font-[500] relative overflow-hidden group shadow-md"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="relative z-10">Shop Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="glass-btn px-8 py-3.5 rounded-full text-sm tracking-[0.15em] uppercase font-[500] relative overflow-hidden group shadow-md"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="relative z-10">Discover More</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          {['Natural', 'Cruelty-Free', 'Dermatologist Tested'].map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] tracking-[0.15em] uppercase text-luxury-brown/70 font-semibold"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3D Rotating Images Carousel (Unblocked & Full View) */}
      <div className="relative z-10 w-full max-w-[1400px] mt-2">
        <div className="scene-3d w-full">
          <div className="a3d-ring pointer-events-auto" style={{ '--n': n } as React.CSSProperties}>
            {heroImages.map((src, i) => {
              const angleDeg = (i * 360) / n
              return (
                <img
                  key={i}
                  className="card-3d"
                  src={src}
                  alt={`AAFY Hero Showcase ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  style={
                    {
                      '--i': i,
                      '--w': '13em',
                      transform: `rotateY(${angleDeg}deg) translateZ(${tzEm}em)`,
                    } as React.CSSProperties
                  }
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => scrollTo('about')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-5 h-9 rounded-full border border-luxury-gold/40 flex items-start justify-center p-1 bg-white/10 backdrop-blur-sm">
          <div
            className="w-1 h-2.5 rounded-full bg-luxury-gold"
            style={{ animation: 'pulse-soft 2s ease-in-out infinite' }}
          />
        </div>
      </motion.button>
    </section>
  )
}
