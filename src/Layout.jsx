import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function Layout() {
  return (
    // <>
    //     <Header/>
    //     <Outlet/>
    //     <Footer/>

    // </>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-14">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout