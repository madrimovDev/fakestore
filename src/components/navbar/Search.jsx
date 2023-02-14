import React from 'react'

const Search = () => {
  return (
    <form className='bg-white flex rounded-[10px] overflow-hidden'>
      <input placeholder='Search any things' className='bg-none border-0 outline-0 px-2' type="text" />
      <button className='bg-amber-500 rounded-[5px] px-6 py-2 text-white'>Search</button>
    </form>
  )
}

export default Search