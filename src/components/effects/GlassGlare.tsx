'use client'

import { useRef, useCallback } from 'react'

export default function GlassGlare() {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current?.parentElement
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    if (ref.current) {
      ref.current.style.setProperty('--gx', `${x}%`)
      ref.current.style.setProperty('--gy', `${y}%`)
    }
  }, [])

  return (
    <div className="glass-glare" onMouseMove={handleMouseMove} ref={ref}>
      <div />
    </div>
  )
}
