import React, { useState } from 'react'
import '../pages/CSS/LoginSignup.css'
const LogniSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("Login function executed");
    
  }
  const signup = async () => {
    console.log("signup function executed");
    
  }

  return (
    <div className='lognisignup'>
      <div className="lognisignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-field">
          {state==="sign Up"?<input type="text" placeholder='Your Name'/>:<></>}
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password' />
        </div>

        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className='loginsignup-login'>Already have an Account?<span onClick={()=>{setState("Login")}}> Login here</span> </p>
        :<p className='loginsignup-login'>Create an Account?<span onClick={()=>{setState("Sign Up")}} >Click here</span> </p>}
        
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <p>By continueinng, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LogniSignup