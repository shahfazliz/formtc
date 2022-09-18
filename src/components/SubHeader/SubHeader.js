import React from 'react';
import './SubHeader.css';

function SubHeader({ 
    children,
    style,
}) {
    return <p className='sub-header' style={ style }>{ children }</p>;
}

export default SubHeader;