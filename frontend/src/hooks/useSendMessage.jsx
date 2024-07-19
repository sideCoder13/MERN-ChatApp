import { useState } from 'react'
import useConversations from '../zustand/useConversation';
import toast from 'react-hot-toast';

//use => receves all the messages
const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages=[],setMessages,selectedConversation} = useConversations()
    //selectedConversation => has the Id of the reciver

    const sendMessage = async(message)=>{
        setLoading(true);
        try{
            const res = await fetch(`/api/v1/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({message})
            })
            const data = await res.json();
            
            if (data.error) throw new Error("hey- ",data.error);
            console.log("message- ",messages)
            // if(messages == "undefined") messages=[]
            setMessages([...messages,data.Messages])
            toast.success("Message sent!")
        } catch (error) {
			toast.error(`Pratham ,${error.message}`)
            console.error(error.message)
		} finally {
			setLoading(false);
		}

    }

    return {sendMessage,loading}
  
}

export default useSendMessage