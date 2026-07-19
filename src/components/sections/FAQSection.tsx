'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is AAFY suitable for all skin types?',
    a: 'Yes! AAFY Natural Beauty Cream is dermatologist-tested and works harmoniously with all skin types — oily, dry, combination, normal, and sensitive. Our gentle formula is designed to be universally compatible.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Most customers notice improved hydration and softness within the first week. For visible changes in skin tone, texture, and brightness, we recommend consistent use for 4-6 weeks.',
  },
  {
    q: 'How do I use AAFY Natural Beauty Cream?',
    a: 'Apply a small amount on your cleansed face and neck. Gently massage in upward circular motions until fully absorbed. Use twice daily — morning and evening — for best results.',
  },
  {
    q: 'What ingredients are in AAFY?',
    a: 'AAFY is formulated with premium ingredients including Vitamin E, Aloe Vera, Shea Butter, Niacinamide, Rose Extract, Green Tea, Jojoba Oil, and Hyaluronic Acid. No harsh sulfates, parabens, or artificial colors.',
  },
  {
    q: 'Is AAFY tested on animals?',
    a: 'Absolutely not. AAFY is 100% cruelty-free. We never test our products or ingredients on animals, and we are committed to ethical, responsible beauty.',
  },
  {
    q: 'What is the shelf life of the product?',
    a: 'AAFY Natural Beauty Cream has a shelf life of 24 months from the date of manufacture. Store in a cool, dry place away from direct sunlight to maintain optimal freshness.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-cream/5 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[0.6rem] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(197,168,128,0.6)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}>
            FAQ
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-luxury-brown mt-3">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: openIndex === index
                  ? 'rgba(255,255,255,0.12)'
                  : 'rgba(255,255,255,0.06)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 md:px-8 py-5 text-left"
              >
                <span className="text-sm md:text-base text-luxury-brown font-[500] leading-snug flex-1"
                      style={{ fontFamily: 'Inter, sans-serif' }}>
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(197,168,128,0.1)' }}
                >
                  <ChevronDown size={14} className="text-luxury-gold" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-5 pt-0">
                      <p className="text-sm text-luxury-brown/50 leading-relaxed"
                         style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
