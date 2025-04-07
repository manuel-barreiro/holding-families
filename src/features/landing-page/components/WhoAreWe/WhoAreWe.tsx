'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import WhoAreWeCard from '@/features/landing-page/components/WhoAreWe/components/WhoAreWeCard'
import { whoAreWeData } from '@/features/landing-page/components/WhoAreWe/constants/who-are-we-data'

export default function WhoAreWe (): React.JSX.Element {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      ref={sectionRef}
      id='home'
      className='relative min-h-screen h-auto w-full overflow-hidden'
    >
      <motion.div className='absolute h-[110%] w-full' style={{ top: y }}>
        {/* Image wrapper */}
        <div className='relative h-full w-full'>
          <Image
            alt='CLIC Pilates Studio'
            title='Pilates Studio'
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

      {/* Content container - centered for all screen sizes */}
      <div className='absolute inset-0 flex gap-16 h-full w-full flex-col items-center justify-start px-10 py-16'>

        <h5 className='text-[#F2EBDC] font-ivy tracking-widest text-center text-3xl'>BEHIND <br /> HOLDING FAMILIES</h5>

        <div className='flex flex-col md:flex-row items-center justify-evenly w-full'>
          {whoAreWeData.map((person, index) => (
            <WhoAreWeCard
              key={index}
              imageUrl={person.imageUrl}
              name={person.name}
              description={person.description}
              education={person.education}
            />
          ))}
        </div>

      </div>

    </section>
  )
}
