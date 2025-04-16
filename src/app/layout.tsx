import type { Metadata, Viewport } from 'next'
import { Toaster } from '@/components/ui/sonner'
import localFont from 'next/font/local'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'

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
    },
    {
      path: '../fonts/IvyMode-Italic.ttf',
      weight: '400',
      style: 'italic'
    }
  ],
  variable: '--font-ivy'
})

export const metadata: Metadata = {
  title: 'Holding Families',
  description:
    'Support That Holds Your Parenting Together. Empowering families with care & intelligence.',
  metadataBase: new URL('https://holding-families.vercel.app/'),
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
    'parenting',
    'support',
    'families',
    'emotional management',
    'AI-powered solutions',
    'evidence-based strategies',
    'behavioral challenges',
    'communication',
    'connected home environment'
  ],
  authors: [{ name: 'Holding Families' }],
  verification: {
    google: 'your-google-verification-code' // Add your Google Search Console verification code
  }
}

export const viewport: Viewport = {
  themeColor: '#3E482E',
  initialScale: 1,
  maximumScale: 1,
  width: 'device-width'
}

export default async function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): Promise<React.ReactElement> {
  const locale = await getLocale()
  return (
    <html lang={locale}>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      </head>
      <body
        className={`${standerd.variable} ${ivy.variable} antialiased font-standerd bg-background`}
      >
        <NextIntlClientProvider>

          {children}

          <Toaster position='top-center' />

        </NextIntlClientProvider>
      </body>
    </html>
  )
}
