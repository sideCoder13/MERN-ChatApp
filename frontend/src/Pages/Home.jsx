import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import MessageContainer from '../Components/MessageContainer/MessageContainer'
import NotSelectedChats from '../Components/MessageContainer/NotSelectedChats'
import useConversations from '../zustand/useConversation'

const Home = () => {
  const {selectedConversation} = useConversations();

  const isSelected = selectedConversation ? true : false;

  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-auto bg-gray-400 bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <SideBar />
      {
        (isSelected) ? (<MessageContainer/>) : (<NotSelectedChats/>)
      } 
    </div>
  )
}

export default Home