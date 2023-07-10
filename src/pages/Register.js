import { Link } from "react-router-dom";

import '../css/Register.css'

import registerImg from '../img/registerImg.jpg'

const Register = () => {
  return (
    <div className="registerPage">
      <form>
        <section className="registerImage">
          <img src={registerImg} alt="registerImage" />
        </section>
        <section className="registerForm">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

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
