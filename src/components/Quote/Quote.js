import React from 'react';
import './Quote.css';

function Quote({
    children,
    style,
}) {
    return <div style={ style } className='quote'>{ children }</div>;
}

export default Quote;