import React from 'react';
import Nav from './Nav';
import './LoginStyle.css';
import {useNavigate} from 'react-router-dom';
export default function Register() {
    const navigate=useNavigate();
    const handleLoginRoute=()=>
    {
        navigate('/login');
    }
  return (
    <>
    <Nav/>
    <img src="./src/assets/pic12.png" alt="img" id="one"></img>
    <img src="./src/assets/pic13.png" alt="img" id="two"></img>
    <div className="login">
        <h1>Register</h1>
        <div className="name_div item">
            <input type="text" name="text" id="text" placeholder='Enter Name'/>
            

        </div>
        <div className="email_div item">
            <input type="email" name="email" id="email" placeholder='Enter Email'/>
            

        </div>
        <div className="password_div item">
            <input type="password" name="password" id="password" placeholder='Enter password'/>

        </div>
        <div className="confirm_div item">
            <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm password'/>
        </div>
        
        <div className="btn">
            <button id="register">Register</button>
        </div>
        <div className="register">
            Already an user? <span className="sign_up" onClick={handleLoginRoute}>Login</span>
        </div>

    </div>
    </>
  )
}
