import React,{ useState } from 'react';

import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import LandingPage from './components/LandingPage.jsx';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import InputPage from './components/InputPage.jsx';
import Register from './components/Register.jsx';
import Forgot from './components/Forgot.jsx';
import OutputPage from './components/OutputPage.jsx';
function App() {
  

  return (
    <>
    
    
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
        <Routes>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Routes>
          <Route path='/reset' element={<Forgot/>}/>
        </Routes>
        <Routes>
          <Route path='/user_input' element={<InputPage/>}/>
        </Routes>
        <Routes>
          <Route path='/content' element={<OutputPage/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
