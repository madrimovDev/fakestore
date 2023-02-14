import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Navigation from '../components/navigation/Navigation'

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Navigation />

        <Outlet/>
    </div>
  )
}

export default MainLayout