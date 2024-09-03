import React from 'react';

import Course from './courses/Course';
import Home from './home/home';
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup';

function App() {
  return (
   <>
  
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/Course' element={<Course />} />
   <Route path='/signup' element={<Signup />} />
  </Routes>
  
  
   </>
  );
}

export default App;
