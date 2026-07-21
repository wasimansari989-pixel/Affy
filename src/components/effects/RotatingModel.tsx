'use client'

import { useMemo } from 'react'

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
  '/assets/img-1.jpg',
]

export default function RotatingModel() {
  const n = images.length

  // Calculate exact 3D radius translateZ in em units: - (0.5 * width + 0.5em) / tan(180deg / N)
  const tzEm = useMemo(() => {
    const wEm = 12
    const halfAngle = Math.PI / n
    const rEm = (0.5 * wEm + 0.5) / Math.tan(halfAngle)
    return -rEm
  }, [n])

  return (
    <div className="scene-3d my-4">
      <div className="a3d-ring" style={{ '--n': n } as React.CSSProperties}>
        {images.map((src, i) => {
          const angleDeg = (i * 360) / n
          return (
            <img
              key={i}
              className="card-3d"
              src={src}
              alt={`AAFY Product ${i + 1}`}
              loading="lazy"
              decoding="async"
              style={
                {
                  '--i': i,
                  '--w': '12em',
                  transform: `rotateY(${angleDeg}deg) translateZ(${tzEm}em)`,
                } as React.CSSProperties
              }
            />
          )
        })}
      </div>
    </div>
  )
}
