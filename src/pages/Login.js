import { Link } from "react-router-dom";

import "../css/Login.css";

import loginImg from "../img/loginImg.jpg";
import { useEffect, useRef } from "react";


const Login = () => {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  },[])

  return (
    <div className="loginPage">
      <form>
        <section className="loginImage">
          <img src={loginImg} alt="loginImage" />
        </section>
        <section className="loginForm">
          <h3>Nice to see you again</h3>
          <label htmlFor="username">Username:</label>
          <input ref={inputRef} type="text" id="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

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
