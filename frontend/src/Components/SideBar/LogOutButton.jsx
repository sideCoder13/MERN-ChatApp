import React from 'react'

import { IoHome } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';

const LogOutButton = () => {
  return (
    <Link to="login" className='mt-auto'>
      {<CiLogout className='w-6 h-6 text-white cursor-pointer'/>}
    </Link>
  )


}

export default LogOutButton