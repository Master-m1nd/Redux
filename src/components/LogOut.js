import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LogOut = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state)=> state.isLoggedIn);

  const handleLogout = () => {
    dispatchFunc({type: 'logOut'});
    window.location.href = '/login';
  }

  return (
    isLoggedIn && <form onSubmit={handleLogout} >
      <button type="submit">Log out</button>
    </form>
  )
}

export default LogOut;