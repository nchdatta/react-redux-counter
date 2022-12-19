import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/reducers/counterSlice';
import './Counter.css';

const Counter = () => {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='counter-wrap'>
            <div className='counter-title'>Simple Counter</div>
            <div className='counter-content'>
                <h2 style={{ marginBottom: '2rem' }}>Counter: {counter}</h2>

                <button className='btn btn-primary' onClick={() => dispatch(increment())}>Increment +</button>
                <button className='btn btn-secondary' onClick={() => dispatch(decrement())}>Decrement -</button>
            </div>
        </div>
    );
};

export default Counter;