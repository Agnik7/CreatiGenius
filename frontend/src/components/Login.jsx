import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
import './LoginStyle.css';
import Register from './Register';
import {useNavigate} from 'react-router-dom';
export default function Login() {
    const navigate=useNavigate();
    const handleRegisterRoute=()=>
    {
        navigate('/register');
    }
    const handleForgotRoute=()=>{
        navigate('/reset');
    }
  return (
    <>
    <Nav/>
    <img src="./src/assets/pic10.png" alt="img" id="one"></img>
    <img src="./src/assets/pic11.png" alt="img" id="two"></img>
    <div className="login">

        <h1>Login</h1>
        <div className="email_div item">
            <input type="email" name="email" id="email" placeholder='Enter Email'/>
            

        </div>
        <div className="password_div item">
            <input type="password" name="password" id="password" placeholder='Enter password'/>

        </div>
        
        <div className="forgot">
            
            <span className="new">Forgot Password?<span className="click" onClick={handleForgotRoute}>Click Here</span></span>
        </div>
        <div className="btn">
            <button id="login">Login</button>
        </div>
        <div className="register">
            Don't have an account? <span className="sign_up" onClick={handleRegisterRoute}>Register</span>
        </div>

    </div>
    </>
  )
}
