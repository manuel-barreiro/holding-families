'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/components/locale/LocaleSwitcher'

export default function MobileNav ({ scrolled }: { scrolled: boolean }): React.ReactElement {
  const [open, setOpen] = useState(false)
  const t = useTranslations('NavBar')
  const tLocale = useTranslations('LocaleSwitcher')

  // Add useEffect to control body overflow
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden' // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = '' // Restore default overflow when menu is closed
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav className={cn(
        'flex items-center justify-between px-10 py-6 xl:hidden fixed top-0 left-0 right-0 z-50 duration-500 font-normal text-background transition-all duration-300 ease-in-out',
        scrolled
          ? 'backdrop-blur-md bg-accent/80 shadow-lg'
          : 'bg-transparent'
      )}
      >
        <Link href='/#home' className='z-50' onClick={() => setOpen(false)}>
          <Image src='/icons/logo_hf.svg' priority width={200} height={50} alt='Holding Families Logo' className='animate-fade ease-in-out animate-normal animate-duration-[3000ms] animate-fill-both animate-once' />
        </Link>

        {/* Botón para abrir o cerrar menú */}
        {!open
          ? (
            <button
              type='button'
              className='pointer-events-auto duration-500 hover:brightness-200 focus-visible:outline-0 z-50 transition duration-[3s]'
              onClick={() => setOpen(true)}
            >
              <span className='sr-only'>{t('openMenu')}</span>
              <span className='flex h-[36px] w-[36px] flex-col justify-center space-y-[11px]'>
                <span className='h-[2px] w-full bg-background transition duration-150 ease-in-out' />
                <span className='h-[2px] w-full bg-background transition duration-150 ease-in-out' />
              </span>
            </button>
            )
          : (
            <button
              type='button'
              className='pointer-events-auto duration-500 hover:brightness-200 focus-visible:outline-0 z-50 transition duration-[3s]'
              onClick={() => setOpen(false)}
            >
              <span className='sr-only'>{t('closeMenu')}</span>
              <span className='flex h-[36px] w-[36px] flex-col justify-center space-y-[11px]'>
                <span className='h-[2px] w-full translate-y-[7px] rotate-45 bg-background transition duration-150 ease-in-out' />
                <span className='h-[2px] w-full translate-y-[-6px] -rotate-45 bg-background transition duration-150 ease-in-out' />
              </span>
            </button>
            )}
      </nav>

      {/* Mobile menu - moved outside of nav element to be fixed to viewport */}
      {open && (
        <div className='pointer-events-auto fixed inset-0 z-40 flex animate-fade flex-col justify-center overflow-auto px-10 transition duration-500 animate-duration-1000 animate-once animate-ease-in-out backdrop-blur-md bg-accent/80 shadow-lg'>
          <ul className='flex flex-col gap-6 text-3xl text-background sm:text-4xl'>
            <li
              onClick={() => setOpen(false)}
              className='pointer-events-auto cursor-pointer transition duration-500 hover:brightness-200 focus-visible:outline-0'
            >
              <Link href='/#mission' className='flex items-center gap-2'>
                <span>{t('mission')}</span> {/* Use translation */}
                <span className='mb-1'>{'>'}</span>
              </Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className='pointer-events-auto cursor-pointer transition duration-500 hover:brightness-200 focus-visible:outline-0'
            >
              <Link
                href='/#brand'
                className='flex items-center gap-2'
              >
                <span>{t('ourBrand')}</span> {/* Use translation */}
                <span className='mb-1'>{'>'}</span>
              </Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className='pointer-events-auto cursor-pointer transition duration-500 hover:brightness-200 focus-visible:outline-0'
            >
              <Link href='/#services' className='flex items-center gap-2'>
                <span>{t('services')}</span> {/* Use translation */}
                <span className='mb-1'>{'>'}</span>
              </Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className='pointer-events-auto cursor-pointer transition duration-500 hover:brightness-200 focus-visible:outline-0'
            >
              <Link href='/#who-are-we' className='flex items-center gap-2'>
                <span>{t('whoAreWe')}</span> {/* Use translation */}
                <span className='mb-1'>{'>'}</span>
              </Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className='pointer-events-auto cursor-pointer transition duration-500 hover:brightness-200 focus-visible:outline-0'
            >
              <Link href='/#science-backed' className='flex items-center gap-2'>
                <span>{t('scienceBacked')}</span> {/* Use translation */}
                <span className='mb-1'>{'>'}</span>
              </Link>
            </li>
            <li
              onClick={() => setOpen(false)}
              className='pointer-events-auto cursor-pointer transition duration-500 hover:brightness-200 focus-visible:outline-0'
            >
              <Link href='/#contact' className='flex items-center gap-2'>
                <span>{t('contact')}</span> {/* Use translation */}
                <span className='mb-1'>{'>'}</span>
              </Link>
            </li>
            {/* Language Switcher Item */}
            <li className='mt-4 flex items-center gap-2 pointer-events-auto cursor-pointer transition duration-500 hover:brightness-200 focus-visible:outline-0'>
              {/* Label for the switcher */}
              <span className='text-3xl sm:text-4xl'>{tLocale('label')}</span>
              {/* Render the LocaleSwitcher component */}
              <LocaleSwitcher />
              {/* Optional: Add the '>' arrow if desired */}
              {/* <span className='mb-1'>{'>'}</span> */}
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
