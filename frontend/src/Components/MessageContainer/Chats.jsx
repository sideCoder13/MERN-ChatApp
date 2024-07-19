import React, { useEffect, useRef } from 'react'
import Chat from './Chat'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from "../Skeletons/messageSkeleton"
import useListenMessage from '../../hooks/useListenMessage'

const Chats = () => {
  const {messages=[],loading}= useGetMessages();

  useListenMessage();

  const lastMessageRef = useRef()
  useEffect(()=>{
    setTimeout(()=>{
        lastMessageRef.current?.scrollIntoView({behaviour:"smooth"})
    },100)
  },[messages])

  return (
    <div className='flex flex-col overflow-auto flex-1 px-4'>
      {
        !loading && messages.length > 0 && 
        messages.map((message,index)=>(
          <div key={message._id} ref={lastMessageRef}>
            <Chat message={message}/>
          </div>
        ))
      }
      { 
        !loading && 
        messages.length === 0 && 
        (<div className='text-center text-gray-300'>Send a message to start a conversation</div>)
      }
      {
        loading && [...Array(5)].map((_,idx)=>{ return <MessageSkeleton key={idx}/>})
      }
    </div>
  )
}

export default Chats