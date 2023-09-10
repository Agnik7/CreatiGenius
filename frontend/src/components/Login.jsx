import axios from 'axios';
import React,{useState} from 'react';
import Nav from './Nav';
import './LoginStyle.css';
import {useNavigate} from 'react-router-dom';
export default function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate=useNavigate();
    const handleRegisterRoute=()=>
    {
        navigate('/register');
    }
    const handleForgotRoute=()=>{
        navigate('/reset');
    }
    const handleLogin = async()=>{
        const body = {
            email: email,
            password: password
        }
        await axios.post('http://localhost:9000/login_user', body)
        .then((res)=>{
            console.log("User logged in succesfully");
            localStorage.setItem('token', res.data.token);
            navigate('/user_input');
        })
        .catch(err=>{
            console.log(err)
        });
    }
  return (
    <>
    <Nav/>
    <img src="./src/assets/pic10.png" alt="img" id="one"></img>
    <img src="./src/assets/pic11.png" alt="img" id="two"></img>
    <div className="login">

        <h1>Login</h1>
        <div className="email_div item">
            <input type="email" name="email" id="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            

        </div>
        <div className="password_div item">
            <input type="password" name="password" id="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        </div>
        
        <div className="forgot">
            
            <span className="new">Forgot Password?<span className="click" onClick={handleForgotRoute}>Click Here</span></span>
        </div>
        <div className="btn">
            <button id="login" onClick={handleLogin}>Login</button>
        </div>
        <div className="register">
            Don't have an account? <span className="sign_up" onClick={handleRegisterRoute}>Register</span>
        </div>

    </div>
    </>
  )
}
