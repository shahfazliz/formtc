import React from 'react';
import './H5.css';

function H5({
    children,
    style,
}) {
    return <h5 style={ style } className='header-five'>{ children }</h5>
}

export default H5;