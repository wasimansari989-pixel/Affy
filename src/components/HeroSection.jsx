import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const panelRef = useRef(null)

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const handleMouseMove = (e) => {
      const rect = panel.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      panel.style.setProperty('--rotate-x', `${y * -6}deg`)
      panel.style.setProperty('--rotate-y', `${x * 6}deg`)
      panel.style.setProperty('--glow-x', `${x * 50 + 50}%`)
      panel.style.setProperty('--glow-y', `${y * 50 + 50}%`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="absolute"
          style={{
            width: '80vw',
            height: '80vw',
            maxWidth: '800px',
            maxHeight: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(197,168,128,0.06) 0%, transparent 60%)',
          }}
        />
      </div>

      <motion.div
        ref={panelRef}
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
        className="relative w-full max-w-[900px]"
        style={{
          perspective: '1000px',
        }}
      >
        <div
          className="glass-strong relative overflow-hidden"
          style={{
            borderRadius: '50px',
            transform: 'rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))',
            transition: 'transform 0.1s ease-out',
            padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(255,255,255,0.15) 0%, transparent 50%)`,
              transition: 'background 0.1s ease-out',
            }}
          />

          <div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 80%, transparent 100%)',
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(197,168,128,0.3) 20%, rgba(197,168,128,0.5) 50%, rgba(197,168,128,0.3) 80%, transparent 100%)',
            }}
          />

          <div className="glass-shine absolute inset-0 pointer-events-none rounded-[50px]" />

          <div className="relative z-10 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span
                className="inline-block text-xs tracking-[0.25em] uppercase mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  color: 'rgba(197,168,128,0.8)',
                  letterSpacing: '0.3em',
                }}
              >
                Premium Natural Skincare
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="font-display text-[clamp(2.5rem,10vw,5.5rem)] leading-[0.85] tracking-[-0.03em] text-luxury-brown"
              style={{ margin: 0 }}
            >
              <span className="block">Reveal Your</span>
              <span
                className="block text-luxury-gold"
                style={{
                  background: 'linear-gradient(135deg, #C5A880 0%, #DFCFB8 30%, #C5A880 60%, #937854 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Natural Glow
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
              className="space-y-2"
            >
              <p
                className="text-sm md:text-base tracking-[0.15em] uppercase text-luxury-brown/50"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.2em',
                  lineHeight: 2,
                }}
              >
                Pure ingredients. Luxury skincare. Visible results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <button className="glass-btn glass-btn-primary px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-[500]">
                Shop Now
              </button>
              <button className="glass-btn px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-[500]">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex items-center justify-center gap-6 pt-4"
            >
              {['Natural', 'Cruelty-Free', 'Dermatologist Tested'].map((tag) => (
                <span
                  key={tag}
                  className="text-[0.6rem] tracking-[0.15em] uppercase text-luxury-brown/40"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-6 h-10 rounded-full border border-luxury-gold/30 flex items-start justify-center p-1.5"
        >
          <div
            className="w-1 h-2.5 rounded-full bg-luxury-gold/50"
            style={{ animation: 'pulse-soft 2s ease-in-out infinite' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
