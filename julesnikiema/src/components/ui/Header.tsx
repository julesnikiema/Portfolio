import React, { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import AljLogo from "../../assets/images/science-svgrepo-com.svg"

const Header = () : ReactNode => {
  return (
    <header className='w-full bg-black' >
      
      {/* <div className=" align-element grid grid-cols-1  p-3 md:grid-cols-3 p2 md:gap-5">
        <Link to="/" className="  justify-self-start self-center " >
        <h1 className="mars-font text-lg pt-2 tracking-[0.1rem] text-white "> Alassane Jules Premier NIKIEMA </h1>
        </Link>
        <Link to="/"  className='justify-self-end self-center md:justify-self-center' >
        <img src={AljLogo} alt="logo du site" className="h-12 w-12 object-cover rounded-full"  />
        </Link>
      </div> */}
    </header>
  )
}

export default Header
