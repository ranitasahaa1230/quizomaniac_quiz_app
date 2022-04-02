import React from 'react'
import { Link } from 'react-router-dom'
import "./Auth.css"

export function SignUp() {
  return (
    <div className='section_login'>
        <div className="form-box">
      <div className="button-box">
        <h3 className="toggle-btn">SIGN UP</h3>
      </div>
      <form className="input-group">
      <label className='password-label'>First Name</label>
        <input
          type="text"
          className="input-fields"
          placeholder="First Name"
          required
        />
     <label className='password-label'>Last Name</label>
        <input
          type="text"
          className="input-fields"
          placeholder="Last Name"
          required
        />
     <label className='password-label'>Email Address</label>
        <input
          type="email"
          className="input-fields"
          placeholder="Enter Email Id"
          required
        />
     <label className='password-label'>Password</label>
        <input
          type="password"
          className="input-fields"
          placeholder="Enter Password"
          required
        />
         <div className='checkbox-block'>
        <input type="checkbox" className="check-box" /><span className="check-psswd"
          >I agree to all terms and conditions</span>
        </div>
        <button type="submit" className="submit-loginbtns">REGISTER</button>
        <div className="input-account">
          Already registered?
          <Link to="/not" className="primary-account">Login Here</Link>
        </div>
      </form>
    </div>
    </div>
  )
}