import React from 'react'
import './Sign.css';
import {useState, useEffect} from 'react';
import axios from 'axios';


export default function () {
    // console.log("ajay am here")
    useEffect(() => {
      async function res() {
        let response = await axios.get('http://localhost:5000/')
        console.log(response.data);
      }
      res()
    }, []);
  
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    console.log(email);
    console.log(password);
  
  
    async function handleClick(){
      let response = await axios.post('http://localhost:5000/test/user', {email, password})
      console.log(response.data);
    }
  
  return (
    <>
         <div className="Signpage">
               <h1>Sign Up Here First</h1><br/>
        <input type="text" placeholder="Enter your mail" className="input1" onBlur={(e) => setEmail(e.target.value)}
/><br/>

        <input type="password" placeholder="Enter your password" className="input2"  onBlur={(e) => setPassword(e.target.value)}
/><br/>

        <button className="summit" onClick={handleClick}
>Sign Up</button>

        </div>


        
        
      
    </>
   
  
  )
}



