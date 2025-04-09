'use client'

import {
  toast
} from 'sonner'
import {
  useForm
} from 'react-hook-form'
import {
  zodResolver
} from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { CheckCircleIcon, CheckIcon, SendIcon, X } from 'lucide-react'
import {
  Button
} from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Input
} from '@/components/ui/input'
import {
  Textarea
} from '@/components/ui/textarea'
import { TextShimmerWave } from '@/components/motion-primitives/text-shimmer-wave'

const formSchema = z.object({
  name: z.string().min(1, 'Please enter your name').max(35),
  lastName: z.string().min(1, 'Please enter your last name').max(55),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(1, 'Phone number is required'),
  message: z.string().min(1, 'Message is required').max(500)
})

export default function ContactForm (): React.JSX.Element {
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

      // Send form data to API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Show custom toast with CheckIcon
      toast(
        <div className='flex items-start'>
          <div className='mr-3 rounded-full bg-accent p-2'>
            <CheckIcon className='h-4 w-4 text-background' />
          </div>
          <div>
            <p className='font-medium'>We've received your inquiry</p>
            <p className='text-sm text-muted-foreground'>We will contact you shortly</p>
          </div>
        </div>
      )

      // Reset form and update status
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
            <p className='font-medium'>An error occurred</p>
            <p className='text-sm text-muted-foreground'>We did not receive your inquiry</p>
          </div>
        </div>
      )
      setFormStatus('initial')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={(e) => { void form.handleSubmit(onSubmit)(e) }} className='space-y-3 w-full'>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
          <div className='col-span-1'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='sr-only'>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Name'
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
                  <FormLabel className='sr-only'>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Last Name'
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
                  <FormLabel className='sr-only'>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Email'
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
                  <FormLabel className='sr-only'>Phone</FormLabel>
                  <FormControl className='w-full'>
                    <Input
                      placeholder='Phone'
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
              <FormLabel className='sr-only'>Send a Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Send a Message'
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
                Send
              </span>
              )
            : formStatus === 'loading'
              ? (
                <TextShimmerWave
                  className='[--base-color:#FDFBFA] [--base-gradient-color:#FAFAFA]'
                  duration={1}
                  spread={1}
                  zDistance={1}
                  scaleDistance={1.1}
                  rotateYDistance={20}
                >
                  Sending message...
                </TextShimmerWave>
                )
              : (
                <span className='flex items-center gap-2'>
                  <CheckCircleIcon size={18} />
                  Message received
                </span>
                )}
        </Button>
      </form>
    </Form>
  )
}
