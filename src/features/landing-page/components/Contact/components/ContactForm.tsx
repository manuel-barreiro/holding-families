'use client'

import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { CheckCircleIcon, CheckIcon, Loader2, SendIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'

type TranslationFunction = (key: string, values?: Record<string, any>) => string

// Define the expected shape of the schema for the return type
type ContactFormSchemaType = z.ZodObject<{
  name: z.ZodString
  lastName: z.ZodString
  email: z.ZodString
  phone: z.ZodString
  message: z.ZodString
}>

// Update schema to accept t function and add return type
const createFormSchema = (t: TranslationFunction): ContactFormSchemaType => z.object({
  name: z.string().min(1, t('validation.nameRequired')).max(35),
  lastName: z.string().min(1, t('validation.lastNameRequired')).max(55),
  email: z.string().email(t('validation.emailInvalid')),
  phone: z.string().min(1, t('validation.phoneRequired')),
  message: z.string().min(1, t('validation.messageRequired')).max(500)
})

export default function ContactForm (): React.JSX.Element {
  const t = useTranslations('Contact.form')
  const formSchema = createFormSchema(t)

  const [formStatus, setFormStatus] = useState<'initial' | 'loading' | 'submitted'>('initial')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  async function onSubmit (values: z.infer<typeof formSchema>): Promise<void> {
    try {
      setFormStatus('loading')

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      })

      if (!response.ok) throw new Error('Failed to submit form')

      toast(
        <div className='flex items-start'>
          <div className='mr-3 rounded-full bg-accent p-2'>
            <CheckIcon className='h-4 w-4 text-background' />
          </div>
          <div>
            <p className='font-medium text-sm'>{t('toastSuccessTitle')}</p>
            <p className='text-xs text-muted-foreground'>{t('toastSuccessDescription')}</p>
          </div>
        </div>
      )

      form.reset()
      setFormStatus('submitted')
    } catch (error) {
      console.error('Form submission error', error)
      toast(
        <div className='flex items-start'>
          <div className='mr-3 rounded-full bg-accent p-2'>
            <X className='h-4 w-4 text-background' />
          </div>
          <div>
            <p className='font-medium text-sm'>{t('toastErrorTitle')}</p>
            <p className='text-xs text-muted-foreground'>{t('toastErrorDescription')}</p>
          </div>
        </div>
      )
      setFormStatus('initial')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={(e) => { void form.handleSubmit(onSubmit)(e) }} className='space-y-3 w-full'>

        {/* ... FormFields for name, lastName, email, phone, message ... */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <div className='col-span-1'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='sr-only'>{t('namePlaceholder')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('namePlaceholder')}
                      type='text'
                      className='bg-white text-accent'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='col-span-1'>
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='sr-only'>{t('lastNamePlaceholder')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('lastNamePlaceholder')}
                      type='text'
                      className='bg-white text-accent'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <div className='col-span-1'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='sr-only'>{t('emailPlaceholder')}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t('emailPlaceholder')}
                      type='email'
                      className='bg-white text-accent'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='col-span-1'>
            <FormField
              control={form.control}
              name='phone'
              render={({ field }) => (
                <FormItem className='flex flex-col items-start'>
                  <FormLabel className='sr-only'>{t('phonePlaceholder')}</FormLabel>
                  <FormControl className='w-full'>
                    <Input
                      placeholder={t('phonePlaceholder')}
                      type='tel'
                      className='bg-white text-accent'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>{t('messagePlaceholder')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('messagePlaceholder')}
                  className='resize-none bg-white text-accent min-h-32'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type='submit'
          disabled={formStatus !== 'initial'}
          className='w-full cursor-pointer py-4 md:py-6 bg-cream text-accent hover:bg-cream/90'
        >
          {formStatus === 'initial'
            ? (
              <span className='flex items-center gap-2'>
                <SendIcon size={18} />
                {t('buttonSend')}
              </span>
              )
            : formStatus === 'loading'
              ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  {t('buttonSending') ?? ''}
                </>
                )
              : (
                <span className='flex items-center gap-2'>
                  <CheckCircleIcon size={18} />
                  {t('buttonSent')}
                </span>
                )}
        </Button>
      </form>
    </Form>
  )
}
