import React from 'react';
import {Link} from 'react-router-dom';
import './Navstyle.css';
export default function Nav() {
  return (
  

    <div>
      <header>
        <nav>
            <span className="name">Creatigenius</span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login/Register</Link></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}

 
