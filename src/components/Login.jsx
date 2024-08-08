import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const redirect = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users');
      const users = await response.json();

      const user = users.find(
        user =>
          (user.username === emailOrUsername || user.email === emailOrUsername) &&
          user.password === password &&
          user.active
      );

      if (user) {
        console.log('Login successful');
        // Create a session key and store user information
        const sessionKey = `session_${Date.now()}`;
        sessionStorage.setItem('sessionKey', sessionKey);
        sessionStorage.setItem('username', user.username);

        redirect('/userDashboard');
      } else {
        setErrorMessage('Invalid credentials ');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
    <div className="login">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="loginForm">
          <div className="form-group">
            <label htmlFor="emailOrUsername">Username or Email</label>
            <input
              type="text"
              id="emailOrUsername"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default Login;
