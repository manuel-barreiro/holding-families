import React, { JSX } from 'react'
import ServiceCard from '@/features/landing-page/components/OurServices/components/ServiceCard'
import OurServicesFooter from '@/features/landing-page/components/OurServices/components/OurServicesFooter'
import { services } from '@/features/landing-page/components/OurServices/constants/services-data'

export default function OurServicesSection (): JSX.Element {
  return (
    <section id='services' className='py-16 px-4 bg-gradient-to-t from-[#172618] via-[#3F4730] to-[#F2EDDF]'>
      <div className='container mx-auto max-w-7xl'>
        {/* Section Title */}
        <h2 className='mb-20 text-center font-ivy text-3xl sm:text-4xl font-semibold text-dark-green'>OUR SERVICES</h2>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mb-20'>
          {/* First Row - 3 cards */}
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className='flex'>
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                imageUrl={service.imageUrl}
                extraContent={service.extraContent}
              />
            </div>
          ))}
        </div>

        {/* Second Row - 2 cards centered */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 max-w-4xl mx-auto mb-16'>
          {services.slice(3, 5).map((service, index) => (
            <div key={index + 3} className='flex'>
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                imageUrl={service.imageUrl}
                extraContent={service.extraContent}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <OurServicesFooter />
    </section>
  )
}
