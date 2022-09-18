import React from 'react';
import './H1.css';

function H1({ 
    children, 
    style,
}) {
    return <h1 style={ style } className='header-one'>{ children }</h1>
}

export default H1;