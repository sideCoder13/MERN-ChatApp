import { useEffect, useState } from 'react'
import useConversations from '../zustand/useConversation';
import toast from 'react-hot-toast';


const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const {messages,setMessages,selectedConversation} = useConversations()
    //selectedConversation => has the Id of the reciver

    useEffect(()=>{
        const getMessage = async()=>{
            setLoading(true);
            try{
                const res = await fetch(`/api/v1/messages/${selectedConversation._id}`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
        
                const data = await res.json();
                if (data.error) throw new Error(data.error);
        
                // console.log("From get messages- ",data.Messages)
                setMessages(data ?  data.Messages : [])
                toast.success("Chats opened!")
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false);
            }
    
        }
        if(selectedConversation?._id) getMessage();

    },[selectedConversation?._id, setMessages])
 
    return {messages,loading}
}

export default useGetMessages