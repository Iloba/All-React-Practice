import React, { useReducer, useState } from 'react'

export default function Course() {

    const [course, setCourse] = useState('');

    const HandleCourseChange = (event) => {
        setCourse(event.target.value);

    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'add-course':
                return [...state, setCourses(action.payload.name)]
            case 'delete-course': 
                return state.filter(name => name.id !== action.payload.id);
            default:
                return state;
        }
    }

    const setCourses = (name) => {
        return { id: Date.now(), name: name }
    }


    const [state, dispatch] = useReducer(reducer, []);

    const SubmitCourse = (event) => {
        event.preventDefault();

        dispatch({ type: 'add-course', payload: { name: course } })
        setCourse('')
    }

    const DeleteCourse = (id) => {
        dispatch({type: 'delete-course', payload: {id: id}})
    }

    return (
        <div className='use-reducer'>
            <h1>Add Courses Using UseReducer</h1>
            <form onSubmit={SubmitCourse}>
                <input type="text" onChange={HandleCourseChange} placeholder='Enter Course' value={course} />
                <button>Add Course</button>
            </form>

            <div>
                <ul>
                    {state.map((name, index) => <li key={index}>
                        {name.name}  <button onClick={() => DeleteCourse(name.id)}>Delete</button>
                    </li>)}

                   
                </ul>
            </div>
        </div>
    )
}
