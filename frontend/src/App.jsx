import React,{ useState } from 'react';

import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import LandingPage from './components/LandingPage.jsx';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './components/Nav.jsx';

function App() {
  

  return (
    <>
    <Nav/>
    
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
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
