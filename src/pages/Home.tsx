import  React from 'react'

// importons toutes les sections : 

import Landing from '@/components/sections/Landing'
import Competences from '@/components/sections/Competence'
import Contact from '@/components/sections/Contact'
import Realisations from '@/components/sections/Realisation'

/**
 * Page d'accueil unique du portfolio one-page
 * Assemble toutes les sections dans l'ordre d'affichage
 **/
// @component ?
// @returns {JSX.Element} La page complète avec toutes les sections

const Home = () => {
  return (
    <>
      {/* nous allons classer les sections par ordre  */}
      <Landing />
      <Competences />
      <Realisations />
      <Contact />
    </>
  )
}

export default Home
