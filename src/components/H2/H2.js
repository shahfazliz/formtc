import React from 'react';
import './H2.css';

function H2({
    children,
    style,
}) {
    return <h2 style={ style } className='header-two'>{ children }</h2>
}

export default H2;