import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Navstyle.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
    console.log(click)
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <h2 className='name '><Link to="/">CreatiGenius</Link></h2>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item"><Link to="/">Home</Link></li>
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/register">Login/Register</Link></li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click? <CloseIcon/>: <MenuIcon/>}
            {/* <MenuIcon className={click ? "fas fa-bars" : "fas fa-times"}/> */}
          </div>
        </div>
      </nav>
    </>
  )
}

 
