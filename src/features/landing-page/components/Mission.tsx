import React, { JSX } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Mission (): JSX.Element {
  const t = useTranslations('Mission')
  return (
    <section id='mission' className='sm:min-h-[75vh] min-h-[50vh] w-full flex flex-col items-center justify-center relative overflow-hidden p-4 md:p-6'>
      {/* Pattern in background */}
      <div className='absolute inset-0 flex items-center justify-center'>
        <Image
          src='/images/mission_pattern.svg'
          alt='Background pattern'
          width={400}
          height={400}
          className='object-contain w-1/2 md:w-auto'
        />
      </div>

      {/* Mission text */}
      <div className='max-w-2xl text-center z-10'>
        <p className='text-[#332B25] text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tighter font-standerd'>
          {t.rich('statement', {
          // Use the new key 'linebreak' to match the tag in the JSON
            br: () => <br />
          })}
        </p>
      </div>
    </section>
  )
}
