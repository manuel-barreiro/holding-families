import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export default function DesktopNav ({ scrolled }: { scrolled: boolean }): React.ReactElement {
  return (
    <nav className={cn(
      'fixed left-0 right-0 top-0 z-50 hidden  justify-between items-center  px-20 py-6 font-normal text-background transition-all duration-300 ease-in-out xl:flex text-lg',
      scrolled
        ? 'backdrop-blur-md bg-accent/80 shadow-lg'
        : 'bg-transparent'
    )}
    >
      <ul className='animate-fade-down animate-normal animate-duration-[3000ms] animate-fill-both animate-once mt-2 flex gap-6 transition'>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#mission'>MISSION</Link>
        </li>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#brand'>OUR BRAND</Link>
        </li>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#services'>SERVICES</Link>
        </li>
      </ul>

      <Link href='/#home'>
        <Image
          src='/icons/logo_hf.png'
          priority
          width={300}
          height={100}
          alt='Clic Pilates Logo'
          className='animate-fade animate-normal animate-duration-[3000ms] animate-fill-both animate-once ease-in-out'
        />
      </Link>

      <ul className='animate-fade-down animate-normal animate-duration-[3000ms] animate-fill-both animate-once mt-2 flex gap-6 transition'>

        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#who-are-we'>WHO ARE WE</Link>
        </li>

        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#science-backed'>SCIENCE-BACKED</Link>
        </li>

        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#contact'>CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}
