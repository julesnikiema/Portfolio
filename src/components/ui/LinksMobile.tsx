import React, { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem  } from './dropdown-menu'
import { links, type Link } from '@/utils/Links'
import { Menu } from 'lucide-react'
import { Button } from './button'

/**
 * Navigation mobile avec dropdown pour le one-page
 * Avec détection de la section active et scroll précis
 */
const LinksMobile = () => {
  const [activeSection, setActiveSection] = useState('accueil')
  const [isOpen, setIsOpen] = useState(false)

  // Détecte la section active (même que LinksDesktop)
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
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px" // Compense la navbar
      }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Fonction pour le défilement fluide avec offset (copiée de LinksDesktop)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80; // Hauteur de la navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    // Ferme le dropdown après le clic
    setIsOpen(false)
  }

  // Mapping des routes vers les IDs des sections (corrigé)
  const getSectionId = (ref: string): string => {
    switch(ref) {
      case '/': return 'accueil'
      case '/Competence': return 'competence'  // Corrigé: 'competence' sans 's'
      case '/Realisation': return 'realisations'
      case '/Contact': return 'contact'
      default: return ref.replace('/', '').toLowerCase()
    }
  }

  return (
    <div className="flex justify-end lg:hidden p-3">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="default" className="p-4 text-2xl  hover:bg-amber-700">
            <Menu />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="lg:hidden bg-amber-800 border-amber-700" align="start" sideOffset={10}>
          {links.map((link) => {
            const { ref, label } = link as Link
            const sectionId = getSectionId(ref)
            const isActive = activeSection === sectionId

            return (
              <DropdownMenuItem 
                key={label} 
                className={`cursor-pointer ${isActive ? 'bg-amber-700' : ''}`}
              >
                <a
                  href={`#${sectionId}`}
                  onClick={(e) => handleClick(e, sectionId)}
                  className={`capitalize tracking-wide font-light w-full py-2 px-4 transition ${
                    isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default LinksMobile