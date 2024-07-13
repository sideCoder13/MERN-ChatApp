import React from 'react'
import Chats from "./Chats"
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
    {/* <div> */}
        <div className=' bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text '>To:</span><span className='text-grey-900 font-bold'>Pratham Singh</span>
        </div>
        
        <Chats/>
     
        <MessageInput/>

    </div>
    
  )
}

export default MessageContainer