import React from 'react';

import Course from './courses/Course';
import Home from './home/home';
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup';


import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {

  const [authUser, setAuthUser]=useAuth();
  console.log(authUser);

  return (
   <>
  
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/Course' element={authUser?<Course />:<Navigate to="/signup" /> } />
   <Route path='/signup' element={<Signup />} />
  </Routes>
  <Toaster />
  
   </>
  );
}

export default App;
