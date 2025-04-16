import { Button } from '@/components/ui/button'
import React, { JSX } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function OurServicesFooter (): JSX.Element {
  const t = useTranslations('OurServicesSection.footer')

  return (
    <div className='flex flex-col lg:flex-row justify-evenly items-center gap-16 lg:gap-0 py-16'>

      <div className='flex flex-col gap-8'>
        <h4 className='font-ivy text-3xl sm:text-4xl xl:text-5xl text-cream text-center lg:text-start font-semibold leading-normal '>
          {/* Use t.rich for heading with italics and line breaks */}
          {t.rich('heading', {
            italic: (chunks) => <span className='italic'>{chunks}</span>,
            br: () => <br />
          })}
        </h4>

        <Button
          className='text-[#2E3926] font-bold text-sm sm:text-xl bg-cream hover:bg-cream/80 px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 rounded-full cursor-pointer hover:shadow-2xl transition-all ease-in-out duration-300 lg:max-w-[60%]'
        >
          {t('button')}
        </Button>

      </div>

      <div className='flex flex-col gap-8 items-start max-w-lg text-cream text-md sm:text-lg lg:text-xl text-left px-10 sm:px-0'>

        <div className='flex items-start lg:items-center gap-6'>
          <Image src='/icons/iconito.svg' width={50} height={50} alt='icon' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]' />
          <p>
            {t.rich('benefit1', {
              bold: (chunks) => <span className='font-bold'>{chunks}</span>
            })}
          </p>
        </div>

        <div className='flex items-start lg:items-center gap-6'>
          <Image src='/icons/iconito.svg' width={50} height={50} alt='icon' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px] rotate-45' />
          <p>
            {t.rich('benefit2', {
              bold: (chunks) => <span className='font-bold'>{chunks}</span>
            })}
          </p>
        </div>

        <div className='flex items-start lg:items-center gap-6'>
          <Image src='/icons/iconito.svg' width={50} height={50} alt='icon' className='w-8 h-8 sm:w-10 sm:h-10 lg:w-[50px] lg:h-[50px]' />
          <p>
            {t.rich('benefit3', {
              bold: (chunks) => <span className='font-bold'>{chunks}</span>
            })}
          </p>
        </div>

      </div>

    </div>
  )
}
