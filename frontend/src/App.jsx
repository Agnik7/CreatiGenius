import React,{ useState } from 'react';

import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import home from './components/home.jsx';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'

function App() {
  

  return (
    <>
    
      
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<home/>}/>
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
