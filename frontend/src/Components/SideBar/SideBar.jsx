import React from 'react'
import SearchInput from './SearchInput'
import ConversationList from "./ConversationList"
import LogOutButton from "./LogOutButton"
import useGetConversations from "../../hooks/useGetConversations"

const SideBar = () => {

  const {loading,conversation} = useGetConversations();

  return (
    <div className='min-w-90 h-full border-r border-slate-500 p-4 flex flex-col'>

        <SearchInput/>
        <div className='divider px-3 ' />

       { 
        loading ? <span className='loading loading-spinner mx-auto'></span> : !null && <div className='flex flex-col flex-1 overflow-auto'>
            {
                conversation.map((person,key)=>{
                  return <ConversationList key={conversation._id} person={person}/>
                })
              
            }
          </div>
        }
        
        <div className='divider py-0 my-1 h-1 ' />

        <LogOutButton/>
    </div>
  )
}

export default SideBar