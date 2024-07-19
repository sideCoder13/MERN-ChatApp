import React from 'react'
import { getEmoji } from '../../utils/emoji'
import useConversations from '../../zustand/useConversation';
import {useSocketContext} from "../../context/SocketContext"

const ConversationList = ({person,key}) => {

  const emoji = getEmoji();
  const {selectedConversation, setSelectedConversation} = useConversations();

  //tells us which we have clicked
  // console.log(selectedConversation)
  const isSelected = selectedConversation?._id === person._id

  const { onlineUsers } = useSocketContext();


	const isOnline = onlineUsers.includes(person._id);


  return (
    <div className={`flex gap-12 items-center overflow-hidden hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
      ${isSelected ? "bg-sky-500" : ""}`}

      onClick={()=>setSelectedConversation(person)}
    >
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-10 h-10 rounded-full">
          <img src={person.profile} alt="proile" />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
         <span className='text-gray-300 font-bold'>{person.fullName}</span>
      </div>
      <span className='text-gray-300 font-bold'>{emoji}</span>
    </div> 
  )
}

export default ConversationList