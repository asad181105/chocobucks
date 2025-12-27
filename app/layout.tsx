import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Chocobucks - Premium Artisanal Chocolates',
  description: 'Discover our handcrafted luxury chocolates made with 100% natural ingredients. Premium single-origin cocoa, artisanal truffles, and elegant gift hampers.',
  keywords: 'luxury chocolate, artisanal chocolate, premium chocolate, single-origin cocoa, chocolate truffles, chocolate hampers, gift chocolate',
  authors: [{ name: 'Chocobucks' }],
  creator: 'Chocobucks',
  publisher: 'Chocobucks',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Chocobucks - Premium Artisanal Chocolates',
    description: 'Discover our handcrafted luxury chocolates made with 100% natural ingredients.',
    url: '/',
    siteName: 'Chocobucks',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chocobucks - Premium Artisanal Chocolates',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chocobucks - Premium Artisanal Chocolates',
    description: 'Discover our handcrafted luxury chocolates made with 100% natural ingredients.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
