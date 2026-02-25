import React from 'react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem  } from './dropdown-menu'
import { links, type Link } from '@/utils/Links';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './button';

const LinksMobile = () => {
  return (
    <DropdownMenu>
      {/* dans le dropdowntrigger on est obliger de mettre le aschild pour dire qu'il contient un enfant */}
    <DropdownMenuTrigger asChild className='lg:hidden' >
    <Button variant="outline" size="icon" >
     <Menu/>
    </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className='lg:hidden' align='start' sideOffset={10} >
     
      
      {links.map((link)=>{
        const{ref, label}=link as Link;
        return ( 
          <DropdownMenuItem key={label}  >
           <NavLink to= {ref } className={({isActive})=>`capitalize tracking-wide font-light ${isActive ? "text-primary text-2xl" : ""}`} >{label}</NavLink>
    </DropdownMenuItem>  )})}
      
    </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LinksMobile
