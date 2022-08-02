import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import './note.scss'
const Draft = (props) => {

    const [btnState, setBtnState] = useState(false);


    //Use effects because we want it to re evealuate everytime the props changes
    useEffect(() => {
        if (props.data.length > 2) {
            setBtnState(true);
        }
    }, [props.data]);


    const saveNotes = async (event) => {
        event.preventDefault();

        const response = await axios.post('http://127.0.0.1:8000/api/submit-notes', {
            note: props.data,
        });

        if (response.data.status === 200) {
            swal({
                title: "Good job", text: response.data.message, icon:
                    "success"
            }).then(function () {
                window.location.reload();
            }
            );
        } else {
            swal({
                title: "Error", text: response.data.error, icon:
                    "error"
            }).then(function () {
                window.location.reload();
            }
            );
        }


    }

    return (
        <>
            <ul className='list-of-notes'>
                {props.data.map(draft => <li className='list' key={draft + Math.floor(Math.random() * 10)}>{draft}</li>)}
            </ul>

            {btnState && <button className='save-notes-button' onClick={saveNotes}>Save Notes</button>}

        </>
    );
}

export default Draft;