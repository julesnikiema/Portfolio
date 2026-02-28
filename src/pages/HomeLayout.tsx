import React from 'react'

import { Header,Footer,Navbar } from '@/components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
     <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <main className="flex-1 pt-20"> {/* Ajout d'un padding-top pour compenser la navbar fixed */}
        <Outlet />
      </main>
      <Footer />
    </div>

    </>
  )
}

export default HomeLayout
