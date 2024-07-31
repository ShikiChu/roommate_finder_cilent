import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      email,
      username,
      password,
      active: true
    };

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        const createdUser = await response.json();
        // console.log('User created:', createdUser);

        // update state
        setSuccessMessage('Sign up complete, welcome '+ createdUser.username);
        setEmail('');
        setUsername('');
        setPassword('');
      } else {
        setErrorMessage('Opps, something wrong, please try again.');
      }
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup">
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit} className='signupForm'>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
