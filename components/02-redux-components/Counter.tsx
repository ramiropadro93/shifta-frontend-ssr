// components/02-redux-components/Counter.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { increment, decrement, incrementByAmount } from '../../features/counter/counterSlice';

const Counter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={() => dispatch(increment())}>Sumar 1</button>
      <button onClick={() => dispatch(decrement())}>Restar 1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Sumar 5</button>
    </div>
  );
};

export default Counter;
