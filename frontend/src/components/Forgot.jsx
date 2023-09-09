import React from 'react';
import Nav from './Nav';
import './LoginStyle.css';
export default function Forgot() {
  return (
    <>
    <Nav/>
    <img src="./src/assets/pic14.png" alt="img" id="one"></img>
    <img src="./src/assets/pic15.png" alt="img" id="two"></img>
    <div className="login">
        <h1>Reset Password</h1>
        <div className="email_div item">
            <input type="email" name="email" id="email" placeholder='Enter Email'/>
        </div>
        <div className="password_div item">
            <input type="password" name="password" id="new_password" placeholder='Enter new password'/>

        </div>
        <div className="confirm_div item">
            <input type="password" name="reset_password" id="reset_password" placeholder='Confirm password'/>
        </div>        
        <div className="btn">
            <button id="reset">Reset</button>
        </div>
    </div>
    </>
  )
}
