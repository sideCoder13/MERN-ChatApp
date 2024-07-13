import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import MessageContainer from '../Components/MessageContainer/MessageContainer'
import NotSelectedChats from '../Components/MessageContainer/NotSelectedChats'

const Home = () => {
  const isChatSelected = false;

  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <SideBar />
      {
        (isChatSelected) ? (<MessageContainer/>) : (<NotSelectedChats/>)
      } 
    </div>
  )
}

export default Home