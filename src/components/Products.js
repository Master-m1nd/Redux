import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

  const coffee = useSelector((state) => state.coffee)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const dispatchFunc = useDispatch();

  const increment = () => {
    dispatchFunc({ type: 'incrementCoffee' })
  }
  const decrement = () => {
    dispatchFunc({ type: 'decrementCoffee' })
  }

  const increase = () => {
    dispatchFunc({ type: 'increase', number: 10 })
  }

  const sugar = useSelector((state) => state.sugar);
  const dispatchFuncSugar = useDispatch();

  const incrementSugar = () => {
    dispatchFuncSugar({ type: 'incrementSugar' })
  }
  const decrementSugar = () => {
    dispatchFuncSugar({ type: 'decrementSugar' })
  }

  const increaseSugar = () => {
    dispatchFuncSugar({ type: 'increaseSugar', number: 10 })
  }

  return (
    <>
      <div className='product'>
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {isLoggedIn && <button onClick={increase}>+10</button>}
      </div>
      <div className='product'>
        <span>{`Sugar: ${sugar}`}</span>
        <button onClick={incrementSugar}>+</button>
        <button onClick={decrementSugar}>-</button>
        {isLoggedIn && <button onClick={increaseSugar}>+10</button>}
      </div>
    </>
  )
}

export default Products;