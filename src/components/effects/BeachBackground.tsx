'use client'

const WAVES = [
  { duration: 10, delay: 0, width: 50, factor: 1.0, lineX: 96, ctrlY: 22, curveX: 87, curveY: 40, smoothX: 84, opMin: 0.45, opMax: 1.0 },
  { duration: 11, delay: -2, width: 40, factor: 0.9, lineX: 100, ctrlY: 30, curveX: 77, curveY: 50, smoothX: 70, opMin: 0.45, opMax: 1.0 },
  { duration: 14, delay: -4, width: 30, factor: 0.95, lineX: 80, ctrlY: 34, curveX: 92, curveY: 55, smoothX: 44, opMin: 0.45, opMax: 1.0 },
  { duration: 13, delay: -6, width: 45, factor: 0.85, lineX: 93, ctrlY: 20, curveX: 85, curveY: 39, smoothX: 81, opMin: 0.55, opMax: 0.98 },
]

export default function BeachBackground() {
  const keyframes = WAVES.map((w, i) => {
    const max = (100 * w.factor).toFixed(1)
    const min = (70 * w.factor).toFixed(1)
    const pathA = `M0 0 L${w.lineX} 0 Q${max} ${w.ctrlY},${w.curveX} ${w.curveY} T${w.smoothX} 100 L0 100 Z`
    const pathB = `M0 0 L${w.lineX} 0 Q${min} ${w.ctrlY},${w.curveX} ${w.curveY} T${w.smoothX} 100 L0 100 Z`
    return `
      @keyframes wave-path-${i} {
        0%, 100% { d: path("${pathA}"); }
        50% { d: path("${pathB}"); }
      }
      .wave-p-${i} { animation: wave-path-${i} ${w.duration}s infinite ease-in-out; animation-delay: ${w.delay}s; }
      .wave-m-${i} { animation: wave-move ${(w.duration * 0.75).toFixed(1)}s infinite ease-in-out; animation-delay: ${w.delay}s; }
    `
  }).join('\n')

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0" style={{
        background: `linear-gradient(to right,#004a44 0%,#03615b 5.26%,#0a6c66 10.53%,#027c73 15.79%,#028a7f 21.05%,#059c8e 26.32%,#39a997 31.58%,#4aae9f 36.84%,#84b7a2 42.11%,#b5aa8c 47.37%,#dbb89b 52.63%,#edc1a8 57.89%,#fed0b2 63.16%,#fddbc2 68.42%,#fedfc7 73.68%,#fee6d3 78.95%,#fee1d1 94.74%,#fcdecd 100%)`,
      }} />

      {WAVES.map((w, i) => {
        const max = (100 * w.factor).toFixed(1)
        const pathA = `M0 0 L${w.lineX} 0 Q${max} ${w.ctrlY},${w.curveX} ${w.curveY} T${w.smoothX} 100 L0 100 Z`
        return (
          <svg key={i}
            className={`wave-m-${i}`}
            style={{
              position: 'absolute', left: `calc(50% - ${w.width}%)`, width: `${w.width}%`, height: '100%',
              willChange: 'transform',
            }}
            viewBox="0 0 100 100" preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id={`wg${i}`} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(0,0,0,0)" />
                <stop offset="70%" stopColor="rgba(0,0,0,0)" />
                <stop offset="90%" stopColor="rgba(255,255,255,0.44)" />
              </linearGradient>
            </defs>
            <path d={pathA} className={`wave-p-${i}`} fill={`url(#wg${i})`} style={{ willChange: 'd' }} />
          </svg>
        )
      })}

      <style>{`
        ${keyframes}
        @keyframes wave-move {
          0%, 100% { transform: translateX(0%); }
          50% { transform: translateX(50%); }
        }
      `}</style>
    </div>
  )
}
