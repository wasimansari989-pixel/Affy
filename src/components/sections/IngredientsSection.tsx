'use client'

import { motion } from 'framer-motion'

const ingredients = [
  { name: 'Vitamin E', role: 'Deep Nourishment', color: 'rgba(212, 160, 147, 0.15)' },
  { name: 'Aloe Vera', role: 'Soothing Hydration', color: 'rgba(147, 197, 114, 0.15)' },
  { name: 'Shea Butter', role: 'Intense Moisture', color: 'rgba(210, 190, 150, 0.15)' },
  { name: 'Niacinamide', role: 'Even Tone', color: 'rgba(220, 200, 180, 0.15)' },
  { name: 'Rose Extract', role: 'Skin Brightening', color: 'rgba(229, 180, 180, 0.15)' },
  { name: 'Green Tea', role: 'Antioxidant Protection', color: 'rgba(162, 198, 148, 0.15)' },
  { name: 'Jojoba Oil', role: 'Balanced Nourishment', color: 'rgba(210, 190, 150, 0.15)' },
  { name: 'Hyaluronic Acid', role: 'Deep Plumping', color: 'rgba(180, 200, 220, 0.15)' },
  { name: 'Avocado', role: 'Rich Nourishment', color: 'rgba(120, 170, 90, 0.15)' },
]

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="relative py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream/10 via-transparent to-luxury-cream/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[0.6rem] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(197,168,128,0.6)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}>
            Pure Ingredients
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-luxury-brown mt-3">
            What&apos;s Inside
          </h2>
          <p className="text-sm text-luxury-brown/40 mt-3 max-w-md mx-auto"
             style={{ fontFamily: 'Inter, sans-serif' }}>
            Every ingredient is carefully selected for its purity and effectiveness
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ scale: 1.08 }}
              className="group cursor-pointer"
            >
              <div
                className="relative flex items-center justify-center"
                style={{ width: 'clamp(110px, 16vw, 150px)', height: 'clamp(110px, 16vw, 150px)' }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: ingredient.color,
                    border: '1px solid rgba(255,255,255,0.25)',
                    backdropFilter: 'blur(20px) saturate(1.4)',
                    WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 8px 32px rgba(0,0,0,0.04)',
                  }}
                  whileHover={{
                    borderRadius: [
                      '50%',
                      '40% 60% 30% 70% / 50% 60% 40% 50%',
                      '60% 40% 70% 30% / 40% 50% 60% 50%',
                      '50%',
                    ],
                    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />

                <motion.div
                  className="absolute inset-3 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)',
                  }}
                />

                <div className="relative z-10 text-center px-2">
                  <p className="text-sm md:text-base font-[500] text-luxury-brown leading-tight"
                     style={{ fontFamily: 'Inter, sans-serif' }}>
                    {ingredient.name}
                  </p>
                  <p className="text-[0.5rem] md:text-[0.55rem] text-luxury-gold/60 mt-1 tracking-wider uppercase"
                     style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                    {ingredient.role}
                  </p>
                </div>

                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{
                       background: 'radial-gradient(circle, rgba(197,168,128,0.4) 0%, transparent 70%)',
                       filter: 'blur(3px)',
                     }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
