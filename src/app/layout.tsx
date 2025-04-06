import type { Metadata, Viewport } from 'next'
import { Toaster } from '@/components/ui/sonner'
import localFont from 'next/font/local'
import './globals.css'

const standerd = localFont(
  {
    src: '../fonts/StanderdVF.ttf',
    variable: '--font-standerd'
  }
)

const ivy = localFont({
  src: [
    {
      path: '../fonts/IvyMode-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../fonts/IvyMode-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/IvyMode-Thin.ttf',
      weight: '100',
      style: 'normal'
    }
  ],
  variable: '--font-ivy'
})

export const metadata: Metadata = {
  title: 'Holding Families',
  description:
    'Support That Holds Your Parenting Together. Empowering families with care & intelligence.',
  metadataBase: new URL('https://clic-landing.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  icons: {
    apple: [
      { url: '/images/opengraph-image.png' },
      {
        url: '/images/opengraph-image.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ],
    other: [
      {
        rel: 'opengraph-image',
        url: '/images/opengraph-image.png'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  keywords: [
    'pilates',
    'reformer',
    'wellness',
    'yoga',
    'meditación',
    'buenos aires',
    'argentina'
  ],
  authors: [{ name: 'Clic Pilates' }],
  verification: {
    google: 'your-google-verification-code' // Add your Google Search Console verification code
  }
}

export const viewport: Viewport = {
  themeColor: '#edece7',
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.ReactElement {
  return (
    <html lang='es'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      </head>
      <body
        className={`${standerd.variable} ${ivy.variable} antialiased font-standerd bg-background`}
      >
        {children}
        <Toaster position='top-center' />
      </body>
    </html>
  )
}
