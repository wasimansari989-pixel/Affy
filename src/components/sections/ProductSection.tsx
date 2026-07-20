'use client'

import { motion } from 'framer-motion'
import { Check, Star, ShoppingBag } from 'lucide-react'
import RotatingModel from '@/components/effects/RotatingModel'

const features = [
  'Deep hydration for all skin types',
  'Lightweight, non-greasy formula',
  'Natural botanical extracts',
  'Suitable for daily use',
  'Dermatologist tested',
]

export default function ProductSection() {
  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-cream/15 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[0.65rem] tracking-[0.25em] uppercase font-bold text-luxury-brown"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}>
            Our Product
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center justify-center w-full"
          >
            <RotatingModel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="glass-strong rounded-[32px] p-8 md:p-10 relative overflow-hidden">
              <div className="glass-shine absolute inset-0 rounded-[32px]" />
              <div className="relative z-10">
                <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-luxury-brown mb-2">
                  AAFY Natural Beauty Cream
                </h2>

                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />
                  ))}
                  <span className="text-sm text-luxury-brown/40 ml-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    4.9 (2,348 reviews)
                  </span>
                </div>

                <p className="text-sm text-luxury-brown/60 leading-relaxed mb-6"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                  Our signature formula combines the finest natural ingredients with advanced skincare
                  science for visible results. Enriched with Vitamin E, Aloe Vera, and a proprietary herbal blend.
                </p>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-display text-3xl text-luxury-brown">₹699</span>
                  <span className="text-sm text-luxury-brown/30 line-through" style={{ fontFamily: 'Inter, sans-serif' }}>
                    ₹999
                  </span>
                  <span className="text-[0.55rem] tracking-[0.12em] uppercase text-luxury-gold font-[500] px-2 py-1 rounded-full"
                    style={{
                      background: 'rgba(197,168,128,0.1)',
                      border: '1px solid rgba(197,168,128,0.2)',
                      fontFamily: 'Inter, sans-serif',
                    }}>
                    Save 30%
                  </span>
                </div>

                <div className="space-y-2.5 mb-6">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(197,168,128,0.1)' }}>
                        <Check size={10} className="text-luxury-gold" />
                      </div>
                      <span className="text-sm text-luxury-brown/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-btn-primary w-full py-4 rounded-full text-sm tracking-[0.15em] uppercase font-[500] relative overflow-hidden group"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <ShoppingBag size={16} />
                    Add to Bag
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
