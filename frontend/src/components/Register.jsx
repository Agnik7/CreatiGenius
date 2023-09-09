import React from 'react'
import './Navstyle.css'
export default function Register() {
  return (
    <>
    <Nav/>
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
            <input type="password" name="password" id="password" placeholder='Confirm password'/>

        </div>
        
        
        <div className="btn">
            <button id="login">Register</button>
        </div>
        <div className="register">
            Already an user? <span className="sign_up"><a href="#">Login</a></span>
        </div>

    </div>
    </>
  )
}
