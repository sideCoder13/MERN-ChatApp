import React from 'react'

const ConversationList = ({person}) => {
  return (
    <div className='flex  gap-12 items-center overflow-auto hover:bg-sky-500 rounded p-2 py-1 cursor-pointer '>
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src={person.img} alt="proile" />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <span className='text-gray-300 font-bold'>{person.name}</span>
      </div>
      
    </div>
  )
}

export default ConversationList