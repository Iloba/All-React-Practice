import React, { useRef, useState } from 'react';
const Form = () => {


   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [sex, setSex] = useState('');
    // const [password, setPassword] = useState('');

    const nameRef = useRef('');
    const emailRef = useRef('');
    // const phoneRef = useRef('');
    // const sexRef = useRef('');
    // const passwordRef = useRef('');

  
    const getFormReady = () => {
        setName(nameRef.current.value);
    }

    const HandleEmailSubmission = () => {
        setEmail(emailRef.current.value)
    }
    return (<div>
        {!name ? (<div className='form-group'>
            <label htmlFor="">Name</label> <br />
            <input type="text" placeholder='Enter Name' ref={nameRef} />
            <button onClick={getFormReady}>Next</button>
        </div>) :
            <form className='form-group'>
                <label htmlFor="">Email</label> <br />
                <input type="text"  placeholder='Enter Email' ref={emailRef} />
                <button onClick={HandleEmailSubmission}>Submit</button>
            </form>}



        {/* <div className='form-group'>
            <input type="number" name='phone' placeholder='Enter Phone' ref={phoneRef} />
            <button onClick={getFormReady}>Next</button>
        </div>

        <div className='form-group'>
            <select name="sex" id="" ref={sexRef} >
                <option value="">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <button onClick={getFormReady}>Next</button>
        </div>

        <div className='form-group'>
            <input type="password" name='password' placeholder='Enter Password' ref={passwordRef} />
            <div className='form-group'>
                <button type='submit'>Submit</button>
            </div>
        </div> */}


    </div>);
}

export default Form;