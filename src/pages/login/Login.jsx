import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="container flex align-center justify-center">
      <div className='form-container flex'>
        <div className="left-content">
          <h2>Registration</h2>
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

          <button>Register</button>
        </div>
        <div className="right-content flex align-center justify-center direction-column">
          <h2>Welcome Back!</h2>
          <p>Already have an account?</p>
          <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
