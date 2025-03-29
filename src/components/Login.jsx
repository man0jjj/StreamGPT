import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

const toggleSignInForm = () => {

  setIsSignInForm(!isSignInForm);

};


  return (
    <div>
    <div>
      <Header/>
    </div>
         
    <div>
      <img className='absolute'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg'
      alt='logo'/>
    </div>
    <form className='w-3/12 p-12 text-white rounded-lg 
      my-36 mx-auto right-0 left-0 absolute bg-black bg-opacity-50'>
     <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign in" : "Sign up"}</h1>
     {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>)}
      <input 
      type='text' placeholder='Email address' 
      className='p-4 my-4 w-full bg-gray-700'></input>
      <input
       type='password' placeholder='Password' 
       className='p-4 my-4 w-full bg-gray-700'></input>
    <button className='p-4 my-4 bg-red-700 w-full rounded-lg '>
      {isSignInForm ? "Sign in" : "Sign up"}</button>
    <p className='py-4 cursor-pointer'onClick={toggleSignInForm} >
      {isSignInForm ? "New to Netflix? Sign Up Now  " : "Already Registered? Sign In "}</p>
    
    </form>
    </div>
  )
}

export default Login
