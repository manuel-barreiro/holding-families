import { ReactNode } from 'react'

// Define the structure of an expert object
export interface Expert {
  id: string
  name: string
  title: string
  description: string // Keep as string if no rich text needed
  imageUrl: string
}

// Define a type for the translation function 't'
interface TranslationFunction {
  (key: string, values?: Record<string, any>): string
  rich?: (key: string, values?: Record<string, (chunks: ReactNode) => ReactNode>) => ReactNode
}

// Export a function that takes 't' and returns the translated data array
export const getTranslatedExpertsData = (t: TranslationFunction): Expert[] => [
  {
    id: 'eduardo-bunge',
    name: t('expert1.name'),
    title: t('expert1.title'),
    description: t('expert1.description'),
    imageUrl: '/images/eduardo-bunge.png'
  },
  {
    id: 'juan-pablo-dellarroquelle',
    name: t('expert2.name'),
    title: t('expert2.title'),
    description: t('expert2.description'),
    imageUrl: '/images/juan-pablo-della.png'
  },
  {
    id: 'antonio-hardan',
    name: t('expert3.name'),
    title: t('expert3.title'),
    description: t('expert3.description'),
    imageUrl: '/images/antonio-hardan.png'
  }
]
