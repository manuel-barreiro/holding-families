import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/components/locale/LocaleSwitcher'

export default function DesktopNav ({ scrolled }: { scrolled: boolean }): React.ReactElement {
  const t = useTranslations('NavBar')
  return (
    <nav className={cn(
      'fixed left-0 right-0 top-0 z-50 hidden  justify-between items-center  px-20 py-6 font-normal text-background transition-all duration-300 ease-in-out xl:flex text-base',
      scrolled
        ? 'backdrop-blur-md bg-accent/80 shadow-lg'
        : 'bg-transparent'
    )}
    >
      <ul className='animate-fade-down animate-normal animate-duration-[3000ms] animate-fill-both animate-once mt-2 flex gap-6 transition'>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#mission'>{t('mission')}</Link> {/* Use translation */}
        </li>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#brand'>{t('ourBrand')}</Link> {/* Use translation */}
        </li>
        <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
          <Link href='/#services'>{t('services')}</Link> {/* Use translation */}
        </li>
      </ul>

      <Link href='/#home'>
        <Image
          src='/icons/logo_hf.svg'
          priority
          width={350}
          height={100}
          alt='Holding Families Logo'
          className='animate-fade animate-normal animate-duration-[3000ms] animate-fill-both animate-once ease-in-out mt-2 pl-10!'
        />
      </Link>

      {/* Right Links & Locale Switcher */}
      <div className='flex items-center gap-6'>

        <ul className='animate-fade-down animate-normal animate-duration-[3000ms] animate-fill-both animate-once mt-2 flex gap-6 transition'>

          <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
            <Link href='/#who-are-we'>{t('whoAreWe')}</Link> {/* Use translation */}
          </li>

          <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
            <Link href='/#science-backed'>{t('scienceBacked')}</Link> {/* Use translation */}
          </li>

          <li className='underline-offset-8 transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:underline hover:brightness-200'>
            <Link href='/#contact'>{t('contact')}</Link> {/* Use translation */}
          </li>
        </ul>
        <LocaleSwitcher />
      </div>
    </nav>
  )
}
