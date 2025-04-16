'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { Locale, locales } from '@/i18n/config'
import { setUserLocale } from '@/i18n/locale'

export default function LocaleSwitcher (): React.JSX.Element {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale() as Locale
  const [isPending, startTransition] = useTransition()

  function onChange (nextLocale: Locale): void {
    startTransition(() => {
      void setUserLocale(nextLocale)
    })
  }

  return (
    <TooltipProvider>
      <DropdownMenu> {/* Keep DropdownMenu as the outer wrapper for its content */}
        <Tooltip> {/* Tooltip wraps the trigger logic */}
          <TooltipTrigger asChild>
            {/* DropdownMenuTrigger now wraps the actual Button */}
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' aria-label={t('label')} disabled={isPending}>
                <Languages className='h-5 w-5' />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          {/* TooltipContent remains associated with the Tooltip */}
          <TooltipContent className='hidden md:block'>
            <p>{t('label')}</p>
          </TooltipContent>
        </Tooltip>
        {/* DropdownMenuContent remains inside DropdownMenu */}
        <DropdownMenuContent align='end'>
          {locales.map((cur) => (
            <DropdownMenuItem
              key={cur}
              onClick={() => onChange(cur)}
              disabled={isPending || cur === locale}
            >
              {t(cur)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  )
}
