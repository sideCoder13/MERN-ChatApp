
import React, { useEffect , useState} from 'react'

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversations] = useState([]);

  useEffect(()=>{
        const getConversation = async()=>{
            setLoading(true);
            try{
                const res = await fetch("/api/v1/users/", {
                    method:"GET",
                    headers: {"Content-Type":"application/json"}
                })
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                
                const finalData = Object.values(data)
                setConversations(finalData[0]);
            }
            catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
    
        }

        getConversation();
    },[])


    return {loading, conversation}
}

export default useGetConversations