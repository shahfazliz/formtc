import React, { Children } from 'react';
import './Text.css';

function Text({ 
    children,
    style,
}) {
    const paddedChildren = Children.map(children, (child, index) => {
        return index > 0 
            ? React.cloneElement(child, {
                className: `${child.props.className || ''} top-spaced`,
            }) 
            : child;
    });
    return <div style={ style } className='text'>{ paddedChildren }</div>;
}

export default Text;