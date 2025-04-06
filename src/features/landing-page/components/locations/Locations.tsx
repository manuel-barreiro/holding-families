import React from 'react'
import { ProgressiveBlurHoverCard } from './components/ProgressiveBlurHoverCard'
import Image from 'next/image'

// Define location data
const locations = [
  {
    imageSrc: '/images/clic_officepark.png', // You'll need to ensure these images are in your public folder
    locationName: 'PILAR',
    address: 'Office Park',
    mapUrl: 'https://maps.app.goo.gl/qqpVPALUWsdH14Zx5',
    phoneNumber: '+54 9 11 2689-4398'
  },
  {
    imageSrc: '/images/clic_pilara.png',
    locationName: 'PILARÁ',
    address: 'Estación Pilará',
    mapUrl: 'https://maps.app.goo.gl/tiyUmw2py2m7Fegs6',
    phoneNumber: '+54 9 11 2650-9533'
  },
  {
    imageSrc: '/images/clic_escobar.png',
    locationName: 'ESCOBAR',
    address: 'WorkClub',
    mapUrl: 'https://maps.app.goo.gl/zfEAiiW8xAr2nRve6',
    phoneNumber: '+54 9 11 3336-6571'
  }
]

export default function Locations (): React.ReactElement {
  return (
    <section id='contacto' className='min-h-screen flex justify-center items-center py-12 text-accent px-10 w-full'>

      <div className='flex items-center justify-evenly flex-wrap gap-18'>
        {locations.map((location, index) => (
          <div key={index} className='flex flex-col items-center gap-4 text-center'>
            <div>
              <h5 className='text-3xl font-semibold'>{location.locationName}</h5>
              <h6 className='text-2xl font-normal'>{location.address}</h6>
            </div>
            <ProgressiveBlurHoverCard
              key={index}
              imageSrc={location.imageSrc}
              locationName={location.locationName}
              address={location.address}
              mapUrl={location.mapUrl}
              phoneNumber={location.phoneNumber}
            />
            <a
              className='flex items-center gap-2 group relative'
              href={`https://wa.me/${location.phoneNumber.replace(/[\s-]+/g, '')}`}
              target='_blank'
              rel='noreferrer'
            >
              <Image src='/icons/whatsapp.svg' width={20} height={20} alt='WhatsApp Logo' />
              <span className='text-xl font-semibold relative'>
                {location.phoneNumber}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full' />
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
