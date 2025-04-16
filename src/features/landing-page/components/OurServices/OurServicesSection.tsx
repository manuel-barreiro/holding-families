import React, { JSX } from 'react'
import ServiceCard from '@/features/landing-page/components/OurServices/components/ServiceCard'
import OurServicesFooter from '@/features/landing-page/components/OurServices/components/OurServicesFooter'
import { getTranslatedServices } from '@/features/landing-page/components/OurServices/constants/services-data'
import { useTranslations } from 'next-intl' // Import useTranslations

export default function OurServicesSection (): JSX.Element {
  const t = useTranslations('OurServicesSection') // Initialize translations
  const services = getTranslatedServices(t) // Get translated services data

  return (
    <section id='services' className='pt-24 pb-16 sm:px-10 bg-gradient-to-t from-[#172618] via-[#3F4730] to-[#F2EDDF]'>
      <div className='container mx-auto max-w-7xl px-10'>

        {/* Section Title */}
        <h2 className='mb-20 text-center font-ivy text-3xl sm:text-4xl font-semibold text-dark-green'>
          {t('title')} {/* Use translated title */}
        </h2>

        {/* Cards Grid */}
        {/* First Row */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 mb-20'>
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className='flex'>
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                imageUrl={service.imageUrl}
                extraContent={service.extraContent}
                imageClassname={service.imageClassname}
              />
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 max-w-4xl mx-auto mb-16'>
          {services.slice(3, 5).map((service, index) => (
            <div key={index + 3} className='flex'>
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                imageUrl={service.imageUrl}
                extraContent={service.extraContent}
                imageClassname={service.imageClassname}
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
