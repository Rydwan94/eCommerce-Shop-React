import { Link } from "react-router-dom";

import "../css/Login.css";

import loginImg from "../img/loginImg.jpg";
import { useEffect, useRef, useState } from "react";


const Login = () => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleUsernameInput = e => setUsernameInput(e.target.value)
  const handlePasswordInput = e => setPasswordInput(e.target.value)

  return (
    <div className="loginPage">
      <form>
        <section className="loginImage">
          <img src={loginImg} alt="loginImage" />
        </section>
        <section className="loginForm">
          <h3>Nice to see you again</h3>
          <label htmlFor="username">Username:</label>
          <input ref={inputRef} type="text" id="username" value={usernameInput} onChange={handleUsernameInput} placeholder="Username..."/>

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={passwordInput} onChange={handlePasswordInput} placeholder="Password..." />

          <button type="submit">Log in</button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </section>
      </form>
    </div>
  );
};

export default Login;
