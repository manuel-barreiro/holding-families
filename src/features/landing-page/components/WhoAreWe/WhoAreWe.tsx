'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import WhoAreWeCard from '@/features/landing-page/components/WhoAreWe/components/WhoAreWeCard'
import { getTranslatedWhoAreWeData } from '@/features/landing-page/components/WhoAreWe/constants/who-are-we-data'

import { useTranslations } from 'next-intl'

export default function WhoAreWe (): React.JSX.Element {
  const sectionRef = useRef(null)
  const t = useTranslations('WhoAreWe') // Initialize translations
  const whoAreWeData = getTranslatedWhoAreWeData(t) // Get translated data

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      ref={sectionRef}
      id='who-are-we'
      className='relative min-h-screen overflow-hidden w-full bg-[#5C3423] py-16 md:pb-36 md:pt-24'
    >
      <motion.div className='absolute h-full w-full top-0 left-0' style={{ top: y }}>
        {/* Image wrapper */}
        <div className='relative h-full w-full'>
          <Image
            alt='Holding Families Background'
            title='Holding Families Background'
            src='/images/mountain_bg.jpg'
            fill
            priority
            quality={100}
            sizes='100vw'
            className='object-cover object-top'
          />

          {/* Black overlay for better text visibility */}
          <div className='absolute inset-0 bg-black/10' />
        </div>
      </motion.div>

      {/* Content container - adjusted padding and spacing */}
      <div className='relative z-10 flex h-full w-full flex-col items-center justify-start px-4 sm:px-10 gap-8'>
        <h5 className='text-cream font-ivy tracking-widest text-center text-2xl sm:text-3xl md:text-4xl font-semibold pt-8 md:pt-0'>
          {t.rich('title', {
            br: () => <br />
          })}
        </h5>

        <div className='flex flex-col lg:flex-row items-stretch justify-evenly w-full gap-8 lg:gap-5'>
          {/* Map over translated data */}
          {whoAreWeData.map((person, index) => (
            <div key={index} className='flex-1 flex justify-center'>
              <WhoAreWeCard
                imageUrl={person.imageUrl}
                name={person.name}
                description={person.description} // Pass translated description
                education={person.education} // Pass translated education
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
