import React,{ useState } from 'react';

import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Home from './components/home.jsx';
import './App.css';


function App() {
  

  return (
    <>
    
      <Login />
      <About/>
      <Home/>
      
    </>
  );
}

export default App;
