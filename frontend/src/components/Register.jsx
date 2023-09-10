import axios from 'axios';
import React,{useState} from 'react';
import Nav from './Nav';
import './LoginStyle.css';
import {useNavigate} from 'react-router-dom';
export default function Register() {
    const [name,setName] = useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const navigate=useNavigate();
    const handleLoginRoute=()=>
    {
        navigate('/login');
    }
    const handleRegister= async()=>{
        if(password === confirmPassword)
        {
            const body = {
                name: name,
                email: email,
                password: password
            }
            await axios.post('http://localhost:9000/register_user',body)
            .then((res)=>{
                console.log("Registered Successfully");
                navigate('/user_input');
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        console.log("Register")
    }
  return (
    <>
    <Nav/>
    <img src="./src/assets/pic12.png" alt="img" id="one"></img>
    <img src="./src/assets/pic13.png" alt="img" id="two"></img>
    <div className="login">
        <h1>Register</h1>
        <div className="name_div item">
            <input type="text" name="text" id="text" placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
            

        </div>
        <div className="email_div item">
            <input type="email" name="email" id="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            

        </div>
        <div className="password_div item">
            <input type="password" name="password" id="password" placeholder='Enter password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

        </div>
        <div className="confirm_div item">
            <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        </div>
        
        <div className="btn">
            <button id="register" onClick={handleRegister}>Register</button>
        </div>
        <div className="register">
            Already an user? <span className="sign_up" onClick={handleLoginRoute}>Login</span>
        </div>

    </div>
    </>
  )
}
