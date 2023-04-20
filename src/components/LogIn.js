import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LogIn = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const [email, setEmail] = useState('');

  const handleInputChange = e => {
    setEmail(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    dispatch({ type: 'logIn', email });
    localStorage.setItem('email', email);
  };

  return (
    !isLoggedIn && (
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <button type="submit">Log in</button>
      </form>
    )
  );
};

export default LogIn;