import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center min-w-96'>
      <div className = "p-5 h-4/5 flex flex-col items-center justify-center   pl-5 w-full bg-red-900 rounded-md bg-clip-padding backdrop-filter
       backdrop-blur-lg bg-opacity-10 border border-gray-400">
        <h1 className='text-gray-300 text-3xl font-semibold text-center'>
          Login
          {/* <h2 className=" text-gray-300">  ChatSynergy</h2> */}
        </h1>
        

        <form>
          <>
            <label className='label p-2 '>
              <span className='text-base label-text text-gray-200'>User Name:</span>
            </label>
            <input type='text' placeholder='Enter your User Name' 
            className="input input-bordered input-primary w-full max-w-xs"/>
          </>

          <>
            <label className='label p-2'>
              <span className='text-base label-text  text-gray-200'>Password:</span>
            </label>
            <input type='password' placeholder='Enter your Password' 
            className="input input-bordered input-primary w-full max-w-xs"/>
          </>

          <>
            <Link to='/signup' className=' hover:underline hover:text-blue-600 mt-2 inline-block'>
              Don't have an account?
            </Link>
          </>

          
          <div className='flex justify-center items-center'>
            <button className='flex justify-center items-center px-2 text-center p-3 btn btn-active  mt-5'>Log In</button>
          </div>
          

        </form>
      </div>
    </div>
    
  )
}

export default Login