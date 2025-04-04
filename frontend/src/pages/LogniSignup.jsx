import React from 'react'
import '../pages/CSS/LoginSignup.css'
const LogniSignup = () => {
  return (
    <div className='lognisignup'>
      <div className="lognisignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Adress' />
          <input type="password" placeholder='Password' />
        </div>

        <button>Continue</button>
        <p className='loginsignup-login'>Already have an Account?<span>Login here</span> </p>

        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <p>By continueinng, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LogniSignup