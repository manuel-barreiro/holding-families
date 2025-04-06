import React, { JSX } from 'react'
import ServiceCard from '@/features/landing-page/components/OurServices/components/ServiceCard'

// Service data based on the image
const services = [
  {
    title: 'HOLD ONE-ON-ONE',
    subtitle: 'Personalized Parent Coaching',
    description: (
      <>
        A private space where we hold you with <span className='font-bold'>empathy and evidence-based tools</span>, helping you navigate challenges with <span className='font-bold'>clarity and confidence</span> — from tantrums to tough talks.
      </>
    ),
    buttonLink: '/services/one-on-one',
    imageUrl: '/images/services/1.jpg'
  },
  {
    title: 'HOLD TOGETHER',
    subtitle: 'Group Coaching for Parents',
    description: (
      <>
        Connect with other parents in a <span className='font-bold'>supportive environment</span>. Guided by a coach, you'll learn, share, and grow together — because you're <span className='font-bold'>not meant to do this alone</span>.
      </>
    ),
    buttonLink: '/services/group-coaching',
    imageUrl: '/images/services/2.jpg'
  },
  {
    title: 'HOLD FROM THE START',
    subtitle: "Coaching for Expecting Parents & Baby's First Year",
    description: (
      <>
        From pregnancy to postpartum, we support you in building <span className='font-bold'>secure bonds and healthy routines</span> from day one. <span className='font-bold'>Calm begins with you</span> — and we're here to guide the way.
      </>
    ),
    buttonLink: '/services/expecting-parents',
    imageUrl: '/images/services/3.jpg'
  },
  {
    title: 'HOLD WITH AI',
    subtitle: 'Coaching Powered by ParenteAI',
    description: (
      <>
        We've partnered with ParenteAI to offer a <span className='font-bold'>hybrid model of support</span> that combines <span className='font-bold'>24/7 AI guidance with the power of live coaching</span>.
      </>
    ),
    buttonLink: '/services/ai-coaching',
    imageUrl: '/images/services/4.jpg',
    extraContent: '+ Keep Reading'
  },
  {
    title: 'HOLD THE FUTURE',
    subtitle: 'Teen Prevention & Positive Behavior Programs',
    description: (
      <>
        <span className='font-bold'>Empower your child early</span>. This program equips parents to prevent behavioral issues and build <span className='font-bold'>lasting emotional resilience</span>.
      </>
    ),
    buttonLink: '/services/teen-programs',
    imageUrl: '/images/services/5.jpg'
  }
]

export default function OurServicesSection (): JSX.Element {
  return (
    <section className='py-16 px-4 bg-gradient-to-t from-[#172618] via-[#3F4730] to-[#F2EDDF]'>
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
                buttonLink={service.buttonLink}
                imageUrl={service.imageUrl}
                extraContent={service.extraContent}
              />
            </div>
          ))}
        </div>

        {/* Second Row - 2 cards centered */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 max-w-4xl mx-auto'>
          {services.slice(3, 5).map((service, index) => (
            <div key={index + 3} className='flex'>
              <ServiceCard
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                buttonLink={service.buttonLink}
                imageUrl={service.imageUrl}
                extraContent={service.extraContent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
