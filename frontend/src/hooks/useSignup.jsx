import React,{useState} from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';


const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const {setUserAuth} = useAuthContext();

    const signup = async({fullName,userName,password,confirmPassword,gender}) => {
        const success = handleInputError({fullName,userName,password,confirmPassword,gender});
        if(!success)return;

        setLoading(true);
        try{
            const res = await fetch("/api/v1/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({fullName,userName,password,confirmPassword,gender})
            })

            const data = await res.json();
           
            //create local storage
            localStorage.setItem("user",JSON.stringify(data));
            setUserAuth(data);

        }catch(err){
            toast.error("Error in siging up")
            console.log("Error in siging up: ",err);
        }finally{
            setLoading(false)
        }
    }

    return {loading, signup}
}

export default useSignup

const handleInputError = ({fullName,userName,password,confirmPassword,gender}) => {
    if(!fullName || !userName || !password || !confirmPassword || !gender){
        toast.error("Please fill all fields!")
        return false
    }

    if(password !== confirmPassword){
        toast.error("Password does not match!");
        return false 
    }

    if(password.length < 6){
        toast.error("Password length must be atleast 6 characters")
        return false
    }

    return true
    
}

