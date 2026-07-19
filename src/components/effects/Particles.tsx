'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  dx: number
  dy: number
}

export default function Particles({ count = 25 }: { count?: number }) {
  const particles: Particle[] = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 15,
        dx: (Math.random() - 0.5) * 80,
        dy: (Math.random() - 0.5) * 80,
      })),
    [count]
  )

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: 'radial-gradient(circle, rgba(197,168,128,0.5) 0%, transparent 100%)',
            boxShadow: `0 0 ${p.size * 3}px rgba(197,168,128,0.15)`,
          }}
          animate={{
            x: [0, p.dx * 0.5, -p.dx * 0.3, p.dx * 0.4, 0],
            y: [0, p.dy * 0.5, -p.dy * 0.3, p.dy * 0.4, 0],
            opacity: [0, 0.4, 0.1, 0.5, 0],
            scale: [0, 1.2, 0.8, 1, 0],
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
  )
}
