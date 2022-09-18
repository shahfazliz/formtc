import React from 'react';
import AltButton from '../AltButton';
import soppingCartIcon from './shopping-cart.png';
import './MyOrderButton.css';

function MyOrderButton({ style }) {
    return <AltButton className='my-order-button' transparent={ true }>
        My Order
        <img src={ soppingCartIcon } />
    </AltButton>;
}

export default MyOrderButton;