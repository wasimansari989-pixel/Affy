import { motion } from 'framer-motion'
import { useRef } from 'react'

const productImg = '/assets/affy-product.svg'

export default function ProductShowcase() {
  const containerRef = useRef(null)

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase text-luxury-gold/60"
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.3em' }}
          >
            Our Signature Product
          </span>
          <h2
            className="font-display text-[clamp(2rem,6vw,3.5rem)] leading-[0.9] tracking-[-0.02em] text-luxury-brown mt-4"
          >
            Natural Beauty Cream
          </h2>
        </motion.div>

        <div ref={containerRef} className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="relative" style={{ width: 'min(350px, 80vw)', height: 'min(450px, 100vw)' }}>
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, rgba(197,168,128,0.15) 0%, transparent 60%)',
                  borderRadius: '50%',
                  transform: 'scale(0.8)',
                }}
              />

              <div
                className="absolute bottom-0 left-[10%] right-[10%] h-8"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(197,168,128,0.2) 0%, transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full h-full"
              >
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full"
                  style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="w-full h-full rounded-[30px] relative overflow-hidden"
                    style={{
                      background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                      boxShadow: `
                        0 20px 60px rgba(197,168,128,0.15),
                        0 0 40px rgba(197,168,128,0.05),
                        inset 0 1px 0 rgba(255,255,255,0.3)
                      `,
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 40%, transparent 60%, rgba(197,168,128,0.05) 100%)',
                        borderRadius: '30px',
                      }}
                    />

                    <motion.img
                      src={productImg}
                      alt="AAFY Natural Beauty Cream"
                      className="w-full h-full object-contain p-6 relative z-10 drop-shadow-xl"
                      style={{
                        filter: 'drop-shadow(0 10px 30px rgba(197,168,128,0.2))',
                      }}
                    />

                    <div
                      className="absolute top-2 left-[15%] right-[15%] h-[1px]"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(197,168,128,0.1) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex-1 space-y-6"
          >
            <div className="glass-card p-8 md:p-10">
              <h3
                className="font-display text-2xl md:text-3xl text-luxury-brown mb-4"
                style={{ lineHeight: 1.2 }}
              >
                The Perfect Blend of Nature & Science
              </h3>
              <p
                className="text-luxury-gray/70 leading-relaxed mb-6"
                style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}
              >
                Our signature formula combines the finest natural ingredients with advanced
                skincare science. Enriched with Aloe Vera, Vitamin E, and a proprietary
                herbal blend, AAFY Natural Beauty Cream delivers visible results.
              </p>

              <div className="space-y-3">
                {[
                  { label: 'Aloe Vera', value: 'Deep Hydration' },
                  { label: 'Vitamin E', value: 'Skin Repair' },
                  { label: 'Herbal Blend', value: 'Natural Glow' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-2 border-b border-luxury-gold/10"
                  >
                    <span
                      className="text-sm text-luxury-brown/60 tracking-wider uppercase"
                      style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm text-luxury-gold font-[500]"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
