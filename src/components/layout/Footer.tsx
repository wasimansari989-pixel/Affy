'use client'

import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Facebook, ChevronRight } from 'lucide-react'

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-cream/5 to-luxury-cream/20" />

      <div className="relative z-10 px-4 md:px-8 pt-20 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-center mb-16"
          >
            <span className="text-[0.6rem] tracking-[0.25em] uppercase text-luxury-gold/50"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}>
              Stay Connected
            </span>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-luxury-brown mt-3 leading-[1.1]">
              Join the AAFY Community
            </h2>
            <p className="text-sm text-luxury-brown/50 mt-3 max-w-md mx-auto leading-relaxed"
               style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
              Subscribe to receive exclusive offers, skincare tips, and early access to new products.
            </p>

            <div className="flex items-center justify-center mt-6">
              <div className="flex w-full max-w-md glass rounded-full p-1.5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-5 py-3 text-sm text-luxury-brown placeholder-luxury-brown/30 outline-none"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button className="glass-btn-primary px-6 py-3 rounded-full text-[0.65rem] tracking-[0.15em] uppercase font-[500] whitespace-nowrap flex items-center gap-1"
                        style={{ fontFamily: 'Inter, sans-serif' }}>
                  Subscribe
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          <div className="glass rounded-3xl p-8 md:p-12 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="col-span-2 md:col-span-1">
                <button onClick={() => scrollTo('home')} className="font-display text-2xl tracking-wider text-gold mb-3">
                  AAFY
                </button>
                <p className="text-xs text-luxury-brown/40 leading-relaxed max-w-[200px]"
                   style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                  Premium natural skincare crafted with pure ingredients for your most radiant skin.
                </p>
              </div>

              <div>
                <h3 className="text-[0.55rem] tracking-[0.15em] uppercase text-luxury-gold/60 mb-4 font-[600]"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
                  Quick Links
                </h3>
                <ul className="space-y-2.5">
                  {[
                    { name: 'Home', id: 'home' },
                    { name: 'About', id: 'about' },
                    { name: 'Ingredients', id: 'ingredients' },
                    { name: 'Products', id: 'products' },
                  ].map((item) => (
                    <li key={item.name}>
                      <button onClick={() => scrollTo(item.id)}
                              className="text-sm text-luxury-brown/50 hover:text-luxury-gold transition-colors duration-300"
                              style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[0.55rem] tracking-[0.15em] uppercase text-luxury-gold/60 mb-4 font-[600]"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
                  Support
                </h3>
                <ul className="space-y-2.5">
                  {['FAQ', 'Contact', 'Shipping', 'Returns'].map((item) => (
                    <li key={item}>
                      <button onClick={() => scrollTo(item.toLowerCase() === 'faq' ? 'faq' : 'contact')}
                              className="text-sm text-luxury-brown/50 hover:text-luxury-gold transition-colors duration-300"
                              style={{ fontFamily: 'Inter, sans-serif' }}>
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[0.55rem] tracking-[0.15em] uppercase text-luxury-gold/60 mb-4 font-[600]"
                    style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
                  Connect
                </h3>
                <div className="flex gap-2">
                  {[
                    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aafy31/' },
                    { icon: MessageCircle, label: 'WhatsApp', href: undefined },
                    { icon: Facebook, label: 'Facebook', href: undefined },
                  ].map(({ icon: Icon, label, href }) => {
                    const commonClasses = "w-10 h-10 rounded-full flex items-center justify-center text-luxury-brown/40 hover:text-luxury-gold transition-all duration-300 hover:bg-luxury-gold/5"
                    const commonStyle = {
                      border: '1px solid rgba(197,168,128,0.15)',
                      backdropFilter: 'blur(10px)',
                    }
                    const content = <Icon size={16} />

                    if (href) {
                      return (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                           className={commonClasses} style={commonStyle}>
                          {content}
                        </a>
                      )
                    }

                    return (
                      <button key={label} className={commonClasses} style={commonStyle}>
                        {content}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center border-t border-luxury-gold/10 pt-6">
            <p className="text-[0.6rem] text-luxury-brown/25 tracking-wider"
               style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}>
              &copy; {new Date().getFullYear()} AAFY Natural Beauty Cream. All rights reserved. Made with love in India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
