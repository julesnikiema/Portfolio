import React, { type ReactNode } from 'react'
import LinksMobile from './LinksMobile'
import LinksDesktop from './LinksDesktop'

const Navbar = () :ReactNode => {
  return (
    <nav className='bg-black  py-5'>
      <div>
        <LinksMobile />
        <LinksDesktop/>
      </div>  
    </nav>
  )
}

export default Navbar
