import Image from 'next/image'
import React, { JSX, ReactNode } from 'react'

interface WhoAreWeCardProps {
  imageUrl: string
  name: string
  description: ReactNode
  education: ReactNode
}

export default function WhoAreWeCard ({ imageUrl, name, description, education }: WhoAreWeCardProps): JSX.Element {
  return (
    <div className='rounded-4xl bg-cream hover:shadow-2xl transform transition-all duration-300 ease-in-out flex flex-col gap-4 p-6 sm:p-8 relative max-w-xl mt-14 h-full'>
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt={name}
        className='rounded-full aspect-square absolute -top-10 left-1/2 -translate-x-1/2'
      />

      <p className='font-semibold mt-10 text-center text-xl md:text-2xl'>{name}</p>

      <div className='tracking-normal text-sm md:text-base text-justify'>{description}</div>

      <div className='racking-normal text-sm md:text-base flex-grow text-justify'>{education}</div>
    </div>
  )
}
