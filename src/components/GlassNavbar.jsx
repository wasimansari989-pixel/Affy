import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Ingredients', path: '/ingredients' },
  { name: 'Benefits', path: '/benefits' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
]

export default function GlassNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? 'top-2' : 'top-4'
        }`}
        style={{ width: 'calc(100% - 32px)', maxWidth: '1200px' }}
      >
        <div
          className="glass-nav rounded-full px-6 py-3 flex items-center justify-between"
          style={{
            background: scrolled
              ? 'rgba(255, 255, 255, 0.25)'
              : 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(30px) saturate(1.6) brightness(1.05)',
          }}
        >
          <Link to="/" className="flex items-center gap-2">
            <span
              className="font-display text-xl tracking-wider"
              style={{
                background: 'linear-gradient(135deg, #C5A880 0%, #DFCFB8 50%, #C5A880 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AAFY
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative px-4 py-2 text-sm tracking-[0.08em] uppercase font-[500] text-luxury-brown/70 hover:text-luxury-brown transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em' }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-luxury-gold/60 rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-luxury-brown/70 hover:text-luxury-brown transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed top-[72px] left-4 right-4 z-40 md:hidden"
          >
            <div
              className="glass rounded-2xl p-4 space-y-1"
              style={{ background: 'rgba(253, 248, 244, 0.95)', backdropFilter: 'blur(40px)' }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-4 py-3 text-sm tracking-[0.08em] uppercase rounded-xl hover:bg-luxury-gold/10 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
