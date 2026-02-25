import { links, type Link } from '@/utils/Links'
import React from 'react'
import { NavLink } from 'react-router-dom';


const LinksDesktop = () => {
  return (
    <div className='mars-font text-lg pt-2 tracking-[0.1rem] hidden text-white w-full lg:flex gap-x-20 justify-center items-center' >
      {links.map((link)=>{
        const{ref, label}=link as Link;
        return <NavLink to= {ref } className={({isActive})=>`capitalize tracking-wide ${isActive ? "underline text-2xl " : ""}`} >{label}</NavLink>
      })}
    
    </div>
  )
}

export default LinksDesktop
