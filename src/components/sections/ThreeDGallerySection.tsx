'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
  { src: '/assets/1.webp', title: 'Natural Glow' },
  { src: '/assets/2.webp', title: 'Deep Hydration' },
  { src: '/assets/4.webp', title: 'Botanical Blend' },
  { src: '/assets/5.webp', title: 'Silky Texture' },
  { src: '/assets/6.webp', title: 'Radiant Skin' },
  { src: '/assets/7.webp', title: 'Pure Organic' },
  { src: '/assets/8.webp', title: 'Youthful Essence' },
  { src: '/assets/9.webp', title: 'Daily Nourishment' },
  { src: '/assets/10.webp', title: 'Golden Care' },
  { src: '/assets/11.webp', title: 'Luxury Touch' },
  { src: '/assets/12.png', title: 'AAFY Cream' },
  { src: '/assets/img-1.jpg', title: 'Beauty Unveiled' },
]

export default function ThreeDGallerySection() {
  const n = galleryImages.length

  const tzEm = useMemo(() => {
    const wEm = 14
    const halfAngle = Math.PI / n
    const rEm = (0.5 * wEm + 0.5) / Math.tan(halfAngle)
    return -rEm
  }, [n])

  return (
    <section className="relative py-20 overflow-hidden px-4 bg-gradient-to-b from-transparent via-luxury-cream/10 to-transparent">
      <div className="max-w-6xl mx-auto text-center mb-8 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] tracking-[0.25em] uppercase font-bold text-luxury-brown block"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}
        >
          Visual Experience
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[clamp(2rem,4vw,3rem)] text-luxury-brown mt-2"
        >
          3D Product Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm text-luxury-brown/50 mt-2 max-w-md mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Hover over the ring to pause rotation and explore our product showcase.
        </motion.p>
      </div>

      <div className="scene-3d max-w-7xl mx-auto py-10">
        <div className="a3d-ring" style={{ '--n': n } as React.CSSProperties}>
          {galleryImages.map((item, i) => {
            const angleDeg = (i * 360) / n
            return (
              <img
                key={i}
                className="card-3d"
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                style={
                  {
                    '--i': i,
                    '--w': '14em',
                    transform: `rotateY(${angleDeg}deg) translateZ(${tzEm}em)`,
                  } as React.CSSProperties
                }
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
