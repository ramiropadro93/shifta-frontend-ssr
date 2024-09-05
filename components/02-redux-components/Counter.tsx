// components/02-redux-components/Counter.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import {
    increment,
    decrement,
    incrementByAmount,
} from '../../features/counter/counterSlice';

const Counter = () => {
    const dispatch: AppDispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.value);

    return (
        <div>
            <h2 className='text-base font-semibold'>Contador: {count}</h2>
            <div className="flex gap-5">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch(increment())}
                >
                    Sumar 1
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch(decrement())}
                >
                    Restar 1
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    Sumar 5
                </button>
            </div>
        </div>
    );
};

export default Counter;
