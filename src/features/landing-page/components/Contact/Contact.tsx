'use client'
import React, { JSX } from 'react'
import ContactForm from '@/features/landing-page/components/Contact/components/ContactForm'
import { motion } from 'framer-motion'

export default function Contact (): JSX.Element {
  return (
    <section
      id='contact'
      className='bg-accent py-16 px-4 flex flex-col items-center justify-center gap-8 md:flex-row md:items-start md:gap-12 md:px-8 lg:px-16'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='flex flex-col gap-5 items-center justify-center text-center md:text-left text-cream max-w-sm'
      >
        <h5 className='font-ivy font-semibold text-2xl md:text-3xl'>Need Personalized
          Parenting Support?
        </h5>
        <p>Connect with us to learn how AI-powered insights and expert strategies can help you navigate parenting with confidence.</p>
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
