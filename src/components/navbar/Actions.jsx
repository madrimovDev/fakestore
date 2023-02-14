import React from 'react'
import { Link } from 'react-router-dom'
import { BiUser, BiLogIn, BiCartAlt } from 'react-icons/bi'

const Actions = () => {
  return (
    <ul className='flex gap-6'>
      <li>
        <Link className='flex items-center gap-2 text-white text-lg hover:text-amber-500 transition-all' to='/signin'>
          <BiUser />
          Sign in
        </Link>
      </li>
      <li>
        <Link className='flex items-center gap-2 text-white text-lg hover:text-amber-500 transition-all' to='/signup'>
          <BiLogIn />
          Sign up
        </Link>
      </li>
      <li>
        <Link className='flex items-center gap-2 text-white text-lg hover:text-amber-500 transition-all' to='/cart'>
          <BiCartAlt />
          Cart
        </Link>
      </li>
    </ul>
  )
}

export default Actions