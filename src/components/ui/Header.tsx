import  { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import AljLogo from "../../assets/images/science-svgrepo-com.svg"

const Header = () : ReactNode => {
  return (
   <header className="w-full bg-black">
  <div className="align-element flex flex-col md:flex-row items-center justify-center p-3 gap-4">
    <Link to="/">
      <h1 className="mars-font text-lg pt-2 tracking-[0.1rem] text-white text-center md:text-left">
        Alassane Jules Premier NIKIEMA
      </h1>
    </Link>
    <Link to="/">
      <img
        src={AljLogo}
        alt="logo du site"
        className="h-12 w-12 object-cover rounded-full"
      />
    </Link>
  </div>
</header>
  )
}

export default Header
