// science-backed-data.tsx
export interface Expert {
  id: string
  name: string
  title: string
  description: string
  imageUrl: string
}

export const expertsData: Expert[] = [
  {
    id: 'eduardo-bunge',
    name: 'Dr. Eduardo Bunge',
    title: 'Co-Founder & CEO ParenteAI',
    description: 'Professor, Department of Psychology Palo Alto University',
    imageUrl: '/images/eduardo-bunge.png'
  },
  {
    id: 'juan-pablo-dellarroquelle',
    name: 'Juan Pablo Dellarroquelle',
    title: 'Co-Founder & CTO ParenteAI',
    description: 'Technology executive, C-level advisor to technology companies',
    imageUrl: '/images/juan-pablo-della.png'
  },
  {
    id: 'antonio-hardan',
    name: 'Dr. Antonio Hardan',
    title: 'Co-Founder & CMA ParenteAI',
    description: 'Division of Child and Adolescent Psychiatry, Stanford University',
    imageUrl: '/images/antonio-hardan.png'
  }
]
