import {useState} from 'react'
import GenderCheckBox from "../Components/GenderCheckBox"
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const [input,setInput] = useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
  })

  const {loading, signup} = useSignup();

  const handleCheckBoxChange = (gender)=>{
    setInput({...input,gender})
  }

  const handleSubmit = async (e) => {
		e.preventDefault();
    await signup(input)
	};

  return (
      <div className='flex h-screen flex-col items-center justify-center min-w-96'>
        <div className = "p-5 h-11/12 flex flex-col items-center justify-center   pl-5 w-full bg-red-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400" >

          <h1 className='text-gray-300 text-3xl font-semibold text-center'>
            Sign Up
            {/* <h2 className=" text-gray-300">  ChatSynergy</h2> */}
          </h1>
  
          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2 '>
                <span className='text-base label-text text-gray-200'>Full Name:</span>
              </label>
              <input  
                type='text' 
                placeholder='Enter your User Name' 
                className="input input-bordered input-primary w-full max-w-xs"
                value={input.fullName}
                onChange={(e)=>setInput({...input,fullName: e.target.value})}
              />
            </div>

            <div>
              <label className='label p-2 '>
                <span className='text-base label-text text-gray-200'>User Name:</span>
              </label>
              <input 
                type='text' 
                placeholder='Enter your User Name' 
                className="input input-bordered input-primary w-full max-w-xs"
                value={input.userName}
                onChange={(e)=>setInput({...input,userName: e.target.value})}
              />
            </div>

            <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={input.gender}/>
  
            <div>
              <label className='label p-2'>
                <span className='text-base label-text  text-gray-200'>Password:</span>
              </label>
              <input 
                type='password' 
                placeholder='Enter your Password' 
                className="input input-bordered input-primary w-full max-w-xs"
                value={input.password}
                onChange={(e)=>setInput({...input,password: e.target.value})}
              />
            </div>

            <div>
              <label className='label p-2'>
                <span className='text-base label-text  text-gray-200'>Confirm Password:</span>
              </label>
              <input 
                type='password' 
                placeholder='Enter your Password' 
                className="input input-bordered input-primary w-full max-w-xs"
                value={input.confirmPassword}
                onChange={(e)=>setInput({...input,confirmPassword: e.target.value})}
              />
            </div>
  
            <div>
              <Link to='/login' className=' text-gray-200 hover:underline hover:text-blue-400 mt-2 inline-block'>
                Already have an account? 
              </Link>
            </div>
  
            
            <div className='flex justify-center items-center'>
              <button type="submit" className='flex justify-center items-center px-2 text-center p-3 btn btn-active mt-5'>SignUp</button>
            </div>
          </form>
        </div>
      </div>
      
  );
};

export default Signup



