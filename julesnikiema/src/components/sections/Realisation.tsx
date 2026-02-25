import React from 'react'

interface Realisation {
  id: number
  titre: string
  description: string
  image: string
  couleur: string
}

const Realisation = () => {
  const realisations: Realisation[] = [
    {
      id: 1,
      titre: "Projet 1",
      description: "Description du projet 1",
      image: "/images/placeholder-1.jpg",
      couleur: "bg-amber-700" // Premier projet mis en évidence
    },
    {
      id: 2,
      titre: "Projet 2",
      description: "Description du projet 2",
      image: "/images/placeholder-2.jpg",
      couleur: "bg-gray-800"
    },
    {
      id: 3,
      titre: "Projet 3",
      description: "Description du projet 3",
      image: "/images/placeholder-3.jpg",
      couleur: "bg-gray-800"
    },
    {
      id: 4,
      titre: "Projet 4",
      description: "Description du projet 4",
      image: "/images/placeholder-4.jpg",
      couleur: "bg-gray-800"
    }
  ]

  return (
    <section 
      id='realisation' 
      className='w-full bg-amber-50 text-white py-16 md:py-24'
      aria-label="Section réalisations"
    >
      <div className="align-element">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Réalisations
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Grille des réalisations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {realisations.map((realisation) => (
            <article
              key={realisation.id}
              className={`
                ${realisation.couleur} 
                rounded-lg overflow-hidden shadow-lg 
                transition-all duration-300 
                hover:scale-105 hover:shadow-xl
              `}
            >
              {/* Zone image */}
              <div className="relative h-48 bg-black/20 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white/50"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                  <line x1="16" y1="2" x2="16" y2="22"/>
                  <line x1="8" y1="2" x2="8" y2="22"/>
                  <line x1="2" y1="8" x2="22" y2="8"/>
                  <line x1="2" y1="16" x2="22" y2="16"/>
                </svg>
              </div>

              {/* Contenu texte */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {realisation.titre}
                </h3>
                <p className="text-sm text-gray-200/80">
                  {realisation.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Indication (à supprimer quand les vraies images seront ajoutées) */}
        <p className="text-center text-gray-500 text-sm mt-8">
          * Les visuels seront bientôt disponibles
        </p>
      </div>
    </section>
  )
}

export default Realisation