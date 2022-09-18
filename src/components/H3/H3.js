import React from 'react';
import './H3.css';

function H3({
    children,
    style,
}) {
    return <h3 style={ style } className='header-three'>{ children }</h3>
}

export default H3;