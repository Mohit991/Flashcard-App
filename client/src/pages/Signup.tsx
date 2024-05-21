import React, { useState } from 'react'
// import './Signup.css'
const Signup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email: ' + email);
    console.log('Passowrd:' + password);
  }
  return (
    <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                placeholder='Enter Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <label htmlFor='cpassword'>Confirm Password</label>
            <input
                id='cpassword'
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default Signup