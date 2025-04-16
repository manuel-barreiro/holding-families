'use client'
import React from 'react'
import { motion } from 'framer-motion'
// Import the function to get translated data
import { getTranslatedExpertsData } from '@/features/landing-page/components/ScienceBacked/constants/science-backed-data'
import ExpertPresentation from '@/features/landing-page/components/ScienceBacked/components/ExpertPresentation'
import { useTranslations } from 'next-intl' // Import useTranslations

const ScienceBacked: React.FC = () => {
  const t = useTranslations('ScienceBacked') // Initialize translations
  const expertsData = getTranslatedExpertsData(t) // Get translated data

  return (
    <section id='science-backed' className='py-16 md:py-24 px-4 bg-cream text-[#332B25]'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className='text-2xl md:text-3xl lg:text-4xl font-semibold font-ivy tracking-widest uppercase'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t('titleLine1')} {/* Use translated title line 1 */}
          </motion.h2>
          <motion.h2
            className='text-2xl md:text-3xl lg:text-4xl font-semibold font-ivy tracking-widest uppercase'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {t('titleLine2')} {/* Use translated title line 2 */}
          </motion.h2>
        </motion.div>

        {/* Map over translated expertsData */}
        <motion.div
          className='flex flex-col md:flex-row flex-wrap justify-center gap-10 md:gap-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          {expertsData.map((expert, index) => (
            <div key={expert.id} className='md:flex-1 min-w-0 md:max-w-xs'>
              <ExpertPresentation
                expert={expert} // Pass the translated expert object
                index={index}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ScienceBacked
