import React,{useState} from 'react';
import Nav from './Nav';
import { useLocation } from 'react-router-dom';
import './OutputPageStyle.css';
import Img from '../assets/final-image.png';
export default function OutputPage() {
  const location = useLocation();
  return (
    <div className='page-container'>
        <Nav/>
        <main className="content-page">
            <section className="image-section">
              <img src={Img} alt="" />
            </section>
            <section className='content-section'>
              <h1 className="heading">Generated Content</h1>
              <textarea name="content" id="content" cols="30" rows="10" value={'value'}></textarea>
              <button className="copy">Copy to Clipboard</button>
            </section>
        </main>

    </div>
  )
}
