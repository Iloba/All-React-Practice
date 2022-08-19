import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import Pagination from './Pagination/Pagination';
import './note.scss';
import Loader from './assets/Iphone-spinner-2.gif'
const Note = (props) => {

    const [note, setNote] = useState('');
    const [allNotes, setAllNotes] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);
    const [deleteIds, setDeleteIds] = useState([]);
    const [checked, setChecked] = useState(false);

    const reducer = (state, action) => {
        switch (action.type) {
            case 'checked':
                return [...state, action.payload.id]
            case 'unchecked':
                return state.filter(el => el !== action.payload.id);
            default:
                return state;
        }
    }



    const [ids, dispatch] = useReducer(reducer, []);


    const notesHandler = (event) => {
        setNote(event.target.value);
    }

    //Submit form
    const SubmitForm = (event) => {
        event.preventDefault();
        props.getDraftsHandler(note)
        setNote('');
    }

    //Get all notes as soon as page loads
    useEffect(() => {
        const getNotes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get-notes');
                setAllNotes(response.data.notes);
                setLoading(false);
            } catch (error) {
                swal({
                    title: "Error!",
                    text: 'Something went wrong',
                    icon: "warning",
                });
            }
            // return response.data.notes
        }
        getNotes();
    }, [])

    //Delete By Selecting CheckBoxes
    const checkBox = useRef([]);
    const handleCheckboxChange = (index) => {
        // console.log(checkBox.current[index].id);
        // console.log(checkBox.current);
        if (checkBox.current[index].checked) {
            dispatch({ type: 'checked', payload: { id: checkBox.current[index].id } })
        } else {
            dispatch({ type: 'unchecked', payload: { id: checkBox.current[index].id } })
        }
    }

    //Delete Notes
    const deleteNotes = async () => {
        try {
            const response = await axios.delete('http://127.0.0.1:8000/api/delete-notes', { data: { ids: ids } });
            swal({
                title: "success!",
                text: response.data.success,
                icon: "success",
            });
            window.location.reload();
        } catch (error) {
            swal({
                title: "Error!",
                text: 'Something went wrong',
                icon: "warning",
            });
        }
    }

    //Get Current Posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = allNotes.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //Display the gotten data
    let NotesMarkup = '';
    if (Loading) {
        NotesMarkup = <div className='loader-box'>
            <img src={Loader} className="loader" alt="" />
        </div>
    } else {

        allNotes.length > 0 ? NotesMarkup =
            <ul className='list-div'>
                {currentPost.map((note, index) =>
                    <>
                        <div className='div-that-holds-input-and-list'>
                            <input
                                key={index}
                                type="checkbox"
                                id={note.id}
                                onChange={() => handleCheckboxChange(index)}
                                name="checkbox"
                                ref={(element) => { checkBox.current[index] = element }}
                                className="check-box "
                            />
                            <br />
                            <li key={note.id} className='displayed-notes'>{note.note.slice(0, 60)}......</li>
                        </div>

                    </>
                )}
            </ul> : NotesMarkup = <h1 className='no-notes'>No Notes</h1>
    }

    return (<div className='parent-div'>
        <div className='heading-texts'>
            <h1 className='heading'>Add Notes Today</h1>
            <h1 className='heading'>My Notes</h1>
        </div>
        <div className='form-div'>
            <form onSubmit={SubmitForm} className='form-element'>
                <textarea name="" id="" cols="30" rows="10" onChange={notesHandler} value={note}></textarea>
                <button className='heading'>Add Note</button>
            </form>
            <div className='notes-div'>
                {NotesMarkup}
                <div className='pagination-box'>
                    <Pagination PostsPerPage={postPerPage} totalPosts={allNotes.length} paginate={paginate} />
                </div>
                <button className='delete-btn' onClick={deleteNotes}>Delete</button>
            </div>
        </div>
    </div>);
}

export default Note;