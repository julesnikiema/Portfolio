import React from 'react'

import { Header,Footer,Navbar } from '@/components'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <h1>bonjour M. NIKIEMA</h1>
      <Footer />

    </>
  )
}

export default HomeLayout
