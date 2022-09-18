import React, { Children } from 'react';
import './Navigation.css';

function Navigation({
    children,
    style
}) {
   const divChildren = Children.map(children, (child, index) => {
        return child.type !== 'div'
            ? <div>{ child }</div>
            : child;
    });

    return <nav style={ style } className='navigation'>
        { divChildren }
    </nav>;
}

export default Navigation;