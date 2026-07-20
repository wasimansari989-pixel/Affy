'use client'

import { motion } from 'framer-motion'
import { Leaf, Droplets, Sparkles, Shield, Flower2, Star } from 'lucide-react'

const benefits = [
  { icon: Leaf, title: 'Natural Ingredients', desc: 'Pure botanical extracts and natural compounds for gentle yet effective skincare.' },
  { icon: Droplets, title: 'Deep Hydration', desc: 'Advanced moisture-lock formula for 24-hour supple, radiant skin.' },
  { icon: Sparkles, title: 'Radiant Glow', desc: 'Vitamin-rich formulation that enhances your natural luminosity.' },
  { icon: Shield, title: 'Skin Barrier', desc: 'Strengthens your skin natural barrier against environmental stressors.' },
  { icon: Flower2, title: 'Safe Formula', desc: 'Dermatologist tested. No parabens, sulfates, or artificial colors.' },
  { icon: Star, title: 'Premium Quality', desc: 'Lightweight, non-greasy texture that absorbs instantly for a silky finish.' },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream/5 via-transparent to-luxury-cream/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[0.65rem] tracking-[0.25em] uppercase font-bold text-luxury-brown"
                style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}>
            Why AAFY
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-luxury-brown mt-3">
            The AAFY Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 md:p-8 group cursor-default relative overflow-hidden"
            >
              <div className="absolute inset-0 glass-shine" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:shadow-lg"
                     style={{
                       background: 'rgba(13,10,8,0.06)',
                       border: '1px solid rgba(13,10,8,0.1)',
                       boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
                     }}>
                  <benefit.icon size={22} className="text-luxury-brown transition-all duration-500 group-hover:scale-110" />
                </div>

                <h3 className="font-display text-xl font-bold text-luxury-brown mb-3">{benefit.title}</h3>
                <p className="text-sm text-luxury-brown/80 font-medium leading-relaxed"
                   style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
