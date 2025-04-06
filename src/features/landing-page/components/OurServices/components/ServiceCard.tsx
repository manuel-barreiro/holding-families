import React, { JSX } from 'react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  subtitle: string
  description: string | JSX.Element
  buttonLink: string
  imageUrl: string
  extraContent?: string | JSX.Element
}

export default function ServiceCard ({
  title,
  subtitle,
  description,
  buttonLink,
  imageUrl,
  extraContent
}: ServiceCardProps): JSX.Element {
  return (
    <div className='flex flex-col h-full rounded-4xl bg-[#DFD9C5] w-full relative pb-10'>
      {/* Image */}
      <div className='h-36 overflow-hidden'>
        <img
          src={imageUrl}
          alt={title}
          className='h-full w-full object-cover rounded-t-4xl'
        />
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col gap-5 px-6 py-10 items-center text-center'>
        <h3 className=' font-ivy text-2xl sm:text-3xl font-semibold text-dark-green uppercase'>{title}</h3>
        <p className=' text-[#555B45] font-bold'>{subtitle}</p>

        <div className='mb-4 flex-1 text-md w-full'>
          {typeof description === 'string'
            ? (
              <p className='text-[#555B45] font-medium'>{description}</p>
              )
            : (
              <div className='text-[#555B45] font-medium'>{description}</div>
              )}
        </div>

        {/* {extraContent && (
          <div className='mb-4 text-sm w-full'>
            {typeof extraContent === 'string'
              ? (
                <p className='text-dark-text'>{extraContent}</p>
                )
              : (
                <div className='text-dark-text'>{extraContent}</div>
                )}
          </div>
        )} */}
      </div>

      {/* Button - Absolutely positioned */}
      <div className='absolute bottom-0 left-0 right-0 transform translate-y-1/2 flex justify-center'>
        <Link
          href={buttonLink}
          className='inline-block rounded-full bg-[#626752] px-8 py-4 text-center text-cream hover:bg-opacity-90 hover:shadow-2xl text-xl font-semibold transition-all ease-in-out duration-300'
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}
