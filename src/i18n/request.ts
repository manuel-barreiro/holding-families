import { getRequestConfig } from 'next-intl/server'
import { getUserLocale } from '@/i18n/locale'

export default getRequestConfig(async () => {
  const locale = await getUserLocale() as string

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
