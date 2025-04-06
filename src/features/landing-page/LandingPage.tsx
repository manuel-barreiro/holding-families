'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import NavBar from '@/features/landing-page/components/NavBar/NavBar'
import Hero from '@/features/landing-page/components/Hero'
import Mission from '@/features/landing-page/components/Mission'
import OurBrand from '@/features/landing-page/components/OurBrand'
import OurServicesSection from './components/OurServices/OurServicesSection'

export default function LandingPage (): React.JSX.Element {
  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis(
      {
        anchors: {
          offset: -80,
          onComplete: () => {
            console.log('scrolled to anchor')
          }
        }
      }
    )
    function raf (time: any): void {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <NavBar />

      <main className='w-full h-full'>
        <Hero />
        <Mission />
        <OurBrand />
        <OurServicesSection />

        {/* Add more sections here */}

      </main>

    </>
  )
}
