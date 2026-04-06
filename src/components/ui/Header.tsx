import  { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import AljLogo from "../../assets/images/science-svgrepo-com.svg"

const Header = () : ReactNode => {
  return (
   <header className="w-full bg-black">
  <div className="align-element flex items-center justify-between py-3">
    <Link to="/">
      <h1 className="mars-font text-sm sm:text-base md:text-lg tracking-wide text-white">
        Alassane Jules Premier NIKIEMA
      </h1>
    </Link>
    <Link to="/">
      <img
        src={AljLogo}
        alt="logo du site"
       className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
      />
    </Link>
  </div>
</header>
  )
}

export default Header
