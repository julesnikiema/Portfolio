// src/components/ui/LinksDesktop.tsx
import { links, type Link } from '@/utils/Links'
import React, { useEffect, useState } from 'react'

const LinksDesktop = () => {
  const [activeSection, setActiveSection] = useState('accueil')

  // Ajuste le threshold pour une meilleure détection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        threshold: 0.3, // 30% visible au lieu de 50%
        rootMargin: "-80px 0px -80px 0px" // Compense la navbar
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80; // Hauteur de la navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const getSectionId = (ref: string): string => {
    switch(ref) {
      case '/': return 'accueil'
      case '/Competence': return 'competence' 
      case '/Realisation': return 'realisations'
      case '/Contact': return 'contact'
      default: return ref.replace('/', '').toLowerCase()
    }
  }

  return (
    <div className='mars-font text-lg pt-2 tracking-[0.1rem] hidden text-white w-full lg:flex gap-x-20 justify-center items-center'>
      {links.map((link) => {
        const { ref, label } = link as Link
        const sectionId = getSectionId(ref)
        const isActive = activeSection === sectionId
        
        return (
          <a
            key={ref}
            href={`#${sectionId}`}
            onClick={(e) => handleClick(e, sectionId)}
            className={`capitalize tracking-wide transition relative group ${
              isActive ? 'text-white font-bold' : 'hover:text-gray-300'
            }`}
          >
            {label}
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all ${
              isActive ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </a>
        )
      })}
    </div>
  )
}

export default LinksDesktop