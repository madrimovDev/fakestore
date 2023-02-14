import React from 'react'
import NavList from './NavList'

const Navigation = () => {
  return (
    <div className='py-4 bg-gray-200'>
        <div className="container mx-auto flex justify-between items-center">
        <NavList/>
        <p>30 days free return</p>
        </div>
    </div>
  )
}

export default Navigation