import React from 'react';
import backgroundImage from './Bitmap.png';
import H1 from '../H1';
import MainButton from '../MainButton';
import SubHeader from '../SubHeader';

import './OrderNowSection.css';

function OrderNowSection({ style }) {
    return <section 
        className='order-now-section' 
        style={{ 
            ...style, 
            backgroundImage: `url(${ backgroundImage })`,
    }}>
        <div style={{ textAlign: 'center' }}>
            <SubHeader style={{ color: '#FFFFFF' }}>Design and order your new kitchen online today</SubHeader>
            <H1 style={{ 
                color: '#FFFFFF', 
                textAlign: 'center', 
                maxWidth: '700px', 
                margin: '0 auto'
            }}>
                Bespoke & made to measure handmade kitchen design
            </H1>
            <MainButton style={{ marginTop: '30px' }}>order now</MainButton>
        </div>
    </section>;
}

export default OrderNowSection;