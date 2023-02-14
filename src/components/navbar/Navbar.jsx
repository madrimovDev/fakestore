import React from 'react'
import Actions from './Actions'
import Logo from './Logo'
import Search from './Search'

const Navbar = () => {
  return (
    <nav className='bg-sky-900 py-6'>
      <div className="container flex justify-between items-center mx-auto">
        <div className='flex gap-10'>
          <Logo />
          <Search />
        </div>
        <Actions />
      </div>
    </nav>
  )
}

export default Navbar