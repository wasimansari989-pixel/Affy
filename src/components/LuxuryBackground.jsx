import { useRef, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

const PARTICLE_COUNT = 30

export default function LuxuryBackground() {
  const particles = useMemo(() =>
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      dx: (Math.random() - 0.5) * 60,
      dy: (Math.random() - 0.5) * 60,
    })),
  [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDF8F4] via-[#FAF0E6] to-[#F5EDE0]" />

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(197,168,128,0.08) 0%, transparent 100%),
            radial-gradient(ellipse 60% 40% at 30% 70%, rgba(212,160,147,0.05) 0%, transparent 100%),
            radial-gradient(ellipse 50% 50% at 70% 80%, rgba(197,168,128,0.06) 0%, transparent 100%)
          `,
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(255,255,255,0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 90%, rgba(197,168,128,0.15) 0%, transparent 40%)
          `,
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197,168,128,0.04) 0%, transparent 70%)',
          top: '-20%',
          right: '-10%',
        }}
        animate={{
          x: [0, -30, 20, -10, 0],
          y: [0, 20, -30, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,160,147,0.03) 0%, transparent 70%)',
          bottom: '-10%',
          left: '-10%',
        }}
        animate={{
          x: [0, 20, -20, 10, 0],
          y: [0, -15, 25, -10, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="absolute inset-0" style={{ opacity: 0.04 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(197,168,128,0.03) 2px,
                rgba(197,168,128,0.03) 3px
              )
            `,
            backgroundSize: '100% 3px',
          }}
        />
      </div>

      <div className="absolute inset-0" style={{ overflow: 'hidden' }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background: `radial-gradient(circle, rgba(197,168,128,0.6) 0%, transparent 100%)`,
              boxShadow: `0 0 ${p.size * 2}px rgba(197,168,128,0.3)`,
            }}
            animate={{
              x: [0, p.dx, -p.dx / 2, p.dx / 2, 0],
              y: [0, p.dy, -p.dy / 2, p.dy / 2, 0],
              opacity: [0.2, 0.6, 0.3, 0.7, 0.2],
              scale: [1, 1.2, 0.9, 1.1, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="vignette" />
      <div className="noise-overlay" />
    </div>
  )
}
