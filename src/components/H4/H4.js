import React from 'react';
import './H4.css';

function H4({ 
    children,
    style,
}) {
    return <h4 style={ style } className='header-four'>{ children }</h4>
}

export default H4;