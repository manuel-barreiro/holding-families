import React, { JSX } from 'react'
import { useTranslations } from 'next-intl'

export default function OurBrand (): JSX.Element {
  const t = useTranslations('OurBrand')
  return (
    <section id='brand' className='h-auto w-full py-16 px-10 md:px-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row md:gap-12'>
          {/* Heading column - takes full width on mobile, 1/3 on desktop */}
          <div className='mb-8 md:mb-0 md:w-1/2'>
            <h4 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3D482E] tracking-wide font-ivy'>
              {t('title')}
            </h4>
          </div>

          {/* Content column - takes full width on mobile, 2/3 on desktop */}
          <div className='md:w-1/2 text-[#7C6F64] space-y-6 font-medium text-justify text-lg sm:text-xl leading-tight'>
            <p>
              {t.rich('paragraph1', {
              // Define how to render the <bold> tag
                bold: (chunks) => <span className='font-bold'>{chunks}</span>
              })}
            </p>

            <p>
              {t.rich('paragraph2', {
                bold: (chunks) => <span className='font-bold'>{chunks}</span>
              })}
            </p>

            <p>
              {t.rich('paragraph3', {
                bold: (chunks) => <span className='font-bold'>{chunks}</span>
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
