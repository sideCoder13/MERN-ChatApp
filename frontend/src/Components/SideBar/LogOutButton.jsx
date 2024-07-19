import React from 'react'
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import useConversations from '../../zustand/useConversation';

const LogOutButton = () => {
  const {loading, logout} = useLogout();
  const {setSelectedConversation} = useConversations()

  function handleLogout(){
    setSelectedConversation(null);
    logout()
  }

  return (
    <Link to="login" className='mt-auto'>
      {
        (!loading) ? 
          (
            <CiLogout 
              className='w-6 h-6 text-white cursor-pointer'
              onClick={handleLogout}
            />
          ) 
          : 
          (
            <span className='loading loading-spinner'></span>
          )
      }

      
    </Link>
  )


}

export default LogOutButton