import React from 'react'
import Chat from './Chat'

const Chats = () => {



  return (
    <div className='flex flex-col overflow-auto flex-1 px-4'>
        <Chat/>
        <Chat/>
        <Chat/><Chat/><Chat/><Chat/><Chat/>
    </div>
  )
}

export default Chats