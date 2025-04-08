'use client'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero (): React.JSX.Element {
  const sectionRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Wait for component to mount before showing animations
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section
      ref={sectionRef}
      id='home'
      className='relative h-screen w-full overflow-hidden'
    >
      {/* Static background container (no motion) to prevent shifts */}
      <motion.div className='absolute h-[110%] w-full' style={{ top: y }}>
        {/* Image wrapper */}
        <div className='relative h-full w-full'>
          <Image
            alt='CLIC Pilates Studio'
            title='Pilates Studio'
            src='/images/hero.jpg'
            fill
            priority
            quality={100}
            sizes='100vw'
            className='object-cover object-top'
            onLoad={() => setIsLoaded(true)}
          />

          {/* Black overlay for better text visibility */}
          <div className='absolute inset-0 bg-black/10' />
        </div>
      </motion.div>

      {/* Content container - centered for all screen sizes */}
      <div className='absolute inset-0 flex h-full w-full flex-col items-center justify-center px-6 sm:px-10'>
        <div className='flex flex-col items-center text-center max-w-5xl gap-10'>
          {/* Main heading with smoother animation */}
          <h1
            className={`text-4xl font-bold text-white sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl ${
              isLoaded ? 'animate-fade-up animate-duration-1000 animate-delay-300 animate-once animate-ease-in-out' : 'opacity-0'
            }`}
          >
            Empowering Parents
          </h1>

          {/* Subheading with smoother animation */}
          <h2
            className={`text-md text-white sm:text-xl md:text-2xl  ${
              isLoaded ? 'animate-fade-up animate-duration-1000 animate-delay-500 animate-once animate-ease-in-out' : 'opacity-0'
            }`}
          >
            We hold you to hold your child - with heart, mind & AI
          </h2>

          {/* Button with smoother animation */}
          <Button
            className={`text-[#B2AC9D] font-bold text-sm sm:text-xl bg-white hover:bg-white/80 px-8 sm:px-12 md:px-20 py-4 sm:py-6 md:py-8 rounded-full cursor-pointer ${
              isLoaded ? 'animate-fade-up animate-duration-1000 animate-delay-700 animate-once animate-ease-in-out' : 'opacity-0'
            }`}
          >
            JOIN STRATEGIC PARENTING
          </Button>

        </div>
      </div>
    </section>
  )
}
