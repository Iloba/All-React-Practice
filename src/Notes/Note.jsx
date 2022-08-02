import axios from 'axios';
import swal from 'sweetalert';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination/Pagination';
import './note.scss';
const Note = (props) => {

    const [note, setNote] = useState('');
    const [allNotes, setAllNotes] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(4);

    const notesHandler = (event) => {
        setNote(event.target.value);
    }


    //Submit form
    const SubmitForm = (event) => {
        event.preventDefault();


        //Validate Input
        if (note.trim().length === 0) {
            console.log('Error');
            return;

        }

        props.getDraftsHandler(note)
        setNote('');
    }


    //Get all notes as soon as page loads
    useEffect(() => {
        const getNotes = async () => {
            const response = await axios.get('http://127.0.0.1:8000/api/get-notes');

            if (response.data.status === 200) {
                setAllNotes(response.data.notes);
                setLoading(false);
            } else {
                swal({
                    title: "Error!",
                    text: response.data.error,
                    icon: "warning",
                });
            }
        }

        getNotes();
    }, [])


    //Get Current Posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = allNotes.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    //Display the gotten data
    let NotesMarkup = '';
    if (Loading) {
        NotesMarkup = <h1>Loading</h1>
    } else {
        NotesMarkup = <ul>
            {currentPost.map(note => <li key={note.id} className='displayed-notes'>{note.note}</li>)}
        </ul>
    }

    return (<div className='parent-div'>
        <div className='heading-texts'>
            <h1>Add Notes Today</h1>
            <h1>My Notes</h1>
        </div>

        <div className='form-div'>

            <form onSubmit={SubmitForm} className='form-element'>
                <textarea name="" id="" cols="30" rows="10" onChange={notesHandler} value={note}></textarea>
                <button>Add Note</button>
            </form>

            <div className='notes-div'>
                {NotesMarkup}
                <div className='pagination-box'>
                    <Pagination PostsPerPage={postPerPage} totalPosts={allNotes.length} paginate={paginate} />
                </div>
            </div>


        </div>



    </div>);
}

export default Note;