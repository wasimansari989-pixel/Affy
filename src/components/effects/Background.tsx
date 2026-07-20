'use client'

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden" style={{ background: '#e5e5ea' }}>
      <div
        className="absolute rounded-full"
        style={{
          width: '50vw', height: '50vw', top: '-10%', left: '-10%',
          background: '#ff2a5f',
          filter: 'blur(90px)', opacity: 0.7,
          animation: 'blobFloat 20s infinite alternate cubic-bezier(0.45,0.05,0.55,0.95)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '45vw', height: '45vw', bottom: '-10%', right: '-10%',
          background: '#007aff',
          filter: 'blur(90px)', opacity: 0.7,
          animation: 'blobFloat 20s infinite -5s alternate cubic-bezier(0.45,0.05,0.55,0.95)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: '35vw', height: '35vw', top: '30%', left: '40%',
          background: '#ff9500',
          filter: 'blur(90px)', opacity: 0.7,
          animation: 'blobFloat 20s infinite -10s alternate cubic-bezier(0.45,0.05,0.55,0.95)',
        }}
      />
      <style>{`
        @keyframes blobFloat {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(5%, 10%) scale(1.05) rotate(5deg); }
          66% { transform: translate(-5%, 5%) scale(0.95) rotate(-5deg); }
          100% { transform: translate(0, -10%) scale(1.1) rotate(0deg); }
        }
      `}</style>
    </div>
  )
}
