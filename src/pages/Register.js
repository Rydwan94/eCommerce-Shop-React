import { Link } from "react-router-dom";

import '../css/Register.css'

import registerImg from '../img/registerImg.jpg'
import { useState } from "react";

const Register = () => {

  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  const handleUsernameInput = e => setUsernameInput(e.target.value)
  const handlePasswordInput = e => setPasswordInput(e.target.value)
  const handleEmailInput = e => setEmailInput(e.target.value)

  return (
    <div className="registerPage">
      <form>
        <section className="registerImage">
          <img src={registerImg} alt="registerImage" />
        </section>
        <section className="registerForm">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={usernameInput} onChange={handleUsernameInput} placeholder="Username..." />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={passwordInput} onChange={handlePasswordInput} placeholder="Password..." />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={emailInput} onChange={handleEmailInput} placeholder="Email..."/>

          <button type="submit">Register</button>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
        </section>
      </form>

    </div>
  );
};

export default Register;
