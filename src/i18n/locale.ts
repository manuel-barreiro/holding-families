'use server'

import { cookies } from 'next/headers'
import { Locale, defaultLocale } from '@/i18n/config'

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = 'NEXT_LOCALE'

export async function getUserLocale (): Promise<Locale> {
  const cookieValue = (await cookies()).get(COOKIE_NAME)?.value
  return typeof cookieValue === 'string' && cookieValue.length > 0 ? cookieValue as Locale : defaultLocale
}

export async function setUserLocale (locale: Locale): Promise<void> {
  (await cookies()).set(COOKIE_NAME, locale)
}
