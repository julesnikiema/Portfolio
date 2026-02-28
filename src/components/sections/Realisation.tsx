import socorezImage from "../../assets/images/socorez-site.png";
import Aneve from "../../assets/images/aneve.jpg"
import ArtOratoire from "../../assets/images/site_perso.png"

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
      titre: "Socorez Holding",
      description: "Conception et développement du site web institutionnel de Socorez Holding, incluant la définition de l’architecture de l’information, le design UX/UI et l’implémentation technique d’une solution performante, responsive et alignée avec l’identité de marque de l’entreprise. ",
      image: socorezImage ,
      couleur: "bg-amber-800" // Premier projet mis en évidence
    },
    {
      id: 2,
      titre: "ANEVE (Site web développé sous Drupal-Projet collaboratif)",
      description: "Participation au développement d’un site web sous Drupal au sein d’une équipe projet. Contribution active à la phase de réalisation technique et d’intégration. À l’issue du projet, animation de sessions de formation destinées aux clients, portant sur l’administration, la gestion de contenu et la prise en main complète de la plateforme.",
      image:Aneve,
      couleur: "bg-amber-800"
    },
    {
      id: 3,
      titre: "Site personnel – Art oratoire",
      description: "Conception et développement d’un site web personnel dédié à la présentation de mes activités en art oratoire. La plateforme met en valeur mes interventions, prestations et contenus, avec une attention particulière portée à l’expérience utilisateur, à la clarté du message et à l’identité visuelle.",
      image: ArtOratoire,
      couleur: "bg-amber-800"
    },
  ]

  return (
    <section 
      id='realisation'
      className='w-full  text-black py-16 md:py-24'>

      <div className="align-element">
        {/* En-tête de section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-4xl font-bold mb-4  mars-font">
            Réalisations
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Grille des réalisations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="relative h-48 bg-/20 flex items-center justify-center">
              <img   className="w-full h-full object-cover" src={realisation.image} alt="" />
              </div>

              {/* Contenu texte */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  {realisation.titre}
                </h3>
                <p className="text-sm text-black-200/80">
                  {realisation.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Realisation