'use client'

import { useEffect, useRef } from 'react'

interface Drop {
  x: number
  y: number
  vy: number
  length: number
  width: number
  opacity: number
  wobble: number
  wobbleSpeed: number
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
  speed: number
}

export default function RaindropsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const cvs: HTMLCanvasElement = canvas

    const ctx2d = cvs.getContext('2d')
    if (!ctx2d) return
    const ctx: CanvasRenderingContext2D = ctx2d

    let animationId: number

    const drops: Drop[] = []
    const ripples: Ripple[] = []
    const DROP_COUNT = 80

    function resize() {
      cvs.width = window.innerWidth
      cvs.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < DROP_COUNT; i++) {
      drops.push({
        x: Math.random() * cvs.width,
        y: Math.random() * cvs.height * -1,
        vy: 2 + Math.random() * 4,
        length: 15 + Math.random() * 30,
        width: 0.5 + Math.random() * 1,
        opacity: 0.15 + Math.random() * 0.25,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.5 + Math.random() * 1.5,
      })
    }

    function addDrop() {
      drops.push({
        x: Math.random() * cvs.width,
        y: -30,
        vy: 2 + Math.random() * 4,
        length: 15 + Math.random() * 30,
        width: 0.5 + Math.random() * 1,
        opacity: 0.15 + Math.random() * 0.25,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.5 + Math.random() * 1.5,
      })
    }

    function addRipple(x: number, y: number) {
      ripples.push({
        x,
        y,
        radius: 2,
        maxRadius: 8 + Math.random() * 12,
        opacity: 0.3,
        speed: 0.3 + Math.random() * 0.5,
      })
    }

    let frameCount = 0

    function draw() {
      ctx.clearRect(0, 0, cvs.width, cvs.height)

      frameCount++

      if (frameCount % 3 === 0 && drops.length < 150) {
        addDrop()
      }

      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i]
        d.wobble += d.wobbleSpeed * 0.02
        d.x += Math.sin(d.wobble) * 0.3
        d.y += d.vy

        if (d.y > cvs.height + 20) {
          drops.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x + Math.sin(d.wobble) * 0.5, d.y + d.length)
        ctx.strokeStyle = `rgba(255,255,255,${d.opacity})`
        ctx.lineWidth = d.width
        ctx.lineCap = 'round'
        ctx.stroke()

        if (d.y > 0 && Math.random() < 0.002) {
          addRipple(d.x + Math.sin(d.wobble) * 0.5, d.y + d.length)
        }
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.radius += r.speed
        r.opacity *= 0.97

        if (r.opacity < 0.01) {
          ripples.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.ellipse(r.x, r.y, r.radius, r.radius * 0.4, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255,255,255,${r.opacity * 0.5})`
        ctx.lineWidth = 0.5
        ctx.stroke()

        ctx.beginPath()
        ctx.ellipse(r.x - 1, r.y - 1, r.radius * 0.7, r.radius * 0.3, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255,255,255,${r.opacity * 0.3})`
        ctx.lineWidth = 0.3
        ctx.stroke()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 15,
        mixBlendMode: 'screen',
        opacity: 0.7,
      }}
      aria-hidden="true"
    />
  )
}
