import React from 'react';
import FancyBorder from './FancyBorder';
import './messageBox.css';
const MessageBox = () => {
    return <FancyBorder className='message-box'>
        <h1>Hello, I am a message</h1>
    </FancyBorder>;
}
 
export default MessageBox;