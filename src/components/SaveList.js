import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const SaveList = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const coffee = useSelector(state => state.coffee);
  const sugar = useSelector(state => state.sugar);

  const dispatch = useDispatch();

  const saveData = () => {
    localStorage.setItem('coffee', coffee);
    localStorage.setItem('sugar', sugar);
    dispatch({ type: 'saveData' });
  };

  const clearData = () => {
    localStorage.removeItem('coffee');
    localStorage.removeItem('sugar'); 
    dispatch({ type: 'clearData' });
  }

  return (
    <div className='save'>
      {!isLoggedIn && <p>You must be logged in to save the list.</p>}
      {isLoggedIn && (
        <>
          <button onClick={saveData}>SAVE</button>
          <button onClick={clearData}>CLEAR</button>
        </>
      )}
    </div>
  );
};

export default SaveList;