import React from 'react'


/**
 * Section Compétences - Fond noir, largeur 100%
 * Affiche les logos des langages de programmation et un micro pour l'art oratoire
 */
const Competence = () => {
  // Tu peux remplacer ces chemins par tes vraies images
  const technologies = [
    { nom: 'React', logo: '/logos/react.svg' },
    { nom: 'JavaScript', logo: '/logos/javascript.svg' },
    { nom: 'TypeScript', logo: '/logos/typescript.svg' },
    { nom: 'Python', logo: '/logos/python.svg' },
    { nom: 'HTML5', logo: '/logos/html5.svg' },
    { nom: 'CSS3', logo: '/logos/css3.svg' },
    { nom: 'Node.js', logo: '/logos/nodejs.svg' },
    { nom: 'Git', logo: '/logos/git.svg' },
    { nom: 'Drupal', logo: '/logos/drupal.svg' },
    {nom : 'Wordpress' ,logo : '/logos/wordpress.svg'}

  ]

  return (
    <section 
      id='competence' 
      className='w-full bg-black text-white py-16 md:py-14'
    >
      {/* Conteneur pour le contenu (centré à 80%) */}
      <div className="align-element">
        {/* Titre */}
        <h2 className="mars-font text-4xl md:text-4xl font-bold text-center mb-4">
          Compétences
        </h2>
        
        {/* Ligne décorative sous le titre (optionnel) */}
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

        {/* Grille des logos de programmation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-16">
          {technologies.map((tech) => (
            <div 
              key={tech.nom} 
              className="flex flex-col items-center gap-3 group"
            >
              {/* Conteneur du logo avec effet hover */}
              <div className="w-16 h-16 bg-white/10 rounded-lg p-3 group-hover:bg-white/20 transition-colors">
                <img 
                  src={tech.logo} 
                  alt={tech.nom}
                  className="w-full h-full object-contain"
                  // En attendant les vraies images, utilise ceci:
                  onError={(e) => {
                    e.currentTarget.src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.nom.toLowerCase()}/${tech.nom.toLowerCase()}-original.svg`
                  }}
                />
              </div>
              <span className="text-sm text-gray-300">{tech.nom}</span>
            </div>
          ))}
        </div>

        {/* Section Art Oratoire avec micro */}
        <div className="border-t border-white/20 pt-12">
          <h3 className=" mars-font text-2xl md:text-3xl font-semibold text-center mb-8">
            Art Oratoire
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Logo micro */}
            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="48" 
                height="48" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-primary"
              >
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </div>

            {/* Texte descriptif */}
            <div className="max-w-2xl text-center md:text-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionné par l'art oratoire, je maîtrise l'art de la communication 
                et de la présentation. Capacité à expliquer des concepts techniques 
                complexes de manière claire et engageante.
              </p>
              
              {/* Badges/Puces (optionnel) */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Prise de parole en public
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Pitch de projets
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  Communication technique
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competence