import Image from 'next/image'
import React, { JSX } from 'react'

interface WhoAreWeCardProps {
  imageUrl: string
  name: string
  description: string | JSX.Element
  education: string | JSX.Element
}

export default function WhoAreWeCard ({ imageUrl, name, description, education }: WhoAreWeCardProps): JSX.Element {
  return (
    <div className='rounded-4xl bg-cream hover:shadow-2xl transform transition-all duration-300 ease-in-out flex flex-col gap-4 p-8 relative max-w-xl h-full'>
      <Image src={imageUrl} width={100} height={100} alt={name} className='rounded-full aspect-square absolute -top-10 left-1/2 -translate-x-1/2' />

      <p className='font-semibold mt-10 text-center text-2xl'>{name}</p>

      <div className='tracking-tight'>{description}</div>

      <div className='tracking-tight'>{education}</div>

    </div>
  )
}
