import React from 'react'
import useConversations from '../../zustand/useConversation'
import extractTime from "../../utils/exactTime"
import { useAuthContext } from '../../context/AuthContext';


const Chat = ({message}) => {
  const {selectedConversation} = useConversations();
  const {userAuth} = useAuthContext();

  //true => user is reciver
  //From authUser perspective => left
  const currentUser = selectedConversation._id == message.senderId;
  const senderOrReciver = currentUser ? "chat-start" : "chat-end";
  const formattedTime = extractTime(message.createdAt);
  const blueColor = currentUser ? "" : "bg-sky-500"
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className='text-white m-1'>
        <div className={`chat ${senderOrReciver}`}>
        <div className="chat-image avatar ">
            <div className="w-10 rounded-full ">
            <img
              alt="Tailwind CSS chat bubble component"
              src={currentUser ? selectedConversation.profile : userAuth.profile} />
            </div>
        </div>
        <div className="chat-header text-white mr-1 ">
            {currentUser ? selectedConversation.fullName : userAuth.fullName}
            <time className="text-xs opacity-70 p-1">{formattedTime}</time>
        </div>
        <div className={`chat-bubble text-white ${blueColor} ${shakeClass}`}>{message.message[0]}</div>
      {/* <div className="chat-footer opacity-90">Delivered</div> */}
      </div>
    </div>
  )
}

export default Chat