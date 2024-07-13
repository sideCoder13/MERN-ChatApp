import React from 'react'
import { MdOutlineSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <div className='flex gap-2 items-center p-3'>
      <input placeholder='Search...' name='text' className='input input-bordered rounded-full'></input>
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        {<MdOutlineSearch className='w-6 h-6 outline-none'/>}
      </button>
    </div>
  )
}

export default SearchInput