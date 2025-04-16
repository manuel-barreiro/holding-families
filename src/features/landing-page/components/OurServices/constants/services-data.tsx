import React from 'react'

// Define the structure of a service object
interface Service {
  title: string
  subtitle: string
  description: React.ReactNode
  imageUrl: string
  extraContent?: string
  imageClassname?: string
}

// Define a more accurate type for the translation function 't'
interface TranslationFunction {
  // Basic call signature (returns string or potentially other types)
  (key: string, values?: Record<string, any>): string
  // Signature for the .rich method
  rich: (key: string, values?: Record<string, (chunks: React.ReactNode) => React.ReactNode>) => React.ReactNode
  // Add other signatures if needed (e.g., html, raw)
}

// Export a function that takes 't' and returns the translated services array
export const getTranslatedServices = (t: TranslationFunction): Service[] => [
  {
    title: t('service1.title'),
    subtitle: t('service1.subtitle'),
    description: t.rich('service1.description', {
      bold: (chunks: React.ReactNode) => <span className='font-bold'>{chunks}</span>
    }),
    imageUrl: '/images/services/1.jpg',
    imageClassname: 'object-bottom'
  },
  {
    title: t('service2.title'),
    subtitle: t('service2.subtitle'),
    description: t.rich('service2.description', {
      bold: (chunks: React.ReactNode) => <span className='font-bold'>{chunks}</span>
    }),
    imageUrl: '/images/services/2.jpg',
    imageClassname: 'object-bottom'
  },
  {
    title: t('service3.title'),
    subtitle: t('service3.subtitle'),
    description: t.rich('service3.description', {
      bold: (chunks: React.ReactNode) => <span className='font-bold'>{chunks}</span>
    }),
    imageUrl: '/images/services/3.jpg',
    imageClassname: 'object-bottom'
  },
  {
    title: t('service4.title'),
    subtitle: t('service4.subtitle'),
    description: t.rich('service4.description', {
      bold: (chunks: React.ReactNode) => <span className='font-bold'>{chunks}</span>
    }),
    imageUrl: '/images/services/4.jpg',
    extraContent: t('service4.extraContent'), // This uses the basic call signature
    imageClassname: 'object-top'
  },
  {
    title: t('service5.title'),
    subtitle: t('service5.subtitle'),
    description: t.rich('service5.description', {
      bold: (chunks: React.ReactNode) => <span className='font-bold'>{chunks}</span>
    }),
    imageUrl: '/images/services/5.jpg',
    imageClassname: 'object-center'
  }
]
