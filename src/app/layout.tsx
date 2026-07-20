import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AAFY Natural Beauty Cream | Premium Luxury Skincare',
  description: 'Reveal your natural beauty with AAFY Natural Beauty Cream. Discover our premium, high-end herbal formula for deep hydration, skin brightening, acne care, and anti-dullness.',
  keywords: 'AAFY, luxury skincare, beauty cream, skin brightening, premium skincare, natural beauty cream',
  openGraph: {
    title: 'AAFY Natural Beauty Cream | Premium Luxury Skincare',
    description: 'Premium Natural Beauty Cream for healthy, glowing skin.',
    images: ['/assets/affy-product.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
