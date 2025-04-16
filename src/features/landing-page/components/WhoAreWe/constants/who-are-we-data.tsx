import React, { ReactNode } from 'react'

// Define the structure of a person object
interface Person {
  imageUrl: string
  name: string
  description: ReactNode
  education: ReactNode
}

// Define a type for the translation function 't'
interface TranslationFunction {
  (key: string, values?: Record<string, any>): string
  rich: (key: string, values?: Record<string, (chunks: ReactNode) => ReactNode>) => ReactNode
}

// Export a function that takes 't' and returns the translated data array
export const getTranslatedWhoAreWeData = (t: TranslationFunction): Person[] => [
  {
    imageUrl: '/images/mariana.jpg',
    name: t('person1.name'),
    description: t.rich('person1.description', {
      bold: (chunks: ReactNode) => <span className='font-bold'>{chunks}</span>
    }),
    education: (
      <div className='text-justify'>
        <span className='font-bold'>{t('person1.education.heading')}</span>
        <ul className='list-disc pl-4 mt-2'>
          {/* Map over education list items from translations */}
          {['item1', 'item2', 'item3', 'item4'].map(itemKey => (
            <li key={itemKey}>{t(`person1.education.${itemKey}`)}</li>
          ))}
        </ul>
      </div>
    )
  },
  {
    imageUrl: '/images/paula.jpg',
    name: t('person2.name'),
    description: t.rich('person2.description', {
      bold: (chunks: ReactNode) => <span className='font-bold'>{chunks}</span>
    }),
    education: (
      <div className='text-justify'>
        <span className='font-bold'>{t('person2.education.heading')}</span>
        <ul className='list-disc pl-4 mt-2'>
          {/* Map over education list items from translations */}
          {['item1', 'item2', 'item3'].map(itemKey => (
            <li key={itemKey}>{t(`person2.education.${itemKey}`)}</li>
          ))}
        </ul>
      </div>
    )
  }
]
