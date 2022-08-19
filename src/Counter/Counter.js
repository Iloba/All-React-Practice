import React, { useState, useReducer } from 'react';
import './counter.scss'
const Counter = () => {
    //Use UseReducer
    //State - Our Initial State given back to us
    //Dispatch - The function we call to update our State given back to us (it is going to call the reducer)
    //{ count: 0} - Our Initial State
    //Reducer - The function used to update our state


    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return { count: state.count + 1 }
            case 'minus':
                return { count: state.count - 1 }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 1 });

    const add = () => {
        dispatch({ type: 'add' })
    }

    const minus = () => {
        dispatch({ type: 'minus' });
    }

    return (<div className='use-reducer'>
        <h2>Understanding use Reducer to build a counter app</h2>
        <div className='counter'>
            <button onClick={minus}>-</button>
            <h2>{state.count}</h2>
            <button onClick={add}>+</button>
        </div>
    </div>);
}

export default Counter;