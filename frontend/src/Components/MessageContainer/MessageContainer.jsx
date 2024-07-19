import React, { useEffect } from 'react'
import Chats from "./Chats"
import MessageInput from './MessageInput'
import useConversations from '../../zustand/useConversation'

const MessageContainer = () => {

  //tells us who we are talking to
  const {selectedConversation, setSelectedConversation} = useConversations();

  // useEffect(()=>{
  //   return ()=>{setSelectedConversation(null)}
  // },[setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
    {/* <div> */}
        <div className=' bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text '>To:</span><span className='text-grey-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        
        <Chats/>
     
        <MessageInput/>

    </div>
    
  )
}

export default MessageContainer