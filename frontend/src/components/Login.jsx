import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav'
import './LoginStyle.css'
export default function Login() {
  return (
    <>
    <Nav/>
    <div className="login">
        <h1>Login</h1>
        <div className="email_div item">
            <input type="email" name="email" id="email" placeholder='Enter Email'/>
            

        </div>
        <div className="password_div item">
            <input type="password" name="password" id="password" placeholder='Enter password'/>

        </div>
        
        <div className="forgot">
            
            <span className="new">Forgot Password?<span className="click"><a href="#">Click Here</a></span></span>
        </div>
        <div className="btn">
            <button id="login">Login</button>
        </div>
        <div className="register">
            Don't have an account? <span className="sign_up"><a href="#">Register</a></span>
        </div>

    </div>
    </>
  )
}
