'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { expertsData } from '@/features/landing-page/components/ScienceBacked/constants/science-backed-data'
import ExpertPresentation from '@/features/landing-page/components/ScienceBacked/components/ExpertPresentation'

const ScienceBacked: React.FC = () => {
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
            Backed by the
          </motion.h2>
          <motion.h2
            className='text-2xl md:text-3xl lg:text-4xl font-semibold font-ivy tracking-widest uppercase'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Medical Community
          </motion.h2>
        </motion.div>

        {/* Changed from grid to flex with responsive flex direction */}
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
                expert={expert}
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
