
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {useAuthContext} from "../context/AuthContext"

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setUserAuth} = useAuthContext();

  const logout = async() => {
    setLoading(true)
    try{
        //get user fron local storage
        localStorage.removeItem("user")
        const res = await fetch("/api/v1/auth/logout", {
            method:"POST",
            headers:{"Content-Type":"application/json"}
        })
        const data = res.json();
        if(data.error){
            console.error(data.error)
        }
        toast.success("Logged Out Successfully!")
        setUserAuth(null);
    }
    catch(err){
        toast.error(err)
    }
    finally{
        setLoading(false)
    }
    
  }

  return {loading, logout};
}

export default useLogout