import { type ReactNode } from 'react'
import LinksMobile from './LinksMobile'
import LinksDesktop from './LinksDesktop'

const Navbar = () :ReactNode => {
  return (
    <nav className='bg-amber-700 py-5 fixed top-0 left-0 w-full z-50'>
      <div className="align-element"> {/*  align-element pour centrer le contenu */}
        <LinksMobile />
        <LinksDesktop/>
      </div>  
    </nav>
  )
}

export default Navbar