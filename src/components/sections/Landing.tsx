import Julesimg from '../../assets/images/informa.jpg'

const Landing = () => {
  return (
    // insertion d'une image 
    <section id='accueil' className='align-element w-4/5 mx-auto py-12 md:py-5 ' > 
      <div className='flex flex-col md:flex-row items-center gap-5 md:gap-50' >
        {/* insertion de l'image a gauche */}
          <div className='w-full md:w-1/3' > 
            <div className='relative aspect-square rounded-2xl overflow-hidden shadow-xl'> 
              <img src={Julesimg} alt='Jules NIKIEMA' className='w-full h-full object-cover'/>
            </div>
          </div>
    

        <div className='w-full md:w-1/2 space-y-6'>
        <h1 className='text-4xl md:tex-5xl lg:test-6xl font-bold' >
          <span className='mars-font text-lg pt-2 tracking-[0.1rem] block text-primary' >Alassane Jules Premier NIKIEMA</span>
          <span className='block text-2xl md:text-3xl text-muted-foreground mt-2' > Développeur et passionné d’art oratoire  </span>
        </h1>

        <p className='text-lg text-muted-foreground leading-relaxed' >
          Ingénieur en Systèmes d’Information et Réseaux, passionné par le développement logiciel et web.
          Je conçois des solutions numériques utiles, structurées et performantes.
          Mon parcours m’a permis de travailler sur des projets concrets, avec rigueur et sens du résultat.
          Curieux et adaptable, j’apprends  et m’investis pleinement dans chaque mission.
          En parallèle, je suis passionné par l’art oratoire, la formation et la maîtrise de cérémonie.
        </p>
        <div className='flex flex-wrap md:gap-20 pt-4'>
         <div className="flex flex-wrap gap-4 pt-4">
  {/* <button className="bg-amber-700 text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition" href="#">
    Voir mes réalisations
  </button>

  <button className="bg-amber-700 text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition">
    Me contacter
  </button> */}
</div>
          
        </div>
        </div>
    </div>
    </section>
  )
}

export default Landing
