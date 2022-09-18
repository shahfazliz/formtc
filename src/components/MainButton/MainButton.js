import React from 'react';
import './MainButton.css';

function MainButton({ style, children }) {
    return <button style={ style } className='main-button'>{ children }</button>
}

export default MainButton;