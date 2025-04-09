import React, { JSX } from 'react'

interface ServiceCardProps {
  title: string
  subtitle: string
  description: string | JSX.Element
  buttonLink?: string
  imageUrl: string
  extraContent?: string | JSX.Element
  imageClassname?: string
}

export default function ServiceCard ({
  title,
  subtitle,
  description,
  buttonLink = 'https://www.parente.ai/',
  imageUrl,
  imageClassname, // Default value properly defined
  extraContent
}: ServiceCardProps): JSX.Element {
  return (
    <div className='flex flex-col h-full rounded-4xl bg-[#DFD9C5] w-full relative pb-10'>
      {/* Image */}
      <div className='h-44 overflow-hidden'>
        <img
          src={imageUrl}
          alt={title}
          className={`h-full w-full object-cover ${imageClassname ?? ''} rounded-t-4xl`}
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
        <a
          href='/#contact'
          // target='_blank'
          className='inline-block rounded-full bg-[#626752] hover:bg-[#71775d] px-8 py-4 text-center text-cream hover:shadow-2xl text-xl font-semibold transition-all ease-in-out duration-300' rel='noreferrer'
        >
          Shop Now
        </a>
      </div>
    </div>
  )
}
