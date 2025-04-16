'use client'
import React, { JSX } from 'react'
import ContactForm from '@/features/landing-page/components/Contact/components/ContactForm'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl' // Import useTranslations

export default function Contact (): JSX.Element {
  const t = useTranslations('Contact') // Initialize translations

  return (
    <section
      id='contact'
      className='bg-accent py-16 px-4 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-15 md:px-8 lg:px-16'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='flex flex-col gap-5 items-center md:items-start justify-center text-center md:text-left text-cream max-w-sm'
      >
        <h5 className='font-ivy font-semibold text-2xl md:text-3xl'>
          {/* Use t.rich for title with line break */}
          {t.rich('title', {
            br: () => <br />
          })}
        </h5>
        <p className='text-justify'>{t('description')}</p> {/* Translate description */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className='w-full max-w-xl'
      >
        <ContactForm />
      </motion.div>
    </section>
  )
}
