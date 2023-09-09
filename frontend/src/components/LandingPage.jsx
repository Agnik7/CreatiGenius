import React from 'react';
import Nav from './Nav';
import {useNavigate} from 'react-router-dom';
import './LandingPageStyle.css';
export default function LandingPage() {
  const navigate=useNavigate();
    const handleLoginRoute=()=>
    {
        navigate('/about');
    }
  return (
    
    <>
      <Nav/>
      <main className='main'>
        <section className='left_segment'>
          <h1>Creatigenius</h1>
          <p>Welcome to CreatiGenius, your ultimate solution for effortless and exceptional content creation. Say goodbye to writer's block and hello to limitless creativity with our cutting-edge software designed to empower your words and ideas like never before.</p>
          <div className="About_btn"><button id="about" onClick={handleLoginRoute}>Try it now!</button></div>

        </section>
        <section className="right_segment">
          
            <img src='./src/assets/pic5.png' alt="creatigenius"></img>
          
        </section>
      </main>
      
    </>
  )
}
