import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInform] = useState(true); // Default to Sign In
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up flow
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed up successfully:", user);
           navigate("/browse")
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Sign In flow
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed in successfully:", user);
          navigate("/browse")
         })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInform(!isSignInForm);
    setErrorMessage(null);  
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='background'
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='bg-black/70 text-white w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 rounded-lg'
      >
        <h1 className='font-bold text-white p-4 text-3xl'>
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <input
            type='text'
            placeholder='Full Name'
            className='rounded-lg bg-gray-700 p-2 m-2 w-full'
          />
        )}

        <input
          ref={email}
          type='text'
          placeholder='Email address'
          className='rounded-lg bg-gray-700 p-2 m-2 w-full'
        />

        <input
          ref={password}
          type='password'
          placeholder='Password'
          className='bg-gray-700 p-2 m-2 w-full rounded-lg'
        />

        <p className='px-4 text-red-600 font-bold'>{errorMessage}</p>

        <button
          className='p-4 m-2 bg-red-500 w-full rounded-lg'
          onClick={handleButtonClick}
        >
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>

        <p className='p-4 m-2 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm
            ? 'New to Netflix? Sign Up now'
            : 'Already registered? Sign In now'}
        </p>
      </form>
    </div>
  );
};

export default Login;
