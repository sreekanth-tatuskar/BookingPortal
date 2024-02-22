import React from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css'

const LoginPage = () => {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className='login'>
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
    <div className="Footer">
      
      <div className='end'>
      <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#About"   >About</a></li>
            <li><a href="#FAQs"   >FAQs</a></li>
            <li><a href="#contact" >Contact</a></li>
          </ul>
      </div>

    </div>

    </div>
  );
};

export default LoginPage;