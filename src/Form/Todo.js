import React, { useReducer, useState } from 'react'

export default function Todo() {

    const [name, setName] = useState('');

    const HandleInputChange = (event) => {
        setName(event.target.value);

    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add-todo':
                return [...state, newTodo(action.payload.name)];
            default:
                return state;
        }
    }

    const newTodo = (name) => {
        return { id: Date.now(), name: name }
    }

    //use Reducer for my todos
    const [todo, dispatch] = useReducer(reducer, []);

    const submitForm = () => {
        dispatch({ type: 'add-todo', payload: { name: name } },)
        setName('');
    }







    return (
        <div className='use-reducer'>
            <div className=''>
                <h1>Using useReducer for Todo</h1>
                <input onChange={HandleInputChange} type="text" placeholder='Enter Todo' value={name} />
                <button onClick={submitForm}>Add</button>

                <ul>
                    {todo.map(t => <li>{t.name}</li>)}
                </ul>
            </div>
        </div>
    )
}
