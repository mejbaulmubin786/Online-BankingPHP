import React from 'react'
import './Login.css'
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";


const Login = () => {
  return (
    <div className="container flex align-center justify-center">
      <div className='login-form flex'> 
        <div className="left-box"> 
          <h1>Registration</h1>
          <div className="form-container form-content flex direction-column"> 
            <div className="input-group"> 
                <input type="text" id="username" required /> 
                <label htmlFor="username">Username</label>
            </div>

            <div className="input-group">
                <input type="email" id="email" required />
                <label htmlFor="email">Email</label>
            </div>

            <div className="input-group">
                <input type="password" id="password" required />
                <label htmlFor="password">Password</label>
            </div>

            <button>Registration</button>
          </div>
          
          
          
          <div className="icon-box flex align-center justify-center">
            <span className='icon flex align-center justify-center'>
              <FaGoogle />
            </span>
            <span className='icon flex align-center justify-center'>
              <FaFacebookF />
            </span>
            <span className='icon flex align-center justify-center'>
              <FaGithub />
            </span>
            <span className='icon flex align-center justify-center'>
              <FaLinkedinIn />
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login