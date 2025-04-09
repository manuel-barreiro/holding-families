'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer (): React.ReactElement {
  return (
    <footer className='relative border-t bg-accent text-background transition-colors duration-300 py-10 px-10 md:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-center md:items-start flex-wrap gap-16 md:gap-8 mb-10'>

        {/* Explore Section */}
        <div className='flex flex-col justify-center items-center md:items-start order-2 md:order-1'>
          <h3 className='mb-4 text-2xl sm:text-3xl font-semibold'>EXPLORE</h3>
          <div className='grid grid-cols-2 gap-x-3 gap-y-2 text-sm font-light items-center md:items-start text-center md:text-left'>
            <Link href='#mission' className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              Mission
            </Link>
            <Link href='#services' className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              Services
            </Link>
            <Link href='#brand' className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              Our brand
            </Link>
            <Link href='#who-are-we' className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              Who are we
            </Link>
            <Link href='#parente' className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              Parente
            </Link>
            <Link href='#contact' className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              Contact
            </Link>
          </div>
        </div>

        {/* logo */}
        <div className='relative flex flex-col gap-0 justify-center items-center order-1 md:order-2'>
          <Link href='/#home'>
            <Image
              src='/icons/logo_footer.svg'
              alt='Holding Families Logo'
              width={200}
              height={50}
              className='mb-2'
              priority
            />
          </Link>

        </div>

        {/* Contact Us Section */}
        <div className='flex flex-col justify-center items-center md:items-end order-3'>
          <h3 className='mb-4 text-2xl sm:text-3xl font-semibold'>CONTACT</h3>
          <div className='flex flex-col items-center md:items-end gap-1 text-sm font-light'>
            <div className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              +1 (954) 684-8747
            </div>
            <div className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              +1 (954) 907-7185
            </div>
            <div className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              info@holding-families.com
            </div>
            <div className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              @holdingfamilies
            </div>
            <div className='inline-block transition-opacity hover:opacity-80 hover:underline'>
              Florida, USA
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className='flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-6 md:flex-row md:pt-8'>
        <p className='text-xs sm:text-sm'>
          ® HOLDING FAMILIES.
        </p>

        <div className='flex items-center'>
          <a href='https://www.instagram.com/cs__creativestudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' className='text-xs sm:text-sm transition-opacity hover:opacity-80 hover:underline' rel='noreferrer'>
            DESIGNED BY CS CREATIVE STUDIO
          </a>
        </div>
      </div>
    </footer>
  )
}
