'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-cream/20 to-transparent" />

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
            Our Story
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Stats Cards (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { num: '100%', label: 'Natural Ingredients' },
              { num: '10K+', label: 'Happy Customers' },
              { num: '4.9/5', label: 'Average Rating' },
              { num: '2025', label: 'Year Founded' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-6 md:p-8 text-center">
                <span className="font-display text-2xl md:text-3xl text-gold block mb-1">
                  {stat.num}
                </span>
                <span className="text-[0.55rem] tracking-[0.12em] uppercase text-luxury-brown/80 font-medium"
                      style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Story Card (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="glass-strong rounded-[40px] p-8 md:p-12 relative overflow-hidden">
              <div className="glass-shine absolute inset-0 rounded-[40px]" />
              <div className="relative z-10">
                <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1] tracking-[-0.02em] text-luxury-brown mb-6">
                  The Art of Natural Beauty
                </h2>
                <div className="space-y-4 text-luxury-brown/60 leading-relaxed"
                     style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.8 }}>
                  <p>
                    At AAFY, we believe true beauty begins with nature. Our journey started with a simple vision — 
                    to create skincare that harnesses the purest natural ingredients, backed by modern science.
                  </p>
                  <p>
                    Every jar of AAFY Natural Beauty Cream is crafted with meticulous attention to detail, 
                    combining traditional wisdom with advanced formulation techniques.
                  </p>
                  <p>
                    We source only the finest botanical ingredients, ensuring each component delivers 
                    maximum benefit while respecting your skin natural balance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
