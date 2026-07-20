'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/assets/1.webp',
  '/assets/2.webp',
  '/assets/4.webp',
  '/assets/5.webp',
  '/assets/6.webp',
  '/assets/7.webp',
  '/assets/8.webp',
  '/assets/9.webp',
  '/assets/10.webp',
  '/assets/11.webp',
  '/assets/12.png',
]

export default function RotatingModel() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(1)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const dragStartX = useRef(0)

  const startAutoRotate = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrent(prev => (prev + 1) % images.length)
    }, 1750)
  }, [])

  useEffect(() => {
    if (!isHovered) startAutoRotate()
    else if (intervalRef.current) clearInterval(intervalRef.current)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isHovered, startAutoRotate])

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }

  const handleDragStart = (_: any, info: { point: { x: number } }) => {
    dragStartX.current = info.point.x
  }

  const handleDragEnd = (_: any, info: { point: { x: number }; offset: { x: number } }) => {
    const diff = info.point.x - dragStartX.current
    if (Math.abs(diff) > 30) {
      const dir = diff < 0 ? 1 : -1
      setDirection(dir)
      setCurrent(prev => (prev + dir + images.length) % images.length)
    }
  }

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ perspective: '1200px' }}
    >
      <div
        className="relative"
        style={{ width: 'min(500px, 80vw)', height: 'min(700px, 100vw)' }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at center, rgba(197,168,128,0.08) 0%, transparent 60%)',
            transform: 'scale(0.85)',
          }}
        />
        <div
          className="absolute bottom-4 left-[10%] right-[10%] h-12"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(197,168,128,0.1) 0%, transparent 70%)',
            filter: 'blur(12px)',
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            initial={{ rotateY: direction > 0 ? 45 : -45, opacity: 0, scale: 0.9 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: direction > 0 ? -45 : 45, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="w-full h-full rounded-[30px] overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.08), 0 0 60px rgba(197,168,128,0.04), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              <img
                src={images[current]}
                alt="Product View"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div
                className="absolute inset-0 rounded-[30px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(197,168,128,0.05) 100%)',
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute top-0 left-0 right-0 mx-auto w-3/5 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
        />
      </div>

      <div className="flex items-center gap-2 mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 24 : 6,
              height: 6,
              background: i === current
                ? '#C5A880'
                : 'rgba(197,168,128,0.25)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
