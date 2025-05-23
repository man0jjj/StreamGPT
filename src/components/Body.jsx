import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Login from './Login.jsx'
import Browse from './Browse.jsx'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice.js';


const Body = () => {


const dispatch = useDispatch()

const appRouter = createBrowserRouter([
  
 { path: "/",
  element: <Login/>
 },
 {
  path: "/browse",
  element: <Browse/>,
 },
]);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid, email, displayName} = user;
    dispatch(addUser({ uid: uid, email, displayName: displayName }))
    
   
  } else {

    dispatch(removeUser());
    
    
  }
});
  
})

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
