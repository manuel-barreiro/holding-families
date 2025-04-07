'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Expert } from '@/features/landing-page/components/ScienceBacked/constants/science-backed-data'

interface ExpertPresentationProps {
  expert: Expert
  index: number
}

const ExpertPresentation: React.FC<ExpertPresentationProps> = ({ expert, index }) => {
  return (
    <motion.div
      className='flex flex-col items-center text-center px-4 md:px-6'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className='relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4'
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        <img
          src={expert.imageUrl}
          alt={expert.name}
          className='w-full h-full object-cover'
        />
      </motion.div>
      <motion.h3
        className='text-xl md:text-2xl font-bold mb-1 text-slate-800'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
      >
        {expert.name}
      </motion.h3>
      <motion.p
        className='text-sm md:text-base font-medium mb-1 text-slate-700'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
      >
        {expert.title}
      </motion.p>
      <motion.p
        className='text-xs md:text-sm text-slate-600 max-w-xs'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
      >
        {expert.description}
      </motion.p>
    </motion.div>
  )
}

export default ExpertPresentation
