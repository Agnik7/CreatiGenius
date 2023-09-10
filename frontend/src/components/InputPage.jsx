import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Nav from './Nav';
import Image from '../assets/pic7.png';
import './InputPageStyle.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { createClient } from 'pexels';
export default function InputPage() {
    const baseURL = import.meta.env.VITE_KEY; 
    const navigate = useNavigate();
    const [topic,setTopic] = useState();
    const [style, setStyle] = useState();
    const [wordLimit, setWordLimit] = useState(0);
    const [tone, setTone] = useState();
    const handleWriting= async()=>{
        const body= {
            topic:topic,
            style: style,
            tone:tone,
            wordLimit:wordLimit
        }
        await axios.post(`${baseURL}/generate`,body)
        .then((res)=>{
            
            const data = {content:res.data[0].content}
            navigate('/content',{state:data});
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    
    <div>
        <Nav/>
        <main className="input-page">

            <section className="image-section">
                <img src={Image} alt="Man Reading" />
            </section>
            <section className="input-section">
                <input type="text" name="topic" id="topic" placeholder='Enter Topic' value={topic} onChange={(e)=>{setTopic(e.target.value)}} />
                <FormControl variant="standard" sx={{ minWidth: 120,backgroundColor:'transparent',borderBottom: '2px solid var(--font-col-accent)'}}>
                    <InputLabel id="demo-simple-select-standard-label">Style</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={style}
                    onChange={(event)=>{setStyle(event.target.value);}}
                    label="Style"
                    >
                    <MenuItem value={'Story'}>Story</MenuItem>
                    <MenuItem value={'Essay'}>Essay</MenuItem>
                    <MenuItem value={'Movie/Play Script'}>Movie/Play Script</MenuItem>
                    <MenuItem value={'Article'}>Article</MenuItem>
                    <MenuItem value={'Poem'}>Poem</MenuItem>
                    <MenuItem value={'Song'}>Song</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{minWidth: 120,backgroundColor:'transparent',borderBottom: '2px solid var(--font-col-accent)' }}>
                    <InputLabel id="demo-simple-select-standard-label">Tone</InputLabel>
                    <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={tone}
                    onChange={(event)=>{setTone(event.target.value);}}
                    label="Tone"
                    >
                    <MenuItem value={'Happy'}>Happy</MenuItem>
                    <MenuItem value={'Sad'}>Sad</MenuItem>
                    <MenuItem value={'Romantic'}>Romantic</MenuItem>
                    <MenuItem value={'Comic'}>Comic</MenuItem>
                    <MenuItem value={'Tragic'}>Tragic</MenuItem>
                    <MenuItem value={'Professional'}>Professional</MenuItem>
                    </Select>
                </FormControl>
                <input type="number" name="word_limit" id="word_limit" placeholder='Word Limit' value={wordLimit} onChange={(e)=>{setWordLimit(e.target.value)}} />
                <button className="start-writing" onClick={handleWriting}>Start Writing</button>

            </section>
        </main>
    </div>
  )
}
