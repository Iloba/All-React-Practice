import React, { useReducer, useState } from 'react'

export default function Name() {

    const [name, setName] = useState('');


    const reducer = (state, action) => {
        switch (action.type) {
            case 'add-name':
                return [...state, setNames(action.payload.name)];
            case 'delete-name':
                //    return state.filter(name => name.id !== action.payload.id);
                return state.filter(name => name.id !== action.payload.id);
            // console.log(state[0].id);
            default:
                return state;
        }
    }

    const setNames = (name) => {

        return { id: Date.now(), name: name }

    }

    const [names, dispatch] = useReducer(reducer, []);



    const nameInputHandler = (event) => {
        setName(event.target.value);
    }

    const addNames = (event) => {
        event.preventDefault();
        if (name.trim().length > 0) {
            dispatch({ type: 'add-name', payload: { name: name } })
            setName('');
        }

    }

    const deleteNames = (id) => {
        dispatch({ type: 'delete-name', payload: { id: id } })
    }



    return (
        <div className='use-reducer'>
            <h1>Practicing UseReducer (Add Names)</h1>
            <form onSubmit={addNames}>
                <input onChange={nameInputHandler} type="text" placeholder='Enter Name' id="" value={name} />
                <button>Add Name</button>
            </form>

            <ul>
                {names.map((name, index) => {

                    return <li key={index}>
                        {name.name}
                        <button onClick={() => deleteNames(name.id)}>Delete</button>
                    </li>

                })}
            </ul>

        </div>
    )
}
