import React,{useState} from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const {setUserAuth} = useAuthContext();

  const login = async({userName, password}) => {
    setLoading(true)
    const success = handleInputErrors(userName, password);
		if (!success) return;
    try{
      const res = await fetch("/api/v1/auth/login",{
        method:'Post',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({userName, password})
      })
      
      if (!res.ok) {
        const errorData = await res.json();
        console.log('Error: ', errorData.error);
        toast.error(errorData.error || 'Login failed');
        setLoading(false);
        return;
      }
      const data = await res.json();

      localStorage.setItem("user",JSON.stringify(data))
      toast.success("Logged in successfully!")
      setUserAuth(data);
    }
    catch(err){
      toast.error(err)
    }
    finally{
      setLoading(false)
    }
  }

  function handleInputErrors(username, password) {
    if (!username || !password) {
      toast.error("Please fill in all fields");
      return false;
    }
  
    return true;
  }
  
  return {loading, login};
}



export default useLogin