import React, { Children, useEffect, useState } from 'react';
import './Navigation.css';

function Navigation({
    children,
    style
}) {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScrolling = () => {
            setScrolling(window.scrollY > 60);
        };

        window.addEventListener('scroll', handleScrolling, { passive: true });

        return () => window.removeEventListener("scroll", handleScrolling);
    }, [scrolling]);

    const divChildren = Children.map(children, (child, index) => {
        return child.type !== 'div'
            ? <div>{ child }</div>
            : child;
    });

    return <React.Fragment>
        <div className={ `black-background ${scrolling ? 'visible' : ''}` }>&nbsp;</div>
        <nav style={ style } className='navigation'>
            { divChildren }
        </nav>
    </React.Fragment>;
}

export default Navigation;