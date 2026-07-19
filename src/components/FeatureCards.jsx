import { motion } from 'framer-motion'
import { Leaf, Droplets, Shield, Sparkles, Star, Flower2 } from 'lucide-react'

const features = [
  { icon: Leaf, title: 'Natural Ingredients', desc: 'Pure botanical extracts and natural compounds for gentle, effective skincare.' },
  { icon: Droplets, title: 'Deep Hydration', desc: 'Advanced moisture-lock formula for 24-hour supple, radiant skin.' },
  { icon: Shield, title: 'Skin Barrier', desc: 'Strengthens your skin natural barrier against environmental stressors.' },
  { icon: Sparkles, title: 'Radiant Glow', desc: 'Vitamin-rich formulation that enhances your natural luminosity.' },
  { icon: Flower2, title: 'Safe Formula', desc: 'Dermatologist tested. No parabens, sulfates, or artificial colors.' },
  { icon: Star, title: 'Premium Quality', desc: 'Lightweight, non-greasy texture that absorbs instantly for a silky finish.' },
]

export default function FeatureCards() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-cream/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase text-luxury-gold/60"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}
          >
            Why Choose AAFY
          </span>
          <h2
            className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-[0.9] tracking-[-0.02em] text-luxury-brown mt-4"
          >
            The AAFY Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 md:p-8 group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:shadow-lg"
                style={{
                  background: 'rgba(197,168,128,0.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
                }}
              >
                <feature.icon
                  size={22}
                  className="text-luxury-gold transition-all duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="font-display text-xl text-luxury-brown mb-3">{feature.title}</h3>

              <p
                className="text-sm text-luxury-gray/60 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
              >
                {feature.desc}
              </p>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(197,168,128,0.05) 0%, transparent 50%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
