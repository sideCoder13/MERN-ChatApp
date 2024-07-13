import React from 'react'
import { TiMessages } from "react-icons/ti";


const NotSelectedChats = () => {
  return (
    <div className='md:min-w-[450px] w-full h-full flex flex-col justify-center items-center'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col
        items-center gap-2'>
            <p>Welcome Pratham Singh 👋</p>
            <p>Select a chat to start messaging!</p>
            <TiMessages className='3xl md:text-6xl text-center' />
        </div>
    </div>
  )
}

export default NotSelectedChats