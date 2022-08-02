import React from 'react';
import './fancyborder.css'
const FancyBorder = (props) => {
    return <div className={'border  ' + props.className}>
        {props.children}
    </div>
}
 
export default FancyBorder;