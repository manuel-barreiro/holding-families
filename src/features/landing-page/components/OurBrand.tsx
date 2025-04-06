import React, { JSX } from 'react'

export default function OurBrand (): JSX.Element {
  return (
    <section className='min-h-screen w-full py-16 px-10 md:px-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row md:gap-12'>
          {/* Heading column - takes full width on mobile, 1/3 on desktop */}
          <div className='mb-8 md:mb-0 md:w-1/2'>
            <h4 className='text-2xl md:text-3xl font-semibold text-[#122717] tracking-wide font-ivy'>
              MEET HOLDING FAMILIES
            </h4>
          </div>

          {/* Content column - takes full width on mobile, 2/3 on desktop */}
          <div className='md:w-1/2 text-[#7C6F64] space-y-6 font-medium text-justify'>
            <p className='text-lg leading-relaxed'>
              We are dedicated to transform parenting by combining
              <span className='font-bold '> science, technology, and human warmth & expertise.
                We provide comprehensive support for parents
              </span>, offering
              expert coaching and guidance <span className='font-bold '>to navigate the challenges of raising children.</span>
            </p>

            <p className='text-lg leading-relaxed'>
              Our goal is to <span className='font-bold '>make parenting more strategic, less stressful, and more empowering </span>—strengthening family
              bonds and fostering emotional well-being from early
              childhood through the teenage years.
            </p>

            <p className='text-lg leading-relaxed'>
              Our of our main programs is <span className='font-bold '>Parente.AI, an AI-powered solution</span> designed to help parents of children aged 2 to 12
              <span className='font-bold '> manage behavioral challenges, enhance
                communication, and create a balanced
              </span>, connected
              home environment. This 24/7 platform provides evidence-
              based strategies to optimize emotional management for
              both kids and parents, ensuring long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
