import React from 'react'
import { Link } from 'react-router-dom'
import "./Auth.css"

export function Login() {
  return (
    <div>
      <div className="form-box">
      <div className="button-box">
        <div id="btn"></div>
        <h3 className="toggle-btn">LOGIN</h3>
      </div>
      <form className="input-group login">
      <label className='password-label'>Email Address</label>
      <input type="text" className="input-fields" placeholder="test@gmail.com" required />
     <label className='password-label'>Password</label>
      <input
          type="password"
          className="input-fields"
          placeholder="test1234"
          required
        />
       <div>
       <div className='checkbox-block'>
       <input type="checkbox" className="check-box" />
       <span className="check-psswd"
          >Remember Me</span>
          <Link to="#">
          <span className="forget-psswd">Forgot Your Password?</span>
          </Link>
       </div>
        <button type="submit" className="submit-loginbtns">LOGIN</button>
        <div className="input-account">
          Not a user yet?
            <Link to="/signup" className="primary-account"
            >Create your account</Link>
        </div>
       </div>
      </form>
    </div>
    </div>
  )
}
