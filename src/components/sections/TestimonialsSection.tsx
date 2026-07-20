'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: "I've been using AAFY for three weeks now and my skin feels noticeably softer and more hydrated. The natural glow is real and I have received so many compliments!",
    initials: 'PS',
    gradient: 'linear-gradient(135deg, #D4A093, #C5A880)',
  },
  {
    name: 'Sana Malik',
    location: 'Delhi',
    rating: 5,
    text: 'Finally found a cream that works perfectly for my sensitive skin. No irritation whatsoever, just a beautiful, even complexion. This is now a staple in my routine.',
    initials: 'SM',
    gradient: 'linear-gradient(135deg, #C5A880, #DFCFB8)',
  },
  {
    name: 'Anjali Rao',
    location: 'Bangalore',
    rating: 5,
    text: 'The packaging is absolutely stunning and the formula delivers even more. My dark spots have visibly lightened and my skin feels incredibly smooth.',
    initials: 'AR',
    gradient: 'linear-gradient(135deg, #DFCFB8, #D4A093)',
  },
  {
    name: 'Meera Kapoor',
    location: 'Pune',
    rating: 5,
    text: 'This is hands down the best skincare investment I have made. My skin feels like silk every morning and the radiance boost is remarkable.',
    initials: 'MK',
    gradient: 'linear-gradient(135deg, #C5A880, #937854)',
  },
  {
    name: 'Ritu Verma',
    location: 'Jaipur',
    rating: 5,
    text: 'I was skeptical at first, but after a month of use, the difference is undeniable. My skin looks brighter, feels firmer, and has an even tone throughout.',
    initials: 'RV',
    gradient: 'linear-gradient(135deg, #937854, #C5A880)',
  },
  {
    name: 'Neha Patel',
    location: 'Ahmedabad',
    rating: 5,
    text: 'The lightweight texture absorbs so quickly and leaves no greasy residue. My skin stays hydrated all day long. Absolutely love this product!',
    initials: 'NP',
    gradient: 'linear-gradient(135deg, #DFCFB8, #C5A880)',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-cream/10 to-transparent" />

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
            Testimonials
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-luxury-brown mt-3">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 md:p-8 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 glass-shine" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-luxury-brown font-display text-sm font-semibold shadow-sm"
                    style={{ background: t.gradient }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-[600] text-luxury-brown" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.name}
                    </p>
                    <p className="text-xs text-luxury-brown/70 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={13} className="fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                <p className="text-sm text-luxury-brown/80 font-medium leading-relaxed italic"
                   style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-luxury-gold text-luxury-gold" />
          ))}
          <span className="text-sm text-luxury-brown/80 font-semibold ml-2 tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
            4.9 / 5.0 Average Rating
          </span>
        </motion.div>
      </div>
    </section>
  )
}
