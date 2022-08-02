import React from 'react';
import FancyBorder from './FancyBorder';
import './messageBox.css';
const MessageBox = (props) => {
    return <FancyBorder className='message-box'>
        <h1>Hello, I am a message</h1>
        Here Are My Component Details
        Name: {props.details.name} <br />
        I am a {props.details.classType} <br/>
        The name of my Parent is {props.details.parent}
    </FancyBorder>;
}
 
export default MessageBox;