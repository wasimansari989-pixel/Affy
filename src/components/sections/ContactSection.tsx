'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageCircle, Check, Instagram } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream/10 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[0.6rem] tracking-[0.25em] uppercase"
                style={{ color: 'rgba(197,168,128,0.6)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}>
            Get in Touch
          </span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-luxury-brown mt-3">
            We&apos;d Love to Hear from You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card p-5 md:p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                     style={{ background: 'rgba(197,168,128,0.1)' }}>
                  <Mail size={18} className="text-luxury-gold" />
                </div>
                <div>
                  <p className="text-[0.55rem] tracking-[0.12em] uppercase text-luxury-gold/60 mb-0.5"
                     style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                    Email
                  </p>
                  <p className="text-sm text-luxury-brown font-[500]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    hello@aafy.in
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-card p-5 md:p-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                     style={{ background: 'rgba(197,168,128,0.1)' }}>
                  <MessageCircle size={18} className="text-luxury-gold" />
                </div>
                <div>
                  <p className="text-[0.55rem] tracking-[0.12em] uppercase text-luxury-gold/60 mb-0.5"
                     style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                    WhatsApp
                  </p>
                  <p className="text-sm text-luxury-brown font-[500]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Chat with us
                  </p>
                </div>
              </div>
            </div>
            <a href="https://www.instagram.com/aafy31/" target="_blank" rel="noopener noreferrer"
               className="glass-card p-5 md:p-6 block" style={{ cursor: 'pointer' }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                     style={{ background: 'rgba(197,168,128,0.1)' }}>
                  <Instagram size={18} className="text-luxury-gold" />
                </div>
                <div>
                  <p className="text-[0.55rem] tracking-[0.12em] uppercase text-luxury-gold/60 mb-0.5"
                     style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                    Instagram
                  </p>
                  <p className="text-sm text-luxury-brown font-[500]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    @aafy31
                  </p>
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-strong rounded-[32px] p-6 md:p-8 relative overflow-hidden">
              <div className="glass-shine absolute inset-0 rounded-[32px]" />
              <div className="relative z-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                         style={{ background: 'rgba(197,168,128,0.1)' }}>
                      <Check size={28} className="text-luxury-gold" />
                    </div>
                    <p className="text-lg font-display text-luxury-brown mb-1">Thank You!</p>
                    <p className="text-sm text-luxury-brown/50" style={{ fontFamily: 'Inter, sans-serif' }}>
                      We&apos;ll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[0.55rem] tracking-[0.12em] uppercase text-luxury-gold/60 mb-2 block"
                               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                          Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))}
                          className="w-full bg-white/5 border border-luxury-gold/20 rounded-xl px-4 py-3 text-sm text-luxury-brown placeholder-luxury-brown/25 outline-none focus:border-luxury-gold/40 transition-colors"
                          placeholder="Your name"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          required
                        />
                      </div>
                      <div>
                        <label className="text-[0.55rem] tracking-[0.12em] uppercase text-luxury-gold/60 mb-2 block"
                               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))}
                          className="w-full bg-white/5 border border-luxury-gold/20 rounded-xl px-4 py-3 text-sm text-luxury-brown placeholder-luxury-brown/25 outline-none focus:border-luxury-gold/40 transition-colors"
                          placeholder="your@email.com"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[0.55rem] tracking-[0.12em] uppercase text-luxury-gold/60 mb-2 block"
                             style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
                        Message *
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm(p => ({ ...p, message: e.target.value }))}
                        rows={4}
                        className="w-full bg-white/5 border border-luxury-gold/20 rounded-xl px-4 py-3 text-sm text-luxury-brown placeholder-luxury-brown/25 outline-none focus:border-luxury-gold/40 transition-colors resize-none"
                        placeholder="Your message..."
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        required
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="glass-btn-primary w-full py-4 rounded-full text-sm tracking-[0.15em] uppercase font-[500] relative overflow-hidden group"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Send size={16} />
                        Send Message
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
