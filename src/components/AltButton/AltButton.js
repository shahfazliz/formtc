import React from 'react';
import './AltButton.css';

function AltButton({
    children,
    className,
    style,
    transparent,
}) {
    return <button style={ style } className={ `${ className } alt-button ${ transparent ? 'transparent-alt-button' : 'white-alt-button' }` }>
        { children }
    </button>;
}

export default AltButton;