import axios from 'axios';
import React,{useState} from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import './LoginStyle.css';
export default function Forgot() {
    const baseURL = import.meta.env.VITE_KEY;
    const navigate = useNavigate();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const handleForgot= async()=>{
        if(password === confirmPassword)
        {
            const body = {
                email: email,
                new_password:password
            }
            await axios.post(`${baseURL}/forgot_password`, body)
            .then((res)=>{
                alert('Password changed successfully. Login with new password');
                navigate('/login');
            })
            .catch((err)=>{
                console.log(err);
            });
        }
    }
  return (
    <>
    <Nav/>
    <img src="./src/assets/pic14.png" alt="img" id="one"></img>
    <img src="./src/assets/pic15.png" alt="img" id="two"></img>
    <div className="login">
        <h1>Reset Password</h1>
        <div className="email_div item">
            <input type="email" name="email" id="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="password_div item">
            <input type="password" name="password" id="new_password" placeholder='Enter new password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        </div>
        <div className="confirm_div item">
            <input type="password" name="reset_password" id="reset_password" placeholder='Confirm password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} />
        </div>        
        <div className="btn">
            <button id="reset" onClick={handleForgot}>Reset</button>
        </div>
    </div>
    </>
  )
}
