'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    let mouseX = -200
    let mouseY = -200
    let currentX = -200
    let currentY = -200
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08
      currentY += (mouseY - currentY) * 0.08
      glow.style.transform = `translate(${currentX - 200}px, ${currentY - 200}px)`
      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[9998]"
      style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(197,168,128,0.06) 0%, transparent 60%)',
        borderRadius: '50%',
        willChange: 'transform',
      }}
    />
  )
}
