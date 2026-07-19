import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return

    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      glow.style.transform = `translate(${x - 150}px, ${y - 150}px)`
    }

    const handleMouseLeave = () => {
      glow.style.opacity = '0'
    }

    const handleMouseEnter = () => {
      glow.style.opacity = '1'
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-[9998] transition-opacity duration-500"
      style={{
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(197,168,128,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        transform: 'translate(-150px, -150px)',
        willChange: 'transform',
        opacity: 0,
      }}
    />
  )
}
