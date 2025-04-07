import { Button } from '@/components/ui/button'
import React, { JSX } from 'react'
import Image from 'next/image'

export default function OurServicesFooter (): JSX.Element {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly items-center gap-16 lg:gap-0 py-16 px-10'>

      <div className='flex flex-col gap-8'>
        <h4 className='font-ivy text-3xl sm:text-4xl xl:text-5xl text-[#F2EBDC] text-center lg:text-start font-semibold leading-normal'>
          Make parenting a<br />
          more{' '}
          <span className='italic'>
            strategic, <br className='hidden lg:block' />
            mindful,<br className='block lg:hidden' /> and <br className='hidden lg:block' />
            fulfilling journey
          </span>
        </h4>

        <Button
          className='text-[#2E3926] font-bold text-sm sm:text-xl bg-[#F2EBDC] hover:bg-[#F2EBDC]/80 px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 rounded-full cursor-pointer hover:shadow-2xl transition-all ease-in-out duration-300 lg:max-w-[60%]'
        >
          Join Now
        </Button>

      </div>

      <div className='flex flex-col gap-8 items-start max-w-lg text-[#EEEBE3] text-md sm:text-lg lg:text-xl text-left'>

        <div className='flex items-start lg:items-center gap-6'>
          <Image src='/icons/iconito.svg' width={50} height={50} alt='icon' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]' />
          <p><span className='font-bold'>Strengthen Family Bonds -</span> Foster deeper connections between parents and children through understanding and emotional support.</p>
        </div>

        <div className='flex items-start lg:items-center gap-6'>
          <Image src='/icons/iconito.svg' width={50} height={50} alt='icon' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] rotate-45' />
          <p><span className='font-bold'>Empower Parents with 24/7 Tools & Knowledge -</span> Provide practical strategies and expert-backed insights to navigate behavioral challenges with confidence.</p>
        </div>

        <div className='flex items-start lg:items-center gap-6'>
          <Image src='/icons/iconito.svg' width={50} height={50} alt='icon' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]' />
          <p><span className='font-bold'>Create a Balanced, Stress-Free Home -</span> Help families manage daily routines, reduce stress and promote a positive home environment.</p>
        </div>

      </div>

    </div>
  )
}
