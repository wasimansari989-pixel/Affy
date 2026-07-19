import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: "I've been using AAFY for 3 weeks and my skin feels so much softer and hydrated. The glow is real!",
    initials: 'PS',
    gradient: 'linear-gradient(135deg, #D4A093, #C5A880)',
  },
  {
    name: 'Sana Malik',
    location: 'Delhi',
    rating: 5,
    text: 'Finally found a cream that works for my sensitive skin. No irritation, just a beautiful natural glow.',
    initials: 'SM',
    gradient: 'linear-gradient(135deg, #C5A880, #DFCFB8)',
  },
  {
    name: 'Anjali Rao',
    location: 'Bangalore',
    rating: 5,
    text: 'The packaging is luxurious and the product delivers. My dark spots look significantly lighter.',
    initials: 'AR',
    gradient: 'linear-gradient(135deg, #DFCFB8, #D4A093)',
  },
  {
    name: 'Meera Kapoor',
    location: 'Pune',
    rating: 5,
    text: 'This is the best skincare investment I have made. My skin feels like silk every morning.',
    initials: 'MK',
    gradient: 'linear-gradient(135deg, #C5A880, #937854)',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-cream/20 to-transparent" />

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
            Testimonials
          </span>
          <h2
            className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-[0.9] tracking-[-0.02em] text-luxury-brown mt-4"
          >
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 md:p-8 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-[600]"
                  style={{ background: t.gradient }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-[500] text-luxury-brown"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs text-luxury-gray/50"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {t.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="fill-luxury-gold text-luxury-gold" />
                ))}
              </div>

              <p
                className="text-sm text-luxury-brown/70 leading-relaxed italic"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
              >
                "{t.text}"
              </p>

              <div
                className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(197,168,128,0.3), transparent)',
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 mt-10"
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} size={18} className="fill-luxury-gold text-luxury-gold" />
          ))}
          <span
            className="text-sm text-luxury-brown/60 ml-2 tracking-wider"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            4.9 / 5.0 Average Rating
          </span>
        </motion.div>
      </div>
    </section>
  )
}
