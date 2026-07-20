'use client'

import dynamic from 'next/dynamic'

const BeachBackground = dynamic(() => import('@/components/effects/BeachBackground'), { ssr: false })
const Particles = dynamic(() => import('@/components/effects/Particles'), { ssr: false })
const CursorGlow = dynamic(() => import('@/components/effects/CursorGlow'), { ssr: false })

export default function ClientEffects() {
  return (
    <>
      <BeachBackground />
      <Particles />
      <CursorGlow />
    </>
  )
}
