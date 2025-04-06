'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import NavBar from '@/features/landing-page/components/NavBar/NavBar'
import Hero from '@/features/landing-page/components/Hero'
// import HaceElClic from '@/features/landing-page/components/HaceElClic'
// import Brand from '@/features/landing-page/components/Brand'
// import QuienesSomos from '@/features/landing-page/components/QuienesSomos'
// import Niveles from '@/features/landing-page/components/Niveles'
// import DownloadApp from '@/features/landing-page/components/DownloadApp'
// import PorqueElegirnos from '@/features/landing-page/components/PorqueElegirnos'
// import Franquicias from '@/features/landing-page/components/franquicias/Franquicias'
// import Footer from '@/features/landing-page/components/Footer'
// import Locations from './components/locations/Locations'
// import ClicAcademy from './components/ClicAcademy'

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
        {/* <HaceElClic />
        <Brand />
        <QuienesSomos />
        <Niveles />
        <Carousel />
        <DownloadApp />
        <PorqueElegirnos />
        <Franquicias />
        <ClicAcademy />
        <Locations />
        <InstagramFeed /> */}

      </main>
      {/* <Footer /> */}
    </>
  )
}
