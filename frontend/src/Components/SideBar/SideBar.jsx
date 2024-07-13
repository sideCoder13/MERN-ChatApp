import React from 'react'
import SearchInput from './SearchInput'
import ConversationList from "./ConversationList"
import LogOutButton from "./LogOutButton"

const SideBar = () => {
  
  const persons = [
    {
      img: "https://avatar.iran.liara.run/public/boy",
      name:"Dhruv Chavan"
    },
    {
      img: "https://avatar.iran.liara.run/public/boy",
      name:"Pratham Singh"
    },
    {
      img: "https://avatar.iran.liara.run/public/girl",
      name:"Atharva Nadkar"
    }
  ]
  return (
    <div className='min-w-90 h-full border-r border-slate-500 p-4 flex flex-col'>

        <SearchInput/>
        <div className='divider px-3 ' />

        <div className='flex flex-col flex-1 overflow-auto'>
          {
            persons.map((person, index)=>{
              return <ConversationList key={index} person={person}/>
            })
          }
        </div>
        
        <div className='divider py-0 my-1 h-1 ' />

        <LogOutButton/>
    </div>
  )
}

export default SideBar