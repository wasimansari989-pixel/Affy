'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Heart, ShoppingBag } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Ingredients', href: '#ingredients' },
  { name: 'Products', href: '#products' },
  { name: 'Benefits', href: '#benefits' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    setIsOpen(false)
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'top-3' : 'top-4'
        }`}
        style={{ padding: '0 16px' }}
      >
          <div
            className="mx-auto flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 "
            style={{
              maxWidth: scrolled ? '1100px' : '1300px',
              background: scrolled
                ? 'rgba(253, 248, 244, 0.85)'
                : 'rgba(255, 255, 255, 0.06)',
              backdropFilter: `blur(${scrolled ? '40px' : '30px'}) saturate(1.4) brightness(1.1)`,
              WebkitBackdropFilter: `blur(${scrolled ? '40px' : '30px'}) saturate(1.4) brightness(1.1)`,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: scrolled
                ? '0 4px 30px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.3)'
                : 'inset 0 1px 0 rgba(255,255,255,0.3)',
              height: scrolled ? '64px' : '72px',
            }}
          >
          <button onClick={() => scrollTo('#home')} className="flex items-center gap-2 shrink-0">
            <span className="font-display text-xl md:text-2xl tracking-wider text-gold">
              AAFY
            </span>
            <span className="hidden md:block text-[0.55rem] tracking-[0.15em] uppercase text-luxury-brown/40 leading-tight"
                  style={{ fontFamily: 'Inter, sans-serif' }}>
              Natural<br />Beauty Cream
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, 7).map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative px-3 py-2 text-[0.65rem] tracking-[0.12em] uppercase font-[500] transition-colors duration-300 rounded-full ${
                  activeSection === link.href.slice(1)
                    ? 'text-luxury-brown'
                    : 'text-luxury-brown/50 hover:text-luxury-brown'
                }`}
                style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.12em' }}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(197,168,128,0.1)',
                      border: '1px solid rgba(197,168,128,0.2)',
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <button className="p-2.5 text-luxury-brown/40 hover:text-luxury-brown/70 transition-colors rounded-full hover:bg-luxury-gold/5 hidden md:block">
              <Search size={16} />
            </button>
            <button className="p-2.5 text-luxury-brown/40 hover:text-luxury-brown/70 transition-colors rounded-full hover:bg-luxury-gold/5 hidden md:block">
              <Heart size={16} />
            </button>
            <button className="p-2.5 text-luxury-brown/40 hover:text-luxury-brown/70 transition-colors rounded-full hover:bg-luxury-gold/5 relative hidden md:block">
              <ShoppingBag size={16} />
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-luxury-gold text-white text-[8px] flex items-center justify-center font-[600]">
                0
              </span>
            </button>


            <div className="hidden md:block w-[1px] h-6 bg-luxury-gold/15 mx-1" />

            <button className="text-[0.6rem] tracking-[0.12em] uppercase text-luxury-brown/40 font-[500] hidden md:block"
                    style={{ fontFamily: 'Inter, sans-serif' }}>
              EN
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-luxury-brown/50 hover:text-luxury-brown transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed top-[76px] left-4 right-4 z-40 lg:hidden"
          >
            <div
              className="rounded-2xl p-3 space-y-1"
              style={{
                background: 'rgba(253, 248, 244, 0.95)',
                backdropFilter: 'blur(40px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left px-4 py-3 text-sm tracking-[0.08em] uppercase rounded-xl transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-luxury-brown bg-luxury-gold/10'
                      : 'text-luxury-brown/60 hover:text-luxury-brown hover:bg-luxury-gold/5'
                  }`}
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
